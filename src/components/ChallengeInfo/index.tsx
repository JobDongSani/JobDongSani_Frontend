import React, { useEffect, useState } from 'react';
import styled from '@emotion/styled';
import { AiFillHeart, AiOutlineHeart } from 'react-icons/ai';
import { useNavigate, useParams } from 'react-router';
import challenge from '../../libs/api/challenge';
import CommentList from '../CommentList';

interface IChallengeInfo {
    backgroundImage: string
    content: string
    endDate: string
    isLike: boolean
    likeCount: number
    memberCount: number
    startDate: string
    title: string
}

const ChallengeInfo = () => {
    const navigate = useNavigate()
    const { id } = useParams();
    const [ isHeart, setIsHeart ] = useState(false)
    const [ like, setLike ] = useState(0)
    const [ challengeData, setChallengeData ] = useState<any>()
    const image = 'https://s3-projecflow-1.s3.amazonaws.com/images/ace92c40-4ddf-4f6b-9e01-64aa5014f9c4afb0772d-9f57-11ea-8588-48df37269fd0_10.jpg'
    const profile = 'https://s3-projecflow-1.s3.amazonaws.com/images/b7290263-31ba-437a-b382-5628cad0dc92Lovepik_com-400752395-vs-war.png'

    useEffect(()=> {
        challenge.getChallengeInfo(Number(id))
        .then((res) => {
            setChallengeData(res.data.data)
            setIsHeart(res.data.data.isLike)
            setLike(res.data.data.likeCount)
        })
        .catch((err) => {
            console.log(err)
        })
    },[id])

    const onHeartClick = () => {
        console.log('asd')
        challenge.putHeart(Number(id))
        .then((res) => {
            console.log(res)
            !isHeart ? setLike(like+1) : setLike(like-1)
            setIsHeart(!isHeart)
        })
        .catch((err) => {
            console.log(err)
        })
    }

  return (
    <>
    {
        challengeData && 
        <ChallengeInfoWrapper>
            <ChallengeImage>
                <img src={challengeData.backgroundImage} alt="이미지"/>
            </ChallengeImage>
            <ChallengeInfoBox>
                <ChallengeRow>
                    <ChallengeType>제목</ChallengeType>
                    <ChallengeContent>
                        <div>{challengeData.title}</div>
                    </ChallengeContent>
                </ChallengeRow>
                <ChallengeRow>
                    <ChallengeType>작성자</ChallengeType>
                    <ChallengeContent>
                        <img src={challengeData.profileImage} alt="사진" />
                        <div>{challengeData.name}</div>
                    </ChallengeContent>
                </ChallengeRow>
                <ChallengeRow>
                    <ChallengeType>내용</ChallengeType>
                    <ChallengeContent>
                        <div>{challengeData.content}</div>
                    </ChallengeContent>
                </ChallengeRow>
                <ChallengeRow>
                    <ChallengeType>시작일</ChallengeType>
                    <ChallengeContent>
                        <div>{challengeData.startDate}</div>
                    </ChallengeContent>
                </ChallengeRow>
                <ChallengeRow>
                    <ChallengeType>종료일</ChallengeType>
                    <ChallengeContent>
                        <div>{challengeData.endDate}</div>
                    </ChallengeContent>
                </ChallengeRow>
                <ChallengeRow>
                    <ChallengeType>참여자수</ChallengeType>
                    <ChallengeContent>
                        <div>{challengeData.memberCount}</div>
                    </ChallengeContent>
                </ChallengeRow>
                <ChallengeRow>
                    <ChallengeType>
                        <div onClick={onHeartClick} style={{cursor: "pointer"}}>
                            {
                                isHeart ? 
                                    <AiFillHeart />
                                : <AiOutlineHeart />
                            }
                        </div>
                        <div>{like}</div>
                    </ChallengeType>
                    <ChallengeContent>
                        <button onClick={() => navigate(`/cardAdd/comment-post/${id}`)}>결과 공유 하기</button>
                    </ChallengeContent>
                </ChallengeRow>
            </ChallengeInfoBox>
        </ChallengeInfoWrapper>  
    }
        <CommentList id={Number(id)}/>
    </>
  );
}

export default ChallengeInfo;

const ChallengeInfoWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`

const ChallengeImage = styled.div`
    height: 550px;
    box-sizing: border-box;
    margin: 25px;
    img{
        width: 100%;
        height: 100%;
        object-fit: contain;
    }
`

const ChallengeInfoBox = styled.div`
    width: 450px;
    height: 100%;
    max-height: 550px;
    box-sizing: border-box;
    margin: 25px;
    border: 1px solid gray;
    border-radius: 10px;
    padding: 20px;
`

const ChallengeRow = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    margin-bottom: 30px;
`

const ChallengeType = styled.div`
    display: flex;
    align-items: center;
    width: 30%;
    font-size: 20px;
    font-weight: bold;
    div{
        display: flex;
        align-items: center;
    }
    svg{
        margin-right: 15px;
    }
`

const ChallengeContent = styled.div`
    width: 70%;
    font-size: 18px;
    display: flex;
    align-items: center;
    white-space: pre-wrap;
    div{
        max-height: 155px;
        overflow: auto;
    }
    img{
        border-radius: 50%;
        margin-right: 5px;
        width: 23px;
        height: 23px;
    }
    button{
        width: 100%;
        height: 45px;
        color: white;
        background-color: #7190FF;
        border: none;
        border-radius: 10px;
        font-size: 16px;
        cursor: pointer;
    }
`
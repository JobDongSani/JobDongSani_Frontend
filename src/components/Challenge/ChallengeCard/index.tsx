import React, { FC, useState } from 'react';
import styled from '@emotion/styled'
import { AiFillHeart, AiOutlineHeart } from 'react-icons/ai'
import { useNavigate } from 'react-router';
import challenge from '../../../libs/api/challenge';

interface Props {
    content: string
    endDate:string
    id: number
    memberCount: number
    name: string
    profileImage: string | null
    startDate: string
    title: string
    username: string,
    likeCount: number,
    backgroundImage: string,
    isLike: boolean
}

const ChallengeCard: FC<Props> = ({content, endDate, id, memberCount, name, profileImage, startDate, title, username, likeCount, backgroundImage, isLike }) => {
    const navigate = useNavigate()
    const [ isHeart, setIsHeart ] = useState(isLike)
    const image = 'https://s3-projecflow-1.s3.amazonaws.com/images/ace92c40-4ddf-4f6b-9e01-64aa5014f9c4afb0772d-9f57-11ea-8588-48df37269fd0_10.jpg'
    const defaultImage = 'https://s3-projecflow-1.s3.amazonaws.com/images/60faa710-c21b-424b-a663-0407f905d413img.jpeg'

    const onHeartClick = () => {
        challenge.putHeart(id)
        .then((res) => {
            console.log(res.data.data)
            setIsHeart(!isHeart)
        })
        .catch((err) => {
            console.log(err)
        })
    }


  return (
    <>
        <ChallengeCardWrapper onClick={()=>navigate(`/challenge/${id}`)}>
            <img src={backgroundImage} alt="이미지" />
            <CardTitle>{title}</CardTitle>
            <CardDescription>
                {content}
            </CardDescription>
            <CardInfo>
                <ProfileBox>
                    <img src={profileImage===null ? defaultImage : profileImage} alt="이미지"/>
                    <div>{name}</div>
                </ProfileBox>
                <HeartBox>
                    <div>{likeCount}명</div>
                    <div onClick={onHeartClick}>
                        {
                            isLike ? <AiFillHeart /> : <AiOutlineHeart />
                        }
                    </div>
                </HeartBox>
            </CardInfo>
        </ChallengeCardWrapper>
    </>
  );
}

export default ChallengeCard;

const ChallengeCardWrapper = styled.div`
    width: 300px;
    box-sizing: border-box;
    height: 400px;
    margin: 15px auto;
    border-radius: 10px;
    cursor: pointer;
    img{
        width: 300px;
        height: 200px;
        border-radius: 10px;
        object-fit: cover;
    }
`

const CardTitle = styled.div`
    font-size: 16px;
    padding: 5px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    display: block;
    font-weight: bold;
`

const CardDescription = styled.div`
    height: 50px;
    font-size: 14px;
    padding: 5px;
    overflow: hidden;
    text-overflow: ellipsis;
    display: block;
`

const CardInfo = styled.div`
    display: flex;
    justify-content: space-between;
`

const ProfileBox = styled.div`
    display: flex;
    padding: 5px;
    align-items: center;
    img{
        width: 30px;
        height: 30px;
        border-radius: 50%;
    }
    div{
        margin-left: 5px;
        font-size: 16px;
    }
`

const HeartBox = styled.div`
    display: flex;
    padding: 5px;
    align-items: center;
    z-index: 99;
    svg {
        margin-left: 5px;
        width: 23px;
        height: 23px;
    }
`
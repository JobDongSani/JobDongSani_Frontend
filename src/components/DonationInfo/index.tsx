import React, { useEffect, useState } from 'react';
import styled from '@emotion/styled';
import { AiFillHeart, AiOutlineHeart } from 'react-icons/ai';
import { useParams } from 'react-router';
import donation from '../../libs/api/donation';
import CommentList from '../CommentList';

interface IDonationInfo {
    id: number,
    title: string,
    contents: string,
    contact: string,
    location: string,
    imagePath: string,
    writer: string
}

const DonationInfo = () => {
    const { id } = useParams();
    console.log(id)
    const [ isHeart, setIsHeart ] = useState(false)
    const [ donationData, setDonationData ] = useState<any>()
    const defaultImage = 'https://s3-projecflow-1.s3.amazonaws.com/images/60faa710-c21b-424b-a663-0407f905d413img.jpeg'
    

    useEffect(()=> {
        donation.getDonationInfo(Number(id))
        .then((res) => {
            setDonationData(res.data.data)
            setIsHeart(res.data.data.isLike)
        })
        .catch((err) => {
            console.log(err)
        })
    },[id])

  return (
    <>
    {
        donationData && 
        <DonationInfoWrapper>
            <DonationImage>
                <img src={donationData.imagePath} alt="이미지"/>
            </DonationImage>
            <DonationInfoBox>
                <DonationRow>
                    <DonationType>제목</DonationType>
                    <DonationContent>
                        <div>{donationData.title}</div>
                    </DonationContent>
                </DonationRow>
                <DonationRow>
                    <DonationType>작성자</DonationType>
                    <DonationContent>
                        <img src={defaultImage} alt="사진" />
                        <div>{donationData.writer}</div>
                    </DonationContent>
                </DonationRow>
                <DonationRow>
                    <DonationType>내용</DonationType>
                    <DonationContent>
                        <div>{donationData.contents}</div>
                    </DonationContent>
                </DonationRow>
                <DonationRow>
                    <DonationType>주소</DonationType>
                    <DonationContent>
                        <div>{donationData.location}</div>
                    </DonationContent>
                </DonationRow>
                <DonationRow>
                    <DonationType>연락처</DonationType>
                    <DonationContent>
                        <div>{donationData.contact}</div>
                    </DonationContent>
                </DonationRow>
            </DonationInfoBox>
        </DonationInfoWrapper>  
    }
    </>
  );
}

export default DonationInfo;

const DonationInfoWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
`

const DonationImage = styled.div`
    width: 750px;
    height: 550px;
    box-sizing: border-box;
    margin: 25px;
    img{
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
`

const DonationInfoBox = styled.div`
    width: 450px;
    height: 100%;
    max-height: 550px;
    box-sizing: border-box;
    margin: 25px;
    border: 1px solid gray;
    border-radius: 10px;
    padding: 20px;
`

const DonationRow = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    margin-bottom: 30px;
`

const DonationType = styled.div`
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

const DonationContent = styled.div`
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
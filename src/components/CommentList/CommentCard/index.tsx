import React, { FC } from 'react';
import styled from '@emotion/styled'
import { useNavigate } from 'react-router';
import Loading from '../../../libs/style/Loading';

interface Props {
    profileImage: string
    content: string
    endDate: string
    imageUrl: string
    username: string
    startDate: string
    title: string
    name: string
}


const CommentCard: FC<Props> = ({title, content, endDate, profileImage, imageUrl, name, startDate}) => {

  return (
    <>
        <CommentCardWrapper>
            <img src={imageUrl} alt="이미지" />
            <CardTitle>{title}</CardTitle>
            <CardDescription>
                {content}
            </CardDescription>
            <div>시작일 : {startDate}</div>
            <div>마감일 : {endDate}</div>
            <ProfileBox>
                <img src={profileImage} alt="이미지"/>
                <div>{name}</div>
            </ProfileBox>
        </CommentCardWrapper>
    </>
  );
}

export default CommentCard;

const CommentCardWrapper = styled.div`
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

const ContactBox = styled.div`
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
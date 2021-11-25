import React, { FC } from 'react';
import styled from '@emotion/styled'
import { useNavigate } from 'react-router';

interface Props {
    id: number,
    title: string,
    contents: string,
    contact: string,
    imagePath: string,
    writer: string
}

const DonationCard: FC<Props> = ({id, title, contents, contact, imagePath, writer}) => {
    const navigate = useNavigate()
    const image = 'https://s3-projecflow-1.s3.amazonaws.com/images/ace92c40-4ddf-4f6b-9e01-64aa5014f9c4afb0772d-9f57-11ea-8588-48df37269fd0_10.jpg'
    const defaultImage = 'https://s3-projecflow-1.s3.amazonaws.com/images/60faa710-c21b-424b-a663-0407f905d413img.jpeg'


  return (
    <>
        <DonationCardWrapper >
            <img src={imagePath} alt="이미지" />
            <CardTitle>{title}</CardTitle>
            <CardDescription>
                {contents}
            </CardDescription>
            <ProfileBox>
                <img src={defaultImage} alt="이미지"/>
                <div>{writer}</div>
            </ProfileBox>
            <ContactBox>
                연락처 : {contact}
            </ContactBox>
        </DonationCardWrapper>
    </>
  );
}

export default DonationCard;

const DonationCardWrapper = styled.div`
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
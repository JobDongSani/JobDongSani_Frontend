import React, { useState } from 'react';
import styled from '@emotion/styled'
import { AiFillHeart, AiOutlineHeart } from 'react-icons/ai'

const ChallengeCard = () => {
    const [ isHeart, setIsHeart ] = useState(false)
    const image = 'https://s3-projecflow-1.s3.amazonaws.com/images/ace92c40-4ddf-4f6b-9e01-64aa5014f9c4afb0772d-9f57-11ea-8588-48df37269fd0_10.jpg'
    const profile = 'https://s3-projecflow-1.s3.amazonaws.com/images/b7290263-31ba-437a-b382-5628cad0dc92Lovepik_com-400752395-vs-war.png'


  return (
    <>
        <ChallengeCardWrapper>
            <img src={image} alt="이미지" />
            <CardTitle>정크아티스트에게 패트병 기부합니다!!</CardTitle>
            <CardDescription>
                원래 사용하려고 샀다가 필요가 없어져서 팔게 됬습니다.상태는 상이고요 물품 하자 있을시 감가 해드립니다.
                원래 사용하려고 샀다가 필요가 없어져서 팔게 됬습니다.상태는 상이고요 물품 하자 있을시 감가 해드립니다.
            </CardDescription>
            <CardInfo>
                <ProfileBox>
                    <img src={profile} alt="이미지"/>
                    <div>한준호</div>
                </ProfileBox>
                <HeartBox>
                    <div>5명</div>
                    <div onClick={()=>setIsHeart(!isHeart)}>
                        {
                            isHeart ? <AiFillHeart /> : <AiOutlineHeart />
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
    svg {
        margin-left: 5px;
        width: 23px;
        height: 23px;
    }

`
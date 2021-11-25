import styled from '@emotion/styled';
import React from 'react';
import Slider from "react-slick";
import {BsFillArrowRightCircleFill, BsFillArrowLeftCircleFill} from 'react-icons/bs'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


const ChallengeSlide = () => {
    const defaultImage = 'https://s3-projecflow-1.s3.amazonaws.com/images/60faa710-c21b-424b-a663-0407f905d413img.jpeg'
    const settings = {
        infinite: true,
        slidesToShow: 5,
        slidesToScroll: 1,
        autoplay: true,
        speed: 1000,
        autoplaySpeed: 2000,
        pauseOnHover: true,
        arrows: true,
        prevArrow: <BsFillArrowLeftCircleFill size={40}/>,
        nextArrow: <BsFillArrowRightCircleFill size={40}/>
    };
  
  
    
  return (
    <>  
        <Title>
            <span>인기 챌린지</span> | 현재 진행 중인 인기 챌린지를 소개합니다.
        </Title>
        <ChallengeSlider>
            <StyledSlider {...settings}>
                {
                    Array(20).fill(-1).map((i, index: any)=> {
                        return (
                            <ChallengeBanner key={index}>
                                <img src={defaultImage} alt="이미지"/>
                                <div>힘내라 챌린지</div>
                            </ChallengeBanner>
                        )
                    })
                }
            </StyledSlider>
        </ChallengeSlider>
    </>
  );
}

export default ChallengeSlide;

const Title = styled.div`
    width: 1000px;
    margin: 0 auto;
    font-size: 16px;
    color: gray;
    margin-bottom: 30px;
    span{
        font-size: 20px;
        color: #000000
    }
`

const ChallengeSlider = styled.div`
    width: 1000px;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: center;
`

const StyledSlider = styled(Slider)`
    .slick-slider{
        width: 1000px;
        display: flex;
        align-items: center;
    }
    .slick-list{
        width: 1000px;
    }
    .slick-track{
        width: 1000px;
    }
    .slick-slide { 
        width: 160px;
        display: inline-block; 
        display: flex;
        align-items: center;
        justify-content: center;
    }
    .slick-slide div{
        width: 160px;
      outline: none; // 슬라이드 클릭시 파란선을 제거하기 위해서 작성
    }
    .slick-active{
        display: flex;
        align-items: center;
        justify-content: center;
    }
    .slick-arrow {
        color: black;
        width: 30px;
        height: 30px;
        display: block;
    }
`;


const ChallengeBanner = styled.div`
    width: 160px;
    height: 180px;
    display: flex;
    align-items: center;
    text-align: center;
    justify-content: space-between;
    img{
        width: 160px;
        height: 160px;
        border-radius: 50%;
    }
    div{
        margin-top: 10px;
        width: 150px;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        display: block;
        font-weight: bold;
    }
`
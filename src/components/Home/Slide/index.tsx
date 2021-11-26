import styled from '@emotion/styled';
import React, { useEffect, useState } from 'react';
import Slider from 'react-slick';
import challenge from '../../../libs/api/challenge';

const Slide = () => {
    const [ imageUrl, setImageUrl ] = useState([])

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
      };

    useEffect(() => {
        challenge.getChallengeList(0, 'NEW')
        .then((res) => {
            console.log(res.data.data.responses)
            setImageUrl(res.data.data.responses)
        })
    }, [])
  
    return (
        <>
        <SliderWrapper>
            <Slider {...settings}>
                {
                    imageUrl.map((i: any, index: any) => {
                        return (
                            <SliderColumns key={i.id}>
                                <img src={i.backgroundImage} alt="이미지"/>
                            </SliderColumns>
                        )
                    })
                }
            </Slider>
        </SliderWrapper>
        </>
    );
}

export default Slide;

const SliderWrapper = styled.div`
    width: 100%;
    height: 550px;
    margin-bottom: 100px;
    .slick-slide { 
        width: 160px;
        display: inline-block; 
        display: flex;
        align-items: center;
        justify-content: center;
        background: whitesmoke;
    }
    .slick-slide div{
        outline: none;
    }
`

const SliderColumns = styled.div`
    box-sizing: content-box;
    width: 100%;
    height: 550px;
    display: flex;
    img{
        height: 100%;
        object-fit: contain;
    }
`
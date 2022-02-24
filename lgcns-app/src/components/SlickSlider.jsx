import React, { Component } from "react";
import Slider from "react-slick";
import styled from "styled-components";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";


const SlickSlider = ({ data, handleRen }) => { //부모 컴포넌트에서 받은 state와 method

  //settings 부분, 슬라이더의 기능을 조정할 수 있다.
  const settings = {
    dots: false,  // 점은 안 보이게
    infinite: true, // 무한으로 즐기게
    speed: 500,
    slidesToShow: 3, //3장씩 보이게 해주세요
    slidesToScroll: 1, //1장씩 넘어가세요
    
    responsive: [ // 반응형 웹 구현 옵션
      {
          breakpoint: 1200, // 화면 사이즈 1200px
          settings: {
            slidesToShow: 3,
          }
      },
      {
        breakpoint: 1023,
        settings: {
          slidesToShow: 3
        }
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1
        }
      }
    ]
  };
  return (
      <Slider {...settings}> 
        <div>
         <h3>dffdfdf1</h3>
         <img src={require('../assets/main-thum-1.png')}/>
        </div>
        <div>
         <h3>2</h3>
         <img src={require('../assets/main-thum-2.png')}/>
        </div>
        <div>
         <h3>3</h3>
         <img src={require('../assets/main-thum-3.png')}/>
        </div>
      </Slider>
  );
};

export default SlickSlider;
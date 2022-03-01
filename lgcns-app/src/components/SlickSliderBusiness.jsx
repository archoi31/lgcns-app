import React, { Component } from "react";
import Slider from "react-slick";
import styled from "styled-components";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import icon1 from "../assets/business-ic-1.svg";
import icon2 from "../assets/business-ic-2.svg";
import icon3 from "../assets/business-ic-3.svg";
import icon4 from "../assets/business-ic-4.svg";
import icon5 from "../assets/business-ic-5.svg";

const SlickSliderBusiness = ({ data, handleRen }) => {
  //부모 컴포넌트에서 받은 state와 method

  //settings 부분, 슬라이더의 기능을 조정할 수 있다.
  const settings = {
    dots: false, // 점은 안 보이게
    infinite: false, // 무한으로 즐기게
    speed: 500,
    slidesToShow: 4, //3장씩 보이게 해주세요
    slidesToScroll: 1, //1장씩 넘어가세요
    responsive: [
      // 반응형 웹 구현 옵션
      {
        breakpoint: 1200, // 화면 사이즈 1200px
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 1023,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };
  return (
    <Slider {...settings}>
      <div>
        <h3>Prototyping</h3>
        <img src={icon1} />
        <h4>01</h4>
        <p>DX Consulting Service를 제공합니다.</p>
      </div>
      <div>
        <h3>Prototyping</h3>
        <img src={icon2} />
        <h4>02</h4>
        <p>비즈니스 솔루션 Prototyping 기획 Service를 제공합니다.</p>
      </div>
      <div>
        <h3>Build and prove</h3>
        <img src={icon3} />
        <h4>03</h4>
        <p>비즈니스 애플리케이션 개발 Service를 제공합니다.</p>
      </div>
      <div>
        <h3>Scaled modernization</h3>
        <img src={icon4} />
        <h4>04</h4>
        <p>비즈니스 애플리케이션 확장 Service를 제공합니다.</p>
      </div>
      <div>
        <h3>Scaled modernization</h3>
        <img src={icon5} />
        <h4>05</h4>
        <p>조직 변화 관리 Service를 제공합니다.</p>
      </div>
    </Slider>
  );
};

export default SlickSliderBusiness;

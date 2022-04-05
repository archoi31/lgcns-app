import React, { Component } from "react";
import Slider from "react-slick";
import styled from "styled-components";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "block",
      }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "block",
      }}
      onClick={onClick}
    />
  );
}

const SlickSlider = ({ data, handleRen }) => {
  //부모 컴포넌트에서 받은 state와 method

  //settings 부분, 슬라이더의 기능을 조정할 수 있다.
  const settings = {
    dots: false, // 점은 안 보이게
    infinite: true, // 무한으로 즐기게
    speed: 500,
    slidesToShow: 3, //3장씩 보이게 해주세요
    slidesToScroll: 1, //1장씩 넘어가세요
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
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
        <div className="txt-con">
          <span>H 금융사</span>
          <p>소비 포인트 플랫폼을 소개합니다. 소비 포인트 플랫폼을…</p>
        </div>
        <div className="img-con">
          <img src={require("../assets/main-thum-1.png")} />
          <div className="img-overlay"><p className="case-img-description">파일럿 시스템을 함께 만들면서-S2S-Application Modernization에 필요한 기술 습득</p></div>
        </div>
      </div>
      <div>
        <div className="txt-con">
          <span>L 그룹사</span>
          <p>방문 포털 시스템</p>
        </div>
        <div className="img-con">
          <img src={require("../assets/main-thum-2.png")} />
          <div className="img-overlay"><p className="case-img-description">파일럿 시스템을 함께 만들면서-S2S-Application Modernization에 필요한 기술 습득</p></div>
        </div>
      </div>
      <div>
        <div className="txt-con">
          <span>L 금융사</span>
          <p>긱 이코노미 플랫폼</p>
        </div>
        <div className="img-con">
          <img src={require("../assets/main-thum-3.png")} />
          <div className="img-overlay"><p className="case-img-description">파일럿 시스템을 함께 만들면서-S2S-Application Modernization에 필요한 기술 습득</p></div>
        </div>
      </div>
      <div>
        <div className="txt-con">
          <span>H 금융사</span>
          <p>소비 포인트 플랫폼을 소개합니다. 소비 포인트 플랫폼을…</p>
        </div>
        <div className="img-con">
          <img src={require("../assets/main-thum-1.png")} />
          <div className="img-overlay"><p className="case-img-description">파일럿 시스템을 함께 만들면서-S2S-Application Modernization에 필요한 기술 습득</p></div>
        </div>
      </div>
      <div>
        <div className="txt-con">
          <span>L 그룹사</span>
          <p>방문 포털 시스템</p>
        </div>
        <div className="img-con">
          <img src={require("../assets/main-thum-2.png")} />
          <div className="img-overlay"><p className="case-img-description">파일럿 시스템을 함께 만들면서-S2S-Application Modernization에 필요한 기술 습득</p></div>
        </div>
      </div>
      <div>
        <div className="txt-con">
          <span>L 금융사</span>
          <p>긱 이코노미 플랫폼</p>
        </div>
        <div  className="img-con">
          <img src={require("../assets/main-thum-3.png")} />
          <div className="img-overlay"><p className="case-img-description">파일럿 시스템을 함께 만들면서-S2S-Application Modernization에 필요한 기술 습득</p></div>
        </div>
      </div>
    </Slider>
  );
};

export default SlickSlider;

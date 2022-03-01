import React from "react";
import { FullPage, Slide } from 'react-full-page';
import '../style/business.scss';
import Footer from "../components/Footer";
import SlickSliderBusiness from "../components/SlickSliderBusiness";

function Business(props) {
  return (
    <FullPage controls controlsProps={{className: 'fullpage-controls'}} className="fullpage">
    <Slide className="fullpage-slide business-slide1">
      <h1 className="title1">
          <span className="color-primary">변화의 시작</span>, Launch센터와 함께 하는 DX 여정
      </h1>
      <p className="txt-con">고객의 DX 여정에 맞춰 Incubation부터 구체화, 구현, 확장까지 모든 서비스 오퍼링을 제공합니다. 고객의 Need에 따라 서비스를 개별적으로 선택할 수 있습니다.</p>
      <button className="start-btn">시작하기</button>
        <SlickSliderBusiness/>
    </Slide>
    <Slide className="fullpage-slide business-slide2">
     
    <Footer />
    </Slide>
  </FullPage>
    );
}

export default Business;
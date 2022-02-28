import React from "react";
import { FullPage, Slide } from 'react-full-page';
import '../style/about.scss';

function About(props) {
  console.log(props);
  return (
    <FullPage controls controlsProps={{className: 'fullpage-controls'}} className="fullpage">
    <Slide className="fullpage-slide slide1">
      <h1 className="title1"><span className="color-primary">Launch센터</span>는 
      AWS와 사업 및 기술 협업을 통해 
       AM시장을 선도하는 파트너입니다.
      </h1>
      <p className="txt-con">AWS와 Pre-Sales부터 Delivery까지 함께하는 Partner!
      AWS와 LG CNS의 협업을 통해 고객에게 최고의 가치를 제공할 수 있습니다. </p>
    </Slide>
    <Slide className="fullpage-slide slide2">
        <h2>about2</h2>
    </Slide>
  </FullPage>
    );
}

export default About;
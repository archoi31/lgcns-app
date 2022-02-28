import React from "react";
import { FullPage, Slide } from 'react-full-page';
import '../style/about.scss';

function About(props) {
  console.log(props);
  return (
    <FullPage controls controlsProps={{className: 'fullpage-controls'}} className="fullpage">
    <Slide className="fullpage-slide about-slide1">
      <h1 className="title1"><span className="color-primary">Launch센터</span>는 
      AWS와 사업 및 기술 협업을 통해 
       AM시장을 선도하는 파트너입니다.
      </h1>
      <p className="txt-con">AWS와 Pre-Sales부터 Delivery까지 함께하는 Partner!
      AWS와 LG CNS의 협업을 통해 고객에게 최고의 가치를 제공할 수 있습니다. </p>
      <div className="aws-wrap">
        <div className="aws-img">
          <ul className="aws-list">
            <li>다양한 고객 채널</li>
            <li>고품질의 서비스와 솔루션</li>
            <li>Global BP</li>
            <li>Architecture Knowledge</li>
          </ul>
          <ul className="aws-list">
            <li>Global 수준의 AM 역량</li>
            <li>최대의 AM 구축 사례</li>
            <li>대규모 SI 구축사업의 노하우</li>
            <li>다양한 Industry 사업 경험</li>
          </ul>
        </div>
      </div>
    </Slide>
    <Slide className="fullpage-slide about-slide2">
      <h1 className="title1">Launch 센터에서 제공하는 기술 서비스 영역</h1>
      <div className="about-wrap">
        <div className="box">
          <h2>Modern Web 개발</h2>
          <p>Cloud Managed 서비스 및<br/>
            오픈소스 S/W를 최대한 활용한<br/> 
            Modern Web 개발
          </p>
        </div>
        <div className="box">
          <h2>DevOps 체계 구축</h2>
          <p>AM 서비스에 최적화된 클라우드<br/> 
          아키텍처 설계/구축 및 IaC,<br/> 
          GitOps 적용하여 DevOps 체계 구축
          </p>
        </div>
        <div className="box">
          <h2>Test Automation 적용</h2>
          <p>개발부터 배포까지의 全과정을<br/> 
            Test Automation을 적용하여<br/> 
            품질 확보와 가시화/자동화
          </p>
        </div>
      </div>
      <h1 className="title1">최고의 Application Modernization 구축 역량</h1>
      <p className="txt-con">글로벌 최고 수준의 차별화된 <span className="color-primary">Cloud Native, Agile, DevOps, MSA 기술과 경험</span>을 보유하고 있으며, 
      각 기술들의 유기적인 통합 구현을 통해 
      최고의 <span className="color-primary">Business Agility와 System Quality</span>를 고객에게 제공합니다.
      </p>
    </Slide>
  </FullPage>
    );
}

export default About;
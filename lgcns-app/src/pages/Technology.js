import React from "react";
import { FullPage, Slide } from 'react-full-page';
import '../style/technology.scss';
import Footer from "../components/Footer";

function Technology(props) {
  console.log(props);
  return (
    <FullPage controls controlsProps={{className: 'fullpage-controls'}} className="fullpage">
    <Slide className="fullpage-slide tech-slide1 pc">
      <h1 className="title1">
        <span className="color-primary">비즈니스 애플리케이션 개발 Service</span><br/>
        Full-stack 기술을 제공 합니다.
      </h1>
      <p className="txt-con">AWS와 Pre-Sales부터 Delivery까지 함께하는 Partner!<br/>AWS와 LG CNS의 협업을 통해 고객에게 최고의 가치를 제공할 수 있습니다. </p>
      <div className="box-wrap">
        <div className="box">
          <div className="txt">
            <h3>IAC (Infra As Code)</h3>
            <p>Container, Serverless 인프라를 코드로 구축하고 몇 번을 실행하더라도 동일한 결과를 만들어 낼 수 있습니다. </p>          
          </div>
          <div className="icon"></div>
        </div>
        <div className="box">
          <div className="txt">
            <h3>Modern Web</h3>
            <p>단일 페이지 애플리케이션으로 개발하여 사용자 친화성을 유지하며 UI와 데이터를 분리 가능합니다. </p>          
          </div>
          <div className="icon"></div>
        </div>
      </div>
    </Slide>
    <Slide className="fullpage-slide tech-slide2 pc">
      <div className="box-wrap">
        <div className="box">
          <div className="txt">
            <h3>Test Automation</h3>
            <p>자동으로 기능을 체크하여 품질을 판단하며 제품을 고객에게 빠르게 제공합니다. </p>          
          </div>
          <div className="icon"></div>
        </div>
        <div className="box">
          <div className="txt">
            <h3>CI/CD  Pipelines</h3>
            <p>개발된 제품의 품질을 체크하고 빠르게 고객에게 제공하는 Mechanism을 제공합니다.</p>          
          </div>
          <div className="icon"></div>
        </div>
        <div className="box">
          <div className="txt">
            <h3>Modern UX</h3>
            <p>제품 아이디어 탐색 단계부터 최종 사용자 경험 관점에서 업무를 분석하고 설계합니다.</p>          
          </div>
          <div className="icon"></div>
        </div>
        <div className="box">
          <div className="txt">
            <h3>Digital Technology</h3>
            <p>M/L, D/L, Data analytics, IoT 등의 디지털 기술을 Cloud 서비스를 통하여 효과적으로 활용 가능합니다.</p>          
          </div>
          <div className="icon"></div>
        </div>
        <div className="box">
          <div className="txt">
            <h3>Agile / DevOps</h3>
            <p>짧은 기간에 기능을 개발하고 고객에게 피드백을 받아 지속적으로 개선하는 방식으로 업무를 진행합니다.</p>          
          </div>
          <div className="icon"></div>
        </div>
        <div className="box">
          <div className="txt">
            <h3>MSA (Microservice Architecture)</h3>
            <p>기능별 독립적인 서비스로 개발하여 사용량 증가에 따른 유연한 확장과 장애 영향을 최소화 합니다. </p>          
          </div>
          <div className="icon"></div>
        </div>
      </div>
    <Footer />
    </Slide>
    
    <Slide className="fullpage-slide tech-slide1 mobile">
      <h1 className="title1">
        <span className="color-primary">비즈니스 애플리케이션 개발 Service</span><br/>
        Full-stack 기술을 제공 합니다.
      </h1>
      <p className="txt-con">AWS와 Pre-Sales부터 Delivery까지 함께하는 Partner!<br/>AWS와 LG CNS의 협업을 통해 고객에게 최고의 가치를 제공할 수 있습니다. </p>
      <div className="box-wrap">
        <div className="box">
          <div className="txt">
            <h3>IAC (Infra As Code)</h3>
            <p>Container, Serverless 인프라를 코드로 구축하고 몇 번을 실행하더라도 동일한 결과를 만들어 낼 수 있습니다. </p>          
          </div>
          <div className="icon"></div>
        </div>
      </div>
    </Slide>
    <Slide className="fullpage-slide tech-slide2 mobile">
      <div className="box-wrap">
      <div className="box">
          <div className="txt">
            <h3>Modern Web</h3>
            <p>단일 페이지 애플리케이션으로 개발하여 사용자 친화성을 유지하며 UI와 데이터를 분리 가능합니다. </p>          
          </div>
          <div className="icon"></div>
        </div>
        <div className="box">
          <div className="txt">
            <h3>Test Automation</h3>
            <p>자동으로 기능을 체크하여 품질을 판단하며 제품을 고객에게 빠르게 제공합니다. </p>          
          </div>
          <div className="icon"></div>
        </div>
        <div className="box">
          <div className="txt">
            <h3>CI/CD  Pipelines</h3>
            <p>개발된 제품의 품질을 체크하고 빠르게 고객에게 제공하는 Mechanism을 제공합니다.</p>          
          </div>
          <div className="icon"></div>
        </div>
      </div>
    </Slide>
    <Slide className="fullpage-slide tech-slide3 mobile">
      <div className="box-wrap">
      <div className="box">
          <div className="txt">
            <h3>Modern UX</h3>
            <p>제품 아이디어 탐색 단계부터 최종 사용자 경험 관점에서 업무를 분석하고 설계합니다.</p>          
          </div>
          <div className="icon"></div>
        </div>
        <div className="box">
          <div className="txt">
            <h3>Digital Technology</h3>
            <p>M/L, D/L, Data analytics, IoT 등의 디지털 기술을 Cloud 서비스를 통하여 효과적으로 활용 가능합니다.</p>          
          </div>
          <div className="icon"></div>
        </div>
      </div>
    </Slide>
    <Slide className="fullpage-slide tech-slide4 mobile">
      <div className="box-wrap">
        
      <div className="box">
          <div className="txt">
            <h3>Agile / DevOps</h3>
            <p>짧은 기간에 기능을 개발하고 고객에게 피드백을 받아 지속적으로 개선하는 방식으로 업무를 진행합니다.</p>          
          </div>
          <div className="icon"></div>
        </div>
        <div className="box">
          <div className="txt">
            <h3>MSA (Microservice Architecture)</h3>
            <p>기능별 독립적인 서비스로 개발하여 사용량 증가에 따른 유연한 확장과 장애 영향을 최소화 합니다. </p>          
          </div>
          <div className="icon"></div>
        </div>
      </div>
    <Footer />
    </Slide>
  </FullPage>
    );
}

export default Technology;
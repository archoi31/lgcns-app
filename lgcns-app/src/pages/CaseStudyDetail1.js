import React from "react";
import { FullPage, Slide } from 'react-full-page';
import '../style/casedetail1.scss';
import Footer from "../components/Footer";


function CaseStudyDetail1(props) {
  return (
    <FullPage controls controlsProps={{className: 'fullpage-controls'}} className="fullpage">
    <Slide className="fullpage-slide case-detail-slide1">
      <div className="case-top">
        <p className="tit">
          <span>Case Study</span>
          <h2>A항공사 Cloud Journey</h2>
          <h1>1. 대규모 클라우드 전환</h1>
        </p> 
        <p className="sub-tit"><b>빠른 서비스 혁신</b>을 통한 고객 만족 극대화</p>  
      </div>

      <div className="case-list">
          <div className="right">
            <dl >
                <dt><img src="/images/ic_case_1.svg"></img>Cloud Consulting</dt>
                <dd></dd>
            </dl>
          </div>
          <div className="left">
            <dl>
                <dd><img src="/images/img_case_detail1_1.png"></img></dd>
                <dt>Cloud Migration<img src="/images/ic_case_2.svg"></img></dt>
            </dl>
          </div>
          <div className="right">
            <dl>
                <dt><img src="/images/ic_case_3.svg"></img>AM 역량 확보</dt>
                <dd>
                  <div className="ct-box">
                    <h3>AM 역량 확보를 위한 조직 변화관리 서비스</h3>
                    <ul>
                      <li>애자일 일하는 방식 체득 </li>
                      <li>파일럿 시스템을 함께 만들면서-S2S-</li>
                      <li>Application Modernization에 필요한 기술 습득 </li>
                      <li>필요 기술 및 역량을 정의하고, 성장 전략 및 로드맵을 제안함으로써 이후 비즈니스 효과  증대에 기여함</li>
                    </ul>
                  </div>
                </dd>
            </dl>
          </div>
        </div>
    </Slide>
    <Slide className="fullpage-slide case-detail-slide2">
       <div className="case-list">
         
          <div className="left">
            <dl>
                <dd><img src="/images/img_case_detail1_2.png"></img></dd>
                <dt>AM 로드맵 수립<img src="/images/ic_case_4.svg"></img></dt>
            </dl>
          </div>
          <div className="right">
            <dl>
                <dt><img src="/images/ic_case_5.svg"></img>AM 추진</dt>
                <dd></dd>
            </dl>
          </div>
          <div className="end-box">3 years</div>
        </div>
      <Footer/>
    </Slide>
  </FullPage>
    );
}

export default CaseStudyDetail1;
import React from "react";
import { FullPage, Slide } from 'react-full-page';
import '../style/casedetail.scss';
import Footer from "../components/Footer";


function CaseStudyDetail4(props) {
  return (
    <div className="case-detail">
      <div className="case-top detail4">
        <p className="tit">
          <span>Case Study</span>
          <h2>C 금융사 Agile 도입</h2>
          <h1>4. 애자일 전환</h1>
        </p> 
        <p className="sub-tit"><b>전사적 디지털 전환</b>으로 비즈니스 민첩성 확보</p>  
      </div>

      <div className="case-list">
          <div className="right">
            <dl className="detail4_1">
                <dt>
                  <img src="/images/ic_case_1.svg"  className="case-icon"></img>비즈니스 개선 플래닝
                  <img src="/images/case_down.svg" className="case-down"></img>
                </dt>
                <dd></dd>
            </dl>
          </div>
          <div className="left">
            <dl className="detail4_2">
                <dt>
                  애자일 일하는 방식 습득<img src="/images/ic_case_2.svg"  className="case-icon"></img>
                  <img src="/images/case_down.svg" className="case-down"></img>  
                </dt>
                <dd><img src="/images/img_agile.png"></img></dd>
            </dl>
          </div>
          <div className="right">
            <dl className="detail4_3">
                <dt>
                  <img src="/images/ic_case_3.svg"  className="case-icon"></img>애자일 방식 일하는 조직 확대
                  <img src="/images/case_down.svg" className="case-down"></img>
                </dt>
                <dd>
                  <div className="ct-box">
                    <h3>애자일 코칭</h3>
                    <ul>
                      <li>애자일 일하는 방식, 조직 구성, 변화관리 측면의 컨설팅 수행 프로젝트 통한 Scrum, XP 등 활용한 일하는 방식 체득 고객 맞춤형 운영 방법론 및 모델을 제시함</li>
                      <li>필요 기술 및 역량을 정의하고, 성장 전략 및 로드맵을 제안함으로써 실무자의 기술과 일하는 방식 변화를 통한 이후 비즈니스 효과 증대에 기여함</li>
                    </ul>
                  </div>
                </dd>
            </dl>
          </div>
          <div className="left">
            <dl  className="detail4_4">
                <dt>DX 진행<img src="/images/ic_case_4.svg"  className="case-icon"></img></dt>
                <dd></dd>
            </dl>
          </div>
          <div className="end-box">3 years</div>
        </div>
      <Footer/>
    </div>
    );
}

export default CaseStudyDetail4;
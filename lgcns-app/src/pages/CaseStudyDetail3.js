import React from "react";
import { FullPage, Slide } from 'react-full-page';
import '../style/casedetail.scss';
import Footer from "../components/Footer";


function CaseStudyDetail3(props) {
  return (
    <div className="case-detail">
      <div className="case-top detail3">
        <p className="tit">
          <span>Case Study</span>
          <h2>L 그룹사 SaaS 개발</h2>
          <h1>3. SaaS 개발</h1>
        </p> 
        <p className="sub-tit"><b>경쟁력 있는 서비스를 조합</b>하여 클라우드의 장점과 함께 빠르게 제공</p>  
      </div>

      <div className="case-list">
          <div className="right">
            <dl className="detail3_1">
                <dt>
                  <img src="/images/ic_case_1.svg" className="case-icon"></img>클라우드 전환
                  <img src="/images/case_down.svg" className="case-down"></img>
                </dt>
                <dd>
                  <div className="ct-box">
                    <h3>AWS 70 in 70</h3>
                    <img src="/images/img_aws70in70.png"></img>
                  </div>
                </dd>
            </dl>
          </div>
          <div className="left">
            <dl className="detail3_2">
                <dt>
                  Cloud Migration<img src="/images/ic_case_2.svg" className="case-icon"></img>
                  <img src="/images/case_down.svg" className="case-down"></img>
                </dt>
                <dd>
                  <div className="ct-list">
                    <ul>
                      <li>Slalom Cloud Modernization</li>
                      <li>Intelligent Product</li>
                      <li>Slalom Product Modelling</li>
                      <li>Pivotal Cloud Native Enablement</li>
                    </ul>
                  </div>
                </dd>
            </dl>
          </div>
          <div className="right">
            <dl className="detail3_3">
                <dt>
                  <img src="/images/ic_case_3.svg" className="case-icon"></img>클라우드 전략 구체화
                  <img src="/images/case_down.svg" className="case-down"></img>  
                </dt>
                <dd>
                  <div className="ct-box">
                    <h3>관리 포탈</h3>
                    <ul>
                      <li>테스트 자동화가 적용된 CICD Pipeline을 구축하여 품질 확보하고 의사결정에 따른Delivery를 신속화 함</li>
                      <li>관리 포탈의 트랜잭션이 출근 전 집중 되므로 그에 따른 Serverless Architecture 활용</li>
                    </ul>
                  </div>
                  <div className="ct-box">
                    <h3>고객 관리 시스템</h3>
                    <ul>
                      <li>기존에 없던 업무를 Agile 방식과 AM기술을 활용하여 구축함</li>
                      <li>고객 요구사항 변화에 빠르게 대응하였으며 AWS S3, Lambda 등을 활용하여 투자비용 절감하며 지속적인 개선 반영 구조 적용</li>
                    </ul>
                  </div>
                </dd>
            </dl>
          </div>
          <div className="left">
            <dl className="detail3_4">
                <dd></dd>
                <dt>AM 로드맵 수립<img src="/images/ic_case_4.svg" className="case-icon"></img></dt>
            </dl>
          </div>
          <div className="end-box">3 years</div>
        </div>
      <Footer/>
    </div>
    );
}

export default CaseStudyDetail3;
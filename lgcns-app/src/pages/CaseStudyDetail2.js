import React from "react";
import '../style/casedetail.scss';
import Footer from "../components/Footer";


function CaseStudyDetail2(props) {
  return (
    <div className="case-detail">
      <div className="case-top detail2" >
        <p className="tit">
          <span>Case Study</span>
          <h2>B 보험사 DX Journey</h2>
          <h1>2. 대규모 클라우드 전환</h1>
        </p> 
        <p className="sub-tit"><b>시장 변화에 빠르게 반응</b>하며 새로운 서비스를 기획하고 변경</p>  
      </div>

      <div className="case-list">
          <div className="right">
            <dl className="detail2_1">
                <dt><img src="/images/ic_case_1.svg" className="case-icon"></img>AM 위한 DevOps<br/>환경 구성
                <img src="/images/case_down.svg" className="case-down"></img>
                </dt>
                <dd>
                  <div className="ct-box">
                    <h3>딜러 관리 시스템</h3>
                    <img src="/images/img_devops.png"></img>
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
          <div className="left">
            <dl className="detail2_2">
                <dt>MSA 시범 적용<img src="/images/ic_case_2.svg" className="case-icon"></img>
                  <img src="/images/case_down.svg" className="case-down"></img>
                </dt>
                <dd>
                <div className="ct-box">
                    <h3>긱 이코노미 플랫폼</h3>
                    <ul>
                      <li>Agile 방식으로의 Demo 및 짧은 Feedback을 통해 시장 요구사항을 기민하게 반영하고 MVP부터 빠르게 출시함</li>
                      <li>AWS EKS 및 Appmesh, X-ray 등을 활용하여 고객 사용에 탄력적으로 대응하며 실시간으로 분석함</li>
                    </ul>
                  </div>
                </dd>
                
            </dl>
          </div>
          <div className="right">
            <dl className="detail2_3">
                <dt><img src="/images/ic_case_3.svg" className="case-icon"></img>DX 서비스 발굴
                <img src="/images/case_down.svg" className="case-down"></img></dt>
                <dd>
                  <div className="ct-box">
                    <h3>소비 포인트 플랫폼</h3>
                    <div className="flex-wrap">
                      <img src="/images/img_innovation.png"></img>
                      <ul>
                        <li>서비스 출시는 예정되어 있으나 아이템 기획 어려움</li>
                        <li>Innovation Studio 활용하여 초기 기획 및 Prototyping 진행</li>
                      </ul>
                    </div>
                    <ul>
                      <li>개발 기간이 짧고 사전 기획/분석이 가능하지 않는 시스템을 스프린트로 진행하면서 데모를 확인하고 상세 설계하는 Agile 방식 적용</li>
                      <li>다양한 사용자 채널을 확보하여 풍부한 소비활동 경험을 제공하며 Digital Currency 생태계를 확장할 수 있는 발판 확보</li>
                    </ul>
                  </div>
                </dd>
            </dl>
          </div>
          <div className="end-box">3 years</div>
        </div>
      <Footer/>
    </div>
    );
}

export default CaseStudyDetail2;
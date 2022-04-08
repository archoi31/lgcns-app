import React from "react";
import { FullPage, Slide } from 'react-full-page';
import '../style/casestudy.scss';
import Footer from "../components/Footer";
import { Link } from "react-router-dom";


function CaseStudy(props) {
  return (
    <FullPage controls controlsProps={{className: 'fullpage-controls'}} className="fullpage">
    <Slide className="fullpage-slide case-slide1 pc">
      <div className="h-wrap">
        <div className="image">
          <img src={require("../assets/main-thum-1.png")} />  
        </div>
        <div className="text">
          <span>H 금융사</span>
          <h1 className="title1">소비 포인트 플랫폼 <Link to="/csdetail1"><button className="go-detail-btn">본문 읽기<img src="images/ic_go_detail.png"></img></button></Link></h1>
          <p className="txt-con">
          개발 기간이 짧고 사전 기획/분석이 가능하지 않는 시스템을 스프린트로 진행하면서 데모를 확인하고 상세 설계하는 Agile 방식 적용
          다양한 사용자 채널을 확보하여 풍부한 소비활동 경험을 제공하며 Digital Currency 생태계를 확장할 수 있는 발판 확보
          </p>
        </div>
        
      </div>
      <div className="v-wrap">
        <div className="v-box">
          <div className="image">
            <span>L 금융사 </span>
            <img src={require("../assets/case-thum-1.png")} />  
          </div>
          <div className="text">
            <h2>방문 포털 시스템 <Link to="/csdetail2"><button className="go-detail-btn">본문 읽기<img src="images/ic_go_detail.png"></img></button></Link></h2>
            <p>MSA 적용을 통해 방문(Visit), 사업장(Workspace), 회원(Member) 등의 도메인 별 Micro Service 구축<br/>
            방문 포탈의 트랜잭션이 출근 전 집중 되므로 Serverless Architecture 적용하여 AWS API Gateway + Lambda 활용</p>
          </div>
        </div>
        <div className="v-box">
          <div className="image">
            <span>L 금융사</span>
            <img src={require("../assets/case-thum-2.png")} />  
          </div>
          <div className="text">
            <h2>긱 이코노미 플랫폼 <Link to="/csdetail3"><button className="go-detail-btn">본문 읽기<img src="images/ic_go_detail.png"></img></button></Link></h2>
            <p>Agile 방식으로의 Demo 및 짧은 Feedback을 통해 시장 요구사항을 기민하게 반영하고 MVP부터 빠르게 출시<br/>
              AWS EKS 및 Appmesh, X-ray 등을 활용하여 고객 사용에 탄력적으로 대응하며 실시간으로 분석</p>
          </div>
        </div>
      
        <div className="v-box">
          <div className="image">
            <span>C 은행</span>
            <img src={require("../assets/case-thum-3.png")} />  
          </div>
          <div className="text">
            <h2>Agile 방법론 전사 확산 <Link to="/csdetail4"><button className="go-detail-btn">본문 읽기<img src="images/ic_go_detail.png"></img></button></Link></h2>
            <p>고객 맞춤형 운영 방법론 및 모델 제시<br/>
              필요 기술 및 역량을 정의하고, 성장 전략 및 로드맵을 제안함으로써 이후 비즈니스 효과 증대에 기여</p>
          </div>
        </div>
      </div>
    </Slide>
    <Slide className="fullpage-slide case-slide2 pc ">
      <div className="v-wrap">
        <div className="v-box">
          <div className="image">
            <span>L 금융사</span>
            <img src={require("../assets/case-thum-1.png")} />  
          </div>
          <div className="text">
            <h2>방문 포털 시스템 <Link to="/csdetail2"><button className="go-detail-btn">본문 읽기<img src="images/ic_go_detail.png"></img></button></Link></h2>
            <p>MSA 적용을 통해 방문(Visit), 사업장(Workspace), 회원(Member) 등의 도메인 별 Micro Service 구축<br/>
            방문 포탈의 트랜잭션이 출근 전 집중 되므로 Serverless Architecture 적용하여 AWS API Gateway + Lambda 활용</p>
          </div>
        </div>
        <div className="v-box">
          <div className="image">
            <span>L 금융사</span>
            <img src={require("../assets/case-thum-2.png")} />  
          </div>
          <div className="text">
            <h2>긱 이코노미 플랫폼 <Link to="/csdetail2"><button className="go-detail-btn">본문 읽기<img src="images/ic_go_detail.png"></img></button></Link></h2>
            <p>Agile 방식으로의 Demo 및 짧은 Feedback을 통해 시장 요구사항을 기민하게 반영하고 MVP부터 빠르게 출시<br/>
              AWS EKS 및 Appmesh, X-ray 등을 활용하여 고객 사용에 탄력적으로 대응하며 실시간으로 분석</p>
          </div>
        </div>    
        <div className="v-box">
          <div className="image">
            <span>C 은행</span>
            <img src={require("../assets/case-thum-3.png")} />  
          </div>
          <div className="text">
            <h2>Agile 방법론 전사 확산 <Link to="/csdetail2"><button className="go-detail-btn">본문 읽기<img src="images/ic_go_detail.png"></img></button></Link></h2>
            <p>고객 맞춤형 운영 방법론 및 모델 제시<br/>
              필요 기술 및 역량을 정의하고, 성장 전략 및 로드맵을 제안함으로써 이후 비즈니스 효과 증대에 기여</p>
          </div>
        </div>
        <div className="v-box">
          <div className="image">
            <span>L 금융사</span>
            <img src={require("../assets/case-thum-1.png")} />  
          </div>
          <div className="text">
            <h2>방문 포털 시스템 <Link to="/csdetail2"><button className="go-detail-btn">본문 읽기<img src="images/ic_go_detail.png"></img></button></Link></h2>
            <p>MSA 적용을 통해 방문(Visit), 사업장(Workspace), 회원(Member) 등의 도메인 별 Micro Service 구축<br/>
            방문 포탈의 트랜잭션이 출근 전 집중 되므로 Serverless Architecture 적용하여 AWS API Gateway + Lambda 활용</p>
          </div>
        </div>
        <div className="v-box">
          <div className="image">
            <span>L 금융사</span>
            <img src={require("../assets/case-thum-2.png")} />  
          </div>
          <div className="text">
            <h2>긱 이코노미 플랫폼 <Link to="/csdetail2"><button className="go-detail-btn">본문 읽기<img src="images/ic_go_detail.png"></img></button></Link></h2>
            <p>Agile 방식으로의 Demo 및 짧은 Feedback을 통해 시장 요구사항을 기민하게 반영하고 MVP부터 빠르게 출시<br/>
              AWS EKS 및 Appmesh, X-ray 등을 활용하여 고객 사용에 탄력적으로 대응하며 실시간으로 분석</p>
          </div>
        </div>    
        <div className="v-box">
          <div className="image">
            <span>C 은행</span>
            <img src={require("../assets/case-thum-3.png")} />  
          </div>
          <div className="text">
            <h2>Agile 방법론 전사 확산 <Link to="/csdetail2"><button className="go-detail-btn">본문 읽기<img src="images/ic_go_detail.png"></img></button></Link></h2>
            <p>고객 맞춤형 운영 방법론 및 모델 제시<br/>
              필요 기술 및 역량을 정의하고, 성장 전략 및 로드맵을 제안함으로써 이후 비즈니스 효과 증대에 기여</p>
          </div>
        </div>
      </div>

      <button className="more-btn">더보기</button>
      <Footer/>
    </Slide>

    <Slide className="fullpage-slide case-slide1 mobile">
      <div className="h-wrap">
        <div className="image">
          <img src={require("../assets/case-thum-1.png")} />  
        </div>
        <div className="text">
          <span>H 금융사</span>
          <h1 className="title1">소비 포인트 플랫폼 <Link to="/csdetail1"><button className="go-detail-btn">본문 읽기<img src="images/ic_go_detail.png"></img></button></Link></h1>
          <p className="txt-con">
          개발 기간이 짧고 사전 기획/분석이 가능하지 않는 시스템을 스프린트로 진행하면서 데모를 확인하고 상세 설계하는 Agile 방식 적용
          다양한 사용자 채널을 확보하여 풍부한 소비활동 경험을 제공하며 Digital Currency 생태계를 확장할 수 있는 발판 확보
          </p>
        </div>
      </div>
    </Slide>
    <Slide className="fullpage-slide case-slide2 mobile">
      <div className="v-wrap">
        <div className="v-box">
          <div className="image">
            <span>L 금융사</span>
            <img src={require("../assets/case-thum-1.png")} />  
          </div>
          <div className="text">
            <h2>방문 포털 시스템 <Link to="/csdetail2"><button className="go-detail-btn">본문 읽기<img src="images/ic_go_detail.png"></img></button></Link></h2>
            <p>MSA 적용을 통해 방문(Visit), 사업장(Workspace), 회원(Member) 등의 도메인 별 Micro Service 구축<br/>
            방문 포탈의 트랜잭션이 출근 전 집중 되므로 Serverless Architecture 적용하여 AWS API Gateway + Lambda 활용</p>
          </div>
        </div>
      </div>
    </Slide>
    <Slide className="fullpage-slide case-slide3 mobile">
      <div className="v-wrap">
        <div className="v-box">
          <div className="image">
            <span>L 금융사</span>
            <img src={require("../assets/case-thum-2.png")} />  
          </div>
          <div className="text">
            <h2>긱 이코노미 플랫폼 <Link to="/csdetail3"><button className="go-detail-btn">본문 읽기<img src="images/ic_go_detail.png"></img></button></Link></h2>
            <p>Agile 방식으로의 Demo 및 짧은 Feedback을 통해 시장 요구사항을 기민하게 반영하고 MVP부터 빠르게 출시<br/>
              AWS EKS 및 Appmesh, X-ray 등을 활용하여 고객 사용에 탄력적으로 대응하며 실시간으로 분석</p>
          </div>
        </div>
      </div>
    </Slide>
    <Slide className="fullpage-slide case-slide4 mobile">
      <div className="v-wrap">
      <div className="v-box">
          <div className="image">
              <span>C 은행</span>
              <img src={require("../assets/case-thum-3.png")} />  
          </div>
          <div className="text">
              <h2>Agile 방법론 전사 확산 <Link to="/csdetail4"><button className="go-detail-btn">본문 읽기<img src="images/ic_go_detail.png"></img></button></Link></h2>
              <p>고객 맞춤형 운영 방법론 및 모델 제시<br/>
                필요 기술 및 역량을 정의하고, 성장 전략 및 로드맵을 제안함으로써 이후 비즈니스 효과 증대에 기여</p>
          </div>
        </div>
      </div>
    </Slide>
    <Slide className="fullpage-slide case-slide5 mobile">
      <div className="v-wrap">
        
      <div className="v-box">
          <div className="image">
            <span>L 금융사</span>
            <img src={require("../assets/case-thum-1.png")} />  
          </div>
          <div className="text">
            <h2>방문 포털 시스템 <Link to="/csdetail1"><button className="go-detail-btn">본문 읽기<img src="images/ic_go_detail.png"></img></button></Link></h2>
            <p>MSA 적용을 통해 방문(Visit), 사업장(Workspace), 회원(Member) 등의 도메인 별 Micro Service 구축<br/>
            방문 포탈의 트랜잭션이 출근 전 집중 되므로 Serverless Architecture 적용하여 AWS API Gateway + Lambda 활용</p>
          </div>
        </div>
      </div>
      <button className="more-btn">더보기</button>
      <Footer/>
    </Slide>
  </FullPage>
    );
}

export default CaseStudy;
import React from "react";
import { FullPage, Slide } from 'react-full-page';
import Footer from "../components/Footer";
import SlickSlider from "../components/SlickSlider";
import '../style/main.scss';



function Main(props) {
 
  let fullpageCtrl = document.querySelector('.fullpage-controls');
  const settings = {
    dots: false,  
    infinite: true, 
    speed: 500,
    slidesToShow: 3, 
    slidesToScroll: 1, 
  };

  return (
    <FullPage controls controlsProps={{className: 'fullpage-controls'}} className="fullpage">
    <Slide className="fullpage-slide main-slide1">
      <h2 className="title2">급변하는 비즈니스 환경 속,</h2>
      <h1 className="title1">
      <span className="color-primary">비즈니스 성공</span>을 이끄는 <span className="color-primary">변화의 시작</span>,   
      <span className="color-primary"> Launch센터</span>와 함께 하세요. 
      </h1>
      <p className="txt-con">고객이 원하는 것을 빠르게 캐치하여 서비스 반영하기 위해서, 
      기업은 “System , Process, 조직 역량” 세 가지 측면에서 반드시 변화해야 합니다.
      </p>
    </Slide>
    <Slide className="fullpage-slide main-slide2">
      <div className="info-wrap">
        <div className='info-txt'>
          <h1 className="title1">왜 LG CNS Launch<br/>
          Center인가 ?
          </h1>
          <h2  className="title2">대한민국 AM No.1 파트너</h2>
          <p className="txt-con">Global BP Open Innovation을 통해 확보된 Application 
              Modernization 역량을 기반하여 고객에게 Application 
              Modernization 1등 파트너로 인정받고 있습니다.
          </p>
        </div>
        <div className='info-icon'>
          <div className='circle'>
            <span className='icon'>
              <p>글로벌 수준의AM 역량 내재화</p>
            </span>
          </div>
          <div className='circle'>
            <span className='icon'>
             <p>국내 최대의 AM 수행 경험 보유</p></span>
          </div>
          <div className='circle'>
            <span className='icon'>
             <p>AWS와 함께 발전해 온 Cloud Journey</p></span>
          </div>
        </div>
      </div>
      
    </Slide>
    <Slide className="fullpage-slide main-slide3">
  
      <div className="txt-wrap">
        <h1 className="title1">
          <span className="color-primary">AWS 파트너</span><br></br>
          사업 및 기술 협업을 통해 
          AM시장을 선도하는 파트너입니다.
        </h1>
        
        <p className="txt-con">고객이 원하는 것을 빠르게 캐치하여 서비스 반영하기 위해서, 
        기업은 “System , Process, 조직 역량” 세 가지 측면에서 반드시 변화해야 합니다.
        </p>
      </div>
      <div className="asw-wrap">
        <span className="asw-img"></span>
      </div>
    </Slide>
    <Slide className="fullpage-slide main-slide4">
      <div className="title-wrap">
        <h1 className="title1">Case Study</h1>
        <button className="btn-more">더보기</button>
      </div>
     
  
      <SlickSlider/>
      <div className="contact">
        <p>
        비즈니스 성공을 이끄는 <span className="color-primary">애플리케이션 현대화(AM) </span>
        LG CNS <span className="color-primary">Launch 센터</span>와 함께 하세요. 
        </p>
        <button>Contact Us</button>
      </div>
      <Footer />
    </Slide>
  </FullPage>
    );
}

export default Main;
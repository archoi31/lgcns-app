import React from "react";
import { FullPage, Slide } from 'react-full-page';
import '../style/contact.scss';
import Footer from "../components/Footer";

function Contact(props) {
  console.log(props);
  return (
    <FullPage controls controlsProps={{className: 'fullpage-controls'}} className="fullpage">
    <Slide className="fullpage-slide contact-slide1">
      <div className="contact-box">
        <h1 className="title1">Contact us</h1>
        <h2 className="title2">비즈니스 성공을 이끄는 <span className="color-primary">애플리케이션 현대화(AM)</span> 
        LG CNS <span className="color-primary">Launch 센터</span>와 함께 하세요. </h2>

        <form>
          <div className="inp-row">
              <label>이름<sapn className="required">*</sapn></label>
              <input type="text" placeholder="이름을 입력하세요."/>
              <span className="error-msg"></span>
          </div>
          <div className="inp-row">
              <label>이메일<sapn className="required">*</sapn></label>
              <input type="text" placeholder="이메일을 입력하세요."/>
              <span className="error-msg"></span>
          </div>
          <div className="inp-row">
              <label>전화번호<sapn className="required">*</sapn></label>
              <input type="text" placeholder="전화번호를 입력하세요."/>
              <span className="error-msg"></span>
          </div>
          <div className="inp-row">
              <label>회사명<sapn className="required">*</sapn></label>
              <input type="text" placeholder="회사명을 입력하세요."/>
              <span className="error-msg"></span>
          </div>
          <div className="inp-row">
              <label>직위<sapn className="required">*</sapn></label>
              <input type="text" placeholder="직위를 입력하세요."/>
              <span className="error-msg"></span>
          </div>
          <div className="inp-row txtbox">
              <label>내용<sapn className="required">*</sapn></label>
              <textarea rows="5" maxlength="1000" placeholder="내용을 입력하세요."></textarea>
              <span className="error-msg"></span>
          </div>
          <button type="submit" className="btn">이메일 문의하기</button>
        </form>

      </div>
      <Footer/>
    </Slide>
    <Slide className="fullpage-slide contact-slide2 mobile">
      <div className="contact-box">
        <form>
          <div className="inp-row">
              <label>직위<sapn className="required">*</sapn></label>
              <input type="text" placeholder="직위를 입력하세요."/>
              <span className="error-msg"></span>
          </div>
          <div className="inp-row txtbox">
              <label>내용<sapn className="required">*</sapn></label>
              <textarea rows="5" maxlength="1000" placeholder="내용을 입력하세요."></textarea>
              <span className="error-msg"></span>
          </div>
          <button type="submit" className="btn">이메일 문의하기</button>
        </form>

      </div>
      <Footer/>
    </Slide>
  </FullPage>
    );
}

export default Contact;
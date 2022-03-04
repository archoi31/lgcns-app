import React from "react";
import { FullPage, Slide } from 'react-full-page';
import '../style/error.scss';
import Footer from "../components/Footer";

function ErrorPage(props) {
  console.log(props);
  return (
    <FullPage controls controlsProps={{className: 'fullpage-controls'}} className="fullpage">
    <Slide className="fullpage-slide error-slide">
      <div className="icon"></div>
      <h2 className="title2">죄송합니다.<br/>요청한 페이지를 찾을 수 없습니다.</h2>
      <p className="txt-con">존재하지 않는 페이지거나, 오류로 인하여 현재 페이지를 볼 수 없습니다.<br/>
      페이지의 주소가 변경 혹은 삭제 되었을 수 있으니, 입력하신 주소가 정확한지 확인하시고<br/>
      잠시 후 다시 시도해 주시기 바랍니다.</p>
      <Footer/>
    </Slide>
  </FullPage>
    );
}

export default ErrorPage;
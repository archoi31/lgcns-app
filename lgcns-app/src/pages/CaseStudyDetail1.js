import React from "react";
import { FullPage, Slide } from 'react-full-page';
import '../style/casestudy.scss';
import Footer from "../components/Footer";


function CaseStudyDetail1(props) {
  return (
    <FullPage controls controlsProps={{className: 'fullpage-controls'}} className="fullpage">
    <Slide className="fullpage-slide csdetail-slide1">
      csdetail-slide1
    </Slide>
    <Slide className="fullpage-slide csdetail-slide2">
      csdetail-slide2
      <Footer/>
    </Slide>
  </FullPage>
    );
}

export default CaseStudyDetail1;
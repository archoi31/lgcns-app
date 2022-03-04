import React from "react";
import { FullPage, Slide } from 'react-full-page';
import '../style/popup.scss';
import Footer from "../components/Footer";

function Popup(props) {
  window.onload = function(){
  };



  return (
    <FullPage controls controlsProps={{className: 'fullpage-controls'}} className="fullpage">
    <Slide className="fullpage-slide">
    
        <div id="popup1" className="popup">
    
          <div className="popup-content">
            <div className="phead">
              <span className="close">&times;</span>     
            </div>                         
            <div className="pbody">             
              <p>Some text in the Popup..</p>
            </div>
            <div className="pfoot">
              <div className="chk">
                <input type="checkbox" id="close-today" name="close-today"/>
                <label for="close-today">오늘 하루 다시 보지 않기</label>
              </div>
              <button>닫기</button>
            </div>
          </div>
    
        </div>
        <Footer/>
    </Slide>
  </FullPage>
    );
}

export default Popup;
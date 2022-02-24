import React from "react";
import { FullPage, Slide } from 'react-full-page';

function Contact(props) {
  console.log(props);
  return (
    <FullPage controls controlsProps={{className: 'fullpage-controls'}} className="fullpage">
    <Slide className="fullpage-slide slide1">
      <h2>Contact</h2>
    </Slide>
    <Slide className="fullpage-slide slide2">
        <h2>Contact</h2>
    </Slide>
  </FullPage>
    );
}

export default Contact;
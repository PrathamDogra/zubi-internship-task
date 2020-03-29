import React from "react";
import Fade from "react-reveal/Fade";
import "./Cards.scss";
export default function Cards() {
  return (
    <div className="Cards">
      <div className="heading">
        <p>Why Participate?</p>
      </div>

      <div className="container">
        <Fade left>
          <div className="card">
            <div className="card-header">Amazing Prizes</div>
            <div className="card-body">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s.Lorem Ipsum is simply dummy text of the
              printing and typesetting industry.
            </div>
          </div>
        </Fade>
        <Fade center>
          <div className="card">
            <div className="card-header">Amazing Prizes</div>
            <div className="card-body">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s.Lorem Ipsum is simply dummy text of the
              printing and typesetting industry.
            </div>
          </div>
        </Fade>
        <Fade right>
          <div className="card">
            <div className="card-header">Amazing Prizes</div>
            <div className="card-body">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s.Lorem Ipsum is simply dummy text of the
              printing and typesetting industry.
            </div>
          </div>
        </Fade>
      </div>
    </div>
  );
}

import React from "react";

const Hero = () => {
  return (
    <div className="hero-wrapper">
      <div className="container">
        <div className="info-left">
          <h1>Name:</h1>
          <h1>Vorname:</h1>
          <h1>Geburt:</h1>
          <h1>Beruf:</h1>
          <h1>Wohnort:</h1>
        </div>
        <div className="info-right">
          <h1 className="bold-type">Ebensteiner</h1>
          <h1>Katharine</h1>
          <h1 className="thin-type">29. Oktober 1981</h1>
          <h1>Junior Web Developer</h1>
          <h1>Zürich</h1>
        </div>
        <div className="photo">
          <img src="" alt="" />
        </div>
      </div>
      <div className="paperclip">
        <img src="/images/pclip.png" alt="" />
      </div>
    </div>
  );
};

export default Hero;

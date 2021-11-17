import React from "react";

const Hero = () => {
  return (
    <div className="hero-wrapper">
      <div className="container">
        <div class="info-left">
          <h1>Name:</h1>
          <h1>Vorname:</h1>
          <h1>Geburt:</h1>
          <h1>Beruf:</h1>
          <h1>Wohnort:</h1>
        </div>
        <div class="info-right">
          <h1 class="bold-type">Ebensteiner</h1>
          <h1>Katharine</h1>
          <h1 class="thin-type">29. Oktober 1981</h1>
          <h1>Junior Web Developer</h1>
          <h1>Zürich</h1>
        </div>
        <div class="photo">
          <img src="/images/akate-bw.png" alt="" />
        </div>
      </div>
      <div class="paperclip">
        <img src="/images/pclip.png" alt="" />
      </div>
    </div>
  );
};

export default Hero;

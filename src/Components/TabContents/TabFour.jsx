import React, { useState } from "react";

const TabFour = () => {
  const [topPhoto, setTopPhoto] = useState("");

  const hobbyList = [
    {
      id: "Drawing",
      strength: [
        "Imagination",
        "Storytelling",
        "Design",
      ],
    },
    {
      id: "DM in D&D",
      strength: [
        "Collaborative creativity",
        "Planning",
        "Team Management"
      ]
    },
    {
      id: "Listening to Podcasts",
      strength: [
        "Constantly learning",
        "Wide interest and knowledge base",
        "Insight and empathy"
      ]
    }
  ]

  const hobbyCallback = (strength) => {
    return strength; 
  }
  
  return (
    <div className="Tab4">

      <h3>Recreation and Known Associates</h3>

      <div className="hobbies">
        {hobbyList.map((entry) => (
          <div className="content-container">

            <div className="content-card">
              <p>{entry.id}</p>
              {entry.strength.map((item) => (
                <ul className="strengths">
                 <li>{item}</li>
                  
                </ul>
              ))}

            </div>
          </div>
        ))}
      </div>

      <div className="paperclip2">
        <img src="../images/pclip.png" alt="" />
      </div>
      
      <div className="polaroid">


        <div className={topPhoto === "p1" ? "photo active" : "photo"} onClick={() => {setTopPhoto("p1")}} id="p1">
          <img  src="../images/kf-interlaken.png" alt="" />
          <p>mysterious man & woman - interlaken 2021</p>
        </div>
        <div className={topPhoto === "p2" ? "photo active" : "photo"} onClick={() => {setTopPhoto("p2")}} id="p2">
          <img  src="../images/fr-zuri.png" alt="" />
          <p>femme fatale ? - Zürich</p>
        </div>
        <div className={topPhoto === "p3" ? "photo active" : "photo"} onClick={() => {setTopPhoto("p3")}} id="p3">
          <img src="../images/dar-ptrbts.png" alt=""  />
          <p>shadowy figure - Pt. Roberts via Canada</p>
        </div>
      </div>
      
    </div>
  );
};

export default TabFour;

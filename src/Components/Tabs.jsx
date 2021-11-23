import React, { useState } from "react";
import TabOne from "./TabContents/TabOne";
import TabTwo from "./TabContents/TabTwo";
import TabThree from "./TabContents/TabThree";
import TabFour from "./TabContents/TabFour";
import TabFive from "./TabContents/TabFive";

const Tabs = () => {
  const [activeTab, setActiveTab] = useState("Tab4");

  return (
    <div className="Tabs">
      <ul className="nav">
        <li
          className={activeTab === "Tab1" ? "active" : ""}
          onClick={() => {
            setActiveTab("Tab1");
          }}
        >
          Career
        </li>
        <li
          className={activeTab === "Tab2" ? "active" : ""}
          onClick={() => {
            setActiveTab("Tab2");
          }}
        >
          Skills
        </li>
        <li
          className={activeTab === "Tab3" ? "active" : ""}
          onClick={() => {
            setActiveTab("Tab3");
          }}
        >
          Projects
        </li>
        <li
          className={activeTab === "Tab4" ? "active" : ""}
          onClick={() => {
            setActiveTab("Tab4");
          }}
        >
          Details
        </li>
        <li
          className={activeTab === "Tab5" ? "active" : ""}
          onClick={() => {
            setActiveTab("Tab5");
          }}
        >
          Notes
        </li>
      </ul>
      <div className="content">
        {activeTab === "Tab1" ? (
          <TabOne />
        ) : activeTab === "Tab2" ? (
          <TabTwo />
        ) : activeTab === "Tab3" ? (
          <TabThree />
        ) : activeTab === "Tab4" ? (
          <TabFour />
        ) : activeTab === "Tab5" ? (
          <TabFive />
        ) : (
          activeTab === "Tab1"
        )}
      </div>
    </div>
  );
};

export default Tabs;

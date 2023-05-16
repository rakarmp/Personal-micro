import React from "react";
import { faBriefcase } from "@fortawesome/free-solid-svg-icons";

import Card from "../common/card";

import "./styles/works.css";

const Works = () => {
  return (
    <div className="works">
      <Card
        icon={faBriefcase}
        title="Work"
        body={
          <div className="works-body">
            <div className="work">
              <img
                src="https://img.mbizmarket.co.id/company/thumbs/343x343/2023/02/15/1fc4da18d720e91358132617dbaf5c8a.jpg"
                alt="facebook"
                className="work-image"
              />
              <div className="work-title">
                Apprentice At, PT.Khatulistiwa Nusantara Indonesia
              </div>
              <div className="work-subtitle">Mobile Developer</div>
              <div className="work-duration">Oct - Des, 2022</div>
            </div>
          </div>
        }
      />
    </div>
  );
};

export default Works;

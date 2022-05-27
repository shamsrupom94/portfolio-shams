import React, { useState, useEffect, createRef } from "react";
import "./EducationCard.css";
import ColorThief from "colorthief";

export default function EducationCard({ cardInfo }) {
  const [colorArrays, setColorArrays] = useState([]);
  const imgRef = createRef();

  function getColorArrays() {
    const colorThief = new ColorThief();
    setColorArrays(colorThief.getColor(imgRef.current));
  }

  function rgb(values) {
    return typeof values === "undefined" ? null : "rgb(" + values.join(', ') + ")";
  }

  const GetDescBullets = ({ descBullets }) => {
    return descBullets ? descBullets.map((item) => <li className="subTitle">{item}</li>) : null
  };

  return (
    <div className="education-card">
      <div style={{ background: rgb(colorArrays) }} className="education-banner">
        <div className="education-blurred_div"></div>
        <div className="education-div-company">
          <h5 className="education-text-company">{cardInfo.institution}</h5>
        </div>

        <img crossOrigin={"anonymous"} ref={imgRef} className="education-roundedimg" src={cardInfo.institutionLogo} alt={cardInfo.company} onLoad={() => getColorArrays()} />
      </div>
      <div className="education-text-details">
        <h5 className="education-text-role">{cardInfo.degree}</h5>
        <h5 className="education-text-date">{cardInfo.date}</h5>
        <p className="subTitle education-text-desc">{cardInfo.desc}</p>
      </div>
    </div>
  );
}

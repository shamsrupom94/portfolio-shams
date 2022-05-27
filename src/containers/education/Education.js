import React from "react";
import "./Education.css";
import EducationCard from "../../components/educationCard/EducationCard";
import { educationHistory } from "../../portfolio";
import { Fade } from "react-reveal";


export default function Education() {
    if(educationHistory.viewEducations){
        return (
            <div id="education">
                <Fade bottom duration={1000} distance="20px">
                <div className="education-container" id="studyeducation">
                    <div>
                        <h2 className="education-heading">Education</h2>
                        <div className="education-cards-div">
                        {educationHistory.educationInstitutions.map((card) => {
                            return (
                                <EducationCard
                                    cardInfo={{
                                        institution: card.institution,
                                        desc: card.desc,
                                        date: card.date,
                                        institutionLogo: card.institutionLogo,
                                        degree: card.degreeType,
                                        // descBullets: card.descBullets
                                    }}
                                />
                            );
                        })}
                        </div>
                    </div>
                </div>
                </Fade>
            </div>
        );
    }
    return null;
}

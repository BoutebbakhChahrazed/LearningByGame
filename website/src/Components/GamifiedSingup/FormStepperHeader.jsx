
import React from "react";
import './Formstepper.css'
export const FormStepperHeader = ({ step }) => {
  return (
    <div className="step-header">
      <div className="step-header__container">
        <div className={`step-header__step ${step >= 1 ? "completed" : ""}`}>
          <h2>1</h2>
        </div>
        <div className={`step-header__step ${step >= 2 ? "completed" : ""}`}>
          <h2>2</h2>
        </div>
        <div className={`step-header__step ${step >= 3 ? "completed" : ""}`}>
          <h2>3</h2>
        </div>
        <div className={`step-header__step ${step >= 4 ? "completed" : ""}`}>
          <h2>4</h2>
        </div>
      </div>
    </div>
  );
};
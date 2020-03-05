import React, { useState } from "react";
import { Steps, Button } from "antd";
import "./index.css";

const CustomSteps = props => {
  const { steps, type, views, stepsCount } = props;
  const { Step } = Steps;
  const [step, setStep] = useState(0);
  const renderSteps = () => {
    return steps.map(step => (
      <Step title={step.title} description={step.description} />
    ));
  };
  const renderViews = step => {
    return views[step];
  };
  const next = () => {
    if (!(step === stepsCount - 1)) setStep(step + 1);
  };
  const back = () => {
    if (!(step === 0)) setStep(step - 1);
  };
  return (
    <div className="container">
      <Steps progressDot current={step} direction={type} className="steps">
        {renderSteps()}
      </Steps>
      <div className="content">
        <div className="views">{renderViews(step)}</div>
        <div className="controls">
          <Button onClick={() => back()} type="default" size="large">
            Back
          </Button>
          {!(step === stepsCount - 1) ? (
            <Button onClick={() => next()} type="primary" size="large">
              Next
            </Button>
          ) : (
            <Button
              onClick={() => console.log("API call")}
              type="primary"
              size="large"
            >
              Done
            </Button>
          )}
        </div>
      </div>
    </div>
  );
};
export default CustomSteps;

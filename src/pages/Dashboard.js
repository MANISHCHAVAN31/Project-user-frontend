import React, { useState } from "react";
import Menu from "../components/Menu";
import Question from "../components/Question";
import SkillArea from "../components/SkillArea";

const Dashboard = () => {
  const [currentComponent, setCurrentComponent] = useState(<SkillArea />);

  return (
    <div>
      <Menu />
      <div className=" ps-5 py-3 bg-light">
        <div className="d-grid d-md-block">
          <button
            type="button"
            className="btn btn-outline-primary me-3"
            onClick={() => setCurrentComponent(<SkillArea />)}
          >
            Skill Area
          </button>
          <button
            type="button"
            className="btn btn-outline-primary"
            onClick={() => setCurrentComponent(<Question />)}
          >
            Questions
          </button>
        </div>
      </div>
      <div className="mt-2">{currentComponent}</div>
    </div>
  );
};

export default Dashboard;

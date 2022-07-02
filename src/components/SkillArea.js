import React from "react";

const SkillArea = () => {
  return (
    <div className="mx-5">
      <table className="table table-bordered table-stripped">
        <thead className="">
          <tr className="bg-secondary text-white">
            <th className="py-3">SR NO</th>
            <th className="py-3">CATEGORY NAME</th>
            <th className="py-3">#SKILL AREAS</th>
            <th className="py-3">#QUESTIONS</th>
            <th className="py-3">UPDATED ON</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>01</td>
            <td>Numerical Computation</td>
            <td>5</td>
            <td>9</td>
            <td>2022-05-19</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default SkillArea;

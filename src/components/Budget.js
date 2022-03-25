import React, { useContext } from "react";
// import { AppContext } from "../context/AppContext";

const Budget = () => {
  // const { budget } = useContext(AppContext);
  return (
    <div className="alert alert-secondary">
      <span>Budget: £2000 </span>
      <button type="submit" className="btn1 btn-primary">
        Edit
      </button>
    </div>
  );
};

export default Budget;

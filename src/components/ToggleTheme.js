import React, { useContext } from "react";
import { ExpenseContext } from "../context/ExpenseContext";

const ToggleTheme = () => {
  const { toggleTheme } = useContext(ExpenseContext);
  return (
    <div className="toggle">
      <label className="switch">
        <input type="checkbox" onChange={toggleTheme} />
        <span className="slider round"></span>
      </label>
    </div>
  );
};

export default ToggleTheme;

import React, { useContext } from "react";
import { ExpenseContext } from "../context/ExpenseContext";
import { changeStyle } from "../utils/format";

const Header = () => {
  const { theme } = useContext(ExpenseContext);
  const style = changeStyle(theme);
  return (
    <header className="header">
      <h1 data-testid="header" className={style}>
        Your Expenses
      </h1>
    </header>
  );
};

export default Header;

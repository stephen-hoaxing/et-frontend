import React, { useContext } from "react";
import { ExpenseContext } from "../context/ExpenseContext";
import { numberWithCommas, changeStyle } from "../utils/format";

const Balance = () => {
  const { transactions, theme } = useContext(ExpenseContext);
  const amounts = transactions.map((transaction) => transaction.amount);
  const total = amounts.reduce((item, acc) => (acc += item), 0);
  const style = changeStyle(theme, "");
  return (
    <div className="balance-parent-container">
      <div className="balance-container">
        <h1 data-testid="balance" className={style}>
          Your Balance: ${numberWithCommas(total)}
        </h1>
      </div>
    </div>
  );
};

export default Balance;

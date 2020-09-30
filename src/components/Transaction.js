import React, { useContext } from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import { ExpenseContext } from "../context/ExpenseContext";
import { numberWithCommas } from "../utils/format";

const Transaction = ({ transaction }) => {
  const sign = transaction.amount < 0 ? "-" : "+";
  const styleName = classNames({
    "transaction-item": true,
    plus: transaction.amount > 0,
    minus: transaction.amount < 0,
  });
  const { deleteTransaction } = useContext(ExpenseContext);
  return (
    <li className={styleName}>
      <div>{transaction.text}</div>
      <span>
        {sign}${numberWithCommas(Math.abs(transaction.amount))}
      </span>
      <button
        className="delete-btn"
        onClick={() => deleteTransaction(transaction._id)}
      >
        x
      </button>
    </li>
  );
};

Transaction.propTypes = {
  text: PropTypes.string,
  amount: PropTypes.number,
};

export default Transaction;

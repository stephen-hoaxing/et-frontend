import React, { useContext } from "react";
import { ExpenseContext } from "../context/ExpenseContext";
import { changeStyle } from "../utils/format";
import classNames from "classnames";
import { useForm } from "../utils/useForm";

const AddTransaction = () => {
  const { addTransaction, theme } = useContext(ExpenseContext);
  const styleLabel = changeStyle(theme, "");
  const styleInput = classNames({
    "light-border": theme === "light",
    "dark-border": theme === "dark",
  });

  const submitForm = () => {
    const newTransaction = {
      text: values.text,
      amount: +values.amount,
    };
    addTransaction(newTransaction);
    values.text = "";
    values.amount = 0;
  };

  const [values, handleChange, handleSubmit] = useForm(submitForm);

  return (
    <div className="form-container">
      <div className="main-container">
        <form className="form" onSubmit={handleSubmit}>
          <div className="form-control">
            <label htmlFor="text" className={styleLabel}>
              Text
            </label>
            <input
              type="text"
              name="text"
              value={values.text || ""}
              onChange={handleChange}
              className={styleInput}
            />
          </div>
          <div className="form-control">
            <label htmlFor="amount" className={styleLabel}>
              Amount
            </label>
            <input
              type="amount"
              name="amount"
              value={values.amount || ""}
              onChange={handleChange}
              className={styleInput}
            />
          </div>
          <div className="form-control">
            <button className="add-btn">Add Transaction</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddTransaction;

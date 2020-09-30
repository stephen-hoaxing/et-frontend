import React, { useEffect, useContext } from "react";
import { ExpenseContext } from "../context/ExpenseContext";
import Transaction from "./Transaction";
import Loading from "./Loading";

const TransactionList = () => {
  const { getTransactions, transactions, loading } = useContext(ExpenseContext);
  useEffect(() => {
    getTransactions();
  }, []);
  return loading ? (
    <Loading />
  ) : (
    <div className="transaction-container">
      <ul className="transaction-list">
        {transactions.map((transaction) => (
          <Transaction key={transaction._id} transaction={transaction} />
        ))}
      </ul>
    </div>
  );
};

export default TransactionList;

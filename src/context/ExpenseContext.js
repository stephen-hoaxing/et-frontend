import React, { createContext, useReducer, useState } from "react";
import AppReducer from "./AppReducer";
import axios from "axios";

export const ExpenseContext = createContext();

export const ExpenseContextProvider = ({ children }) => {
  const initialState = {
    transactions: [],
    error: null,
    loading: true,
  };
  const [state, dispatch] = useReducer(AppReducer, initialState);
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    if (theme === "light") {
      setTheme("dark");
      document.body.classList.remove("light");
      document.body.classList.add("dark");
    } else {
      setTheme("light");
      document.body.classList.remove("dark");
      document.body.classList.add("light");
    }
  };

  const getTransactions = async () => {
    try {
      const res = await axios.get("/api/v1/transactions");
      dispatch({
        type: "GET_TRANSACTIONS",
        payload: res.data.data,
      });
    } catch (err) {
      dispatch({
        type: "TRANSACTION_ERROR",
        payload: err.response.data.error,
      });
    }
  };

  const deleteTransaction = async (id) => {
    try {
      const res = await axios.delete(`/api/v1/transactions/${id}`);
      dispatch({
        type: "DELETE_TRANSACTION",
        payload: id,
      });
    } catch (err) {
      dispatch({
        type: "TRANSACTION_ERROR",
        error: err.response.data.error,
      });
    }
  };

  const addTransaction = async (transaction) => {
    try {
      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };
      const res = await axios.post("/api/v1/transactions", transaction, config);
      dispatch({
        type: "ADD_TRANSACTION",
        payload: res.data.data,
      });
    } catch (err) {
      dispatch({
        type: "TRANSACTION_ERROR",
        error: err.response.data.error,
      });
    }
  };
  return (
    <ExpenseContext.Provider
      value={{
        transactions: state.transactions,
        loading: state.loading,
        getTransactions,
        deleteTransaction,
        addTransaction,
        toggleTheme,
        theme,
      }}
    >
      {children}
    </ExpenseContext.Provider>
  );
};

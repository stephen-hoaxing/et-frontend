import React from "react";
import "./App.css";
import Header from "./components/Header";
import ToggleTheme from "./components/ToggleTheme";
import TransactionList from "./components/TransactionList";
import Balance from "./components/Balance";
import AddTransaction from "./components/AddTransaction";

function App() {
  return (
    <div className="App">
      <Header />
      <ToggleTheme />
      <TransactionList />
      <Balance />
      <AddTransaction />
    </div>
  );
}

export default App;

import React from "react";
import Balance from "./Balance";
import { ExpenseContext } from "../context/ExpenseContext";
import "@testing-library/jest-dom/extend-expect";
import { render, screen, cleanup } from "@testing-library/react";

beforeEach(() => {
  const value = {
    theme: "light",
    transactions: [
      {
        id: 1,
        text: "Payment",
        amount: 2000,
      },
      {
        id: 2,
        text: "Car",
        amount: 4000,
      },
    ],
  };
  render(
    <ExpenseContext.Provider value={value}>
      <Balance />
    </ExpenseContext.Provider>
  );
});

afterEach(cleanup);

it("displays the balance in a comma-delimited format", () => {
  expect(screen.getByTestId("balance")).toHaveTextContent(
    "Your Balance: $6,000"
  );
});

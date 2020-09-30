import React from "react";
import Header from "./Header";
import { ExpenseContext } from "../context/ExpenseContext";
import "@testing-library/jest-dom/extend-expect";
import { render, screen, cleanup } from "@testing-library/react";

beforeEach(() => {
  render(
    <ExpenseContext.Provider value={{ theme: "light" }}>
      <Header />
    </ExpenseContext.Provider>
  );
});

afterEach(cleanup);

it("displays the Header", () => {
  expect(screen.getByTestId("header")).toHaveTextContent("Your Expenses");
});

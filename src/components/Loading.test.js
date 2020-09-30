import React from "react";
import "@testing-library/jest-dom";
import { render, cleanup } from "@testing-library/react";
import Loading from "./Loading";

afterEach(cleanup);

it("renders", () => {
  const { getByTestId } = render(<Loading />);
  expect(getByTestId("loading")).toHaveTextContent("Loading...");
});

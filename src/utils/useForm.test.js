import React from "react";
import { useForm } from "./useForm";
import { act, renderHook } from "@testing-library/react-hooks";
import { render, fireEvent } from "@testing-library/react";

describe("Testing the useForm hook", () => {
  it("changes text and amount upon user input", async () => {
    const { result } = renderHook(useForm);
    result.current[0].text = "";
    const wrapper = render(
      <form data-testid="form">
        <input
          data-testid="text"
          type="text"
          name="text"
          value={result.current[0].text || ""}
          onChange={result.current[1]}
        />
        <input
          data-testid="amount"
          type="number"
          name="amount"
          value={result.current[0].amount || 0}
          onChange={result.current[1]}
        />
      </form>
    );
    const textInput = await wrapper.findByTestId("text");
    const amountInput = await wrapper.findByTestId("amount");
    act(() => {
      fireEvent.change(textInput, {
        target: {
          value: "Ads",
        },
      });
      fireEvent.change(amountInput, {
        target: {
          value: 2000,
        },
      });
    });
    expect(result.current[0].text).toBe("Ads");
    expect(result.current[0].amount).toBe("2000");
  });

  it("sets text and amount upon user input and clears them when the form is submitted ", async () => {
    const { result } = renderHook(useForm);
    result.current[0].text = "";
    result.current[0].amount = 0;
    const submitForm = () => {
      result.current[0].text = "";
      result.current[0].amount = 0;
    };
    const wrapper = render(
      <form data-testid="form" onSubmit={submitForm}>
        <input
          data-testid="text"
          type="text"
          name="text"
          value={result.current[0].text || ""}
          onChange={result.current[1]}
        />
        <input
          data-testid="amount"
          type="number"
          name="amount"
          value={result.current[0].amount || 0}
          onChange={result.current[1]}
        />
      </form>
    );
    const form = await wrapper.findByTestId("form");
    const textInput = await wrapper.findByTestId("text");
    const amountInput = await wrapper.findByTestId("amount");
    act(() => {
      fireEvent.change(textInput, {
        target: {
          value: "Ads",
        },
      });
      fireEvent.change(amountInput, {
        target: {
          value: 2000,
        },
      });
    });
    expect(result.current[0].text).toBe("Ads");
    expect(result.current[0].amount).toBe("2000");
    act(() => {
      fireEvent.submit(form);
    });
    expect(result.current[0].text).toBe("");
    expect(result.current[0].amount).toBe(0);
  });
});

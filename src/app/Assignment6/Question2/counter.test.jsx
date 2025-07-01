import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import Counter from "./Counter";

describe("Counter", () => {
  test("renders initial count", () => {
    render(<Counter />);
    expect(screen.getByTestId("count-value")).toHaveTextContent("Count: 0");
  });

  test("increments the count when + button clicked", () => {
    render(<Counter />);
    fireEvent.click(screen.getByText("+"));
    expect(screen.getByTestId("count-value")).toHaveTextContent("Count: 1");
  });

  test("decrements the count when - button clicked", () => {
    render(<Counter />);
    fireEvent.click(screen.getByText("-"));
    expect(screen.getByTestId("count-value")).toHaveTextContent("Count: -1");
  });
});

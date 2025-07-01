import React from "react";
import { render, screen } from "@testing-library/react";
import UserProfile from "./UserProfile";

describe("UserProfile", () => {
  const userData = {
    name: "John Doe",
    email: "john@example.com",
    phone: "123-456-7890",
  };

  test("renders user data correctly", () => {
    render(<UserProfile {...userData} />);

    expect(screen.getByTestId("user-name").textContent).toBe(userData.name);
    expect(screen.getByTestId("user-email").textContent).toBe(userData.email);
    expect(screen.getByTestId("user-phone").textContent).toBe(userData.phone);
  });
});

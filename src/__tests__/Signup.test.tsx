import "@testing-library/jest-dom";
import { screen, render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import { BrowserRouter as Router } from "react-router-dom";
import Signup from "../pages/Signup";

window.matchMedia = (query) => ({
  matches: false,
  media: query,
  onchange: null,
  addListener: jest.fn(), 
  removeListener: jest.fn(), 
  addEventListener: jest.fn(),
  removeEventListener: jest.fn(),
  dispatchEvent: jest.fn(),
});

describe("Signup", () => {
  it("Should render the signup page with the register box and form", () => {
    render(
      <Router>
        <Signup />
      </Router>
    );

    expect(screen.getByTestId("box")).toBeInTheDocument();
    expect(screen.getByTestId("form")).toBeInTheDocument();
  });

  it("Should be able to type in the inputs", () => {
    render(
      <Router>
        <Signup />
      </Router>
    );

    const usernameInput = screen.getByLabelText("Usuário") as HTMLInputElement;
    const passwordInput = screen.getByLabelText("Senha") as HTMLInputElement;

    userEvent.type(usernameInput, "jorge");
    userEvent.type(passwordInput, "jorge");

    expect(usernameInput.value).toBe("jorge");
    expect(passwordInput.value).toBe("jorge");
  });
});

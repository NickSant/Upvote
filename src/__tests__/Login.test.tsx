import "@testing-library/jest-dom";
import { screen, render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import { BrowserRouter as Router } from "react-router-dom";
import Login from "../pages/Login";

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

describe("Login", () => {
  it("Should render the login page with the login box and form", () => {
    render(
      <Router>
        <Login />
      </Router>
    );

    expect(screen.getByTestId("box")).toBeInTheDocument();
    expect(screen.getByTestId("form")).toBeInTheDocument();
  });

  it("Should be able to type in the inputs", () => {
    render(
      <Router>
        <Login />
      </Router>
    );

    const usernameInput = screen.getByLabelText("Usuário") as HTMLInputElement;
    const passwordInput = screen.getByLabelText("Senha") as HTMLInputElement;

    userEvent.type(usernameInput, "jorge");
    userEvent.type(passwordInput, "jorge");

    expect(usernameInput.value).toBe("jorge");
    expect(passwordInput.value).toBe("jorge");
  });

  it("Should open the ForgotPassModal when the text is clicked", () => {
    render(
      <Router>
        <Login />
      </Router>
    );

    const forgotPassText = screen.getByText("Esqueci a senha");

    userEvent.click(forgotPassText);

    expect(screen.getByRole("dialog")).toBeInTheDocument();
  });
});

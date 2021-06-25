import "@testing-library/jest-dom";
import { screen, render, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { server, rest } from "../testServer";

import ForgotPassModal from "../components/ForgotPassModal";

const apiUrl = process.env.REACT_APP_API_URL as string;

describe("ForgotPassModal", () => {
  it("Should open the modal with its content", () => {
    render(<ForgotPassModal isOpened={true} setIsOpen={() => {}} />);

    expect(screen.getByRole("dialog")).toBeInTheDocument();
  });

  it("Should close the modal", () => {
    const setIsOpen = jest.fn();
    render(<ForgotPassModal isOpened={true} setIsOpen={setIsOpen} />);

    const closeButton = screen.getByText("Cancelar");
    userEvent.click(closeButton);

    expect(setIsOpen).toBeCalled();
  });

  it("Should show the password input when user submit a valid username", async () => {
    render(<ForgotPassModal isOpened={true} setIsOpen={() => {}} />);

    server.use(
      rest.get(apiUrl + "/forgot-password/jorge", (req, res, ctx) => {
        return res(ctx.status(200), ctx.json({ username: "jorge", password: "jorge" }));
      })
    );
    const submitButton = screen.getByRole("button", { name: "Enviar" });
    const usernameInput = screen.getByTestId("usernameInput");

    userEvent.type(usernameInput, "jorge");
    userEvent.click(submitButton);

    await waitFor(() => expect(screen.getByTestId("password")).toBeInTheDocument());
  });
});

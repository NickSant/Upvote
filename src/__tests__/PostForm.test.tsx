import "@testing-library/jest-dom";
import { screen, render, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { server, rest } from "../testServer";

import PostForm from "../components/PostForm";

const apiUrl = process.env.REACT_APP_API_URL as string

describe("PostForm", () => {
  it("Should show the textarea and the button", () => {
    render(<PostForm />);

    expect(screen.getByRole("textbox")).toBeInTheDocument();
    expect(screen.getByRole("button")).toBeInTheDocument();
  });

  it("Should be able to type in the textarea", () => {
    render(<PostForm />);

    const textarea = screen.getByRole("textbox");

    userEvent.type(textarea, "Lorem Ipsum dolor set ips");

    expect(textarea.textContent).toBe("Lorem Ipsum dolor set ips");
  });

  it("Should submit a post and clean the textarea", async () => {
    render(<PostForm />);

    server.use(rest.post(apiUrl + "/feed", (req, res, ctx) => {
      return res(ctx.status(200), ctx.json("ok"))
    }))

    const textarea = screen.getByRole("textbox");
    const submitButton = screen.getByRole("button");
    userEvent.type(textarea, "Lorem Ipsum dolor set ips");

    userEvent.click(submitButton);

    await waitFor(() => expect(textarea).toHaveTextContent(""), {timeout: 3000});
  });
});

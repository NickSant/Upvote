import "@testing-library/jest-dom";
import { screen, render } from "@testing-library/react";

import Post from "../components/Post";

const mockPost = {
  activeUserLikedIt: false,
  activeUserLovedIt: false,
  author: { id: 3, username: "jorge" },
  content: "Lorem Ipsum dolor sit",
  createdAt: "2021-06-24T14:10:08.197Z",
  id: 21,
  likes: 0,
  loves: 0,
  updatedAt: "2021-06-24T14:10:08.197Z",
};

describe("Post", () => {
  it("Should render the post information and options", () => {
    render(<Post post={mockPost} />);

    expect(screen.getByText("jorge")).toBeInTheDocument();
    expect(screen.getByText("Lorem Ipsum dolor sit")).toBeInTheDocument();
    expect(screen.getByTestId("like-button")).toBeInTheDocument();
    expect(screen.getByTestId("love-button")).toBeInTheDocument();
  });

  it("Should display the formated date time", () => {
    render(<Post post={mockPost} />);

    expect(screen.getByText("11:10 - 24/06/2021")).toBeInTheDocument();
  });
});

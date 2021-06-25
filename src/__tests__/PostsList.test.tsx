import "@testing-library/jest-dom";
import { screen, render, waitFor } from "@testing-library/react";

import PostsList from "../components/PostsList";
import { rest, server } from "../testServer";

const apiUrl = process.env.REACT_APP_API_URL as string;

const mockedPosts = [
  {
    activeUserLikedIt: false,
    activeUserLovedIt: false,
    author: { id: 3, username: "pedro23" },
    content: "Hey eai",
    createdAt: "2021-06-24T14:10:08.197Z",
    id: 27,
    likes: 3,
    loves: 3,
    updatedAt: "2021-06-24T14:10:08.197Z",
  },
  {
    activeUserLikedIt: false,
    activeUserLovedIt: false,
    author: { id: 3, username: "jorge" },
    content: "Lorem Ipsum dolor sit",
    createdAt: "2021-06-24T14:10:08.197Z",
    id: 21,
    likes: 0,
    loves: 0,
    updatedAt: "2021-06-24T14:10:08.197Z",
  },
];

describe("Post", () => {
  it("Should lists the posts on render", async () => {
    render(<PostsList />);

    server.use(
      rest.get(apiUrl + "/feeds", (req, res, ctx) => {
        return res(ctx.status(200), ctx.json([...mockedPosts]));
      })
    );

    await waitFor(() => expect(screen.getByText("jorge")).toBeInTheDocument());
    await waitFor(() => expect(screen.getByText("pedro23")).toBeInTheDocument());
  });
});

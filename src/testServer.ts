import { cleanup } from "@testing-library/react";
import { rest } from "msw";
import { setupServer } from "msw/node";

const server = setupServer(
  rest.get("*", (req, res, ctx) => {
      console.log("Erro, requisição não tratada:" + req.url)
      return res(ctx.status(500), ctx.json("Erro: requisição não tratada"))
  }),
  rest.post("*", (req, res, ctx) => {
      console.log("Erro, requisição não tratada:" + req.url)
      return res(ctx.status(500), ctx.json("Erro: requisição não tratada"))
  })
);

beforeAll(() => server.listen());
afterAll(() => {
  server.close();
  cleanup();
});
afterEach(() => server.resetHandlers());

export { server, rest };

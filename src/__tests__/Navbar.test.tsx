import "@testing-library/jest-dom";
import { screen, render, cleanup } from "@testing-library/react";

import Navbar from "../components/Navbar";

afterAll(cleanup); 

describe("Navbar", () => {
  it("Should render the component with the username", () => {
    render(<Navbar />);

    expect(screen.getByText("Olá, jorge")).toBeInTheDocument();
  });
});

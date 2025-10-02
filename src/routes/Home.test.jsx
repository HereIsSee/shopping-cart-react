import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { createMemoryRouter, RouterProvider } from "react-router-dom";
import Home from "./Home";
import routes from "../routes";

describe("Home route", () => {
  it("renders correct heading", () => {
    const router = createMemoryRouter(routes, {
      initialEntries: ["/"],
    });
    render(<RouterProvider router={router} />);

    expect(screen.getByText(/Home Essentials for Sustainable Living/i).textContent).toMatch("Home Essentials for Sustainable Living");
  });
});


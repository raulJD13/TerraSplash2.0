import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";

jest.mock("./pages/loginPage/LoginPage", () => () => <div>Mock LoginPage</div>);

jest.mock("react-router-dom", () => {
  const actual = jest.requireActual("react-router-dom");
  return {
    ...actual,
    BrowserRouter: ({ children }) => (
      <actual.MemoryRouter initialEntries={["/login"]}>
        {children}
      </actual.MemoryRouter>
    ),
  };
});

test("renderiza LoginPage en la ruta /login", () => {
  render(<App />);

  // Verificar que LoginPage se renderiza
  expect(screen.getByText("Mock LoginPage")).toBeInTheDocument();
});
import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";

// Mock de los componentes que se usan en las rutas
jest.mock("./pages/loginPage/LoginPage", () => () => <div>Mock LoginPage</div>);
jest.mock("./pages/frontPage/FrontPage", () => () => <div>Mock FrontPage</div>);

// Mock del BrowserRouter usando el propio React Router
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
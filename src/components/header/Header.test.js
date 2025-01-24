import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import Header from "./Header";
import "@testing-library/jest-dom/extend-expect";
import { BrowserRouter as Router } from "react-router-dom";

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: jest.fn(),
}));

jest.mock("../../contexts/AuthContext", () => ({
  useAuth: jest.fn(),
}));

describe("Componente Header", () => {
  const navigateMock = jest.fn();
  const currentUserMock = {
    profileImage: "/images/user-profile.jpg",
  };

  beforeEach(() => {
    jest.clearAllMocks();
    require("react-router-dom").useNavigate.mockReturnValue(navigateMock);
    require("../../contexts/AuthContext").useAuth.mockReturnValue({
      currentUser: currentUserMock,
    });
  });

  test("renderiza correctamente el logo y el nombre de la aplicación", () => {
    render(
      <Router>
        <Header />
      </Router>
    );
    const logoElement = screen.getByAltText("TerraSplash Logo");
    const appNameElement = screen.getByText("TerraSplash");

    expect(logoElement).toBeInTheDocument();
    expect(appNameElement).toBeInTheDocument();
  });

  test("navega a la página de inicio al hacer clic en el logo", () => {
    render(
      <Router>
        <Header />
      </Router>
    );
    const logoElement = screen.getByAltText("TerraSplash Logo");
    fireEvent.click(logoElement);

    expect(navigateMock).toHaveBeenCalledWith("/home");
  });

  test("navega a la página de perfil al hacer clic en el ícono de usuario", () => {
    render(
      <Router>
        <Header />
      </Router>
    );
    const userProfileImage = screen.getByAltText("User Profile");
    fireEvent.click(userProfileImage);

    expect(navigateMock).toHaveBeenCalledWith("/profile");
  });

  test("renderiza correctamente el ícono de perfil del usuario si está logueado", () => {
    render(
      <Router>
        <Header />
      </Router>
    );
    const userProfileImage = screen.getByAltText("User Profile");

    expect(userProfileImage).toBeInTheDocument();
    expect(userProfileImage).toHaveAttribute("src", currentUserMock.profileImage);
  });

  test("renderiza el ícono de usuario predeterminado si el usuario no tiene imagen de perfil", () => {
    require("../../contexts/AuthContext").useAuth.mockReturnValue({
      currentUser: {},
    });
    render(
      <Router>
        <Header />
      </Router>
    );
    const defaultUserIcon = screen.getByTestId("user-outlined-icon");

    expect(defaultUserIcon).toBeInTheDocument();
  });
});

import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom"; // Importamos MemoryRouter
import EventWeek from "./EventWeek";
import { useNavigate } from "react-router-dom";

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: jest.fn(),
}));

test("renderiza correctamente con las props básicas", () => {
  const mockProps = {
    id: 1,
    image: "https://via.placeholder.com/150",
    name: "Evento de prueba",
    location: "Madrid",
    price: 20,
    rating: 4,
    description: "Este es un evento increíble.",
    route: "/event/1",
    isBookmarked: false,
    onBookmarkToggle: jest.fn(),
  };

  render(
    <MemoryRouter>
      <EventWeek {...mockProps} />
    </MemoryRouter>
  );

  expect(screen.getByText("Evento de prueba")).toBeInTheDocument();
  const imageElement = screen.getByAltText("Evento de prueba");
  expect(imageElement).toBeInTheDocument();
  expect(imageElement).toHaveAttribute("src", mockProps.image);
  expect(screen.getByText("Este es un evento increíble.")).toBeInTheDocument();
});

test("el botón 'More Info' navega a la ruta correcta", () => {
  const mockNavigate = jest.fn(); // Mock para useNavigate
  jest.mocked(useNavigate).mockReturnValue(mockNavigate);

  const mockProps = {
    id: 1,
    image: "https://via.placeholder.com/150",
    name: "Evento de prueba",
    location: "Madrid",
    price: 20,
    rating: 4,
    description: "Este es un evento increíble.",
    route: "/event/1",
    isBookmarked: false,
    onBookmarkToggle: jest.fn(),
  };

  render(
    <MemoryRouter>
      <EventWeek {...mockProps} />
    </MemoryRouter>
  );

  // Encuentra el botón por texto y simula un clic
  const button = screen.getByText("More Info");
  fireEvent.click(button);

  // Verifica que useNavigate fue llamado con la ruta correcta
  expect(mockNavigate).toHaveBeenCalledWith(mockProps.route);
});

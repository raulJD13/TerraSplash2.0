import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import PlaceCard from "./PlaceCard";
import "@testing-library/jest-dom/extend-expect";

describe("Componente PlaceCard", () => {
  const onClickMock = jest.fn();
  const onToggleBookmarkMock = jest.fn();

  test("renderiza correctamente el nombre del lugar", () => {
    render(<PlaceCard name="Playa Bonita" rating={4} imageUrl="playa.jpg" onClick={onClickMock} isBookmarked={false} onToggleBookmark={onToggleBookmarkMock} />);
    const nameElement = screen.getByText("Playa Bonita");
    expect(nameElement).toBeInTheDocument();
  });

  test("renderiza correctamente las estrellas de rating", () => {
    render(<PlaceCard name="Playa Bonita" rating={4} imageUrl="playa.jpg" onClick={onClickMock} isBookmarked={false} onToggleBookmark={onToggleBookmarkMock} />);
    const filledStars = screen.getAllByTestId("star-filled");
    const outlinedStars = screen.getAllByTestId("star-outlined");
    expect(filledStars.length).toBe(4);
    expect(outlinedStars.length).toBe(1);
  });

  test("activa el manejador onClick al hacer clic en la tarjeta", () => {
    render(<PlaceCard name="Playa Bonita" rating={4} imageUrl="playa.jpg" onClick={onClickMock} isBookmarked={false} onToggleBookmark={onToggleBookmarkMock} />);
    const placeCard = screen.getByTestId('place-card');
    fireEvent.click(placeCard);
    expect(onClickMock).toHaveBeenCalledTimes(1);
  });

  test("activa el manejador onToggleBookmark al hacer clic en el ícono de marcador", () => {
    render(<PlaceCard name="Playa Bonita" rating={4} imageUrl="playa.jpg" onClick={onClickMock} isBookmarked={false} onToggleBookmark={onToggleBookmarkMock} />);
    const bookmarkIcon = screen.getByTestId("bookmark-icon");
    fireEvent.click(bookmarkIcon);
    expect(onToggleBookmarkMock).toHaveBeenCalledTimes(1);
  });
});

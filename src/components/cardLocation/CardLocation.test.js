import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import CardLocation from "./CardLocation";
import "@testing-library/jest-dom/extend-expect";

describe("Componente CardLocation", () => {
  const onClickMock = jest.fn();

  test("renderiza correctamente 'LAND' cuando el tipo es 'land'", () => {
    render(<CardLocation type="land" imageUrl="land.jpg" onClick={onClickMock} />);
    const overlayElement = screen.getByText("LAND");
    expect(overlayElement).toBeInTheDocument();
  });

  test("renderiza correctamente 'WATER' cuando el tipo no es 'land'", () => {
    render(<CardLocation type="water" imageUrl="water.jpg" onClick={onClickMock} />);
    const overlayElement = screen.getByText("WATER");
    expect(overlayElement).toBeInTheDocument();
  });

  test("funciona el onClick al hacer clic", () => {
    render(<CardLocation type="land" imageUrl="land.jpg" onClick={onClickMock} />);
    const overlayElement = screen.getByText("LAND");
    fireEvent.click(overlayElement);
    expect(onClickMock).toHaveBeenCalledTimes(1);
  });

});

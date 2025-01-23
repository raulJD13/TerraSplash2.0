import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import ActivitesCard from "./ActivitiesCard";

describe("ActivitiesCard", () => {
  const mockProps = {
    imageUrl: "https://example.com/image.jpg",
    text: "Test Activity",
    onClick: jest.fn(),
    index: 2,
  };

  test("se renderiza con la imagen, texto y estilos correctos", () => {
    render(<ActivitesCard {...mockProps} />);

    const card = screen.getByTestId("activities-card");
    expect(card).toHaveStyle(`background-image: url(${mockProps.imageUrl})`);
    expect(card).toHaveStyle(`animation-delay: ${mockProps.index * 0.2}s`);

    const textElement = screen.getByText(mockProps.text);
    expect(textElement).toBeInTheDocument();
  });

  test("llama a la función onClick cuando se hace clic", () => {
    render(<ActivitesCard {...mockProps} />);

    const card = screen.getByTestId("activities-card");
    fireEvent.click(card);

    expect(mockProps.onClick).toHaveBeenCalled();
  });
});
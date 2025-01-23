import React from "react";
import { render, screen } from "@testing-library/react";
import Title from "./Title";

describe("Title Component", () => {
  test("renderiza correctamente el texto proporcionado", () => {
    const testText = "Hola Hila!";
    render(<Title text={testText} />);

    const titleElement = screen.getByTestId("title");
    expect(titleElement).toBeInTheDocument();
    expect(titleElement).toHaveTextContent(testText);
    expect(titleElement).toHaveClass("selection-word");
  });

  test("renderiza correctamente con un texto vacío", () => {
    render(<Title text="" />);

    const titleElement = screen.getByTestId("title");
    expect(titleElement).toBeInTheDocument();
    expect(titleElement).toHaveTextContent("");
    expect(titleElement).toHaveClass("selection-word");
  });
});

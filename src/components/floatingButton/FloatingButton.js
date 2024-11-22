import React from "react";
import "./FloatingButton.css";

const FloatingButton = ({ icon, onClick, style = {} }) => {
  return (
    <button
      className="floating-button"
      style={style} // Permite personalizar estilo dinámicamente
      onClick={onClick}
    >
      {icon || "+"} {/* Muestra un ícono o el símbolo "+" por defecto */}
    </button>
  );
};

export default FloatingButton;

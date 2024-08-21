import React from "react";
import "./ModalGanador.css";

interface Props {
  children: React.ReactNode;
  eventoBoton: () => void;
}

export default function ModalGanador({ children, eventoBoton }: Props) {
  return (
    <div className="modal">
      <div className="content">
        <h1>Fin del juego</h1>
        <h2>{children}</h2>
        <button onClick={eventoBoton}>Empezar de nuevo</button>
      </div>
    </div>
  );
}

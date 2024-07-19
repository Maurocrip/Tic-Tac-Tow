import Cuadro from "./Components/Cuadrado/Cuadro";
import confetti from "canvas-confetti";
import "./App.css";
import { useState } from "react";
import ModalGanador from "./Components/ModalGanador/ModalGanador";
import { COMBINACIONES, TIPO } from "./logic/constantes";

function App() {
  const [winner, setWinner] = useState<boolean | null>(null);
  const [turno, setTurno] = useState<string>(TIPO.X);
  const [tabla, setTabla] = useState<(string | null)[]>(Array(9).fill(null));

  const checkWinner = (board: (string | null)[]): boolean => {
    for (const [a, b, c] of COMBINACIONES) {
      if (board[a] && board[a] === board[b] && board[a] === board[c]) {
        setWinner(true);
        confetti();
        return true;
      }
    }
    if (!board.includes(null)) {
      setWinner(false);
      return true;
    }
    return false;
  };

  const resetGame = () => {
    setWinner(null);
    setTabla(Array(9).fill(null));
    setTurno(TIPO.X);
  };

  const handleClick = (index: number) => {
    if (tabla[index] || winner !== null) return;

    const newTable = [...tabla];
    newTable[index] = turno;
    setTabla(newTable);

    if (!checkWinner(newTable)) {
      setTurno(turno === TIPO.X ? TIPO.O : TIPO.X);
    }
  };

  return (
    <>
      <div className="contenedor">
        <div className="centro">
          <h1>3 en raya</h1>
          <div className="tabla">
            {tabla.map((_element, index) => {
              return (
                <Cuadro key={index} clickEvent={handleClick} index={index}>
                  {tabla[index]}
                </Cuadro>
              );
            })}
          </div>
          <div className="opciones">
            <button className={turno != TIPO.X ? "boton" : "boton-selected"}>
              X
            </button>
            <button className={turno != TIPO.O ? "boton" : "boton-selected"}>
              O
            </button>
          </div>
        </div>
      </div>

      {winner != null && (
        <div className="modal">
          <ModalGanador eventoBoton={resetGame}>
            {winner ? "El ganador es : " + turno : "Hubo un empate"}
          </ModalGanador>
        </div>
      )}
    </>
  );
}

export default App;

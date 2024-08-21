import Cuadro from "./Components/Cuadrado/Cuadro";
import "./App.css";
import ModalGanador from "./Components/ModalGanador/ModalGanador";
import { useGameHook } from "./hooks/GameHook";
import { TIPO } from "./logic/constantes";
import ButtonOption from "./Components/BotonOpcion/ButtonOption";

function App() {
  const { winner, turno, tabla, resetGame, SelectSquare } = useGameHook();

  return (
    <>
      <div className="contenedor">
        <div className="centro">
          <h1>3 en raya</h1>
          <div className="tabla">
            {tabla.map((element, index) => {
              return (
                <Cuadro key={index} clickEvent={SelectSquare} index={index}>
                  {element}
                </Cuadro>
              );
            })}
          </div>
          <div className="opciones">
            <ButtonOption turno={TIPO.X} player={turno} />
            <ButtonOption turno={TIPO.O} player={turno} />
          </div>
        </div>
      </div>

      {winner != null && (
        <ModalGanador eventoBoton={resetGame}>
          {winner ? "El ganador es : " + turno : "Hubo un empate"}
        </ModalGanador>
      )}
    </>
  );
}

export default App;

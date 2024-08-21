import "./Cuadro.css";

interface Props {
  children: React.ReactNode;
  clickEvent: (index: number) => void;
  index: number;
}

function Cuadro({ children, clickEvent, index }: Props) {
  function handClick() {
    clickEvent(index);
  }

  return (
    <>
      <div className="cuadrado">
        <button className="botonCuadro" onClick={handClick}>
          {children}
        </button>
      </div>
    </>
  );
}
export default Cuadro;

import "./ModalGanador.css";

export default function ModalGanador({children, eventoBoton} : any) 
{
    function handleClick()
    {
        eventoBoton();
    }

  return (
    <div className="content">
        <h1>Fin del juego</h1>
        <h2>{children}</h2>
        <button onClick={handleClick}>Empezar de nuevo</button>
    </div>
  )
}

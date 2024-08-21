import { TIPO } from "../../logic/constantes";

interface Props {
  turno: TIPO;
  player: TIPO;
}

export default function ButtonOption({ turno, player }: Props) {
  return (
    <button className={player != turno ? "boton" : "boton-selected"}>
      {turno}
    </button>
  );
}

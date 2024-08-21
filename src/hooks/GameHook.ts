import { useState } from "react";
import confetti from "canvas-confetti";
import { COMBINACIONES, TIPO } from "../logic/constantes";

export function useGameHook()
{
    const [winner, setWinner] = useState<boolean | null>(null);
    const [turno, setTurno] = useState<TIPO>(TIPO.X);
    const [tabla, setTabla] = useState<(TIPO | null)[]>(Array(9).fill(null));

    function checkWinner(board: (TIPO | null)[]): boolean 
    {
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
    }
    
    function resetGame() 
    {
        setWinner(null);
        setTabla(Array(9).fill(null));
        setTurno(TIPO.X);
    }


    function SelectSquare(index: number) 
    {
        if (tabla[index] || winner !== null) return;

        const newTable = [...tabla];
        newTable[index] = turno;
        setTabla(newTable);

        if (!checkWinner(newTable)) 
        {
            setTurno(turno === TIPO.X ? TIPO.O : TIPO.X);
        }
    }

    return({winner, turno, tabla, resetGame, SelectSquare})
}
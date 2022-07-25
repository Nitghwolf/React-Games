import { calculateWinner } from '../../../helper.js';
import React, { useState } from 'react';
import Board from '../Board/Board';
import "./Game.css";

const GameXO = () => {
    const [board, setBoard] = useState(Array(9).fill(null));
    const [xIsNext, setXIsNext] = useState(true);
    const winner = calculateWinner(board);

    const handleClick = (index) => {
        const boardCopy = [...board];
        // определить был ли клик по ячейке или игра закончилась
        if(winner || boardCopy[index]) return;
        // определить чей ход
        boardCopy[index] = xIsNext ? "X" : "O";
        // обновить стейт
        setBoard(boardCopy);
        setXIsNext(prevValue => !prevValue);
    };

    const startNewGame = () => {
        setBoard(Array(9).fill(null));
    }

    return (
        <div className='wrapper'>
            <p className='winner'>
                {winner ? "Победитель: " + winner : "Сейчас ход: " + (xIsNext ? "X" : "O")}
            </p>
            <Board squares={board} click={handleClick} />
            <button className='button_start' onClick={startNewGame}>Новая игра</button>
        </div>
    );
}

export default GameXO;

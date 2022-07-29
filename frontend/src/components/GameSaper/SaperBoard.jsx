import React, { useMemo, useState } from 'react';
import { createField, Mask, Mine } from './logic';
import "./SaperBoard.css";

const SaperBoard = () => {
    const size = 10;
    const dimension = new Array(size).fill(null);

    const [field, setField] = useState(() => createField(size));
    const [maskField, setMaskField] = useState(() => new Array(size * size).fill(Mask.Fill));
    const [die, setDie] = useState(false);
    
    const win = useMemo(() => {
        return !field.some((f, i) => f === Mine && maskField[i] !== Mask.Flag && maskField[i] !== Mask.Transparent);
    }, [field, maskField]);

    function onClick(x, y){
        if(win || die) return;

        if(maskField[y * size + x] === Mask.Transparent) return;

        const clearing = [];
        function clear(x, y){
            if(x >= 0 && x < size && y >= 0 && y < size){
                if(maskField[y * size + x] === Mask.Transparent) return;
                clearing.push([x, y]);
            }
        }
        clear(x, y);

        while(clearing.length){
            const [x, y] = clearing.pop();

            maskField[y * size + x] = Mask.Transparent;

            if(field[y * size + x] !== 0) continue;
            clear(x + 1, y);
            clear(x - 1, y);
            clear(x, y + 1);
            clear(x, y - 1);
        }

        if(field[y * size + x] === Mine){
            maskField.forEach((_, i) => maskField[i] = Mask.Transparent);
            setDie(true);
        }

        setMaskField(prev => [...prev]);
    }

    function onContextMenu(e, x, y){
        e.preventDefault();
        e.stopPropagation();

        if(win || die) return;

        if(maskField[y * size + x] === Mask.Transparent) return;

        if(maskField[y * size + x] === Mask.Fill){
            maskField[y * size + x] = Mask.Flag;
        }
        else if(maskField[y * size + x] === Mask.Flag){
            maskField[y * size + x] = Mask.Question;
        }
        else if(maskField[y * size + x] === Mask.Question){
            maskField[y * size + x] = Mask.Fill;
        }

        setMaskField(prev => [...prev]);
    }

    return (
        <div className='SaperBoard'>
            {dimension.map((_, y) => {
                return (<div key={y} className="SaperField">
                    {dimension.map((_, x) => {
                        return (<div key={x} className={die ? "SaperFieldSquareDie" : win ? "SaperFieldSquareWin" : "SaperFieldSquare"} onClick={() => onClick(x, y)} onContextMenu={(e) => onContextMenu(e, x, y)}>
                            {
                                maskField[y * size + x] !== Mask.Transparent 
                                ? maskField[y * size + x]
                                : field[y * size + x] === Mine ? "💣" : field[y * size + x]
                            }
                        </div>)
                    })}
                </div>);
            })}
            {win && <h1>WIN!!!</h1>}
            {die && <h1>DIE</h1>}
        </div>
    );
}

export default SaperBoard;

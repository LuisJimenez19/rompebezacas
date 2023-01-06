import { MainContext } from "../context/MainContext";

import { useContext, useRef } from "react";
import siu from "../assets/siu.mp3";

function Token({ value }) {
    let sound = new Audio(siu);

    function playSound() {
        sound.play();
        
    }

    function stopSound() {
        sound.pause();
        sound.currentTime = 0;
    }

    const ctx = useContext(MainContext);

    const initialMatrix = JSON.parse(JSON.stringify(ctx.initialMatrix));
    /* Copia de la matrix para después poder actualizar el estado */
    const shufleMatrix = JSON.parse(JSON.stringify(ctx.shufleMatrix));

    /* Función que encuentra la posición del elemnto que se le pase por parametro */
    function findPosition(token) {
        let positionToken = [];
        shufleMatrix.forEach((row, rowIndex) => {
            let columnIndex = row.findIndex((column) => column == token);

            if (token == row[columnIndex]) {
                positionToken = [rowIndex, columnIndex];
            }
        });
        return positionToken;
    }

    /* Funcion que recibe le valor y busca la posición de los elemntos (el token y el empty) después verify la jugada y cambia el estado */
    function handleClick(vl) {
        let emptyPosition = findPosition("");
        let tokenPosition = findPosition(vl);

        let canMove = verifyMove(emptyPosition, tokenPosition);

        if (canMove) {
            makeMovement(emptyPosition, tokenPosition);
        }
    }

    /* Función que recibe las posiciones del token y del espacio y verifica si es una jugada valida*/
    function verifyMove(empty, token) {
        /* Primero se verifica que esten en la misma fila */
        if (empty[0] === token[0]) {
            /*Si estan en la misma fila se verifica que la distancia entre las columnas sea igual 1  */
            if (empty[1] - token[1] === 1 || empty[1] - token[1] === -1) {
                return true;
            }
        } else if (empty[1] === token[1]) {
            /* Si estan en las misma columna */
            /* En la misma columna se verifica que esten a un paso de distancia */
            return empty[0] - token[0] === 1 || empty[0] - token[0] ===  -1 ? true : false;
        }

        return false;
    }

    /* Funcion que realiza el movimiento y actualiza el estado */
    function makeMovement(toMove, current) {
        /* remplazar una por la otra */
        shufleMatrix[toMove[0]][toMove[1]] = shufleMatrix[current[0]][current[1]];
        shufleMatrix[current[0]][current[1]] = "";

        ctx.setShufleMatrix(shufleMatrix);
        matrixMatch();
    }

    /* Verifica cuando las dos matrices ya son iguales */
    function matrixMatch() {
        /* convierto las matrices a string para verifica, que penso que iba a iterar? */
        let initialM = JSON.stringify(initialMatrix);
        let shufleM = JSON.stringify(shufleMatrix);

        // console.log({initialM, shufleM});
        /* Verifica si gano */
        if (initialM == shufleM) {
            playSound();
            ctx.setShowModal(true);
            ctx.setWin(true);
        }
    }

    return (
        <>
            {value != "" ? (
                <div
                    onClick={() => {
                        handleClick(value);
                    }}
                    className="bg-slate-800 dark:bg-slate-400 text-slate-300  dark:text-slate-800 shadow-slate-500 rounded-lg flex items-center justify-center font-mono text-4xl font-bold md:text-6xl lg:text-8xl cursor-pointer token dark:token animate-zoom hover:brightness-75 hover:rounded-none transition-all"
                >
                    {value}
                </div>
            ) : (
                <div className="empty">{value}</div>
            )}
        </>
    );
}

export { Token };

/* Pienso que es mejor hacer la función que encuentra la posición del token en este componente y la que encuentra la posición del espacio vacio, entonces en el contexto solo deberia crear la función que se encarge de cambiar los valores y setear el estado */

/* hover:text-3xl md:hover:text-4xl lg:hover:text-7xl */

import { createContext, useState, useEffect, useContext } from "react";

import { DBContext, putInfoUser } from "./DBContext";

export const MainContext = createContext();

export function ContextProvider(props) {
    const DBctx = useContext(DBContext);

    /* Este estado guardara el jugador actual */
    const [player, setPlayer] = useState(undefined);

    /* Estado si esta en juego o no */
    const [playing, setPlaying] = useState(false);

    /* estado para el nivel de dificultad cuando esta vacio se muestra la dificultad */
    const [level, setLevel] = useState("");

    /* Estado por si ha ganado */
    const [win, setWin] = useState(false);

    /* función que setea el estado del level */
    function handleLevel(nv) {
        setLevel(nv.getAttribute("value"));
        createMatrix(nv.getAttribute("value"));
    }

    /* Estado para el modal */
    const [showModal, setShowModal] = useState(false);

    /* cuando se inicia el juego, estoy usando este estado para navegar mas que todo en las secciones 1) Volver para rgistrarse, 2) Cancel para elegir dificultad */
    const [isStart, setIsStart] = useState("Volver");

    /* Matrix inicial osea la que sirve, solo paso el estado y la funcion createMatrix que es la que se encarga de setear los estados */
    const [initialMatrix, setInitialMatrix] = useState([]);
    /* Matrix desordenanda */
    const [shufleMatrix, setShufleMatrix] = useState([]);

    /* Funcion que crea la matrix organizada para ganar el juego */
    function createMatrix(level) {
        let matrix = [];
        let aux = 1;

        let qtLevel = 0;
        if (level == "easy") {
            qtLevel = 3;
        } else if (level == "medium") {
            qtLevel = 4;
        } else if (level == "hard") {
            qtLevel = 5;
        }

        for (let i = 0; i < qtLevel; i++) {
            matrix.push([]);

            for (let j = 0; j < qtLevel; j++) {
                /* Si es el último elemento entonces deja el vacio */
                let value = aux != qtLevel * qtLevel ? aux.toString() : "";
                matrix[i].push(value);
                aux++;
            }
        }
        /* Las matrices en este caso son cuadradas entonces, con saber el "ancho" ya sé cuantos elementos tiene */
        setInitialMatrix(matrix);
        let shufleMatrix = fisherYatesShuffle(qtLevel, matrix);
        setShufleMatrix(shufleMatrix);
    }

    /* funcion que crea la matriz desorganizada */
    // function randomizeMatrix(width = undefined, matrix) {
    //     /* Con este metodo la matriz se forma en ciertas configuraciones donde es imposible ordenarla */
    //     // let size = width * width;
    //     // let arr = [];
    //     // let aux = 1;
    //     // /* creo el array para después desordenarlo y crear la matriz */
    //     // for (let i = 0; i < size; i++) {
    //     //     let value = aux != width * width ? aux.toString() : "";
    //     //     arr.push(value);
    //     //     aux++;
    //     // }

    //     // /* desordeno el array */
    //     // let shufleArr = arr.sort(() => Math.random() - 0.5);
    //     // let count = 0;
    //     // let shufleMatrix = [];

    //     // for (let i = 0; i < width; i++) {
    //     //     shufleMatrix.push([]);

    //     //     for (let j = 0; j < width; j++) {
    //     //         shufleMatrix[i].push(shufleArr[count]);
    //     //         count++;
    //     //     }
    //     // }

    //     // return shufleMatrix;
    //     /* <-------------voy a crearla a partir de la matrix arreglada en donde solo se desordene en las columnas, el metodo sort modifica el arreglo original es por eso que hago una copia*/
    //     let arrShufle = []
    //     matrix.forEach(row => {
    //         let rowCopy = [...row]
    //         let rowShufle = rowCopy.sort(()=> Math.random() - 0.5)
    //         arrShufle.push(rowShufle)
    //     })
    //     console.log(arrShufle)
    //     return arrShufle
    // }
    
    function fisherYatesShuffle(size, matrix) {
        let flatArray = matrix.flat(); // para tener un array simple
        let m = flatArray.length;
        while (m) {
            let i = Math.floor(Math.random() * m--);
            [flatArray[m], flatArray[i]] = [flatArray[i], flatArray[m]];
        }

        // Recortar el arreglo plano para volverlo a formar en una matriz
        let shuffledMatrix = [];
        for (let i = 0; i < size; i++) {
            shuffledMatrix.push(flatArray.slice(i * size, i * size + size));
        }
        return shuffledMatrix;
    }

    /* funcion para pasar de milisegnudos a minutos */
    function convertScore(num) {
        if (num < 1000) {
            return "00:00:00";
        }
        let seconds = num / 1000;

        let hour = Math.floor(seconds / 3600);
        hour = hour < 10 ? "0" + hour : hour;

        let minute = Math.floor((seconds / 60) % 60);
        minute = minute < 10 ? "0" + minute : minute;

        let second = Math.floor(seconds % 60);
        second = second < 10 ? "0" + second : second;

        return hour + ":" + minute + ":" + second;
    }

    /* estado que almacena la duracion de la partida, se incia desde un componente y se finaliza desde otro */

    const [durationGame, setDurationGame] = useState(0);

    /* funcion para tomar el tiempo*/
    function startOfGameTime() {
        return Date.now();
    }
    /* Funcion que devuelve cuanto tiempo se tardo en el juego */
    function endOfGameTime(inicio) {
        let time = Date.now() - inicio;
        /* y despues de convierte */
        return time;
    }

    /* estado para comprobar si esta en la sesion */
    const [inSesion, setInSesion] = useState(false);

    useEffect(() => {
        if (player != undefined) {
            setInSesion(true);
        }
    }, [player]);

    /* Función que actualiza el usuario */
    function updateUser(lv, time, user) {
        const name = user.data.name;
        const pass = user.data.pass;
        const id = user.id;
        /* Actualizo los valores del objeto, para mandarlos a la DB */
        if (lv == "easy") user.data.score.easy = time;
        else if (lv == "medium") user.data.score.medium = time;
        else if (lv == "hard") user.data.score.hard = time;

        putInfoUser(name, pass, user.data.score, id);
    }

    /* Cuando el usuario gane se actualiza la DB */
    useEffect(() => {
        if (win) {
            /* Si el nuevo score es mejor que el anterior entonces lo cambia, si no se deja el que tenia, pero si es la primera partida lo almacena*/

            if (player.data.score[level] == 0) {
                updateUser(level, durationGame, player);
            } else if (durationGame < player.data.score[level]) {
                setAlertType("new-score");
                updateUser(level, durationGame, player);
            } else {
                updateUser(level, player.data.score[level], player);
            }

            /* Si o si se guarda el ultimo juego */
            localStorage.setItem(
                `lastGame-${player.id}`,
                JSON.stringify({
                    level,
                    durationGame,
                })
            );
        }
    }, [win]);

    /* Estado para que alerta mostrar */
    const [alertType, setAlertType] = useState("");

    return (
        <MainContext.Provider
            value={{
                setPlayer,
                player,
                level,
                handleLevel,
                setLevel,
                shufleMatrix,
                setShufleMatrix,
                initialMatrix,
                createMatrix,
                isStart,
                setIsStart,
                playing,
                setPlaying,
                showModal,
                setShowModal,
                win,
                setWin,
                convertScore,
                startOfGameTime,
                endOfGameTime,
                durationGame,
                setDurationGame,
                inSesion,
                setInSesion,
                alertType,
                setAlertType,
            }}
        >
            {props.children}
        </MainContext.Provider>
    );
}

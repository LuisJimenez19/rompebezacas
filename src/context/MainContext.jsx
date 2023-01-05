import { createContext, useState,useEffect } from "react";

export const MainContext = createContext();

export function ContextProvider(props) {


    // useEffect(() => {
        
    // },[])



    /* estado jugador cuando esta vacio se muestra el input */
    const [player, setPlayer] = useState("");

    /* Se llama en el submit del input del nombre y actualiza el estado */
    function handlePlayer(player) {
        setPlayer(player);
    }

    /* Estado si esta en juego o no */
    const [playing, setPlaying] = useState(false)


    /* estado para el nivel de dificultad cuando esta vacio se muestra la dificultad */
    const [level, setLevel] = useState("");
    /* función que setea el estado del level */
    function handleLevel(nv) {
        setLevel(nv.getAttribute("value"));
        createMatrix(nv.getAttribute("value"));
    }

    /* Estado para el modal */
    const [showModal, setShowModal] = useState(false)

    /* cuando se inicia el juego, estoy usando este estado para navegar mas que todo en las secciones 1) Volver para rgistrarse, 2) Cancel para elegir dificultad */
    const [isStart, setIsStart] = useState("Volver");

    /* Matrix inicial osea la que sirve, solo paso el estado y la funcion createMatrix que es la que se encarga de setear los estados */
    const [initialMatrix, setInitialMatrix] = useState([]);
    /* Matrix desordenanda */
    const [shufleMatrix, setShufleMatrix] = useState([]);

    /* Estado por si ha ganado */
    const [win, setWin] = useState(false)

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
        let shufleMatrix = randomizeMatrix(qtLevel);
        setShufleMatrix(shufleMatrix);
    }

    /* funcion que crea la matriz desorganizada */
    function randomizeMatrix(width) {
        let size = width * width;
        let arr = [];
        let aux = 1;
        /* creo el array para después desordenarlo y crear la matriz */
        for (let i = 0; i < size; i++) {
            let value = aux != width * width ? aux.toString() : "";
            arr.push(value);
            aux++;
        }
        /* desordeno el array */
        let shufleArr = arr.sort(() => Math.random() - 0.5);
        let count = 0;
        let shufleMatrix = [];

        for (let i = 0; i < width; i++) {
            shufleMatrix.push([]);

            for (let j = 0; j < width; j++) {
                shufleMatrix[i].push(shufleArr[count]);
                count++;
            }
        }
        return shufleMatrix;
    }

    return (
        <MainContext.Provider
            value={{
                handlePlayer,
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
                setWin
            }}
        >
            {props.children}
        </MainContext.Provider>
    );
}



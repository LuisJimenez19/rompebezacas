import { useState, useContext, useEffect } from "react";
// contexts
import { MainContext } from "../context/MainContext";
import { DBContext } from "../context/DBContext";
/* components */
import { RowTable } from "./RowTable";

function TableUsers() {
    // context
    const ctx = useContext(MainContext);
    const DBctx = useContext(DBContext);

    /* Estado que replica el contexto de los usuarios ordenados por la dificultad, se incializa vacio*/
    const [arrUsers, setArrUsers] = useState([]);

    /* estado para ver que nivel ver */
    const [showLevel, setShowLevel] = useState("easy");

    function sortByLevel(level = "easy") {
        /* itero el arreglo que viene DB, debe que dar de menor a mayor tiempo, pero si es 0 entonces debe ir al final de la tabla de posiciones */
        let arrSort = DBctx.users.sort((a, b) => {
            // console.log(a.data.score[level]);

            if (b.data.score[level] < 100 && a.data.score[level] < 100) {
                return a.data.score[level] - b.data.score[level];

            } else if (b.data.score[level] >= 100 && a.data.score[level] >= 100) {
                return a.data.score[level] - b.data.score[level];

            } else if (b.data.score[level] >= 100) {
                return 1;
                
            } else {
                return -1;
            }
        });

        setArrUsers(arrSort);
    }

    /* Se ejecuta dependiendo cuando cambie el estado para filtrar por level */
    useEffect(() => {
        sortByLevel();
    }, []),
        /* Se ejecuta cuando cambia el estado principal que viene de DB */

        useEffect(() => {
            // setArrUsers(DBctx.users);
            sortByLevel();
        }, [DBctx.users]);

    /* currentPlayer */
    if (DBctx.users.length == 0) {
        return (
            <div className="grid place-content-center h-16">
                <p>No hay usuarios todavía</p>
            </div>
        );
    } else {
        return (
            <div className="relative mt-5 ">
                <div className="mx-auto text-center w-8/12 md:w-6/12 lg:w-4/12 xl:w-4/12 animate-zoom">
                    <p className="text-xl md:text-4xl font-mono font-extrabold ">Tabla de posiciones</p>

                    <ul className="flex border-b dark:border-gray-100 border-gray-400">
                        <li className="flex-1 cursor-pointer hover:opacity-75 hover:scale-105 transition ">
                            <a
                                onClick={() => {
                                    sortByLevel("easy");
                                    setShowLevel("easy");
                                }}
                                className="relative block p-4"
                            >
                                {showLevel == "easy" ? (
                                    <span className="absolute inset-x-0 -bottom-px h-0.5 w-full dark:bg-lime-600 bg-pink-600 animate-zoom" />
                                ) : null}
                                <div className="flex items-center justify-center">
                                    <span className="ml-3 text-sm font-medium text-gray-900 dark:text-slate-300"> Facil </span>
                                </div>
                            </a>
                        </li>
                        <li className="flex-1 cursor-pointer hover:opacity-75 hover:scale-105 transition ">
                            <a
                                onClick={() => {
                                    sortByLevel("medium");
                                    setShowLevel("medium");
                                }}
                                className="relative block p-4"
                            >
                                {showLevel == "medium" ? (
                                    <span className="absolute inset-x-0 -bottom-px h-0.5 w-full dark:bg-lime-600 bg-pink-600 animate-zoom" />
                                ) : null}
                                <div className="flex items-center justify-center">
                                    <span className="ml-3 text-sm font-medium text-gray-900 dark:text-slate-300"> Medio </span>
                                </div>
                            </a>
                        </li>
                        <li className="flex-1 cursor-pointer hover:opacity-75 hover:scale-105 transition ">
                            <a
                                onClick={() => {
                                    sortByLevel("hard");
                                    setShowLevel("hard");
                                }}
                                className="relative block p-4"
                            >
                                {showLevel == "hard" ? (
                                    <span className="absolute inset-x-0 -bottom-px h-0.5 w-full dark:bg-lime-600 bg-pink-600 animate-zoom" />
                                ) : null}
                                <div className="flex items-center justify-center">
                                    <span className="ml-3 text-sm font-medium text-gray-900 dark:text-slate-300"> Dificil </span>
                                </div>
                            </a>
                        </li>
                    </ul>
                </div>

                {/* <---------------------tabla---------------------------> */}
                <div id="table-bg" className="overflow-x-auto overflow-y-auto max-h-80">
                    <table id="table-users" className="mx-auto text-sm text-left text-gray-700 dark:text-gray-300">
                        <thead className="text-xs text-gray-900 uppercase dark:text-gray-400 animate-upToDown border-b">
                            <tr>
                                <th
                                    scope="col"
                                    className="px-6 py-3 text-sm  bg-gradient-to-r from-slate-800 via-blue-500 to-blue-900 dark:from-slate-300 dark:to-blue-400 bg-clip-text text-transparent  animate-pulse"
                                >
                                    Nickname
                                </th>
                                {/* <th scope="col" className="px-6 py-3">
                    
                                </th> */}
                                <th
                                    scope="col"
                                    className="px-6 py-3 text-sm  bg-gradient-to-r from-slate-800 via-blue-500 to-blue-900 dark:from-slate-300 dark:to-blue-400 bg-clip-text text-transparent  animate-pulse"
                                >
                                    Fecha de registro
                                </th>
                                <th
                                    scope="col"
                                    className="px-6 py-3 text-sm  bg-gradient-to-r from-slate-800 via-blue-500 to-blue-900 dark:from-slate-300 dark:to-blue-400 bg-clip-text text-transparent  animate-pulse"
                                >
                                    Puntuación
                                </th>
                            </tr>
                        </thead>
                        <tbody className="">
                            {arrUsers.map((obj, index) => {
                                // console.log(obj);
                                return <RowTable pos={index + 1} level={showLevel} objeto={obj} key={index} />;
                            })}
                        </tbody>
                    </table>
                </div>
            </div>
        );
    }
}

export { TableUsers };

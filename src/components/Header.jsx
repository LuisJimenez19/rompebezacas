import { FaUser } from "react-icons/fa";
import { AiOutlineSend } from "react-icons/ai";

import { MainContext } from "../context/MainContext";
import { ThemeToggler } from "./ThemeToggler";
import { BtnStar } from "./BtnStar";

import { useState, useRef, useContext } from "react";

function Header() {
    /* estilizar */
    const [colorIcon, setColorIcon] = useState("");
    const labelRef = useRef(null);

    // Contexto
    const ctx = useContext(MainContext);

    function handleFocus() {
        labelRef.current.classList.toggle("animate-spin");
    }

    function handleSubmit(e) {
        e.preventDefault();
        ctx.handlePlayer(document.getElementById("user").value);
    }

    return (
        <header id="header" className="flex flex-col gap-5">
            <div className="container font-rubik text-4xl md:text-5xl lg:text-8xl text-slate-800 dark:text-slate-400 transition-all relative flex justify-between items-center mx-auto pt-8 px-5 sm:justify-center sm:gap-4">
                RompeBezacas
                <ThemeToggler setColorIcon={setColorIcon} />
            </div>
            {ctx.player == "" ? (
                <div className="justify-center flex items-center gap-3 w-1/4 mx-auto">
                    <label ref={labelRef} htmlFor="user" className="scale-150 transition-all">
                        <FaUser size={15} color={colorIcon == "dark" ? "#fff" : "#000"} />
                    </label>
                    <form className="flex" onSubmit={handleSubmit}>
                        <input
                            onFocus={handleFocus}
                            onBlur={handleFocus}
                            autoComplete="off"
                            placeholder="Ingresa tu nombre"
                            id="user"
                            type="text"
                            className="outline-none text-slate-900 dark:text-slate-200  px-4 py-3  flex-grow sm:text-xl bg-transparent border-b-2 border-slate-900 dark:border-slate-200 rounded-md transition"
                        />
                        <button>
                            <AiOutlineSend />
                        </button>
                    </form>
                </div>
            ) : (
                <div id="container-levels" className="w-4/5 sm:w-3/4 lg:w-1/3 mx-auto flex items-center justify-around  transition">
                    <div className="flex flex-col gap-1 items-center w-full">
                        <p className="font-bold text-xl md:text-3xl  text-slate-800 dark:text-slate-400 transition">{ctx.player}</p>

                        {ctx.level != "" ? (
                            <div className="text-center font-bold text-md md:text-2xl  text-slate-800 dark:text-slate-400 transition">
                                <p className="mb-3">Nivel dificultad: {ctx.level}</p>
                                <BtnStar />
                            </div>
                        ) : (
                            <div className="text-center">
                                <p className="text-slate-600 dark:text-slate-50 transition text-xl md:text-2xl font-bold mb-2">Elegir dififultad</p>
                                <div className="flex justify-around items-center gap-3 w-screen max-w-2xl px-5 border-purple-900">
                                    <span
                                        onClick={(e) => {
                                            ctx.handleLevel(e.currentTarget);
                                            ctx.setIsStart("Start");
                                        }}
                                        value="easy"
                                        className="text-slate-800 dark:text-slate-400 transition text-base md:text-xl border dark:border-slate-50 border-slate-900 rounded-md p-2 cursor-pointer hover:animate-pulse hover:dark:bg-slate-300 hover:dark:text-slate-800 hover:bg-slate-700 hover:text-slate-200 flex-grow"
                                    >
                                        Fácil
                                    </span>

                                    <span
                                        onClick={(e) => {
                                            ctx.handleLevel(e.currentTarget);
                                            ctx.setIsStart("Start");
                                        }}
                                        value="medium"
                                        className="text-slate-800 dark:text-slate-400 transition text-base md:text-xl border dark:border-slate-50 border-slate-900 rounded-md p-2 cursor-pointer hover:animate-pulse hover:dark:bg-slate-300 hover:dark:text-slate-800 hover:bg-slate-700 hover:text-slate-200 flex-grow"
                                    >
                                        Medio
                                    </span>

                                    <span
                                        onClick={(e) => {
                                            ctx.handleLevel(e.currentTarget);
                                            ctx.setIsStart("Start");
                                        }}
                                        value="hard"
                                        className="text-slate-800 dark:text-slate-400 transition text-base md:text-xl border dark:border-slate-50 border-slate-900 rounded-md p-2 cursor-pointer hover:animate-pulse hover:dark:bg-slate-300 hover:dark:text-slate-800 hover:bg-slate-700 hover:text-slate-200 flex-grow"
                                    >
                                        Difícil
                                    </span>
                                    {ctx.isStart == "Volver" ? <BtnStar /> : null}
                                </div>
                            </div>
                        )}
                    </div>

                    {/*  <ul>
                    <span className="border-b-2 border-slate-900 dark:border-slate-200 text-base md:text-xl  text-slate-800 dark:text-slate-400 transition ">
                        Puntuación
                    </span>
                    <li className="md:text-xl  text-slate-800 dark:text-slate-400 transition">1) 00:30</li>
                    <li className="md:text-xl  text-slate-800 dark:text-slate-400 transition">2) 01:32</li>
                    <li className="md:text-xl  text-slate-800 dark:text-slate-400 transition">3) 02:20</li>
                </ul> */}
                </div>
            )}
        </header>
    );
}
/* bg-slate-500 dark:bg-slate-200 */

/* "text-4xl md:text-5xl lg:text-8xl text-slate-800 dark:text-slate-400 transition" */
export { Header };

/* El header nunca cambia contiene el titulo y el toggle el input del nombre cambia cuando 
se ingrese un valor al igual al elegir el nivel */
/* Al ingresar un valor se muestra el componente para elegir un nivel
al elegir un nivel se muestra el tablero y al cancela se setea el player y el level lo que vuelve todo al principio 
Al momento de elegir un nivel se crean las matrices y se muestra la inicial antes de comenzar el juego, al comenzar el juego se muestra muestra la otra matriz */

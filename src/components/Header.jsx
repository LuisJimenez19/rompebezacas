import { useState, useRef, useContext } from "react";
/* icons */
import { FaUser } from "react-icons/fa";
import { AiOutlineSend } from "react-icons/ai";
/* contexts */
import { MainContext } from "../context/MainContext";
import { DBContext } from "../context/DBContext";

import { ThemeToggler } from "./ThemeToggler";
import { BtnStar } from "./BtnStar";
import { ChooseLevel } from "./ChooseLevel";

function Header() {
    /* estilizar */
    const [colorIcon, setColorIcon] = useState("");
    const labelRef = useRef(null);

    // Contexts
    const ctx = useContext(MainContext);
    const DBctx = useContext(DBContext);

    function handleFocus() {
        labelRef.current.classList.toggle("animate-spin");
    }

    function handleSubmit(e) {
        e.preventDefault();
        ctx.handlePlayer(document.getElementById("user").value);
    }

    function backInit() {
        DBctx.setView("home");
    }

    return (
        <header id="header" className="flex flex-col gap-5">
            <div className="container font-rubik text-4xl md:text-5xl text-blue-600 dark:text-slate-400 transition-all relative flex justify-between items-center mx-auto pt-8 px-5  sm:gap-4 ">
                <a onClick={backInit} className="cursor-pointer hover:brightness-150 transition">
                    RompeBezacas
                </a>

                <ThemeToggler setColorIcon={setColorIcon} />
            </div>
           {/*  {ctx.player == "" ? null : (
                Esto lo cambio por el login
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
                <ChooseLevel />
            )} */}
        </header>
    );
}
/* bg-slate-500 dark:bg-slate-200 */

/* "text-4xl md:text-5xl lg:text-8xl text-slate-800 dark:text-slate-400 transition" */
export { Header };

/* 05/01 El header nunca cambia contiene el titulo y el toggle el input del nombre cambia cuando 
se ingrese un valor al igual al elegir el nivel */
/* Al ingresar un valor se muestra el componente para elegir un nivel
al elegir un nivel se muestra el tablero y al cancela se setea el player y el level lo que vuelve todo al principio 
Al momento de elegir un nivel se crean las matrices y se muestra la inicial antes de comenzar el juego, al comenzar el juego se muestra muestra la otra matriz */

/* 06/01  
He decidido agregarle una backend para poder que todos los usuarios vean sus puntajes
voy a usar firbase que ni puta idea pero pueso lo voy aprender haciendo este proyecto también, voy agregar un login, entonces en el header solo se pondra*/

import { MainContext } from "../context/MainContext";
import { useContext } from "react";
import {BtnStar} from './BtnStar'

function ChooseLevel() {
    const ctx = useContext(MainContext);
    return (
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
        </div>
    );
}

export { ChooseLevel };

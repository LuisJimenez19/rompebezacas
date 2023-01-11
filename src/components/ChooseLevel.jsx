import { MainContext } from "../context/MainContext";
import { useContext } from "react";
import { BtnStar } from "./BtnStar";

function ChooseLevel() {
    const ctx = useContext(MainContext);
    /* Se pregunta si el jugador actual tiene ultima partdia */
    let lastGame;
    if (localStorage.getItem(`lastGame-${ctx.player.id}`)) {
        lastGame = localStorage.getItem(`lastGame-${ctx.player.id}`);
        lastGame = JSON.parse(lastGame);
    }
    return (
        <div id="container-levels" className="w-4/5 sm:w-3/4 lg:w-1/3 mx-auto flex items-center justify-around  transition">
            <div className="flex flex-col gap-1 items-center w-full">
                <p className="font-bold text-xl md:text-3xl  text-slate-800 dark:text-slate-400 transition">{ctx.player.data.name}</p>

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

                        <div>
                            {lastGame == undefined ? (
                                <dd className="mt-10 animate-upToDown text-2xl font-bold break-words text-blue-600 md:text-3xl">
                                    <p className="animate-bounce" >Juega tu primera partida</p>
                                </dd>
                            ) : (
                                <div className="mt-5 max-w-xl w-10/12 mx-auto">
                                    <div className="transition hover:translate-y-2 flex flex-col rounded-lg border dark:border-gray-100 px-2 py-6 text-center border-gray-800">
                                        <dt className="animate-zoom text-lg font-medium text-gray-500 dark:text-gray-400">
                                            {" "}
                                            Ultimo partdia: {lastGame.level}{" "}
                                        </dt>
                                        <dd className="animate-upToDown text-2xl font-bold break-words text-blue-600 md:text-3xl">
                                            <p>{ctx.convertScore(lastGame.durationGame)}</p>
                                        </dd>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}

{/* <h1>Ultimo partdia {lastGame.level}</h1>
<p>{ctx.convertScore(lastGame.durationGame)}</p> */}
export { ChooseLevel };

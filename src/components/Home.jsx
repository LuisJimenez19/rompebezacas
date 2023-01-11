import { useContext, useEffect, useState } from "react";
/* context */
import { MainContext } from "../context/MainContext";
import { DBContext } from "../context/DBContext";
/* components */
import { Loader } from "./Loader";
import { SideNav } from "./SideNav";
import { TableUsers } from "./TableUsers";

function Home({ chooseView }) {
    const ctx = useContext(MainContext);
    const DBctx = useContext(DBContext);

    if (!ctx.inSesion) {
        return (
            <div className="flex items-center flex-col gap-3 justify-center h-96">
                <h1
                    onClick={chooseView}
                    className="border border-black p-5 dark:border-gray-400 rounded-lg font-bold font-mono text-3xl md:text-7xl text-center bg-gradient-to-r from-slate-800 via-blue-500 to-blue-900 dark:from-slate-300 dark:to-blue-400 bg-clip-text text-transparent sm:text-3xl  animate-pulse shadow-2xl cursor-pointer hover:scale-95"
                >
                    Login
                </h1>

                <h1
                    onClick={chooseView}
                    className="border border-black p-5 dark:border-gray-400 rounded-lg font-bold font-mono text-3xl md:text-7xl text-center bg-gradient-to-r from-slate-800 via-blue-500 to-blue-900 dark:from-slate-300 dark:to-blue-400 bg-clip-text text-transparent sm:text-3xl  animate-pulse shadow-2xl cursor-pointer hover:scale-95"
                >
                    Register
                </h1>

                {/* <div className="loader-container rounded-full bg-slate-400 dark:bg-transparent "></div> */}
            </div>
        );
    } else {
        if (ctx.player != undefined && DBctx.view == "home" && ctx.inSesion) {
            return (
                <div className=" border-slate-900 mt-5 ">
                    {/* ------------------------------------------------------ */}
                    <section className="">
                        <div className="mx-auto max-w-screen-md px-4 py-1 sm:px-6 md:py-3 lg:px-8">
                            <div className="mx-auto max-w-3xl text-center animate-zoom">
                                <h1 className="font-bold font-mono text-3xl md:text-7xl text-center bg-gradient-to-r from-slate-800 via-blue-500 to-blue-900 dark:from-slate-300 dark:to-blue-400 bg-clip-text text-transparent sm:text-3xl  animate-pulse">
                                    Welcome {ctx.player.data.name}
                                </h1>
                                <h3 className="font-bold font-mono text-3xl md:text-5xl text-center bg-gradient-to-r from-slate-700 via-purple-900 to-orange-900 dark:from-slate-300 dark:to-blue-400 bg-clip-text text-transparent sm:text-2xl animate-pulse">
                                    Mejor Puntuación
                                </h3>
                            </div>

                            <div className="mt-3 sm:mt-6">
                                <dl className="grid grid-cols-1 gap-4 sm:grid-cols-3">
                                    <div className="transition hover:translate-y-2 flex flex-col rounded-lg border dark:border-gray-100 px-2 py-6 text-center border-gray-800">
                                        <dt className="animate-zoom text-lg font-medium text-gray-500 dark:text-gray-400"> Facil </dt>
                                        <dd className="animate-upToDown text-2xl font-bold break-words text-blue-600 md:text-3xl">
                                            {ctx.convertScore(ctx.player.data.score.easy)}
                                        </dd>
                                    </div>
                                    <div className="transition hover:translate-y-2 flex flex-col rounded-lg border dark:border-gray-100 px-2 py-6 text-center border-gray-800">
                                        <dt className="animate-zoom text-lg font-medium text-gray-500 dark:text-gray-400"> Medio </dt>
                                        <dd className="animate-upToDown text-2xl font-bold break-words text-blue-600 md:text-3xl">
                                            {ctx.convertScore(ctx.player.data.score.medium)}
                                        </dd>
                                    </div>
                                    <div className="transition hover:translate-y-2 flex flex-col rounded-lg border dark:border-gray-100 px-2 py-6 text-center border-gray-800">
                                        <dt className="animate-zoom text-lg font-medium text-gray-500 dark:text-gray-400"> Dificil </dt>
                                        <dd className="animate-upToDown text-2xl font-bold break-words text-blue-600 md:text-3xl">
                                            {ctx.convertScore(ctx.player.data.score.hard)}
                                        </dd>
                                    </div>
                                </dl>
                            </div>
                        </div>
                    </section>
                    <div className="flex flex-col md:flex-row items-center justify-center gap-3  w-6/12 mx-auto my-2 md:my-0">
                        <button
                            onClick={() => {
                                DBctx.setView("chooseLevel");
                            }}
                            className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-16 py-2.5 text-center  block hover:scale-95 transition"
                        >
                            Jugar
                        </button>
                        <button
                            onClick={() => {
                                DBctx.setView("init");
                                ctx.setPlayer(undefined);
                                ctx.setLevel("");
                                ctx.setWin(false);
                                ctx.setPlaying(false);
                                ctx.setIsStart("Volver");
                                ctx.setShufleMatrix([])
                                ctx.setInSesion(false);
                                localStorage.removeItem("session")
                            }}
                            className="text-red-700 hover:text-white border border-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-10  py-2.5 text-center dark:border-red-500 dark:text-red-500 dark:hover:text-white dark:hover:bg-red-600 dark:focus:ring-red-900  block hover:scale-95 transition"
                        >
                            Cerrar sesion
                        </button>
                    </div>

                    {/* <p>{ctx.player.user.score}</p> */}
                    <TableUsers />
                </div>
            );
        } else {
            return (
                <div className="flex items-center flex-col gap-3 justify-center h-96">
                    <Loader />
                    {/* <div className="loader-container rounded-full bg-slate-400 dark:bg-transparent "></div> */}
                </div>
            );
        }
    }
}

export { Home };

/* Si uso un useEffect en el register y cuando ya se haya almacenado el usuario cambio la vista, se queda en el register y cambia directo al home, y lo cambio directamente antes de que se almacene y en el home pregunto hasta que este registrado se queda espetando a la respuesta, 
ya lo cambié lo que pasa es que en la llamada arenderizar el componente había puesto que este solo se renderizara hasta ctx.player ya no sea undefined es por eso que saltaba di una entonces ahora si rey. */

/* Hacer la tabla, compenete */

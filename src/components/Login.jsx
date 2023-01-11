import { useContext, useEffect, useRef, useState } from "react";
import { DBContext } from "../context/DBContext";
import { MainContext } from "../context/MainContext";
import { BtnHome } from "./BtnHome";

function Login({ chooseView }) {
    const inputUserRef = useRef(null);
    const passRef = useRef(null);

    const ctx = useContext(MainContext);
    const DBctx = useContext(DBContext);

    const [isValitade, setIsValitade] = useState("");

    function handleLogin(e) {
        e.preventDefault();
        let name = inputUserRef.current.value;
        let pass = passRef.current.value;
        // console.log({ name, pass });
        // console.log(DBctx.users)
        verifyUser(name, pass);
    }

    /*  useEffect(() => {
        console.log(DBctx.users);
    },[]) */

    /* compureba si existe ese usuario y contraseña */
    function verifyUser(name, pass) {
        if (DBctx.users.length == 0) {
            console.log("ninguno");
            setIsValitade("No se encontro una cuenta con ese nickname, verifique y vuelva a intentarlo.");

            setTimeout(() => {
                setIsValitade("");
            }, 2000);
            // return user;
        } else {
            let userActual = DBctx.users.find((user,index) => {
                console.log(user, index)
                if (user.data.name === name && user.data.pass === pass) {
                    /* Estado para las alertas */
                    ctx.setInSesion(true);
                    setIsValitade("bien hecho rey");
                    /* jugador actual */
                    ctx.setPlayer(user);
                    localStorage.setItem("session", JSON.stringify(user));
                    /* Cambio de vista */
                    DBctx.setView("home");
                    return user;
                } else if (user.data.name === name && user.data.pass != pass) {
                    console.log("Contraseña inc");
                    setIsValitade("Contraseña incorrecta");
                    setTimeout(() => {
                        setIsValitade("");
                    }, 2000);
                    // return user;
                } else {
                    console.log("ninguno");
                    setIsValitade("Verifique sus datos y vuelva a intentarlo.");

                    setTimeout(() => {
                        setIsValitade("");
                    }, 2000);
                    // return user;
                }
            });
        }
    }

    return (
        <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8 animate-zoom">
            <div className="mx-auto max-w-lg">
                <h1 className="text-center text-2xl font-bold bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 bg-clip-text text-transparent sm:text-3xl">
                    Play today
                </h1>
                <p className="mx-auto mt-4 max-w-md text-center text-slate-800 dark:text-slate-300 text-xl font-serif">
                    Inicia sesión para poder disfrutar y pasar un rato agradable
                    <small className="text-sm text-center block font-mono mt-2">Asegurate de primero haber hecho tus deberes</small>
                </p>
                <form onSubmit={handleLogin} className="mt-6 mb-0 space-y-4 rounded-lg p-8 shadow-2xl">
                    {/* <p className="text-lg font-medium">Sign in to your account</p> */}
                    <div>
                        <label
                           
                            htmlFor="email"
                            className="text-sm font-medium"
                        >
                            Nombre
                        </label>
                        <div className="relative mt-1">
                            <input
                                required
                                ref={inputUserRef}
                                type="User"
                                id="User"
                                className="w-full rounded-lg text-slate-900 border-gray-200 p-4 pr-12 text-sm  md:text-base shadow-sm"
                                placeholder="Ingresa tu nombre"
                                autoComplete="off"
                            />
                            <span className="absolute inset-y-0 right-4 inline-flex items-center">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"
                                    />
                                </svg>
                            </span>
                        </div>
                    </div>
                    <div>
                        <label
                            onClick={() => {
                                DBctx.deleteUser("T5rHRwaIFngmpPBHq2dm");
                            }}
                            htmlFor="password"
                            className="text-sm font-medium"
                        >
                            Contraseña
                        </label>
                        <div className="relative mt-1">
                            <input
                                required
                                ref={passRef}
                                type="password"
                                id="password"
                                className="w-full rounded-lg border-gray-200 text-slate-900 p-4 pr-12 text-sm md:text-base shadow-sm"
                                placeholder="Ingresa tu contraseña"
                            />
                            <span className="absolute inset-y-0 right-4 inline-flex items-center">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                                    />
                                </svg>
                            </span>
                        </div>
                    </div>
                    <button
                        type="submit"
                        className="block w-full rounded-lg bg-indigo-600 px-5 py-3 text-sm font-medium text-white hover:scale-105 hover:brightness-125 transition"
                    >
                        Sign in
                    </button>
                    <p className="text-center text-sm text-gray-700 dark:text-gray-400 ">
                        No account?
                        <a onClick={chooseView} className="inline-block underline ml-2 cursor-pointer hover:scale-105 dark:hover:text-white transition">
                            Register
                        </a>
                    </p>
                </form>
                {/* Para que sirva el ternario debe estar entre un contenedor */}
                <div>
                    {isValitade === "" ? null : (
                        <div
                            className="animate-show flex p-4 mb-4 text-sm text-red-700 border border-red-300 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400 dark:border-red-800 pointer-events-none mt-5"
                            role="alert"
                        >
                            <svg
                                aria-hidden="true"
                                className="flex-shrink-0 inline w-5 h-5 mr-3"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    fillRule="evenodd"
                                    d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
                                    clipRule="evenodd"
                                />
                            </svg>
                            <span className="sr-only">Info</span>
                            <div>
                                <span className="font-medium">{isValitade}</span>
                            </div>
                        </div>
                    )}
                </div>
            </div>
            {/* <BtnHome /> */}
        </div>
    );
}

export { Login };

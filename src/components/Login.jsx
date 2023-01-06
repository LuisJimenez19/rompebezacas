import { useContext, useRef } from "react";
import { MainContext } from "../context/MainContext";
import { BtnHome } from "./BtnHome";

function Login({ handleClick }) {
    const inputUserRef = useRef(null);

    const ctx = useContext(MainContext);

    function handleSubmit(e) {
        e.preventDefault();
        ctx.handlePlayer(inputUserRef.current.value);
    }
    if (ctx.player == "") {
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
                    <form onSubmit={handleSubmit} className="mt-6 mb-0 space-y-4 rounded-lg p-8 shadow-2xl">
                        {/* <p className="text-lg font-medium">Sign in to your account</p> */}
                        <div>
                            <label htmlFor="email" className="text-sm font-medium">
                                Nombre
                            </label>
                            <div className="relative mt-1">
                                <input
                                    ref={inputUserRef}
                                    type="User"
                                    id="User"
                                    className="w-full rounded-lg border-gray-200 p-4 pr-12 text-sm shadow-sm"
                                    placeholder="Ingresa tu nombre"
                                    autoComplete="off"
                                />
                                <span className="absolute inset-y-0 right-4 inline-flex items-center">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-5 w-5 text-gray-400"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                    >
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
                            <label htmlFor="password" className="text-sm font-medium">
                                Contraseña
                            </label>
                            <div className="relative mt-1">
                                <input
                                    type="password"
                                    id="password"
                                    className="w-full rounded-lg border-gray-200 p-4 pr-12 text-sm shadow-sm"
                                    placeholder="Ingresa tu contraseña"
                                />
                                <span className="absolute inset-y-0 right-4 inline-flex items-center">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-5 w-5 text-gray-400"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                    >
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
                        <button type="submit" className="block w-full rounded-lg bg-indigo-600 px-5 py-3 text-sm font-medium text-white">
                            Sign in
                        </button>
                        <p className="text-center text-sm text-gray-500">
                            No account?
                            <a onClick={handleClick} className="underline ml-2">
                                Register
                            </a>
                        </p>
                    </form>
                </div>
                {/* <BtnHome /> */}
            </div>
        );
    }
}

export { Login };

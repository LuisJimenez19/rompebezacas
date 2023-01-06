import React from "react";
import { BtnStar } from "./BtnStar";
import {BtnHome} from './BtnHome'
function Register({ handleClick }) {
    function handleSubmit(e) {
        e.preventDefault();
    }

    return (
        <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8 animate-zoom">
            <div className="mx-auto max-w-lg text-center">
                <h1 className="text-2xl font-bold sm:text-3xl bg-gradient-to-t from-green-300 via-blue-500 to-purple-600 bg-clip-text text-transparent">
                    Registrate para empezar a jugar
                </h1>
                <p className="mt-4 text-slate-800 dark:text-slate-300"></p>
            </div>
            <form onSubmit={handleSubmit} className="mx-auto mt-8 mb-0 max-w-md space-y-4">
                <div>
                    <label htmlFor="email" className="sr-only">
                        Nombre
                    </label>
                    <div className="relative">
                        <input type="email" className="w-full rounded-lg border-gray-200 p-4 pr-12 text-sm shadow-sm" placeholder="Ingresa tu nombre" />
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
                    <label htmlFor="password" className="sr-only">
                        Contraseña
                    </label>
                    <div className="relative">
                        <input type="password" className="w-full rounded-lg border-gray-200 p-4 pr-12 text-sm shadow-sm" placeholder="Contraseña" />
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
                <div className="flex items-center justify-between">
                    <p className="text-sm text-gray-500">
                        Ya tienes una cuenta?
                        <a onClick={handleClick} className="underline ml-2">
                            Login
                        </a>
                    </p>
                    <button type="submit" className="ml-3 inline-block rounded-lg bg-blue-500 px-5 py-3 text-sm font-medium text-white">
                        Sign in
                    </button>
                </div>
            </form>
            {/* <BtnHome/> */}
        </div>
    );
}

export { Register };

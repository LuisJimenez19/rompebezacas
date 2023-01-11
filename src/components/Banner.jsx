/* Si se renderiza esta vista significa que se va a registrar */
/* Esta es la vista a la que llega siempre cuando se entra a la pagína entonces aquí es donde voy a verificar si ya se ha registrado y si quiere logearse automaticamente */
import {useState,useEffect,useContext} from 'react'

import {DBContext} from '../context/DBContext'
import {MainContext} from '../context/MainContext'
function Banner({ chooseView }) {

    const ctx = useContext(MainContext)
    const DBctx = useContext(DBContext)
    /* Verifica si en el localStorage hay un usuario, solo lo voy hacer con el últmo usuario registrado */
    function verfirySession() {
        if (localStorage.getItem("session")) {
            let storageSession = localStorage.getItem("session")
            storageSession = JSON.parse(storageSession)
            console.log(DBctx.users)
            console.log(storageSession);

            const beforeRegistered = DBctx.users.find((usuario) => usuario.id === storageSession.id);
            ctx.setInSesion(true)
            if (beforeRegistered) {
                DBctx.setView("home")
                console.log(("Inicio rapido"))
                ctx.setAlertType("quick-start");
                ctx.setPlayer(beforeRegistered)
            }
            // console.log(storageSession)
        }
    }
    useEffect(() => {
        verfirySession()
    },[DBctx.users])
    return (
        <section className="text-slate-900 dark:text-white animate-show">
            <div className="mx-auto max-w-screen-xl px-4 py-32 lg:flex lg:items-center">
                <div className="mx-auto max-w-3xl text-center">
                    <h1 className="bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 bg-clip-text font-extrabold text-transparent text-xl sm:text-5xl">
                        ¡Bienvenidos a nuestro juego de rompecabezas! {/* <span className="sm:block">If you can?</span> */}
                    </h1>
                    <p className="mx-auto mt-4 max-w-xl sm:text-xl sm:leading-relaxed">
                        Si te gustan los retos mentales, y competir este juego es ideal para ti.
                    </p>
                    <small className="text-sm">Asegurate de primero haber hecho tus deberes</small>
                    <div className="mt-8 flex flex-wrap justify-center gap-4">
                        <a
                            onClick={chooseView}
                            className="block w-full rounded border border-blue-600 bg-blue-600 px-12 py-3 text-sm font-medium text-white hover:bg-transparent hover:text-blue-600 dark:hover:text-slate-200 focus:outline-none focus:ring active:text-opacity-75 sm:w-auto hover:scale-105 hover:brightness-125 transition cursor-pointer"
                        >
                            Register
                        </a>
                        <a
                            onClick={chooseView}
                            className="block w-full rounded border border-blue-600 px-12 py-3 text-sm font-medium text-blue-700 hover:bg-blue-600 hover:text-white  focus:outline-none focus:ring active:bg-blue-500 sm:w-auto hover:scale-105 hover:brightness-125 transition cursor-pointer"
                        >
                            Login
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}

export { Banner };

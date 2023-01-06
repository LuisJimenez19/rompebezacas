
function Banner({ aux, setAux, handleClick }) {

    return (
        <section className="text-slate-900 dark:text-white animate-upToDown">
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
                        <a onClick={handleClick} className="block w-full rounded border border-blue-600 bg-blue-600 px-12 py-3 text-sm font-medium text-white hover:bg-transparent hover:text-blue-600 dark:hover:text-slate-200 focus:outline-none focus:ring active:text-opacity-75 sm:w-auto">
                            Register
                        </a>
                        <a onClick={handleClick}  className="block w-full rounded border border-blue-600 px-12 py-3 text-sm font-medium text-blue-700 hover:bg-blue-600 hover:text-white  focus:outline-none focus:ring active:bg-blue-500 sm:w-auto">
                            Login
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}

export { Banner };

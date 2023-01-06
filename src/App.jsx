import { useState, useContext, useEffect } from "react";
import { Header } from "./components/Header";
import { Banner } from "./components/Banner";
import { Login } from "./components/Login";
import { Register } from "./components/Register";
import { BtnHome } from "./components/BtnHome";
import { Board } from "./components/Board";
import { ModalNotice } from "./components/ModalNotice";
import { Footer } from "./components/Footer";

import { MainContext } from "./context/MainContext";

function App() {
    const ctx = useContext(MainContext);

    /* Estado auxiliar para ver el comportamiento de la app */
    const [aux, setAux] = useState(undefined);

    useEffect(() => {
        setAux("");
    }, []);

    if (ctx.showModal == true) {
        setTimeout(() => {
            ctx.setShowModal(false);
        }, 2500);
    }

    /* Esto es lo que simularia las rutas mi rey ya que ni puta idea, osea es como se me ocurre hacerlo con mis conocimientos actuales de lo que estudiado como tal y de lo que he aprendido en las "pasantias con el senior" */
    function handleClick(e) {
        console.log(e.target.firstChild.data);
        let value = e.target.firstChild.data;
        setAux(value.toLowerCase());
    }

    function renderComponentRuta(ruta) {
        let component;
        if (ruta == "") component = <Banner handleClick={handleClick} />;
        else if (ruta == "login") component = <Login handleClick={handleClick} />;
        else if (ruta == "register") component = <Register handleClick={handleClick} />;
        return component;
    }
    let component = renderComponentRuta(aux);
    // <div>
    //     if (aux == "") {
    //         return (
    //             <div className="body min-w-full min-h-screen antialiased text-slate-500 dark:text-slate-400 bg-white dark:bg-slate-900 transition bg-cover bg-no-repeat bg-center lg:bg-left-top animate-show">
    //                 <Header />
    //                 {/* Esto se va a ir mostrando dependiendo de los estados */}
    //                 <Banner /* aux={aux} setAux={setAux} */ handleClick={handleClick} />
    //                 <Board />
    //                 {ctx.showModal == true ? <ModalNotice /> : null}
    //                 <Footer />
    //             </div>
    //         );
    //     } else if (aux == "login") {
    //         return (
    //             <div className="body min-w-full min-h-screen antialiased text-slate-500 dark:text-slate-400 bg-white dark:bg-slate-900 transition bg-cover bg-no-repeat bg-center lg:bg-left-top animate-show">
    //                 <Header />
    //                 {/* Esto se va a ir mostrando dependiendo de los estados */}
    //                 {/* <Banner /> */}
    //                 <Login handleClick={handleClick} />
    //                 {/* <Register /> */}
    //                 <Board />
    //                 {ctx.showModal == true ? <ModalNotice /> : null}
    //                 <Footer />
    //             </div>
    //         );
    //     } else if (aux == "register") {
    //         return (
    //             <div className="body min-w-full min-h-screen antialiased text-slate-500 dark:text-slate-400 bg-white dark:bg-slate-900 transition bg-cover bg-no-repeat bg-center lg:bg-left-top animate-show">
    //                 <Header />
    //                 {/* Esto se va a ir mostrando dependiendo de los estados */}
    //                 {/* <Banner /> */}
    //                 {/* <Login /> */}
    //                 <Register handleClick={handleClick} />
    //                 <Board />
    //                 {ctx.showModal == true ? <ModalNotice /> : null}
    //                 <Footer />
    //             </div>
    //         );
    //     }
    // </div>
    return (
        <div className="body min-w-full min-h-screen antialiased text-slate-500 dark:text-slate-400 bg-white dark:bg-slate-900 transition bg-cover bg-no-repeat bg-center lg:bg-left-top animate-show">
            <Header />
            {/* Esto se va a ir mostrando dependiendo de los estados */}
            {component}
            <Board />
            {ctx.showModal == true ? <ModalNotice /> : null}
            <Footer />
            {/* {aux != "" ? <BtnHome /> : null} */}
        </div>
    );
}
export default App;

/* Explanation
El estado aux que seguro cambiare y lo usare en un contexto hace el papel de las rutas para saber que componentes renderizar y las sentencias if, creo que se podria hacer mejor con una función que reciba el acu (ruta) bueno mientras escribia este resumen de lo que heco hice la función xd, una maquinola, remplazando los return de la linea 46 a 85*/

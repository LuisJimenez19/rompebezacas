import { render } from "react-dom";
import { useState, useContext, useEffect } from "react";
/* components */
import { Header } from "./components/Header";
import { Banner } from "./components/Banner";
import { Login } from "./components/Login";
import { Register } from "./components/Register";
import {Home} from './components/Home'
import { BtnHome } from "./components/BtnHome";
import {ChooseLevel} from './components/ChooseLevel'
import { Board } from "./components/Board";
import { ModalNotice } from "./components/ModalNotice";
import {Alert} from './components/Alert'
import { Footer } from "./components/Footer";
/* context */
import { MainContext } from "./context/MainContext";
import {DBContext} from './context/DBContext'

function App() {

    const ctx = useContext(MainContext);
    const DBctx = useContext(DBContext)

    if (ctx.showModal == true) {
        setTimeout(() => {
            ctx.setShowModal(false);
        }, 2500);
    }

    /* Esto es lo que simularia las rutas mi rey ya que ni puta idea, osea es como se me ocurre hacerlo con mis conocimientos actuales de lo que estudiado como tal y de lo que he aprendido en las "pasantias con el senior" */
    function chooseView(e) {
        console.log(e.target.firstChild.data);
        let value = e.target.firstChild.data;
        DBctx.setView(value.toLowerCase())        
    }

    function renderView(vw) {
        let component;
        if (vw == "init") component = <Banner chooseView={chooseView} />;
        else if (vw == "login") component = <Login chooseView={chooseView} />;
        else if (vw == "register") component = <Register chooseView={chooseView} />;
        else if (vw == "home") component = <Home chooseView={chooseView} />;
        else if (vw == "chooseLevel") component = <ChooseLevel chooseView={chooseView} />;
        return component;
    }
    let component = renderView(DBctx.view);
    return (
        <div className="body min-h-screen antialiased text-slate-500 dark:text-slate-400 bg-white dark:bg-slate-900 transition bg-cover bg-no-repeat bg-center lg:bg-left-top animate-show relative">
            <Header />
            {/* Esto se va a ir mostrando dependiendo de los estados */}
            {component}
            <Board />
            {ctx.showModal == true ? <ModalNotice /> : null}
            <Alert/>
            <Footer />
            {/* {aux != "" ? <BtnHome /> : null} */}
        </div>
    );
}
export default App;

/* Explanation
El estado aux que seguro cambiare y lo usare en un contexto hace el papel de las rutas para saber que componentes renderizar y las sentencias if, creo que se podria hacer mejor con una función que reciba el acu (ruta) bueno mientras escribia este resumen de lo que heco hice la función xd, una maquinola, remplazando los return de la linea 46 a 85*/

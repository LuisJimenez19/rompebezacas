import { useState, useContext } from "react";
import { Board } from "./components/Board";
import { Header } from './components/Header'
import {ModalNotice} from './components/ModalNotice'

import { MainContext } from './context/MainContext'



function App() {
    const ctx = useContext(MainContext) 
    
    if (ctx.showModal == true) {
        setTimeout(() => {
            ctx.setShowModal(false)
        },2500)
    }
    return (
        <div className="body w-full min-h-screen antialiased text-slate-500 dark:text-slate-400 bg-white dark:bg-slate-900 transition bg-cover bg-no-repeat bg-center lg:bg-left-top animate-show">
            <Header />
            <Board/>
            {ctx.showModal == true ? (
                <ModalNotice/>
            ): null}
        </div>
    );
}
export default App;

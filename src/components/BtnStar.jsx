import { MainContext } from "../context/MainContext";
import { useContext, useState } from "react";

function BtnStar() {
    const ctx = useContext(MainContext);

    return (
        <button
            onClick={() => {
                // ctx.setIsStart(ctx.isStart == "Start" ? "Cancel" : "Start");
                /* si es cancel osea estaba jugando entonces se reinicia */
                if (ctx.isStart == "Cancel") {

                    ctx.setPlaying(false);
                    ctx.setIsStart("Start");
                    // ctx.handlePlayer("");
                    ctx.setLevel("");
                    ctx.setIsStart("Volver");

                } else if (ctx.isStart == "Start") {
                    /* recien va iniciar el juego */
                    ctx.setPlaying(true);
                    ctx.setIsStart("Cancel");
                    ctx.setShowModal(true);
                    ctx.setWin(false)

                } else if (ctx.isStart == "Volver") {

                    ctx.handlePlayer("");
                    ctx.setLevel("")

                } else if ((ctx.isStart = "Reinciar")) {

                    ctx.handlePlayer("");
                    ctx.setPlaying(false);
                    ctx.setIsStart("Start");
                    ctx.setLevel("");
                    ctx.setIsStart("Volver");
                    ctx.setWin(false)
                }
            }}

            className={`btn-star rounded-3xl   ${
                ctx.isStart == "Start" ? "bg-slate-800 dark:bg-slate-100 dark:text-slate-700 " : "bg-red-700 dark:bg-pink-800 dark:text-red-50"
            } px-8 py-3 text-sm font-medium text-white transition-all focus:outline-none hover:bg-slate-300 dark:hover:bg-slate-700 hover:text-slate-800 dark:hover:text-slate-50 ${
                ctx.isStart
            } active:border-none`}
        >
            {ctx.isStart}
        </button>
    );
}

export { BtnStar };

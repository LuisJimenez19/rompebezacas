import { MainContext } from "../context/MainContext";
import { useContext, useState } from "react";
import { Token } from "./Token";

function Board() {
    const ctx = useContext(MainContext);

    const initialMatrix = ctx.initialMatrix;
    const shufleMatrix = ctx.shufleMatrix;

    let cols = initialMatrix.length;
    cols = cols.toString();
    if (ctx.player !== "" && ctx.level !== "") {
        
        return (
            <div className="w-11/12 mt-5 mx-auto lg:w-3/5">
                {ctx.playing == false ? (
                    /* Si no esta jugando muestra el ordenado */
                    <div id={`grid-container-${cols}`} className={`grid-container gap-2 md:gap-4 pointer-events-none`}>
                        {ctx.initialMatrix.map((row, index) => {
                            return row.map((col, index) => {
                                return <Token value={col} key={index} />;
                            });
                        })}
                    </div>
                ) : (
                        /* Cuando incie se muestra el que debe resolver */
                    <div id={`grid-container-${cols}`} className={`grid-container gap-2 md:gap-4`}>
                        {ctx.shufleMatrix.map((row, index) => {
                            return row.map((col, index) => {
                                return <Token value={col} key={index} />;
                            });
                        })}
                    </div>
                )}
            </div>
        );
    }
}

export { Board };

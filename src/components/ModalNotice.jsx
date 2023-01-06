import { useContext, useEffect, useRef } from "react";
import { MainContext } from "../context/MainContext";

function ModalNotice() {
    

    const ctx = useContext(MainContext);
    let msg;
    if (ctx.win) {
        /* Uso temporizadores para que no se cambien los estados que afectan al contexto mientras se renderiza el modal*/
        msg = "¡ Felicitaciones !";
        setTimeout(() => {
            ctx.setIsStart("Reiniciar");
            // ctx.setWin(false)
        }, 1000);

       
        

    } else {
        msg = "¡ Ordenar !";
        
    }

    return (
        <div className="modal-bg w-full min-h-screen absolute top-0 left-0 flex items-center justify-center animate-show overflow-hidden">
            <div className="modal w-full h-60 flex items-center justify-center">
                <p className="msg text-slate-800 dark:text-slate-900 font-rubik text-4xl md:text-8xl ">{msg}</p>
            </div>
            {/* <audio src="../assets/siu.mp3" ref={audioRef}></audio> */}
        </div>
    );
}

export { ModalNotice };

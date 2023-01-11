import { useEffect, useContext, useState } from "react";
import { DBContext } from "../context/DBContext";
import { MainContext } from "../context/MainContext";

/* recibe para que es, si para cuando se logeo o cuando se actualizo */
function Alert() {
    const ctx = useContext(MainContext);
    const DBctx = useContext(DBContext);
    /* Estado para mostrar el alert */
    const [active, setActive] = useState(false);

    useEffect(() => {
        setActive(true);
        setTimeout(() => {
            setActive(false);
            ctx.setAlertType("");
        }, 5000);
        
    }, [ctx.alertType]);

    if (ctx.alertType == "quick-start" && active) {
        return (
            <div className="fixed top-10 w-full flex justify-center">
                <div className="items-center rounded-xl border border-gray-100 p-4 shadow-xl dark:border-gray-800 bg-slate-300 animate-zoom">
                    <div className="flex items-start gap-4">
                        <span className="text-green-600">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="h-6 w-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                        </span>
                        <div className="flex-1">
                            <strong className="block font-medium text-gray-900 dark:text-white">Incio de sesion automatico</strong>
                        </div>
                        <button
                            onClick={() => {
                                setActive(false);
                            }}
                            className="text-gray-500 transition hover:text-gray-600 dark:text-gray-400 dark:hover:text-gray-500"
                        >
                            <span className="sr-only">Dismiss popup</span>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="h-6 w-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
        );
    } else if (ctx.alertType == "new-score" && active) {
        return (
            <div className="fixed w-full flex justify-end">
                <div className="flex items-center max-w-xs p-4 text-gray-500 bg-white rounded-lg shadow dark:text-gray-400 dark:bg-gray-800 mr-5">
                    <div className="inline-flex items-center justify-center flex-shrink-0 w-8 h-8 text-green-500 bg-green-100 rounded-lg dark:bg-green-800 dark:text-green-200">
                        <svg aria-hidden="true" className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                            <path
                                fillRule="evenodd"
                                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                clipRule="evenodd"
                            />
                        </svg>
                        <span className="sr-only">Check icon</span>
                    </div>
                    <div className="ml-3 text-sm font-normal">Nuevo record logrado</div>
                    <button
                        onClick={() => {
                            setActive(false);
                        }}
                        className="ml-auto -mx-1.5 -my-1.5 bg-white text-gray-400 hover:text-gray-900 rounded-lg focus:ring-2 focus:ring-gray-300 p-1.5 hover:bg-gray-100 inline-flex h-8 w-8 dark:text-gray-500 dark:hover:text-white dark:bg-gray-800 dark:hover:bg-gray-700"
                        data-dismiss-target="#toast-success"
                        aria-label="Close"
                    >
                        <span className="sr-only">Close</span>
                        <svg aria-hidden="true" className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                            <path
                                fillRule="evenodd"
                                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                                clipRule="evenodd"
                            />
                        </svg>
                    </button>
                </div>
            </div>
        );
    }
}

export { Alert };

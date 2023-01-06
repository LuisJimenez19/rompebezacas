import React from "react";
import { TiArrowBack } from "react-icons/ti";

function BtnHome() {
    return (
        <a className="flex items-center justify-evenly rounded-lg border border-indigo-600 bg-indigo-600 px-2 py-3 transition-colors hover:bg-transparent focus:outline-none focus:ring  hover:text-indigo-600 cursor-pointer text-white w-min gap-2 fixed bottom-0 right-0">

            <span className="rounded-full border border-current bg-white p-2 text-indigo-600 group-active:text-indigo-500">
                <TiArrowBack />
            </span>

            <span className="font-medium">Home</span>
        </a>
    );
}

export { BtnHome };

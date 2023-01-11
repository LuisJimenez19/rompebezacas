import React, { useEffect, useRef } from "react";

function ThemeToggler({ setColorIcon, colorIcon }) {
    /* Para darle el valor inical al estado */
    let auxColor = ""
    

    const themeToggleDarkIconRef = useRef(null);
    const themeToggleLightIconRef = useRef(null);
    const themeToggleBtnRef = useRef(null);

    useEffect(() => {
        // Change the icons inside the button based on previous settings
        if (localStorage.getItem("color-theme") === "dark" || (!("color-theme" in localStorage) && window.matchMedia("(prefers-color-scheme: dark)").matches)) {
            themeToggleLightIconRef.current.classList.remove("hidden");
        } else {
            themeToggleDarkIconRef.current.classList.remove("hidden");
        }

        themeToggleBtnRef.current.addEventListener("click", () => {
            // toggle icons inside button
            themeToggleDarkIconRef.current.classList.toggle("hidden");
            themeToggleLightIconRef.current.classList.toggle("hidden");

            // if set via local storage previously
            if (localStorage.getItem("color-theme")) {
                if (localStorage.getItem("color-theme") === "light") {
                    document.documentElement.classList.add("dark");
                    localStorage.setItem("color-theme", "dark");
                    auxColor = "dark";
                    setColorIcon(auxColor);
                    
                } else {
                    document.documentElement.classList.remove("dark");
                    localStorage.setItem("color-theme", "light");
                    auxColor = "light";
                    setColorIcon(auxColor);
                    
                }
            } else {
                // if NOT set via local storage previously
                if (document.documentElement.classList.contains("dark")) {
                    document.documentElement.classList.remove("dark");
                    localStorage.setItem("color-theme", "light");
                    auxColor = "light";
                    setColorIcon(auxColor);
                } else {
                    document.documentElement.classList.add("dark");
                    localStorage.setItem("color-theme", "dark");
                    auxColor = "dark";
                    setColorIcon(auxColor);
                }
            }
        });
    }, []);
    return (
        <a
            ref={themeToggleBtnRef}
            id="theme-toggle"
            type="button"
            className=" w-6 h-6 sm:w-10 sm:h-10 cursor-pointer text-gray-500
  dark:text-gray-400
  hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-4
  focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-2.5
  border shadow-gray-900 grid place-content-center transition hover:scale-105 hover:brightness-125"
        >
            <svg
                ref={themeToggleDarkIconRef}
                id="theme-toggle-dark-icon"
                className="hidden w-6 h-6 sm:w-10 sm:h-10 transition"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path
                    d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586
      10.586z"
                />
            </svg>
            <svg
                ref={themeToggleLightIconRef}
                id="theme-toggle-light-icon"
                className="hidden w-6 h-6 sm:w-10 sm:h-10 transition"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path
                    d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0
      4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1
      0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0
      11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0
      100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05
      6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414
      1.414l.707.707zm1.414 8.486l-.707.707a1 1 0
      01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1
      0 000 2h1z"
                    fillRule="evenodd"
                    clipRule="evenodd"
                />
            </svg>
        </a>
    );
}
export { ThemeToggler };

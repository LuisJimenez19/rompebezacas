import { FiGithub } from "react-icons/fi";
import { SiFrontendmentor } from "react-icons/si";
import { AiOutlineLinkedin } from "react-icons/ai";
import { TbBrandGmail } from "react-icons/tb";
import { ImHtmlFive } from "react-icons/im";

import {useRef} from 'react'
function Footer() {
    let sizeIcon = 0;
    if (window.innerWidth <= 500) {
        sizeIcon = 22;
    } else {
        sizeIcon = 26;
    }
    

    
    
    return (
        <div className="footer bg-slate-800 dark:bg-slate-900 dark:text-slate-800 text-slate-300 min-w-full h-12 flex  items-center justify-between px-5 lg:px-10 xl:px-14 overflow-x-hidden animate-show bg-no-repeat bg-center lg:bg-left-top">
            <div className="flex justify-center items-center gap-8">
                <a
                    href="https://luisjimenez19.github.io/desafios-frontend-mentor/"
                    target={"_blank"}
                    className="flex justify-center items-center   hover:brightness-50 hover:scale-110"
                >
                    <ImHtmlFive color="#fff" size={22} />
                </a>
                <a href="https://github.com/LuisJimenez19" target={"_blank"} className="flex justify-center items-center hover:brightness-50 hover:scale-110">
                    <FiGithub color="#fff" size={22} />
                </a>
                <a
                    href="https://www.frontendmentor.io/profile/LuisJimenez19"
                    target={"_blank"}
                    className="flex justify-center items-center  hover:brightness-50 hover:scale-110"
                >
                    <SiFrontendmentor color="#fff" size={22} />
                </a>
                <a
                    href="https://www.linkedin.com/in/luis-jim%C3%A9nez-90a859250/"
                    target={"_blank"}
                    className="flex justify-center items-center  hover:brightness-50 hover:scale-110"
                >
                    <AiOutlineLinkedin color="#fff" size={22} />
                </a>
            </div>
            <a
                href="mailto:luisjian948@gmail.com"
                target={"_blank"}
                className="flex justify-end items-center   justify-self-end hover:brightness-50 hover:scale-110"
            >
                <TbBrandGmail color="#fff" size={sizeIcon} />
            </a>
        </div>
    );
}

export { Footer };

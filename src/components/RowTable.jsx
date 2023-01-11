import { useContext } from "react";
import { ImGift } from "react-icons/im";
import { MainContext } from "../context/MainContext";

import first from "../assets/img/primer-puesto.png";
import second from "../assets/img/segundo-rango.png";
import third from "../assets/img/tercer-rango.png";

function RowTable({ objeto, level, pos }) {
    const ctx = useContext(MainContext);

    let userScore;

    if (level == "easy") {
        userScore = objeto.data.score.easy;
    } else if (level == "medium") {
        userScore = objeto.data.score.medium;
    } else if (level == "hard") {
        userScore = objeto.data.score.hard;
    }

    let score = ctx.convertScore(userScore);

    return (
        <tr className="bg-whte dark:bg-gray800 dark:hover:backdrop-brightness-150  hover:bg-slate-300 dark:hover:bg-transparent dark:hover:opacity-100 transition animate-zoom">
            <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white ">
                <span className="flex flex-row items-center justify-start gap-1">
                    {pos == 1 ? (
                        <img width={30} src={first} alt="Primer" />
                    ) : pos == 2 ? (
                        <img width={30} src={second} alt="second" />
                    ) : pos == 3 ? (
                        <img width={30} src={third} alt="third" />
                    ) : (
                        <div>{pos})</div>
                    )}
                    <p>{objeto.data.name}</p>
                </span>
            </th>
            {/* <-------------------------> */}
            <td className="px-6 py-4">{objeto.data.registrationDate}</td>
            <td className="px-6 py-4">{score}</td>
        </tr>
    );
}

export { RowTable };

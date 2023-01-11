import { useState, createContext, useEffect } from "react";
/* funciones crud */
import { addUser, reqUsers, putInfoUser, deleteUser, onChangeUsers } from "../firebase/index";

export const DBContext = createContext();
export { putInfoUser };
export function DBContextProvider(props) {
    /* Este estado indicara que vista se etara viendo */
    const [view, setView] = useState("init");

    /* Contiene a todos los usuarios */
    const [users, setUsers] = useState([]);

    /* callback para traer el arrat con los usuarios {id:123, data:{}} cuando se inicie la app */
    function getAllUsers(reqUsers) {
        setUsers(reqUsers);
    }

    /* FUncion que se ejecuta cuando hay cambios en la db */
    /* Parece que puedo usar la funcion que escucha los cambios, también al iniciar la app */
    function onChangeDB(users) {
        setUsers(users);
    }

    useEffect(() => {
        onChangeUsers(onChangeDB);
    }, []);

    return (
        <DBContext.Provider
            value={{
                view,
                setView,
                addUser,
                users,
                setUsers,
                putInfoUser,
                deleteUser,
            }}
        >
            {props.children}
        </DBContext.Provider>
    );
}

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// DB
import {
    getFirestore,
    collection,
    addDoc, getDocs,
    doc, setDoc,
    deleteDoc,
    onSnapshot
} from "firebase/firestore";

/* doc hace referencia a un documento, collection hace referencia a la colección osea la store de los documentos */
/* doc para traer un solo documento, en este caso un usaer */
/* collection para trer el almacen en esta caso "users", en la documentacion no encontre la explicación */

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyA8LCtgZnMYeBndFHLVlWwJJtKYRabQglw",
    authDomain: "rompebezacas-35ef2.firebaseapp.com",
    projectId: "rompebezacas-35ef2",
    storageBucket: "rompebezacas-35ef2.appspot.com",
    messagingSenderId: "751250919918",
    appId: "1:751250919918:web:2280271d0a4d7e36cf3eff"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(app);

/* Voy a crear las funciones y las voy a exportar para usarlas en el contexto, esto podría ir en otro archivo  */

/* POST */

export async function addUser(name, pass) {
    try {
        let registrationDate = new Date().toLocaleDateString();
        const data = {
            name,
            pass,
            score: {"easy":0, "medium": 0, "hard": 0},
            registrationDate
        }
        const docRef = await addDoc(collection(db, "users"),data);

        console.log("Document written with ID: ", docRef.id);

        return  {"id":docRef.id, "data":data}

    } catch (e) {
        console.error("Error adding document: ", e);
    }

}

/* GET ALL */

export async function reqUsers(callBack) {
    const users = []
    const querySnapshot = await getDocs(collection(db, "users"));
    querySnapshot.forEach((doc, index) => {
        let user = {}
        /*  console.log(`id= ${doc.id}`);
         console.log(doc.data()); */
        user["id"] = doc.id
        user["ref"] = doc
        user["data"] = doc.data()
        users.push(user)
    });
    callBack(users)
}

/* UPDATE, en este caso uso set, que es como put,  */
export async function putInfoUser(name, pass, score, id, ref) {
    try {
        /* db, coleccion y id(document) */
        const refe = doc(db, "users", id);
        const data = {
            name,
            pass,
            score
        };
        //              user, nuevo
        await setDoc(refe, data, { merge: true })
        return `Usuario ${name}, actualizado correctamente`

    } catch (error) {
        return `Ha ocurrido un error ${error}`
    }
}




/* DELETE */
export async function deleteUser(id) {
    try {
        let res = await deleteDoc(doc(db, "users", id))
        return "Usuario Eliminado correctamente"

    } catch (error) {
        return `Ha ocurrido un error con la operación ${error}`
    }

}

/* Escuchasr cambios, la diferencia es que cuando los traigo, lo hago con un metedo (getDocs) en cambio aqui me entrega el querySnapchot como parametro de la funcion que va a ejecutar cuando hayan cambios*/

export async function onChangeUsers(callBack) {
    onSnapshot(collection(db, "users"), (querySnapshot) => {
        const users = []
        querySnapshot.forEach((doc, index) => {
            let user = {}
            /*  console.log(`id= ${doc.id}`);
             console.log(doc.data()); */
            user["id"] = doc.id
            user["ref"] = doc
            user["data"] = doc.data()
            users.push(user)
        });
        callBack(users)
    })
}
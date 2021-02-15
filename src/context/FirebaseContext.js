import React, { useState, useEffect, createContext } from 'react';
import { getFirestore } from "../firebaseConfig";

export const FirebaseContext = createContext();

const FirebaseProvider = ({ children }) => {

    const [item, setItem] = useState([]);  //guardo 1 solo elemento

    useEffect(() => {
        const db = getFirestore();
        const itemCollection = db.collection("items");
        const query = itemCollection.get();

        query.then((res) => {
            setItem(res.docs.map(p => ({ id: p.id, ...p.data() })))
        }).catch((err) => {
            console.log(err)
        })
    }, []);

    return (
        <FirebaseContext.Provider value={{ item }}>
            {children}
        </FirebaseContext.Provider>
    )
}

export default FirebaseProvider;


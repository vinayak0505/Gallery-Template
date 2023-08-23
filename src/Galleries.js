import { useState, useEffect, useRef } from "react";

import { db } from "./firebaseInit";
import { collection, onSnapshot, setDoc, doc } from "firebase/firestore";

// import other components to use
import Header from './Components/Header/Header';
import MasonryLayout from './Components/MasonryLayout/MasonryLayout.js';
import { Dialog } from "@material-ui/core";
import AddItem from "./Components/AddItemp/AddItem";


const Galleries = ({ setPage }) => {
    const nameRef = useRef("");

    const [images, setImages] = useState([]);
    const [showDialog, setShowDialog] = useState(false);

    useEffect(() => {
        const unsubscribe = onSnapshot(collection(db, "gallery"), (snapshot) => {
            const gallery = snapshot.docs.map((doc) => (
                doc.data().about
            ));
            console.log(gallery);
            setImages(() => gallery)
        });
        return unsubscribe;
    }, [])


    const onAdd = async (e) => {

        try {
            const name = nameRef.current.value.trim();
            if (name == "") return;
            e.preventDefault();
            setDoc(doc(db, "gallery", name), {
                images: [],
                about: { name }
            });
            setShowDialog(() => false);
            nameRef.current.value = "";
        } catch (error) {
        }
    }

    return (
        <>
            <Header setPage={setPage} setShowDialog={setShowDialog} />
            <div className="flex justify-content-center" style={{ padding: '50px' }}>
                <MasonryLayout images={images} setPage={setPage} />
            </div>
            <Dialog open={showDialog}>
                <AddItem setShowDialog={setShowDialog} onAdd={onAdd} nameRef={nameRef} />
            </Dialog>
        </>
    )
}

export default Galleries;
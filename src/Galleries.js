import { useState, useEffect } from "react";

import { db } from "./firebaseInit";
import { collection, onSnapshot,setDoc,doc } from "firebase/firestore";

// import other components to use
import Header from './Components/Header/Header';
import MasonryLayout from './Components/MasonryLayout/MasonryLayout.js';


const Galleries = ({ setPage }) => {

    const [images, setImages] = useState([]);
    const [openDialog, setOpenDialog] = useState(false);

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


    const onAdd = async (e, nameRef) => {

        try {
            const name = nameRef.current.value.trim();
            if (name == "") return;
            e.preventDefault();
            setDoc(doc(db, "gallery", name), {
                images: [],
                about: { name }
            });
            setOpenDialog(() => false);
            nameRef.current.value = "";
        } catch (error) {
        }
    }

    return (
        <>
            <Header setPage={setPage} onAdd={onAdd} openDialog={openDialog} setOpenDialog={setOpenDialog} />
            <div className="flex justify-content-center" style={{ padding: '50px' }}>
                <MasonryLayout images={images} setPage={setPage} />
            </div>
        </>
    )
}

export default Galleries;
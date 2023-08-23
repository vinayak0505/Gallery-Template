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

    const [allImages, setAllImages] = useState([]);
    const [images, setImages] = useState([]);
    const [showDialog, setShowDialog] = useState(false);
    const [search, setSearch] = useState(false);

    useEffect(() => {
        const unsubscribe = onSnapshot(collection(db, "gallery"), (snapshot) => {
            const gallery = snapshot.docs.map((doc) => (
                doc.data().about
            ));
            setAllImages(() => gallery)
        });
        return unsubscribe;
    }, [])

    useEffect(() => {
        if (search)
            setImages(allImages.filter(image => image.name.toLowerCase().includes(search)));
        else
            setImages(allImages);
    }, [allImages, search]);


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
            <Header setPage={setPage} setShowDialog={setShowDialog} setSearch={setSearch} />
            <div style={{ padding: '50px' }}>
                <MasonryLayout images={images} setPage={setPage} />
            </div>
            <Dialog open={showDialog}>
                <AddItem setShowDialog={setShowDialog} onAdd={onAdd} nameRef={nameRef} />
            </Dialog>
        </>
    )
}

export default Galleries;
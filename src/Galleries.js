import { useState, useEffect, useRef } from "react";

import { db } from "./firebaseInit";
import { collection, onSnapshot, doc, addDoc } from "firebase/firestore";

// import other components to use
import Header from './Components/Header/Header';
import MasonryLayout from './Components/MasonryLayout/MasonryLayout.js';
import { Dialog } from "@material-ui/core";
import AddItem from "./Components/AddItemp/AddItem";


const Galleries = ({ setPage }) => {
    const nameRef = useRef("");

    // all images from firebase
    const [allImages, setAllImages] = useState([]);
    // current images that need to be displayed
    const [images, setImages] = useState([]);
    // showDialog base if the showDialog id true
    const [showDialog, setShowDialog] = useState(false);
    // seach text
    const [search, setSearch] = useState(false);

    // fetch collections
    useEffect(() => {
        const unsubscribe = onSnapshot(collection(db, "gallery"), (snapshot) => {
            const gallery = snapshot.docs.map((doc) => (
                doc.data().about
            ));
            setAllImages(() => gallery)
        });
        return unsubscribe;
    }, [])

    // update collection base on search
    useEffect(() => {
        if (search)
            setImages(allImages.filter(image => image.name.toLowerCase().includes(search)));
        else
            setImages(allImages);
    }, [allImages, search]);

    // add collection
    const onAdd = async (e) => {
        try {
            const name = nameRef.current.value.trim();
            // check for valid name
            if (name == ""){
                alert("Enter Name");
            }
            // check if name alreadt exist
            if (allImages.filter(e => e.name === name).length > 0) {
                alert("Gallery Already Exist");
            }
            // add document with defined name
            addDoc(doc(db, "gallery", name), {
                images: [],
                about: { name }
            });
            setShowDialog(() => false);
            nameRef.current.value = "";
        } catch (error) {
        }
    }

    // ui ellement
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
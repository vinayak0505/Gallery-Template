import { useState, useEffect } from "react";

import { db } from "./firebaseInit";
import { doc, onSnapshot, setDoc } from "firebase/firestore";

// import other components to use
import Header from './Components/Header/Header';
import MasonryLayout from './Components/MasonryLayout/MasonryLayout.js';

const Gallery = ({ page, setPage }) => {
    const [images, setImages] = useState([]);
    const [about, setAbout] = useState([]);
    const [index, setIndex] = useState(-1);
    const [openDialog, setOpenDialog] = useState(false);

    useEffect(() => {
        const unsubscribe = onSnapshot(doc(db, "gallery", page), (doc) => {
            setImages(() => doc.data().images);
            setAbout(() => doc.data().about);
        });
        return unsubscribe;
    }, [])

    const deleteImage = (i) => {
        var newImages = images;
        newImages.splice(i, 1);
        setDoc(doc(db, "gallery", page), {
            about: about,
            images: newImages
        });
    }


    const onAdd = async (e, nameRef, aboutRef, urlRef) => {
        try {
            const name = nameRef.current.value.trim();
            if (name == "") return;
            const url = urlRef.current.value.trim();
            if (_isValidHttpUrl(url) == false) return;

            e.preventDefault();
            const about = aboutRef.current.value;

            setDoc(doc(db, "gallery", page), {
                images: [{ name, about, url }, ...images],
                about: { name: page, url }
            });
            setOpenDialog(() => false);
            nameRef.current.value = "";
            aboutRef.current.value = "";
            urlRef.current.value = "";
        } catch (error) {
            e.preventDefault();
        }
    }

    const _isValidHttpUrl = (string) => {
        let url;

        try {
            url = new URL(string);
        } catch (_) {
            return false;
        }

        return url.protocol === "http:" || url.protocol === "https:";
    }

    const editImage = (i) => {
        setIndex(() => i);
    }

    return (
        <>
            <Header page={page} setPage={setPage} onAdd={onAdd} openDialog={openDialog} setOpenDialog={setOpenDialog} />
            <div style={{ padding: '50px' }}>
                <MasonryLayout deleteImage={deleteImage} images={images} page={page} setPage={setPage} editImage={editImage} />
            </div>
        </>
    )
}

export default Gallery;
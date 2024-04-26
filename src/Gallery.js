import { useState, useEffect, useRef } from "react";

import { db } from "./firebaseInit";
import { doc, onSnapshot, setDoc } from "firebase/firestore";

// import other components to use
import Header from './Components/Header/Header';
import MasonryLayout from './Components/MasonryLayout/MasonryLayout.js';
import { Dialog } from '@mui/material';
import AddItem from "./Components/AddItemp/AddItem";

const delay = ms => new Promise(res => setTimeout(res, ms));

const Gallery = ({ page, setPage }) => {

    const nameRef = useRef("");
    const aboutRef = useRef("");
    const urlRef = useRef("");

    // stated that will be change base on
    // all imaged
    const [allImages, setAllImages] = useState([]);
    // curent images that to be displayed
    const [images, setImages] = useState([]);
    // info of selected gallery
    const [about, setAbout] = useState([]);
    // update index
    const [index, setIndex] = useState(-1);
    // seach value
    const [search, setSearch] = useState(false);

    const [showDialog, setShowDialog] = useState(false);
    const customSetShowDialog = (fun) => {
        setShowDialog(() => fun());
        setIndex(() => -1);
    }

    // fetch images
    useEffect(() => {
        const unsubscribe = onSnapshot(doc(db, "gallery", page), (doc) => {
            setAllImages(() => doc.data().images);
            setAbout(() => doc.data().about);
        });
        return unsubscribe;
    }, [])

    // change image on search result
    useEffect(() => {
        const tempImage = allImages.map((e, i) => ({ ...e, i }));
        if (search)
            setImages(tempImage.filter(image => image.name.toLowerCase().includes(search) || (image.about && image.about.toLowerCase().includes(search))));
        else
            setImages(tempImage);
    }, [allImages, search]);

    // remove images
    const deleteImage = (e,i) => {
        e.preventDefault();
        var newImages = allImages;
        newImages.splice(i, 1);
        setDoc(doc(db, "gallery", page), {
            about: about,
            images: newImages
        });
    }

    // add image
    const onAdd = async (e) => {
        try {
            const name = nameRef.current.value.trim();
            if (name == "") {
                alert("Enter a valid Name");
                return;
            }
            const url = urlRef.current.value.trim();
            if (_isValidHttpUrl(url) == false){
                alert("Enter a valid url");
                return;
            }

            const about = aboutRef.current.value;
            const newImage = { name, about, url };
            if (index !== -1) {
                const newImages = allImages; /// asdkljasodj
                newImages[index] = newImage;
                setDoc(doc(db, "gallery", page), {
                    images: newImages,
                    about: { name: page, url }
                });
            } else {
                setDoc(doc(db, "gallery", page), {
                    images: [newImage, ...images],
                    about: { name: page, url }
                });
            }

            nameRef.current.value = "";
            aboutRef.current.value = "";
            urlRef.current.value = "";
        } catch (error) {
            console.log(error);
        }
        setShowDialog(() => false);
        setIndex(() => -1);
    }

    // validated if the url is valid http or not
    const _isValidHttpUrl = (string) => {
        let url;

        try {
            url = new URL(string);
        } catch (_) {
            return false;
        }

        return url.protocol === "http:" || url.protocol === "https:";
    }

    // edit image
    const editImage = async (i) => {
        setIndex(() => i);
        setShowDialog(() => true);
        await delay(0);
        nameRef.current.value = allImages[i].name;
        aboutRef.current.value = allImages[i].about;
        urlRef.current.value = allImages[i].url;
    }

    // ui element
    return (
        <>
            <Header page={page} setPage={setPage} onAdd={onAdd} showDialog={showDialog} setShowDialog={customSetShowDialog} setSearch={setSearch} />
            <div style={{ padding: '50px' }}>
                <MasonryLayout deleteImage={deleteImage} images={images} page={page} setPage={setPage} editImage={editImage} />
            </div>
            <Dialog open={showDialog}>
                <AddItem page={page} setShowDialog={setShowDialog} onAdd={onAdd} nameRef={nameRef} aboutRef={aboutRef} urlRef={urlRef} />
            </Dialog>
        </>
    )
}

export default Gallery;
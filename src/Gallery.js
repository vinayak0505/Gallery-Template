import { useState, useEffect } from "react";

import { db } from "./firebaseInit";
import { doc, onSnapshot } from "firebase/firestore";

// import other components to use
import Header from './Components/Header/Header';
import MasonryLayout from './Components/MasonryLayout/MasonryLayout.js';
import AddItem from "./Components/AddItemp/AddItem";

const Gallery = ({ page, setPage }) => {
    const [images, setImages] = useState([]);

    useEffect(() => {
        const unsubscribe = onSnapshot(doc(db, "gallery", page), (doc) => {
            const images = doc.data().images;
            console.log(images);
            setImages(() => images);
        });
        return unsubscribe;
    })

    return (
        <>
            <AddItem page={page} items={images} />
            <Header page={page} setPage={setPage} />
            <div className="flex justify-content-center" style={{ padding: '50px' }}>
                <MasonryLayout images={images} page={page} setPage={setPage} />
            </div>
        </>
    )
}

export default Gallery;
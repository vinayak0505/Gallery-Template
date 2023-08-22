import { useState, useEffect } from "react";

import { db } from "./firebaseInit";
import { doc, onSnapshot } from "firebase/firestore";

// import other components to use
import Header from './Components/Header/Header';
import MasonryLayout from './Components/MasonryLayout/MasonryLayout.js';

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
            <Header page={page} setPage={setPage} items={images} />
            <div className="flex justify-content-center" style={{ padding: '50px' }}>
                <MasonryLayout images={images} page={page} setPage={setPage} />
            </div>
        </>
    )
}

export default Gallery;
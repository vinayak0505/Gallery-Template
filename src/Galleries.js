import { useState, useEffect } from "react";

import { db } from "./firebaseInit";
import { collection, onSnapshot } from "firebase/firestore";

// import other components to use
import Header from './Components/Header/Header';
import MasonryLayout from './Components/MasonryLayout/MasonryLayout.js';


const Galleries = ({ page, setPage }) => {

    const [images, setImages] = useState([]);

    useEffect(() => {
        const unsubscribe = onSnapshot(collection(db, "gallery"), (snapshot) => {
            const gallery = snapshot.docs.map((doc) => (
                doc.data().about
            ));
            console.log(gallery);
            setImages(() => gallery)
        });
        return unsubscribe;
    },[])

    return (
        <>
            {/* <AddItem page={page} /> */}
            <Header page={page} setPage={setPage} />
            <div className="flex justify-content-center" style={{ padding: '50px' }}>
                <MasonryLayout images={images} page={page} setPage={setPage} />
            </div>
        </>
    )
}

export default Galleries;
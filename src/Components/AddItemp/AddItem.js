import { db } from "../../firebaseInit";
import Button from "../Elements/Button/Button";
import { doc, setDoc } from "firebase/firestore";
import { useRef } from 'react';

const AddItem = ({ page, items }) => {
    const nameRef = useRef("");
    const aboutRef = useRef("");
    const urlRef = useRef("");
    return <>
        <div >
            <span>Create an album</span>
            <form>
                <input type="text" ref={nameRef} placeholder="name" /> <br />
                <input type="text" ref={aboutRef} placeholder="about" /> <br />
                <input type="text" ref={urlRef} placeholder="url" /> <br />
                <Button >Clear</Button>
                <Button onClick={(e) =>
                    onCreate(e, page, items, nameRef, aboutRef, urlRef)
                }>Create</Button>
            </form>
            {page}
        </div>
    </>
};

const onCreate = async (e, page, items, nameRef, aboutRef, urlRef) => {
    e.preventDefault();
    const name = nameRef.current.value;
    if (page === "") {
        await setDoc(doc(db, "gallery", name), {
            images: [],
            about: {
                name,
            }
        });
    } else {
        const about = aboutRef.current.value;
        const url = urlRef.current.value;
        await setDoc(doc(db, "gallery", page), {
            images: [{ name, about, url }, ...items],
            about: { name: page, url }
        });
    }
}

export default AddItem;
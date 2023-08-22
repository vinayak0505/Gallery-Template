import { db } from "../../firebaseInit";
import Button from "../Elements/Button/Button";
import { doc, setDoc } from "firebase/firestore";
import { useRef } from 'react';

const AddItem = ({ page, items, setOpenDialog }) => {
    const nameRef = useRef("");
    const aboutRef = useRef("");
    const urlRef = useRef("");
    return <>
        <div className="box">
            <h1 className={"nav-title"}>{page === "" ? <>Create an Album</> : <>Add an Image</>}</h1>
            <div style={{ height: "50px" }}></div>
            <form>
                <input className="input" placeholder="Image Name" type="text" ref={nameRef} required />  <br />
                {page !== "" && <><input className="input" placeholder="About Image" type="text" ref={aboutRef} /> <br /> </>}
                {page !== "" && <><input className="input" placeholder="Image Url" type="url" ref={urlRef} required /> <br /> </>}
                <div style={{ height: "20px" }}></div>
                <Button style={{ backgroundColor: "red", marginRight: 180 }} onClick={(e) => {
                    e.preventDefault();
                    setOpenDialog(() => false);
                }}>Close</Button>
                <Button onClick={(e) =>
                    onCreate(e, page, items, nameRef, aboutRef, urlRef, setOpenDialog)
                }>Create</Button>
            </form>
        </div>
    </>;
};

const onCreate = async (e, page, items, nameRef, aboutRef, urlRef, setOpenDialog) => {
    try {


        const name = nameRef.current.value.trim();
        if (name == "") return;
        if (page === "") {
            e.preventDefault();
            setDoc(doc(db, "gallery", name), {
                images: [],
                about: {
                    name,
                }
            });
        } else {
            const url = urlRef.current.value.trim();
            if (_isValidHttpUrl(url) == false) return;
            e.preventDefault();
            const about = aboutRef.current.value;

            setDoc(doc(db, "gallery", page), {
                images: [{ name, about, url }, ...items],
                about: { name: page, url }
            });
        }
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

export default AddItem;
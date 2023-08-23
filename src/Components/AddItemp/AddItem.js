import Button from "../Elements/Button/Button";
import { useRef } from 'react';

const AddItem = ({ page, setOpenDialog, onAdd }) => {

    const nameRef = useRef("");
    const aboutRef = useRef("");
    const urlRef = useRef("");

    return <>
        <div className="box">
            <h1 className={"nav-title"}>{!page ? <>Create an Album</> : <>Add an Image</>}</h1>
            <div style={{ height: "50px" }}></div>
            <form>
                <input className="input" placeholder="Image Name" type="text" ref={nameRef} required />  <br />
                {page && <><input className="input" placeholder="About Image" type="text" ref={aboutRef} /> <br /> </>}
                {page && <><input className="input" placeholder="Image Url" type="url" ref={urlRef} required /> <br /> </>}
                <div style={{ height: "20px" }}></div>
                <Button style={{ backgroundColor: "red", marginRight: 180 }} onClick={(e) => {
                    e.preventDefault();
                    setOpenDialog(() => false);
                }}>Close</Button>
                <Button onClick={(e) => onAdd(e, nameRef, aboutRef, urlRef)}>
                    Create
                </Button>
            </form>
        </div>
    </>;
};

export default AddItem;
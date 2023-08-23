import Button from "../Elements/Button/Button";

// ADD Item will show popup and display links item that can be added 
const AddItem = ({ page, setShowDialog, onAdd, nameRef, aboutRef, urlRef }) => {

    return <>
        <div className="box">
            <h1 className={"nav-title"}>{!page ? <>Create an Album</> : <>Add an Image</>}</h1>
            <div style={{ height: "50px" }}></div>
            <form>
                <input className="input" placeholder="Image Name" type="text" ref={nameRef} required />  <br />
                {page && <><input className="input" placeholder="About Image" type="text" ref={aboutRef} /> <br /> </>}
                {page && <><input className="input" placeholder="Image Url" type="url" ref={urlRef} required /> <br /> </>}
                <div style={{ height: "20px" }}></div>
                <Button type="button" style={{ backgroundColor: "red", marginRight: 180 }} onClick={() => {
                    setShowDialog(() => false);
                }}>Close</Button>
                <Button type="submit" onClick={(e) => onAdd(e)}>Create</Button>
            </form>
        </div>
    </>;
};

export default AddItem;
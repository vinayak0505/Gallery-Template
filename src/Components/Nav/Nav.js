import Button from "../Elements/Button/Button"
import { SearchNormal1 } from "iconsax-react";
import Dialog from "@material-ui/core/Dialog";
import { useState } from "react";
import AddItem from "../AddItemp/AddItem";

// Nav component
const Nav = ({ page, setPage, items }) => {
    const [openDialog, setOpenDialog] = useState(false);
    const placeholder = page === "" ? "Search Gallery" : "Search Image";
    return (
        <nav className={`nav flex align-items-center`}>
            {
                page !== "" &&
                <Button onClick={() => setPage(() => "")}>back</Button>
            }
            <h1 className={"nav-title"}>{page === "" ? <>Gallery</> : page}</h1>
            <div className={`flex navbar-buttons`}>
                <div className={`search-bar flex align-items-center`}>
                    <SearchNormal1 size="30" color="var(--white-100)" />
                    <input type="text" className={"search-input"} placeholder={placeholder} />
                </div>
                <Button onClick={() => setOpenDialog(() => true)}>{page === "" ? <> + Add Folder</> : <> + Add Image</>}</Button>
                <Dialog open={openDialog}>
                    <AddItem page={page} items={items} setOpenDialog={setOpenDialog} />
                </Dialog>
            </div>
        </nav>
    )
}

export default Nav;
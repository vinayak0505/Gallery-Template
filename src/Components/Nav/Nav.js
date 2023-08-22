import Button from "../Elements/Button/Button"
import { SearchNormal1 } from "iconsax-react";
import Popup from 'reactjs-popup';

// Nav component
const Nav = ({ page, setPage }) => {
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
                    <input type="text" className={"search-input"} placeholder="Search Image" />
                </div>
                <Button >{page === "" ? <> + Add Folder</> : <> + Add Image</>}</Button>
            </div>
        </nav>
    )
}

export default Nav
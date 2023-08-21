import Button from "../Elements/Button/Button"
import { SearchNormal1 } from "iconsax-react";

// Nav component
const Nav = () => {
    return (
        <nav className={`nav flex align-items-center`}>
            <h1 className={"nav-title"}>Gallery</h1>
            <div className={`flex navbar-buttons`}>
                <div className={`search-bar flex align-items-center`}>
                    <SearchNormal1 size="30" color="var(--white-100)" />
                    <input type="text" className={"search-input"} placeholder="Search Image" />
                </div>
                <Button> + Add Image</Button>
            </div>
        </nav>
    )
}

export default Nav
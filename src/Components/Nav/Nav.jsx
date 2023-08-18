// import styles of this component
import styles from "./Nav.module.css"

// import other components
import Button from "../Elements/Button/Button"
import { SearchNormal1 } from "iconsax-react";
import style2 from "../Header/Header.module.css"

// Nav component
const Nav = () => {
    return (
        <nav className={`${styles.nav} flex align-items-center`}>
            <h1 className={styles["nav-title"]}>Gallery</h1>
            <div className={`flex ${styles["navbar-buttons"]}`}>
                <div className={`${style2["search-bar"]} flex align-items-center`}>
                    <SearchNormal1 size="30" color="var(--white-100)" />
                    <input type="text" className={style2["search-input"]} placeholder="Search Image" />
                </div>
                <Button theme="matrix"> + Add Image</Button>
            </div>
        </nav>
    )
}

export default Nav
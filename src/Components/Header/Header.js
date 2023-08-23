// import other components
import Button from "../Elements/Button/Button";
import { SearchNormal1 } from "iconsax-react";

// Header component
const Header = ({ page, setPage, setShowDialog }) => {

  const placeholder = !page ? "Search Gallery" : "Search Image";

  return (
    <>
      <div className={"blur-circle-shape"}></div>
      <nav className={`nav flex align-items-center`}>
        {
          page &&
          <div className="pointer"  style={{ marginRight: "20px" }} onClick={() => setPage(() => "")}>
            <img className="back-button" src="/img/previous.png"></img>
          </div>
        }
        <h1 className={"nav-title"}>{!page ? <>Gallery</> : page}</h1>
        <div className={`flex navbar-buttons`}>
          <div className={`search-bar flex align-items-center`}>
            <SearchNormal1 size="30" color="var(--white-100)" />
            <input type="text" className={"search-input"} placeholder={placeholder} />
          </div>
          <Button onClick={() => setShowDialog(() => true)}>{!page ? <> + Add Folder</> : <> + Add Image</>}</Button>
        </div>
      </nav>
    </>
  )
}

export default Header;
// import other components
import Button from "../Elements/Button/Button";
import { SearchNormal1 } from "iconsax-react";
import Dialog from "@material-ui/core/Dialog";
import AddItem from "../AddItemp/AddItem";

// Header component
const Header = ({ page, setPage, onAdd, openDialog, setOpenDialog }) => {

  const placeholder = !page ? "Search Gallery" : "Search Image";

  return (
    <>
      <div className={"blur-circle-shape"}></div>
      <nav className={`nav flex align-items-center`}>
        {
          page &&
          <Button style={{ marginRight: "20px" }} onClick={() => setPage(() => "")}>back</Button>
        }
        <h1 className={"nav-title"}>{!page ? <>Gallery</> : page}</h1>
        <div className={`flex navbar-buttons`}>
          <div className={`search-bar flex align-items-center`}>
            <SearchNormal1 size="30" color="var(--white-100)" />
            <input type="text" className={"search-input"} placeholder={placeholder} />
          </div>
          <Button onClick={() => setOpenDialog(() => true)}>{!page ? <> + Add Folder</> : <> + Add Image</>}</Button>
          <Dialog open={openDialog}>
            <AddItem page={page} setOpenDialog={setOpenDialog} onAdd={onAdd} />
          </Dialog>
        </div>
      </nav>
    </>
  )
}

export default Header;
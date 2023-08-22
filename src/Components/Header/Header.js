// import other components
import Button from "../Elements/Button/Button"
import Nav from "../Nav/Nav"

// Header component
const Header = ({ page, setPage }) => {
  return (
    <>
      <div className={"blur-circle-shape"}></div>
      <Nav page={page} setPage={setPage} />
    </>
  )
}
export default Header
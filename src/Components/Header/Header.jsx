// import styles of this component
import styles from "./Header.module.css"

// import other components
import Nav from "../Nav/Nav"

// Header component
const Header = () => {
  return (
    <>
          <div className={styles["blur-circle-shape"]}></div>
          <Nav />
    </>
  )
}

export default Header
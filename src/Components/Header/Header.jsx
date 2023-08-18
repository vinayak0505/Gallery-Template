// import styles of this component
import styles from "./Header.module.css"

// import other components
import ContainerCard from '../ContainerCard/ContainerCard';
import Nav from "../Nav/Nav"

// Header component
const Header = () => {
  return (
    <>
        <ContainerCard className="flex flex-column">
          <div className={styles["blur-circle-shape"]}></div>
          <Nav />
        </ContainerCard>
    </>
  )
}

export default Header
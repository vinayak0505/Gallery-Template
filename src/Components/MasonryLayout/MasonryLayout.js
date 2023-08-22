// import other react pkg to use
import Masonry from "react-masonry-css"

// import other component to use
import MasonryBox from './MasonryBox/MasonryBox';

// MasonryLayout Component
const MasonryLayout = ({ images, page, setPage }) => {
  const breakpointColumnsObj = {
    default: 4,
    1100: 3,
    700: 2,
    500: 1
  };

  return (
    <Masonry
      breakpointCols={breakpointColumnsObj}
      className={"my-masonry-grid"}
      columnClassName={"my-masonry-grid_column"}
    >
      {images.map(item => (
        <buttom className={"button button-tranparent"} onClick={(e) => setThisPage(page, setPage, item.name)}>
          <MasonryBox
            key={item.id}
            wallSrc={item.url}
            userName={item.name}
            userJob={item.about}
          />
        </buttom>
      ))}
    </Masonry>
  )
}

const setThisPage = (page, setPage, value) => {
  if (page === "") {
    setPage(() => value);
  }
}

export default MasonryLayout
// import other react pkg to use
import Masonry from "react-masonry-css"

// import other component to use
import MasonryBox from './MasonryBox/MasonryBox';

// MasonryLayout Component
const MasonryLayout = ({ images, page, setPage, deleteImage, editImage }) => {
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
      columnClassName={"my-masonry-grid-column"}
    >
      {images.map((item, i) => (
        <div className={"button button-tranparent"} style={page ? { cursor: "default" } : {}} onClick={(e) => setThisPage(page, setPage, item.name)}>
          <MasonryBox
            key={i}
            page={page}
            index={item.i ? item.i : i}
            deleteImage={deleteImage}
            wallSrc={item.url}
            userName={item.name}
            userJob={item.about}
            editImage={editImage}
          />
        </div>
      ))}
    </Masonry>
  )
}

const setThisPage = (page, setPage, value) => {
  if (!page) {
    setPage(() => value);
  }
}

export default MasonryLayout
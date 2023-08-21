// import other react pkg to use
import Masonry from "react-masonry-css"

// import other component to use
import MasonryBox from './MasonryBox/MasonryBox';

// MasonryLayout Component
const MasonryLayout = ({ images }) => {
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
        <MasonryBox
          key={item.id}
          wallSrc={item.src}
          userProf={item.user.src}
          userName={item.user.name}
          userJob={item.user.job}
        />
      ))}
    </Masonry>
  )
}

export default MasonryLayout
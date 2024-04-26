import { saveAs } from 'file-saver'

// masonarybox is the libarary that allow us to display images
// in staggerd fashion
const MasonryBox = ({ page, wallSrc, userName, userJob, index, deleteImage, editImage }) => {
  if (!wallSrc) wallSrc = "/img/empty.png";

  return (
    <div className="delete-container">
      {page && <button onClick={(e) => deleteImage(e,index)} className="delete-button pointer">X</button>}
      {page && <img onClick={() => editImage(index)} src='./img/pen.png' className="edit-button pointer"></img>}
      {page && <img onClick={() => saveAs(wallSrc)} src='./img/download.png' className="download-button pointer"></img>}
      <div className={"my-masonry"}>
        <img src={wallSrc} style={{ width: "100%" }} alt=""
          onError={(event) => {
            event.currentTarget.src = './img/empty.png';
          }}
        />
        <div className={`my-masnry-description flex`}>
          <div className={`my-masnry-user-box flex align-items-center`}>
            <div className={`my-masnry-user-prof-desc flex flex-column`}>
              <h1>{userName}</h1>
              <h3>{userJob}</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MasonryBox
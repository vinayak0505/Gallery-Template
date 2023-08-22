// MasonryBox component
const MasonryBox = ({ wallSrc, userName, userJob }) => {
  return (
    <div className={"my-masonry"}>
      <img src={wallSrc !== undefined ? wallSrc :
        "https://www.namepros.com/attachments/empty-png.89209/"
        
      } style={{ width: "100%" }} alt="" />
      <div className={`my-masnry-description flex`}>
        <div className={`my-masnry-user-box flex align-items-center`}>
          <div className={`my-masnry-user-prof-desc flex flex-column`}>
            <h1>{userName}</h1>
            <h3>{userJob}</h3>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MasonryBox
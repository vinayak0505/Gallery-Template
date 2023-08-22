

const MasonryBox = ({ wallSrc, userName, userJob }) => {
  return (
    <div className={"my-masonry"}>
      <img src={wallSrc} style={{ width: "100%" }} alt=""
        onError={(event) => {
          console.log(event.currentTarget.src);
          console.log(event.target.src);
          event.currentTarget.src = '/img/empty.png';
        }}
        onLoad
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
  )
}

export default MasonryBox
import { useState } from "react";

// import styles of this component
import styles from "./App.module.css"

// import other components to use
import Header from './Components/Header/Header';
import MasonryLayout from './Components/MasonryLayout/MasonryLayout';
import Dropdown from './Components/Elements/Dropdown/Dropdown';

// import json files 
import images from "./Jsons/Images.json"

// App component
const App = () => {
  // dropdown items
  const ddItems = [
    {
      id: 1,
      title: "All Images",
      active: true
    },
    {
      id: 2,
      title: "Topic Images",
      active: false
    },
    {
      id: 3,
      title: "Nature Images",
      active: false
    },
    {
      id: 4,
      title: "NFT Images",
      active: false
    },
    {
      id: 5,
      title: "Space Images",
      active: false
    }
  ]

  const [categoryImage, setCategoryImage] = useState(images.categories.all)

  const takeDdTitle = (ddTitle) => {
    setCategoryImage(() => {
      let categoryChoose = Object.keys(images.categories).filter(item => {
        const titleSplited = ddTitle.toLowerCase().split(" ")[0]
        return item.toLowerCase().includes(titleSplited)
      })
      return [...images.categories[categoryChoose]]
    })
  }

  return (
    <>
      <Header />
      <div className="flex justify-content-center" style={{ padding: '50px' }}>
        <MasonryLayout images={categoryImage} />
      </div>
    </>
  )
}

export default App
import { useState } from "react";

// import other components to use
import Header from './Components/Header/Header';
import MasonryLayout from './Components/MasonryLayout/MasonryLayout.js';

// import json files 
import images from "./Jsons/Images.json"

// App component
const App = () => {

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
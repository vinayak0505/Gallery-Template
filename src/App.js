import { useState } from "react";
import Galleries from "./Galleries";
import Gallery from "./Gallery";


// App component
// two pages are displayed depending apon the page that is selected
const App = () => {

  // page contains the value of the gallery that has been selected
  const [page, setPage] = useState("");
  return (
    <>
      {
        (page === "") ?
          <Galleries setPage={setPage} /> :
          <Gallery page={page} setPage={setPage} />
      }
    </>);
}

export default App
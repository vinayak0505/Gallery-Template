import { useEffect, useState } from "react";
import Galleries from "./Galleries";
import Gallery from "./Gallery";


// App component
const App = () => {
  const [page, setPage] = useState("");
  return (
    <>
      {
        (page === "") ?
          <Galleries page={page} setPage={setPage} /> :
          <Gallery page={page} setPage={setPage} />
      }
    </>);
}

export default App
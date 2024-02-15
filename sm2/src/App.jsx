import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Header from "./component/header/header";
import Banner from "./component/banner/banner";
import Main from "./page/main/main";
import Library from "./page/library/library";
import "./assets/css/style.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Header />
      <Banner />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/library" element={<Library />} />
      </Routes>
    </>
  );
}

export default App;

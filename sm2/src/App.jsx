import { Route, Routes } from "react-router-dom";
import Header from "./component/header/header";
import Banner from "./component/banner/banner";
import Main from "./page/main/main";
import Library from "./page/library/library";
import Book from "./page/book/book";
import "./assets/css/style.css";

function App() {
  return (
    <>
      <Header />
      <Banner />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/library" element={<Library />} />
        <Route path="/library/:id" element={<Book />} />
      </Routes>
    </>
  );
}

export default App;

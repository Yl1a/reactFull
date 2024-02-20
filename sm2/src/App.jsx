import { Route, Routes } from "react-router-dom";
import Header from "./component/header/header";
import Banner from "./component/banner/banner";
import Main from "./page/main/main";
import Users from "./page/users/users";
import Library from "./page/library/library";
import Book from "./page/book/book";
import Add from "./page/add/add";
import "./assets/css/style.css";

function App() {
  return (
    <>
      <Header />
      <Banner />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/users" element={<Users />} />
        <Route path="/library" element={<Library />} />
        <Route path="/library/:id" element={<Book />} />
        <Route path="/add" element={<Add />} />
      </Routes>
    </>
  );
}

export default App;

import Card from "../../component/card/card";
import { CARDS } from "../../component/data/data";
import { useState } from "react";

import style from "./library.module.css";

export default function Library() {
  const [query, setQuery] = useState("");
  function search(e) {
    setQuery(e.target.value);
  }

  const filterItem = CARDS.filter((item) => {
    return item.title.toLowerCase().includes(query.toLowerCase());
  });
  return (
    <main className="main">
      <div className="container">
        <div className="main_container">
          <div className="container">
            <div className="main_content">
              <h2 className="title mainTitle">Книги</h2>
              <div className="search">
                <div className="form">
                  <div className={style.search}>
                    <input
                      onChange={search}
                      type="search"
                      name="search"
                      className={style.search_item}
                      placeholder="search"
                    />
                  </div>
                </div>
              </div>
              <div className="category">
                <div className="category_item">
                  <a href="" className="link">
                    Все
                  </a>
                </div>
                <div className="category_item">
                  <a href="" className="link">
                    Зарубежная классика
                  </a>
                </div>
                <div className="category_item">
                  <a href="" className="link">
                    Детективы
                  </a>
                </div>
                <div className="category_item">
                  <a href="" className="link">
                    Ужасы
                  </a>
                </div>
              </div>
              <div className="cards">
                {filterItem.map((item, id) => {
                  return (
                    <Card
                      title={item.title}
                      category={item.category}
                      price={item.price}
                      key={id}
                      id={item.id}
                      ost={item.ost}
                    />
                  );
                })}
                {/*
                
                {CARDS.map((item, id) => (
                  <Card
                    title={item.title}
                    category={item.category}
                    price={item.price}
                    key={id}
                    id={item.id}
                  />
                ))} */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

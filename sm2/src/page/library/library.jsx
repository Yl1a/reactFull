import Card from "../../component/card/card";
import { CARDS } from "../../component/data/data";
import { useState } from "react";

import style from "./library.module.css";

export default function Library() {
  const [query, setQuery] = useState("");
  function search(e) {
    setQuery(e.target.value);
  }

  const [sorting, setSorting] = useState("");

  function sort(event) {
    const sortValue = event.target.value;
    setSorting(sortValue);
  }

  const filterItem = CARDS.filter((item) => {
    return item.title.toLowerCase().includes(query.toLowerCase());
  });

  const sortItem = (sorting, CARDS) => {
    switch (sorting) {
      case "asc":
        return [...CARDS].sort((a, b) => a.price - b.price);
      case "desc":
        return [...CARDS].sort((a, b) => b.price - a.price);
      case "ascOst":
        return [...CARDS].sort((a, b) => a.ost - b.ost);
      case "descOst":
        return [...CARDS].sort((a, b) => b.ost - a.ost);
      default:
        return CARDS;
    }
  };

  const sortAndFilterProduct = sortItem(sorting, filterItem);

  return (
    <main className="main">
      <div className="container">
        <div className="main_container">
          <div className="container">
            <div className="main_content">
              <h2 className="title mainTitle">Книги</h2>
              <div className="filter">
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
                <div className={style.filter_content}>
                  <div className="filter_item">
                    <h3 className="title">Цена</h3>
                    <select onChange={sort} className={style.sortItem}>
                      <option value="asc">По возрастанию</option>
                      <option value="desc">По убыванию</option>
                    </select>
                  </div>
                  <div className="filter_item">
                    <h3 className="title">Количество</h3>
                    <select onChange={sort} className={style.sortItem}>
                      <option value="ascOst">По возрастанию</option>
                      <option value="descOst">По убыванию</option>
                    </select>
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
                {sortAndFilterProduct.length ? (
                  sortAndFilterProduct.map((item, id) => {
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
                  })
                ) : (
                  <h2>skdjflsjdf</h2>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

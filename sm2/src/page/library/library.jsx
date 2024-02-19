import Card from "../../component/card/card";
import { CARDS } from "../../component/data/data";

export default function Library() {
  return (
    <main className="main">
      <div className="container">
        <div className="main_container">
          <div className="container">
            <div className="main_content">
              <h2 className="title mainTitle">Книги</h2>
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
                {CARDS.map((item, id) => (
                  <Card
                    title={item.title}
                    category={item.category}
                    price={item.price}
                    key={id}
                    id={item.id}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

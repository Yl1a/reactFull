import Card from "../../component/card/card";

const CARDS = [
  { title: "111", category: "111", price: "11111" },
  { title: "222", category: "222", price: "22222" },
  { title: "3333", category: "333", price: "3333" },
];
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
                {CARDS.map((item) => (
                  <Card
                    title={item.title}
                    category={item.category}
                    price={item.price}
                    key={item.title}
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

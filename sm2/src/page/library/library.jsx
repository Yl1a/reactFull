import Card from "../../component/card/card";

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
                <Card title="111" category="222" price="111" />
                <Card title="222" category="3333" price="333" />
                <Card title="4333" category="444" price="444" />
                <Card title="555" category="555" price="5555" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

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
                <div className="card">
                  <div className="img_card"></div>
                  <div className="info_cards">
                    <p className="category">зарубежная классика</p>
                    <h3 className="title">111111</h3>
                    <p className="text">
                      <span className="color">Цена:</span> 11110 ₽
                    </p>
                    <a href="" className="btn">
                      подробнее
                    </a>
                  </div>
                </div>
                <div className="card">
                  <div className="img_card"></div>
                  <div className="info_cards">
                    <p className="category">зарубежная классика</p>
                    <h3 className="title">111111</h3>
                    <p className="text">
                      <span className="color">Цена:</span> 11110 ₽
                    </p>
                    <a href="" className="btn">
                      подробнее
                    </a>
                  </div>
                </div>
                <div className="card">
                  <div className="img_card"></div>
                  <div className="info_cards">
                    <p className="category">зарубежная классика</p>
                    <h3 className="title">111111</h3>
                    <p className="text">
                      <span className="color">Цена:</span> 11110 ₽
                    </p>
                    <a href="" className="btn">
                      подробнее
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

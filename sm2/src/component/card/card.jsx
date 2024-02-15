import Btn from "../btn/btn";

export default function Card({ title, category, price }) {
  return (
    <div className="card">
      <div className="img_card"></div>
      <div className="info_cards">
        <p className="category">{category}</p>
        <h3 className="title">{title}</h3>
        <p className="text">
          <span className="color">Цена:</span> {price} ₽
        </p>
        <Btn title="Подробнее" />
      </div>
    </div>
  );
}

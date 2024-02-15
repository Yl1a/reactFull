import Info from "/main/info.png";

export default function Main() {
  return (
    <main className="main">
      <div className="container">
        <div className="main_content">
          <div className="info">
            <img src={Info} alt="" className="img" />
            <div className="info_content">
              <h2 className="slogan">Leaf</h2>
              <p className="text">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Labore aliquid, placeat doloremque deleniti quos aliquam officiis maxime temporibus quia debitis ex? Et perspiciatis iure illum exercitationem eos facilis non sint.</p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

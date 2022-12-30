const NavNews = () => {
  return (
    <div className="row">
      <nav className="nav">
        <a className="nav-link active" aria-current="page" href="/">
          <b>
            <u>Сейчас в СМИ</u>
          </b>
        </a>
        <a href="/" className="nav-link">
          В России
        </a>
        <a href="/" className="nav-link">
          Рекомендуем
        </a>
        <a href="/" className="nav-link disabled" aria-disabled="true">
          30 декабря пятница 03 00
        </a>
      </nav>
    </div>
  );
};

export default NavNews;

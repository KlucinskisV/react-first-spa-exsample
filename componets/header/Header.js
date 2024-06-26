import './header.css';

const Header = () => {
    return (
		<header className="header">
        <div className="header__wrapper">
          <h1 className="header__title">
            <strong>Hi, my name is <em>Vlad</em></strong><br/>
              a frontend developer
          </h1>
          <div className="header__text">
            <p>learning and creating my first SPA web Project.</p>
          </div>
          <a href="#!" className="btn">Click on too see the magic</a>
        </div>
      </header>

	);
}

export default Header;
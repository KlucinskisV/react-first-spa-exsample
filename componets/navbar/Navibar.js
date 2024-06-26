import sun from './icons/sun.svg';
import moon from './icons/moon.svg';

const Navbar = () => {
    return (
        <nav className="nav">
            <div className="container">
                <div className="nav-row">
                    <a href="./index.html" className="logo"><strong>Proline</strong> new setups</a>

                    <button className="dark-mode-btn">
                        <img src={sun} alt="Light mode" className="dark-mode-btn__icon" />
                        <img src={moon} alt="Dark mode" className="dark-mode-btn__icon" />
                    </button>

                    <ul className="nav-list">
                        <li className="nav-list__item"><a href="#!" className="nav-list__link nav-list__link--active">Home</a></li>
                        <li className="nav-list__item"><a href="#!" className="nav-list__link">Gallery</a></li>
                        <li className="nav-list__item"><a href="#!" className="nav-list__link">Blog</a></li>
                        <li className="nav-list__item"><a href="#!" className="nav-list__link">Contacts</a></li>
                        <li className="nav-list__item"><a href="#!" className="btn">Login : SignUp</a></li>

                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
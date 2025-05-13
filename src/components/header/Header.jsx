import {Link} from 'react-router-dom';
import Icon from "../Icon.jsx";
import './Header.scss';

function Header() {
    return (
        <header>
            <nav className="navbar navbar-dark bg-primary">
                <a className="navbar-brand cont" href="#">
                    <Icon name="menu" className="navbar-brand"/>
                </a>
                <div className="cont">
                    <span className="navbar-text cont"><Link to="/">Головна</Link></span>|<span className="navbar-text cont"><Link
                    to="/about">Про нас</Link></span>
                </div>
            </nav>
        </header>

    );
}

export default Header;
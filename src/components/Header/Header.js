import logo from '../../images/logo.svg';
export default function Header() {
    return(
        <header className="header">
            <a className="header__logo" href="#">
                <img className="header__logo-image" src={logo} alt="логотип"/>
            </a>
        </header>
    );
}

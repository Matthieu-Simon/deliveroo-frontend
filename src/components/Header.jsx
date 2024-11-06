import Logo from "../assets/Deliveroo-logo.png";
import "./Header.css";

function Header() {
    return (
        <header className="header">
            <img className="logo" src={Logo} alt="Logo Deliveroo" />
        </header>
    )
}

export default Header;
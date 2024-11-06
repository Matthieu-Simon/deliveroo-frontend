import Logo from "../../assets/Deliveroo-logo.png";
import "./Header.css";

function Header() {
    return (
        <header className="header">
            <div className="container--header">
                <img className="logo" src={Logo} alt="Logo Deliveroo" />
            </div>
        </header>
    )
}

export default Header;
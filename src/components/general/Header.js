import Logo from "../general/logo";
import Nav from "./Nav";

export default function Header() {
    return (
        <header>
            <nav className="navbar">
                <Logo />
                <Nav />
            </nav>
        </header>
    )
}
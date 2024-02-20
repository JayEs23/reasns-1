import Logo from "./logo";
import Nav from "../onboarding/Nav";

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
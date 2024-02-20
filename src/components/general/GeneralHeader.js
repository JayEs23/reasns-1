import Logo from "./logo";
import Nav from "../onboarding/Nav";

export default function MainHeader() {
    return (
        <header>
            <nav className="navbar navi">
                <Logo />
                <Nav />
            </nav>
        </header>
    )
}
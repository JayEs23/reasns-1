import Logo from "@/components/general/Logo";
import Nav from "@/components/onboarding/Nav";

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
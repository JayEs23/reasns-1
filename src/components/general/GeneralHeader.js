import Logo from "@/components/logo";
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
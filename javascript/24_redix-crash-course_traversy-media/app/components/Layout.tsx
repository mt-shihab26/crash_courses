import { Link } from "@remix-run/react";
import type { ReactNode } from "react";

const Navbar = () => {
    return (
        <nav className="navbar">
            <Link to="/" className="logo">
                Remix
            </Link>
            <ul className="nav">
                <li>
                    <Link to="/posts" className="logo">
                        Posts
                    </Link>
                </li>
            </ul>
        </nav>
    );
};

const Layout = (p: { children: ReactNode }) => {
    return (
        <>
            <Navbar />
            <div className="container">{p.children}</div>
        </>
    );
};

export default Layout;

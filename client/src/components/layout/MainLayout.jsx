import PropTypes from "prop-types";
import NavBar from "../Navbar";
import Footer from "../Footer";
import { useState, useEffect } from "react";

const MainLayout = ({ children }) => {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <div className="page-shell">
            <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
                <div className="orb orb-a" />
                <div className="orb orb-b" />
                <div className="orb orb-c" />
                <div className="page-noise" />
            </div>

            <NavBar isScrolled={isScrolled} />
            <main className="flex-grow">{children}</main>
            <Footer />
        </div>
    );
};

MainLayout.propTypes = {
    children: PropTypes.node,
};

export default MainLayout;

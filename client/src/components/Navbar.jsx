import { useState } from "react";
import PropTypes from "prop-types";
import { Link, NavLink } from "react-router-dom";
import Logo from "../assets/Logo.png";

const navItems = [
    { label: "Home", path: "/" },
    { label: "About", path: "/about" },
    { label: "Detection", path: "/detection" },
];

const NavBar = ({ isScrolled }) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const closeMenu = () => setIsMenuOpen(false);

    return (
        <header className={`sticky top-0 z-50 transition-all duration-300 ${isScrolled ? "pt-3" : "pt-5"}`}>
            <div className="content-shell">
                <div className={`glass-panel rounded-2xl px-4 py-3 transition-all duration-300 sm:px-6 ${isScrolled ? "shadow-[0_14px_28px_rgba(18,37,43,0.16)]" : "shadow-[0_8px_16px_rgba(18,37,43,0.1)]"}`}>
                    <div className="flex items-center justify-between">
                        <Link to="/" className="flex items-center gap-3" onClick={closeMenu}>
                            <img src={Logo} alt="CancerSkinAI logo" className="h-10 w-10 rounded-xl object-cover" />
                            <div>
                                <p className="text-lg font-bold tracking-tight text-[var(--ink-900)]">CancerSkinAI</p>
                                <p className="text-xs text-[var(--ink-600)]">AI-assisted skin screening</p>
                            </div>
                        </Link>

                        <nav className="hidden items-center gap-2 md:flex">
                            {navItems.map((item) => (
                                <NavLink
                                    key={item.path}
                                    to={item.path}
                                    className={({ isActive }) =>
                                        `rounded-full px-4 py-2 text-sm font-semibold transition-colors ${isActive ? "bg-[var(--ink-900)] text-white" : "text-[var(--ink-700)] hover:bg-white/70"}`
                                    }
                                >
                                    {item.label}
                                </NavLink>
                            ))}
                            <Link to="/detection" className="primary-btn ml-2 px-5 py-2.5 text-xs">
                                Start Scan
                            </Link>
                        </nav>

                        <button
                            type="button"
                            className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-white/70 bg-white/70 text-[var(--ink-900)] md:hidden"
                            onClick={() => setIsMenuOpen((open) => !open)}
                            aria-label="Toggle navigation menu"
                        >
                            {isMenuOpen ? "X" : "="}
                        </button>
                    </div>

                    <div className={`overflow-hidden transition-all duration-300 md:hidden ${isMenuOpen ? "max-h-80 pt-4" : "max-h-0"}`}>
                        <div className="space-y-2 rounded-xl border border-white/70 bg-white/70 p-3">
                            {navItems.map((item) => (
                                <NavLink
                                    key={item.path}
                                    to={item.path}
                                    onClick={closeMenu}
                                    className={({ isActive }) =>
                                        `block rounded-lg px-4 py-2 text-sm font-semibold transition-colors ${isActive ? "bg-[var(--ink-900)] text-white" : "text-[var(--ink-700)] hover:bg-white"}`
                                    }
                                >
                                    {item.label}
                                </NavLink>
                            ))}
                            <Link to="/detection" onClick={closeMenu} className="primary-btn mt-2 flex w-full">
                                Start Scan
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
};

NavBar.propTypes = {
    isScrolled: PropTypes.bool,
};

export default NavBar;

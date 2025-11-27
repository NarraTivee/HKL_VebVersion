import { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import styles from "@/styles/ui/Header.module.scss";
import { Link } from "react-scroll";

export function Header() {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => setMenuOpen(!menuOpen);

    const closeMenu = () => setMenuOpen(false);

    // Блокировка скролла при открытом меню
    useEffect(() => {
        if (menuOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }

        // Очистка при размонтировании
        return () => {
            document.body.style.overflow = '';
        };
    }, [menuOpen]);

    return (
        <>
            <header className={styles.header}>
                <div className={styles.header_container}>
                    <div className={styles.header_left}>
                        <div className={styles.header_logo}>
                            <a href="/">
                                <h1>H&K Logistic</h1>
                            </a>
                        </div>

                        {/* Desktop Navigation */}
                        <nav className={styles.header_routing_desktop}>
                            <ul className={styles.header_routing_list}>
                                <li className={styles.header_routing_items}>
                                    <Link to="services" smooth={true} duration={500}>
                                        УСЛУГИ
                                    </Link>
                                </li>
                                <li className={styles.header_routing_items}>
                                    <Link to="works" smooth={true} duration={500}>
                                        НАШИ РАБОТЫ
                                    </Link>
                                </li>
                                <li className={styles.header_routing_items}>
                                    <Link to="about_us" smooth={true} duration={500}>
                                        О НАС
                                    </Link>
                                </li>
                                <li className={styles.header_routing_items}>
                                    <Link to="contacts" smooth={true} duration={500}>
                                        КОНТАКТЫ
                                    </Link>
                                </li>
                            </ul>
                        </nav>
                    </div>

                    {/* Burger Button */}
                    <button
                        className={`${styles.burger} ${menuOpen ? styles.burger_active : ''}`}
                        onClick={toggleMenu}
                        aria-label="Toggle menu"
                    >
                        <span></span>
                        <span></span>
                        <span></span>
                    </button>
                </div>
            </header>

            {/* Mobile Menu & Overlay - через Portal */}
            {menuOpen && createPortal(
                <>
                    {/* Overlay */}
                    <div
                        className={styles.overlay}
                        onClick={closeMenu}
                    />

                    {/* Mobile Menu */}
                    <div className={styles.mobile_menu}>
                        {/* Burger Button внутри меню */}
                        <button
                            className={styles.burger_close}
                            onClick={closeMenu}
                            aria-label="Close menu"
                        >
                            <span></span>
                            <span></span>
                            <span></span>
                        </button>

                        <nav className={styles.mobile_nav}>
                            <ul className={styles.mobile_routing_list}>
                                <li>
                                    <Link
                                        to="services"
                                        smooth={true}
                                        duration={500}
                                        onClick={closeMenu}
                                    >
                                        УСЛУГИ
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        to="works"
                                        smooth={true}
                                        duration={500}
                                        onClick={closeMenu}
                                    >
                                        НАШИ РАБОТЫ
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        to="about_us"
                                        smooth={true}
                                        duration={500}
                                        onClick={closeMenu}
                                    >
                                        О НАС
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        to="contacts"
                                        smooth={true}
                                        duration={500}
                                        onClick={closeMenu}
                                    >
                                        КОНТАКТЫ
                                    </Link>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </>,
                document.body
            )}
        </>
    );
}
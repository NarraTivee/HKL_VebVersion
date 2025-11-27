import styles from "@/styles/ui/Header.module.scss";
import { Link } from "react-scroll";

export function Header({ onOpenModal }) {
    return (
        <header className={styles.header}>
            <div className={styles.header_container}>
                <div className={styles.header_left}>
                    <div className={styles.header_logo}>
                        <a href="/">
                            <h1>H&K Logistic</h1>
                        </a>
                    </div>
                    <ul className={styles.header_routing_list}>
                        <li className={styles.header_routing_items}>
                            <Link to="services" smooth={true} duration={500}>УСЛУГИ</Link>
                        </li>
                        <li className={styles.header_routing_items}>
                            <Link to="about_us" smooth={true} duration={500}>О НАС</Link>
                        </li>
                    </ul>
                </div>
                <div className={styles.header_contacts_container}>
                    <button
                        className={styles.header_contacts_btn}
                        onClick={onOpenModal}
                    >
                        Контакты
                    </button>
                </div>
            </div>
        </header>
    );
}
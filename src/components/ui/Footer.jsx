import styles from "@/styles/ui/Footer.module.scss";
import FooterLogo from "@/styles/svg/logo-hkl.svg";

export function Footer() {
    return (
        <footer className={styles.footer}>
            <div className={styles.footer_container}>

                <div className={styles.footer_content}>
                    <div className={styles.logo_wrapper}>
                        <div
                            className={styles.logo}
                            style={{ backgroundImage: `url(${FooterLogo})` }}
                        />
                    </div>

                    <p className={styles.copyright}>
                        © 2025–2026 HALABURDA & KRAVEL LOGISTIC
                        <br />
                        <span>Все права защищены</span>
                    </p>
                </div>

            </div>
        </footer>
    );
}
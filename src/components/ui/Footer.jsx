import styles from "@/styles/ui/Footer.module.scss";

export function Footer() {
    return (
        <footer className={styles.footer}>
            <div className={styles.footer_container}>
                <div className={styles.footer_container_content}>
                    <p>© Все права защищены / H&K Logistic / 2025-2026</p>
                </div>
            </div>
        </footer>
    );
}
import styles from "@/styles/ui/Footer.module.scss";
import FooterLogo from "@/styles/svg/logo-hkl.svg";

export function Footer() {
    return (
        <footer id="contacts" className={styles.footer}>
            <div className={styles.footer_inner}>

                {/* Основной контент */}
                <div className={styles.main_content}>

                    {/* Логотип и описание */}
                    <div className={styles.brand_section}>
                        <img src={FooterLogo} alt="HK Logistic" className={styles.logo} />
                        <p className={styles.brand_description}>
                            Международные грузоперевозки
                            <span>Надежность • Скорость • Качество</span>
                        </p>
                    </div>

                    {/* Контакты */}
                    <div className={styles.contacts_section}>
                        <h3 className={styles.section_title}>Свяжитесь с нами</h3>
                        <div className={styles.contacts_grid}>
                            <div className={styles.contact_group}>
                                <div className={styles.contact_item}>
                                    <span className={styles.phone}>+375 (33) 397 42 10</span>
                                    <span className={styles.messengers}>Viber • Telegram • WhatsApp</span>
                                </div>
                                <div className={styles.contact_item}>
                                    <span className={styles.phone}>+375 (33) 391 33 76</span>
                                    <span className={styles.messengers}>Telegram</span>
                                </div>
                            </div>
                            <div className={styles.contact_group}>
                                <div className={styles.contact_item}>
                                    <span className={styles.phone}>+375 (44) 771 49 17</span>
                                </div>
                                <div className={styles.contact_item}>
                                    <span className={styles.phone}>+375 (29) 289 63 94</span>
                                    <span className={styles.messengers}>Viber • Telegram • WhatsApp</span>
                                </div>
                            </div>
                        </div>
                        <a href="mailto:iphalburda@gmail.com" className={styles.email}>
                            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                                <path d="M2 4L8 8.5L14 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                                <rect x="2" y="3" width="12" height="10" rx="1.5" stroke="currentColor" strokeWidth="1.5"/>
                            </svg>
                            iphalburda@gmail.com
                        </a>
                    </div>

                </div>

                {/* Копирайт */}
                <div className={styles.footer_bottom}>
                    <p className={styles.copyright}>
                        © 2025–2026 HALABURDA & KRAVEL LOGISTIC
                    </p>
                    <p className={styles.rights}>Все права защищены</p>
                </div>

            </div>
        </footer>
    );
}
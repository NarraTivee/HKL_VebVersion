import styles from "@/styles/section/ServicesBlock.module.scss";

export function ServicesBlock() {
    return (
        <section id="services" className={styles.services_block}>
            <div className={styles.services_container}>

                {/* Заголовок секции */}
                <div className={styles.services_header}>
                    <h1>УСЛУГИ</h1>
                </div>

                {/* Описание */}
                <div className={styles.services_description}>
                    <p>
                        Мы — <span className={styles.highlight}>международная компания HK Logistic</span>, предлагаем
                        полный спектр высокопоставленных услуг по грузоперевозкам, чтобы удовлетворить все
                        ваши потребности в логистике. Стремимся обеспечить высокий уровень сервиса и индивидуальный
                        подход к каждому клиенту, чтобы сделать процесс перевозки максимально простым и удобным для вас.
                        Доверьте нам свои грузы, и мы позаботимся о их безопасной доставке!
                    </p>
                </div>

                {/* Список услуг */}
                <ul className={styles.services_list}>
                    <li>Консультируем по вопросам организации перевозки</li>
                    <li>Делаем предварительный расчёт стоимости и дополнительных услуг</li>
                    <li>Адаптируем условия работы под ваши пожелания</li>
                    <li>Помогаем оформить полный пакет документов</li>
                    <li>Полностью ведём перевозку: контроль и связь на всех этапах</li>
                    <li>Ежедневно информируем о местонахождении груза</li>
                </ul>

            </div>
        </section>
    );
}
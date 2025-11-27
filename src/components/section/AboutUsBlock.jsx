import styles from "@/styles/section/AboutUsBlock.module.scss";
import AboutUsLogo from "@/styles/svg/-01.png"; // оставляем твой логотип

export function AboutUsBlock() {
    return (
        <section id="about_us" className={styles.about_us_block}>
            <div className={styles.about_us_container}>

                {/* Заголовок + логотип */}
                <div className={styles.about_us_header}>
                    <div className={styles.title_wrapper}>
                        <h1>
                            О <span>НАС</span>
                        </h1>
                    </div>

                    <div className={styles.logo_wrapper}>
                        <div
                            className={styles.logo}
                            style={{ backgroundImage: `url(${AboutUsLogo})` }}
                        />
                    </div>
                </div>

                {/* Описание компании */}
                <div className={styles.about_us_description}>
                    <p>
                        Мы — международная логистическая компания с более чем 10-летним опытом.
                        Надёжность, скорость и личная ответственность — это не просто слова,
                        а принципы, по которым мы работаем каждый день. За годы работы мы доставили тысячи грузов
                        по всему миру и заслужили доверие клиентов, которые остаются с нами десятилетиями.
                    </p>
                </div>

                {/* Как мы работаем */}
                <div className={styles.workflow_section}>
                    <div className={styles.workflow_title}>
                        <h2>
                            КАК МЫ <br />
                            <span>РАБОТАЕМ</span>
                        </h2>
                    </div>

                    <ul className={styles.workflow_list}>
                        <li>Получаем запрос с данными о грузе</li>
                        <li>Уточняем все детали и пожелания</li>
                        <li>Подбираем оптимальный транспорт и маршрут</li>
                        <li>Согласовываем стоимость и подписываем договор</li>
                        <li>Берём перевозку под полный контроль</li>
                        <li>Доставляем груз точно в срок и получаем оплату</li>
                    </ul>
                </div>

            </div>
        </section>
    );
}
import styles from "@/styles/section/ServicesBlock.module.scss";

import worksImg_1 from "@/styles/img/section/services/works/IMG_20250813_120641_243.jpg";
import worksImg_2 from "@/styles/img/section/services/works/IMG_20250813_120642_276.jpg";
import worksImg_3 from "@/styles/img/section/services/works/IMG_20250813_120643_509.jpg";
import worksImg_4 from "@/styles/img/section/services/works/IMG_20250813_120646_019.jpg";
import worksImg_5 from "@/styles/img/section/services/works/IMG_20250813_120647_538.jpg";
import worksImg_6 from "@/styles/img/section/services/works/IMG_20250813_120649_703.jpg";

const worksImgArr = [
    { id: 1, url: worksImg_1 },
    { id: 2, url: worksImg_2 },
    { id: 3, url: worksImg_3 },
    { id: 4, url: worksImg_4 },
    { id: 5, url: worksImg_5 },
    { id: 6, url: worksImg_6 },
];

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
                        Мы — <span className={styles.highlight}>международная компания HK Logistic</span>,
                        предлагаем полный спектр высококачественных услуг по грузоперевозкам.
                        Индивидуальный подход, контроль каждого этапа и забота о вашем грузе — наш главный приоритет.
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

                {/* Галерея — «Наши работы» в стиле WelcomBlock */}
                <div className={styles.gallery_section}>
                    <div className={styles.gallery_title}>
                        <h2>
                            НАШИ <span>РАБОТЫ</span>
                        </h2>
                    </div>

                    <div className={styles.gallery_grid}>
                        {worksImgArr.map((item) => (
                            <div
                                key={item.id}
                                className={styles.gallery_item}
                                style={{ backgroundImage: `url(${item.url})` }}
                            />
                        ))}
                    </div>
                </div>

            </div>
        </section>
    );
}
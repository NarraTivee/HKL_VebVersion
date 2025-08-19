import styles from "@/styles/section/ServicesBlock.module.scss";


import worksImg_1 from "@/styles/img/section/services/works/IMG_20250813_120641_243.jpg";
import worksImg_2 from "@/styles/img/section/services/works/IMG_20250813_120642_276.jpg";
import worksImg_3 from "@/styles/img/section/services/works/IMG_20250813_120643_509.jpg";
import worksImg_4 from "@/styles/img/section/services/works/IMG_20250813_120646_019.jpg";
import worksImg_5 from "@/styles/img/section/services/works/IMG_20250813_120647_538.jpg";
import worksImg_6 from "@/styles/img/section/services/works/IMG_20250813_120649_703.jpg";


const works_img_arr = [
    {
        id: 1,
        url: worksImg_1
    },
    {
        id: 2,
        url: worksImg_2
    },
    {
        id: 3,
        url: worksImg_3
    },
    {
        id: 4,
        url: worksImg_4
    },
    {
        id: 5,
        url: worksImg_5
    },
    {
        id: 6,
        url: worksImg_6
    }
]

export function ServicesBlock() {
    return (
        <section id="services" className={styles.services_block}>
            <div className={styles.services_block_container}>
                <div className={styles.services_block_left}>
                    <div className={styles.services_block_left_header}>
                        <div className={styles.services_block_left_title}>
                            <h1>Services</h1>
                        </div>
                        <div className={styles.services_block_left_title_text}>
                            <p>Мы — <span>международная компания HK Logistic</span>, предлагаем полный спектр высокопоставленных услуг по грузоперевозкам, чтобы удовлетворить все ваши потребности в логистике. <br /> стремимся обеспечить высокий уровень сервиса и индивидуальный подход к каждому клиенту, чтобы сделать процесс перевозки максимально простым и удобным для вас. Доверьте нам свои грузы, и мы позаботимся о их безопасной доставке!</p>
                        </div>
                    </div>
                    <div className={styles.services_block_left_bottom}>
                        <ul className={styles.services_block_left_list}>
                            <li className={styles.services_block_left_item}>
                                <p>Консультируем по вопросам организации вашей перевозки</p>
                            </li>
                            <li className={styles.services_block_left_item}>
                                <p>Делаем предварительный расчет стоимости перевозки и дополнительных услуг</p>
                            </li>
                            <li className={styles.services_block_left_item}>
                                <p>Адаптируем условия работы и сервис под ваши пожелания</p>
                            </li>
                            <li className={styles.services_block_left_item}>
                                <p>Помогаем правильно оформить полный пакет необходимых товаросопроводительных документов</p>
                            </li>
                            <li className={styles.services_block_left_item}>
                                <p>Полностью берем ведение перевозки на себя: контроль каждого этапа, поддержание прямой связи с ключевыми участниками перевозки</p>
                            </li>
                            <li className={styles.services_block_left_item}>
                                <p>Ежедневно сообщаем о местонахождении груза</p>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className={styles.services_block_right}>
                    <ul className={styles.services_block_right_img_container}>
                        {works_img_arr.map((item) => (
                            <li className={styles.services_block_right_img}
                                key={works_img_arr.id}
                                style={{ 'background-image': `url(${item.url})` }}
                            >

                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </section>
    );
} 
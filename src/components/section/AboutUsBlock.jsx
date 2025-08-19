import styles from "@/styles/section/AboutUsBlock.module.scss";
import AboutUsLogo from "@/styles/svg/-01.png";
export function AboutUsBlock() {
    return (
        <section id="about_us" className={styles.about_us_block}>
            <div className={styles.about_us_container}>
                <div className={styles.about_us_block_top}>
                    <div className={styles.about_us_block_top_left}>
                        <div className={styles.about_us_block_top_left_title}>
                            <h1>About Us</h1>
                        </div>
                        <div className={styles.about_us_block_top_left_text}><p>В уютном кафе на углу города всегда царила особая атмосфера. Мягкий свет ламп создавал теплую обстановку, а аромат свежезаваренного кофе манил посетителей. За столиками сидели люди, погруженные в книги или беседы, улыбки и смех наполняли пространство. Официанты с радостью обслуживали гостей, создавая ощущение домашнего уюта. Время здесь текло иначе: каждый мог остановиться, насладиться моментом и забыть о повседневной суете. Это было место, где встречались друзья и зарождались новые идеи.создавая ощущение домашнего уюта. Время здесь текло иначе: каждый мог остановиться, насладиться.</p></div>
                    </div>
                    <div className={styles.about_us_block_top_right}>
                        <div className={styles.about_us_block_top_right_logo} style={{ 'background-image': `url(${AboutUsLogo})` }}>
                        </div>
                    </div>
                </div>
                <div className={styles.about_us_block_bottom}>
                    <div className={styles.about_us_block_bottom_text}>
                        <h2>Как мы работаем</h2>
                    </div>

                    <ul className={styles.about_us_block_bottom_list}>
                        <li className={styles.about_us_block_bottom_item}>
                            <div className={styles.about_us_block_bottom_item_container}>
                                <p>Получаем запрос с данными</p>
                            </div>
                            <div className={styles.about_us_block_bottom_item_number}><h1>1</h1></div>
                        </li>
                        <li className={styles.about_us_block_bottom_item}>
                            <div className={styles.about_us_block_bottom_item_container}>
                                <p>Уточняем условия</p>
                            </div>
                            <div className={styles.about_us_block_bottom_item_number}><h1>2</h1></div>
                        </li>
                        <li className={styles.about_us_block_bottom_item}>
                            <div className={styles.about_us_block_bottom_item_container}>
                                <p>Подбираем транспорт и маршрут, формируем цену</p>
                            </div>
                            <div className={styles.about_us_block_bottom_item_number}><h1>3</h1></div>
                        </li>
                        <li className={styles.about_us_block_bottom_item}>
                            <div className={styles.about_us_block_bottom_item_container}>
                                <p>Согласовываем условия и подписываем документы</p>
                            </div>
                            <div className={styles.about_us_block_bottom_item_number}><h1>4</h1></div>
                        </li>
                        <li className={styles.about_us_block_bottom_item}>
                            <div className={styles.about_us_block_bottom_item_container}>
                                <p>Оказываем услугу</p>
                            </div>
                            <div className={styles.about_us_block_bottom_item_number}><h1>5</h1></div>
                        </li>
                        <li className={styles.about_us_block_bottom_item}>
                            <div className={styles.about_us_block_bottom_item_container}>
                                <p>Получаем оплату</p>
                            </div>
                            <div className={styles.about_us_block_bottom_item_number}><h1>6</h1></div>
                        </li>
                    </ul>
                </div>
            </div>
        </section>
    );
}
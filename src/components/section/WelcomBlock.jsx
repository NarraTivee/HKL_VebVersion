import styles from "@/styles/section/WelcomBlock.module.scss";
import {Header} from "../ui/Header";

import WelcomBlockBg from "@/styles/img/section/gruzovik-v-sudohodnom-portu.jpg";
import WelcomBlockLogo from "@/styles/svg/logo-hkl.svg";

export function WelcomBlock() {
    return (
        <section className={styles.welcom_block}>
            <div className={styles.welcom_container}>
                <div
                    className={styles.background_image}
                    style={{backgroundImage: `url(${WelcomBlockBg})`}}
                />

                <Header/>

                <div className={styles.welcom_content}>
                    <div className={styles.welcom_text_card}>
                        <div className={styles.welcom_title}>
                            <h1>
                                <span className={styles.top_line}>HALABURDA</span>
                                <span className={styles.logistic_line}>& LOGISTIC</span>
                                <span className={styles.bottom_line}>KRAVEL</span>
                            </h1>
                        </div>

                        <div className={styles.welcom_description}>
                            <p>
                                Опыт, гибкость, скорость, честность, лояльность и индивидуальный подход - это все про
                                нас. Личная ответственность и вовлеченность руководителей в каждую перевозку - гаранты
                                высокого качества. Поэтому свыше двух десятков клиентов работают с нами постоянно уже
                                больше 10 лет!
                            </p>
                        </div>
                    </div>

                    <div className={styles.logo_wrapper}>
                        <img
                            src={WelcomBlockLogo}
                            alt="Halaburda & Kravel Logistic"
                            className={styles.logo_img}
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}
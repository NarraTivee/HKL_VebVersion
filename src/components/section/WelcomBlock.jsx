import styles from "@/styles/section/WelcomBlock.module.scss";
import { Header } from "../ui/Header";

import WelcomBlockBg from "@/styles/img/section/gruzovik-v-sudohodnom-portu.jpg";
import WelcomBlockLogo from "@/styles/svg/logo-hkl.svg";

export function WelcomBlock({ onOpenModal }) {
    return (
        <section className={styles.welcom_block}>
            <div className={styles.welcom_container}>
                <div
                    className={styles.background_image}
                    style={{ backgroundImage: `url(${WelcomBlockBg})` }}
                />

                <Header onOpenModal={onOpenModal} />

                <div className={styles.welcom_content}>
                    <div className={styles.welcom_text_card}>
                        <div className={styles.welcom_title}>
                            <h1>
                                HALABURDA <br />
                                <span>& LOGISTIC</span> <br />
                                KRAVEL
                            </h1>
                        </div>

                        <div className={styles.welcom_description}>
                            <p>
                                Опыт, гибкость, скорость, честность, лояльность и индивидуальный подход - это все про нас.  Личная ответственность и вовлеченность руководителей в каждую перевозку - гаранты высокого качества. Поэтому свыше двух десятков клиентов работают с нами постоянно уже больше 10 лет...
                            </p>
                        </div>
                    </div>

                    <div className={styles.logo_wrapper}>
                        <div
                            className={styles.logo}
                            style={{ backgroundImage: `url(${WelcomBlockLogo})` }}
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}
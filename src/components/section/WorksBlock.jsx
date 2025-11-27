import styles from "@/styles/section/WorksBlock.module.scss";

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

export function WorksBlock() {
    return (
        <section id="works" className={styles.works_block}>
            <div className={styles.works_container}>

                {/* Заголовок секции */}
                <div className={styles.works_header}>
                    <h1>
                        НАШИ <span>РАБОТЫ</span>
                    </h1>
                </div>

                {/* Галерея */}
                <div className={styles.works_grid}>
                    {worksImgArr.map((item) => (
                        <div
                            key={item.id}
                            className={styles.works_item}
                            style={{ backgroundImage: `url(${item.url})` }}
                        />
                    ))}
                </div>

            </div>
        </section>
    );
}
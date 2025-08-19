import styles from "@/styles/ui/ModalWindow.module.scss";
import { useEffect, useState } from "react";
import { IoMdClose } from "react-icons/io";
export function ModalWindow({ setHandleClose }) {
    const [isCopy, setIsCopy] = useState(false)
    const handleCopy = (text) => {
        navigator.clipboard.writeText(text)
        setIsCopy(true)
        console.log(isCopy)
    }

    useEffect(() => {
        if (isCopy == true) {
            setTimeout(() => {
                setIsCopy(false)
                console.log(isCopy)
            }, 1500);
        }
    }, [isCopy])

    return (
        <div
            className={styles.modal_window}
        >
            <span
                className={isCopy ? styles.modal_window_span_open : styles.modal_window_span_close}
            // style={isCopy ? { display: "block" } : { display: "none" }}
            >Copied</span>
            <div className={styles.modal_window_block}>
                <div className={styles.modal_window_block_container}>
                    <div className={styles.modal_window_header}>
                        <h1>Связь с нами: </h1>
                        <IoMdClose
                            onClick={() => {
                                setHandleClose(false)
                            }}
                            className={styles.modal_wimdow_close_btn} />
                    </div>

                    <div className={styles.modal_window_block_content}>
                        <h2>Телефоны</h2>
                        <ul className={styles.modal_window_contacts_list}>
                            <li className={styles.modal_window_block_item} onClick={() => { handleCopy('+375 (33) 397 42 10') }}><p>+375 (33) 397 42 10 (Viber; Telegram; WhatsApp)</p></li>
                            <li className={styles.modal_window_block_item} onClick={() => { handleCopy('+375 (33) 391 33 76') }}><p>+375 (33) 391 33 76 (Telegram)</p></li>
                            <li className={styles.modal_window_block_item} onClick={() => { handleCopy('+375 (44) 771 49 17') }}><p>+375 (44) 771 49 17</p></li>
                            <li className={styles.modal_window_block_item} onClick={() => { handleCopy('+375 (29) 289 63 94') }}><p>+375 (29) 289 63 94 (Viber; Telegram; WhatsApp)</p></li>
                        </ul>

                        <h2>Почта</h2>
                        <ul className={styles.modal_window_email_list}>
                            <li className={styles.modal_window_block_item}><p><a href="mailto:iphalburda@gmail.com">iphalburda@gmail.com</a></p></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div >
    );
}
import { FaDiscord, FaInstagram, FaLinkedin } from "react-icons/fa";
import { AiFillGithub } from "react-icons/ai";
import styles from "./Contatos.module.css"

function Contatos() {
    return (
        <>
            <section className={styles.mainContatos}>
                <section className={styles.boxContatos}>
                    <div></div>
                    <p>Contatos</p>
                    <div className={styles.icones}>
                        <FaLinkedin className={styles.icon}/>
                        <AiFillGithub className={styles.icon}/>
                        <FaInstagram className={styles.icon}/>
                        <FaDiscord className={styles.icon}/>
                    </div>
                </section>
            </section>
        </>
    )
}

export default Contatos

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
                        <a href={"https://www.linkedin.com/in/esdras-asa-999448270/"} target="_blank" rel="noopenner norefferer">
                            <FaLinkedin className={styles.icon} />
                        </a>
                        <a href={"https://github.com/EsdrasCodes"} target="_blank" rel="noopenner norefferer">
                            <AiFillGithub className={styles.icon} />
                        </a>
                        <a href={"https://www.instagram.com/_esdras.asa/"} target="_blank" rel="noopenner norefferer">
                            <FaInstagram className={styles.icon} />
                        </a>
                        <a href={"https://discord.gg/hpHkrEvDVh"} target="_blank" rel="noopenner norefferer">
                            <FaDiscord className={styles.icon} />
                        </a>
                    </div>
                </section>
            </section>
        </>
    )
}

export default Contatos

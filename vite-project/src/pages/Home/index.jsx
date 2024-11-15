
import { Link } from "react-router-dom"
import styles from "./Home.module.css"

function Home() {
    return (
        <> 
            <section className={styles.home}>
                <div className={styles.apresentacao}>
                    <p>
                        Olá, sou <br />
                        <span>
                            Esdras Asa
                        </span> <br />
                        Dev Full Stack
                    </p>
                    <Link to="/sobre" className={`${styles.btn} ${styles.btn_purple}`}>
                        Saiba mais sobre mim
                    </Link>
                </div>
                <div className={styles.frase}>
                "Não é a tecnologia que transforma o mundo, <br />são os sonhos que a tecnologia inspira." <br /> < div className={styles.nameText}> – Steve Jobs</div>
                </div>
            </section>
        </>
    )
}

export default Home

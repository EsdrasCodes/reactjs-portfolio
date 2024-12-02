
import { Link } from "react-router-dom"
import styles from "./Home.module.css"
import { useEffect } from "react";

function Home() {

    let i = 0;
    const txt = "Esdras Asa";
    const speed = 200;

    function typeWriter() {
        const nameElement = document.getElementById("name");
        if (nameElement && i < txt.length) {
            nameElement.innerHTML += txt.charAt(i);
            i++;
            setTimeout(typeWriter, speed);
        }
    }

    useEffect(() => {
        typeWriter();
    }, []);

    return (
        <>
            <section className={styles.home}>
                <div className={styles.apresentacao}>
                    <p>
                        Olá, sou <br />
                        <span id="name" className={styles.mainName}>
                        </span> <br />
                        Front-end Developer
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

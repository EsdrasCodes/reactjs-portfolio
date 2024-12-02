
import styles from "./Sobre.module.css"
import avatar from "./images/esdras.png"
import html5 from "./images/icons8-html5.svg"
import css3 from "./images/icons8-css3.svg"
import js from "./images/icons8-js.svg"


function Sobre() {
    return (
        <>
            <section className={styles.sobre}>
                <div className={styles.bio}>
                    <img src={avatar} alt="avatar" className={styles.avatar} />
                    <div className={styles.textos}>
                        <h2>Sobre</h2>
                        <p>Sou <span>Esdras Asa</span> <br />
                            <strong>Software Engineer Student - Jala University 🇺🇸🎓</strong>  </p>
                        <p>Desde a infância fascinado por tecnologia, hoje transformo paixão em inovação, <br />criando soluções digitais que impactam o presente e moldam o futuro.</p>
                    </div>
                </div>
                <div className={styles.techs}>
                    <h3>Techs</h3>
                    <div className={styles.icones}>
                        <img src={html5} alt="icone do html" />
                        <img src={css3} alt="icone do css" />
                        <img src={js} alt="icone do javascript" />
                    </div>
                </div>
            </section>
        </>
    )
}

export default Sobre

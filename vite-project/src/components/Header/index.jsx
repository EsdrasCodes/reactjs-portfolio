import { Link } from "react-router-dom"
import styles from "./Header.module.css"
import { FaCode } from "react-icons/fa";

function Header() {
    return (
        <header className={styles.header}>
            <Link to="/">
                <FaCode className={styles.logo} />
                <span>esdrasAsa.dev</span>
            </Link>
            <nav>
                <Link to="/">Home</Link>
                <Link to="/sobre">Sobre</Link>
                <Link to="/projetos">Projetos</Link>
                <Link to="/contatos">Contatos</Link>
            </nav>
        </header>
    )
}

export default Header

import Card from "../../components/cards"
import styles from "./Projetos.module.css"
import { useEffect, useState } from "react"

function Projetos() {

    const [repositories, setRepositories] = useState([])

    useEffect(() => {
        const buscarRepositorios = async () => {
            const respose = await fetch("https://api.github.com/users/EsdrasCodes/repos?page=1&per_page=50")
            const data = await respose.json()
            setRepositories(data)
        }
        buscarRepositorios()
    }, [])

    return (
        <>
            <section className={styles.projetos}>
                <h2>Projetos</h2>
                {
                    repositories.length > 0 ? (
                        <section className={styles.lista}>
                            {
                                repositories.map((repo) => (
                                    <Card
                                        key={repo.id}
                                        name={repo.name}
                                        description={repo.description}
                                        html_url={repo.html_url} />
                                ))
                            }
                        </section>
                    ) : (
                        <p>Carregando repositórios...</p>
                    )
                }
            </section>
        </>
    )
}


export default Projetos

import { useEffect, useState } from "react";

import styles from './ReposList.module.css'

const ReposList = ({ nomeUsuario }) => {
    const [repos, setRepos] = useState([])
    const [estaCarregando, setEstaCarregando] = useState([])

    useEffect(() => {
        fetch(`https://api.github.com/users/${nomeUsuario}/repos`)
            .then(res => res.json())
            .then(resJson => {
                setTimeout(() => {
                    setEstaCarregando(false)
                    setRepos(resJson)
                }, 2000)
            })
    }, [nomeUsuario])

    return (
        <div className="container">
            {estaCarregando && (
                <h1>Carregando...</h1>
            )}
            <ul className={styles.list}>
                {repos.map(({ id, name, language, html_url }) => (
                    <li key={id} className={styles.listItem}>
                        <div className={styles.itenName}>
                            <b>Nome:</b>
                            {name}
                        </div>
                        <div className={styles.itenLanguage}>
                            <b>Language:</b>
                            {language}
                        </div>
                        <div className={styles.itenLink}>
                            <a target="_blank" href={html_url}>Visitar Github</a>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    )

}

export default ReposList
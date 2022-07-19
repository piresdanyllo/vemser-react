import styles from './Logo.module.css'

const Logo = (props) => {
    return(
        <>
        <img src={props.img} alt="" className={styles.imgLogo}/>
        <p>Melhores alunos do Vem Ser de todos os tempos</p>
        </>
    )
}

export default Logo
import styles from './Personal.module.css';

const Personal = ({name, age, profession, img}) => {
    return(
        <div className={styles.personal}>
            <img src={img} alt="" />
            <h2>Nome: {name}</h2>
            <p>Idade: {age}</p>
            <p>Profissão: {profession}</p>
        </div>
    )
}

export default Personal
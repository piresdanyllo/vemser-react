import Card from "./Card/Card"
import styles from "./SectionCards.module.css"

const SectionCards = () => {
    const text = 'Estamos aprendendo HTML/CSS e React com o melhor professor de todos'
    return(
        <section>
            <h1>{text}</h1>
            <div className={styles.cardsContainer}>
                <Card value="cogumelo 1"/>
                <Card value="cogumelo 2"/>
                <Card value="cogumelo 3"/>
            </div>
        </section>
    )
}

export default SectionCards
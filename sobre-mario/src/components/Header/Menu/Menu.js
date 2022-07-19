import ItemMenu from "./ItemMenu/ItemMenu"
import styles from "./Menu.module.css"

const Menu = () => {


    return(
        <>
        <ul>
            <ItemMenu value="Home"/>
            <ItemMenu value="Sobre"/>
            <ItemMenu value="Contato"/>
        </ul>
        </>
    )
}

export default Menu
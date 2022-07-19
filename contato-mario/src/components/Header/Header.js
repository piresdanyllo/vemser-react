import Logo from "./Logo/Logo.js"
import cogumelo from '../../img/mario_PNG75.png'
import styles from './Header.module.css'
import Menu from "./Menu/Menu.js"

const Header = () => {
    return (
        <div className={styles.container}>
            <header>
                <Logo img={cogumelo}/>
                <Menu/>
            </header>
        </div>
    )
}

export default Header
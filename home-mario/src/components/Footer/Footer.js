import Menu from "../Header/Menu/Menu";
import styles from "./Footer.module.css";
import ItemMenu from "../Header/Menu/ItemMenu/ItemMenu";

const Footer = () => {
  return (
    <div className={styles.footerContainer}>
      <footer>
        <Menu>
          <ItemMenu value="Home" />
          <ItemMenu value="Sobre" />
          <ItemMenu value="Contato" />
        </Menu>
        <address>Av. Andaraí 531 - Porto Alegre</address>
      </footer>
    </div>
  );
};

export default Footer;

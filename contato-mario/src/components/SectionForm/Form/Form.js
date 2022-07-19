import styles from './Form.module.css'

const Form = () => {
    return(
        <div className={styles.containerForm}>
            <form action="">
                <label htmlFor="name">Digite seu nome completo</label>
                <input type="text" name="name" placeholder="Digite seu nome aqui"/>
                <label htmlFor="email">Digite seu email</label>
                <input type="text" name="email" placeholder="Digite seu email aqui"/>
                <label htmlFor="reason">Qual motivo do contato?</label>
                <select name="reason" id="">
                    <option value="Reclamações">Reclamações</option>
                    <option value="Sugestões">Sugestões</option>
                    <option value="Devoluções">Devoluções</option>
                </select>
                <label htmlFor="msg">Digite sua mensagem</label>
                <textarea name="msg" id="" cols="30" rows="10"></textarea>
                <button>Enviar</button>
            </form>
        </div>
    )
}

export default Form
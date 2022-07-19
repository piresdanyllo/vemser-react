const SayMyName = (props) => {
    console.log(props)
    return(
        <div>
            <p>Meu nome é {props.name} e minha idade é {props.age}</p>
        </div>
    )
}

export default SayMyName
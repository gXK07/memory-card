const Card = (props) => {
    return <div id="Card" onClick={props.handleClick}>
        {props.perso.Img}
        <div>{props.perso.nom}</div>
        </div>
}

export default Card
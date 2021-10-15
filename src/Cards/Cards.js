import Card from "./Card";

const Cards = (props) => {

    let CardsArea = [];
    for(let i = 0; i<12; i++){
        CardsArea[i] = <Card key={i} perso={props.perso[i]} 
        handleClick={props.handleClick}/>
    }
    return <div id="CardsArea">
        {CardsArea}
    </div>
}

export default Cards
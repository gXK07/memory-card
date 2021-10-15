const Header = (props) => {
    return <header>
        <div>メモリカード</div>
        <div>Score {props.score}</div>
        <div>Best score : {props.bestScore} </div>
    </header>
}

export default Header
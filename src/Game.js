import './Game.css';
import { useEffect, useState } from 'react';
import {check, shuffleArray} from './Utils.js'
import personnage from './Perso.js'
import Header from './Header';
import Cards from './Cards/Cards'


function Game() {

  const [perso, setPerso] = useState(personnage);
  const [persoClicked, setPersoClicked] = useState([]);
  const [score, setScore] = useState(0);
  const [bestScore, setBestScore] = useState(0)

    useEffect(() => {
        const loadCard = () => {
          setPerso(shuffleArray(personnage))
        }
        loadCard();
      }, [score])

  
  const handleClick = (e) => {
    if(check(persoClicked, e.target.id)){
      setScore(0);
      setPersoClicked([]);
    }
    else{
      setPersoClicked([...persoClicked, e.target.id]);
      const newScore = (score + 1);
      setScore(newScore);
      if(newScore > bestScore)
      setBestScore(newScore)
    }
  }


  return (
    <div id='Game'>
      <Header score={score} bestScore={bestScore}/>
      <Cards perso={perso} handleClick={handleClick}/>
    </div>)
}

export default Game;

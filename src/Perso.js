import React from 'react';
import Baki from './Assets/Images/Baki.jpeg'
import Eren from './Assets/Images/eren.png'
import Itachi from './Assets/Images/Itachi.jpeg'
import Kirua from './Assets/Images/kirua.jpeg'
import Ligth from './Assets/Images/Ligth.jpeg'
import Livai from './Assets/Images/livai.png'
import Luffy from './Assets/Images/luffy.jpeg'
import Mikassa from './Assets/Images/mikassa.png'
import Minato from './Assets/Images/minato.jpeg'
import Naruto from './Assets/Images/naruto.png'
import Zoro from './Assets/Images/zoro.jpeg'
import Sanji from './Assets/Images/sanji.jpeg'

const Images = {
        Baki : <img src={Baki} className="classImg" id="Baki" alt="Baki" height="300px" width="200px"/>,
        Eren : <img src={Eren} className="classImg" id="Eren" alt="Eren" height="300px" width="200px"/>,
        Itachi :<img src={Itachi} className="classImg" id="Itachi" alt="Itachi" height="300px" width="200px"/>,
        Kirua : <img src={Kirua} className="classImg" id="Kirua" alt="Kirua" height="300px" width="200px"/>,
        Ligth : <img src={Ligth} className="classImg" id="Ligth" alt="Ligth" height="300px" width="200px"/>,
        Livai : <img src={Livai} className="classImg" id="Livai" alt="Livai" height="300px" width="200px"/>,
        Luffy : <img src={Luffy} className="classImg" id="Luffy" alt="Luffy" height="300px" width="200px"/>,
        Mikassa : <img src={Mikassa} className="classImg" id="Mikassa" alt="Mikassa" height="300px" width="200px"/>,
        Minato : <img src={Minato} className="classImg" id="Minato" alt="Minato" height="300px" width="200px"/>,
        Naruto : <img src={Naruto} className="classImg" id="Naruto" alt="Naruto" height="300px" width="200px"/>,
        Zoro : <img src={Zoro} className="classImg" id="Zoro" alt="Zoro" height="300px" width="200px"/>,
        Sanji : <img src={Sanji} className="classImg" id="Sanji" alt="Sanji" height="300px" width="200px"/>
}

const persoName = ["Baki", "Eren", "Itachi", "Kirua", "Ligth", "Livai",
"Luffy", "Mikassa", "Minato", "Naruto", "Zoro", "Sanji"];

const createPerso = (nom, id) => {
    return {
        nom : nom,
        Img : Images[nom],
        id
    }
}

let perso = [];
for (let i=0; i<12; i++){
    perso[i] = createPerso(persoName[i], i)
}

export default perso
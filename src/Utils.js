const check = (array, item) => {
    let bol = false;
    for(let i =0; i<array.length; i++){
        if (array[i] === item){
            bol = true
        } 
    }
    return bol
}

const shuffleArray = (array) => {
    let order = [];
    let arrayInOrder = []
    for(let i = 0; i<12; i++){
        let randomNumber = Math.floor(Math.random() *12);
        while(check(order, randomNumber) === true){
            randomNumber = Math.floor(Math.random() *12);
        }
        order.push(randomNumber);
    }
    for(let i = 0; i<12; i++){
        arrayInOrder[i] = array[order[i]]
    }
    return arrayInOrder
}

export {check, shuffleArray}
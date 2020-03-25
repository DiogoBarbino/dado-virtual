
export const createDices = (numberOfDice) => {
    let quantity = (numberOfDice + 1) || 1;
    if (quantity > 9) quantity = 9;
    if (quantity < 1) quantity = 1;
    let dices = new Array(quantity);
    dices = dices.fill(1);
    return dices;
  }
  
export  const createRandomDices = (numberOfDice, numberOfFaces) => {
    let dices = createDices(numberOfDice).map((item, index) => {
      return Math.floor(Math.random() * numberOfFaces) + 1;
    })
    return dices;
  }
  
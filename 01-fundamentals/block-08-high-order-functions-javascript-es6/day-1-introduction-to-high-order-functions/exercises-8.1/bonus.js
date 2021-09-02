// In these exercises you will implement HOFs that simulate a battle round in a game. You will create functions that calculate damage, update status, and at the end, return the results of the round.
// For the next exercises copy the code below.

const mage = {
  healthPoints: 130,
  intelligence: 45,
  mana: 125,
  damage: undefined,
};

const warrior = {
  healthPoints: 200,
  strength: 30,
  weaponDmg: 2,
  damage: undefined,
};

const dragon = {
  healthPoints: 350,
  strength: 50,
  damage: undefined,
};

const battleMembers = { mage, warrior, dragon };

// 1 - Create a function that returns the dragon's damage.
// The damage will be a random number between 15 (minimum damage) and the strength attribute value (maximum damage).

const dragonDmg = () => Math.floor(Math.random() * (dragon.strength - 15) + 15);

// 2 - Create a function that returns the damage done by the warrior.
// The damage will be a random number between the strength attribute value (minimum damage) and the strength * weaponDmg value (maximum damage).

const warriorDmg = () => Math.floor(Math.random() * ((warrior.strength * warrior.weaponDmg) - warrior.strength) + warrior.strength);

// 3 - Create a function that returns an object with two keys and two values containing the damage and mana spent by the wizard in one turn.
// O dano será um número aleatório entre o valor do atributo intelligence (dano mínimo) e o valor de intelligence * 2 (dano máximo).
// The mana consumed per turn is 15. In addition the function must have a conditional, if the wizard has less than 15 mana the damage value gets a message (Ex: "Not enough mana") and the mana spent is 0.

const mageDmg = () => Math.floor(Math.random() * ((mage.intelligence * 2) - mage.intelligence) + mage.intelligence);

// Now that you have the implementation of the functions from the previous three exercises, pass them as parameters to other functions that will compose a gameActions object. The object will be composed of game actions and each action is by denition an HOF , because in this case they are functions that take another function as parameter.

const gameActions = {
  warriorTurn: (warriorDmg) => {
    let dmg = warriorDmg();
    dragon.healthPoints -= dmg;
    warrior.damage = dmg;
  },
  mageTurn: (mageDmg) => {
    let dmgMage = mageDmg();
    dragon.healthPoints -= dmgMage;
    mage.damage = dmgMage;
    mage.mana < 15 ? console.log('Não possui mana suficiente') : mage.mana -= 15;
  },
  dragonTurn: (dragonDmg) => {
    let dmgDragon = dragonDmg();
    dragon.damage = dmgDragon;
    warrior.healthPoints -= dmgDragon;
    mage.healthPoints -= dmgDragon;
  },
  turnResult: () => console.log(battleMembers),
};

gameActions.mageTurn(mageDmg);
gameActions.warriorTurn(warriorDmg);
gameActions.dragonTurn(dragonDmg);
gameActions.turnResult();
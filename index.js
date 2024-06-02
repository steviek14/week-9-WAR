

//player class with a name, a hand, and a score 
class Player {
    constructor(name){
        this.name = name;
        this.hand = [];
        this.score = 0;
    }
    //Player has a method to add a card to their deck - pushing it to players hand array 
    addCard(card){
        this.hand.push(card);
    }
    //Player has a method to play a card -- removing a card from their hand array 
    playCard(){
        return this.hand.pop();
    }
    //Player has a method to increment their score
    incrementScore(){
        this.score++;
    }

}
//Class called Card 
class Card {
    constructor(suit, facevalue, value){
        this.suit = suit //each card will have a suit (hearts, diamonds, spades, clubs, )
        this.facevalue = facevalue // each card will have a facevalue representing their value (2-10, jacks(11), queens(12), kings(13), aces(14))
        this.value = value //each card will have a value 
    }
    //class Card will have a description describing the card 
    description(){
        return `${this.facevalue} of ${this.suit}`;
    }
}

//class Deck 
class Deck {
    constructor(){
        //array of suits 
        this.suits = ['hearts','diamonds','spades','clubs'];
        //array of facevalues with objects of key:value pairs 
        this.facevalues = [
          {facevalue: '2', value: 2},
          {facevalue: '3', value: 3},
          {facevalue: '4', value: 4},
          {facevalue: '5', value: 5},
          {facevalue: '6', value: 6},
          {facevalue: '7', value: 7},
          {facevalue: '8', value: 8},
          {facevalue: '9', value: 9},
          {facevalue: '10', value: 10},
          {facevalue: 'Jacks', value: 11},
          {facevalue: 'Queens', value: 12},
          {facevalue: 'Kings', value: 13},
          {facevalue: 'Aces', value: 14},

    ];
        
      
        //deck array 
        this.deck = []

       //For Loop to create a deck of 52 cards 
       /*looping through suits and facevalues array to construct a new 
       instance of Card with a suit, facevalue and value */
       //push it to the deck array 
       for (let suit of this.suits){
        for(let facevalueObj of this.facevalues){
            let card = new Card(suit, facevalueObj.facevalue, facevalueObj.value);
            this.deck.push(card);
        }
       }
        this.shuffle(); //shuffle the deck upon creation since it is in the constructor 
         
    }
    //method to shuffle the deck using Fisher Yates applied to this code 
    shuffle(){
        for(let i = this.deck.length -1; i > 0; i--){
            let j = Math.floor(Math.random()*(i+1));
            [this.deck[i], this.deck[j]] = [this.deck[j], this.deck[i]];
        }
    }
    deal(){ //when this method is called upon it will take out one card in the deck
        return this.deck.pop(); 
    }
}
//Begin the game: 
//Initalize an instance of Deck and Player 
let deck = new Deck ();
let player1 = new Player ("Player 1");
let player2 = new Player ("Player 2");



//Play the game 
//Loop to deal 26 cards to each player it will add to their hand 
for (let i=0; i<26; i++) {
    player1.addCard(deck.deal());
    player2.addCard(deck.deal());
}
//a loop for each player to have 26 turns 
for (let i = 0; i < 26; i++){
    let card1 = player1.playCard();
    let card2 = player2.playCard();
//displays each round the player and the card they play 
    console.log(`${player1.name} plays: ${card1.description()}`);
    console.log(`${player2.name} plays: ${card2.description()}`);

//to determine which player gets a point added to their score based off of higher card value 
    if (card1.value > card2.value){
        player1.incrementScore();
        console.log(`${player1.name} wins this round! 1 point!`);
    } else if (card2.value > card1.value){
        player2.incrementScore();
        console.log(`${player2.name} wins this round! 1 point!`);
    } else {
        console.log("TIE! - Nobody gets points!");
    }
}

//Display the final score 
console.log(`
Final Scores:
${player1.name}: ${player1.score}
${player2.name}: ${player2.score}
`)
//create an if else whose score is higher --> higher wins 
if (player1.score > player2.score){
    console.log(`Congratulations ${player1.name}, you win the game!`)
} else if (player2.score > player1.score){
    console.log(`Congratulations ${player2.name}, you win the game!`)
}else {
    console.log("TIE! Nobody wins!");
}
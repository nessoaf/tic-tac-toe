//I have massive road blocks for Java so i needed help

const ticTacToe = new TicTacToe();
ticTacToe.start();

function TicTacToe() {
    const board = new Board();
    const player1 = new Player1();
    const player2 = new Player2();
    let turn = 0; // no one has started yet if it were 1 then is would have started
    
    this.start = function() {
        const config = {childList: true} ;
        const observer = new MutationObserver(() => takeTurn()); // MutationObserver() : cr
        board.positions.forEach((element) => observer.observe(element, config)); // From what im getting this "observer.observe(element, config))" is saying that we want to observe the element according to the config

    }
}
function takeTurn(){
    console.log("someing changes")

}

function Board() {
    this.positions = Array.from(document.querySelectorAll('.cell'));
    console.log(this.positions);

}

function Player1() {

}

function Player2 () {

}


	

const statusTxt = document.querySelector('.status');
const resetBtn = document.querySelector('#reset');
const buttons = document.querySelectorAll('.button');

let playerOne = true;


const GameBoard = (function () {
    let pattern1 = [1, 2, 3]
    let pattern2 = [1, 4, 7]
    let pattern3 = [1, 5, 9]
    let pattern4 = [7, 8, 9]
    let pattern5 = [3, 6, 9]
    let pattern6 = [4, 5, 6]
    let pattern7 = [2, 5, 8]
    let pattern8 = [3, 5, 7]

    return {pattern1, pattern2, pattern3, pattern4, pattern5, pattern6, pattern7, pattern8};
})();

function checkwinner(gameBoard, userInput){
    for (const pattern in gameBoard) {
        let arr = gameBoard[pattern];
        for (let i = 0; i < arr.length; i++) {
           
        }
    }
}


let playerInfo =  {
    player1:[],
    player2: []
}
    

buttons.forEach(button =>{
    button.addEventListener('click',(e)=>{
        let id = parseInt(e.target.id);
        
        if(playerOne){
            statusTxt.textContent = `O's Turn`
            button.textContent = 'X'
            playerOne = false;
            playerInfo.player1.push(id)
        }else{
            button.textContent = 'O'
            statusTxt.textContent = `X's Turn`
            playerOne = true;
            playerInfo.player2.push(id)
        }
        button.disabled = true;
        console.log(`Player 1 :${playerInfo.player1}`);
        console.log(`Player 2 :${playerInfo.player2}`);
        
    })
})

resetBtn.addEventListener('click',()=>{
    buttons.forEach(button=>{
        button.textContent = '';
        button.disabled = false;
        statusTxt.textContent = `X's Turn`
    })
    
})



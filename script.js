const buttons = document.querySelectorAll('.button');

const createPlayer = function (name, mark) {
  let playerName = name;
  let playerMark = mark;
  return { playerName, playerMark };
};

let playerStatus = true;

const getPlayerInfo = () => {
    let playerOneName = prompt("Enter 1st Player Name : ");
    if (playerOneName.trim() == '') {
        playerStatus = false;
        alert('Enter a valid name!')
        return null;
        
    }
    let playerTwoName = prompt("Enter 2nd Player Name : ");
    if(playerTwoName.trim() == ''){
        playerStatus = false;
        alert('Enter a valid name !')
        return null;
    }
    let PlayerOne = createPlayer(playerOneName, 'X')
    let PlayerTwo = createPlayer(playerTwoName, 'O')
    return{PlayerOne, PlayerTwo}
   
    

    
  };
function disabledBtns(){
    buttons.forEach(button=>{
        button.disabled = true;
    })
}

const gameBoard = (() => {


    const checkDraw = () => {
        return [...buttons].every(button => button.textContent.trim() !== "");
    };

  const checkWinner = (plyrs) => {
    const patterns = [
        [0, 1, 2],
        [0, 3, 6],
        [0, 4, 8],
        [6, 7, 8],
        [2, 5, 8],
        [3, 4, 5],
        [1, 4, 7],
        [2, 4, 6]
      ]

      for (const pattern of patterns) {
        let pos1val = buttons[pattern[0]].innerHTML;
        let pos2val = buttons[pattern[1]].innerHTML;
        let pos3val = buttons[pattern[2]].innerHTML;
        if(pos1val && pos1val === pos2val && pos1val === pos3val){
            gameOn = false;
            resetBtn.textContent = `Reset`
            resetBtn.disabled = false
            if (plyrs.PlayerOne.playerMark === pos1val) {
                statusBtn.textContent = `${plyrs.PlayerOne.playerName} Won!`
                
            }else{
                statusBtn.textContent = `${plyrs.PlayerTwo.playerName} Won`
                
            }
        }else if(checkDraw()){
            statusBtn.textContent = `Draw!`
            resetBtn.textContent = `Reset`
            resetBtn.disabled = false
        }
      }
  };
  return {checkWinner}


})();
let gameOn = true;
let playerOneStatus = true;
const statusBtn = document.querySelector('.status')
const GameStart = ()=>{
    playerStatus = true;
    let players = getPlayerInfo();
    if(playerStatus){
        gameOn = true;
    strtBtn.classList.add('hidden')
    resetBtn.classList.remove('hidden')
    resetBtn.textContent = 'Playing'
    resetBtn.disabled = true;
        
    statusBtn.textContent = `${players.PlayerOne.playerName}'s Turn '${players.PlayerOne.playerMark}'`
    buttons.forEach(button => {
       
            button.addEventListener('click',(e)=>{
        
                if(!button.textContent && gameOn){
                 if (playerOneStatus) {
                     button.textContent = `${players.PlayerOne.playerMark}`
                     statusBtn.textContent = `${players.PlayerTwo.playerName}'s Turn '${players.PlayerTwo.playerMark}'`
                     playerOneStatus = false;
                    }else{
                     button.textContent =` ${players.PlayerTwo.playerMark}`
                    statusBtn.textContent = `${players.PlayerOne.playerName}'s Turn '${players.PlayerOne.playerMark}'`
                    playerOneStatus = true;
                    } 
                    
                }else{
                 return;
                }
                gameBoard.checkWinner(players)
             })
             
    });
    }else{
        return;
    }
}
const resetBtn = document.querySelector('.reset')
const strtBtn = document.querySelector('.start');
strtBtn.addEventListener('click',()=>{
    GameStart();
    
})

resetBtn.addEventListener('click',()=>{
    buttons.forEach(button =>{
        button.textContent = ''
    })
    GameStart()
    
})
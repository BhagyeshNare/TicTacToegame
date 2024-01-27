let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#reset-btn");
let newGameBtn = document.querySelector("#new-btn");
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");

let turnX = true;
let clickCount = 0;



const winPatterns = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8]
];


boxes.forEach((box)=>{
    box.addEventListener("click", ()=>{
        clickCount ++;
        
        if(clickCount == 9){
            msg.innerText = `Game Draw!`
            clickCount = 0;
            msgContainer.classList.remove("hide");

        }
        else{
            checkWinner();
        }
    });
});



boxes.forEach((box) => {
    box.addEventListener("click",() => {
        

        if(turnX === true){
            box.innerText = "X";
            turnX = false;
        }else{
            box.innerText = "O";
            turnX = true;
        }
        box.disabled = true;

        checkWinner();
    });

});

const disabledBoxes =() =>{
    for (let box of boxes){
        box.disabled = true;
    };
};

const enableBoxes =() =>{
    for (let box of boxes){
        box.disabled = false;
        box.innerText = "";
    };
};


const checkWinner = () => {
    for (let pattern of winPatterns){
        
        let pos1Val = boxes[pattern[0]].innerText;
        let pos2Val = boxes[pattern[1]].innerText;
        let pos3Val = boxes[pattern[2]].innerText;

        if (pos1Val != "" && pos2Val != "" && pos3Val != ""){
            if(pos1Val === pos2Val && pos2Val === pos3Val ){
                console.log("Winner",pos1Val);
                showWinner(pos1Val);

            }else if( clickCount == 9){
                console.log("draw");
              
            }
           
        }

          
    }
       
}
    


const showWinner = (Winner) =>{
    msg.innerText = `Congratulations, winner is ${Winner}`;
    msgContainer.classList.remove("hide");
    disabledBoxes();
};


const resetGame = () =>{
    turnX = true;
    enableBoxes();
    msgContainer.classList.add("hide");

};

newGameBtn.addEventListener("click",resetGame);
resetBtn.addEventListener("click",resetGame);


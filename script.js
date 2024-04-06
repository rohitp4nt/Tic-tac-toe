let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector(".rstbtn");
let winMsg = document.querySelector(".winMsg");
let reset = document.querySelector(".rstbtn");

let turn = true;

const winPatterns =[
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8],
];


boxes.forEach((box) => {
    box.addEventListener("click", () => {
      console.log("Box was clicked");
     
      if(turn === true){
        box.innerText = "0";
        turn = false;

      }
      else{
        box.innerText ="X";
        turn = true;
      }
      box.disabled = true ;

      checkWinner();
    });
  });

  showWinner = (winner) =>{
    winMsg.innerText = `Winner is ${winner}`
   
    winMsg.classList.remove("hide");
    
  }
// showWinner = (winner) => {
//     // Apply transition property through CSS
//     winMsg.style.transition = "opacity 2s";
  
//     // Introduce a delay before updating the inner text
//     setTimeout(() => {
//       winMsg.innerText = `Winner is ${winner}`;
//       winMsg.style.opacity = 1;
//       winMsg.classList.remove("hide");
//     }, 100); // Adjust the delay as needed
//     setTimeout();
//   }
    
  const checkWinner = () =>{
     for(let pattern of winPatterns){
        let pos1val =  boxes[pattern[0]].innerText;
        let pos2val =  boxes[pattern[1]].innerText;
        let pos3val =  boxes[pattern[2]].innerText;
            
        if(pos1val != "" && pos2val != "" && pos3val != ""){
            if(pos1val === pos2val && pos2val === pos3val){
                console.log("Winner" ,pos1val);
                showWinner(pos1val);
                for(let box of boxes){
                box.disabled = true ;
                }

            }
        }
     }
  }

  resetgame = () =>{
    turn =true;
    winMsg.classList.add("hide");
    for(let box of boxes){
    box.innerText = "";
    box.disabled = false ;
    }
  }
  reset.addEventListener("click",resetgame);
   






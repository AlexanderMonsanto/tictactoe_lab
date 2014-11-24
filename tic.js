document.addEventListener('DOMContentLoaded', function(){

  var block = document.querySelectorAll(".block");
  var reset = document.querySelector(".reset")
  console.log(block)
  var moves = 0;
  var winMoves = [[0,1,2],
                  [3,4,5],
                  [6,7,8],
                  [0,3,6],
                  [1,4,7],
                  [2,5,8],
                  [0,4,8],
                  [2,4,5]];


  for (var i = 0; i<block.length; i++) {
  block[i].addEventListener('click', function() {
    if (this.classList.contains("played") === false) {
    moves++;
    console.log(moves)
    this.classList.add("played")
    this.innerText = (moves % 2 == 1) ? "x" : "o";
    this.style.color = (moves % 2 == 1) ? "blue" : "red";
  } else { alert("already played")}
  var winnerMesage = winner();
  if (winnerMesage) {
    var winWindow = window.open("http://www.dailymotion.com/video/x1tayx_abba-the-winner-takes-it-all_music", "Winner");

    alert(winnerMesage);


  }
  })
  }

  var resetGame = reset.addEventListener("click", function(){
    for (var i =0; i < block.length; i++) {
      block[i].innerHTML = "";
      block[i].classList.remove("played");
      moves = 0;
    }
  })

  var winner = function() {
    for(j=0; j<winMoves.length; j++) {
      if((block[winMoves[j][0]].innerText!== "") &&
        (block[winMoves[j][1]].innerText == block[winMoves[j][0]].innerText) &&
        (block[winMoves[j][2]].innerText == block[winMoves[j][0]].innerText)) {
        return block[winMoves[j][1]].innerText + " se ha ganado todo!";
      }
    }

    if (moves > 8) {return alert('No seas puta gueyyyy!!'); resetGame();
    }


  }
})


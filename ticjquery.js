$(function(){

  var moves = 0;
  var winMoves = [[0,1,2],
                  [3,4,5],
                  [6,7,8],
                  [0,3,6],
                  [1,4,7],
                  [2,5,8],
                  [0,4,8],
                  [2,4,6]];


  var block = $(".block")
  var reset = $(".reset")
  //Game Function
  block.on('click', function(){
    if($(this).hasClass("Played") === false) {
      moves++;
      console.log(moves);

      var marker = (moves % 2 == 1) ? "x" : "o";

      $(this).addClass("Played");
      $(this).text(marker).addClass(marker);
      var winnerMessage = winner();

        if (winnerMessage) {
          alert(winnerMessage);
          console.log(winner());
        }
    } else {
      alert("This been played")
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
      if (moves > 8) {
        return alert('No hay ganador!');
      }
    }


  //Reset Button
  reset.on('click', function() {
    block.empty().removeClass("Played x o")
      moves = 0;
  })
});


document.addEventListener('DOMContentLoaded', function(){

  var block = document.querySelectorAll(".block");
  var reset = document.querySelector(".reset")
  console.log(block)
  var moves = 0;

  for (var i = 0; i<block.length; i++) {
  block[i].addEventListener('click', function() {
    if (this.classList.contains("played") === false) {
    moves++;
    console.log(moves)
    this.classList.add("played")
    this.innerText = (moves % 2 == 1) ? "x" : "o";
    this.style.color = (moves % 2 == 1) ? "blue" : "red";
  } else { alert("already played")}
  })
  }

  reset.addEventListener("click", function(){
    for (var i =0; i < block.length; i++) {
      block[i].innerHTML = "&nbsp;";
      block[i].classList.remove("played");
    }
  })
})


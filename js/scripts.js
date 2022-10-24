window.addEventListener("load", function() {

  window.addEventListener("submit", function(event) {
    event.preventDefault();

  const answer1 = document.getElementById("fav1").value;
  const answer2 = this.document.getElementById("fav2").value;
  const answer3 = this.document.getElementById("fav3").value;
  const answer4 = this.document.getElementById("fav4").value;
  const answer5 = this.document.getElementById("fav5").value;

  
 favArray = [answer1, answer2, answer3, answer4, answer5];
  
document.getElementById("output").innerText = favArray;
  
  });
});

let favArray;
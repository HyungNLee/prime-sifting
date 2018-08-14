function getPrime(num) {
  var numArray = [];

  //Gets initial array
  for (i = 2; i <= num; i++) {
    numArray.push(i);
  }
  //Gets prime numbers
  for (i = 2; i < num; i++) {
    if (numArray.includes(i)) {
      //removes all multiples of prime number
      for (j = i + i; j <= num; j = j + i) {
        if (numArray.includes(j)) {
          var index = numArray.indexOf(j);
          numArray.splice(index, 1);
        }
      }
    }
  }
  alert(numArray);
}


$(document).ready(function() {
  $("#formOne").submit(function(event) {
    event.preventDefault();
    var userInput = parseInt($("#inputBox").val());

    getPrime(userInput);
  })




})

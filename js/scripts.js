
function beepBooper(numberInput) {
  var arr = [];

  for (var i = 0; i <= numberInput; i++)
    if (i.toString().includes("3")) {
      arr.push("I'm sorry, Dave. I'm afraid I can't do that.");
    } else if (i.toString().includes("2")) {
      arr.push("boop");
    } else if (i.toString().includes("1")) {
      arr.push("beep");
      console.log(arr);
    }
    return arr;

    }
    beepBooper()

$(document).ready(function(){
  $('#inputForm').submit(function(event){
  event.preventDefault();
  var numberInput = parseInt($('input#numberInput').val());
  });
});

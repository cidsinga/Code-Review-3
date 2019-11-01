// Numbers that contain a 1: all digits are replaced (all digits) with "Beep!"
// Numbers that contain a 2: all digits are replaced (all digits) with "Boop!"
// Number that contain a 3: all digits are replaced with I'm sorry dave..
//
// written from least to most important, first only applies UNLESS the 2nd exception does

function beepBooper(number) {
  var output = [];
  var stringNumber = number.toString().split(" ");
  console.log("split: ", stringNumber)


}
// Front End Logic
$(document).ready(function(){
  $('#inputForm').submit(function(event){
  event.preventDefault();
  var numberInput = parseInt($('input#numberInput').val());
  var beepBooper(numberInput);
  });
});

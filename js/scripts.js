// Numbers that contain a 1: all digits are replaced (all digits) with "Beep!"
// Numbers that contain a 2: all digits are replaced (all digits) with "Boop!"
// Number that contain a 3: all digits are replaced with I'm sorry dave..
//
// written from least to most important, first only applies UNLESS the 2nd exception does

// function beepBooper() {
  var output = [];
  var numberInput = parseInt($('input#numberInput').val());

  // for(var index = 0; index <= numberInput; i++)
  // var stringNumber = number.toString().split(" ");

  console.log(numberInput);
  var zero = 0
  while(zero <= numberInput) {
    output.push(zero++);
      console.log(output);
  }



    // output.push(index);

// Front End Logic
$(document).ready(function(){
  $('#inputForm').submit(function(event){
  event.preventDefault();
  // var numberInput = parseInt($('input#numberInput').val());
  console.log(numberInput);

  });
});

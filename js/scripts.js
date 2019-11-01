// Numbers that contain a 1: all digits are replaced (all digits) with "Beep!"
// Numbers that contain a 2: all digits are replaced (all digits) with "Boop!"
// Number that contain a 3: all digits are replaced with I'm sorry dave..
//
// written from least to most important, first only applies UNLESS the 2nd exception does
// Front End Logic
$(document).ready(function(){
  $('#inputForm').submit(function(event){
  event.preventDefault();
  var numberInput = parseInt($('input#numberInput').val());
  console.log(numberInput);
// function beepBooper() {
  var outputs = [];
    // for(var index = 0; index <= numberInput; i++)
    // if output contains a 3 execute... if contains a 2 execute... if 1 ..
// I want to convert each number into an array inside of the Outputs array
//  Research is leading me to "chunk" the array into individual arrays

  console.log(numberInput);
  var zero = 0;
  while(zero <= numberInput) {
    outputs.push(zero++);
      console.log(outputs);
  }
  console.log(outputs);
  var chunked = [];
  for (var i = 0; i < outputs.length; i +=1) {
    chunked.push(outputs.slice(i, size + i));
  }

  console.log(chunked);


  // if outputs.forEach(function(index = 3 || *3*));



    // output.push(index);



  });
});
  // var stringNumber = number.toString().split(" ");

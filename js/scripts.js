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
  var regex3 = regExp("*3*");
  var regex2 = regExp("*2*");
  var regex1 = regExp("*1*");
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
    alert(outputs);
    // $("#answer").text("outputs");


    newOutput = outputs.map(function(output) {
      if indexOf(outputs === 3);
      return "I'm sorry, Dave. I'm afraid I can't do that."

      console.log(outputs);

    })


  // console.log(outputs);
  // // function seperateIt(outputs) {
  //   for (var i = 0; i < outputs.length; i += 1) {
  //     var sliceIt = outputs.slice(i, i+1);
  //
  //     newArray.push(sliceIt);
  //           console.log(newArray);
  //   }
  //     return newArray;
  //     console.log(newArray);
  // }



    // output.push(index);
  });
});
  // var stringNumber = number.toString().split(" ");

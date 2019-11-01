# beepBooper



## by Casey Idsinga

## Description
beepBooper is a jquery based number mangler.  For every number 1 a "beep" should be displayed, for 2 the word "boop", and for 3 the sentance "I'm sorry, Dave. I'm afraid I can't do that."  All other numbers should appear as normal.

## Installation

Run on your web browser of choice

## Specifications
* Spec: This program returns a range of numbers from 0 to the users inputted number.
  * Input: "4"
  * Output: "0,1,2,3,4"
* Spec: This program should return all numbers that include the digit 1, and replace them with the word "beep".
    * Input: "2"
    * Output: "0,beep, 2"

* Spec: This program should return all numbers that include the digit "2" with the word "boop".
  * Input: "3"
  * Output: "0, beep, 2, boop"

* Spec: This program should return all numbers that include the digit "3" with the sentance "I'm sorry, Dave. I'm afraid I can't do that."
  * Input: "5"
  * Output: "0, beep, boop, "I'm sorry, Dave. I'm afraid I can't do that.", 4, 5"

* Spec: As the numbers that contain any of those digits are replaced, in the event that the number contains two or more of these special instances, "3" gets priority, then "2", then "1"
  * Input: "21"
  * Output: "...boop..." as "boop" is priority over "beep"

## Known Bugs

This currently isn't working and is still under development.

## Contributing
Please let me know if you see areas of improvement, and/or feel free to make changes yourself.

## Technologies Used
HTML, CSS, JavaScript and jquery were used to create this page

## License
GPL

Copyright (c) 2019 Casey Idsinga

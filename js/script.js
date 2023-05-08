
// Created by: Graydon Ezzeddin
// Created on: March 2022
// This file contains the JS functions for index.html

"use strict";

  // This function Calculates if it is warm or cold. 
  function calculate() { 
    
  // Declare age and day of the week and program feedback
  let age = parseInt(document.getElementById('age').value);
  let day = document.getElementById('day').value;  
  let programFeedback = "";
    
  // Declare program feedback depending on age.
  if ((age < 5) || (age > 95)) {
    programFeedback = "You can get in for free!";
  }

  else if (((age >= 12) && (age <= 21)) || ((day == "tuesday") || (day == "thursday"))) {
    programFeedback = "You get a discounted price!";
  }

  else if ((age <=5) || (age >21)){
    programFeedback = "You pay the regular price"; 
  }

  else {
    programFeedback = "Please enter a valid age."
  }
  

    
  // output the price for museum entry
    
  document.getElementById('program-feedback').innerHTML = programFeedback;
  }
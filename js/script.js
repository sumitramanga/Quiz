(function() { //IIFE Begins

  $(document).ready(function(){

    //Making a variable with the "button" which is grabbing the element with the ID name "button".
    var button = document.getElementById ('button');

    //Making a variable with the "showMessage" which is grabbing the element with the ID name "message".
    var showMessage = document.getElementById ('message');

    //This will make the message appear in the dom on click
    $('#button').click(function() {
      //Making a variable with the "inputValue" which is grabbing the element with the ID name "answerInput".
      //".value" targets the value property.
      var inputValue = document.getElementById ('answerInput').value;

      //View the properties in the console.
      // console.dir(answerInput);

      //This if else statment determines what message should appear when the user has enter an answer within the input field
      // "||" = or
      if (inputValue == 'Bangkok' || inputValue == 'bangkok') {
        message.innerHTML = 'Excellent! The answer is correct.';
      } else {
        message.innerHTML = 'Sorry, The answer is incorrect. Please try again.';
      }
    }); //Button ends
    
  }); // (document).ready ends
}()); // IIFE Ends

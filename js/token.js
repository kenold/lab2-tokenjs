function generateTokens() {

    /* store form input value in 'rawNumber' variable
        - formTokens  -> form name
        - numberInput -> input name
    */

    // get raw number
    var rawNumber = document.formTokens.numberInput.value;

    // convert input (rawNumber) into a number
    var number = Number(rawNumber);
    
    // set min, max variables
    var min = 20;
    var max = 100;
    
    var remainder;

    // variable to write to DOM
    var result;

    // check if number is not (!) an integer
    if (!Number.isInteger(number)) {
        // call the errorAlert() function
        errorAlert();

        // check if number is between min=20 and max=100
    } else if ((number >= min) && (number <= max)) {

        /* store sentence in 'result' variable and 
           keep concatenating with result += below
        */
        result = '<strong>You entered <span class="primary-color">' + number + '</span>. </strong>' +
            'Here are your generated tokens:</p>';

        // Get Twenties
        // use parseInt to get whole number without decimal
        var numOfTwenties = parseInt(number / 20);
        result += '<li>' + numOfTwenties + ' x 20 tokens</li>';

        // substract total number of 20s from number
        remainder = number - (numOfTwenties * 20);

        // Get Tens
        if (remainder >= 10) {
            var numOfTens = parseInt(remainder / 10);
            result += '<li>' + numOfTens + ' x 10 tokens</li>';
            remainder -= (numOfTens * 10);
        }
        // Get fives
        if (remainder >= 5) {
            var numOfFives = parseInt(remainder / 5);
            result += '<li>' + numOfFives + ' x 5 tokens</li>';
            remainder -= (numOfFives * 5);
        }
        // Get twos
        if (remainder >= 2) {
            var numOfTwos = parseInt(remainder / 2);
            result += '<li>' + numOfTwos + ' x 2 tokens</li>';
            remainder -= (numOfTwos * 2);
        }
        // Get ones
        if (remainder >= 1) {
            var numOfOnes = parseInt(remainder / 1);
            result += '<li>' + numOfOnes + ' x 1 token</li>';
        }

        result += '<h3>make up a total of <span class="primary-color">' +
            number + '</span> tokens.</h3>';

        // clear out errorsPlaceholder div before displaying tokens
        document.getElementById("errorsPlaceholder").innerHTML = "";

        // clear form input before displaying results
        document.formTokens.numberInput.value = "";

        // inject final 'result' to DOM (tokensPlaceholder div from index.html)        
        document.getElementById("tokensPlaceholder").innerHTML = result;

    } else {
        errorAlert();
    } // end if

    function errorAlert(message = '') {
        var errorMessage =
            '<div class="error-alert">' +
            '<h4 class="error">ERROR! You entered an <strong>invalid number. ' + rawNumber + '</strong></span></h4>' +
            '<p>Please enter a number between 20 and 100. ' +
            '</div>';

        // clear out tokensPlaceholder div before displaying error
        document.getElementById("tokensPlaceholder").innerHTML = "";

        // display error alert in errors div
        document.getElementById("errorsPlaceholder").innerHTML = errorMessage;
    } // end errorAlert function

} // end displayTokens function
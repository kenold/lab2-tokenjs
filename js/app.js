function generateTokens() {

    /* store form input value in 'number' variable
        - formTokens is the form name
        - numberInput is the input name
    */
    var number = document.formTokens.numberInput.value;
    
    var min = 20;
    var max = 100;
    
    var remainder;
    var result;

    // check if number from form input is not a number
    if (isNaN(number)) {
        // call the errorAlert() function and pass a string to it
        errorAlert('Only numbers are accepted! ');

        // check if number input is between min=20 and max=100
    } else if ((number > min) && (number < max)) {

        /* store sentence in 'result' variable and 
           keep concatenating with result += below
        */
        result = '<h1>You entered <span class="text-success">' + number + '</span>.</h1>' +
            '<p>Here are your generated tokens:</p>';

        // Get Twenties
        var numOfTwenties = Math.floor(number / 20);
        result += '<li class="list-group-item">' + numOfTwenties + ' x 20 tokens</li>';
        remainder = number - (numOfTwenties * 20);

        // Get Tens
        if (remainder >= 10) {
            var numOfTens = Math.floor(remainder / 10);
            result += '<li class="list-group-item">' + numOfTens + ' x 10 tokens</li>';
            remainder -= (numOfTens * 10);
        }
        // Get fives
        if (remainder >= 5) {
            var numOfFives = Math.floor(remainder / 5);
            result += '<li class="list-group-item">' + numOfFives + ' x 5 tokens</li>';
            remainder -= (numOfFives * 5);
        }
        // Get twos
        if (remainder >= 2) {
            var numOfTwos = Math.floor(remainder / 2);
            result += '<li class="list-group-item">' + numOfTwos + ' x 2 tokens</li>';
            remainder -= (numOfTwos * 2);
        }
        // Get ones
        if (remainder >= 1) {
            var numOfOnes = Math.floor(remainder / 1);
            result += '<li class="list-group-item">' + numOfOnes + ' x 1 token</li>';
        }

        result += '<h4 class="mt-4">make up a total of <span class="badge badge-success">' +
            number + '</span> tokens.</h4>';

        // clear out errorsPlaceholder div before displaying tokens
        document.getElementById("errorsPlaceholder").innerHTML = "";

        // clear form input before displaying results
        document.formTokens.numberInput.value = "";

        // inject final 'result' in tokensPlaceholder div from index.html        
        document.getElementById("tokensPlaceholder").innerHTML = result;

    } else {
        errorAlert();
    } // end if

    function errorAlert(message = '') {
        var errorMessage =
            '<div class="alert alert-danger mb-0" role="alert">' +
            '<h4>ERROR!</h4>' +
            '<p>' + message + 'Please enter a number between 20 and 100.</p>' +
            '<hr>' +
            // if number fiedl is empty "", display "You entered nothing", else display the number.                        
            '<p>You entered <strong>' + ((number == "") ? "nothing" : number) + "</strong>.</p>" +
            '</div>';

        // clear out tokensPlaceholder div before displaying error
        document.getElementById("tokensPlaceholder").innerHTML = "";

        // display error alert in errors div
        document.getElementById("errorsPlaceholder").innerHTML = errorMessage;
    } // end errorAlert function

} // end displayTokens function
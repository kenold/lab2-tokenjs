function displayTokens() {

    var theForm =
        '<form name="formTokens">' +
            '<div class="form-group">' +
                '<label for="numberInput">Enter a number between 20 and 100</label>' +
                '<input type="text" name="numberInput" class="form-control">' +
            '</div>' +
            '<div class="form-group">' +
                '<button class="btn btn-primary" type="button" onclick="displayTokens()">Display Tokens</button>' +
            '</div>' +
        '</form>';

    /* set number variable to form input value
        - formTokens is the form name
        - numberInput is the input name
    */
    var number = document.formTokens.numberInput.value;

    //document.write(theForm);

    // store Bootstrap CSS and custom css
    var cssBootstrap = '<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.1.2/css/bootstrap.min.css">';
    var cssCustom = '<link rel="stylesheet" href="css/style.css">';

    // document.write was overwriting the CSS so I had to re-include it here
    document.write("<html><head><title>Generated Tokens - Kenold Beauplan CTS2852C</title>" + 
        cssBootstrap + cssCustom + "</head><body>");

        var mainHeader = 
            '<header class="main-header">' +
            '<h1>Token Generator</h1>' +
            '<p class="lead">This program generates tokens worth values of 20, 10, 5, 2 and 1.</p>' +
            '</header>';

        document.write(mainHeader);

        document.write('<div class="container">');
            // && (Number.isInteger(number))
            if (isNaN(number)) {
                errorAlert('Only numbers are accepted! ');            
            } else if ((number > 20) && (number < 100)) {

                document.write('<h4>Here are your generated tokens:</h4>');
                
                document.write('<ul class="list-group list-group-flush">');                
                
                    // Get Twenties
                    var numOfTwenties = Math.floor(number / 20);
                    document.write('<li class="list-group-item">' + numOfTwenties + " x 20 tokens</li>");
                    var remainder = number - numOfTwenties * 20;

                    // Get Tens
                    if (remainder >= 10) {
                        var numOfTens = Math.floor(remainder / 10);
                        document.write('<li class="list-group-item">' + numOfTens + " x 10 tokens</li>");
                        remainder -= 10;
                    }
                    // Get fives
                    if (remainder >= 5) {
                        var numOfFives = Math.floor(remainder / 5);
                        document.write('<li class="list-group-item">' + numOfFives + " x 5 tokens</li>");
                        remainder -= 5;
                    }
                    // Get twos
                    if (remainder >= 2) {
                        var numOfTwos = Math.floor(remainder / 2);
                        document.write('<li class="list-group-item">' + numOfTwos + " x 2 tokens</li>");
                        remainder -= 2;
                    }
                    // Get ones
                    if (remainder >= 1) {
                        var numOfOnes = Math.floor(remainder / 1);
                        document.write('<li class="list-group-item">' + numOfOnes + " x 1 token</li>");
                    }
                document.write('</ul>');
                
                document.write('<h4 class="mt-4">make up a total of <span class="badge badge-success">' 
                    + number + '</span> tokens.</h4>');
                

                document.write('<br><button class="btn btn-primary" onClick="reloadPage()">Generate New Tokens</button>');
            } else {
                errorAlert();
            } // end if

            function errorAlert(message='') {
                //if (numberType = "" ) 
                var errorMessage = 
                    '<div class="alert alert-danger mb-0" role="alert">' +
                        '<h4>ERROR!</h4>' +
                        '<p>' + message + 'Please enter a number between 20 and 100.</p>' +
                        '<hr>' +
                        // if user enters nothing, display "You entered nothing", else display the number.                        
                        '<p>You entered <strong>' + ((number == "") ? "nothing" : number) + "</strong>.</p>" +
                    '</div>';
                document.write(errorMessage);
                document.write('<br><button class="btn btn-primary" onClick="reloadPage()">Try again!</button>');
            }
                        
        document.write('</div>'); // close container div

        document.write('<footer class="main-footer"><p>Created by Kenold Beauplan for CTS2852C</p></footer>');

    // added double slash to escape one slash 🤦‍
    document.write("<//body><//html>");

} // function

function reloadPage() {
    // reload the page
    document.location.reload(true);
}
/**
 * Author: Harshit Sharma
 * Student#: 200333254
 * Lab 3
 */

// link to the connect package we installed
let connect = require('connect');

// dependency
let url = require('url');

// create a new instance of a connect application
let app = connect();

// created a function calc
let calc = function (req, res, next) {

    // get the whole querystring (parameter list)
    let qs = url.parse(req.url, true).query;
    let method = qs.method;

    let x = parseFloat(qs.x);
    let y = parseFloat(qs.y);

    // switch case statement for different cases
    switch(method) {
        case 'add':
            res.end(x + " + " + y + " = " + (x+y));
            break;
        case 'subtract':
            res.end(x + " - " + y + " = " + (x-y));
            break;
        case 'multiply':
            res.end(x + " * " + y + " = " + (x*y));
            break;
        case 'divide':
            res.end(x + " / " + y + " = " + (x/y));
            break;
        default:
            res.end('Error: Invalid query.\nPlease enter:\nlocalhost:3000/lab3?method=add&x=16&y=4 \n' +
                    'localhost:3000/lab3?method=subtract&x=16&y=4 \nlocalhost:3000/lab3?method=multiply&x=16&y=4\n' +
                    'localhost:3000/lab3?method=divide&x=16&y=4\nin the URL bar.')
    }
};

// route the urls the correct function
app.use('/', calc);

// start the server on port 3000
app.listen(3000);

// display a message to the console
console.log('Server running on port 3000');

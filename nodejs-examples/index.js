var rect = require('./rect');

function solveRect(l,b) {
    console.log("Entered length=" + l + ", bredth=" + b);
    rect(l, b, (err, rectangle) => {
        if(err) {
            console.log(err);
        }
        else {
            console.log("Area of Rectangle = " + rectangle.area());
            console.log('Perimeter of Rectangle = ' +rectangle.perimeter());
        }
    });
}

solveRect(2,4);
solveRect(0,6);
solveRect(-2,6);
solveRect(5,-6);

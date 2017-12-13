var rect = require('./rect');

function solveRect(l,b) {
    console.log("Entered length=" + l + ", bredth=" + b);
    if(l <= 0 || b <= 0) {
        console.log("please enter length and breadth greater than zero");
    }

    else {
        console.log("Area-(l*b)=" + rect.area(l,b));
        console.log("Perimeter-(2(l+b)=" + rect.perimeter(l,b));
    }
}

solveRect(2,4);
solveRect(0,4);
solveRect(-1,4);
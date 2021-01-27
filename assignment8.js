let netsScore = [96, 108, 89];
let knicksScore = [88, 81, 110];

let netsAvg = (netsScore[0] + netsScore[1] + netsScore[2]) / 3;
let knicksAvg = (knicksAvg[0] + knicksAvg[1] + knicksAvg[2]) / 3;

if (netsAvg == knicksAvg) {
    console.log('It\'s a draw');
}
else if (netsAvg > knicksAvg) {
    console.log('Nets win');
}
else {
    console.log('knicks win');
}


function totalBill(input) {
    if (input <= 30 && input >= 300) {
        return (input * 1.20);
    }
    else {
        return (input * 1.15);
    }
}

function tip(input) {
    if (input <= 30 && input >= 300) {
        return (input * .20);
    }
    else {
        return (input * .15);
    }
}

console.log('total bill is ' + totalBill() + 'tip is ' + tip());

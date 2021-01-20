var lucasWeight = 78;
var lucasHeight = 1.69;

var lucasWeight2 = 95;
var lucasHeight2 = 1.88;

var johnWeight = 92;
var johnHeight = 1.95;

var johnWeight2 = 85;
var johnHeight2 = 1.76;

var lucasBMI = (lucasWeight) / (lucasHeight ** 2);
var johnBMI = (johnWeight) / (johnHeight ** 2);

var lucasBMI2 = (lucasWeight2) / (lucasHeight2 ** 2);
var johnBMI2 = (johnWeight2) / (johnHeight2 ** 2);

console.log(lucasBMI);
console.log(johnBMI);
console.log(lucasBMI2);
console.log(johnBMI2);

lucasHigherBMI = (lucasBMI > johnBMI);

console.log(Boolean(lucasHigherBMI));

lucasHigherBMI = (lucasBMI2 > johnBMI2);

console.log(Boolean(lucasHigherBMI));


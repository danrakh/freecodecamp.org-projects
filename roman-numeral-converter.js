function convertToRoman(num) {
    const ROMANS = {
       units : { 1 : 'I', 2 : 'II', 3 : 'III', 4 : 'IV', 5 : 'V', 6 : 'VI', 7 : 'VII', 8 : 'VIII', 9 : 'IX' },
       tens : { 1 : 'X', 2 : 'XX', 3 : 'XXX', 4 : 'XL', 5 : 'L', 6 : 'LX', 7 : 'LXX', 8 : 'LXXX', 9 : 'XC' },
       hundreds : { 1 : 'C', 2 : 'CC', 3 : 'CCC', 4 : 'CD', 5 : 'D', 6 : 'DC', 7 : 'DCC', 8 : 'DCCC', 9 : 'CM' },
       thousands : { 1 : 'M', 2 : 'MM', 3 : 'MMM' }  
    };

    let myArr = num.toString().split('');
    let myLength = myArr.length;
    let myNum = [];

    if(myLength == '4') {
        myNum.push(ROMANS.thousands[myArr[0]]);
        if(myArr[1] > 0) {
            myNum.push(ROMANS.hundreds[myArr[1]]);
        };
        if(myArr[2] > 0) {
            myNum.push(ROMANS.tens[myArr[2]]);
        };
        if(myArr[3] > 0) {
            myNum.push(ROMANS.units[myArr[3]]);
        }
    };

    if(myLength == '3') {
        myNum.push(ROMANS.hundreds[myArr[0]]);
        if(myArr[1] > 0){
            myNum.push(ROMANS.tens[myArr[1]]);
        };
        if(myArr[2] > 0) {
            myNum.push(ROMANS.units[myArr[2]]);
        };
    };

    if(myLength == '2') {
        myNum.push(ROMANS.tens[myArr[0]]);
        if(myArr[1] > 0){
            myNum.push(ROMANS.units[myArr[1]]);
        };
    };

    if(myLength == '1') {
        myNum.push(ROMANS.units[myArr[0]]);
    };
    console.log(myNum.join(''));
    // return myNum.join('');
   };
   
   convertToRoman(3999);
/* Write a function called power which accepts a base and a exponent and returns
 the power of the base to the exponent.Function should mimic the functionality of Math.pow(). */
function power(base, exponent) {
    if (exponent === 0) return 1;
    return base * power(base, exponent - 1);
}

/*
factorial

*/

/* 
👉 My Kata
Calculate the simple moving average (SMA) for a stock over a given timeframe
*/

//👉 Write the function your CodeWarriors will start with below here:
//take in two parameters to function --> array of stock values , timeframe for SMA
//add together values in array up to limit defined by timeframe and divide by timeframe

function SMA(stockprices, timeframe) {
    //add together stockprice array
    let sum = 0;
    let limit = timeframe - 1;
    for (i = 0; i < stockprices[limit]; i++) {
        sum += stockprices[i];
    }
    let average = sum / timeframe;
    return average;
}

let answer = SMA([10, 10, 10, 20], 5);
console.log(answer);

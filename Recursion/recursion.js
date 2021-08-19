// function recursiveSum(num, sum){
//     console.log(num);
//     const currentSum = num + sum;
//     return num > 0 ? recursiveSum(num - 1, currentSum) : currentSum;
// }

// console.log(recursiveSum(5, 0));

//countDown recursive function

function countDownFunction(num, sum){
    console.log(num);
    const currentSum = sum;
    return num < 5 ? countDownFunction(num + 1, currentSum) : currentSum;
}

console.log(countDownFunction(1, 0));
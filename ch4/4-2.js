function solution(arr) {
  let answer = [];

  const findPrimeNum = (num) => {
    if (num === 1) return false;

    let count = 0;
    for (let i = 1; i <= Math.floor(Math.sqrt(num)); i++) {
      if (num % i === 0) count++;
    }
    if (count === 1) return true;
    else return false;
  };

  for (let x of arr) {
    const reversedNum = Number(x.toString().split("").reverse().join(""));
    if (findPrimeNum(reversedNum)) answer.push(reversedNum);
  }

  return answer;
}

console.log(solution([32, 55, 62, 20, 250, 370, 200, 30, 100]));

function isPrime(num) {
  if (num === 1) return false;
  for (let i = 2; i <= parseInt(Math.sqrt(num)); i++) {
    if (num % i === 0) return false;
  }
  return true;
}
function teacherSolution(arr) {
  let answer = [];
  for (let x of arr) {
    let res = 0;
    while (x) {
      let t = x % 10;
      res = res * 10 + t;
      x = parseInt(x / 10);
    }
    if (isPrime(res)) answer.push(res);
  }
  return answer;
}

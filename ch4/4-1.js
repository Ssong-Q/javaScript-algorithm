function solution(arr) {
  let answer;
  let max = [0, Number.MIN_SAFE_INTEGER];

  for (let x of arr) {
    const sum = x
      .toString()
      .split("")
      .reduce((acc, val) => Number(acc) + Number(val));
    if (sum > max[1] || (sum === max[1] && x > max[0])) {
      max = [x, sum];
    }
  }

  answer = max[0];

  return answer;
}

console.log(solution([128, 460, 603, 40, 521, 137, 123]));

function teacherSolution(n, arr) {
  let answer,
    max = Number.MIN_SAFE_INTEGER;
  for (let x of arr) {
    let sum = 0,
      tmp = x;
    while (tmp) {
      sum += tmp % 10;
      tmp = Math.floor(tmp / 10);
    }
    if (sum > max) {
      max = sum;
      answer = x;
    } else if (sum === max) {
      if (x > answer) answer = x;
    }
  }
  return answer;
}

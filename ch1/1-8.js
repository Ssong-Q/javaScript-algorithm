function solution(arr) {
  let answer = [],
    sum = 0,
    diff = 0,
    suspects = [];

  for (let el of arr) {
    sum += el;
  }
  diff = sum - 100;

  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = 1; j < arr.length; j++) {
      if (arr[i] + arr[j] === diff) {
        suspects.push(i);
        suspects.push(j);
      }
    }
  }

  arr.splice(suspects[1], 1);
  arr.splice(suspects[0], 1);

  answer = arr;

  return answer;
}

console.log(solution([20, 7, 23, 19, 10, 15, 25, 8, 13]));

function teacherSolution(arr) {
  let answer = arr;
  let sum = answer.reduce((a, b) => a + b, 0);
  let flag = 0;
  for (let i = 0; i < 8; i++) {
    for (let j = i + 1; j < 9; j++) {
      if (sum - (answer[i] + answer[j]) == 100) {
        answer.splice(j, 1);
        answer.splice(i, 1);
        flag = 1;
        break;
      }
    }
    if (flag == 1) break;
  }
  return answer;
}

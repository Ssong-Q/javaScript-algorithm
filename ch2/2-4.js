function solution(arr) {
  let answer = 0,
    count = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i]) {
      count++;
      answer += count;
    } else {
      count = 0;
    }
  }

  return answer;
}

console.log(solution([1, 0, 1, 1, 1, 0, 0, 1, 1, 0]));

function teacherSolution(arr) {
  let answer = 0,
    cnt = 0;
  for (let x of arr) {
    if (x === 1) {
      cnt++;
      answer += cnt;
    } else cnt = 0;
  }

  return answer;
}

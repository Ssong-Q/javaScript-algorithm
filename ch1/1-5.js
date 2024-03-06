function solution(arr) {
  let answer = [],
    sum = 0,
    min = Number.MAX_SAFE_INTEGER;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2) {
      sum += arr[i];
      if (arr[i] < min) min = arr[i];
    }
  }

  answer.push(sum);
  answer.push(min);

  return answer;
}

console.log(solution([12, 77, 38, 41, 53, 92, 85]));

function teacherSolution(arr) {
  let answer,
    min = Number.MAX_SAFE_INTEGER;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < min) min = arr[i];
  }
  answer = min;
  return answer;
}

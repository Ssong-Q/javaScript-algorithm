function solution(arr) {
  let answer = [];

  for (let i = 0; i < arr.length; i++) {
    if (!i) answer.push(arr[i]);
    else {
      if (arr[i] > arr[i - 1]) answer.push(arr[i]);
    }
  }

  return answer;
}

console.log(solution([7, 3, 9, 5, 6, 12]));

function teacherSolution(arr) {
  let answer = [];
  answer.push(arr[0]);
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > arr[i - 1]) answer.push(arr[i]);
  }
  return answer;
}

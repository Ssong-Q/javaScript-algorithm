function solution(arr) {
  let answer = [];

  for (let i = 0; i < arr.length; i++) {
    let count = 1;
    for (let j = 0; j < arr.length; j++) {
      if (i === j) continue;
      else {
        if (arr[i] < arr[j]) count++;
      }
    }
    answer.push(count);
  }

  return answer;
}

console.log(solution([87, 89, 92, 100, 76]));
console.log(solution([87, 89, 92, 92, 76]));

function teacherSolution(arr) {
  let n = arr.length;
  let answer = Array.from({ length: n }, () => 1);
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      if (arr[j] > arr[i]) answer[i]++;
    }
  }
  return answer;
}

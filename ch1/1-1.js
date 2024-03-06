function solution(A, B, C) {
  const arr = [A, B, C];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < arr[i + 1]) arr[(i, i + 1)] = arr[(i + 1, i)];
  }
  return arr[arr.length - 1];
}

console.log(solution(6, 5, 11));

function teacherSolution(a, b, c) {
  let answer;
  if (a < b) answer = a;
  else answer = b;
  if (c < answer) answer = c;
  return answer;
}

function solution(A, B, C) {
  let answer;
  const SORTED_ARR = [A, B, C].sort((a, b) => a - b);
  if (SORTED_ARR[0] + SORTED_ARR[1] > SORTED_ARR[2]) answer = "YES";
  else answer = "NO";

  return answer;
}

console.log(solution(6, 7, 11));
console.log(solution(13, 33, 17));

function teacherSolution(a, b, c) {
  let answer = "YES",
    max;
  let tot = a + b + c;
  if (a > b) max = a;
  else max = b;
  if (c > max) max = c;
  if (tot - max <= max) answer = "NO";
  return answer;
}

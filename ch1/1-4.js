function solution(num) {
  let answer = 0;

  for (let i = 1; i <= num; i++) {
    answer += i;
  }

  return answer;
}

console.log(solution(6));
console.log(solution(10));

function teacherSolution(n) {
  let answer = 0;
  for (let i = 1; i <= n; i++) {
    answer = answer + i;
  }

  return answer;
}

function solution(num) {
  let answer;

  const share = num / 12;
  answer = Math.ceil(share);

  return answer;
}

console.log(solution(25));
console.log(solution(178));

function teacherSolution(n) {
  let answer;
  answer = Math.ceil(n / 12);
  return answer;
}

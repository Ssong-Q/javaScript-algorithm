function solution(str) {
  let answer;
  str = str.replace(/[^0-9]/g, "");
  answer = parseInt(str);

  return answer;
}

console.log(solution("g0en2T0s8eSoft"));

function teacherSolution(str) {
  let answer = "";
  for (let x of str) {
    if (!isNaN(x)) answer += x;
  }
  return parseInt(answer);
}

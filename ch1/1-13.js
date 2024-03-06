function solution(word) {
  let answer = "";

  for (let x of word) {
    const num = x.charCodeAt(0);
    if (num >= 65 && num <= 90) answer += String.fromCharCode(num + 32);
    else answer += String.fromCharCode(num - 32);
  }

  return answer;
}

console.log(solution("StuDY"));

function teacherSolution(s) {
  let answer = "";
  for (let x of s) {
    if (x === x.toUpperCase()) answer += x.toLowerCase();
    else answer += x.toUpperCase();
  }
  return answer;
}

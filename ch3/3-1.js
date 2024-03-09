function solution(str) {
  let answer = "YES";
  const LETTER = str.toUpperCase();
  const len = str.length;

  for (let i = 0; i < len / 2; i++) {
    if (LETTER[i] !== LETTER[len - i - 1]) answer = "NO";
  }

  return answer;
}

console.log(solution("gooG"));
console.log(solution("godoG"));

function teacherSolution(s) {
  let answer = "YES";
  s = s.toLowerCase();
  let len = s.length;
  for (let i = 0; i < Math.floor(len / 2); i++) {
    if (s[i] != s[len - i - 1]) return "NO";
  }
  return answer;
}

function solution(word) {
  let answer = "",
    total = 0;

  for (let i = 0; i < word.length; i++) {
    if (word.charCodeAt(i) >= 65 && word.charCodeAt(i) <= 90) total++;
  }

  if (total === word.length) {
    answer = word.replaceAll("A", "#");
  }

  return answer;
}

console.log(solution("BANANA"));

function teacherSolution(s) {
  let answer = "";
  for (let x of s) {
    if (x == "A") answer += "#";
    else answer += x;
  }
  return answer;
}

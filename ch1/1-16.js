function solution(word) {
  let answer = "";
  const arr = word.split("");

  const set = new Set(arr);
  answer = [...set].join("");

  return answer;
}

console.log(solution("ksekkset"));

function teacherSolution(s) {
  let answer = "";
  //console.log(s.indexOf("K"));
  for (let i = 0; i < s.length; i++) {
    //console.log(s[i], i, s.indexOf(s[i]));
    if (s.indexOf(s[i]) === i) answer += s[i];
  }
  return answer;
}

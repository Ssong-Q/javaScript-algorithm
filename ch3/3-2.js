function solution(str) {
  let answer = "YES";
  const len = str.length;

  for (let i = 0; i < Math.floor(len / 2); i++) {
    const firstLetter = str[i],
      lastLetter = str[len - i - 1];
    const fNum = firstLetter.charCodeAt(0),
      lNum = lastLetter.charCodeAt(0);
    if ((fNum >= 65 && fNum <= 90) || (fNum >= 97 && fNum <= 122)) {
      if (fNum >= 65 && fNum <= 90) {
        if (fNum + 32 !== lNum && fNum !== lNum) answer = "NO";
      } else {
        if (fNum - 32 !== lNum && fNum !== lNum) answer = "NO";
      }
    } else {
      if ((lNum >= 65 && lNum <= 90) || (lNum >= 97 && lNum <= 122))
        answer = "NO";
    }
  }

  return answer;
}

console.log(solution("found7, time: study; Yduts; emit, 7Dnuof"));
console.log(solution("found7, time: study; Yduts; wmit, 7Dnuof"));

function teacherSolution(s) {
  let answer = "YES";
  s = s.toLowerCase().replace(/[^a-z]/g, "");
  if (s.split("").reverse().join("") !== s) return "NO";
  return answer;
}

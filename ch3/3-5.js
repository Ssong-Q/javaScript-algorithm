function solution(str) {
  let answer = "",
    count = 1;
  const arr = str.split("");

  answer += str[0];
  for (let i = 1; i < arr.length; i++) {
    if (str[i] !== str[i - 1]) {
      answer += str[i];
    } else {
      count++;
      if (str[i] !== str[i + 1]) {
        answer += count;
        count = 1;
      }
    }
  }

  return answer;
}

console.log(solution("KKHSSSSSSSE"));

function teacherSolution(s) {
  let answer = "";
  let cnt = 1;
  s = s + " ";
  for (let i = 0; i < s.length - 1; i++) {
    if (s[i] === s[i + 1]) cnt++;
    else {
      answer += s[i];
      if (cnt > 1) answer += String(cnt);
      cnt = 1;
    }
  }
  return answer;
}

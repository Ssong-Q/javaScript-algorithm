function solution(word) {
  let answer = "";
  const LEN = word.length;

  if (LEN % 2) {
    // 홀수
    answer = word[Math.floor(LEN / 2)];
  } else {
    // 짝수
    answer += word[LEN / 2 - 1];
    answer += word[LEN / 2];
  }

  return answer;
}

console.log(solution("study"));
console.log(solution("good"));

function teacherSolution(s) {
  let answer;
  let mid = Math.floor(s.length / 2);
  if (s.length % 2 === 1) answer = s.substring(mid, mid + 1);
  else answer = s.substring(mid - 1, mid + 1);
  //if(s.length%2===1) answer=s.substr(mid, 1);
  //else answer=s.substr(mid-1, 2);
  return answer;
}

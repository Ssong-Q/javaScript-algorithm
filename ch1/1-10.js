function solution(word, letter) {
  let answer = 0;

  for (let x of word) {
    if (x === letter) answer++;
  }

  return answer;
}

console.log(solution("COMPUTERPROGRAMMING", "R"));

function teacherSolution(s, t) {
  let answer = 0;
  for (let x of s) {
    if (x === t) answer++;
  }
  return answer;
}

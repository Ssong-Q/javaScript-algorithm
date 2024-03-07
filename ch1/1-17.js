function solution(arr) {
  let answer = [];

  answer = [...new Set(arr)];

  return answer;
}

console.log(solution(["good", "time", "good", "time", "student"]));

function teacherSolution(s) {
  let answer;
  //console.log(s.indexOf("time"));
  answer = s.filter(function (v, i) {
    return s.indexOf(v) === i;
  });
  return answer;
}

function solution(arr) {
  let answer = "",
    max = Number.MIN_SAFE_INTEGER;

  for (let x of arr) {
    if (x.length > max) {
      max = x.length;
      answer = x;
    }
  }

  return answer;
}

console.log(solution(["teacher", "time", "student", "beautiful", "good"]));

function teacherSolution(s) {
  let answer = "",
    max = Number.MIN_SAFE_INTEGER;
  for (let x of s) {
    if (x.length > max) {
      max = x.length;
      answer = x;
    }
  }
  return answer;
}

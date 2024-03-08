function rcp(a, b) {
  const DRAW = "D";
  const A_win = "A";
  const B_win = "B";

  if (a === 1) {
    if (b === 1) return DRAW;
    else if (b === 2) return B_win;
    else return A_win;
  } else if (a === 2) {
    if (b === 1) return A_win;
    else if (b === 2) return DRAW;
    else return B_win;
  } else {
    if (b === 1) return B_win;
    else if (b === 2) return A_win;
    else return DRAW;
  }
}

function solution(A, B) {
  let answer = [];

  for (let i = 0; i < A.length; i++) {
    answer.push(rcp(A[i], B[i]));
  }

  return answer;
}

console.log(solution([2, 3, 3, 1, 3], [1, 1, 2, 2, 3]));

function teacherSolution(a, b) {
  let answer = "";
  for (let i = 0; i < a.length; i++) {
    if (a[i] === b[i]) answer += "D ";
    else if (a[i] === 1 && b[i] === 3) answer += "A ";
    else if (a[i] === 2 && b[i] === 1) answer += "A ";
    else if (a[i] === 3 && b[i] === 2) answer += "A ";
    else answer += "B ";
  }

  return answer;
}

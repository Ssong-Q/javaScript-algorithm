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

function teacherSolution(arr) {
  let answer = 1,
    max = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > max) {
      answer++;
      max = arr[i];
    }
  }
  return answer;
}

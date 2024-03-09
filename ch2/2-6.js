function solution(arr) {
  let answer,
    max = Number.MIN_SAFE_INTEGER;

  for (let i = 0; i < arr.length; i++) {
    let hor_sum = 0;
    let ver_sum = 0;
    for (let j = 0; j < arr.length; j++) {
      hor_sum += arr[i][j];
      ver_sum += arr[j][i];
    }
    const bigger = Math.max(hor_sum, ver_sum);
    if (bigger > max) max = bigger;
  }

  let dia_des_sum = 0;
  let dia_asc_sum = 0;
  for (let i = 0; i < arr.length; i++) {
    dia_des_sum += arr[i][i];
    dia_asc_sum += arr[i][4 - i];
  }
  const bigger = Math.max(dia_des_sum, dia_asc_sum);
  if (bigger > max) max = bigger;

  answer = max;
  return answer;
}

console.log(
  solution([
    [10, 13, 10, 12, 15],
    [12, 39, 30, 23, 11],
    [11, 25, 50, 53, 15],
    [19, 27, 29, 37, 27],
    [19, 13, 30, 13, 19],
  ])
);

function teacherSolution(arr) {
  let answer = Number.MIN_SAFE_INTEGER;
  let n = arr.length;
  let sum1 = (sum2 = 0);
  for (let i = 0; i < n; i++) {
    sum1 = sum2 = 0;
    for (let j = 0; j < n; j++) {
      sum1 += arr[i][j];
      sum2 += arr[j][i];
    }
    answer = Math.max(answer, sum1, sum2);
  }
  sum1 = sum2 = 0;
  for (let i = 0; i < n; i++) {
    sum1 += arr[i][i];
    sum2 += arr[i][n - i - 1];
  }
  answer = Math.max(answer, sum1, sum2);
  return answer;
}

function solution(arr) {
  let answer = 0;

  for (let i = 0; i < arr[0].length; i++) {
    const MENTO = arr[0][i];
    let temp = [];

    for (let j = 0; j < arr.length; j++) {
      const position = arr[j].indexOf(MENTO);
      temp = [...temp, ...arr[j].slice(position + 1)];
    }

    const obj = {
      1: 0,
      2: 0,
      3: 0,
      4: 0,
    };

    for (let j = 0; j < temp.length; j++) {
      if (temp[j] === 1) obj[1]++;
      if (temp[j] === 2) obj[2]++;
      if (temp[j] === 3) obj[3]++;
      if (temp[j] === 4) obj[4]++;
    }

    for (let j = 1; j <= temp.length; j++) {
      if (obj[j] === 3) answer++;
    }
  }

  return answer;
}

console.log(
  solution([
    [3, 4, 1, 2],
    [4, 3, 2, 1],
    [3, 1, 4, 2],
  ])
);

function teacherSolution(test) {
  let answer = 0;
  m = test.length;
  n = test[0].length;
  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= n; j++) {
      let cnt = 0;
      for (let k = 0; k < m; k++) {
        let pi = (pj = 0);
        for (let s = 0; s < n; s++) {
          if (test[k][s] === i) pi = s;
          if (test[k][s] === j) pj = s;
        }
        if (pi < pj) cnt++;
      }
      if (cnt === m) answer++;
    }
  }
  return answer;
}

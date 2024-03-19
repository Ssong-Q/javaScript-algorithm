function solution(k, arr) {
  let answer = 0,
    set = [];

  for (let i = 0; i < arr.length - 2; i++) {
    for (let j = i + 1; j < arr.length - 1; j++) {
      for (let k = j + 1; k < arr.length; k++) {
        set.push(arr[i] + arr[j] + arr[k]);
      }
    }
  }

  set.sort((a, b) => b - a);
  set = new Set(set);

  answer = [...set][k - 1];

  return answer;
}

console.log(solution(3, [13, 15, 34, 23, 45, 65, 33, 11, 26, 42]));

function teacherSolution(n, k, card) {
  let answer;
  let tmp = new Set();
  for (let i = 0; i < n; i++) {
    for (let j = i + 1; j < n; j++) {
      for (let k = j + 1; k < n; k++) {
        tmp.add(card[i] + card[j] + card[k]);
      }
    }
  }
  let a = Array.from(tmp).sort((a, b) => b - a);
  answer = a[k - 1];
  return answer;
}

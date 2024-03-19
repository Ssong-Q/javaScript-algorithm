function solution(budget, arr) {
  let answer = 0;
  let list = [...arr].sort((a, b) => b[0] - a[0]);
  list = [[list[0][0] / 2, list[0][1]], ...list.slice(1)];

  let finalList = list.sort((a, b) => a[0] + a[1] - (b[0] + b[1]));

  let i = 0;
  while (budget > 0) {
    budget -= finalList[i][0] + finalList[i][1];
    if (budget < 0) break;
    answer++;
    i++;
  }

  return answer;
}

console.log(
  solution(28, [
    [6, 6],
    [2, 2],
    [4, 3],
    [4, 5],
    [10, 3],
  ])
);

function teacherSolution(m, product) {
  let answer = 0;
  let n = product.length;
  product.sort((a, b) => a[0] + a[1] - (b[0] + b[1]));
  for (let i = 0; i < n; i++) {
    let money = m - (product[i][0] / 2 + product[i][1]);
    let cnt = 1;
    for (let j = 0; j < n; j++) {
      if (j !== i && product[j][0] + product[j][1] > money) break;
      if (j !== i && product[j][0] + product[j][1] <= money) {
        money -= product[j][0] + product[j][1];
        cnt++;
      }
    }
    answer = Math.max(answer, cnt);
  }
  return answer;
}

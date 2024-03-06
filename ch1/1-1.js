function solution(A, B, C) {
  const arr = [A, B, C];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < arr[i + 1]) arr[(i, i + 1)] = arr[(i + 1, i)];
  }
  return arr[arr.length - 1];
}

console.log(solution(6, 5, 11));

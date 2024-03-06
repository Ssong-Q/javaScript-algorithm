function solution(word) {
  let answer = 0;

  for (let i = 0; i < word.length; i++) {
    if (word[i].charCodeAt(0) >= 65 && word[i].charCodeAt(0) <= 90) answer++;
  }

  return answer;
}

console.log(solution("KoreaTimeGood"));

function teacherSolution(s) {
  let answer = 0;

  for (let x of s) {
    //let num=x.charCodeAt();
    //if(num>=65 && num<=90) answer++;
    if (x === x.toUpperCase()) answer++;
  }

  return answer;
}

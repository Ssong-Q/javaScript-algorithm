function solution(word) {
  let answer = "";

  for (let x of word) {
    answer += x.toUpperCase();
  }

  return answer;
}

console.log(solution("ItisTimeToStudy"));

function teacherSolution(s) {
  let answer = "";
  for (let x of s) {
    let num = x.charCodeAt();
    if (num >= 97 && num <= 122) answer += String.fromCharCode(num - 32);
    else answer += x;

    //if(x===x.toLowerCase()) answer+=x.toUpperCase();
    //else answer+=x;
  }

  return answer;
}

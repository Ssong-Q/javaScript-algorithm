function solution(str, x) {
  let answer = "";
  const arr = str.split(x); // 선택된 알파벳 기준으로 split

  for (let i = 0; i < arr.length; i++) {
    const len = arr[i].length;
    const x = Math.ceil(len / 2);

    let count = 0,
      flag = false,
      isOdd = true,
      isOneMore = false;

    if (len % 2 === 0) isOdd = false;

    if (i === 0 && arr[i] === "") {
      answer += "0";
      continue;
    }

    if (i === arr.length - 1 && arr[i] === "") break;

    for (let j = 0; j < len; j++) {
      if (isOdd) {
        if (!flag) {
          count++;
          answer += count.toString();
          if (count === x) flag = true;
        } else {
          count--;
          answer += count.toString();
        }
      } else {
        if (!flag) {
          if (isOneMore) {
            answer += count.toString();
          } else {
            count++;
            answer += count.toString();
          }
          if (count === x && !isOneMore) isOneMore = true;
          else if (count === x && isOneMore) flag = true;
        } else {
          count--;
          answer += count.toString();
        }
      }
    }

    if (i === arr.length - 1) break;
    answer += "0";
  }

  return answer;
}

console.log(solution("teachermode", "e"));

function teacherSolution(s, t) {
  let answer = [];
  let p = 1000;
  for (let x of s) {
    if (x === t) {
      p = 0;
      answer.push(p);
    } else {
      p++;
      answer.push(p);
    }
  }
  p = 1000;
  for (let i = s.length - 1; i >= 0; i--) {
    if (s[i] === t) p = 0;
    else {
      p++;
      answer[i] = Math.min(answer[i], p);
    }
  }
  return answer;
}

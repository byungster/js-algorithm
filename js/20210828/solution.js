function solution(string) {
  let resultString = splitJoin(string);
  //문자열의 길이를 리턴

  console.log(resultString.length);
  return resultString.length;
}

function splitJoin(string) {
  let processingString = string.split('01').join('');

  if (processingString.indexOf('01') !== -1) {
    return splitJoin(processingString);
  } else {
    return processingString;
  }
}

solution('1011'); // 2
solution('0110011'); // 1
solution('000111'); // 0

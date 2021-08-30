function solution(numstrs, words) {
  let answer = [];

  // 숫자로 이루어진 문자열을 모두 순회한다.
  words.forEach(word => {
    // 모든 경우 얻어오기
    let allNumstrs = getCharacterCombinations(word.toString());

    // 부합하는 경우는 몇개?
    let searchedLength = searchNumStr(allNumstrs, numstrs);

    // answer에 푸시
    answer.push(searchedLength);
  });

  // word는 numstr에 들어있는가? 그렇다면 몇개인가?
  return answer;
}

function searchNumStr(all, target) {
  return all.filter(item => {
    target.indexOf(item);
  }).length;
}

function getCharacterCombinations(word) {
  let strMap = createMap();
  let wordArray = word.split('');

  let relations = [];
  let allWords = [];

  for (let el of wordArray) {
    let strReplacements = strMap.get(el);
    relations.push(strReplacements);
  }

  // 2차원 배열을 순회하며 모든 조합을 얻음
  return allWords;
}

function createMap() {
  let map = new Map();
  map.set('0', ['O', '()']);
  map.set('1', ['I']);
  map.set('2', ['Z', 'S', '7_']);
  map.set('3', ['E', 'B']);
  map.set('4', ['A']);
  map.set('5', ['Z', 'S']);
  map.set('6', ['b', 'G']);
  map.set('7', ['T', 'Y']);
  map.set('8', ['B', 'E3']);
  map.set('9', ['g', 'q']);
  return map;
}

solution(['ZASSETE', 'S4Z537B', '7_ASZEYB'], ['2455373', '425', '373', '378']); // 3,2,3,2

solution(['ZAZZ373'], ['2422373', '5455373', '2455373']); // 1,1,0

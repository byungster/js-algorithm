function solution(prices) {
  let dailyResult = 0;
  prices.reverse();

  console.log(prices);
  prices.reduce((acc,cur)=>{
    console.log(acc,cur);
    if ( acc - cur > 0) {
      dailyResult += acc - cur;
    }

    return cur;
  });

  console.log(dailyResult);
  return dailyResult;
}

solution([1, 2, 4, 1, 2, 3]);

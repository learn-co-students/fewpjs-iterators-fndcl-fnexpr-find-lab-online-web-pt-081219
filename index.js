const testVar = {}

function testFunc() {
  return "hi"
}

function superbowlWin(record) {
  let winningYear = record.find(year => {
    console.log(year.result === 'W')
    return year.result === 'W'
  });
  if ( winningYear === undefined ) { 
    return undefined
  }
  return winningYear.year
};

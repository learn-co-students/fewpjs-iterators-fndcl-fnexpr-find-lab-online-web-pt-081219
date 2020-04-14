const testVar = {}

function testFunc() {
  return "hi"
}


function superbowlWin(record){
  let winningYear = record.find(w => w.result === 'W')
  if (!!winningYear){
    return winningYear.year
  }
}
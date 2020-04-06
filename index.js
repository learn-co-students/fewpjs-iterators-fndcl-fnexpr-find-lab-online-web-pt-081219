const testVar = {}

function testFunc() {
  return "hi"
}

function superbowlWin(record) {
  let winner = record.find(winner => winner.result === "W")
  if (winner) {
    return winner.year
  }
}

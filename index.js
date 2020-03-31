const testVar = {}

function testFunc() {
  return "hi"
}

function superbowlWin(record) {
  let results = record.find(record => record.result === "W")
  return !!results ? results.year : undefined
}

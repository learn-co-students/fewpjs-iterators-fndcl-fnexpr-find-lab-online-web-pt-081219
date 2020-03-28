const testVar = {}

function testFunc() {
  return "hi"
}

function superbowlWin(records) {
  let results = records.find(record => record.result === "W")
  return !!results ? results.year : undefined
}

const testVar = {}

function testFunc() {
  return "hi"
}

function superbowlWin(teamRecord) {
  teamRecord.find(function (r) { return r.result === "W"} );
}
// const testVar = {}

// function testFunc() {
//   return "hi"
// }

function superbowlWin(array){
  let wins = array.find( e => e.result === "W")
  return wins ? wins.year : undefined
}

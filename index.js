const testVar = {}

function testFunc() {
  return "hi"
}

function superbowlWin(info){
  let win = (info.find(x => x.result === "W"));
  if (win){
    return win.year;
  }
}
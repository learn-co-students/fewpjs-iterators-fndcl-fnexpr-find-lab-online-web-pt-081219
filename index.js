const testVar = {}

function testFunc() {
  return "hi"
}

// let obj = objArray.find(obj => obj.id == 3);

function superbowlWin(arr) {
  let thisWin = arr.find(function(win) {
    return win.result === "W";
  })
  let result = thisWin === undefined ? undefined : thisWin.year;
  return result;
}
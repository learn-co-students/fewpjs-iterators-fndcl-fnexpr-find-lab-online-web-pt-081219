const testVar = {}

function testFunc() {
  return "hi"
}

function superbowlWin(arrayOfObjects){
  let win = arrayOfObjects.find(year => {
    console.log(year.result === 'W')
    return year.result == 'W'
  });
  if (win === undefined) {
    return undefined;
  }
  return win.year;
};
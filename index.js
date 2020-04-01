function superbowlWinWithoutFind(objArray) {
  for (const entry of objArray) {
    if (entry.result === "W") {
      return entry.year;
    }
  }
}

function superbowlWin(objArray) {
  let entry = objArray.find(entry => {
    return entry.result === "W";
  });

  if (entry) {
    return entry.year;
  }
}

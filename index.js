function superbowlWin(arr) {
  let firstWin = arr.find( e => e.result === "W")
  return !!firstWin ? firstWin.year : undefined
};

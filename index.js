
function superbowlWin(matches) {
  let result = matches.find(match => match.result === 'W')
  return result.year
}
  
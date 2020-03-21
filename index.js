const testVar = [
  {year: "2018", result: "L"},
  {year: "2017", result: "W"},
  {year: "2016", result: "N/A"}
]

const superbowlWin = (e) => {

  const didWin = e.find(i => {
    return i.result === 'W'
  })

  return (didWin) ? didWin.year : undefined
}

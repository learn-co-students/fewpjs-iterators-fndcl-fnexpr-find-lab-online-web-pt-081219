function superbowlWin(teamRecord) {
  let result = teamRecord.find(record => record.result === "W" );
  if(result) {
    return result.year;
  }
  return undefined;
}
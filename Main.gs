function RecordHaze() {
  var hazeDatas = getHazeLevel();
  var preCentral = getHazeValue("central")
  var curCentral = hazeDatas[1]
  addToSheet(hazeDatas);
  var message = generateNotifyMessage(preCentral,curCentral)
  if(message !== ""){
    notifyToLineFriends(message)
  }
}

function RecordHaze() {
  var hazeDatas = getHazeLevel();
  var preCentral = getHazeValue(getDistriction("central"))
  var curCentral = hazeDatas[1]
  addToSheet(hazeDatas);
  var message = generateNotifyMessage(preCentral,curCentral)
  if(message !== ""){
    notifyToLineFriends(message)
  }
}

function doPost(e){
  replyToLineFriend(e)
}



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

function sendMessageTest(){
  Logger.log("sendMessageTest")
  pushMessage()
}

function doPost(e){
  replyToLineFriend(e)
}


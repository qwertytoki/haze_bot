
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
  var json = e.postData.contents
  var event = JSON.parse(json).events[0];
  if(event.type == "follow") {
    follow(event);
  }else{
    replyToLineFriend(event);
  }
}


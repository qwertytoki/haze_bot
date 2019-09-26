var REPLY_URL = 'https://api.line.me/v2/bot/message/reply';
var PUSH_URL = "https://api.line.me/v2/bot/message/push";

function  notifyToLineFriends(message){
  // use LINE
  var friendData = getFriends()
  var userId = ""
  for(var i=0;i<friendData.length;i++){
    userId = friendData[i][0];
    var postData = {
      "to": userId,
      "messages":[{
        "type": "text",
        "text": message,
      }]
    }
    var headers = {
      "Content-Type": "application/json",
      'Authorization': 'Bearer ' + CHANNEL_ACCESS_TOKEN,
    };
    var options = {
      "method": "post",
      "headers": headers,
      "payload": JSON.stringify(postData)
    };
    var response = UrlFetchApp.fetch(PUSH_URL, options);
  }
  
}

function replyToLineFriend(event){
  
  var distriction = getDistriction(event.message.text);
  var message = {
    "replyToken" : event.replyToken,
    "messages" : [{
      "type": "text",
      "text" : generateReplyMessage(distriction)
    }]};
  var options = {
    "method" : "post",
    "headers" : {
      "Content-Type" : "application/json",
      "Authorization" : "Bearer " + CHANNEL_ACCESS_TOKEN
    },
    "payload" : JSON.stringify(message)
  };
  UrlFetchApp.fetch("https://api.line.me/v2/bot/message/reply", options);
  
}
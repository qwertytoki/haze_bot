var REPLY_URL = 'https://api.line.me/v2/bot/message/reply';
var PUSH_URL = "https://api.line.me/v2/bot/message/push";

function  notifyToLineFriends(message){
  // use LINE
  Logger.log(message)
  var postData = {
    "to": USER_ID,
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

function replyToLineFriend(e){
  var json = e.postData.contents
  var event = JSON.parse(json).events[0];
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
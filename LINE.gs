var END_POINT = 'https://api.line.me/v2/bot/message/reply';
var PUSH_URL = "https://api.line.me/v2/bot/message/push";

function  notifyToLineFriends(message){
  // use LINE
  var postData = {
    "to": USER_ID,
    "messagges":[{
      "type": "text",
      "text": message,
    }]
  }
  var url = PUSH_URL
  var headers = {
    "Content-Type": "application/json",
    'Authorization': 'Bearer ' + CHANNEL_ACCESS_TOKEN,
  };
}


function pushMessage() {
    //deleteTrigger();
  var postData = {
    "to": myId(),
    "messages": [{
      "type": "text",
      "text": "おはよう",
    }]
  };

  var url = "https://api.line.me/v2/bot/message/push";
  var headers = {
    "Content-Type": "application/json",
    'Authorization': 'Bearer ' + CHANNEL_ACCESS_TOKEN,
  };

  var options = {
    "method": "post",
    "headers": headers,
    "payload": JSON.stringify(postData)
  };
  var response = UrlFetchApp.fetch(url, options);
}

function replyToLineFriend(message){
  // use LINE
}
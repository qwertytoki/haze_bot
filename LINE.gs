function  notifyToLineFriends(message){
  // use LINE
  var postData = {
    "to": USER_ID,
    "messagges":[{
      "type": "text",
      "text": message,
    }]
  }
  var url = "https://api.line.me/v2/bot/message/push";
  var headers = {
    "Content-Type": "application/json",
    'Authorization': 'Bearer ' + CHANNEL_ACCESS_TOKEN,
  };
}

function replyToLineFriend(message){
  // use LINE
}
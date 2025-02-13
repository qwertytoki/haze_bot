function getHazeLevel(){
  try{
    var url = "https://api.data.gov.sg/v1/environment/psi"
    var response = UrlFetchApp.fetch(url)
    var json=JSON.parse(response);

    var today = new Date();
    var central= json["items"][0]["readings"]["psi_twenty_four_hourly"]["central"]
    var north  = json["items"][0]["readings"]["psi_twenty_four_hourly"]["north"]
    var east   = json["items"][0]["readings"]["psi_twenty_four_hourly"]["east"]
    var west   = json["items"][0]["readings"]["psi_twenty_four_hourly"]["west"]
    var south  = json["items"][0]["readings"]["psi_twenty_four_hourly"]["south"]
  return [today,central,north,east,west,south];
  }catch(e){
    throw(e);
  }
}

function generateNotifyMessage(pre,cur){
  try{
    var message = ""
    if(pre<100 && cur>=100){
      message = "ヘイズ値が100超えました！ 弱者は外出やめましょう！"
    }else if(pre>=100 && cur<100){
      message = "ヘイズ値が100未満になりました！ 筋トレいくなら今です！"
    }else if(pre<200 && cur>=200){
      message = "ヘイズ値が200超えました！やばいって！みんな外出やめよう！"
    }else if(pre>=200 && cur<200){
      message = "ヘイズ値が200未満になりました！ 脅威は一旦去りましたがまだ警戒を続けて！"
    }
    return message
  }catch(e){
    throw(e);
  }
}
function generateReplyMessage(distriction){
  
  // Central
  if(distriction ===2){
    message = "セントラルのヘイズ指数は"+getHazeValue(distriction) +"です"
  }else if(distriction===3){
    message = "北側のヘイズ指数は"+getHazeValue(distriction) +"です"
  }else if(distriction===4){
    message = "東側のヘイズ指数は"+getHazeValue(distriction) +"です"
  }else if(distriction===5){
    message = "西側のヘイズ指数は"+getHazeValue(distriction) +"です"
  }else if(distriction===6){
    message = "南側のヘイズ指数は"+getHazeValue(distriction) +"です"
  }
  return message;
}

function getDistriction(distriction){
  if(distriction.indexOf("North")!=-1||distriction.indexOf("north")!=-1||distriction.indexOf("きた")!=-1||distriction.indexOf("北")!=-1){
      return 3;
  }else if(distriction.indexOf("East")!=-1||distriction.indexOf("east")!=-1||distriction.indexOf("ひがし")!=-1||distriction.indexOf("東")!=-1){
      return 4;
  }else if(distriction.indexOf("West")!=-1||distriction.indexOf("west")!=-1||distriction.indexOf("にし")!=-1||distriction.indexOf("西")!=-1){
      return 5;
  }else if(distriction.indexOf("South")!=-1||distriction.indexOf("south")!=-1||distriction.indexOf("みなみ")!=-1||distriction.indexOf("南")!=-1){
      return 6;
  }
  return 2;
}



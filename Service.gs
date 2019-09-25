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



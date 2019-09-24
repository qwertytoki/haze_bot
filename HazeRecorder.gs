
function RecordHaze() {
  var hazeDatas = getHazeLevel();
  addToSheet(hazeDatas);
}

function getHazeLevel(){
  try{
    Logger.log(today)
    var url = "https://api.data.gov.sg/v1/environment/psi"
    var response = UrlFetchApp.fetch(url)
    var json=JSON.parse(response);

    var today = new Date();
    var central = json["items"][0]["readings"]["psi_twenty_four_hourly"]["central"]
    var north  = json["items"][0]["readings"]["psi_twenty_four_hourly"]["north"]
    var east   = json["items"][0]["readings"]["psi_twenty_four_hourly"]["east"]
    var west   = json["items"][0]["readings"]["psi_twenty_four_hourly"]["west"]
    var south  = json["items"][0]["readings"]["psi_twenty_four_hourly"]["south"]
  return [today,central,north,east,west,south];
  }catch(e){
    throw(e);
  }
}

function addToSheet(hazeDatas){
  try{

    var spreadsheet = SpreadsheetApp.getActiveSpreadsheet();
    var sheets = spreadsheet.getSheets();
    var sheet = '';
    for(var i=0; i<sheets.length;i++){
      if(sheets[i].getName()==="sheet"){
        sheet = spreadsheet.getSheetByName("sheet");
      }
    }
    sheet.appendRow(hazeDatas);
  }catch(e){
    throw(e);
  }
  
}

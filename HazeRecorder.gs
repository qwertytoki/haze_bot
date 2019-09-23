
function RecordHaze() {
  var hazeDatas = getHazeLevel();
  addToSheet(hazeDatas);
}

function getHazeLevel(){
  try{
    var url = "https://api.data.gov.sg/v1/environment/psi?date_time=2019-09-23T03%3A00%3A00";
    var a = UrlFetchApp.fetch(url)
    Logger.log(a);
    Logger.log()
    var today = new Date();    
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

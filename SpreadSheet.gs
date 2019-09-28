function test(){
  var a =2
  Logger.log(a%10)
}

function addToSheet(hazeDatas){
  try{
    var sheet = getSheet()
    sheet.appendRow(hazeDatas);
  }catch(e){
    throw(e);
  }
}

function getHazeValue(col){
  var sheet = getSheet()
  col = col % 10
  var data = sheet.getRange(sheet.getLastRow(),col).getValue()
  return data 
}

function getSheet(){
  var spreadsheet = SpreadsheetApp.getActiveSpreadsheet();
  var sheets = spreadsheet.getSheets();
  var sheet = '';
  for(var i=0; i<sheets.length;i++){
    if(sheets[i].getName()==="sheet"){
      return spreadsheet.getSheetByName("sheet");
    }
  }
}

function addUserIdToSpreadSheet(event){
  var userId = event.source.userId;
  var sheet = SpreadsheetApp.getActiveSpreadsheet();
  var ss = sheet.getSheetByName('users');
  ss.appendRow([userId]); 
}

function getFriends(){
  var sheet = SpreadsheetApp.getActiveSpreadsheet();
  var ss = sheet.getSheetByName('users');
  return ss.getDataRange().getValues();
}

function unfollow(e) {
  var userId = e.source.userId;
  var sheet = SpreadsheetApp.getActiveSpreadsheet();
  var ss = sheet.getSheetByName('user');
  var dat = ss.getDataRange().getValues();
  var flg = -1;
  
  for(var i=0;i<dat.length;i++){
    if(dat[i][0] === userId){//[行][列]
      ss.deleteRow(i+1);
    }
  }
}
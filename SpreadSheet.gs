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
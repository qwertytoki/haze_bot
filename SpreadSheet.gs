function addToSheet(hazeDatas){
  try{
    var sheet = getSheet()
    sheet.appendRow(hazeDatas);
  }catch(e){
    throw(e);
  }
}

function getHazeValue(distriction){
  var col = 2
  if(distriction ==="North"||distriction ==="北"){
      col = 3;
  }else if(distriction ==="East"||distriction ==="東"){
      col = 4;
  }else if(distriction ==="West"||distriction ==="西"){
      col = 5;
  }else if(distriction ==="South"||distriction ==="南"){
      col = 6;
  }
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
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

function getValue(distriction){
  return 100
}
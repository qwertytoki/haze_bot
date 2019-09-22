
function RecordHaze() {
  var hazeDatas = getHazeLevel();
  addToSheet(hazeDatas);
}

function getHazeLevel(){
  try{
    var today = new Date();
    var url = "https://www.haze.gov.sg";
    var request = UrlFetchApp.fetch(url);
    var html = request.getContentText();

    var map = [];
    
    var searchTag = '<span id="ContentPlaceHolderTicker_C049_LitValueCentral">'
    var central = html.indexOf(searchTag);
    
    searchTag = '<span id="ContentPlaceHolderTicker_C049_LitValueNorth">'
    var north = html.indexOf(searchTag);
    
    searchTag = '<span id="ContentPlaceHolderTicker_C049_LitValueEast">'
    var east = html.indexOf(searchTag);
    
    searchTag = '<span id="ContentPlaceHolderTicker_C049_LitValueWest">'
    var west = html.indexOf(searchTag);
    
    searchTag = '<span id="ContentPlaceHolderTicker_C049_LitValueSouth">'
    var south = html.indexOf(searchTag);
    
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

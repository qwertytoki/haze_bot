
function RecordHaze() {
  var hazeDatas = getHazeLevel();
  addToSheet(hazeDatas);
}

function getHazeLevel(){
  try{
    var today = new Date();
    var url = "https://www.haze.gov.sg";
    var fromText = 'ContentPlaceHolderTicker_C049_LitValueCentral';
    var toText = '</span>';
   //<div class="LCopac qlfxzd ">558,263 users</div>
  //<span id="ContentPlaceHolderTicker_C049_LitValueSouth">128</span>
  <span id="panel-stats-value" class="value" style="color: rgb(255, 206, 3);">118</span>
    var content = UrlFetchApp.fetch(url).getContentText();
    var scraped = Parser
                    .data(content)
                    .from(fromText)
                    .to(toText)
                    .build();
    Logger.log(scraped);
    
    var searchTag = "ContentPlaceHolderTicker_C049_LitValueCentral"
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

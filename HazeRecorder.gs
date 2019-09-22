
function RecordHaze() {
  var hazeMap = getHazeLevel();
  addToSheet(hazeMap);
}

function getHazeLevel(){
  try{
    var url = "https://www.haze.gov.sg";
    var request = UrlFetchApp.fetch(url);
    var html = request.getContentText();

    var map = [];
    
    var searchTag = '<span id="ContentPlaceHolderTicker_C049_LitValueCentral">'
    map["central"] = html.indexOf(searchTag);
    
    searchTag = '<span id="ContentPlaceHolderTicker_C049_LitValueNorth">'
    map["north"] = html.indexOf(searchTag);
    
    searchTag = '<span id="ContentPlaceHolderTicker_C049_LitValueEast">'
    map["east"] = html.indexOf(searchTag);
    
    searchTag = '<span id="ContentPlaceHolderTicker_C049_LitValueWest">'
    map["west"] = html.indexOf(searchTag);
    
    searchTag = '<span id="ContentPlaceHolderTicker_C049_LitValueSouth">'
    map["south"] = html.indexOf(searchTag);
    
    return map;
  }catch(e){
    throw(e);
  }
}

function addToSheet(hazeMap){
  try{
    var today = new Date();
  
  }
  
}

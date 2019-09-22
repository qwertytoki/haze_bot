function onOpen() {
    var sheet = SpreadsheetApp.getActiveSpreadsheet();
    var entries = [
      {
        name : "test Qiita User getter",
        functionName : "myFunction"
      } 
    ]
    sheet.addMenu("実行",entries);
    
}

function myFunction(){
  Browser.msgBox("Confirm", "TEST GAS", Browser.Buttons.OK);
}

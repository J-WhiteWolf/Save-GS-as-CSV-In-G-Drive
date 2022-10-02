function sheetToCsv(){

    var ssID = SpreadsheetApp.getActiveSpreadsheet().getId();

    //Google Sheet Name (what to save)
    var googleSheet_Name = "SheetTabName";

    //Google Drive Folder ID (where to save)
    var driveFolderId = "gDriveFolderId";

    //Save CSV File with this Name
    var date = Utilities.formatDate(new Date(), "GMT+1", "dd.MM.yy");
    var csvFileName = date + " - " + googleSheet_Name;

    //--------------------- Working function - NO TOUCH --------------------------//
  
    var requestData = {"method": "GET", "headers": {"Authorization": "Bearer " + ScriptApp.getOAuthToken()}};
  
      var sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName(googleSheet_Name);
      var sheetNameId = sheet.getSheetId().toString();
  
      params= ssID + "/export?gid=" + sheetNameId + "&format=csv";
      var url = "https://docs.google.com/spreadsheets/d/" + params;
      var result = UrlFetchApp.fetch(url, requestData); 
       
   var resource = {
    title: csvFileName + ".csv",
     mimeType: "application/vnd.csv",
     parents: [{ id: driveFolderId }]
     }

      Drive.Files.insert(resource,result);
  
}

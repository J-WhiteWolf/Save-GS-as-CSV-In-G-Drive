//// **** This Script is Standalone **** \\\\


function sheetToCsv(){

    // Spread Sheet id
    var spreadSheetId = "googlespreadSheetId";

    //Google Drive Folder ID (where to save)
    var driveFolderId = "googleDriveFolderId";
    
    //Google Sheet id (what to save)
    var sheetNameId = "sheetId";

    //save csv file with date and this name
    var csvName = "savedCsvFileName";

    //naming csv file
    var date = Utilities.formatDate(new Date(), "GMT+1", "dd.MM.yy");
    var csvFileName = date + " - " + csvName;

    //--------------------- Working function - NO TOUCH --------------------------//
  
    var requestData = {"method": "GET", "headers": {"Authorization": "Bearer " + ScriptApp.getOAuthToken()}};
  
      params = spreadSheetId + "/export?gid=" + sheetNameId + "&format=csv";
      var url = "https://docs.google.com/spreadsheets/d/" + params;
      var result = UrlFetchApp.fetch(url, requestData); 
       
   var resource = {
    title: csvFileName + ".csv",
     mimeType: "application/vnd.csv",
     parents: [{ id: driveFolderId }]
     }

      Drive.Files.insert(resource,result);
}

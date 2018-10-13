function doGet() {
  return showCsvUploader();
}

function showCsvUploader() {
  var output = HtmlService.createTemplateFromFile("csvImport");
  //var ss = SpreadsheetApp.openById(idString);
  var html = output.evaluate();
  return html;
}

function localTest(){


}

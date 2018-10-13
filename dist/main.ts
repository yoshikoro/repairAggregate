import csv from "./importCsv"
import {repairControl} from "./rapair"
function doGet():any {
  return showCsvUploader();
}

function showCsvUploader():any {
  var output = HtmlService.createTemplateFromFile("csvImport");
  //var ss = SpreadsheetApp.openById(idString);
  var html = output.evaluate();
  return html;
}

function csvImportMain(targetNode:any):void{
  const importCSV = new csv;
  let data = importCSV.csvChange(targetNode);
  repairControl(data);
}

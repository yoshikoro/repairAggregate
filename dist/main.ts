import csv from "./importCsv"
import {repairControl,createSheet} from "./rapair"
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
  let data = importCSV.sendCsv(targetNode.File);
  createSheet("temp_etcR_etc",data)
  repairControl(data);
}

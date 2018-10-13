export default class importCsvLib {
  sendCsv(theForm: any): string[][] {
    const fileBlob = theForm.myFile;
    return this.csvChange(fileBlob);
  }
  csvChange(filelist:any): string[][] {
    var blob = filelist.getBlob().getDataAsString();
    var data: string[][] = Utilities.parseCsv(blob);
    return data;
  }
  csvChangeJis(filelist:any): string[][] {
    var blob = filelist.getBlob().getDataAsString("Shift_JIS");
    var data: string[][] = Utilities.parseCsv(blob);
    return data;
  }
  csvImportScript(formFile:any) {
    const data: string[][] = this.sendCsv(formFile);
  }
}

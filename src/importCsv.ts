export default class importCsvLib {
  sendCsv(file: any): string[][] {
    const fileBlob = file;
    return this.csvChange(fileBlob);
  }
  csvChange(filelist: any): string[][] {
    var blob = filelist.getBlob().getDataAsString();
    var data: string[][] = Utilities.parseCsv(blob);
    return data;
  }
  csvChangeJis(filelist: any): string[][] {
    var blob = filelist.getBlob().getDataAsString('Shift_JIS');
    var data: string[][] = Utilities.parseCsv(blob);
    return data;
  }
}

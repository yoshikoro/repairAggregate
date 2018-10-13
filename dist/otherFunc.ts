import dup from "./duplicate";
export default class otherFunc {
  constructor() {}
  zeropad(value: string, len: number): string[] {
    var con = [];
    var zero: string = "";
    if (value.length < len) {
      value = value.toString();
      for (let index = 0; index < len; index++) {
        zero += "0";
      }
      value = zero + value;
      value = value.slice(value.length - len);
      con.push(value);
    }
    return con;
  }
  fs_fileinsp(nameStr: string): string {
    const bool = DriveApp.getFilesByName(nameStr).hasNext();
    let list: GoogleAppsScript.Drive.File;
    if (bool == false) {
      return "noData";
    } else {
      list = DriveApp.getFilesByName(nameStr).next();
    }
    var listid: string = list.getId();
    return listid;
  }
  numsurc(apendarr: string[], id: string, targetShName: string): boolean {
    var arr2dim = SpreadsheetApp.openById(id)
      .getSheetByName(targetShName)
      .getDataRange()
      .getValues();
    var flag = true;
    for (var i = arr2dim.length; i--; ) {
      var cnom = arr2dim[i][0];
      if (cnom == apendarr[0]) {
        flag = false;
        break;
      }
    }

    return flag;
  }
  copysp(filename: string, tempName: string, folderName: string): any {
    var mydate = new Date();
    var year: string = Utilities.formatDate(mydate, "Asia/Tokyo", "yyyy");
    var drivefile = DriveApp.getFilesByName(tempName).next();
    var fol = DriveApp.getFoldersByName(year + folderName).next();
    var id: string = drivefile.makeCopy(filename, fol).getId();
    var fileobj = SpreadsheetApp.openById(id);

    return fileobj;
  }
}

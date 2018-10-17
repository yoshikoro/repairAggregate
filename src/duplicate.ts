export default class duplicateClass {
  private id: string;
  private shNum: number;
  private targetColumn: number;
  constructor(id: string, shNum: number, targetColumn: number) {
    this.id = id;
    this.shNum = shNum;
    this.targetColumn = targetColumn;
  }
  duplicateList(listArray?: string[][]): string[] {
    const list = this.getList(listArray);
    const list1Dim = this.get1DimArray(list, this.targetColumn);
    return this.duplicateArray(list1Dim);
  }

  private getList(listArray?: string[][]): object[][] | string[][] {
    if (!listArray) {
      var list: object[][] = SpreadsheetApp.openById(this.id)
        .getSheets()
        [this.shNum].getDataRange()
        .getValues();
      return list;
    } else {
      return listArray;
    }
  }
  private get1DimArray(listArray: string[][] | object[][], targetColumn: number): string[] {
    let targetArray: string[] = [];
    for (let i = 0; i < listArray.length; i++) {
      targetArray.push(String(listArray[i][targetColumn]));
    }

    return targetArray;
  }

  private duplicateArray(target: string[]): string[] {
    var arr: string[] = target.filter(
      (val: string, index: number, self: (string)[]): boolean => {
        return self.indexOf(val) === index;
      }
    );
    return arr;
  }
}

export class duplicateClass {
  private id: string;
  private shNum: number;
  constructor(id: string, shNum: number) {
    this.id = id;
    this.shNum = shNum;
  }
  duplicateList(listArray?: string[][]): string[] {
    const list = this.getList(listArray);
    const list1Dim = this.get1DimArray(list, 2);
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
  private get1DimArray(
    listArray: string[][] | object[][],
    targetColumn: number
  ): string[] {
    let targetArray: string[] = [];
    for (let i = 0; i < listArray.length; i++) {
      targetArray.push(listArray[i][targetColumn]);
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

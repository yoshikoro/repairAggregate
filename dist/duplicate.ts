class duplicateClass {
  private id: string;
  private shNum: number;
  constructor(id: string,shNum:number) {
    this.id = id;
    this.shNum = shNum;
  }
  getList(): object[][] {
    const list: object[][] = SpreadsheetApp.openById(this.id)
      .getSheets()[this.shNum]
      .getDataRange()
      .getValues();
    return list;
  }
  duplicateList(target: string[]): string[] {
    var arr :string[]= target.filter(
      (
        val: string,
        index: number,
        self: (string)[]
      ): boolean => {
        return self.indexOf(val) === index;
      }
    );
    return arr
  }
}

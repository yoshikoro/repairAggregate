export default class dateFunc {
  myyearday(ans: string): string {
    var fmday: string = Utilities.formatDate(new Date(), "Asia/Tokyo", "MM/dd");
    var now = new Date();
    var year = now.getFullYear();
    var stryear = String(year);
    var month = now.getMonth() + 1;
    var strmonth = String(month);
    var day = now.getDate();
    var strday = String(day);
    if (month < 10) {
      strmonth = 0 + strmonth;
    } else if (month > 9) {
      strmonth = strmonth;
    }
    if (day < 10) {
      strday = 0 + strday;
    } else if (day > 9) {
      strday = strday;
    }
    var yms: string = "";
    if (ans == "short") {
      yms = stryear + strmonth + strday;
    } else if (ans == "slush") {
      yms = stryear + "/" + strmonth + "/" + strday;
    } else if (ans == undefined) {
      yms = stryear + strmonth;
    } else if (ans == "month") {
      yms = strmonth;
    } else if (ans == "day") {
      yms = strday;
    }
    const retyms = yms;
    return retyms;
  }
  dateCompari(targetDate: string, plusDate: number):string {
    var target = new Date(targetDate);
    var toD = new Date();
    var myD = new Date();
    var day = myD.getDate() + plusDate;
    myD.setDate(day);
    var flgstr: string = "";
    if (myD >= target && target >= toD) {
      flgstr = "just";
    } else if (toD > target) {
      flgstr = "small";
    } else {
      flgstr = "elseDay";
    }
    return flgstr;
  }
  /**
   *
   * 当月にプラスした月を返します short = yyyyMMdd long = yyyy/MM/dd "" = yyyyMM yyyy = yyyy
   * var yyyyMM = nextMonthyearday(ans,plusMonth);
   * @param {string} ans short or long or yyyyMM or yyyy
   * @param {int} plusMonth
   * @return {string} yms short yyyyMMdd long "+ / +"
   */
  nextMonthyearday(ans: string, plusMonth: number) {
    var now = new Date();
    now.setMonth(now.getMonth() + plusMonth);
    var year = now.getFullYear();
    var month = now.getMonth() + 1;
    var day = now.getDate();
    var strday = String(day);
    var stryear = String(year);
    var strmonth = String(month);
    if (month < 10) {
      strmonth = 0 + strmonth;
    } else if (month > 9) {
      strmonth = strmonth;
    }
    if (day < 10) {
      strday = 0 + strday;
    } else if (day > 9) {
      strday = strday;
    }
    var yms: string = "";
    if (ans == "short") {
      var yms = stryear + strmonth + strday;
    } else if (ans == "long") {
      var yms = stryear + "/" + strmonth + "/" + strday;
    } else if (ans == "yyyyMM") {
      var yms = stryear + strmonth;
    } else if (ans == "yyyy") {
      var yms = stryear;
    }
    return yms;
  }
}

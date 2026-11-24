/* 把数字读成英文：TTS 前统一转换，避免中文语音把数字读成中文 */
(function () {
  const ONES = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine",
    "ten", "eleven", "twelve", "thirteen", "fourteen", "fifteen", "sixteen", "seventeen",
    "eighteen", "nineteen"];
  const TENS = ["", "", "twenty", "thirty", "forty", "fifty", "sixty", "seventy", "eighty", "ninety"];
  const SCALE = ["", "thousand", "million", "billion"];

  function under1000(n) {
    let out = "";
    if (n >= 100) {
      out += ONES[Math.floor(n / 100)] + " hundred";
      n %= 100;
      if (n) out += " ";
    }
    if (n >= 20) {
      out += TENS[Math.floor(n / 10)];
      if (n % 10) out += "-" + ONES[n % 10];
    } else if (n > 0) {
      out += ONES[n];
    }
    return out;
  }

  function intWords(n) {
    if (n === 0) return "zero";
    let out = "";
    let scale = 0;
    while (n > 0) {
      const chunk = n % 1000;
      if (chunk) {
        const part = under1000(chunk) + (SCALE[scale] ? " " + SCALE[scale] : "");
        out = part + (out ? " " + out : "");
      }
      n = Math.floor(n / 1000);
      scale++;
    }
    return out;
  }

  function numberWords(raw) {
    let s = String(raw).replace(/,/g, "").trim();
    if (!s) return raw;
    let sign = "";
    if (s[0] === "-") { sign = "minus "; s = s.slice(1); }
    const parts = s.split(".");
    let out = sign + intWords(parseInt(parts[0] || "0", 10));
    if (parts.length > 1) {
      out += " point " + parts[1].split("").map(d => ONES[+d] || d).join(" ");
    }
    return out;
  }

  const ORD = { 1: "first", 2: "second", 3: "third", 4: "fourth", 5: "fifth", 6: "sixth",
    7: "seventh", 8: "eighth", 9: "ninth", 10: "tenth", 11: "eleventh", 12: "twelfth",
    13: "thirteenth", 14: "fourteenth", 15: "fifteenth", 16: "sixteenth", 17: "seventeenth",
    18: "eighteenth", 19: "nineteenth", 20: "twentieth", 21: "twenty-first", 22: "twenty-second",
    23: "twenty-third", 24: "twenty-fourth", 25: "twenty-fifth", 26: "twenty-sixth",
    27: "twenty-seventh", 28: "twenty-eighth", 29: "twenty-ninth", 30: "thirtieth", 31: "thirty-first" };

  function ordinalWords(n) { return ORD[n] || numberWords(n); }

  const MONTHS = "January|February|March|April|May|June|July|August|September|October|November|December";

  function speechText(input) {
    let t = String(input == null ? "" : input);
    if (!t) return t;

    // 金额：$35 / $2.95
    t = t.replace(/\$\s?([\d,]+(?:\.\d+)?)/g, (m, n) => numberWords(n) + (parseFloat(n.replace(/,/g, "")) === 1 ? " dollar" : " dollars"));

    // 百分比：8%
    t = t.replace(/(?<![\w.])([\d,]+(?:\.\d+)?)\s?%/g, (m, n) => numberWords(n) + " percent");

    // 日期：June 15 -> June fifteenth
    t = t.replace(new RegExp("\\b(" + MONTHS + ")\\s+(\\d{1,2})\\b", "gi"), (m, mo, d) => {
      const day = parseInt(d, 10);
      return mo + " " + (day >= 1 && day <= 31 ? ordinalWords(day) : numberWords(day));
    });

    // 序数词：15th / 1st
    t = t.replace(/(?<![\w.])(\d{1,2})(st|nd|rd|th)\b/gi, (m, n) => ordinalWords(parseInt(n, 10)));

    // 范围 + 单位：100–240V / 20-30 days
    t = t.replace(/(?<![\w.])([\d,]+(?:\.\d+)?)\s*(?:–|-|to)\s*([\d,]+(?:\.\d+)?)\s*(mAh|mm|cm|kg|kgs|ft|foot|feet|V|W|A|m|g)\b/gi,
      (m, a, b, unit) => numberWords(a) + " to " + numberWords(b) + " " + unitWord(unit));

    // 数字 + 单位：45W / 5,000 mAh / 20-foot
    t = t.replace(/(?<![\w.])([\d,]+(?:\.\d+)?)\s*(mAh|mm|cm|kg|kgs|ft|foot|feet|V|W|A|m|g)\b/gi,
      (m, n, unit) => numberWords(n) + " " + unitWord(unit));

    // 付款比例：30/70
    t = t.replace(/(?<![\w.])(\d{1,3})\s*\/\s*(\d{1,3})(?![\w.])/g,
      (m, a, b) => numberWords(a) + " " + numberWords(b));

    // 面积符号
    t = t.replace(/㎡/g, " square meters").replace(/m²/g, " square meters");

    // 常见代码/缩写里的数字
    t = t.replace(/\bQC\s?([\d.]+)/gi, (m, n) => "QC " + numberWords(n));
    t = t.replace(/\bQ([1-4])\b/g, (m, n) => "Q " + numberWords(n));
    t = t.replace(/\b8D\b/g, "eight D");
    t = t.replace(/\bUN\s?([\d.]+)/gi, (m, n) => "UN " + numberWords(n));
    t = t.replace(/\b([A-Z])(\d{4})-(\d{1,2})\b/g, (m, l, a, b) =>
      l + " " + a.split("").map(d => ONES[+d]).join(" ") + " " + b.split("").map(d => ONES[+d]).join(" "));

    // 普通数字
    t = t.replace(/(?<![\w.])([\d,]+(?:\.\d+)?)(?![\w])/g, (m, n) => numberWords(n));

    return t.replace(/\s+/g, " ").trim();
  }

  function unitWord(u) {
    const k = u.toLowerCase();
    if (k === "mah") return "milliamp hours";
    if (k === "mm") return "millimeters";
    if (k === "cm") return "centimeters";
    if (k === "kg" || k === "kgs") return "kilograms";
    if (k === "ft" || k === "foot" || k === "feet") return "feet";
    if (k === "v") return "volts";
    if (k === "w") return "watts";
    if (k === "a") return "amps";
    if (k === "m") return "meters";
    if (k === "g") return "grams";
    return u;
  }

  const api = { speechText, numberWords, intWords };
  if (typeof window !== "undefined") window.speechText = speechText;
  if (typeof module !== "undefined" && module.exports) module.exports = api;
})();

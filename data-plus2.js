/* 扩容：听力 45、口语 54 */

const EXTRA_LISTENING_3 = [
  {
    id: "l31", title: "数字与价格", level: "初级", band: 1, desc: "单价、数量价、降幅。",
    lines: [
      { sp: "Buyer", en: "What's the price for 5,000 pieces?", zh: "5000 件什么价？" },
      { sp: "You", en: "2.95 dollars per piece.", zh: "每件 2.95 美元。" },
      { sp: "Buyer", en: "And for 10,000?", zh: "一万件呢？" },
      { sp: "You", en: "2.85, about 3% lower.", zh: "2.85，大约低 3%。" },
    ],
    questions: [
      { q: "5000 件单价？", o: ["2.85", "2.95", "3.10"], a: 1, why: "2.95 per piece。" },
      { q: "一万件单价？", o: ["2.85", "2.95", "2.80"], a: 0, why: "2.85。" },
      { q: "降幅大约多少？", o: ["3%", "5%", "8%"], a: 0, why: "about 3% lower。" },
    ],
  },
  {
    id: "l32", title: "日期与交期", level: "初级", band: 1, desc: "25 天、6 月 15 日、周五定金。",
    lines: [
      { sp: "Buyer", en: "When can you ship?", zh: "什么时候能出货？" },
      { sp: "You", en: "25 days after the deposit.", zh: "定金后 25 天。" },
      { sp: "Buyer", en: "That's the 15th of June?", zh: "那就是 6 月 15 日？" },
      { sp: "You", en: "Yes, if we get the deposit by Friday.", zh: "对，如果周五前收到定金。" },
    ],
    questions: [
      { q: "交期多久？", o: ["15 天", "25 天", "35 天"], a: 1, why: "25 days。" },
      { q: "预计哪天出货？", o: ["6 月 5 日", "6 月 15 日", "6 月 25 日"], a: 1, why: "the 15th of June。" },
      { q: "前提是什么？", o: ["周五前收到定金", "客户来验厂", "包装确认"], a: 0, why: "deposit by Friday。" },
    ],
  },
  {
    id: "l33", title: "公司介绍", level: "初级", band: 1, desc: "10 年、3000㎡、120 人、认证。",
    lines: [
      { sp: "You", en: "We're a charger manufacturer with 10 years' experience.", zh: "我们是充电器制造商，做了十年。" },
      { sp: "Buyer", en: "How big is your factory?", zh: "工厂多大？" },
      { sp: "You", en: "3,000 square meters, with 120 workers.", zh: "3000 平方米，120 个工人。" },
      { sp: "Buyer", en: "Do you have certifications?", zh: "有认证吗？" },
    ],
    questions: [
      { q: "做了几年？", o: ["5 年", "10 年", "15 年"], a: 1, why: "10 years' experience。" },
      { q: "工厂多大？", o: ["1,000㎡", "3,000㎡", "5,000㎡"], a: 1, why: "3,000 square meters。" },
      { q: "对话里没提到哪个？", o: ["CE", "FCC", "UL"], a: 2, why: "原文只问认证，没有列具体证书。" },
    ],
  },
  {
    id: "l34", title: "产品规格", level: "初级", band: 1, desc: "45W、双 C 口、PPS、宽电压。",
    lines: [
      { sp: "Buyer", en: "What's the output of this charger?", zh: "这个充电器输出多少？" },
      { sp: "You", en: "45W, with two USB-C ports.", zh: "45W，两个 USB-C 口。" },
      { sp: "Buyer", en: "Does it support PPS?", zh: "支持 PPS 吗？" },
      { sp: "You", en: "Yes, and it works from 100 to 240 volts.", zh: "支持，而且 100 到 240V 都能用。" },
    ],
    questions: [
      { q: "输出功率？", o: ["30W", "45W", "65W"], a: 1, why: "45W。" },
      { q: "几个口？", o: ["1", "2", "3"], a: 1, why: "two USB-C ports。" },
      { q: "电压范围？", o: ["100–240V", "220V only", "110V only"], a: 0, why: "100 to 240 volts。" },
    ],
  },
  {
    id: "l35", title: "询盘邮件", level: "初级", band: 1, desc: "两万条、CE、目标价 2.80、周四前。",
    lines: [
      { sp: "You", en: "I received an inquiry from a German buyer.", zh: "我收到一个德国买家的询盘。" },
      { sp: "Buyer", en: "What do they need?", zh: "他们需要什么？" },
      { sp: "You", en: "20,000 USB-C cables, CE certified, target price 2.80.", zh: "两万条 USB-C 线，要 CE，目标价 2.80。" },
      { sp: "Buyer", en: "When do they need the quote?", zh: "什么时候要报价？" },
    ],
    questions: [
      { q: "要多少条？", o: ["2,000", "20,000", "200,000"], a: 1, why: "20,000 cables。" },
      { q: "目标价？", o: ["2.60", "2.80", "2.95"], a: 1, why: "target price 2.80。" },
      { q: "报价截止？", o: ["周二", "周四", "周五"], a: 1, why: "By Thursday。" },
    ],
  },
  {
    id: "l36", title: "付款条件", level: "中级", band: 2, desc: "30/70、货到付款、首单 20%。",
    lines: [
      { sp: "Buyer", en: "Can we pay 30/70 after delivery?", zh: "能货到后 30/70 吗？" },
      { sp: "You", en: "We usually do 30% deposit, 70% before shipment.", zh: "我们通常 30% 定金，70% 出货前。" },
      { sp: "Buyer", en: "What about the first order?", zh: "首单呢？" },
      { sp: "You", en: "We can accept 20% deposit for the first order.", zh: "首单可以接受 20% 定金。" },
    ],
    questions: [
      { q: "标准付款？", o: ["30/70 出货前", "货到付款", "100% 预付"], a: 0, why: "70% before shipment。" },
      { q: "客户想怎么付？", o: ["货到后付", "信用证", "分期"], a: 0, why: "after delivery。" },
      { q: "首单让步？", o: ["10% 定金", "20% 定金", "免定金"], a: 1, why: "20% deposit。" },
    ],
  },
  {
    id: "l37", title: "包装修改", level: "中级", band: 2, desc: "换蓝色、MOQ 3000、5 天打样。",
    lines: [
      { sp: "Buyer", en: "Can you change the box color to blue?", zh: "盒子能改成蓝色吗？" },
      { sp: "You", en: "Yes, but we need new artwork and a 3,000 MOQ.", zh: "可以，但需要新设计稿，起订 3000。" },
      { sp: "Buyer", en: "How long for the new proof?", zh: "新打样要多久？" },
      { sp: "You", en: "Five days after we get the file.", zh: "收到文件后五天。" },
    ],
    questions: [
      { q: "改成什么颜色？", o: ["黑色", "蓝色", "白色"], a: 1, why: "blue。" },
      { q: "起订量？", o: ["1,000", "3,000", "5,000"], a: 1, why: "3,000 MOQ。" },
      { q: "打样多久？", o: ["3 天", "5 天", "7 天"], a: 1, why: "Five days。" },
    ],
  },
  {
    id: "l38", title: "验货安排", level: "中级", band: 2, desc: "12 号、AQL 2.5、报告和金样。",
    lines: [
      { sp: "Buyer", en: "We'll send an inspector on the 12th.", zh: "我们 12 号派验货员。" },
      { sp: "You", en: "Noted. What standard will they use?", zh: "好的。用什么标准？" },
      { sp: "Buyer", en: "AQL 2.5, general inspection level II.", zh: "AQL 2.5，一般检验水平 II。" },
      { sp: "You", en: "I'll prepare the inspection report and the golden sample.", zh: "我准备检验报告和金样。" },
    ],
    questions: [
      { q: "验货日期？", o: ["10 号", "12 号", "15 号"], a: 1, why: "on the 12th。" },
      { q: "用什么标准？", o: ["AQL 1.0", "AQL 2.5", "AQL 4.0"], a: 1, why: "AQL 2.5。" },
      { q: "你要准备什么？", o: ["报告和金样", "合同", "发票"], a: 0, why: "inspection report and golden sample。" },
    ],
  },
  {
    id: "l39", title: "物流追踪", level: "中级", band: 2, desc: "船名、新加坡中转、28 号到港。",
    lines: [
      { sp: "You", en: "The shipment is on the vessel CSCL Star.", zh: "货在 CSCL Star 上。" },
      { sp: "Buyer", en: "Any update on the ETA?", zh: "预计到港有更新吗？" },
      { sp: "You", en: "It will transship in Singapore, ETA Hamburg on the 28th.", zh: "新加坡中转，28 号到汉堡。" },
      { sp: "Buyer", en: "Please send me the tracking link.", zh: "把追踪链接发我。" },
    ],
    questions: [
      { q: "船名？", o: ["CSCL Star", "MSC Anna", "Ever Green"], a: 0, why: "CSCL Star。" },
      { q: "在哪中转？", o: ["香港", "新加坡", "迪拜"], a: 1, why: "Singapore。" },
      { q: "预计到港？", o: ["18 号", "28 号", "8 号"], a: 1, why: "on the 28th。" },
    ],
  },
  {
    id: "l40", title: "客户投诉", level: "中级", band: 2, desc: "10 条不良、批号、48 小时。",
    lines: [
      { sp: "Buyer", en: "We found 10 defective cables in the last batch.", zh: "上一批有 10 条不良线。" },
      { sp: "You", en: "I'm sorry. Can you send the batch number and photos?", zh: "抱歉。能发批号和照片吗？" },
      { sp: "Buyer", en: "Sure. Batch B2025-03.", zh: "可以，批号 B2025-03。" },
      { sp: "You", en: "I'll check and reply within 48 hours.", zh: "我查一下，48 小时内回复。" },
    ],
    questions: [
      { q: "多少条不良？", o: ["5", "10", "20"], a: 1, why: "10 defective cables。" },
      { q: "批号？", o: ["B2025-02", "B2025-03", "B2025-04"], a: 1, why: "B2025-03。" },
      { q: "多久回复？", o: ["24 小时", "48 小时", "一周"], a: 1, why: "within 48 hours。" },
    ],
  },
  {
    id: "l41", title: "索赔谈判", level: "高级", band: 3, desc: "5% 降到 3% 或换货、空运周五。",
    lines: [
      { sp: "Buyer", en: "We want a 5% credit note for the defects.", zh: "不良品我们要 5% 抵扣。" },
      { sp: "You", en: "5% is too high. We can offer 3% or a replacement.", zh: "5% 太高。可以 3% 或换货。" },
      { sp: "Buyer", en: "We prefer the replacement, but we need it in two weeks.", zh: "我们想换货，但两周内要到。" },
      { sp: "You", en: "I can ship the replacement by air this Friday.", zh: "这周五可以空运补货。" },
    ],
    questions: [
      { q: "客户要多少？", o: ["3%", "5%", "10%"], a: 1, why: "5% credit note。" },
      { q: "你给什么方案？", o: ["3% 或换货", "只退款", "不处理"], a: 0, why: "3% or a replacement。" },
      { q: "补货怎么发？", o: ["海运", "空运", "快递"], a: 1, why: "by air this Friday。" },
    ],
  },
  {
    id: "l42", title: "独家代理续约", level: "高级", band: 3, desc: "续两年、年量三万、12 个月预测。",
    lines: [
      { sp: "Buyer", en: "We'd like to renew the exclusivity for two more years.", zh: "我们想续两年独家。" },
      { sp: "You", en: "What volume can you commit to?", zh: "你们能承诺多少量？" },
      { sp: "Buyer", en: "30,000 pieces a year.", zh: "一年三万件。" },
      { sp: "You", en: "Then we can renew, but we need a 12-month forecast.", zh: "那可以续，但需要 12 个月预测。" },
    ],
    questions: [
      { q: "续几年？", o: ["1 年", "2 年", "3 年"], a: 1, why: "two more years。" },
      { q: "年量多少？", o: ["20,000", "30,000", "50,000"], a: 1, why: "30,000 pieces a year。" },
      { q: "续约条件？", o: ["12 个月预测", "预付全款", "开新模具"], a: 0, why: "a 12-month forecast。" },
    ],
  },
  {
    id: "l43", title: "年度价格回顾", level: "高级", band: 3, desc: "铜涨 8%、提 3%、六个月协议。",
    lines: [
      { sp: "Buyer", en: "Copper is up 8%. Are you increasing the price?", zh: "铜涨了 8%，你们要涨价吗？" },
      { sp: "You", en: "We propose a 3% increase from July.", zh: "我们建议七月起涨 3%。" },
      { sp: "Buyer", en: "Can you hold it for six months?", zh: "能保持六个月吗？" },
      { sp: "You", en: "Yes, if we sign a six-month volume agreement.", zh: "可以，如果签六个月定量协议。" },
    ],
    questions: [
      { q: "铜涨了多少？", o: ["3%", "5%", "8%"], a: 2, why: "up 8%。" },
      { q: "你建议涨多少？", o: ["3%", "5%", "8%"], a: 0, why: "3% increase。" },
      { q: "条件是什么？", o: ["六个月定量协议", "全款", "独家"], a: 0, why: "six-month volume agreement。" },
    ],
  },
  {
    id: "l44", title: "工厂审核", level: "高级", band: 3, desc: "两个问题、CAPA、30 天关闭。",
    lines: [
      { sp: "Auditor", en: "We found two issues in the QC process.", zh: "QC 流程有两个问题。" },
      { sp: "You", en: "Thank you. We'll open a CAPA for both.", zh: "谢谢。两个都开 CAPA。" },
      { sp: "Auditor", en: "When can you close them?", zh: "什么时候能关闭？" },
      { sp: "You", en: "Within 30 days, with evidence and photos.", zh: "30 天内，附证据和照片。" },
    ],
    questions: [
      { q: "几个问题？", o: ["1", "2", "3"], a: 1, why: "two issues。" },
      { q: "怎么处理？", o: ["开 CAPA", "忽略", "换审核员"], a: 0, why: "open a CAPA。" },
      { q: "多久关闭？", o: ["7 天", "30 天", "90 天"], a: 1, why: "Within 30 days。" },
    ],
  },
  {
    id: "l45", title: "高层会议", level: "高级", band: 3, desc: "订单翻倍、20 天交期、周会。",
    lines: [
      { sp: "Buyer", en: "We plan to double our order next year.", zh: "我们明年计划翻倍。" },
      { sp: "You", en: "That's great. What support do you need?", zh: "很好。你们需要什么支持？" },
      { sp: "Buyer", en: "Better lead time and a dedicated account manager.", zh: "更好的交期和专属客户经理。" },
      { sp: "You", en: "We can offer 20-day lead time and a weekly call.", zh: "我们可以给 20 天交期和每周例会。" },
    ],
    questions: [
      { q: "订单计划？", o: ["减半", "翻倍", "不变"], a: 1, why: "double our order。" },
      { q: "客户要什么支持？", o: ["交期 + 客户经理", "折扣", "广告"], a: 0, why: "lead time and account manager。" },
      { q: "你给什么？", o: ["20 天 + 周会", "30 天 + 月会", "15 天 + 日报"], a: 0, why: "20-day lead time and a weekly call。" },
    ],
  },
];

const EXTRA_SPEAKING_3 = [
  {
    id: "s37", title: "数字与价格", tag: "报价", band: 1,
    prompt: "报两个数量价：5000 件 2.95，10000 件 2.85。",
    frames: ["The unit price is ___ for ___.", "For ___, we can do ___.", "That's about ___ lower."],
    model: "The unit price is 2.95 for 5,000 pieces. For 10,000, we can do 2.85. That's about 3% lower.",
    keywords: ["2.95", "5,000", "2.85", "10,000", "3%"],
  },
  {
    id: "s38", title: "日期与交期", tag: "交期", band: 1,
    prompt: "说清交期、预计出货日、前提条件。",
    frames: ["The lead time is ___ after ___.", "That means we ship on ___.", "We need ___ by ___."],
    model: "The lead time is 25 days after the deposit. That means we ship on June 15. We need the deposit by Friday.",
    keywords: ["25 days", "deposit", "june 15", "friday", "ship"],
  },
  {
    id: "s39", title: "一句话公司介绍", tag: "开场", band: 1,
    prompt: "用一句话说清：做什么、多久、规模。",
    frames: ["We are a ___ manufacturer with ___ years.", "Our factory covers ___.", "We have ___ workers."],
    model: "We are a charger manufacturer with 10 years' experience. Our factory covers 3,000 square meters and we have 120 workers.",
    keywords: ["manufacturer", "10 years", "3,000", "120", "workers"],
  },
  {
    id: "s40", title: "一句话产品介绍", tag: "产品", band: 1,
    prompt: "用一句话说清：功率、接口、认证。",
    frames: ["This is our ___ charger.", "It has ___ and supports ___.", "It's certified with ___."],
    model: "This is our 45W charger. It has two USB-C ports and supports PPS. It's certified with CE and FCC.",
    keywords: ["45w", "two", "usb-c", "pps", "ce"],
  },
  {
    id: "s41", title: "回复询盘", tag: "询盘", band: 1,
    prompt: "回复询盘：确认数量、报价、附件、截止时间。",
    frames: ["Thanks for your inquiry about ___.", "For ___, our price is ___.", "I'll send ___ by ___."],
    model: "Thanks for your inquiry about the USB-C cable. For 20,000 pieces, our price is 2.85. I'll send the spec sheet and PI by Thursday.",
    keywords: ["inquiry", "20,000", "2.85", "spec", "thursday"],
  },
  {
    id: "s42", title: "样品跟进", tag: "样品", band: 1,
    prompt: "样品寄出一周：问收到没、测试如何、要不要报价。",
    frames: ["Just checking if you received ___.", "How did the ___ work?", "Shall I send ___?"],
    model: "Just checking if you received the samples. How did the 45W charger work? Shall I send you the price for 5,000 pieces?",
    keywords: ["received", "samples", "45w", "price", "5,000"],
  },
  {
    id: "s43", title: "付款谈判", tag: "付款", band: 2,
    prompt: "客户要货到付款；你给 30/70 和首单 20% 两个方案。",
    frames: ["Our standard terms are ___.", "For the first order, ___.", "Which option works better for you?"],
    model: "Our standard terms are 30% deposit and 70% before shipment. For the first order, we can accept 20% deposit. Which option works better for you?",
    keywords: ["30%", "70%", "first order", "20%", "option"],
  },
  {
    id: "s44", title: "包装修改", tag: "包装", band: 2,
    prompt: "客户要换蓝色盒子；说清设计稿、MOQ、打样时间。",
    frames: ["We can change ___ to ___.", "We need ___ and a ___ MOQ.", "The proof takes ___."],
    model: "We can change the box to blue. We need new artwork and a 3,000 MOQ. The proof takes five days after we get the file.",
    keywords: ["blue", "artwork", "3,000", "proof", "five days"],
  },
  {
    id: "s45", title: "验货安排", tag: "验货", band: 2,
    prompt: "确认验货日期、标准、你准备什么。",
    frames: ["We've noted ___ for the inspection.", "Which standard will you use?", "I'll prepare ___."],
    model: "We've noted the 12th for the inspection. Which standard will you use — AQL 2.5? I'll prepare the inspection report and the golden sample.",
    keywords: ["12th", "aql 2.5", "report", "golden sample", "prepare"],
  },
  {
    id: "s46", title: "物流追踪", tag: "物流", band: 2,
    prompt: "回复客户：船名、中转、ETA、追踪链接。",
    frames: ["The shipment is on ___.", "It will transship in ___.", "The ETA is ___."],
    model: "The shipment is on the CSCL Star. It will transship in Singapore, and the ETA is Hamburg on the 28th. I'll send you the tracking link.",
    keywords: ["csccl", "singapore", "hamburg", "28th", "tracking"],
  },
  {
    id: "s47", title: "投诉回应", tag: "售后", band: 2,
    prompt: "10 条不良：道歉、要批号和照片、给回复时间。",
    frames: ["I'm sorry to hear ___.", "Can you send me ___?", "I'll come back within ___."],
    model: "I'm sorry to hear about the 10 defective cables. Can you send me the batch number and photos? I'll come back within 48 hours.",
    keywords: ["sorry", "defective", "batch", "photos", "48 hours"],
  },
  {
    id: "s48", title: "交期协商", tag: "交期", band: 2,
    prompt: "客户要提前 5 天；你给两个方案：部分空运或分批。",
    frames: ["Five days earlier is tight because ___.", "I can either ___ or ___.", "Which do you prefer?"],
    model: "Five days earlier is tight because of the QC test. I can either air-freight 3,000 pieces or split the order into two shipments. Which do you prefer?",
    keywords: ["five days", "qc", "air", "split", "prefer"],
  },
  {
    id: "s49", title: "索赔谈判", tag: "谈判", band: 3,
    prompt: "客户要 5% 抵扣；你给 3% 或换货，并给时间。",
    frames: ["I understand, but ___ is too high.", "We can offer ___ or ___.", "If you prefer ___, I can ___ by ___."],
    model: "I understand, but 5% is too high. We can offer 3% or a replacement. If you prefer the replacement, I can ship by air this Friday.",
    keywords: ["5%", "3%", "replacement", "air", "friday"],
  },
  {
    id: "s50", title: "独家代理", tag: "谈判", band: 3,
    prompt: "续两年独家：年量、预测、区域限制。",
    frames: ["We can renew ___ if ___.", "We need a ___ forecast.", "The exclusivity covers ___ only."],
    model: "We can renew the exclusivity for two years if you commit to 30,000 pieces a year. We need a 12-month forecast, and it covers Spain only.",
    keywords: ["two years", "30,000", "forecast", "spain", "exclusivity"],
  },
  {
    id: "s51", title: "年度回顾", tag: "会议", band: 3,
    prompt: "复盘一年：出货量、不良率、问题、明年计划。",
    frames: ["This year we shipped ___ with a ___ defect rate.", "The main issue was ___.", "Next year we plan to ___."],
    model: "This year we shipped 120,000 units with a 0.8% defect rate. The main issue was the Q3 delay. Next year we plan to add a second production line.",
    keywords: ["120,000", "0.8%", "q3", "delay", "second line"],
  },
  {
    id: "s52", title: "工厂审核", tag: "审核", band: 3,
    prompt: "审核发现两个问题：开 CAPA、给证据、30 天关闭。",
    frames: ["Thank you for the findings.", "We'll open a CAPA for ___.", "We'll close them within ___ with ___."],
    model: "Thank you for the findings. We'll open a CAPA for both issues. We'll close them within 30 days with evidence and photos.",
    keywords: ["capa", "both", "30 days", "evidence", "photos"],
  },
  {
    id: "s53", title: "高层会议", tag: "会议", band: 3,
    prompt: "客户订单翻倍：需要什么支持、你能给什么。",
    frames: ["We're glad to hear ___.", "What support do you need — ___ or ___?", "We can offer ___ and ___."],
    model: "We're glad to hear you plan to double the order. What support do you need — lead time or a dedicated manager? We can offer 20-day lead time and a weekly call.",
    keywords: ["double", "support", "20-day", "weekly", "call"],
  },
  {
    id: "s54", title: "完整客户电话", tag: "实战", band: 3,
    prompt: "两分钟：更新、问题、方案、下一步、闲聊收尾。",
    frames: ["Thanks for jumping on.", "Where we are is ___.", "What I need from you is ___.", "I'll confirm by ___."],
    model: "Thanks for jumping on. Where we are is: production is on track, but the QC re-test pushed us back three days. I can air-freight 3,000 this week. What I need from you is a yes on the new date. I'll confirm in writing by Thursday. Does that work for you?",
    keywords: ["where we are", "three days", "air", "new date", "thursday"],
  },
];

LISTENING.push(...EXTRA_LISTENING_3);
SPEAKING.push(...EXTRA_SPEAKING_3);

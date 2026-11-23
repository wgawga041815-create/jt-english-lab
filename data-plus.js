/* 扩展：语法 16、听力 30、口语 36 */

const EXTRA_GRAMMAR = [
  {
    id: "g11", title: "一般将来时：will / be going to", sub: "明天、下周、下个月要发生的事",
    rule: "will + 动词原形；be going to + 动词原形。will 偏临时决定/承诺，be going to 偏计划/预测。",
    examples: [
      { en: "We will ship on Friday.", zh: "我们周五出货。" },
      { en: "The price is going to increase next month.", zh: "下个月要涨价。" },
      { en: "I'm going to visit the factory next week.", zh: "我下周要去工厂。" },
    ],
    questions: [
      { q: "We ___ ship on Friday.", o: ["will", "are", "will be"], a: 0, why: "will + 原形。" },
      { q: "The price ___ increase next month.", o: ["is going to", "is", "going to"], a: 0, why: "be going to + 原形。" },
      { q: "I ___ visit the factory next week.", o: ["am going to", "will to", "going"], a: 0, why: "be going to。" },
      { q: "否定：We ___ be ready by Friday.", o: ["won't", "don't", "aren't"], a: 0, why: "will not = won't。" },
      { q: "疑问：___ you send the PI today?", o: ["Will", "Do", "Are"], a: 0, why: "将来时疑问用 Will。" },
      { q: "明天会下雨。", o: ["It will rain tomorrow.", "It will rains tomorrow.", "It is rain tomorrow."], a: 0, why: "will + 原形。" },
    ],
  },
  {
    id: "g12", title: "疑问句：Wh- 和 Yes/No", sub: "问价格、问交期、问数量",
    rule: "Wh- + 助动词 + 主语 + 动词原形；Yes/No 句把 do/does/did/be/have 提前。",
    examples: [
      { en: "What's your MOQ?", zh: "你们的起订量是多少？" },
      { en: "Do you accept T/T?", zh: "你们接受电汇吗？" },
      { en: "When will the goods be ready?", zh: "货什么时候好？" },
    ],
    questions: [
      { q: "___ is your MOQ?", o: ["What", "How", "Which"], a: 0, why: "问“是什么”用 What。" },
      { q: "___ you accept PayPal?", o: ["Do", "Are", "Will"], a: 0, why: "实义动词用 Do。" },
      { q: "When ___ the goods be ready?", o: ["will", "are", "do"], a: 0, why: "将来时用 will。" },
      { q: "___ does the sample cost?", o: ["How much", "How many", "What"], a: 0, why: "问价格用 How much。" },
      { q: "___ are you based?", o: ["Where", "What", "Who"], a: 0, why: "问地点用 Where。" },
      { q: "你们做 OEM 吗？", o: ["Do you do OEM?", "Are you do OEM?", "You do OEM?"], a: 0, why: "Do + 主语 + 原形。" },
    ],
  },
  {
    id: "g13", title: "祈使句与礼貌请求", sub: "请确认、请发我、请不要",
    rule: "动词原形开头；加 please 更礼貌；Could you…? 是最常用的商务请求。",
    examples: [
      { en: "Please confirm by Friday.", zh: "请在周五前确认。" },
      { en: "Send me the artwork.", zh: "把设计稿发我。" },
      { en: "Could you check the price?", zh: "你能核一下价格吗？" },
    ],
    questions: [
      { q: "___ confirm the quantity by Friday.", o: ["Please", "You please", "To"], a: 0, why: "祈使句用原形，Please 放句首。" },
      { q: "___ send me the spec sheet.", o: ["Could you", "Could you to", "Are you"], a: 0, why: "Could you + 原形。" },
      { q: "Don't ___ the deposit yet.", o: ["pay", "paying", "to pay"], a: 0, why: "Don't + 原形。" },
      { q: "___ check the packing list.", o: ["Please", "pleases", "To"], a: 0, why: "Please + 原形。" },
      { q: "Let's ___ the meeting at 3.", o: ["start", "starting", "to start"], a: 0, why: "Let's + 原形。" },
      { q: "请回复邮件。", o: ["Please reply to the email.", "Please replies to the email.", "Please to reply."], a: 0, why: "祈使句用原形。" },
    ],
  },
  {
    id: "g14", title: "There be：有什么", sub: "有问题、有库存、有折扣",
    rule: "There is + 单数/不可数；There are + 复数。疑问把 is/are 提前。",
    examples: [
      { en: "There is a problem with the cable.", zh: "线材有点问题。" },
      { en: "There are 20 cartons in the container.", zh: "柜里有 20 箱。" },
      { en: "Is there a discount?", zh: "有折扣吗？" },
    ],
    questions: [
      { q: "___ a problem with the sample.", o: ["There is", "There are", "It is"], a: 0, why: "a problem 单数。" },
      { q: "___ 20 cartons in the container.", o: ["There are", "There is", "They are"], a: 0, why: "20 cartons 复数。" },
      { q: "___ any discount for 10,000 pieces?", o: ["Is there", "Are there", "There is"], a: 0, why: "discount 不可数/单数。" },
      { q: "There ___ two models in stock.", o: ["are", "is", "be"], a: 0, why: "two models 复数。" },
      { q: "There ___ no extra charge.", o: ["is", "are", "have"], a: 0, why: "charge 单数。" },
      { q: "有三个颜色。", o: ["There are three colors.", "There is three colors.", "It has three colors."], a: 0, why: "three colors 复数。" },
    ],
  },
  {
    id: "g15", title: "some / any / much / many", sub: "一些、多少、多少钱",
    rule: "some 用于肯定句，any 用于否定/疑问；many + 可数，much + 不可数。",
    examples: [
      { en: "We need some samples.", zh: "我们需要一些样品。" },
      { en: "Do you have any stock?", zh: "你们有库存吗？" },
      { en: "How many cartons? How much is it?", zh: "多少箱？多少钱？" },
    ],
    questions: [
      { q: "We need ___ samples.", o: ["some", "any", "much"], a: 0, why: "肯定句用 some。" },
      { q: "Do you have ___ stock?", o: ["any", "some", "many"], a: 0, why: "疑问句用 any。" },
      { q: "How ___ cartons do you need?", o: ["many", "much", "any"], a: 0, why: "cartons 可数用 many。" },
      { q: "How ___ is the unit price?", o: ["much", "many", "some"], a: 0, why: "问价格用 how much。" },
      { q: "There isn't ___ time.", o: ["much", "many", "some"], a: 0, why: "time 不可数。" },
      { q: "你需要多少数量？", o: ["How many pieces do you need?", "How much pieces do you need?", "How many piece do you need?"], a: 0, why: "pieces 可数复数。" },
    ],
  },
  {
    id: "g16", title: "频度副词：always / usually / often / never", sub: "说清楚“多久一次”",
    rule: "always > usually > often > sometimes > rarely > never。放在实义动词前、be 动词后。",
    examples: [
      { en: "We usually ship within 25 days.", zh: "我们通常 25 天内出货。" },
      { en: "She is always available on WhatsApp.", zh: "她 WhatsApp 一直都在。" },
      { en: "I never promise a date I can't keep.", zh: "我从不承诺做不到的日期。" },
    ],
    questions: [
      { q: "We ___ ship within 25 days.", o: ["usually", "usual", "are usually"], a: 0, why: "实义动词前用 usually。" },
      { q: "She is ___ available on WhatsApp.", o: ["always", "always is", "usual"], a: 0, why: "be 动词后用 always。" },
      { q: "I ___ promise a date I can't keep.", o: ["never", "not never", "no"], a: 0, why: "never 表示从不。" },
      { q: "___ do you visit the factory?", o: ["How often", "How many", "How much"], a: 0, why: "问频率用 How often。" },
      { q: "He ___ checks the QC report.", o: ["often", "often is", "is often check"], a: 0, why: "实义动词前用 often。" },
      { q: "我们很少空运。", o: ["We rarely ship by air.", "We rare ship by air.", "We are rarely ship by air."], a: 0, why: "rarely + 原形。" },
    ],
  },
];

const EXTRA_LISTENING_2 = [
  {
    id: "l22", title: "机场接机", level: "初级", band: 1, desc: "航班、车程、路上想停一下。",
    lines: [
      { sp: "You", en: "Welcome to Shenzhen. How was your flight?", zh: "欢迎来深圳。航班怎么样？" },
      { sp: "Buyer", en: "Long, but fine. Thanks for picking me up.", zh: "挺久的，但还行。谢谢来接我。" },
      { sp: "You", en: "No problem. The hotel is about 40 minutes from here.", zh: "不客气。酒店离这儿大约 40 分钟。" },
      { sp: "Buyer", en: "Great. Can we stop for a coffee on the way?", zh: "好。路上能停一下买杯咖啡吗？" },
    ],
    questions: [
      { q: "航班怎么样？", o: ["很久但还行", "取消了", "晚点三小时"], a: 0, why: "Long, but fine。" },
      { q: "酒店多远？", o: ["14 分钟", "40 分钟", "4 小时"], a: 1, why: "about 40 minutes。" },
      { q: "路上想做什么？", o: ["买咖啡", "吃饭", "加油"], a: 0, why: "stop for a coffee。" },
    ],
  },
  {
    id: "l23", title: "酒店入住", level: "初级", band: 1, desc: "几晚、护照、早餐时间。",
    lines: [
      { sp: "You", en: "I've booked a room for three nights.", zh: "我订了三晚。" },
      { sp: "Reception", en: "May I see your passport, please?", zh: "请出示护照。" },
      { sp: "You", en: "Here you are. Is breakfast included?", zh: "给你。含早餐吗？" },
      { sp: "Reception", en: "Yes, until 10 a.m. on the second floor.", zh: "含，二楼，到上午十点。" },
    ],
    questions: [
      { q: "住几晚？", o: ["2", "3", "4"], a: 1, why: "three nights。" },
      { q: "前台要什么？", o: ["护照", "名片", "房卡"], a: 0, why: "passport。" },
      { q: "早餐到几点？", o: ["9 点", "10 点", "11 点"], a: 1, why: "until 10 a.m。" },
    ],
  },
  {
    id: "l24", title: "餐厅点餐", level: "初级", band: 1, desc: "今日特餐、主食、点单。",
    lines: [
      { sp: "Waiter", en: "Are you ready to order?", zh: "可以点餐了吗？" },
      { sp: "You", en: "Yes. What's today's special?", zh: "可以。今天有什么特餐？" },
      { sp: "Waiter", en: "Steamed fish with ginger and scallion.", zh: "姜葱蒸鱼。" },
      { sp: "You", en: "We'll take that, and two bowls of rice.", zh: "就要这个，再加两碗米饭。" },
    ],
    questions: [
      { q: "点了什么主菜？", o: ["蒸鱼", "炒饭", "面条"], a: 0, why: "steamed fish。" },
      { q: "加了几碗米饭？", o: ["1", "2", "3"], a: 1, why: "two bowls of rice。" },
      { q: "这更像哪类餐厅？", o: ["中餐", "西餐", "快餐"], a: 0, why: "姜葱蒸鱼、米饭。" },
    ],
  },
  {
    id: "l25", title: "会议排期", level: "中级", band: 2, desc: "改到周五、时差、谁发邀请。",
    lines: [
      { sp: "You", en: "Can we move the call to Thursday?", zh: "电话能改到周四吗？" },
      { sp: "Buyer", en: "Thursday is tight. What about Friday morning?", zh: "周四很紧。周五上午呢？" },
      { sp: "You", en: "Friday works. 9 a.m. your time, 3 p.m. my time.", zh: "周五可以。你那边九点，我这边三点。" },
      { sp: "Buyer", en: "Perfect. I'll send the invite.", zh: "好，我发邀请。" },
    ],
    questions: [
      { q: "最后定在什么时候？", o: ["周四", "周五上午", "周一"], a: 1, why: "Friday morning。" },
      { q: "时差是几小时？", o: ["5", "6", "7"], a: 1, why: "9 点 vs 3 点。" },
      { q: "谁发邀请？", o: ["你", "买家", "助理"], a: 1, why: "I'll send the invite。" },
    ],
  },
  {
    id: "l26", title: "样品费", level: "中级", band: 2, desc: "样品免费、快递 35 美元、首单抵扣。",
    lines: [
      { sp: "Buyer", en: "How much is the sample?", zh: "样品多少钱？" },
      { sp: "You", en: "The sample is free, but the courier is 35 dollars.", zh: "样品免费，但快递 35 美元。" },
      { sp: "Buyer", en: "Can you deduct it from the first order?", zh: "能在首单里扣掉吗？" },
      { sp: "You", en: "Yes, we can credit it back.", zh: "可以，我们抵扣回去。" },
    ],
    questions: [
      { q: "样品费？", o: ["免费", "35 美元", "50 美元"], a: 0, why: "The sample is free。" },
      { q: "快递多少？", o: ["25", "35", "45"], a: 1, why: "35 dollars。" },
      { q: "首单怎么处理？", o: ["抵扣", "再收一次", "不退"], a: 0, why: "credit it back。" },
    ],
  },
  {
    id: "l27", title: "包装打样", level: "中级", band: 2, desc: "要 AI/PDF、电子稿 3 天、实物样 7 天。",
    lines: [
      { sp: "Buyer", en: "Can you make a packaging proof?", zh: "能做包装打样吗？" },
      { sp: "You", en: "Yes. We need your artwork in AI or PDF.", zh: "可以。需要 AI 或 PDF 的设计稿。" },
      { sp: "Buyer", en: "How long does it take?", zh: "要多久？" },
      { sp: "You", en: "Three days for the digital proof, seven for the physical sample.", zh: "电子稿 3 天，实物样 7 天。" },
    ],
    questions: [
      { q: "要什么格式？", o: ["AI 或 PDF", "Word", "JPG"], a: 0, why: "AI or PDF。" },
      { q: "电子稿多久？", o: ["3 天", "7 天", "10 天"], a: 0, why: "Three days。" },
      { q: "实物样多久？", o: ["3 天", "7 天", "14 天"], a: 1, why: "seven for the physical sample。" },
    ],
  },
  {
    id: "l28", title: "汇率调价", level: "高级", band: 3, desc: "报价 30 天有效、之后看汇率和铜价。",
    lines: [
      { sp: "Buyer", en: "The exchange rate moved. Are you changing the price?", zh: "汇率变了，你们要调价吗？" },
      { sp: "You", en: "The quote is valid for 30 days, so no change this month.", zh: "报价 30 天有效，这个月不调。" },
      { sp: "Buyer", en: "And after that?", zh: "那之后呢？" },
      { sp: "You", en: "We'll review the price against the rate and copper cost.", zh: "我们会结合汇率和铜价重新评估。" },
    ],
    questions: [
      { q: "这个月涨价吗？", o: ["涨", "不涨", "看数量"], a: 1, why: "no change this month。" },
      { q: "报价有效期？", o: ["15 天", "30 天", "60 天"], a: 1, why: "valid for 30 days。" },
      { q: "之后看什么？", o: ["汇率和铜价", "运费", "人工"], a: 0, why: "the rate and copper cost。" },
    ],
  },
  {
    id: "l29", title: "验货不合格", level: "高级", band: 3, desc: "跌落测试失败、批号、返工重测。",
    lines: [
      { sp: "Inspector", en: "The drop test failed on three units.", zh: "跌落测试有三个不合格。" },
      { sp: "You", en: "Can you show me which batch?", zh: "能告诉我是哪个批号吗？" },
      { sp: "Inspector", en: "Batch B2024-12. The housing cracked.", zh: "批号 B2024-12，外壳裂了。" },
      { sp: "You", en: "Understood. We'll rework the batch and re-test before shipment.", zh: "明白。这批返工，出货前重测。" },
    ],
    questions: [
      { q: "什么测试失败？", o: ["跌落测试", "盐雾测试", "老化测试"], a: 0, why: "drop test。" },
      { q: "哪个批号？", o: ["B2024-11", "B2024-12", "B2024-13"], a: 1, why: "Batch B2024-12。" },
      { q: "怎么处理？", o: ["返工并重测", "直接出货", "报废"], a: 0, why: "rework and re-test。" },
    ],
  },
  {
    id: "l30", title: "客户来访行程", level: "高级", band: 3, desc: "工厂、QC、午餐，加一场工程师会议。",
    lines: [
      { sp: "You", en: "Here's the plan: factory at 9, QC room at 10:30, lunch at 12.", zh: "行程是：9 点工厂，10:30 QC 室，12 点午餐。" },
      { sp: "Buyer", en: "Can we add a meeting with your engineer?", zh: "能加一场和你们工程师的会吗？" },
      { sp: "You", en: "Sure. I'll move lunch to 12:30 and add 30 minutes.", zh: "可以。午餐改到 12:30，加 30 分钟。" },
      { sp: "Buyer", en: "Perfect. Please send it to my colleague too.", zh: "好，也发给我同事。" },
    ],
    questions: [
      { q: "几点到工厂？", o: ["8 点", "9 点", "10:30"], a: 1, why: "factory at 9。" },
      { q: "想加什么？", o: ["工程师会议", "晚餐", "参观仓库"], a: 0, why: "meeting with your engineer。" },
      { q: "午餐改到几点？", o: ["12:00", "12:30", "13:00"], a: 1, why: "move lunch to 12:30。" },
    ],
  },
];

const EXTRA_SPEAKING_2 = [
  {
    id: "s25", title: "酒店入住", tag: "出差", band: 1,
    prompt: "到酒店办入住：报预订、递护照、问早餐。",
    frames: ["I've booked a room under ___.", "Here's my ___.", "Is ___ included?"],
    model: "Hi, I've booked a room for three nights under the name Wang. Here's my passport. Is breakfast included?",
    keywords: ["booked", "nights", "passport", "breakfast", "included"],
  },
  {
    id: "s26", title: "餐厅点餐", tag: "日常", band: 1,
    prompt: "点菜：问今日特餐、点一个主菜、加主食。",
    frames: ["What's today's ___?", "I'll take ___.", "Could we have ___?"],
    model: "What's today's special? I'll take the steamed fish, and could we have two bowls of rice?",
    keywords: ["special", "steamed fish", "two", "rice", "please"],
  },
  {
    id: "s27", title: "自我介绍", tag: "开场", band: 1,
    prompt: "30 秒：名字、公司、负责什么、一句期待。",
    frames: ["I'm ___ from ___.", "I look after ___.", "I'm looking forward to ___."],
    model: "I'm Li Wei from Juntongda Electronics. I look after OEM clients in Europe. I'm looking forward to working with you.",
    keywords: ["juntongda", "oem", "europe", "looking forward", "working"],
  },
  {
    id: "s28", title: "电话留言", tag: "电话", band: 1,
    prompt: "对方不在：报名字、说事、留回电时间。",
    frames: ["This is ___ from ___.", "I'm calling about ___.", "Could you call me back at ___?"],
    model: "This is Li Wei from Juntongda. I'm calling about the sample order. Could you call me back before 5 p.m.?",
    keywords: ["juntongda", "sample order", "call back", "5", "p.m."],
  },
  {
    id: "s29", title: "会议排期", tag: "会议", band: 2,
    prompt: "改会议：给两个时间、确认时差、谁发邀请。",
    frames: ["Can we move the call to ___?", "___ works for me.", "That's ___ your time."],
    model: "Can we move the call to Friday? Friday 9 a.m. your time works for me — that's 3 p.m. my time. I'll send the invite.",
    keywords: ["friday", "9", "3", "time", "invite"],
  },
  {
    id: "s30", title: "样品费", tag: "样品", band: 2,
    prompt: "样品免费、快递 35 美元、首单抵扣。",
    frames: ["The sample is ___, but ___.", "The courier is ___.", "We can ___ it from ___."],
    model: "The sample is free, but the courier is 35 dollars. We can credit it back from your first order.",
    keywords: ["free", "courier", "35", "credit", "first order"],
  },
  {
    id: "s31", title: "包装打样", tag: "包装", band: 2,
    prompt: "要设计稿、电子稿 3 天、实物样 7 天。",
    frames: ["We need your artwork in ___.", "The digital proof takes ___.", "The physical sample takes ___."],
    model: "We need your artwork in AI or PDF. The digital proof takes three days, and the physical sample takes seven.",
    keywords: ["artwork", "ai", "pdf", "three days", "seven"],
  },
  {
    id: "s32", title: "验货陪同", tag: "验厂", band: 2,
    prompt: "陪客户验货：介绍流程、说明抽样、回答疑问。",
    frames: ["We'll start with ___.", "We check ___ of every batch.", "Do you have any questions about ___?"],
    model: "We'll start with the incoming materials, then the assembly line. We check 10% of every batch. Do you have any questions about the process?",
    keywords: ["incoming", "assembly", "10%", "batch", "questions"],
  },
  {
    id: "s33", title: "汇率调价", tag: "谈判", band: 3,
    prompt: "汇率波动：说明有效期、之后怎么评估、给客户确定性。",
    frames: ["The quote is valid for ___.", "After that, we'll review ___ against ___.", "I'll give you ___ notice."],
    model: "The quote is valid for 30 days. After that, we'll review the price against the exchange rate and copper cost. I'll give you two weeks' notice before any change.",
    keywords: ["30 days", "exchange rate", "copper", "two weeks", "notice"],
  },
  {
    id: "s34", title: "验货不合格", tag: "售后", band: 3,
    prompt: "跌落测试失败：确认批号、给返工方案、承诺重测。",
    frames: ["Can you confirm the ___?", "We'll ___ and ___.", "I'll send you ___ by ___."],
    model: "Can you confirm the batch number? We'll rework the batch and re-test every unit before shipment. I'll send you the inspection report by Friday.",
    keywords: ["batch number", "rework", "re-test", "inspection report", "friday"],
  },
  {
    id: "s35", title: "客户来访", tag: "接待", band: 3,
    prompt: "客户来访：给行程、加一场会、确认午餐和交通。",
    frames: ["Here's the plan: ___ at ___.", "I can add ___ at ___.", "Shall I send it to ___?"],
    model: "Here's the plan: factory at 9, QC room at 10:30, and lunch at 12. I can add a meeting with our engineer at 11. Shall I send it to your colleague too?",
    keywords: ["factory", "9", "qc", "engineer", "colleague"],
  },
  {
    id: "s36", title: "年度复盘", tag: "会议", band: 3,
    prompt: "和客户复盘一年：成绩、问题、明年计划。",
    frames: ["This year we shipped ___.", "The main issue was ___.", "Next year we plan to ___."],
    model: "This year we shipped 120,000 units with a 0.8% defect rate. The main issue was the delay in Q3. Next year we plan to add a second production line.",
    keywords: ["120,000", "0.8%", "delay", "q3", "second line"],
  },
];

GRAMMAR.push(...EXTRA_GRAMMAR);
LISTENING.push(...EXTRA_LISTENING_2);
SPEAKING.push(...EXTRA_SPEAKING_2);

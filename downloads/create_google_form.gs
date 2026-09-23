/** Create a ten-section form. It stays closed until the owner enables responses. */
function createLearningCheckForm() {
  const spec = {
  "sections": [
    "第一部分 参与说明",
    "第二部分 你怎么拿到答案",
    "第三部分 看完解答后的做法",
    "第四部分 一道例题（请先读完，下一页会用到）",
    "第五部分 它是哪一类",
    "第六部分 估计自己的把握",
    "第七部分 请独立完成（建议在 3 分钟内作答）",
    "第八部分 揭晓与回看",
    "第九部分 哪一步可以交给 AI",
    "第十部分 关于你"
  ],
  "questions": [
    {
      "number": 1,
      "title": "这份问卷研究你看完作业解答后的做法，全程约 8 分钟，包括两道独立完成的数学题。不会做可以留空，不影响参与。问卷不收集姓名、学校、班级或联系方式。你可以跳过非必答问题，或随时退出。未满 18 岁需要先取得监护人同意。",
      "kind": "备注说明",
      "options": [],
      "section": 0
    },
    {
      "number": 2,
      "title": "你的年龄段是",
      "kind": "单选题",
      "options": [
        "13–15 岁",
        "16–18 岁",
        "19–22 岁",
        "23 岁及以上"
      ],
      "section": 0
    },
    {
      "number": 3,
      "title": "你是否同意参加本次研究？未满 18 岁还需要取得监护人同意。",
      "kind": "单选题",
      "options": [
        "我未满 18 岁，已获监护人同意，也愿意参加",
        "我已满 18 岁，同意参加",
        "不同意，或未取得所需的监护人同意（结束作答）"
      ],
      "section": 0
    },
    {
      "number": 4,
      "title": "你现在的身份是",
      "kind": "单选题",
      "options": [
        "初中在读",
        "高中在读",
        "大学在读（本科/专科）",
        "已工作或其他"
      ],
      "section": 0
    },
    {
      "number": 5,
      "title": "你最近一次系统地\"写作业 / 备考\"是在",
      "kind": "单选题",
      "options": [
        "现在正在进行",
        "一年以内",
        "一到三年以前",
        "三年以上"
      ],
      "section": 0
    },
    {
      "number": 6,
      "title": "遇到不会做的题时，你用过下面哪些方式拿到答案或解析？（可多选）",
      "kind": "多选题",
      "options": [
        "拍照搜题类 App（小猿搜题、作业帮、快对、Photomath、Gauth 等）",
        "通用 AI 对话（豆包、DeepSeek、ChatGPT、千问/夸克等）",
        "学习类 AI（豆包爱学、小猿 AI、Khanmigo 等）",
        "教辅答案页 / 扫码查整本答案",
        "问同学或家长",
        "问老师",
        "以上都没有"
      ],
      "section": 1
    },
    {
      "number": 7,
      "title": "过去一个月，你用 AI 或拍照搜题拿答案的频率大约是",
      "kind": "单选题",
      "options": [
        "几乎每天",
        "每周几次",
        "每月几次",
        "更少",
        "没用过"
      ],
      "section": 1
    },
    {
      "number": 8,
      "title": "你最常用来拿答案的是哪一个？（只选一个）",
      "kind": "单选题",
      "options": [
        "拍照搜题类 App",
        "通用 AI 对话（豆包 / DeepSeek / ChatGPT 等）",
        "学习类 AI",
        "教辅答案 / 扫码",
        "同学、家长或老师",
        "没用过"
      ],
      "section": 1
    },
    {
      "number": 9,
      "title": "拿到答案之前，你通常会自己先试多久？",
      "kind": "单选题",
      "options": [
        "基本不试，直接搜",
        "试 1 分钟以内",
        "试 1–5 分钟",
        "试 5 分钟以上",
        "看题目难度决定"
      ],
      "section": 1
    },
    {
      "number": 10,
      "title": "回想你最近一次用 AI 或搜题拿到一道题的答案。答案出现之后的一两分钟里，你做了下面哪些事？（可多选，尽量按真实情况）",
      "kind": "多选题",
      "options": [
        "只看了最终答案，抄上去",
        "把解析从头到尾读了一遍",
        "读到看懂为止就停了",
        "自己重新在纸上把它做了一遍",
        "合上手机试着自己再想一遍",
        "接着追问 AI（为什么这么做 / 换一种方法）",
        "找了一道同类题再做一次",
        "把它收进错题本",
        "截图 / 保存了就走了",
        "其他"
      ],
      "section": 2
    },
    {
      "number": 11,
      "title": "如果只能选一个，你最常发生的是",
      "kind": "单选题",
      "options": [
        "看答案，抄上去，下一题",
        "读懂解析就过",
        "自己再做一遍",
        "追问 AI",
        "找同类题再做",
        "收进错题本",
        "其他"
      ],
      "section": 2
    },
    {
      "number": 12,
      "title": "上面那道题，后来在考试或作业里再遇到同类题时，结果通常是",
      "kind": "单选题",
      "options": [
        "能独立做出来",
        "大概能做，但要想很久或有小错",
        "做不出来，需要再看一次",
        "没有再遇到过 / 不记得"
      ],
      "section": 2
    },
    {
      "number": 13,
      "title": "看完解答后，你怎么判断自己\"真的会了\"？请用一两句话描述你实际的做法。",
      "kind": "填空题",
      "options": [],
      "section": 2
    },
    {
      "number": 14,
      "title": "下面哪些情况下，你会在看完解答后自己再做一遍？（可多选）",
      "kind": "多选题",
      "options": [
        "这道题明天要考",
        "老师会检查过程",
        "我觉得这类题很重要",
        "我当时有时间",
        "App 或工具提醒我这么做",
        "几乎不会再做一遍",
        "其他"
      ],
      "section": 2
    },
    {
      "number": 15,
      "title": "下面是一道题和它的完整解答，就像你平时从搜题 App 里拿到的那样。请把它读完。\n\n题目：一件商品原价 200 元，先涨价 20%，再打八折出售，现在的售价是多少元？\n\n解答：涨价后价格 = 200 × (1 + 20%) = 240 元；打八折 = 240 × 0.8 = 192 元。答：192 元。\n要点：两次变化是\"连乘\"，不能把 +20% 和 −20% 直接相加抵消。",
      "kind": "备注说明",
      "options": [],
      "section": 3
    },
    {
      "number": 16,
      "title": "读完上面的解答，你觉得自己看懂了吗？",
      "kind": "单选题",
      "options": [
        "完全看懂了",
        "基本看懂",
        "有点模糊",
        "没看懂"
      ],
      "section": 3
    },
    {
      "number": 17,
      "title": "下面四道题里，哪一道和上面那道例题在解题原理上是同一类？（不需要做出来，只判断类型）",
      "kind": "单选题",
      "options": [
        "A. 一件商品先降价 20%，再涨价 25%，现价与原价相比如何？",
        "B. 某个数的 20% 是 40，这个数是多少？",
        "C. 甲比乙多 20%，那么乙比甲少百分之几？",
        "D. 一件原价 200 元的商品打八折之后又减了 20 元，现价是多少？"
      ],
      "section": 4
    },
    {
      "number": 18,
      "title": "你为什么选它？用一句话说说你是怎么看出来的。",
      "kind": "填空题",
      "options": [],
      "section": 4
    },
    {
      "number": 19,
      "title": "接下来请独立完成两道同类题，不查资料、不问 AI、不用计算器。请估计：这两道题你能做对的比例大约是多少？填 0–100 之间的数字（0 = 预计都做不对，50 = 预计做对一半，100 = 预计都做对）。",
      "kind": "填空题",
      "options": [],
      "section": 5
    },
    {
      "number": 20,
      "title": "一件商品原价 150 元，先降价 20%，再涨价 25%，现在的售价是多少元？（只填数字）",
      "kind": "填空题",
      "options": [],
      "section": 6
    },
    {
      "number": 21,
      "title": "一件商品连续两次降价，每次都降 10%，两次之后总共降了百分之几？（只填数字，不用写 %）",
      "kind": "填空题",
      "options": [],
      "section": 6
    },
    {
      "number": 22,
      "title": "刚才这两道题，你做的时候感觉",
      "kind": "单选题",
      "options": [
        "很顺，几乎没停",
        "中间想了一下",
        "很吃力",
        "基本是猜的"
      ],
      "section": 6
    },
    {
      "number": 23,
      "title": "参考答案：第 20 题 150 元（150 × 0.8 × 1.25 = 150，两次变化比例相乘为 1，这组数恰好回到原价；常见错解 157.5 是把 −20% 和 +25% 直接相加）；第 21 题 19%（1 − 0.9 × 0.9 = 0.19，常见错解 20%）。",
      "kind": "备注说明",
      "options": [],
      "section": 7
    },
    {
      "number": 24,
      "title": "核对解答后，你觉得自己刚才",
      "kind": "单选题",
      "options": [
        "两道都对",
        "对了一道",
        "两道都错",
        "不确定"
      ],
      "section": 7
    },
    {
      "number": 25,
      "title": "请按实际情况回答：刚才做第 20、21 题时，你有没有查过任何东西、问过 AI 或用过计算器？",
      "kind": "单选题",
      "options": [
        "没有，完全自己做的",
        "用了计算器",
        "查了 / 问了"
      ],
      "section": 7
    },
    {
      "number": 26,
      "title": "如果学习 App 在展示解答后，安排你先归类、再独立做一道同类题，完成后才能继续下一组练习（可随时退出），你会",
      "kind": "单选题",
      "options": [
        "愿意做，觉得有用",
        "会做，但觉得烦",
        "会想办法跳过",
        "直接换一个不这么做的 App",
        "说不准"
      ],
      "section": 7
    },
    {
      "number": 27,
      "title": "如果同样的练习只放在一个可选按钮里，你估计自己会多常点击",
      "kind": "单选题",
      "options": [
        "几乎每次",
        "一半左右",
        "偶尔",
        "几乎不会"
      ],
      "section": 7
    },
    {
      "number": 28,
      "title": "如果 App 在结果页同时展示你的答案、原先的把握和本题用时，只给你自己查看，你会觉得",
      "kind": "单选题",
      "options": [
        "有用，帮助我回看这次作答",
        "无所谓",
        "被监视，不舒服",
        "看情况"
      ],
      "section": 7
    },
    {
      "number": 29,
      "title": "你觉得下面哪些事情用 AI 来做是可以接受的？（可多选）",
      "kind": "多选题",
      "options": [
        "查一个不懂的概念",
        "让 AI 讲一遍解题思路",
        "让 AI 直接给出答案然后抄",
        "让 AI 帮忙检查我做完的题",
        "让 AI 出几道同类题给我练",
        "让 AI 替我写作文或报告",
        "都不可接受"
      ],
      "section": 8
    },
    {
      "number": 30,
      "title": "使用 AI 获取解答，对你的学习有哪些帮助或妨碍？请说说自己的经历，也可以写没有明显影响。",
      "kind": "填空题",
      "options": [],
      "section": 8
    },
    {
      "number": 31,
      "title": "你所在的地区属于",
      "kind": "单选题",
      "options": [
        "一线 / 新一线城市",
        "其他城市",
        "县城或乡镇",
        "不方便说"
      ],
      "section": 9
    },
    {
      "number": 32,
      "title": "性别（可不答）",
      "kind": "单选题",
      "options": [
        "女",
        "男",
        "不方便说"
      ],
      "section": 9
    },
    {
      "number": 33,
      "title": "你目前（或最近）的数学成绩在班里大致处于",
      "kind": "单选题",
      "options": [
        "前 20%",
        "中上",
        "中等",
        "中下",
        "不清楚 / 不方便说"
      ],
      "section": 9
    },
    {
      "number": 34,
      "title": "如果之后有约 15 分钟的线上访谈，你愿意了解或参加吗？本题只记录意愿，不收集联系方式。",
      "kind": "单选题",
      "options": [
        "愿意",
        "想先了解安排",
        "暂不考虑"
      ],
      "section": 9
    }
  ]
};
  const form = FormApp.create('学会了吗 · 看完解答后，你会做什么？');
  form.setAcceptingResponses(false);
  form.setDescription('约 8 分钟，包含两道独立作答题。不收集姓名、学校或联系方式，可随时退出。本版为非限时问卷。');
  form.setCollectEmail(false);
  form.setAllowResponseEdits(false);
  form.setShowLinkToRespondAgain(false);
  form.setProgressBar(true);
  form.setShuffleQuestions(false);
  form.setConfirmationMessage('感谢你的参与。你的回答将帮助我们理解学生看完解答后的学习方式。');
  let currentSection = -1, consent = null, secondPage = null;
  spec.questions.forEach(q => {
    if (q.section !== currentSection) {
      currentSection = q.section;
      if (currentSection > 0) {
        const page = form.addPageBreakItem().setTitle(spec.sections[currentSection]);
        if (currentSection === 1) secondPage = page;
      }
    }
    const title = q.number + '. ' + q.title;
    if (q.kind === '备注说明') { form.addSectionHeaderItem().setTitle(title); return; }
    let item;
    if (q.kind === '单选题') {
      item = form.addMultipleChoiceItem().setTitle(title).setChoiceValues(q.options);
      if (q.number === 3) consent = item;
    } else if (q.kind === '多选题') {
      item = form.addCheckboxItem().setTitle(title).setChoiceValues(q.options);
    } else {
      item = [13,18,30].includes(q.number) ? form.addParagraphTextItem() : form.addTextItem();
      item.setTitle(title);
      if (q.number === 19) item.setValidation(FormApp.createTextValidation().requireNumberBetween(0,100).setHelpText('请填写 0–100 之间的数字。').build());
      if ([20,21].includes(q.number)) item.setValidation(FormApp.createTextValidation().requireNumber().setHelpText('填写数字，暂时不会可以留空。').build());
    }
    item.setRequired([2,3,19].includes(q.number));
  });
  const choices = spec.questions.find(q => q.number === 3).options;
  consent.setChoices([
    consent.createChoice(choices[0], secondPage),
    consent.createChoice(choices[1], secondPage),
    consent.createChoice(choices[2], FormApp.PageNavigationType.SUBMIT)
  ]);
  Logger.log('编辑链接：' + form.getEditUrl());
  Logger.log('填写链接（尚未开启收集）：' + form.getPublishedUrl());
  return form.getEditUrl();
}

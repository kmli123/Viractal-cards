const HeroCards = [
  {
    name: "斬擊",
    cost: null,
    effect: "對敵人造成 3 傷害",
    charge: ["正義"]
  },
  {
    name: "防禦",
    cost: null,
    effect: "自身獲得 4 格擋",
    charge: ["正義"]
  },
  {
    name: "鼓舞",
    cost: null,
    effect: "我方全體賦予怪力",
    charge: null
  },
  {
    name: "挑釁",
    cost: null,
    effect: "自身獲得挑釁",
    charge: ["智慧"]
  },
  {
    name: "光箭",
    cost: ["正義"],
    effect: "對所有敵人造成 4 傷害",
    charge: ["正義"]
  },
  {
    name: "奮起",
    cost: ["慈悲"],
    effect: "自身獲得 5 格擋，獲得希望之雨",
    charge: ["慈悲"]
  },
  {
    name: "真空斬",
    cost: ["正義"],
    effect: "對敵人造成 6 傷害，對自身造成 1 傷害",
    charge: ["正義"]
  },
  {
    name: "號令",
    cost: ["尊嚴"],
    effect: "我方全體賦予怪力、號令",
    charge: ["尊嚴"]
  },
  {
    name: "守備姿態",
    cost: ["智慧"],
    effect: "自身獲得 6 格擋，獲得挑釁",
    charge: ["智慧"]
  },
  {
    name: "閃電",
    cost: ["正義"],
    effect: "對所有敵人造成 6 傷害，暫時從牌組中移除",
    charge: ["正義"]
  },
  {
    name: "魔法領域",
    cost: ["智慧"],
    effect: "我方全體賦予 1 格擋，賦予怪力",
    charge: ["智慧", "智慧"]
  },
  {
    name: "光盾",
    cost: ["正義"],
    effect: "一名友軍賦予 4 格擋，賦予頑強",
    charge: ["正義","正義"]
  },
  {
    name: "盾擊",
    cost: ["慈悲"],
    effect: "對敵人造成 3 傷害，自身獲得 3 格擋",
    charge: ["慈悲"]
  },
  {
    name: "防護領域",
    cost: ["尊嚴"],
    effect: "我方全體賦予 4 格擋",
    charge: ["尊嚴", "尊嚴"]
  },
  {
    name: "力場領域",
    cost: ["智慧","慈悲"],
    effect: "我方全體賦予 2 個頑強",
    charge: ["智慧", "智慧"]
  },
  {
    name: "閃電劍",
    cost: ["正義"],
    effect: "對敵人造成 9 傷害，對自身造成 1 傷害，暫時從牌組中移除",
    charge: ["正義"]
  },
  {
    name: "攻防姿態",
    cost: ["尊嚴", "尊嚴"],
    effect: "自身獲得 8 格擋，獲得頑強",
    charge: ["尊嚴", "尊嚴"]
  },
  {
    name: "大號令",
    cost: ["正義","慈悲","慈悲"],
    effect: "我方全體賦予怪力、必殺",
    charge: ["慈悲", "慈悲"]
  },
  {
    name: "閃耀",
    cost: ["正義","智慧"],
    effect: "對所有敵人造成 7 傷害",
    charge: ["正義"]
  },
  {
    name: "聖域",
    cost: ["智慧"],
    effect: "我方全體賦予 7 格擋，暫時從牌組中移除",
    charge: ["智慧", "慈悲"]
  },
  {
    name: "靈氣之刃",
    cost: ["正義", "正義", "正義"],
    effect: "對敵人造成 10 傷害；若自身處於頑強狀態，對目標額外造成每層 × 8 傷害",
    charge: ["正義"]
  },
  {
    name: "極樂淨土",
    cost: ["智慧","正義", "正義"],
    effect: "對所有敵人造成 8 傷害，我方全體賦予 4 格擋",
    charge: ["正義"]
  },
  {
    name: "弧形斬擊",
    cost: ["慈悲","正義","正義"],
    effect: "對敵人造成 20 傷害，自身失去 5 格擋",
    charge: ["正義"]
  },
  {
    name: "粉碎劍",
    cost: ["正義"],
    effect: "對敵人造成 7 傷害；若目標的格擋被破壞，追加施加虛弱",
    charge: ["正義"]
  },
  {
    name: "破壞光環",
    cost: ["正義"],
    effect: "對敵人造成 5 傷害；若目標的格擋被破壞，追加獲得怪力",
    charge: ["正義"]
  },
  {
    name: "憤怒斬擊",
    cost: ["正義"],
    effect: "對敵人造成 4 傷害；若目標處於挑釁狀態，額外造成每層 × 9 傷害",
    charge: ["正義"]
  },
  {
    name: "勇氣斬",
    cost: ["正義"],
    effect: "對敵人造成 5 傷害；若目標處於怪力狀態，額外造成每層 × 5 傷害",
    charge: ["正義"]
  },
  {
  name: "元素結界",
  cost: null,
  effect: "我方全體賦予 4 格擋，賦予 2 個頑強，暫時從牌組中移除",
  charge: ["尊嚴", "正義", "智慧"]
  },
  {
    name: "意志之刃",
    cost: null,
    effect: "對敵人造成 4 傷害",
    charge: ["尊嚴", "智慧", "慈悲"]
  },
  {
    name: "意志之牆",
    cost: ["正義","正義"],
    effect: "自身獲得 4 格擋，賦予我方全體等同於剩餘 Will 數量的格擋",
    charge: null
  },
];
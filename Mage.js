const MageCards = [
  {
    name: "火球",
    cost: null,
    effect: "對敵人造成 3 傷害，施加灼傷",
    charge: ["智慧"]
  },
  {
    name: "冰彈",
    cost: null,
    effect: "對敵人造成 3 傷害，施加凍傷",
    charge: ["智慧"]
  },
  {
    name: "雷擊",
    cost: null,
    effect: "對敵人造成 2 傷害，施加感電",
    charge: ["智慧"]
  },
  {
    name: "詠唱",
    cost: null,
    effect: "自身獲得增魔",
    charge: ["正義"]
  },
  {
    name: "魔法障壁",
    cost: null,
    effect: "一名友軍賦予 2 格擋",
    charge: ["尊嚴", "慈悲"]
  },
  {
    name: "火焰風暴",
    cost: ["正義","智慧"],
    effect: "對所有敵人造成 4 傷害，施加灼傷",
    charge: ["智慧"]
  },
  {
    name: "冰牢",
    cost: ["尊嚴","智慧"],
    effect: "對所有敵人造成 4 傷害，施加凍傷",
    charge: ["智慧"]
  },
  {
    name: "雷電風暴",
    cost: ["智慧","智慧"],
    effect: "對所有敵人造成 3 傷害，施加感電",
    charge: ["智慧"]
  },
  {
    name: "冥想",
    cost: ["尊嚴"],
    effect: "自身獲得冥想，增魔",
    charge: ["尊嚴"]
  },
  {
    name: "束縛封鎖",
    cost: ["正義"],
    effect: "敵人施加束縛，降速化，麻痺，暫時從牌組中移除",
    charge: ["正義"]
  },
  {
    name: "詛咒反彈",
    cost: ["慈悲"],
    effect: "一名友軍賦予反彈",
    charge: ["智慧"]
  },
  {
    name: "火焰漩渦",
    cost: ["智慧", "智慧"],
    effect: "對敵人造成 7 傷害，施加灼傷×2",
    charge: ["智慧"]
  },
  {
    name: "寒冰地獄",
    cost: ["智慧", "智慧"],
    effect: "對敵人造成 7 傷害，施加凍傷×2",
    charge: ["智慧"]
  },
  {
    name: "閃電",
    cost: ["智慧", "智慧"],
    effect: "對敵人造成 7 傷害，施加感電×2",
    charge: ["智慧"]
  },
  {
    name: "破防術",
    cost: ["智慧", "慈悲"],
    effect: "對敵人造成 8 傷害，無視格擋，解除敵人 1 個有益狀態",
    charge: ["慈悲"]
  },
  {
    name: "魔法護盾",
    cost: ["正義"],
    effect: "一名友軍賦予 7 格擋",
    charge: ["正義"]
  },
  {
    name: "火山噴發",
    cost: null,
    effect: "充能正義 Will",
    charge: ["正義", "正義","正義"]
  },
  {
    name: "冰河時代",
    cost: null,
    effect: "充能尊嚴 Will",
    charge: ["尊嚴", "尊嚴","尊嚴"]
  },
  {
    name: "暴風",
    cost: null,
    effect: "充能智慧 Will",
    charge: ["智慧", "智慧","智慧"]
  },
  {
    name: "重力術",
    cost: ["智慧", "慈悲"],
    effect: "對敵人造成 11 傷害，施加降速化，虛弱",
    charge: ["慈悲"]
  },
  {
    name: "格擋射擊",
    cost: ["尊嚴"],
    effect: "對敵人造成等同於我方全體格擋總和的傷害",
    charge: ["智慧"]
  },
  {
    name: "地獄烈焰",
    cost: ["智慧", "智慧"],
    effect: "對敵人造成 8 傷害；若目標處於灼傷狀態，額外造成 10 傷害",
    charge: ["智慧"]
  },
  {
    name: "冰封山",
    cost: ["智慧", "智慧"],
    effect: "對敵人造成 7 傷害；若目標處於凍傷狀態，額外造成 10 傷害",
    charge: ["智慧"]
  },
  {
    name: "雷龍",
    cost: ["智慧", "智慧"],
    effect: "對敵人造成 6 傷害；若目標處於感電狀態，額外造成 10 傷害",
    charge: ["智慧"]
  },
  {
    name: "爆裂術",
    cost: ["正義", "智慧", "智慧"],
    effect: "對所有敵人造成 10 傷害，施加灼傷×2",
    charge: ["正義"]
  },
  {
    name: "絕對零度",
    cost: ["尊嚴", "智慧", "智慧"],
    effect: "對所有敵人造成 12 傷害，施加凍傷×2",
    charge: ["智慧"]
  },
  {
    name: "黑夜電漿",
    cost: ["智慧", "智慧", "智慧"],
    effect: "對所有敵人造成 11 傷害，施加感電×2",
    charge: ["智慧"]
  },
  {
    name: "多重詠唱",
    cost: ["慈悲"],
    effect: "自身獲得多重詠唱，暫時從牌組中移除",
    charge: ["智慧"]
  },
  {
    name: "意志燃燒",
    cost: null,
    effect: "消耗全部 Will，每 1 個對所有敵人造成 3 傷害，暫時從牌組中移除",
    charge: null
  },
  {
    name: "元素電漿",
    cost: ["尊嚴","正義","智慧"],
    effect: "對所有敵人造成 11 傷害，施加感電，凍傷，灼傷，暫時從牌組中移除",
    charge: ["智慧"]
  },
  {
    name: "護盾破壞",
    cost: ["智慧"],
    effect: "消除敵人所有格擋，施加格擋封印，暫時從牌組中移除",
    charge: ["智慧"]
  },
  {
    name: "魔力超載",
    cost: null,
    effect: "自身獲得 5 格擋，我方全體賦予魔力豐饒",
    charge: ["智慧"]
  }
];
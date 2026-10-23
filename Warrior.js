const WarriorCards = [
    {
        name: "斧擊",
        cost: null,
        effect: "對敵人造成 4 傷害，自身失去 1 格擋",
        charge: ["尊嚴"]
    },
    {
        name: "防禦",
        cost: null,
        effect: "自身獲得 3 格擋",
        charge: ["慈悲"]
    },
    {
        name: "重擊",
        cost: ["尊嚴"],
        effect: "對敵人造成 6 傷害，自身獲得虛弱",
        charge: ["尊嚴"]
    },
    {
        name: "不動",
        cost: null,
        effect: "自身獲得 7 格擋，獲得頑強",
        charge: ["正義"]
    },
    {
        name: "挑釁",
        cost: null,
        effect: "自身獲得挑釁",
        charge: ["智慧"]
    },
    {
        name: "一閃",
        cost: ["尊嚴"],
        effect: "對所有敵人造成 4 傷害，對自身造成 3 傷害",
        charge: ["尊嚴"]
    },
    {
        name: "集氣",
        cost: null,
        effect: "自身獲得 2 格擋，獲得怪力",
        charge: ["正義"]
    },
    {
        name: "全力揮擊",
        cost: ["尊嚴"],
        effect: "對敵人造成 9 傷害，自身獲得 2 個虛弱",
        charge: ["尊嚴"]
    },
    {
        name: "閃擊斬",
        cost: ["尊嚴"],
        effect: "對敵人造成等同剩餘 HP ÷ 3的傷害，暫時從牌組中移除",
        charge: ["尊嚴"]
    },
    {
        name: "鐵壁",
        cost: ["慈悲"],
        effect: "我方全體賦予 2 格擋，自身獲得頑強",
        charge: ["尊嚴","慈悲"]
    },
    {
        name: "火焰一擊",
        cost: ["智慧"],
        effect: "對敵人造成 6 傷害，施加灼傷",
        charge: ["智慧","智慧"]
    },
    {
        name: "鐮鼬風",
        cost: ["尊嚴"],
        effect: "對所有敵人造成 3 傷害；若目標有格擋，額外造成 3 傷害",
        charge: ["尊嚴"]
    },
    {
        name: "破壞戰斧",
        cost: ["慈悲"],
        effect: "對敵人造成 7 傷害，無視格擋",
        charge: ["慈悲"]
    },
    {
        name: "大旋風",
        cost: ["尊嚴","尊嚴"]
        effect: "對敵人造成 10 傷害；若自身 HP 全滿，額外造成 5 傷害",
        charge: ["尊嚴"]
    },
    {
        name: "破壞之擊",
        cost: ["尊嚴","尊嚴"]
        effect: "對敵人造成 8 傷害；若目標的格擋被破壞，追加施加弱化、虛弱",
        charge: ["尊嚴"]
    },
    {
        name: "超專注",
        cost: null,
        effect: "自身獲得怪力，頑強，必殺，暫時從牌組中移除",
        charge: ["正義", "智慧"]
    },
    {
        name: "能量爆發",
        cost: ["慈悲","慈悲"],
        effect: "對敵人造成 5 傷害；若目標處於異常狀態，額外造成 6 傷害",
        charge: ["慈悲","慈悲"]
    },
    {
        name: "魔法劍",
        cost: null,
        effect: "消耗全部 Will，每 1 個對敵人造成 5 傷害，暫時從牌組中移除",
        charge: ["智慧","智慧"]
    },
    {
        name: "重斬",
        cost: ["尊嚴","尊嚴"],
        effect: "對敵人造成 10 傷害，施加降速化",
        charge: ["尊嚴"]
    },
    {
        name: "冰結一擊",
        cost: ["智慧","智慧"],
        effect: "對敵人造成 9 傷害，施加凍傷",
        charge: ["智慧"]
    },
    {
        name: "腎上腺素",
        cost: ["正義"],
        effect: "自身獲得怪力、憤怒，暫時獲得能力虛弱再生",
        charge: ["正義"]
    },
    {
        name: "無我境界",
        cost: ["慈悲","慈悲","慈悲"],
        effect: "自身獲得護盾，挑釁，暫時從牌組中移除",
        charge: ["慈悲"]
    },
    {
        name: "粉碎戰斧",
        cost: ["尊嚴","尊嚴"],
        effect: "對敵人造成 10 傷害，施加虛弱",
        charge: ["尊嚴"]
    },
    {
        name: "起死回生",
        cost: ["尊嚴","尊嚴"],
        effect: "對敵人造成 16 傷害，解除自身所有有益狀態",
        charge: ["尊嚴","尊嚴"]
    },
    {
        name: "雷電一閃",
        cost: ["慈悲","智慧","智慧"],
        effect: "對所有敵人造成 13 傷害，施加感電",
        charge: ["智慧"]
    }, 
    {
        name: "絕對防禦",
        cost: ["尊嚴","慈悲","慈悲"],
        effect: "自身獲得 10 格擋，獲得 3 個頑強",
        charge: ["尊嚴"]
    },
    {
        name: "爆炎斬",
        cost: ["正義","尊嚴","尊嚴"],
        effect: "對敵人造成 24 傷害，自身獲得虛弱、束縛",
        charge: ["尊嚴"]
    },
    {
        name: "反擊",
        cost: ["智慧","智慧"],
        effect: "自身獲得反彈，挑釁，暫時從牌組中移除",
        charge: ["智慧"]
    },
    {
        name: "變異戰斧",
        cost: ["尊嚴","正義","智慧"],
        effect: "對敵人造成 12 傷害，若目標處於怪力狀態，額外造成每層 × 8 傷害",
        charge: ["尊嚴"]
    },
    {
        name: "重力戰斧",
        cost: ["尊嚴"],
        effect: "對敵人造成 10 傷害，自身獲得碎骨",
        charge: ["尊嚴"]
    },
    {
        name: "反擊重擊",
        cost: ["尊嚴","尊嚴"],
        effect: "若自身處於虛弱狀態，對目標造成每層 × 8 傷害，解除自身 2 個異常狀態，暫時從牌組中移除",
        charge: ["尊嚴"]
    }
];
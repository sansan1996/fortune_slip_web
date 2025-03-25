const fortuneData = [
  {
    "level": "上上签",
    "category": "机遇",
    "content": "云破月来，龙跃九天",
    "advice": "此刻突破瓶颈的关键在放手一搏，忌犹豫"
  },
  {
    "level": "上上签",
    "category": "机遇",
    "content": "枯木逢春，旧缘新续",
    "advice": "修复关系的时机已至，需主动破冰"
  },
  {
    "level": "上上签",
    "category": "机遇",
    "content": "星火燎原，暗藏转机",
    "advice": "微小契机可能引发质变，注意细节"
  },
  {
    "level": "上上签",
    "category": "机遇",
    "content": "天时人和，鼎立而兴",
    "advice": "团队协作可成大事，避免独行"
  },
  {
    "level": "上签",
    "category": "事业",
    "content": "静水流深，蓄势待发",
    "advice": "打磨核心技能比盲目扩张更重要"
  },
  {
    "level": "上签",
    "category": "事业",
    "content": "百川归海，殊途同归",
    "advice": "不同路径皆可抵达目标，忌反复横跳"
  },
  {
    "level": "上签",
    "category": "事业",
    "content": "金石为开，精诚所至",
    "advice": "长期投入将突破资质限制"
  },
  {
    "level": "上签",
    "category": "事业",
    "content": "借势乘风，轻舟万里",
    "advice": "善用外部资源减少阻力"
  },
  {
    "level": "上签",
    "category": "事业",
    "content": "慧眼识珠，沙中淘金",
    "advice": "关注被低估的人或机会"
  },
  {
    "level": "上签",
    "category": "事业",
    "content": "庖丁解牛，游刃有余",
    "advice": "用系统性思维拆解复杂问题"
  },
  {
    "level": "上签",
    "category": "情感",
    "content": "雾里看花，心镜自明",
    "advice": "感情需跳出表象洞察本质"
  },
  {
    "level": "上签",
    "category": "情感",
    "content": "孤雁南飞，择枝而栖",
    "advice": "独处时更易看清真正需求"
  },
  {
    "level": "上签",
    "category": "情感",
    "content": "投桃报李，礼尚往来",
    "advice": "关系维护需双向付出"
  },
  {
    "level": "上签",
    "category": "情感",
    "content": "破茧化蝶，重塑自我",
    "advice": "结束消耗性关系才能新生"
  },
  {
    "level": "上签",
    "category": "情感",
    "content": "滴水穿石，以柔克刚",
    "advice": "用耐心化解人际坚冰"
  },
  {
    "level": "上签",
    "category": "情感",
    "content": "海纳百川，有容乃大",
    "advice": "放下执念可拓宽格局"
  },
  {
    "level": "上签",
    "category": "抉择",
    "content": "临渊羡鱼，退而结网",
    "advice": "停止空想，建立可实现计划"
  },
  {
    "level": "上签",
    "category": "抉择",
    "content": "逆水行舟，不进则退",
    "advice": "维持现状需付出更多努力"
  },
  {
    "level": "上签",
    "category": "抉择",
    "content": "当断不断，反受其乱",
    "advice": "关键抉择切忌优柔寡断"
  },
  {
    "level": "上签",
    "category": "抉择",
    "content": "失之东隅，收之桑榆",
    "advice": "转换视角看待得失"
  },
  {
    "level": "上签",
    "category": "财富",
    "content": "春种秋收，因果相循",
    "advice": "延迟满足比短期收益更重要"
  },
  {
    "level": "上签",
    "category": "财富",
    "content": "开源节流，固本培元",
    "advice": "先夯实基础再谋扩张"
  },
  {
    "level": "上签",
    "category": "财富",
    "content": "狡兔三窟，未雨绸缪",
    "advice": "分散风险以防突发变故"
  },
  {
    "level": "上签",
    "category": "财富",
    "content": "点石成金，化废为宝",
    "advice": "发掘现有资源的隐藏价值"
  },
  {
    "level": "上签",
    "category": "健康",
    "content": "流水不腐，户枢不蠹",
    "advice": "规律作息胜过突击养生"
  },
  {
    "level": "上签",
    "category": "健康",
    "content": "病从口入，祸从心起",
    "advice": "控制欲望可避多数隐患"
  },
  {
    "level": "上签",
    "category": "健康",
    "content": "张弛有道，阴阳调和",
    "advice": "极端追求效率反损根基"
  },
  {
    "level": "上签",
    "category": "健康",
    "content": "良药苦口，忠言逆耳",
    "advice": "正视预警信号及时调整"
  },
  {
    "level": "中签",
    "category": "平衡",
    "content": "月满则亏，亢龙有悔",
    "advice": "巅峰时预留退路，忌锋芒毕露"
  },
  {
    "level": "中签",
    "category": "平衡",
    "content": "塞翁失马，焉知非福",
    "advice": "短期挫折可能蕴藏长远价值"
  },
  {
    "level": "中签",
    "category": "平衡",
    "content": "镜花水月，虚实相生",
    "advice": "重要决策前需核实信息真伪"
  },
  {
    "level": "中签",
    "category": "平衡",
    "content": "福祸相依，物极必反",
    "advice": "顺境中警惕潜在危机"
  },
  {
    "level": "中签",
    "category": "平衡",
    "content": "过犹不及，适可而止",
    "advice": "狂热投入时需设止损点"
  },
  {
    "level": "中签",
    "category": "平衡",
    "content": "鹬蚌相争，渔翁得利",
    "advice": "避免陷入他人争斗漩涡"
  },
  {
    "level": "中签",
    "category": "平衡",
    "content": "水能载舟，亦能覆舟",
    "advice": "依赖的优势可能成为弱点"
  },
  {
    "level": "中签",
    "category": "平衡",
    "content": "木秀于林，风必摧之",
    "advice": "必要时收敛光芒以避灾祸"
  },
  {
    "level": "中签",
    "category": "平衡",
    "content": "城门失火，殃及池鱼",
    "advice": "关注环境变化的连锁影响"
  },
  {
    "level": "中签",
    "category": "平衡",
    "content": "尺有所短，寸有所长",
    "advice": "停止比较，专注自身赛道"
  },
  {
    "level": "中签",
    "category": "平衡",
    "content": "欲速不达，循序渐进",
    "advice": "复杂事务需分解阶段推进"
  },
  {
    "level": "中签",
    "category": "平衡",
    "content": "知己知彼，百战不殆",
    "advice": "竞争前先透彻分析敌我"
  },
  {
    "level": "下签",
    "category": "警示",
    "content": "竭泽而渔，其祸必至",
    "advice": "过度消耗资源将引发反噬"
  },
  {
    "level": "下签",
    "category": "警示",
    "content": "盲人摸象，以偏概全",
    "advice": "避免根据片面信息做重大判断"
  },
  {
    "level": "下签",
    "category": "警示",
    "content": "刻舟求剑，守株待兔",
    "advice": "环境已变时须更新方法论"
  },
  {
    "level": "下签",
    "category": "警示",
    "content": "作茧自缚，画地为牢",
    "advice": "跳出固有思维框架求变"
  },
  {
    "level": "下签",
    "category": "警示",
    "content": "扬汤止沸，抱薪救火",
    "advice": "表面处理不如根除病灶"
  },
  {
    "level": "下签",
    "category": "警示",
    "content": "饮鸩止渴，得不偿失",
    "advice": "为短期利益牺牲长远需警惕"
  },
  {
    "level": "下签",
    "category": "警示",
    "content": "尾大不掉，积重难返",
    "advice": "及时清理历史遗留问题"
  },
  {
    "level": "下签",
    "category": "警示",
    "content": "舍本逐末，买椟还珠",
    "advice": "重审目标避免偏离核心"
  },
  {
    "level": "下下签",
    "category": "考验",
    "content": "大厦将倾，独木难支",
    "advice": "系统性危机需寻求外力破局"
  },
  {
    "level": "下下签",
    "category": "考验",
    "content": "缘木求鱼，南辕北辙",
    "advice": "彻底反思目标与路径的适配性"
  }
]
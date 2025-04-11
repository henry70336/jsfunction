// 自動生成的 TypeScript 宣告檔 (多檔案)

declare interface AbstractPlayerInteraction {
    /**
 * 獲取該角色互動的客戶端。
 * 
 * @return 該角色互動的客戶端
 */
    getClient(): MapleClient;
    /**
 * 獲取該角色互動的客戶端。
 * 
 * @return 該角色互動的客戶端
 */
    getC(): MapleClient;
    /**
 * 獲取該角色所對應的 MapleCharacter 物件。
 * 
 * @return 該角色所對應的 MapleCharacter 物件
 */
    getChar(): MapleCharacter;
    /**
 * 回傳一次性領取紀錄 紀錄的資料表為onetimelog
 * 
 * @param bossid
 * @return int
 */
    getOneTimeLog(bossid: string): number;
    /**
 * 設定一次性領取紀錄 按照腳色紀錄 紀錄的資料表為onetimelog
 * 
 * @param bossid
 */
    setOneTimeLog(bossid: string): void;
    /**
 * 設定全組隊的prizelog 紀錄的資料表為prizelog
 * 
 * @param bossid
 */
    setPartyPrizeLog(bossid: string): void;
    /**
 * 獲得全組隊的prizelog 紀錄的資料表為prizelog
 * 
 * @param bossid
 * @return 組隊角色最大的prizelog數量
 */
    getPartyPrizeLog(bossid: string): number;
    /**
 * 設定全組隊的bosslog 紀錄的資料顯示於面板
 * 
 * @param bossid
 */
    setPartyBossLog(bossid: string): void;
    /**
 * 獲得全組隊的bosslog 紀錄的資料顯示於面板
 * 
 * @param bossid
 * @return 組隊角色最大的bosslog次數
 */
    getPartyBossLog(bossid: string): number;
    /**
 * 設定全組隊的bosslog 紀錄的資料顯示於面板
 * 
 * @param bossid
 */
    setPartyWeekLog(bossid: string): void;
    /**
 * 獲得全組隊的bosslog 紀錄的資料顯示於面板
 * 
 * @param bossid
 * @return 組隊角色最大的bosslog次數
 */
    getPartyWeekLog(bossid: string): number;
    /**
 * 設定全組隊的bosslog 紀錄的資料顯示於面板
 * 
 * @param bossid
 */
    setPartyWeekAcLog(bossid: string): void;
    /**
 * 設定全組隊的bosslog 紀錄的資料顯示於面板
 * 
 * @param bossid
 */
    resetPartyWeekAcLog(bossid: string): void;
    /**
 * 獲得全組隊的bosslog 紀錄的資料顯示於面板
 * 
 * @param bossid
 * @return 組隊角色最大的bosslog次數
 */
    getPartyWeekAcLog(bossid: string): number;
    /**
 * 設定全組隊的aclog 紀錄的資料顯示於面板
 * 
 * @param bossid
 */
    setPartyAcLog(bossid: string): void;
    /**
 * 獲得全組隊的aclog 紀錄的資料顯示於面板
 * 
 * @param bossid
 * @return 組隊角色帳號最大的aclog次數
 */
    getPartyAcLog(bossid: string): number;
    /**
 * 獲得全組隊的bosslog 紀錄的資料顯示於面板
 * 
 * @param bossid
 * @return 組隊角色最大的bosslog次數
 */
    getPartyBossLogReload(bossid: string): number;
    /**
 * 設定全組隊的地圖bosslog 紀錄的資料顯示於面板
 * 
 * @param bossid
 */
    setMapBossLog(bossid: string): void;
    /**
 * 獲得全地圖的bosslog 紀錄的資料顯示於面板
 * 
 * @param bossid
 * @return 地圖角色最大的bosslog次數
 */
    getMapBossLog(bossid: string): number;
    /**
 * 獲得角色bosslog 紀錄的資料顯示於面板
 * 
 * @param bossid
 * @return 角色的bosslog次數
 */
    getBossLog(bossid: string): number;
    /**
 * 設定bosslog
 * 
 * @param bossid
 */
    setBossLog(bossid: string): void;
    /**
 * 
 * @param dayid
 */
    getDayLog(dayid: string): void;
    /**
 * 已淘汰使用
 * 
 * @param dayid
 */
    setDayLog(dayid: string): void;
    /**
 * 已淘汰使用
 * 
 * @param EventName
 * @return
 */
    getEventCount(EventName: string): number;
    /**
 * 已淘汰使用
 * 
 * @param EventName
 */
    setEventCount(EventName: string): void;
    /**
 * 獲取角色本身的ChannelServer
 * 
 * @return ChannelServer
 */
    getChannelServer(): any;
    /**
 * 獲取角色本身的MapleCharacter
 * 
 * @return MapleCharacter
 */
    getPlayer(): MapleCharacter;
    /**
 * 
 * @param event
 * @return
 */
    getEventManager(event: string): any;
    /**
 * 獲取角色當前的EventInstanceManager
 * 
 * @return
 */
    getEventInstance(): any;
    /**
 * 飛到要前往的地圖代碼
 * 
 * @param map
 */
    warp(map: number): void;
    /**
 * 飛到指定代碼的instance地圖(極少使用)
 * 
 * @param map
 */
    warp_Instanced(map: number): void;
    /**
 * 飛到指定的地圖跟傳點編號
 * 
 * @param map
 * @param portal
 */
    warp(map: number, portal: number): void;
    /**
 * 飛到指定的地圖跟傳點編號
 * 
 * @param map
 * @param portal
 */
    warpS(map: number, portal: number): void;
    /**
 * 飛到指定的地圖跟傳點名稱
 * 
 * @param map
 * @param portal
 */
    warp(map: number, portal: string): void;
    /**
 * 飛到指定的地圖跟傳點名稱
 * 
 * @param map
 * @param portal
 */
    warpS(map: number, portal: string): void;
    /**
 * 所有地圖的玩家飛到指定的地圖跟傳點名稱
 * 
 * @param mapid
 * @param portal
 */
    warpMap(mapid: number, portal: string): void;
    /**
 * 所有地圖的玩家飛到指定的地圖跟傳點編號
 * 
 * @param mapid
 * @param portal
 */
    warpMap(mapid: number, portal: number): void;
    /**
 * 武陵道場使用
 */
    playPortalSE(): void;
    /**
 * 獲得當前的地圖資料
 * 
 * @return MapleMap
 */
    getMap(): MapleMap;
    /**
 * 獲得指定代碼的地圖資料
 * 
 * @param map
 * @return MapleMap
 */
    getMap(map: number): MapleMap;
    /**
 * 
 * @param map
 * @return
 */
    getMap_Instanced(map: number): MapleMap;
    /**
 * 召喚指定代碼和數量的怪物
 * 
 * @param id
 * @param qty
 */
    spawnMonster(id: number, qty: number): void;
    /**
 * 召喚指定代碼,數量,血量的怪物
 * 
 * @param id
 * @param qty
 * @param hp
 */
    spawnMonster(id: number, qty: number, hp: number): void;
    /**
 * 召喚指定代碼,數量,血量的怪物
 * 
 * @param id
 * @param qty
 * @param hp
 */
    spawnMonsterHP(id: number, qty: number, hp: number): void;
    /**
 * 召喚指定代碼,數量,X軸,Y軸,地圖代碼的怪物
 * 
 * @param id
 * @param qty
 * @param x
 * @param y
 * @param map
 */
    spawnMobOnMap(id: number, qty: number, x: number, y: number, map: number): void;
    /**
 * 召喚指定代碼,數量,X軸,Y軸的怪物
 * 
 * @param id
 * @param qty
 * @param x
 * @param y
 */
    spawnMob(id: number, qty: number, x: number, y: number): void;
    /**
 * 召喚指定代碼,X軸,Y軸的怪物
 * 
 * @param id
 * @param x
 * @param y
 */
    spawnMob(id: number, x: number, y: number): void;
    /**
 * 召喚指定代碼,數量,座標(Point)的怪物
 * 
 * @param id
 * @param qty
 * @param pos
 */
    spawnMob(id: number, qty: number, pos: any): void;
    /**
 * 召喚指定代碼,數量,座標(Point),血量的怪物
 * 
 * @param id
 * @param qty
 * @param pos
 * @param hp
 */
    spawnMob(id: number, qty: number, pos: any, hp: number): void;
    /**
 * 
 * @param id
 * @param qty
 * @param pos
 * @param hp
 * @param exp
 */
    spawnMobExp(id: number, qty: number, pos: any, hp: number, exp: number): void;
    /**
 * 殺死指定代碼的怪物
 * 
 * @param ids
 */
    killMob(ids: number): void;
    /**
 * 殺死所有怪物
 */
    killAllMob(): void;
    /**
 * 增加角色血量
 * 
 * @param delta
 */
    addHP(delta: number): void;
    /**
 * 獲得角色狀態
 * 
 * @param type("LVL","STR","DEX","INT","LUK","HP","MP","MAXHP","MAXMP","RAP","RSP","GID","GRANK","ARANK","GM","ADMIN","GENDER","FACE","HAIR")
 * @return int
 */
    getPlayerStat(type: string): number;
    /**
 * 獲得角色名稱
 * 
 * @return
 */
    getName(): string;
    /**
 * 判斷是否有物品
 * 
 * @param itemid
 * @return boolean
 */
    haveItem(itemid: number): boolean;
    /**
 * 判斷是否有指定數量之物品
 * 
 * @param itemid
 * @param quantity
 * @return boolean
 */
    haveItem(itemid: number, quantity: number): boolean;
    /**
 * 
 * @param itemid
 * @param quantity
 * @param checkEquipped
 * @param greaterOrEquals
 * @return boolean
 */
    haveItem(itemid: number, quantity: number, checkEquipped: boolean, greaterOrEquals: boolean): boolean;
    /**
 * 判斷角色杯包是否每一欄都有空位
 * 
 * @return boolean
 */
    canHold(): boolean;
    /**
 * 判斷是否有空間足夠取得物品
 * 
 * @param itemid
 * @return boolean
 */
    canHold(itemid: number): boolean;
    /**
 * 
 * @param itemid
 * @param quantity
 * @return boolean
 */
    canHold(itemid: number, quantity: number): boolean;
    /**
 * 獲得指定的任務紀錄
 * 
 * @param id
 * @return MapleQuestStatus
 */
    getQuestRecord(id: number): any;
    /**
 * 
 * @return
 */
    getBSPQ(): number;
    /**
 * 
 * @param point
 */
    addBSPQ(point: number): void;
    /**
 * 獲得指定的任務狀態
 * 
 * @param id
 * @return byte
 */
    getQuestStatus(id: number): any;
    /**
 * 判斷是否指定的任務已經開始
 * 
 * @param quest
 * @return boolean
 */
    isQuestStarted(quest: number): boolean;
    /**
 * 判斷是否任務正在進行中(與isQuestStarted相同)
 * 
 * @param id
 * @return boolean
 */
    isQuestActive(id: number): boolean;
    /**
 * 判斷是否任務已經完成
 * 
 * @param id
 * @return boolean
 */
    isQuestCompleted(id: number): boolean;
    /**
 * 判斷是否任務已經完成
 * 
 * @param id
 * @return boolean
 */
    isQuestFinished(id: number): boolean;
    /**
 * 發送任務訊息
 * 
 * @param msg
 */
    showQuestMsg(msg: string): void;
    /**
 * 強制開始任務
 * 
 * @param id
 * @param data
 */
    forceStartQuest(id: number, data: string): void;
    /**
 * 強制開始任務(指定npcid)
 * 
 * @param id
 * @param npcid
 */
    forceStartQuest(id: number, npcid: number): void;
    /**
 * 強制開始任務
 * 
 * @param id
 * @param data
 * @param filler
 */
    forceStartQuest(id: number, data: number, filler: boolean): void;
    /**
 * 強制刷新任務
 * 
 * @param questid
 */
    updateQuest(questid: number): void;
    /**
 * 強制開始任務
 * 
 * @param id
 * @param npc
 * @param info
 */
    forceStartQuest(id: number, npc: number, info: string): void;
    /**
 * 強制開始任務
 * 
 * @param id
 */
    forceStartQuest(id: number): void;
    /**
 * 強制完成指定任務
 * 
 * @param id
 */
    forceCompleteQuest(id: number): void;
    /**
 * 召喚指定的NPC
 * 
 * @param npcId
 */
    spawnNpc(npcId: number): void;
    /**
 * 召喚指定的NPC(指定坐標軸)
 * 
 * @param npcId
 * @param x
 * @param y
 */
    spawnNpc(npcId: number, x: number, y: number): void;
    /**
 * 召喚指定的NPC(指定坐標點)
 * 
 * @param npcId
 * @param pos
 */
    spawnNpc(npcId: number, pos: any): void;
    spawnNpcTime(npcId: number, x: number, y: number, second: number): void;
    run(): void;
    /**
 * 移除指定地圖代碼的NPC
 * 
 * @param mapid
 * @param npcId
 */
    removeNpc(mapid: number, npcId: number): void;
    /**
 * 移除當前地圖的NPC
 * 
 * @param npcId
 */
    removeNpc(npcId: number): void;
    /**
 * 強制觸發reactor(指定地圖)
 * 
 * @param mapid
 * @param id
 */
    forceStartReactor(mapid: number, id: number): void;
    /**
 * 破壞反應物
 * 
 * @param mapid
 * @param id
 */
    destroyReactor(mapid: number, id: number): void;
    /**
 * 觸發攻擊反應物
 * 
 * @param mapid
 * @param id
 */
    hitReactor(mapid: number, id: number): void;
    /**
 * 獲得職業代碼
 * 
 * @return
 */
    getJob(): number;
    /**
 * 獲得點數/楓葉點數
 * 
 * @param type
 * @param amount
 */
    gainPotion(type: number, amount: number): void;
    /**
 * 獲得點數/楓葉點數
 * 
 * @param type
 * @return
 */
    getPotion(type: number): number;
    /**
 * 獲得GASH
 * 
 * @param amount
 */
    gainNX(amount: number): void;
    /**
 * 回傳GASH數量
 * 
 * @return int
 */
    getNX(): number;
    /**
 * 獲得楓葉點數
 * 
 * @param amount
 */
    gainMaplePoint(amount: number): void;
    /**
 * 回傳楓葉點數數量
 * 
 * @return int
 */
    getMaplePoint(): number;
    /**
 * 獲得物品
 * 
 * @param id
 * @param quantity
 * @param period
 */
    gainItemPeriod(id: number, quantity: number, period: number): void;
    /**
 * 獲得物品
 * 
 * @param id
 * @param quantity
 * @param period
 * @param owner
 */
    gainItemPeriod(id: number, quantity: number, period: number, owner: string): void;
    /**
 * 獲得物品
 * 
 * @param id
 */
    gainItem(id: number): void;
    /**
 * 獲得物品
 * 
 * @param id
 * @param quantity
 * @param randomStats
 */
    gainItem(id: number, quantity: number, randomStats: boolean): void;
    /**
 * 獲得物品
 * 
 * @param id
 * @param quantity
 * @param period
 * @param randomStats 是否隨機數值(boolean)
 */
    gainItem(id: number, quantity: number, period: number, randomStats: boolean): void;
    /**
 * 獲得物品
 * 
 * @param id
 * @param quantity
 * @param randomStats 是否隨機數值(boolean)
 * @param slots
 */
    gainItem(id: number, quantity: number, randomStats: boolean, slots: number): void;
    /**
 * 獲得物品
 * 
 * @param id
 * @param quantity
 * @param period
 */
    gainItem(id: number, quantity: number, period: number): void;
    /**
 * 獲得物品
 * 
 * @param id
 * @param quantity
 */
    gainItem(id: number, quantity: number): void;
    /**
 * 獲得物品
 * 
 * @param id
 * @param quantity
 * @param randomStats
 * @param period
 * @param slots 卷軸數
 */
    gainItem(id: number, quantity: number, randomStats: boolean, period: number, slots: number): void;
    /**
 * 獲得物品
 * 
 * @param id
 * @param quantity
 * @param randomStats 是否隨機浮動素質
 * @param period
 * @param slots 卷軸數
 * @param owner 刻名
 */
    gainItem(id: number, quantity: number, randomStats: boolean, period: number, slots: number, owner: string): void;
    /**
 * 獲得物品
 * 
 * @param id
 * @param quantity
 * @param time 毫秒
 */
    gainItemNostat(id: number, quantity: number, time: number): void;
    gainItemNostat(id: number, quantity: number, time: number, show: boolean): void;
    /**
 * 獲得物品
 * 
 * @param id
 * @param count
 * @param _int
 * @param time 分鐘
 */
    gainTimeItem(id: number, count: number, _int: any, time: number): void;
    /**
 * 獲得物品
 * 
 * @param id
 * @param count
 * @param time 小時
 */
    gainItemHour(id: number, count: number, time: number): void;
    /**
 * 獲得物品
 * 
 * @param id
 * @param count
 * @param time 分鐘
 */
    gainItemMinute(id: number, count: number, time: number): void;
    gainItemMinuteNoStat(id: number, count: number, time: number): void;
    /**
 * 獲得物品
 * 
 * @param id
 * @param quantity
 * @param period
 * @param flag 特殊狀態 - 不會用請參考特殊狀態物品JS範本
 */
    gainItemFlag(id: number, quantity: number, period: number, flag: number): void;
    /**
 * 獲得物品
 * 
 * @param id
 * @param quantity
 * @param flag 特殊狀態
 */
    gainItemFlag(id: number, quantity: number, flag: number): void;
    /**
 * 獲得物品
 * 
 * @param id
 * @param quantity
 * @param randomStats
 * @param period
 * @param slots
 * @param owner 刻名
 * @param cg MapleClient
 */
    gainItem(id: number, quantity: number, randomStats: boolean, period: number, slots: number, owner: string, cg: MapleClient): void;
    /**
 * 獲得物品
 * 
 * @param id
 * @param quantity
 * @param randomStats
 * @param period
 * @param slots
 * @param owner
 * @param cg
 * @param flag
 */
    gainItem(id: number, quantity: number, randomStats: boolean, period: number, slots: number, owner: string, cg: MapleClient, flag: number): void;
    gainItemRandomStat(id: number, quantity: number, min: number, max: number): void;
    /**
 * 獲得物品
 * 
 * @param id
 * @param quantity
 * @param randomStats
 * @param period
 * @param slots
 * @param owner
 * @param cg
 * @param flag
 */
    gainItem(id: number, quantity: number, randomStats: boolean, period: number, slots: number, owner: string, cg: MapleClient, flag: number, min: number, max: number): void;
    /**
 * 獲得物品
 * 
 * @param id
 * @param quantity
 * @param str 力量
 * @param dex 敏捷
 * @param luk 幸運
 * @param Int 智力
 * @param hp 血量
 * @param mp 魔力
 * @param watk 物攻
 * @param matk 魔攻
 * @param wdef 物防
 * @param mdef 魔防
 * @param hb 迴避
 * @param mz 命中
 * @param ty 跳躍
 * @param yd 移動速度
 */
    gainItem(id: number, quantity: number, str: number, dex: number, luk: number, Int: number, hp: number, mp: number, watk: number, matk: number, wdef: number, mdef: number, hb: number, mz: number, ty: number, yd: number): void;
    /**
 * 獲得物品
 * 
 * @param id
 * @param quantity
 * @param str 力量
 * @param dex 敏捷
 * @param luk 幸運
 * @param Int 智力
 * @param hp 血量
 * @param mp 魔力
 * @param watk 物攻
 * @param matk 魔攻
 * @param wdef 物防
 * @param mdef 魔防
 * @param hb 迴避
 * @param mz 命中
 * @param ty 跳躍
 * @param yd 移動速度
 * @param owner 刻名
 */
    gainItem(id: number, quantity: number, str: number, dex: number, luk: number, Int: number, hp: number, mp: number, watk: number, matk: number, wdef: number, mdef: number, hb: number, mz: number, ty: number, yd: number, owner: string): void;
    /**
 * 獲得物品
 * 
 * @param id
 * @param quantity
 * @param str 力量
 * @param dex 敏捷
 * @param luk 幸運
 * @param Int 智力
 * @param hp 血量
 * @param mp 魔力
 * @param watk 物攻
 * @param matk 魔攻
 * @param wdef 物防
 * @param mdef 魔防
 * @param hb 迴避
 * @param mz 命中
 * @param ty 跳躍
 * @param yd 移動速度
 * @param time 時間毫秒
 * @param owner 刻名
 */
    gainItem(id: number, quantity: number, str: number, dex: number, luk: number, Int: number, hp: number, mp: number, watk: number, matk: number, wdef: number, mdef: number, hb: number, mz: number, ty: number, yd: number, time: number, owner: string): void;
    /**
 * 獲得物品
 * 
 * @param id
 * @param quantity
 * @param str 力量
 * @param dex 敏捷
 * @param luk 幸運
 * @param Int 智力
 * @param hp 血量
 * @param mp 魔力
 * @param watk 物攻
 * @param matk 魔攻
 * @param wdef 物防
 * @param mdef 魔防
 * @param hb 迴避
 * @param mz 命中
 * @param ty 跳躍
 * @param yd 移動速度
 * @param slot 卷軸數
 * @param time 時間
 * @param owner 刻名
 */
    gainItem(id: number, quantity: number, str: number, dex: number, luk: number, Int: number, hp: number, mp: number, watk: number, matk: number, wdef: number, mdef: number, hb: number, mz: number, ty: number, yd: number, slot: number, time: number, owner: string): void;
    /**
 * 獲得物品
 * 
 * @param id
 * @param quantity
 * @param str 力量
 * @param dex 敏捷
 * @param luk 幸運
 * @param Int 智力
 * @param hp 血量
 * @param mp 魔力
 * @param watk 物攻
 * @param matk 魔攻
 * @param wdef 物防
 * @param mdef 魔防
 * @param hb 迴避
 * @param mz 命中
 * @param ty 跳躍
 * @param yd 移動速度
 * @param time 時間
 */
    gainItem(id: number, quantity: number, str: number, dex: number, luk: number, Int: number, hp: number, mp: number, watk: number, matk: number, wdef: number, mdef: number, hb: number, mz: number, ty: number, yd: number, time: number): void;
    /**
 * 獲得物品
 * 
 * @param id
 * @param quantity
 * @param str 力量
 * @param dex 敏捷
 * @param luk 幸運
 * @param Int 智力
 * @param hp 血量
 * @param mp 魔力
 * @param watk 物攻
 * @param matk 魔攻
 * @param wdef 物防
 * @param mdef 魔防
 * @param hb 迴避
 * @param mz 命中
 * @param ty 跳躍
 * @param yd 移動速度
 * @param slot 卷軸數
 * @param cg MapleClient
 * @param time 時間
 * @param owner 刻名
 */
    gainItemS(id: number, quantity: number, str: number, dex: number, luk: number, Int: number, hp: number, mp: number, watk: number, matk: number, wdef: number, mdef: number, hb: number, mz: number, ty: number, yd: number, slot: number, cg: MapleClient, time: number, owner: string): void;
    /**
 * 獲得物品
 * 
 * @param id
 * @param quantity
 * @param str 力量
 * @param dex 敏捷
 * @param luk 幸運
 * @param Int 智力
 * @param hp 血量
 * @param mp 魔力
 * @param watk 物攻
 * @param matk 魔攻
 * @param time
 */
    gainItem(id: number, quantity: number, str: number, dex: number, luk: number, Int: number, hp: number, mp: number, watk: number, matk: number, time: number): void;
    /**
 * 獲得物品
 * 
 * @param id
 * @param quantity
 * @param str
 * @param dex
 * @param luk
 * @param Int
 * @param hp
 * @param mp
 * @param watk
 * @param matk
 * @param time
 * @param Potential1
 * @param Potential2
 * @param Potential3
 * @param Potential4
 * @param Potential5
 */
    gainItemPotential(id: number, quantity: number, str: number, dex: number, luk: number, Int: number, hp: number, mp: number, watk: number, matk: number, time: number, Potential1: number, Potential2: number, Potential3: number, Potential4: number, Potential5: number): void;
    /**
 * 獲得物品
 * 
 * @param id
 * @param quantity
 * @param str
 * @param dex
 * @param luk
 * @param Int
 * @param hp
 * @param mp
 * @param watk
 * @param matk
 * @param time
 * @param Potential1
 * @param Potential2
 * @param Potential3
 * @param Potential4
 * @param Potential5
 * @param Potential6
 */
    gainItemPotential(id: number, quantity: number, str: number, dex: number, luk: number, Int: number, hp: number, mp: number, watk: number, matk: number, time: number, Potential1: number, Potential2: number, Potential3: number, Potential4: number, Potential5: number, Potential6: number): void;
    /**
 * 獲得物品
 * 
 * @param id
 * @param quantity
 * @param str 力量
 * @param dex 敏捷
 * @param luk 幸運
 * @param Int 智力
 * @param hp 血量
 * @param mp 魔力
 * @param watk 物攻
 * @param matk 魔攻
 * @param wdef 物防
 * @param mdef 魔防
 * @param hb 迴避
 * @param mz 命中
 * @param ty 跳躍
 * @param yd 移動速度
 * @param time
 * @param Potential1 潛能1
 * @param Potential2 潛能2
 * @param Potential3 潛能3
 * @param Potential4 潛能4
 * @param Potential5 潛能5
 * @param Potential6 潛能6
 */
    gainItemPotential(id: number, quantity: number, str: number, dex: number, luk: number, Int: number, hp: number, mp: number, watk: number, matk: number, wdef: number, mdef: number, hb: number, mz: number, ty: number, yd: number, time: number, Potential1: number, Potential2: number, Potential3: number, Potential4: number, Potential5: number, Potential6: number): void;
    gainItemS(id: number, quantity: number, str: number, dex: number, luk: number, Int: number, hp: number, mp: number, watk: number, matk: number, wdef: number, mdef: number, hb: number, mz: number, ty: number, yd: number, cg: MapleClient, time: number): void;
    /**
 * 獲得物品
 * 
 * @param id
 * @param quantity
 * @param str 力量
 * @param dex 敏捷
 * @param luk 幸運
 * @param Int 智力
 * @param hp 血量
 * @param mp 魔力
 * @param watk 物攻
 * @param matk 魔攻
 * @param wdef 物防
 * @param mdef 魔防
 * @param hb 迴避
 * @param mz 命中
 * @param ty 跳躍
 * @param yd 移動速度
 * @param cg
 * @param time
 */
    gainItemS(id: number, quantity: number, str: number, dex: number, luk: number, Int: number, hp: number, mp: number, watk: number, matk: number, wdef: number, mdef: number, hb: number, mz: number, ty: number, yd: number, cg: MapleClient, time: number, show: boolean): void;
    /**
 * 獲得物品
 * 
 * @param id
 * @param quantity
 * @param str
 * @param dex
 * @param luk
 * @param Int
 * @param hp
 * @param mp
 * @param watk
 * @param matk
 * @param wdef
 * @param mdef
 * @param hb
 * @param mz
 * @param ty
 * @param yd
 * @param time
 */
    gainItemAdd(id: number, quantity: number, str: number, dex: number, luk: number, Int: number, hp: number, mp: number, watk: number, matk: number, wdef: number, mdef: number, hb: number, mz: number, ty: number, yd: number, time: number): void;
    /**
 * 獲得物品
 * 
 * @param id
 * @param quantity
 * @param str 力量
 * @param dex 敏捷
 * @param luk 幸運
 * @param Int 智力
 * @param hp 血量
 * @param mp 魔力
 * @param watk 物攻
 * @param matk 魔攻
 * @param wdef 物防
 * @param mdef 魔防
 * @param hb 迴避
 * @param mz 命中
 * @param ty 跳躍
 * @param yd 移動速度
 * @param cg
 * @param time
 */
    gainItemAdd(id: number, quantity: number, str: number, dex: number, luk: number, Int: number, hp: number, mp: number, watk: number, matk: number, wdef: number, mdef: number, hb: number, mz: number, ty: number, yd: number, cg: MapleClient, time: number): void;
    /**
 * 換指定的音樂
 * 
 * @param songName wz路徑
 */
    changeMusic(songName: string): void;
    /**
 * 沒屁用
 */
    channelMapPlayerAllBuuff(): void;
    /**
 * 世界廣
 * 
 * @param text 廣播內容
 */
    worldMessage(text: string): void;
    /**
 * 世界廣
 * 
 * @param type 廣播型態 0: [公告事項]%s 1: 彈窗訊息 5: 紅色訊息 6: 藍色訊息
 * @param message 廣播內容
 */
    worldMessage(type: number, message: string): void;
    /**
 * 世界黃廣
 * 
 * @param message 黃廣內容
 */
    worldYellowMessage(message: string): void;
    /**
 * 
 * @param message
 */
    worldTopMessage(message: string): void;
    /**
 * 
 * @param message
 */
    worldMusic(message: string): void;
    /**
 * 愛心世界廣
 * 
 * @param message 廣播內容
 */
    worldHeartMessage(message: string): void;
    /**
 * 愛心世界廣
 * 
 * @param title 開頭
 * @param message 廣播內容
 */
    heartWorldMessage(title: string, message: string): void;
    /**
 * 骷顱世界廣
 * 
 * @param message 廣播內容
 */
    skullWorldMessage(message: string): void;
    blueWorldMessage(title: string, message: string): void;
    /**
 * 骷顱世界廣
 * 
 * @param title 開頭
 * @param message 廣播內容
 */
    skullWorldMessage(title: string, message: string): void;
    /**
 * 發送世界封包
 * 
 * @param message byte[]包體
 */
    broadcastMessage(message: any): void;
    /**
 * 發送角色訊息
 * 
 * @param message 訊息
 */
    playerMessage(message: string): void;
    /**
 * 發送地圖訊息
 * 
 * @param message 訊息
 */
    mapMessage(message: string): void;
    /**
 * 發送地圖黃廣
 * 
 * @param message
 */
    yellowMapMessage(message: string): void;
    /**
 * 發送地圖愛心廣
 * 
 * @param title 開頭
 * @param message 訊息
 */
    heartMapMessage(title: string, message: string): void;
    /**
 * 發送地圖骷顱廣
 * 
 * @param title
 * @param message
 */
    skullMapMessage(title: string, message: string): void;
    /**
 * 發送公會訊息
 * 
 * @param message
 */
    guildMessage(message: string): void;
    /**
 * 發送角色訊息
 * 
 * @param type 廣播型態 0: [公告事項]%s 1: 彈窗訊息 5: 紅色訊息 6: 藍色訊息
 * @param message
 */
    playerMessage(type: number, message: string): void;
    /**
 * 發送地圖訊息
 * 
 * @param type 廣播型態 0: [公告事項]%s 1: 彈窗訊息 5: 紅色訊息 6: 藍色訊息
 * @param message
 */
    mapMessage(type: number, message: string): void;
    /**
 * 發送公會訊息
 * 
 * @param type 廣播型態 0: [公告事項]%s 1: 彈窗訊息 5: 紅色訊息 6: 藍色訊息
 * @param message
 */
    guildMessage(type: number, message: string): void;
    /**
 * 獲得公會
 * 
 * @return MapleGuild
 */
    getGuild(): any;
    /**
 * 獲得指定公會ID的公會
 * 
 * @param guildid
 * @return MapleGuild
 */
    getGuild(guildid: number): any;
    /**
 * 獲得組隊
 * 
 * @return MapleParty
 */
    getParty(): any;
    /**
 * 獲得指定地圖上的組隊
 * 
 * @param mapid
 * @return
 */
    getCurrentPartyId(mapid: number): number;
    /**
 * 判斷是否為隊長
 * 
 * @return boolean
 */
    isLeader(): boolean;
    /**
 * 沒屁用
 * 
 * @param job
 * @return
 */
    isAllPartyMembersAllowedJob(job: number): boolean;
    /**
 * 判斷是否隊伍內所有角色都在同一張地圖上
 * 
 * @return boolean
 */
    allMembersHere(): boolean;
    /**
 * 傳送組隊所有角色到指定的地圖
 * 
 * @param mapId
 */
    warpParty(mapId: number): void;
    /**
 * 傳送組隊所有角色到指定的地圖
 * 
 * @param mapId
 * @param portal 傳點編號
 */
    warpParty(mapId: number, portal: number): void;
    /**
 * 
 * @param mapId
 */
    warpParty_Instanced(mapId: number): void;
    /**
 * 獲得楓幣
 * 
 * @param gain 數量
 */
    gainMeso(gain: number): void;
    /**
 * 獲得經驗
 * 
 * @param gain 數量
 */
    gainExp(gain: number): void;
    /**
 * 獲得經驗含伺服器加成
 * 
 * @param gain 數量
 */
    gainExpR(gain: number): void;
    /**
 * 所有組隊內的玩家統一獲得物品
 * 
 * @param id
 * @param quantity
 * @param party List<MapleCharacter>
 */
    givePartyItems(id: number, quantity: number, party: any): void;
    /**
 * 移除組隊玩家物品
 * 
 * @param id 物品代碼
 */
    removePartyItems(id: number): void;
    /**
 * 所有組隊內的玩家統一獲得物品
 * 
 * @param id 物品代碼
 * @param quantity 數量
 */
    givePartyItems(id: number, quantity: number): void;
    /**
 * 所有組隊內的玩家統一獲得紅利
 * 
 * @param quantity 數量
 */
    givePartyPoints(quantity: number): void;
    /**
 * 所有組隊內的玩家統一獲得物品
 * 
 * @param id
 * @param quantity
 * @param removeAll 是否全部移除
 */
    givePartyItems(id: number, quantity: number, removeAll: boolean): void;
    /**
 * 整個隊伍獲得MapleTrait
 * 
 * @param t
 * @param e
 * @param party
 */
    addPartyTrait(t: string, e: number, party: any): void;
    /**
 * 整個隊伍獲得MapleTrait
 * 
 * @param t
 * @param e
 */
    addPartyTrait(t: string, e: number): void;
    /**
 * 獲得角色當前地圖ID
 * 
 * @return
 */
    getMapId(): number;
    /**
 * 進入菇菇王國
 */
    inMushroomCastle(): void;
    /**
 * 獲得mapleTrait值
 * 
 * @param t
 * @param e
 */
    addTrait(t: string, e: number): void;
    /**
 * 所有組隊內的玩家統一獲得經驗
 * 
 * @param amount
 * @param party List<MapleCharacter>
 */
    givePartyExp(amount: number, party: any): void;
    /**
 * 
 * @param maxLevel
 * @param mod
 */
    gainExp_PQ(maxLevel: number, mod: number): void;
    /**
 * 
 * @param maxLevel
 * @param mod
 */
    givePartyExp_PQ(maxLevel: number, mod: number): void;
    /**
 * 所有組隊內的玩家統一獲得經驗
 * 
 * @param amount 數量
 */
    givePartyExp(amount: number): void;
    /**
 * 所有組隊內的玩家統一獲得GASH
 * 
 * @param amount
 * @param party List<MapleCharacter>
 */
    givePartyNX(amount: number, party: any): void;
    /**
 * 所有組隊內的玩家統一獲得GASH
 * 
 * @param amount 數量
 */
    givePartyNX(amount: number): void;
    /**
 * 
 * @param amount
 * @param party
 */
    endPartyQuest(amount: number, party: any): void;
    /**
 * 所有組隊玩家結束指定任務
 * 
 * @param amount 任務
 */
    endPartyQuest(amount: number): void;
    /**
 * 
 * @param id
 * @param party
 */
    removeFromParty(id: number, party: any): void;
    /**
 * 移除組隊玩家指定物品
 * 
 * @param id
 */
    removeFromParty(id: number): void;
    /**
 * 使用技能
 * 
 * @param skill 技能代碼
 * @param level 技能等級
 */
    useSkill(skill: number, level: number): void;
    useSkill(skill: number, level: number, duraction: number): void;
    /**
 * 
 * @param guildid
 * @param skill
 * @param level
 */
    useGuildSkill(guildid: number, skill: number, level: number): void;
    /**
 * 使用物品
 * 
 * @param id 物品代碼
 */
    useItem(id: number): void;
    /**
 * 使用物品
 * 
 * @param id 物品代碼
 * @param show 是否出現訊息
 */
    useItem(id: number, show: boolean): void;
    /**
 * 
 * @param id
 */
    usePartyItem(id: number): void;
    /**
 * 關閉物品效果
 * 
 * @param id 物品代碼
 */
    cancelItem(id: number): void;
    /**
 * 不知道啥鬼
 * 
 * @return
 */
    getMorphState(): number;
    /**
 * 移除所有物品
 * 
 * @param id
 */
    removeAll(id: number): void;
    /**
 * 獲得親密度
 * 
 * @param closeness 數量
 * @param index 第幾個寵物
 */
    gainCloseness(closeness: number, index: number): void;
    /**
 * 所有寵物獲得親密度
 * 
 * @param closeness 親密度
 */
    gainClosenessAll(closeness: number): void;
    /**
 * 重製地圖
 * 
 * @param mapid
 */
    resetMap(mapid: number): void;
    /**
 * 開啟NPC
 * 
 * @param id NPC代碼
 */
    openNpc(id: number): void;
    /**
 * 
 */
    openNpc(): void;
    /**
 * 開啟NPC
 * 
 * @param filename NPC路徑
 */
    openNpc(filename: string): void;
    /**
 * 開啟NPC
 * 
 * @param client
 * @param filename
 */
    openNpc(client: MapleClient, filename: string): void;
    /**
 * 開啟NPC
 * 
 * @param id
 * @param mode
 */
    openNpc(id: number, mode: number): void;
    /**
 * 開啟NPC
 * 
 * @param cg
 * @param id
 */
    openNpc(cg: MapleClient, id: number): void;
    /**
 * 開啟NPC
 * 
 * @param id
 * @param script
 */
    openNpc(id: number, script: string): void;
    /**
 * 開啟NPC
 * 
 * @param cg
 * @param id
 * @param script
 */
    openNpc(cg: MapleClient, id: number, script: string): void;
    /**
 * 開啟NPC
 * 
 * @param cg
 * @param id
 * @param mode
 * @param script
 */
    openNpc(cg: MapleClient, id: number, mode: number, script: string): void;
    /**
 * 沒用
 * 
 * @return
 */
    cm(): number;
    /**
 * 判斷地圖是否擁有怪物
 * 
 * @param mobid
 * @return boolean
 */
    haveMonster(mobid: number): boolean;
    /**
 * 獲得當前頻道
 * 
 * @return int
 */
    getChannelNumber(): number;
    /**
 * 獲得指定地圖怪物數量
 * 
 * @param mapid
 * @return int
 */
    getMonsterCount(mapid: number): number;
    /**
 * 學技能
 * 
 * @param id 技能代碼
 * @param level 等級
 * @param masterlevel 最大等級
 */
    teachSkill(id: number, level: number, masterlevel: any): void;
    /**
 * 學技能
 * 
 * @param id 技能代碼
 * @param level 等級
 * @param masterlevel 最大等級
 * @param time 時間
 */
    teachSkill(id: number, level: any, masterlevel: any, time: any): void;
    /**
 * 學技能
 * 
 * @param id 技能代碼
 * @param level 等級
 */
    teachSkill(id: number, level: number): void;
    /**
 * 獲得技能等級
 * 
 * @param chr MapleCharacter
 * @param skillId 技能代碼
 * @param job 角色職業
 * @return
 */
    getSkillLevel(chr: MapleCharacter, skillId: number, job: number): number;
    /**
 * 獲得職業的技能代碼
 * 
 * @param chr MapleCharacter
 * @param skillId
 * @param job
 * @return
 */
    getSkillByJob(chr: MapleCharacter, skillId: number, job: number): number;
    /**
 * 是否擁有技能
 * 
 * @param id
 * @param level
 * @return boolean
 */
    haveSkill(id: number, level: any): boolean;
    /**
 * 技能是否存在
 * 
 * @param id
 * @return boolean
 */
    skillExist(id: number): boolean;
    /**
 * 獲得地圖上角色數量
 * 
 * @param mapid 地圖代碼
 * @return int
 */
    getPlayerCount(mapid: number): number;
    /**
 * 獲得地圖上角色數量
 * 
 * @param mapid 地圖代碼
 * @return int
 */
    PlayerCount(mapid: number): number;
    /**
 * 
 */
    dojo_getUp(): void;
    /**
 * 地圖瞬間移動
 * 
 * @param k 傳點編號
 */
    instantMapWarp(k: number): void;
    /**
 * 地圖瞬間移動
 * 
 * @param map 地圖
 * @param portal 傳點編號
 */
    instantMapWarp(map: number, portal: number): void;
    /**
 * 武陵道場使用的東西
 * 
 * @param dojo
 * @param fromresting
 * @return
 */
    dojoAgent_NextMap(dojo: boolean, fromresting: boolean): boolean;
    /**
 * 武陵道場使用的東西
 * 
 * @return
 */
    dojo_getPts(): number;
    /**
 * 獲得指定的event
 * 
 * @param loc
 * @return
 */
    getEvent(loc: string): any;
    /**
 * 獲得保存的離線位置
 * 
 * @param loc
 * @return
 */
    getSavedLocation(loc: string): number;
    /**
 * 獲得保存的離線位置
 * 
 * @param loc
 * @param defaultMapid
 * @return
 */
    getSavedLocation(loc: string, defaultMapid: number): number;
    /**
 * 保存最後離線的位置
 * 
 * @param loc
 */
    saveLocation(loc: string): void;
    /**
 * 保存最後離線的位置
 * 
 * @param loc
 */
    saveReturnLocation(loc: string): void;
    /**
 * 清除最後離線的位置
 * 
 * @param loc
 */
    clearSavedLocation(loc: string): void;
    summonMsg(msg: string): void;
    summonMsg(type: number): void;
    /**
 * 
 * @param msg
 * @param width
 * @param height
 */
    showInstruction(msg: string, width: number, height: number): void;
    /**
 * 地圖發送指定特效
 * 
 * @param effect 特效的wz路徑 ex:"pepeKing/pepe/pepeB"
 */
    showEffect(effect: string): void;
    /**
 * 發送指定特效
 * 
 * @param broadcast 是否全地圖
 * @param effect 特效的wz路徑 ex:"pepeKing/pepe/pepeB"
 */
    showEffect(broadcast: boolean, effect: string): void;
    /**
 * 
 * @param summon
 */
    playerSummonHint(summon: boolean): void;
    /**
 * 獲得InfoQuest
 * 
 * @param id
 * @return
 */
    getInfoQuest(id: number): string;
    /**
 * 更新InfoQuest
 * 
 * @param id
 * @param data
 */
    updateInfoQuest(id: number, data: string): void;
    getEvanIntroState(data: string): boolean;
    updateEvanIntroState(data: string): void;
    Aran_Start(): void;
    evanTutorial(data: string, v1: number): void;
    AranTutInstructionalBubble(data: string): void;
    /**
 * 顯示WZ特效
 * 
 * @param data
 */
    ShowWZEffect(data: string): void;
    ShowMapWZEffect(data: string): void;
    /**
 * 顯示WZ特效
 * 
 * @param data
 */
    showWZEffect(data: string): void;
    /**
 * 顯示WZ特效
 * 
 * @param data
 */
    showWZEffectNew(data: string): void;
    EarnTitleMsg(data: string): void;
    MovieClipIntroUI(enabled: boolean): void;
    /**
 * 獲得MapleInventoryType
 * 
 * @param i 1 2 3 4 5
 * @return
 */
    getInvType(i: number): any;
    /**
 * 獲得物品名稱
 * 
 * @param id
 * @return
 */
    getItemName(id: number): string;
    /**
 * 獲得寵物
 * 
 * @param id
 * @param name
 * @param level
 * @param closeness 親密度
 * @param fullness 飽足度
 */
    gainPet(id: number, name: string, level: number, closeness: number, fullness: number): void;
    /**
 * 獲得寵物
 * 
 * @param id
 * @param period
 */
    gainPet(id: number, period: number): void;
    /**
 * 獲得寵物
 * 
 * @param id
 * @param name
 * @param level
 * @param closeness
 * @param fullness
 * @param period
 */
    gainPet(id: number, name: string, level: number, closeness: number, fullness: number, period: number): void;
    /**
 * 獲得寵物
 * 
 * @param id
 * @param name
 * @param level
 * @param closeness
 * @param fullness
 * @param period
 * @param flags
 */
    gainPet(id: number, name: string, level: number, closeness: number, fullness: number, period: number, flags: any): void;
    /**
 * 獲得寵物
 * 
 * @param id
 * @param name
 * @param level
 * @param closeness
 * @param fullness
 * @param period
 * @param flags
 * @param owner
 */
    gainPet(id: number, name: string, level: number, closeness: number, fullness: number, period: number, flags: any, owner: string): void;
    /**
 * 移除指定的格數物品
 * 
 * @param invType 背包欄位 1 2 3 4 5
 * @param slot 位置
 * @param quantity 數量
 */
    removeSlot(invType: number, slot: any, quantity: any): void;
    /**
 * 獲得公會GP
 * 
 * @param gp
 */
    gainGP(gp: number): void;
    /**
 * 
 * @return
 */
    getGP(): number;
    /**
 * 展現地圖特效
 * 
 * @param path
 */
    showMapEffect(path: string): void;
    /**
 * 獲得物品數量
 * 
 * @param itemid
 * @return
 */
    itemQuantity(itemid: number): number;
    /**
 * 獲得EventInstanceManager
 * 
 * @param event
 * @return
 */
    getDisconnected(event: string): any;
    /**
 * 
 * @param reactorId
 * @param state
 * @return
 */
    isAllReactorState(reactorId: number, state: number): boolean;
    /**
 * 獲得現在的時間戳
 * 
 * @return
 */
    getCurrentTime(): number;
    /**
 * 
 * @return
 */
    getTime(): number;
    /**
 * 
 * @return
 */
    NowTime(): string;
    /**
 * 召喚怪物
 * 
 * @param id
 */
    spawnMonster(id: number): void;
    /**
 * 召喚怪物
 * 
 * @param id
 * @param x
 * @param y
 */
    spawnMonster(id: number, x: number, y: number): void;
    /**
 * 召喚怪物
 * 
 * @param id
 * @param qty
 * @param x
 * @param y
 */
    spawnMonster(id: number, qty: number, x: number, y: number): void;
    /**
 * 召喚怪物
 * 
 * @param id
 * @param qty
 * @param pos
 */
    spawnMonster(id: number, qty: number, pos: any): void;
    spawnMonsterSelf(id: number, qty: number, x: number, y: number): void;
    moveMonsterSelf(id: number, x: number, y: number): void;
    /**
 * 召喚龍王
 * 
 * @param times
 */
    spawnDragon(times: number): void;
    /**
 * 召喚怪物
 * 
 * @param mob
 * @param qty
 * @param pos
 */
    spawnMonster(mob: any, qty: number, pos: any): void;
    /**
 * 召喚怪物
 * 
 * @param mob
 * @param qty
 */
    spawnMonster(mob: any, qty: number): void;
    /**
 * 召喚怪物
 * 
 * @param id
 * @return
 */
    getMonster(id: number): any;
    /**
 * 
 * @return
 */
    newMonsterStats(): any;
    /**
 * 發送NPC訊息
 * 
 * @param text
 * @param npc
 */
    sendNPCText(text: string, npc: number): void;
    /**
 * 發送NPC訊息
 * 
 * @param text
 * @param npc
 * @param type
 */
    sendNPCText(text: string, npc: number, type: any): void;
    /**
 * 傳送所有玩家
 * 
 * @param from 從哪張地圖代碼
 * @param to 到哪張地圖代碼
 */
    warpAllPlayer(from: number, to: number): void;
    /**
 * 獲得MapleMapFactory
 * 
 * @return
 */
    getMapFactory(): any;
    /**
 * 進入拍賣
 */
    enterMTS(): void;
    /**
 * 獲得現在頻道的人數
 * 
 * @return
 */
    getChannelOnline(): number;
    /**
 * 獲得線上人數
 * 
 * @return
 */
    getTotalOnline(): number;
    /**
 * 獲得歷史最高上線人數
 * 
 * @return
 */
    getMaxOnlinePlayerCount(): number;
    /**
 * 獲得角色MP
 * 
 * @return
 */
    getMP(): number;
    /**
 * 設定MP
 * 
 * @param x
 */
    setMP(x: number): void;
    /**
 * 保存角色
 * 
 * @param dc
 * @param fromcs
 * @return
 */
    save(dc: boolean, fromcs: boolean): number;
    /**
 * 保存角色
 */
    save(): void;
    /**
 * 
 * @return
 */
    hasSquadByMap(): boolean;
    /**
 * 
 * @return
 */
    hasEventInstance(): boolean;
    /**
 * 
 * @return
 */
    hasEMByMap(): boolean;
    /**
 * 執行GM命令
 * 
 * @param line
 */
    processCommand(line: string): void;
    /**
 * 傳送角色
 * 
 * @param from 從哪張地圖代碼
 * @param to 到哪張地圖代碼
 */
    warpPlayer(from: number, to: number): void;
    /**
 * 大陸的賭博函數
 * 
 * @param type
 * @param nx
 * @param num
 * @param a
 * @return
 */
    touzhu(type: number, nx: number, num: number, a: number): boolean;
    /**
 * 大陸的賭博函數
 * 
 * @param type
 * @return
 */
    seeTouzhuByType(type: number): number;
    /**
 * 大陸的賭博函數
 * 
 * @return
 */
    seeAlltouzhu(): number;
    /**
 * 大陸的賭博函數
 * 
 * @return
 */
    seeAllpeichu(): number;
    /**
 * 黑窗輸出訊息
 * 
 * @param text
 */
    print(text: string): void;
    /**
 * 黑窗輸出訊息
 * 
 * @param text
 */
    SystemOutPrintln(text: string): void;
    /**
 * 關閉NPC對話
 */
    dispose(): void;
    /**
 * 檢查物品
 * 
 * @param chr
 * @param items int[]
 * @return
 */
    checkSlot(chr: MapleCharacter, items: any): boolean;
    /**
 * 獲得地圖玩家數量
 * 
 * @param mapid
 * @return
 */
    getMapPlayerSize(mapid: number): number;
    /**
 * 
 * @param bytype
 * @param num
 * @return
 */
    canHoldByType(bytype: any, num: number): boolean;
    /**
 * 
 * @param bytype
 * @param num
 * @return
 */
    canHoldByTypea(bytype: any, num: number): boolean;
    /**
 * 查看是否存在此物品
 * 
 * @param hair
 * @return boolean
 */
    itemExists(hair: number): boolean;
    /**
 * 查看是否存在此頭髮
 * 
 * @param hair
 * @return boolean
 */
    hairExists(hair: number): boolean;
    /**
 * 查看是否存在此臉型
 * 
 * @param face
 * @return boolean
 */
    faceExists(face: number): boolean;
    /**
 * 獲取任務狀態
 * 
 * @param id 任務id
 * @return MapleQuestStatus
 */
    getQuest(id: number): any;
    /**
 * 獲取任務info
 * 
 * @param questId
 * @return String
 */
    getQuestInfo(questId: number): string;
    /**
 * 設定任務info
 * 
 * @param questId
 * @param info
 */
    setQuestInfo(questId: number, info: string): void;
    /**
 * 是否可以換名字
 * 
 * @param name
 * @return boolean
 */
    canChangeName(name: string): boolean;
    /**
 * 飛到公會地圖
 * 
 * @param mapid
 * @param Practicemap
 */
    warpGuildMap(mapid: number, Practicemap: boolean): void;
    /**
 * 飛到專屬小屋
 * 
 * @param mapid
 * @param accid
 * @param characterid
 */
    warpCharacterMap(mapid: number, accid: number, characterid: number): void;
    /**
 * 飛到專屬小屋
 * 
 * @param mapid
 */
    warpCharacterMap(mapid: number): void;
    /**
 * 飛到公會地圖
 * 
 * @param mapid
 */
    warpGuildMap(mapid: number): void;
    /**
 * 進入商城
 * 
 * @param newcs
 */
    enterCS(newcs: number): void;
    /**
 * 查看是否物品有獲得的限制
 * 
 * @param itemid
 * @return boolean
 */
    gainRestricted(itemid: number): boolean;
    /**
 * 獲得強化合成技能
 * 
 * @return
 */
    gainEnhanceSkill(): boolean;
    getEnhanceSkillLevel(): number;
    /**
 * 獲得三寵技能
 * 
 * @return
 */
    gainThreePetSkill(): boolean;
    trembleEffect(type: number, delay: number): void;
    /**
 * 獲得MapleInventory
 * 
 * @param type 1 2 3 4 5
 * @return
 */
    getInventory(type: number): any;
    /**
 * 隨機數
 * 
 * @param arg0
 * @return
 */
    randInt(arg0: number): number;
    /**
 * 獲得相對應的職業技能
 * 
 * @param skillID
 * @param job
 * @return
 */
    getSkillByJob(skillID: number, job: number): number;
    /**
 * 獲得機器人型態
 * 
 * @param type "HAIR","FACE","GENDER"
 * @return
 */
    getAndroidStat(type: string): number;
    /**
 * 
 * @param add
 */
    gainFatigue(add: number): void;
    /**
 * 獲得身上的所有裝備
 * 
 * @return List<IItem>
 */
    getEquipList(): any;
    /**
 * 獲得所有潛能方塊
 * 
 * @return List<IItem>
 */
    getPotentiallist(): any;
    /**
 * 獲得所有放大鏡
 * 
 * @return List<IItem>
 */
    getMagnifylist(): any;
    /**
 * 使用方塊
 * 
 * @param c
 * @param slot
 * @param itemId
 * @return
 */
    UseCube(c: MapleClient, slot: number, itemId: number): boolean;
    /**
 * 使用方塊
 * 
 * @param equip
 * @param scroll
 * @return
 */
    UseCube(equip: any, scroll: any): number;
    /**
 * 使用放大鏡
 * 
 * @param equip
 * @param scroll
 */
    UseMagnify(equip: any, scroll: any): void;
    sendPQreward(): void;
    /**
 * 判斷身上是否有空間獲得物品
 * 
 * @param itemid
 * @param num
 * @return
 */
    hasSpace(itemid: number, num: number): boolean;
    /**
 * 判斷身上是否有空間獲得物品
 * 
 * @param num
 * @return
 */
    hasSpace(num: number): boolean;
    /**
 * 控制UI相關功能 黑畫面之類的 跑動畫用
 * 
 * @param enabled
 */
    disableOthers(enabled: boolean): void;
    /**
 * 控制UI相關功能 黑畫面之類的 跑動畫用
 * 
 * @param enable
 */
    getDirectionStatus(enable: boolean): void;
    /**
 * 控制UI相關功能 黑畫面之類的 跑動畫用
 * 
 * @param key
 * @param value
 */
    sendDirectionStatus(key: number, value: number): void;
    /**
 * 控制UI相關功能 黑畫面之類的 跑動畫用
 * 
 * @param key
 * @param value
 * @param direction
 */
    sendDirectionStatus(key: number, value: number, direction: boolean): void;
    /**
 * 控制UI相關功能 黑畫面之類的 跑動畫用
 * 
 * @param type
 * @param value
 */
    getDirectionInfo(type: any, value: number): void;
    /**
 * 控制UI相關功能 黑畫面之類的 跑動畫用
 * 
 * @param data
 * @param value
 * @param x
 * @param y
 * @param a
 */
    getDirectionInfo(data: string, value: number, x: number, y: number, a: number): void;
    /**
 * 控制UI相關功能 黑畫面之類的 跑動畫用
 * 
 * @param i
 */
    EnableUI(i: any): void;
    /**
 * 控制UI相關功能 黑畫面之類的 跑動畫用
 * 
 * @param enable
 */
    EnableUI(enable: boolean): void;
    /**
 * 控制UI相關功能 黑畫面之類的 跑動畫用
 * 
 * @param i
 * @param block
 */
    EnableUI(i: any, block: any): void;
    /**
 * 控制UI相關功能 黑畫面之類的 跑動畫用
 * 
 * @param enabled
 */
    DisableUI(enabled: boolean): void;
    sendMoveScreen(x: number, y: number, delay: number): void;
    sendResetMoveScreen(): void;
    /**
 * 播放影片
 * 
 * @param data
 * @param show
 */
    playMovie(data: string, show: boolean): void;
    /**
 * 發送文字封包
 * 
 * @param message
 */
    topMsg(message: string): void;
    /**
 * 發送文字封包
 * 
 * @param message
 */
    getTopMsg(message: string): void;
    /**
 * 發送文字封包
 * 
 * @param message
 */
    midMsg(message: string): void;
    /**
 * 發送文字封包
 * 
 * @param message
 */
    getMidMsg(message: string): void;
    /**
 * 發送文字封包
 * 
 * @param message
 * @param keep
 * @param index
 */
    getMidMsg(message: string, keep: boolean, index: number): void;
    /**
 * 重新載入指定的裝備(星力卷軸會用到)
 * 
 * @param scrolled IEquip
 */
    reloadEquip(scrolled: any): void;
    /**
 * 重新載入指定的裝備(星力卷軸會用到)
 * 
 * @param scrolled IEquip
 */
    removeItem(scrolled: any): void;
    /**
 * 獲得怪物名稱
 * 
 * @param id
 * @return
 */
    getMobName(id: number): string;
    /**
 * 獲得地圖名稱
 * 
 * @param id
 * @return
 */
    getMapName(id: number): string;
    /**
 * 產生隨機數字
 * 
 * @param min
 * @param max
 * @return
 */
    Random(min: number, max: number): number;
    showScreenAutoLetterBox(effect: string): void;
    showScreenAutoLetterBox(broadcast: boolean, effect: string): void;
    /**
 * 獲得指定武器的裝備需要等級
 * 
 * @param itemId
 * @return
 */
    getReqLevel(itemId: number): number;
    /**
 * 重製地圖
 * 
 * @param mapid
 * @param respawn
 */
    resetMap(mapid: number, respawn: boolean): void;
    /**
 * 獲得指定任務代碼的CustomData
 * 
 * @param questid
 * @return
 */
    getQuestCustomData(questid: number): string;
    /**
 * 設定任務參數
 * 
 * @param questid
 * @param customData
 */
    setQuestCustomData(questid: number, customData: string): void;
    /**
 * 打開網頁
 * 
 * @param url 網頁連結
 */
    openWeb(url: string): void;
    /**
 * 傳點瞬間移動相關的功能
 * 
 * @param map
 * @param portal
 */
    warpPQsPortal(map: number, portal: number): void;
    sendDirectionInfo(data: string): void;
    /**
 * 發能力重製封包
 */
    resetTemporaryStats(): void;
    /**
 * 獲得伺服器版本
 * 
 * @return
 */
    getVersion(): number;
    /**
 * 倒數時間飛往指定地圖
 * 
 * @param target
 * @param time
 */
    warpMapWithClock(target: number, time: number): void;
    run(): void;
    /**
 * 獲得雙項鍊
 * 
 * @param day 天數
 */
    addDoublePendant1(day: number): void;
    /**
 * 獲得雙項鍊
 * 
 * @param day
 */
    addDoublePendant(day: number): void;
    /**
 * 獲得座標
 * 
 * @param x
 * @param y
 * @return
 */
    getPoint(x: number, y: number): any;
    /**
 * 獲得伺服器紀錄
 * 
 * @param s 名稱
 * @param amount 數量
 */
    gainServerSet(s: string, amount: number): void;
    /**
 * 設定伺服器紀錄
 * 
 * @param s 名稱
 * @param amount 數量
 */
    setServerSet(s: string, amount: number): void;
    /**
 * 獲得伺服器紀錄
 * 
 * @param s 名稱
 * @return
 */
    getServerSet(s: string): number;
    setServerSetString(s: string, amount: string): void;
    /**
 * 獲得伺服器紀錄
 * 
 * @param s 名稱
 * @return
 */
    getServerSetString(s: string): string;
    /**
 * 設定伺服器Boss紀錄
 * 
 * @param s 名稱
 * @param amount 數量
 */
    setBossServerSet(s: string, amount: number): void;
    /**
 * 獲得伺服器Boss紀錄
 * 
 * @param s 名稱
 * @return
 */
    getBossServerSet(s: string): number;
    getServerSetKeys(s: string): any;
    /**
 * 判斷所有欄位是否擁有指定的空欄數量
 * 
 * @param slot
 * @return
 */
    canHoldSlots(slot: number): boolean;
    /**
 * 發送綠廣
 * 
 * @param itemid 物品ID
 * @param count 數量
 * @param msg 訊息
 */
    sendGachaponMega(itemid: number, count: number, msg: string): void;
    /**
 * 鎖住螢幕窗(高版本專用)
 */
    lockUI(): void;
    /**
 * 
 */
    unlockUI(): void;
    /**
 * 鎖住螢幕窗(高版本專用)
 * 
 * @param enable
 */
    lockUI(enable: boolean): void;
    /**
 * 鎖住螢幕窗(高版本專用)
 * 
 * @param enable
 * @param enable2
 */
    lockUI(enable: boolean, enable2: number): void;
    /**
 * 鎖住螢幕窗(高版本專用)
 * 
 * @param enable
 * @param enable2
 */
    lockUI(enable: number, enable2: number): void;
    /**
 * 播放音效
 * 
 * @param data
 */
    playSoundEffect(data: string): void;
    /**
 * 播放音效
 * 
 * @param data
 */
    playVoiceEffect(data: string): void;
    setSkillMap(skillId: number, key: number): void;
    showEnvironment(mode: number, env: string, info: any): void;
    showEnvironment(broadcast: boolean, mode: number, env: string, info: any): void;
    /**
 * 製作武器並獲得它
 * 
 * @param item
 * @param stat
 * @param hpmp
 * @param atk
 * @param def
 * @param scroll
 */
    makeStatsEquip(item: number, stat: any, hpmp: any, atk: any, def: any, scroll: any): void;
    /**
 * 製作武器並獲得它
 * 
 * @param item
 * @param stat
 * @param hpmp
 * @param atk
 * @param def
 * @param scroll
 * @param owner
 */
    makeStatsEquip(item: number, stat: any, hpmp: any, atk: any, def: any, scroll: any, owner: string): void;
    /**
 * 獲得一個Equip
 * 
 * @param item 裝備代碼
 * @return Equip
 */
    createEquip(item: number): any;
    /**
 * 創建武器
 * 
 * @param item
 * @param random
 * @return
 */
    createEquip(item: number, random: boolean): any;
    /**
 * 創建武器
 * 
 * @param item
 * @param stat
 * @param hpmp
 * @param atk
 * @param def
 * @param scroll
 * @param owner
 * @return
 */
    createEquip(item: number, stat: any, hpmp: any, atk: any, def: any, scroll: any, owner: string): any;
    /**
 * 事前獎勵用的
 * 
 * @param function
 * @return
 */
    haveAccPrize(function: string): boolean;
    /**
 * 事前獎勵用的
 * 
 * @param function
 */
    deleteAccPrizeLog(function: string): void;
    /**
 * 事前獎勵用的
 * 
 * @param function
 * @return
 */
    haveNamePrize(function: string): boolean;
    /**
 * 事前獎勵用的
 * 
 * @param function
 */
    deleteNamePrizeLog(function: string): void;
    /**
 * 獲得背包空間
 * 
 * @param type
 * @return
 */
    getSpace(type: any): any;
    getTrueJobGrade(): number;
    /**
 * 連接資料庫
 * 
 * @return DruidPooledConnection
 * @throws java.sql.SQLException
 */
    getConnection(): any;
    /**
 * 隨機獲得一條新聞
 * 
 * @return @throws IOException
 */
    getNews(): string;
    /**
 * 獲得本服名稱
 * 
 * @return
 */
    getServerName(): string;
    /**
 * 訊息特效封包
 * 
 * @param msg
 * @param keep
 * @param index
 * @return
 */
    getMidMsgPacket(msg: string, keep: boolean, index: number): any;
    /**
 * 
 * @return
 */
    clearMidMsg(): any;
    /**
 * 發送角色訊息
 * 
 * @param type 型態
 * @param message 內容
 * @return
 */
    broadcastMessage(type: number, message: string): any;
    /**
 * 
 * @param effect
 * @return
 */
    boatEffect(effect: number): any;
    /**
 * 換音樂
 * 
 * @param song
 * @return
 */
    musicChange(song: string): any;
    /**
 * 顯示一個倒數計時的時鐘
 * 
 * @param time 秒數
 * @return
 */
    getClock(time: number): any;
    /**
 * 全地圖顯示一個倒數計時的時鐘
 * 
 * @param time 秒數
 */
    sendClock(time: number): void;
    /**
 * 顯示衝卷動畫
 * 
 * @param chr
 * @param scrollSuccess
 * @param legendarySpirit
 * @return
 */
    getScrollEffect(chr: number, scrollSuccess: any, legendarySpirit: boolean): any;
    /**
 * 衝卷成公特效
 * 
 * @return
 */
    getSuccess(): any;
    /**
 * 衝卷失敗特效
 * 
 * @return
 */
    getFail(): any;
    /**
 * 詛咒卷特效
 * 
 * @return
 */
    getCurse(): any;
    /**
 * 獲得轉蛋的封包
 * 
 * @param message
 * @param item
 * @param channel
 * @param name
 * @return
 */
    getGachaponMega(message: string, item: any, channel: number, name: string): any;
    /**
 * 獲得轉蛋的封包
 * 
 * @param message
 * @param item
 * @param channel
 * @return
 */
    getGachaponMega(message: string, item: any, channel: number): any;
    /**
 * 獲得訊息封包
 * 
 * @param message
 * @return
 */
    getItemNotice(message: string): any;
    /**
 * 獲取道具廣播的封包
 * 
 * @param message
 * @param itemId
 * @return
 */
    getItemNotice(message: string, itemId: number): any;
    /**
 * 獲取所有鍵盤的封包
 * 
 * @param layout
 * @return
 */
    getKeymap(layout: any): any;
    getTrueJobGrade(job: number): number;
    /**
 * 轉蛋機用的
 * 
 * @param c
 * @param reward
 * @return
 */
    addbyId_Gachapon(c: MapleClient, reward: any): any;
    /**
 * 轉蛋機用的
 * 
 * @param c
 * @param itemId
 * @param quantity
 * @return
 */
    addbyId_Gachapon(c: MapleClient, itemId: number, quantity: any): any;
    /**
 * 轉蛋機用的
 * 
 * @param c
 * @param itemId
 * @param scroll 使否浮動卷軸
 * @return
 */
    addbyId_Gachapon(c: MapleClient, itemId: number, scroll: boolean): any;
    /**
 * 轉蛋機用的
 * 
 * @param c
 * @param itemId
 * @param quantity
 * @param scroll
 * @param name
 * @return
 */
    addbyId_Gachapon(c: MapleClient, itemId: number, quantity: any, scroll: boolean, name: string): any;
    /**
 * 轉蛋機用的
 * 
 * @param c
 * @param itemId
 * @param min
 * @param max
 * @return
 */
    addbyId_Gachapon(c: MapleClient, itemId: number, min: number, max: number): any;
    /**
 * 紀錄log.txt到指定目錄
 * 
 * @param file 目錄檔案名稱
 * @param msg 訊息
 * @param relog
 */
    logToFile(file: string, msg: string, relog: boolean): void;
    /**
 * 紀錄log.txt到指定目錄
 * 
 * @param file 目錄檔案名稱
 * @param msg 訊息
 */
    logToFile(file: string, msg: string): void;
    /**
 * 發送給全體GM封包
 * 
 * @param message
 */
    broadcastGMMessage(message: any): void;
    /**
 * 發送給全體GM訊息
 * 
 * @param message
 */
    broadcastGMMessage(message: string): void;
    /**
 * 獲得地圖全名
 * 
 * @param mapid
 * @return
 */
    getMapFullName(mapid: number): string;
    /**
 * 獲得所有裝備
 * 
 * @return
 */
    getAllEquips(): any;
    /**
 * 判斷是否已經下關服
 * 
 * @return boolean
 */
    isShutDown(): boolean;
    /**
 * 使否可以使用黃金鐵槌
 * 
 * @param itemId
 * @return boolean
 */
    canHammer(itemId: number): boolean;
    /**
 * 使否為武器
 * 
 * @param itemId
 * @return boolean
 */
    isWeapon(itemId: number): boolean;
    /**
 * 獲得MapleCharacter
 * 
 * @param name 角色名稱
 * @return
 */
    getCharacterByName(name: string): MapleCharacter;
    /**
 * 獲得 MapleCharacter
 * 
 * @param id 角色ID
 * @return
 */
    getCharacterById(id: number): MapleCharacter;
    /**
 * 用角色ID獲得線上角色
 * 
 * @param id
 * @return 角色
 */
    getOnlineCharacterById(id: number): MapleCharacter;
    /**
 * 用角色名稱獲得線上角色
 * 
 * @param name
 * @return 角色
 */
    getOnlineCharacterByName(id: string): MapleCharacter;
    /**
 * 獲得 MapleQuest
 * 
 * @param id
 * @return
 */
    getQuestInstance(id: number): any;
    /**
 * 獲得角色身上指定的物品並回傳IItem
 * 
 * @param itemid
 * @return IItem
 */
    getItem(itemid: number): any;
    /**
 * 打開魔法轉盤(須配合登入器)
 * 
 * @param itemid
 * @param count
 */
    openMagicWheel(itemid: number, count: number): void;
    /**
 * 打開魔法蛋(須配合登入器)
 * 
 * @param count
 */
    openMagicEgg(count: number): void;
    /**
 * 發送攻擊音樂
 */
    sendAttackMusic(): void;
    /**
 * 獲得職業名稱
 * 
 * @param job
 * @return
 */
    getJobName(job: number): string;
    /**
 * 
 * @return
 */
    getMonsterRiding(): any;
    /**
 * 獲得角色的頻道
 * 
 * @param cid 角色id
 * @return
 */
    getChannel(cid: number): number;
    /**
 * 獲得物品
 * 
 * @param item
 */
    addByItem(item: any): void;
    /**
 * 
 * @param item
 */
    addItem(item: any): void;
    /**
 * 複製裝備
 * 
 * @param item
 */
    copyItem(item: any): void;
    /**
 * 獲得技能名稱
 * 
 * @param cid
 * @return
 */
    getSkillName(cid: number): string;
    /**
 * 獲得伺服器總經驗倍率加成
 * 
 * @return double
 */
    getExpRate(): number;
    /**
 * 獲得時間
 * 
 * @return String
 */
    getReadableTime(): string;
    /**
 * 獲得指定欄位的所有裝備
 * 
 * @param 裝備欄位(1~5)
 * @return 裝備Collection<IItem>
 */
    getItemList(type: any): any;
    /**
 * Expedition相關功能
 * 
 * @param type
 * @return
 */
    createExpedition(type: any): number;
    /**
 * Expedition相關功能
 * 
 * @param type
 * @param silent
 * @param minPlayers
 * @param maxPlayers
 * @param limitcount
 * @return
 */
    createExpedition(type: any, silent: boolean, minPlayers: number, maxPlayers: number, limitcount: number): number;
    /**
 * Expedition相關功能
 * 
 * @param type
 * @return
 */
    getExpeditionType(type: string): any;
    /**
 * Expedition相關功能
 * 
 * @param exped
 */
    endExpedition(exped: any): void;
    /**
 * Expedition相關功能
 * 
 * @param type
 * @return
 */
    getExpedition(type: any): any;
    /**
 * 獲得Expedition所有人的名稱
 * 
 * @param type
 * @return
 */
    getExpeditionMemberNames(type: any): string;
    /**
 * 判斷自己是否為MapleExpedition的隊長
 * 
 * @param type
 * @return
 */
    isLeaderExpedition(type: any): boolean;
    /**
 * 字面上的意思
 * 
 * @return
 */
    getItemInformationProvider(): any;
    /**
 * 獲得指定的身上物品回傳IItem
 * 
 * @param i
 * @param pos
 * @return IItem
 */
    getItem(i: number, pos: any): any;
    /**
 * 獲得點數
 * 
 * @param i
 * @return
 */
    getCash(i: number): number;
    /**
 * 獲得精靈商人開啟的時間
 * 
 * @return
 */
    getOpenMinute(): number;
    /**
 * 把物品放入倉庫
 * 
 * @param slot
 * @param itemId
 * @param quantity
 */
    putItemToTrunk(slot: any, itemId: number, quantity: any): void;
    /**
 * 抓取網頁資料
 * 
 * @param Url 網址
 * @param type 設定 "Content-Type", "application/" + type
 * @param data 資料
 * @return
 */
    performHttpRequest(Url: string, type: string, data: string): string;
    /**
 * 貓頭鷹查詢
 * 
 * @param itemid
 * @throws ParseException
 */
    sendAuctionOwlSearch(itemid: number): void;
    /**
 * 賭博系統洗牌
 * 
 * @param type 1=百家樂 2=妞妞 3=21點
 */
    shuffle(type: number): void;
    /**
 * 客製化函數
 * 
 * @return
 */
    SearchPlayerBot(): string;
    /**
 * 物品位置調換
 * 
 * @param type
 * @param oripage
 */
    ItemSwift(type: any, oripage: number): void;
    /**
 * ARC參數設定(用不到)
 * 
 * @param set
 */
    setArcItem(set: any): void;
    /**
 * ARC參數設定(用不到)
 * 
 * @param set
 */
    setArcAbility1(set: any): void;
    /**
 * ARC參數設定(用不到)
 * 
 * @param set
 */
    setArcAbility2(set: any): void;
    /**
 * ARC參數設定(用不到)
 * 
 * @param set
 */
    setArcAbility3(set: any): void;
    /**
 * ARC參數設定(用不到)
 * 
 * @param set
 */
    setArcAbility4(set: any): void;
    /**
 * ARC參數設定(用不到)
 * 
 * @param set
 */
    setArcAbility5(set: any): void;
    /**
 * ARC參數設定(用不到)
 * 
 * @param set
 */
    setArcAbility6(set: any): void;
    /**
 * ARC參數設定(用不到)
 * 
 * @param set
 */
    setArcConsume1(set: any): void;
    /**
 * ARC參數設定(用不到)
 * 
 * @param set
 */
    setArcConsume2(set: any): void;
    /**
 * ARC參數設定(用不到)
 * 
 * @param set
 */
    setArcConsume3(set: any): void;
    /**
 * ARC參數設定(用不到)
 * 
 * @param set
 */
    setArcConsume4(set: any): void;
    /**
 * ARC參數設定(用不到)
 * 
 * @param set
 */
    setArcConsume5(set: any): void;
    /**
 * ARC參數設定(用不到)
 * 
 * @param set
 */
    setArcConsume6(set: any): void;
    /**
 * 開啟ARC介面
 */
    openARC(): void;
    /**
 * 
 * @param set
 */
    setMapItem(set: any): void;
    /**
 * 
 * @param set
 */
    setXmasReward(set: any): void;
    /**
 * 
 * @param set
 */
    setXmasReward2(set: any): void;
    /**
 * 
 * @param set
 */
    setXmasReward3(set: any): void;
    /**
 * 用不到
 * 
 * @param set
 */
    setXmasReward4(set: any): void;
    /**
 * 用不到
 * 
 * @param set
 */
    setMobHp(set: any): void;
    /**
 * 用不到
 * 
 * @param set
 * @param type
 */
    setServerExp(set: any, type: number): void;
    /**
 * 用不到
 * 
 * @param set
 * @param type
 */
    setQuestExp(set: any): void;
    /**
 * 用不到
 * 
 * @param set
 * @param type
 * @param max
 */
    setMobPoint(set: any, type: number, max: number): void;
    /**
 * 用不到
 * 
 * @param set
 */
    setCommandRemove(set: any): void;
    /**
 * 獲得商店
 * 
 * @return
 */
    getShopFactory(): any;
    /**
 * 用不到
 * 
 * @param monsterid
 */
    catchMonsterPet(monsterid: number): void;
    /**
 * 用不到
 */
    spawnMonsterPet(): void;
    /**
 * 
 */
    killMonsterPet(): void;
    /**
 * 用不到
 */
    loadArcAbility(): void;
    /**
 * 用不到
 * 
 * @return
 */
    getUniqueMonsters(): any;
    /**
 * 用不到
 * 
 * @return
 */
    getAllCharacterLevel(): number;
    /**
 * 用不到
 * 
 * @return
 */
    getAllCharacterData(): string;
    /**
 * 王谷專用..
 * 
 * @param s
 * @return
 */
    確認轉生數(s: number): number;
    /**
 * 王谷專用..
 * 
 * @param job
 * @param s
 * @return
 */
    確認轉生數(job: number, s: number): number;
    /**
 * 獲得潛能資料
 * 
 * @param id 潛能代碼
 * @param itemid 裝備代碼
 * @return
 */
    getPotintialInfo(id: number, itemid: number): string;
    /**
 * 用不到
 * 
 * @param set
 */
    setMerchantId(set: string): void;
    /**
 * 用不到
 * 
 * @param set
 */
    setHashKey(set: string): void;
    /**
 * 用不到
 * 
 * @param set
 */
    setHashIV(set: string): void;
    /**
 * 用不到
 * 
 * @param set
 */
    setEcpayIP(set: string): void;
    /**
 * 用不到
 * 
 * @param set
 */
    setMerchantId2(set: string): void;
    /**
 * 用不到
 * 
 * @param set
 */
    setHashKey2(set: string): void;
    /**
 * 用不到
 * 
 * @param set
 */
    setHashIV2(set: string): void;
    /**
 * 用不到
 * 
 * @param set
 */
    setEcpaySystem(set: boolean): void;
    /**
 * 用不到
 * 
 * @param set
 */
    setEcpayPort(set: number): void;
    setLineBotPort(set: number): void;
    /**
 * 用不到
 * 
 * @param set
 */
    setLineBot(set: boolean): void;
    /**
 * 用不到
 * 
 * @param set
 */
    setLineUrl(set: string): void;
    /**
 * 隨機取一個數字
 * 
 * @param id
 * @return
 */
    RandomNum(id: any): number;
    /**
 * +\獲得指定帳號ID內所有角色名稱
 * 
 * @return
 */
    getCharacterNames(): any;
    /**
 * 獲得指定帳號ID內所有角色名稱
 * 
 * @param id
 * @return
 */
    getCharacterNames(id: number): any;
    /**
 * 使用ID獲取角色名稱
 * 
 * @param id
 * @return
 */
    getNameById(id: number): string;
    /**
 * 用不到
 * 
 * @param characterid
 * @param mountid
 * @return
 * @throws SQLException
 */
    delMountId(characterid: number, mountid: number): boolean;
    /**
 * 獲得當前帳號所有角色ID
 * 
 * @return
 */
    getChrLevelAll(): number;
    /**
 * 獲得所有公會
 * 
 * @return
 */
    getAllGuilds(): any;
    /**
 * 
 * @param s
 * @param set
 */
    setAllGuildSet(s: string, set: number): void;
    /**
 * 新增公會成員
 * 
 * @param c
 * @param guild
 */
    addGuildMember(c: MapleClient, guild: number): void;
    /**
 * 獲得所有的傷害字型代碼
 * 
 * @return
 */
    getDamageSkin(): any;
    /**
 * 創建Item 回傳類型: IItem
 * 
 * @param itemid 物品代碼
 * @return
 */
    createItem(itemid: number): any;
    /**
 * 搭配server的功能(改腳本用不到)
 */
    sendDragonBall(): void;
    /**
 * 搭配server的功能(改腳本用不到)
 * 
 * @param set
 */
    setBeanSetting(set: any): void;
    /**
 * 搭配server的功能(改腳本用不到)
 * 
 * @param set
 */
    setEquipSet(set: any): void;
    /**
 * 搭配server的功能(改腳本用不到)
 * 
 * @param set
 */
    setMapDrop(set: any): void;
    /**
 * 搭配server的功能(改腳本用不到)
 * 
 * @param set
 */
    setMapSet(set: any): void;
    /**
 * 發送小鋼珠獲得的封包
 * 
 * @param gain
 */
    sendRewardBalls(gain: number): void;
    /**
 * 沒屁用
 * 
 * @param type
 * @return
 */
    getTouzhuPoint(type: number): number;
    /**
 * 獲得所有潛能的資料
 * 
 * @param reqlevel 需求等級
 * @param equip 物品(Equip)
 * @return
 */
    getAllPotentialInfo(reqlevel: number, equip: any): string;
    /**
 * 獲得這周禮拜天的日期
 * 
 * @return
 */
    getThisWeekSunday(): string;
    /**
 * 獲得這下禮拜天的日期
 * 
 * @return
 */
    getNextWeekSunday(): string;
    /**
 * 發送地圖的特效 對應的節點是:Effect/ItemEff.img
 * 
 * @param itemid 物品代碼
 */
    showBuffItemEffect(itemid: number): void;
    /**
 * 獲得台灣股價
 * 
 * @param stockid 股票代號
 * @return
 * @throws java.io.IOException
 */
    getStockPrice(stockid: number): number;
    /**
 * 
 * @param mobid
 * @return
 */
    canSpawnReincarnation(mobid: number): boolean;
    /**
 * 自定義勳章名稱 玩家須把勳章穿在身上
 * 
 * @param name 勳章名稱
 */
    setMedalName(name: string): void;
    /**
 * 自定義勳章名稱 玩家須把勳章穿在身上
 * 
 * @param name 勳章名稱
 */
    setTitleName(name: string): void;
    /**
 * 用不到
 * 
 * @param set
 */
    setItemStack(set: any): void;
    setItemPrice(set: any): void;
    setSpeakBan(set: any): void;
    setItemPropHide(set: any): void;
    /**
 * 用不到
 * 
 * @param set
 */
    setExpTable(set: any): void;
    /**
 * 用不到
 * 
 * @param set
 */
    setItemSellLimit(set: any): void;
    /**
 * 用不到
 * 
 * @param set
 */
    setItemClearLimit(set: any): void;
    /**
 * 用不到
 * 
 * @param set
 */
    setFont(set: any): void;
    /**
 * 在我的小屋召喚反應物
 * 
 * @param id
 */
    spawnReactor(id: number): void;
    /**
 * 使用優惠卷(序號)並返回結果
 * 
 * @param code
 * @return
 */
    useCouponCode(code: string): string;
    /**
 * 判斷指定的道具代碼是否可以丟出
 * 
 * @param itemid
 * @return
 */
    isDropRestricted(itemid: number): boolean;
    /**
 * 給線上所有人物品
 * 
 * @param itemid
 * @param count
 */
    gainItemEveryone(itemid: number, count: number): void;
    /**
 * 發布全服離線物品
 * 
 * @param itemid
 * @param count
 * @param Title
 */
    gainOfflineItemAll(itemid: number, count: number, Title: string): void;
    /**
 * 地圖發布特效廣播
 * 
 * @param msg
 * @param itemId
 */
    worldMapEffect(msg: string, itemId: number): void;
    /**
 * 用不到
 * 
 * @return
 */
    getNameFont(): any;
    /**
 * 獲得昨日總贊助
 * 
 * @return 金額
 */
    getYesturdayTotalDonate(): number;
    /**
 * 發停止動作封包(MaplePacketCreator.enableActions())
 */
    enableActions(): void;
    /**
 * 判斷是否使用lunar登入器的星力
 * 
 * @return
 */
    isLunarStar(): boolean;
    /**
 * 獲得當前所有指令
 * 
 * @return 指令列表
 */
    getCommands(): any;
    /**
 * 用不到
 * 
 * @return
 */
    getJobNiche(): number;
    /**
 * 獲得指定物品的潛能列表
 * 
 * @param item
 * @return 潛能代碼列表
 */
    getPotentialList(item: any): any;
    /**
 * 獲得物品並直接穿上(幫Xiang加的)
 * 
 * @param itemid
 * @param slot
 */
    gainAndEquip(itemid: number, slot: any): void;
    /**
 * 吳承軒登入器功能 設定飛天
 * 
 * @param open
 * @param xspeed
 * @param yspeed
 */
    setFlyTamingMob(open: boolean, xspeed: number, yspeed: number): void;
    /**
 * 獲得伺服器第一個拿到物品的人是誰
 * 
 * @param itemid
 * @return 角色代碼
 */
    getFirstGain(itemid: number): number;
    /**
 * 獲得伺服器第一次擊殺怪物的人是誰
 * 
 * @param mobid
 * @return 角色代碼
 */
    getFirstKill(mobid: number): number;
    /**
 * 設定燃燒的地圖
 * 
 * @param burnObject
 */
    setMapBurn(burnObject: any): void;
    /**
 * 設定燃燒特效(用不到)
 * 
 * @param itemid
 */
    setBurnEffect(itemid: number): void;
    /**
 * 獲取指定的wz節點數值
 * 
 * @param wzname wz名稱
 * @param path_img img路徑
 * @param nodepath 節點路徑
 * @return
 */
    getXmlData(wzname: string, path_img: string, nodepath: string): any;
    /**
 * 獲得道具代碼的 MapleInventoryType
 * 
 * @param itemid
 * @return
 */
    getInventoryType(itemid: number): number;
    /**
 * 判斷物品是否可被放入倉庫
 * 
 * @param item
 * @return
 */
    storageRestricted(item: any): boolean;
    /**
 * 道具廣播
 * 
 * @param itemid 物品代碼
 * @param message 訊息
 */
    ItemMessage(itemid: number, message: string): void;
    /**
 * 道具廣播
 * 
 * @param item 物品(IItem)
 * @param message 訊息
 */
    ItemMessage(item: any, message: string): void;
    /**
 * 設定遊戲最大等級
 * 
 * @param level
 */
    setMaxLevel(level: number): void;
    /**
 * 發布discord訊息
 * 
 * @param channelname 頻道名稱
 * @param title 標題
 * @param msg 內容
 */
    broadcastDiscord(channelname: string, title: string, msg: string): void;
    /**
 * 獲得party
 * 
 * @param partyid 隊伍ID
 * @return MapleParty
 */
    getParty(partyid: number): any;
    /**
 * party聊天
 * 
 * @param partyid 隊伍ID
 * @param chattext 聊天內容
 * @param name 名稱
 * @return MapleParty
 */
    partyChat(partyid: number, chattext: string, name: string): void;
    /**
 * party狀態更新
 * 
 * @param partyid 隊伍ID
 * @param operation 操作
 * @param pchr MaplePartyCharacter
 * @return MapleParty
 */
    updateParty(partyid: number, operation: any, pchr: any): void;
    updateParty(partyid: number, type: string, pchr: any): void;
    removeNpcByOid(npcoid: number): void;
    deleteWzCustomLife(npc: any, mapid: number): void;
    removeWzCustomLife(npc: any, mapid: number): void;
    checkEquipOnly(): void;
    getSkillMaxLevel(skillid: number): number;
    /**
 * 發送全服特效廣播訊息
 * 
 * @param msg 內容
 * @param itemId 特效代碼
 * @param duration 持續時間毫秒
 * @return
 */
    startEffect(msg: string, itemId: number, duration: number): void;
    run(): void;
    getAccountMaxLevel(): number;
    openNpcTime(idd: number, script: string, second: number): void;
    run(): void;
    openNpcTimeMillis(idd: number, script: string, millis: number): void;
    run(): void;
    moveMonster(monster: any, chr: MapleCharacter): void;
    mobvac(): void;
    speakMap(msg: string): void;
    warpPosition(x: number, y: number): void;
    isEpicItem(itemid: number): boolean;
    sendAttackSkill(skillid: number): void;
    canTrade(itemid: number): boolean;
    openDyeUI(itemid: number, position: number, color: any, a: any, b: any, d: any): void;
    openUIAnnual(max: number): void;
    updateUIAnnual(max: number): void;
    closeUIAnnual(): void;
    getFilesInDirectory(path: string): any;
    updateStat(stat: string, set: number): void;
    scheduleScript(dailyTask: any, hour: number, minute: number, repeat: boolean): void;
    scheduleScriptSecond(task: any, delaySeconds: number, repeat: boolean): void;
    setSchedule(schedule: boolean): void;
    getAllPlayers(): any;
    modifyCSPointEveryone(type: number, amount: number): void;
    addItemInfo(mplew: any, item: any): void;
    UseUpgradeScroll(slot: any, dst: any): boolean;
    applyMapleBuffStat(skillid: number, localDuration: number, buffid: number, set: number): void;
    setServerMessage(message: string): void;
    sendMapServerMessage(message: string): void;
    worldCustomMessage(type: number, message: string): void;
    sendSellShop(): void;
    發放裝備(itemId: number, 數量: number, 力量: number, 敏捷: number, 智力: number, 幸運: number, HP: number, MP: number, 物理攻擊: number, 魔法攻擊: number, 物理防禦: number, 魔法防禦: number, 卷軸次數: number, 強化等級: number, 命中: number, 閃避: number, 跳躍: number, 速度: number, 天數: number): void;
    getMessengerPosition(): number;
}

declare interface NPCConversationManager {
    /**
 * 獲取 Invocable 物件。
 * 
 * @return Invocable 物件。
 */
    getIv(): any;
    /**
 * 獲取模式。
 * 
 * @return 模式。
 */
    getMode(): number;
    /**
 * 獲取 NPC 編號。
 * 
 * @return NPC 編號。
 */
    getNpc(): number;
    /**
 * 獲取任務 ID。
 * 
 * @return 任務 ID。
 */
    getQuest(): number;
    /**
 * 獲取腳本內容。
 * 
 * @return 腳本內容。
 */
    getScript(): string;
    /**
 * 獲取腳本類型。
 * 
 * @return 腳本類型。
 */
    getType(): any;
    /**
 * 安全處理釋放操作。
 */
    safeDispose(): void;
    /**
 * 釋放 NPC 腳本操作。
 */
    dispose(): void;
    /**
 * 提問玩家在地圖上選擇。
 * 
 * @param sel 提問內容。
 */
    askMapSelection(sel: string): void;
    /**
 * 提問玩家在地圖上選擇 Buff。
 * 
 * @param text 提問內容。
 */
    askBuffSelection(text: string): void;
    /**
 * 傳送下一則對話給玩家。
 * 
 * @param text 對話內容。
 */
    sendNext(text: string): void;
    /**
 * 傳送下一則對話給玩家（包含類型）。
 * 
 * @param text 對話內容。
 * @param type 對話類型。
 */
    sendNextS(text: string, type: any): void;
    /**
 * 傳送下一則對話給玩家（包含類型和 NPC 編號）。
 * 
 * @param text 對話內容。
 * @param type 對話類型。
 * @param idd NPC 編號。
 */
    sendNextS(text: string, type: any, idd: number): void;
    /**
 * 傳送上一則對話給玩家。
 * 
 * @param text 對話內容。
 */
    sendPrev(text: string): void;
    /**
 * 傳送上一則對話給玩家（包含類型）。
 * 
 * @param text 對話內容。
 * @param type 對話類型。
 */
    sendPrevS(text: string, type: any): void;
    /**
 * 傳送下一則對話並顯示上一則按鈕給玩家。
 * 
 * @param text 對話內容。
 */
    sendNextPrev(text: string): void;
    /**
 * 獲取腳本類型。
 * 
 * @return 腳本類型。
 */
    getScriptType(): any;
    /**
 * 傳送玩家到 NPC 的對話界面。
 * 
 * @param text 對話內容。
 */
    PlayerToNpc(text: string): void;
    /**
 * 傳送下一則和上一則對話給玩家，並指定類型和 NPC 編號。
 * 
 * @param text 對話內容。
 */
    sendNextPrevS(text: string): void;
    /**
 * 傳送下一則和上一則對話給玩家，並指定類型和 NPC 編號。
 * 
 * @param text 對話內容。
 * @param type 對話類型。
 */
    sendNextPrevS(text: string, type: any): void;
    /**
 * 傳送下一則和上一則對話給玩家，並指定類型和 NPC 編號。
 * 
 * @param text 對話內容。
 * @param type 對話類型。
 * @param idd NPC 編號。
 */
    sendNextPrevS(text: string, type: any, idd: number): void;
    /**
 * 傳送下一則對話給玩家並顯示確認按鈕。
 * 
 * @param text 對話內容。
 */
    sendOk(text: string): void;
    /**
 * 傳送下一則對話給玩家並顯示確認按鈕（包含類型）。
 * 
 * @param text 對話內容。
 * @param type 對話類型。
 */
    sendOkS(text: string, type: any): void;
    /**
 * 傳送是/否選擇對話給玩家。
 * 
 * @param text 對話內容。
 */
    sendYesNo(text: string): void;
    /**
 * 傳送是/否選擇對話給玩家（包含類型）。
 * 
 * @param text 對話內容。
 * @param type 對話類型。
 */
    sendYesNoS(text: string, type: any): void;
    /**
 * 傳送接受/拒絕選擇對話給玩家。
 * 
 * @param text 對話內容。
 */
    sendAcceptDecline(text: string): void;
    /**
 * 傳送接受/拒絕選擇對話給玩家（不包含 ESC 鍵）。
 * 
 * @param text 對話內容。
 */
    sendAcceptDeclineNoESC(text: string): void;
    /**
 * 傳送接受/拒絕選擇對話給玩家。
 * 
 * @param text 對話內容。
 */
    askAcceptDecline(text: string): void;
    /**
 * 傳送不包含 ESC 鍵的接受/拒絕選擇對話給玩家。
 * 
 * @param text 對話內容。
 */
    askAcceptDeclineNoESC(text: string): void;
    /**
 * 傳送頭像選擇對話給玩家。
 * 
 * @param text 對話內容。
 * @param args 頭像選擇的參數。
 */
    askAvatar(text: string, args: number): void;
    /**
 * 傳送簡單選擇對話給玩家。
 * 
 * @param text 對話內容。
 */
    sendSimple(text: string): void;
    /**
 * 傳送帶有選項的簡單對話給玩家。
 * 
 * @param text 對話內容。
 * @param selections 選項列表。
 */
    sendSimple(text: string, selections: string): void;
    /**
 * 傳送帶有指定類型的簡單對話給玩家。
 * 
 * @param text 對話內容。
 * @param type 對話類型。
 */
    sendSimpleS(text: string, type: any): void;
    /**
 * 傳送頭像選擇對話給玩家。
 * 
 * @param text 對話內容。
 * @param styles 頭像選擇的參數。
 */
    sendStyle(text: string, styles: any): void;
    /**
 * 傳送頭像選擇對話給玩家（用於安卓機器人頭像）。
 * 
 * @param text 對話內容。
 * @param styles 頭像選擇的參數。
 */
    sendAndroidStyle(text: string, styles: any): void;
    /**
 * 設定安卓機器人的皮膚顏色。
 * 
 * @param skin 皮膚顏色。
 */
    setAndroidSkin(skin: number): void;
    /**
 * 設定安卓機器人的髮型。
 * 
 * @param hair 髮型ID。
 */
    setAndroidHair(hair: number): void;
    /**
 * 設定安卓機器人的臉型。
 * 
 * @param face 臉型ID。
 */
    setAndroidFace(face: number): void;
    /**
 * 傳送數字選擇對話給玩家。
 * 
 * @param text 對話內容。
 * @param def 預設值。
 * @param min 最小值。
 * @param max 最大值。
 */
    sendGetNumber(text: string, def: number, min: number, max: number): void;
    /**
 * 傳送文字輸入對話給玩家。
 * 
 * @param text 對話內容。
 */
    sendGetText(text: string): void;
    /**
 * 設定待取得的文字。
 * 
 * @param text 待取得的文字。
 */
    setGetText(text: string): void;
    /**
 * 取得待取得的文字。
 * 
 * @return 待取得的文字。
 */
    getText(): string;
    /**
 * 設定玩家的髮型。
 * 
 * @param hair 新的髮型。
 */
    setHair(hair: number): void;
    setMixHair(hair: number): void;
    /**
 * 設定玩家的臉部。
 * 
 * @param face 新的臉部外觀。
 */
    setFace(face: number): void;
    /**
 * 設定玩家的膚色。
 * 
 * @param color 新的膚色。
 */
    setSkin(color: number): void;
    /**
 * 設定玩家的性別。
 * 
 * @param gender 新的性別。
 */
    setGender(gender: any): void;
    /**
 * 檢查指定的髮型是否存在。
 * 
 * @param hair 要檢查的髮型編號。
 * @return 如果髮型存在則返回 true，否則返回 false。
 */
    hairExists(hair: number): boolean;
    /**
 * 檢查指定的臉部外觀是否存在。
 * 
 * @param face 要檢查的臉部外觀編號。
 * @return 如果臉部外觀存在則返回 true，否則返回 false。
 */
    faceExists(face: number): boolean;
    /**
 * 從給定的髮型列表中篩選出客戶端支援的髮型列表。
 * 
 * @param hairs 要篩選的髮型列表。
 * @return 客戶端支援的髮型列表。
 */
    getCanHair(hairs: any): any;
    /**
 * 從給定的造型列表中篩選出客戶端支援的造型列表。
 * 
 * @param styles 要篩選的造型列表。
 * @return 客戶端支援的造型列表。
 */
    getCanStyle(styles: any): any;
    /**
 * 從給定的臉型列表中篩選出客戶端支援的臉型列表。
 * 
 * @param faces 要篩選的臉型列表。
 * @return 客戶端支援的臉型列表。
 */
    getCanFace(faces: any): any;
    /**
 * 隨機設置角色的造型和外觀。
 * 
 * @param ticket 使用的票券ID。
 * @param args_all 可選的造型和外觀列表。
 * @return 1表示設置成功，-1表示失敗。
 */
    setRandomAvatar(ticket: number, args_all: number): number;
    /**
 * 隨機免費設置角色的造型和外觀。
 * 
 * @param args_all 可選的造型和外觀列表。
 * @return 1表示設置成功，-1表示失敗。
 */
    setRandomAvatarFree(args_all: number): number;
    /**
 * 設置角色的造型和外觀。
 * 
 * @param ticket 使用的票券ID。
 * @param args 造型或外觀ID。
 * @return 1表示設置成功，-1表示失敗。
 */
    setAvatar(ticket: number, args: number): number;
    /**
 * 設置角色的造型和外觀。
 * 
 * @param ticket 使用的票券ID。
 * @param args 造型或外觀ID。
 * @param isSecond 是否是第二造型。
 * @return 1表示設置成功，-1表示失敗。
 */
    setAvatar(ticket: number, args: number, isSecond: boolean): number;
    /**
 * 顯示角色的倉庫。
 */
    sendStorage(): void;
    /**
 * 顯示指定類型的額外倉庫。
 * 
 * @param type 額外倉庫的類型。
 */
    sendStorageExceed(type: any): void;
    /**
 * 顯示指定索引的額外倉庫。
 * 
 * @param i 額外倉庫的索引。
 */
    sendStorageExceed(i: number): void;
    /**
 * 顯示公會倉庫。
 */
    sendGuildStorage(): void;
    /**
 * 打開指定ID的商店。
 * 
 * @param id 商店的ID。
 */
    openShop(id: number): void;
    /**
 * 通過NPC打開指定ID的商店。
 * 
 * @param id 商店的ID。
 */
    openShopNPC(id: number): void;
    /**
 * 進行對應類型的拉霸遊戲。
 * 
 * @param type 拉霸遊戲的類型。
 * @return 獲得的物品的ID，如果未獲得則返回-1。
 */
    gachapon(type: number): number;
    /**
 * 獲得指定ID和數量的拉霸物品。
 * 
 * @param id 物品的ID。
 * @param quantity 物品的數量。
 * @return 獲得的物品的ID。
 */
    gainGachaponItem(id: number, quantity: number): number;
    /**
 * 獲得指定ID和數量的拉霸物品。
 * 
 * @param id 物品的ID。
 * @param quantity 物品的數量。
 * @param msg 物品獲得時的訊息。
 * @return 獲得的物品的ID，如果未獲得則返回-1。
 */
    gainGachaponItem(id: number, quantity: number, msg: string): number;
    /**
 * 變更玩家的職業。
 * 
 * @param job 新的職業ID。
 */
    changeJob(job: number): void;
    /**
 * 開始指定ID的任務。
 * 
 * @param id 任務的ID。
 */
    startQuest(id: number): void;
    /**
 * 完成指定ID的任務。
 * 
 * @param id 任務的ID。
 */
    completeQuest(id: number): void;
    /**
 * 放棄指定ID的任務。
 * 
 * @param id 任務的ID。
 */
    forfeitQuest(id: number): void;
    /**
 * 放棄當前任務。
 */
    forfeitQuest(): void;
    /**
 * 強制開始當前任務。
 */
    forceStartQuest(): void;
    /**
 * 強制更新並開始當前任務。
 */
    forceUpdateStartQuest(): void;
    /**
 * 強制開始指定ID的任務。
 * 
 * @param id 任務的ID。
 */
    forceStartQuest(id: number): void;
    /**
 * 使用自定義數據強制開始當前任務。
 * 
 * @param customData 自定義數據。
 */
    forceStartQuest(customData: string): void;
    /**
 * 強制完成當前任務。
 */
    forceCompleteQuest(): void;
    /**
 * 獲取當前任務的自定義數據。
 * 
 * @return 自定義數據。
 */
    getQuestCustomData(): string;
    /**
 * 設置當前任務的自定義數據。
 * 
 * @param customData 自定義數據。
 */
    setQuestCustomData(customData: string): void;
    /**
 * 獲取指定任務ID的自定義數據。
 * 
 * @param questid 任務的ID。
 * @return 自定義數據。
 */
    getQuestCustomData(questid: number): string;
    /**
 * 設置指定任務ID的自定義數據。
 * 
 * @param questid 任務的ID。
 * @param customData 自定義數據。
 */
    setQuestCustomData(questid: number, customData: string): void;
    /**
 * 強制完成指定任務ID的任務。
 * 
 * @param id 任務的ID。
 */
    forceCompleteQuest(id: number): void;
    /**
 * 獲取玩家的楓幣數量。
 * 
 * @return 玩家的楓幣數量。
 */
    getMeso(): number;
    /**
 * 增加玩家的屬性點數。
 * 
 * @param amount 增加的數量。
 */
    gainAp(amount: number): void;
    /**
 * 擴展玩家的背包或倉庫。
 * 
 * @param type 背包或倉庫的類型。
 * @param amt 增加的數量。
 */
    expandInventory(type: any, amt: number): void;
    /**
 * 脫下玩家所有裝備。
 */
    unequipEverything(): void;
    /**
 * 清除玩家所有技能。
 */
    clearSkills(): void;
    /**
 * 檢查玩家是否擁有指定技能。
 * 
 * @param skillid 技能的ID。
 * @return 若玩家擁有指定技能則返回true，否則返回false。
 */
    hasSkill(skillid: number): boolean;
    /**
 * 播放音效。
 * 
 * @param broadcast 是否廣播到地圖上的其他玩家。
 * @param sound 音效的名稱。
 */
    playSound(broadcast: boolean, sound: string): void;
    /**
 * 播放音效。
 * 
 * @param sound 音效的名稱。
 */
    playSound(sound: string): void;
    /**
 * 在整個世界中播放音效。
 * 
 * @param sound 音效的名稱。
 */
    playWorldSound(sound: string): void;
    /**
 * 更改整個世界的背景音樂。
 * 
 * @param sound 音樂的名稱。
 */
    changeWorldMusic(sound: string): void;
    /**
 * 更改環境效果。
 * 
 * @param broadcast 是否廣播到地圖上的其他玩家。
 * @param env 環境效果的名稱。
 */
    environmentChange(broadcast: boolean, env: string): void;
    /**
 * 更新好友列表的容量。
 * 
 * @param capacity 新的容量。
 */
    updateBuddyCapacity(capacity: number): void;
    /**
 * 獲取好友列表的容量。
 * 
 * @return 好友列表的容量。
 */
    getBuddyCapacity(): number;
    /**
 * 獲取當前地圖中同隊的玩家數量。
 * 
 * @return 同隊玩家的數量。
 */
    partyMembersInMap(): number;
    /**
 * 獲取隊伍成員的列表。
 * 
 * @return 隊伍成員的列表，如果沒有隊伍則返回null。
 */
    getPartyMembers(): any;
    /**
 * 傳送隊伍成員到指定地圖並獲得經驗值。
 * 
 * @param mapId 目標地圖的ID。
 * @param exp 獲得的經驗值。
 */
    warpPartyWithExp(mapId: number, exp: number): void;
    /**
 * 傳送隊伍成員到指定地圖並獲得經驗值和楓幣。
 * 
 * @param mapId 目標地圖的ID。
 * @param exp 獲得的經驗值。
 * @param meso 獲得的楓幣數量。
 */
    warpPartyWithExpMeso(mapId: number, exp: number, meso: number): void;
    /**
 * 獲取指定類型的MapleSquad。
 * 
 * @param type 隊伍的類型。
 * @return 對應的MapleSquad實例。
 */
    getSquad(type: string): any;
    /**
 * 獲取指定類型的MapleSquad的可用性。
 * 
 * @param type 隊伍的類型。
 * @return 隊伍的狀態，如果不存在則返回-1。
 */
    getSquadAvailability(type: string): number;
    /**
 * 註冊一個MapleSquad（隊伍）。
 * 
 * @param type 隊伍的類型。
 * @param minutes 隊伍的有效時間（以分鐘為單位）。
 * @param startText 開始訊息。
 * @return 是否成功註冊隊伍。
 */
    registerSquad(type: string, minutes: number, startText: string): boolean;
    /**
 * 獲取指定類型的MapleSquad的成員列表。
 * 
 * @param type 隊伍的類型。
 * @param type_ 顯示的類型（0：普通查看，1：隊長踢人，2：顯示被踢人，3：普通查看）。
 * @return 是否成功獲取成員列表。
 */
    getSquadList(type: string, type_: any): boolean;
    /**
 * 檢查玩家是否是指定類型的MapleSquad的隊長。
 * 
 * @param type 隊伍的類型。
 * @return 是否是隊長（1：是，0：不是，-1：隊伍不存在）。
 */
    isSquadLeader(type: string): any;
    /**
 * 將玩家重新添加到指定的事件實例管理器和MapleSquad中。
 * 
 * @param eim 事件實例管理器的名稱。
 * @param squad MapleSquad的類型。
 * @return 是否成功重新添加玩家。
 */
    reAdd(eim: string, squad: string): boolean;
    /**
 * 將指定位置的成員從指定類型的MapleSquad中踢出。
 * 
 * @param type 隊伍的類型。
 * @param pos 成員的位置。
 */
    banMember(type: string, pos: number): void;
    /**
 * 接受指定位置的成員加入指定類型的MapleSquad。
 * 
 * @param type 隊伍的類型。
 * @param pos 成員的位置。
 */
    acceptMember(type: string, pos: number): void;
    /**
 * 將毫秒數轉換為易讀的時間格式。
 * 
 * @param startMillis 開始毫秒數。
 * @param endMillis 結束毫秒數。
 * @return 可讀的時間格式。
 */
    getReadableMillis(startMillis: number, endMillis: number): string;
    /**
 * 將玩家添加到指定類型的MapleSquad中。
 * 
 * @param type 隊伍的類型。
 * @param join 是否加入（true：加入，false：不加入）。
 * @return 是否成功將玩家添加到隊伍中。
 */
    addMember(type: string, join: boolean): number;
    /**
 * 清空指定類型的MapleSquad的所有成員。
 * 
 * @param type 隊伍的類型。
 */
    clearSquad(type: string): void;
    /**
 * 檢查玩家是否是指定類型的MapleSquad成員。
 * 
 * @param type 隊伍的類型。
 * @return 如果是成員，則返回1；如果被禁止，則返回2；否則返回0。
 */
    isSquadMember(type: string): any;
    /**
 * 重置玩家所在地圖的所有反應器。
 */
    resetReactors(): void;
    /**
 * 發送通用的公會訊息。
 * 
 * @param code 訊息代碼。
 */
    genericGuildMessage(code: number): void;
    /**
 * 解散玩家所在的公會。
 */
    disbandGuild(): void;
    /**
 * 增加公會容量。
 */
    increaseGuildCapacity(): void;
    /**
 * 顯示公會排名。
 */
    displayGuildRanks(): void;
    /**
 * 顯示公會金幣排名。
 */
    displayGuildMesoRanks(): void;
    /**
 * 顯示公會積分排名。
 */
    displayGuildPointRanks(): void;
    /**
 * 顯示指定類型的倉庫排名。
 * 
 * @param type 倉庫的類型。
 */
    showStorageRanks(type: any): void;
    /**
 * 顯示等級排名。
 */
    showlvl(): void;
    /**
 * 顯示指定地圖的公會排名。
 * 
 * @param mapid 地圖ID。
 */
    showGuildRank(mapid: string): void;
    /**
 * 顯示指定名稱的速度排名（小到大）。
 * 
 * @param name 玩家名稱。
 */
    showSpeedRank(name: string): void;
    /**
 * 顯示指定名稱的伺服器排名。
 * 
 * @param name 玩家名稱。
 */
    showServerRank(name: string): void;
    /**
 * 顯示指定名稱的公會guildset排名。
 * 
 * @param name guildset名稱。
 */
    showGuildSetRank(name: string): void;
    /**
 * 顯示指定名稱的角色排名（大到小）。
 * 
 * @param name 玩家名稱。
 */
    getCharacterRank(name: string, chara: boolean): any;
    getGuildRank(mapid: string): any;
    /**
 * 顯示指定名稱的速度排名（大到小）。
 * 
 * @param name 玩家名稱。
 */
    getSpeedRank(name: string): any;
    /**
 * 顯示指定名稱的伺服器排名。
 * 
 * @param name 玩家名稱。
 */
    getServerRank(name: string): any;
    clearRank(): void;
    showCharacterRank(name: string): void;
    /**
 * 顯示指定名稱的角色排名。
 * 
 * @param name 玩家名稱。
 */
    showCharacterRank(name: string, chara: boolean): void;
    /**
 * 顯示指定名稱的aclog排名。
 * 
 * @param name 玩家名稱。
 */
    showAcLogRank(name: string): void;
    /**
 * 顯示指定名稱的bosslog排名。
 * 
 * @param name 玩家名稱。
 */
    showBossLogRank(name: string): void;
    /**
 * 顯示金幣排名。
 */
    showmeso(): void;
    /**
 * 顯示指定索引的DPM排名。
 * 
 * @param index 索引。
 */
    showdpm(index: number): void;
    /**
 * 顯示捐款排名。
 */
    showdonate(): void;
    /**
 * 顯示本月捐款排名。
 */
    showdonateMonth(): void;
    /**
 * 顯示每日捐款排名。
 */
    showdonateDay(): void;
    /**
 * 顯示捐款金幣排名。
 */
    showdonatemeso(): void;
    /**
 * 顯示名聲排名。
 */
    showFm(): void;
    /**
 * 顯示名聲排名（由低到高）。
 */
    showFmAsc(): void;
    /**
 * 從活動實例中移除玩家。
 * 
 * @return 如果成功從活動實例中移除玩家，則返回true，否則返回false。
 */
    removePlayerFromInstance(): boolean;
    /**
 * 檢查玩家是否在活動實例中。
 * 
 * @return 如果玩家在活動實例中，則返回true，否則返回false。
 */
    isPlayerInstance(): boolean;
    /**
 * 更改裝備的屬性值。
 * 
 * @param slot 裝備的欄位位置。
 * @param type 屬性種類。
 * @param amount 新的屬性值。
 */
    changeStat(slot: any, type: number, amount: number): void;
    /**
 * 更改裝備的屬性值。
 * 
 * @param slot 裝備的欄位位置。
 * @param type 屬性種類。
 * @param amount 新的屬性值。
 */
    changeStatEquip(slot: any, type: number, amount: number): void;
    /**
 * 獲取裝備的星星符號表示。
 * 
 * @param level 星星等級。
 * @return 星星符號表示。
 */
    getEquipStar(level: number): string;
    /**
 * 獲得裝備的星星等級。
 * 
 * @param star 裝備的星星符號表示。
 * @return 星星等級。
 */
    getEquipLevel(star: string): number;
    /**
 * 獲得黑星的星星等級。
 * 
 * @param star 裝備的黑星星星符號表示。
 * @return 黑星星星等級。
 */
    getEquipLevelBlack(star: string): number;
    /**
 * 獲取裝備的黑星符號表示。
 * 
 * @param level 黑星等級。
 * @return 黑星符號表示。
 */
    getEquipStarBlack(level: number): string;
    /**
 * 使用現金裝備。
 * 
 * @param slot 裝備欄位。
 * @param s 是否使用。
 * @return 操作結果訊息。
 */
    CashEqipUse(slot: any, s: boolean): string;
    /**
 * 獲取星星等級。
 * 
 * @param text 文本。
 * @return 星星等級。
 */
    getStarLevel(text: string): number;
    /**
 * 清除掉落物品。
 */
    cleardrops(): void;
    /**
 * 消滅地圖上的所有怪物（僅限BOSS怪物）。
 */
    killAllMonsters(): void;
    /**
 * 將商店收益的楓幣給予玩家。
 */
    giveMerchantMesos(): void;
    /**
 * 創建日誌。
 * 
 * @param log 日誌內容。
 */
    CreateLog(log: string): void;
    /**
 * 斷開連接指定玩家。
 */
    dc(): void;
    /**
 * 獲取商店的楓幣數量。
 * 
 * @return 商店楓幣數量。
 */
    getMerchantMesos(): number;
    /**
 * 開啟Duey（郵件系統）。
 */
    openDuey(): void;
    /**
 * 開啟商店（商人物品交易）。
 */
    openMerchantItemStore(): void;
    /**
 * 開啟釣魚商店。
 */
    openFishingItemStore(): void;
    /**
 * 顯示修理視窗。
 */
    sendRepairWindow(): void;
    /**
 * 獲取道場積分。
 * 
 * @return 道場積分。
 */
    getDojoPoints(): number;
    /**
 * 設定道場積分。
 * 
 * @param point 道場積分。
 */
    setDojoPoints(point: number): void;
    /**
 * 增加道場積分。
 * 
 * @param add 要增加的積分值。
 */
    addDojoPoints(add: number): void;
    /**
 * 獲取道場紀錄。
 * 
 * @return 道場紀錄。
 */
    getDojoRecord(): number;
    /**
 * 設定或重置道場紀錄。
 * 
 * @param reset 是否重置紀錄。
 */
    setDojoRecord(reset: boolean): void;
    /**
 * 開始道場挑戰或代理挑戰。
 * 
 * @param dojo 是否進行道場挑戰。
 * @param party 是否為隊伍挑戰。
 * @return 若開始成功則返回true，否則返回false。
 */
    start_DojoAgent(dojo: boolean, party: boolean): boolean;
    /**
 * 開始金字塔迷宮挑戰或地鐵挑戰。
 * 
 * @param pyramid 指定金字塔層數，若為負數則進行地鐵挑戰。
 * @return 若開始成功則返回true，否則返回false。
 */
    start_PyramidSubway(pyramid: number): boolean;
    /**
 * 開始金字塔迷宮額外挑戰或地鐵額外挑戰。
 * 
 * @param pyramid 指定金字塔層數，若為負數則進行地鐵額外挑戰。
 * @return 若開始成功則返回true，否則返回false。
 */
    bonus_PyramidSubway(pyramid: number): boolean;
    /**
 * 獲取煙火活動的酒桶數量百分比。
 * 
 * @return 酒桶數量百分比。
 */
    getKegs(): any;
    /**
 * 給予煙火活動的酒桶數量。
 * 
 * @param kegs 要給予的酒桶數量。
 */
    giveKegs(kegs: number): void;
    /**
 * 獲取煙火活動的太陽數量百分比。
 * 
 * @return 太陽數量百分比。
 */
    getSunshines(): any;
    /**
 * 給予煙火活動的太陽數量。
 * 
 * @param kegs 要給予的太陽數量。
 */
    addSunshines(kegs: number): void;
    /**
 * 獲取煙火活動的裝飾品數量百分比。
 * 
 * @return 裝飾品數量百分比。
 */
    getDecorations(): any;
    /**
 * 添加煙火活動的裝飾品數量。
 * 
 * @param kegs 要給予的裝飾品數量。
 */
    addDecorations(kegs: number): void;
    /**
 * 獲取角色所在的嘉年華派對。
 * 
 * @return 嘉年華派對實例。
 */
    getCarnivalParty(): any;
    /**
 * 獲取角色的下一個嘉年華派對挑戰。
 * 
 * @return 下一個嘉年華派對挑戰實例。
 */
    getNextCarnivalRequest(): any;
    /**
 * 獲取指定角色的嘉年華派對挑戰。
 * 
 * @param chr 指定的角色。
 * @return 嘉年華派對挑戰實例。
 */
    getCarnivalChallenge(chr: MapleCharacter): any;
    /**
 * 將角色的屬性最大值設定為最大值。
 */
    maxStats(): void;
    /**
 * 增加角色的最大HP。
 * 
 * @param addhp 要增加的HP數量。
 */
    addMaxHp(addhp: number): void;
    /**
 * 增加角色的最大MP。
 * 
 * @param addmp 要增加的MP數量。
 */
    addMaxMp(addmp: number): void;
    /**
 * 根據指定的速度競賽類型獲取速度競賽數據。
 * 
 * @param typ 速度競賽類型。
 * @return 包含速度競賽數據的Pair對象。如果未找到數據，則返回空數據。
 */
    getSpeedRun(typ: string): any;
    /**
 * 根據給定的速度競賽數據和選擇的索引，獲取速度競賽的信息。
 * 
 * @param ma 速度競賽數據。
 * @param sel 選擇的索引。
 * @return 如果有相應信息，返回true；否則返回false。
 */
    getSR(ma: any, sel: number): boolean;
    /**
 * 根據物品ID獲取裝備。
 * 
 * @param itemid 物品ID。
 * @return 裝備對象。
 */
    getEquip(itemid: number): any;
    /**
 * 設定物品的到期時間。
 * 
 * @param statsSel 物品對象。
 * @param expire 到期時間（以天為單位）。
 */
    setExpiration(statsSel: any, expire: number): void;
    /**
 * 鎖定物品，使其無法交易。
 * 
 * @param statsSel 物品對象。
 */
    setLock(statsSel: any): void;
    /**
 * 將物品從掉落中添加到角色的背包中。
 * 
 * @param statsSel 物品對象。
 * @return 如果添加成功，返回true；否則返回false。
 */
    addFromDrop(statsSel: any): boolean;
    /**
 * 檢查角色的背包是否有足夠空間以添加裝備。
 * 
 * @param c MapleClient 對象。
 * @param e 裝備對象。
 * @return 如果有足夠空間，返回true；否則返回false。
 */
    checkSpace(c: MapleClient, e: any): boolean;
    /**
 * 替換物品的屬性。
 * 
 * @param slot 物品的槽位。
 * @param invType 背包的類型。
 * @param statsSel 物品對象。
 * @param offset 屬性的增加量。
 * @param type 屬性的類型。
 * @return 如果替換成功，返回true；否則返回false。
 */
    replaceItem(slot: number, invType: number, statsSel: any, offset: number, type: string): boolean;
    /**
 * 替換物品的屬性。
 * 
 * @param slot 物品的槽位。
 * @param invType 背包的類型。
 * @param statsSel 物品對象。
 * @param offset 屬性的增加量。
 * @param type 屬性的類型。
 * @param takeSlot 是否占用物品的槽位。
 * @return 如果替換成功，返回true；否則返回false。
 */
    replaceItem(slot: number, invType: number, statsSel: any, offset: number, type: string, takeSlot: boolean): boolean;
    /**
 * 替換物品的屬性。
 * 
 * @param slot 物品的槽位。
 * @param invType 背包的類型。
 * @param statsSel 物品對象。
 * @param upgradeSlots 升級槽位的增加量。
 * @return 如果替換成功，返回true；否則返回false。
 */
    replaceItem(slot: number, invType: number, statsSel: any, upgradeSlots: number): boolean;
    /**
 * 檢查物品是否是現金物品。
 * 
 * @param itemId 物品ID。
 * @return 如果是現金物品，返回true；否則返回false。
 */
    isCash(itemId: number): boolean;
    /**
 * 給公會成員增加Buff。
 * 
 * @param buff Buff的編號。
 * @param duration Buff的持續時間。
 * @param msg Buff的訊息。
 */
    buffGuild(buff: number, duration: number, msg: string): void;
    /**
 * 創建公會聯盟。
 * 
 * @param alliancename 聯盟名稱。
 * @return 如果創建成功，返回true；否則返回false。
 */
    createAlliance(alliancename: string): boolean;
    /**
 * 增加公會聯盟的容量。
 * 
 * @return 如果增加成功，返回true；否則返回false。
 */
    addCapacityToAlliance(): boolean;
    /**
 * 解散公會聯盟。
 * 
 * @return 解散結果的相關訊息。
 */
    disbandAlliance(): string;
    /**
 * 獲取最後一則訊息的編號。
 * 
 * @return 最後一則訊息的編號。
 */
    getLastMsg(): any;
    /**
 * 設定最後一則訊息的編號。
 * 
 * @param last 最後一則訊息的編號。
 */
    setLastMsg(last: any): void;
    /**
 * 設定隊伍成員的首領日誌。
 * 
 * @param bossid 首領的ID。
 */
    setPartyBossLog(bossid: string): void;
    /**
 * 將角色所有技能等級設定為最高。
 */
    maxAllSkills(): void;
    /**
 * 重置角色的屬性值。
 * 
 * @param str 力量值。
 * @param dex 敏捷值。
 * @param z 未使用的參數。
 * @param luk 幸運值。
 */
    resetStats(str: number, dex: number, z: number, luk: number): void;
    /**
 * 丟棄物品。
 * 
 * @param slot 物品的槽位。
 * @param invType 背包的類型。
 * @param quantity 數量。
 * @return 如果丟棄成功，返回true；否則返回false。
 */
    dropItem(slot: number, invType: number, quantity: number): boolean;
    /**
 * 獲取所有潛力值的相關信息。
 * 
 * @return 所有潛力值ID的列表。
 */
    getAllPotentialInfo(): any;
    /**
 * 根據關鍵字獲取潛力值的相關信息。
 * 
 * @param text 關鍵字。
 * @return 符合關鍵字的潛力值列表。
 */
    getPotentialName(text: string): any;
    /**
 * 根據潛力值ID獲取潛力值的名稱。
 * 
 * @param id 潛力值ID。
 * @return 潛力值的名稱。
 */
    getPotentialNameById(id: any): string;
    /**
 * 根據潛力值ID和裝備獲取潛力值的名稱。
 * 
 * @param id 潛力值ID。
 * @param item 裝備。
 * @return 潛力值的名稱。
 */
    getPotentialNameById(id: any, item: any): string;
    /**
 * 獲得潛能資料
 * 
 * @param id 潛能代碼
 * @return 包含潛能資料的字符串
 */
    getPotentialInfo(id: number): string;
    /**
 * 發送RPS（Rock-paper-scissors）模式
 */
    sendRPS(): void;
    /**
 * 設定任務記錄
 * 
 * @param ch 角色
 * @param questid 任務ID
 * @param data 要設定的數據
 */
    setQuestRecord(ch: any, questid: number, data: string): void;
    /**
 * 執行婚禮效果
 * 
 * @param ch 角色
 */
    doWeddingEffect(ch: any): void;
    run(): void;
    run(): void;
    /**
 * 開啟小鋼珠視窗
 */
    開啟小鋼珠(): void;
    /**
 * 指定時間後返回地圖
 * 
 * @param mid 目的地地圖代碼
 * @param retmap 返回地地圖代碼
 * @param time 時間（秒）
 */
    warpBack(mid: number, retmap: number, time: number): void;
    run(): void;
    /**
 * 改變角色名稱
 * 
 * @param name 新的名稱
 */
    ChangeName(name: string): void;
    /**
 * 在數據中進行搜索
 * 
 * @param type 搜索類型
 * @param search 搜索關鍵字
 * @return 匹配的搜索結果
 */
    searchData(type: number, search: string): string;
    /**
 * 在數據中進行搜索，並返回匹配的數據ID
 * 
 * @param type 搜索類型
 * @param search 搜索關鍵字
 * @return 匹配的數據ID陣列，如果無匹配則返回null
 */
    getSearchData(type: number, search: string): any;
    /**
 * 使用小鋼珠功能
 * 
 * @param point 小鋼珠點數
 * @param itemid 物品ID
 */
    OwlAdv(point: number, itemid: number): void;
    /**
 * 搜尋數據
 * 
 * @param type 搜尋類型
 * @param search 搜尋關鍵字
 * @return 是否找到數據
 */
    foundData(type: number, search: string): boolean;
    /**
 * 顯示職業排名
 * 
 * @param type 排名類型
 * @return 職業排名信息
 */
    ShowJobRank(type: number): string;
    /**
 * 根據職業顯示排名
 * 
 * @param job 職業ID
 * @return 職業排名信息
 */
    ShowJobRankByJob(job: number): string;
    /**
 * 顯示物品排名
 * 
 * @param itemid 物品ID
 * @return 物品排名信息
 */
    ShowItemRank(itemid: number): string;
    /**
 * 顯示GM物品排名
 * 
 * @param itemid 物品ID
 * @return GM物品排名信息
 */
    ShowGMItemRank(itemid: number): string;
    /**
 * 獲取轉蛋實例
 * 
 * @return 轉蛋實例
 */
    getGashapon(): any;
    /**
 * 獲取特殊轉蛋實例
 * 
 * @return 特殊轉蛋實例
 */
    getGashaponSpecial(): any;
    /**
 * 獲取序號兌換券
 * 
 * @return 序號兌換券
 */
    getCoupon(): string;
    /**
 * 檢查地圖中的怪物掉寶
 * 
 * @param chr 玩家角色
 */
    checkMobs(chr: MapleCharacter): void;
    /**
 * 顯示地圖內的掉落物
 * 
 * @param chr 玩家角色
 */
    checkMapDrops(chr: MapleCharacter): void;
    /**
 * 查看地圖內的怪物寵物
 * 
 * @param chr 玩家角色
 */
    SeeMonsterPets(chr: MapleCharacter): void;
    /**
 * 捕捉怪物寵物
 * 
 * @param chr 玩家角色
 * @param monsterid 怪物ID
 */
    CatchMonsterPet(chr: MapleCharacter, monsterid: number): void;
    /**
 * 檢查指定怪物的掉寶物品並返回列表。
 * 
 * @param chr 玩家角色
 * @param mobId 怪物的ID
 * @return 包含掉寶物品信息的格式化字串，若無掉落數據則返回提示訊息
 */
    checkDropAdd(chr: MapleCharacter, mobId: number): string;
    /**
 * 檢查指定物品的掉落怪物並返回列表。
 * 
 * @param chr 玩家角色
 * @param mobid 怪物的ID
 * @return 包含掉落怪物信息的格式化字串，若無掉落數據則返回提示訊息
 */
    checkDrop(chr: MapleCharacter, mobId: number): string;
    /**
 * 檢查指定物品的掉落怪物並返回列表。
 * 
 * @param chr 玩家角色
 * @param itemid 物品的ID
 * @return 包含掉落怪物信息的格式化字串，若無掉落數據則返回提示訊息
 */
    checkItemDrop(chr: MapleCharacter, itemid: number): string;
    /**
 * 更新掉落機率。
 * 
 * @param chance 新的掉落機率
 * @param dropperid 掉落怪物的ID
 * @param itemid 物品的ID
 */
    UpdateDropChance(chance: number, dropperid: number, itemid: number): void;
    /**
 * 添加新的掉寶數據。
 * 
 * @param chance 掉寶機率
 * @param dropperid 掉落怪物的ID
 * @param itemid 物品的ID
 * @param questid 任務的ID
 */
    AddDropData(chance: number, dropperid: number, itemid: number, questid: number): void;
    /**
 * 檢查玩家的第二組密碼是否正確。
 * 
 * @param chr 玩家角色
 * @param password 第二組密碼
 * @return 若密碼正確則返回 true，否則返回 false
 */
    check2ndPassword(chr: MapleCharacter, password: string): boolean;
    /**
 * 將輸出內容寫入到指定路徑的日誌文件中。
 * 
 * @param s 要記錄的內容
 */
    FileoutputUtil(s: string): void;
    /**
 * 獲取角色的楓豆數量。
 * 
 * @return 楓豆數量
 */
    getBeans(): number;
    /**
 * 獲得指定數量的楓豆。
 * 
 * @param amount 楓豆數量
 */
    gainBeans(amount: number): void;
    /**
 * 獲得玩家的贊助總額。
 * 
 * @return 贊助總額
 */
    getTotalDonate(): number;
    /**
 * 設定玩家的VIP等級。
 * 
 * @param level VIP等級
 */
    setVip(level: number): void;
    /**
 * 顯示角色的騎寵列表。
 * 
 * @param characterid 角色ID
 * @return 包含騎寵列表的格式化字串，若無騎寵則返回提示訊息
 */
    ShowMountBank(characterid: number): string;
    /**
 * 新增怪物寵物ID到角色。
 * 
 * @param characterid 角色ID
 * @param mountid 怪物寵物ID
 */
    addMountId(characterid: number, mountid: number): void;
    /**
 * 顯示角色的怪物寵物列表。
 * 
 * @param characterid 角色ID
 * @return 包含怪物寵物列表的格式化字串，若無怪物寵物則返回提示訊息
 */
    ShowMonsterPet(characterid: number): string;
    /**
 * 顯示怪物寵物技能列表給角色。
 * 
 * @param chr 角色
 * @return 包含怪物寵物技能列表的格式化字串
 */
    ShowMonsterPetSkill(chr: MapleCharacter): string;
    /**
 * 取得指定技能ID對應的技能名稱。
 * 
 * @param skillId 技能ID
 * @return 技能名稱
 */
    getPetSkillName(skillId: number): string;
    /**
 * 取得怪物寵物技能的總數量。
 * 
 * @return 怪物寵物技能數量
 */
    getSkillCount(): number;
    /**
 * 顯示怪物寵物技能的示範給角色。
 * 
 * @param chr 角色
 * @return 包含怪物寵物技能示範的格式化字串
 */
    MonsterPetSkillDemo(chr: MapleCharacter): string;
    /**
 * 將提供的文字輸出到控制台，如果玩家是 GM，則廣播到玩家的聊天中。
 * 
 * @param text 要輸出的文字。
 */
    print(text: string): void;
    /**
 * 模擬一個遊戲，玩家可以根據輸入的值獲得獎勵。
 * 
 * @param xx 值 xx。
 * @param a 值 a。
 */
    getlfj(xx: number, a: number): void;
    /**
 * 檢查玩家的裝備中是否有指定物品並且該物品是否有過期時間。
 * 
 * @param itemid 要檢查的物品 ID。
 * @return 如果存在過期物品則返回 true，否則返回 false。
 */
    getexpiration(itemid: number): boolean;
    /**
 * 顯示玩家的活動完成次數。
 * 
 * @return 包含活動名稱及完成次數的 Map。
 */
    ShowEventCount(): any;
    /**
 * 獲取最近的遊戲新聞內容。
 * 
 * @return 最近的遊戲新聞內容。
 * @throws SQLException 如果操作資料庫出現問題。
 */
    getRecroNews(): string;
    /**
 * 獲取指定角色的詳細資訊。
 * 
 * @param name 要查詢的角色名稱。
 * @return 包含角色詳細資訊的字串。
 */
    CharInfo(name: string): string;
    /**
 * 對點裝進行附魔操作。
 * 
 * @param slot 點裝在背包中的位置。
 * @return 附魔操作的結果訊息。
 */
    EnchantCashEqip(slot: any): string;
    /**
 * 獲取指定虛擬貨幣的價格。
 * 
 * @param s 虛擬貨幣的名稱。
 * @return 虛擬貨幣的價格。
 */
    getPrice(s: string): number;
    /**
 * 獲取虛擬貨幣的相關信息。
 * 
 * @return 虛擬貨幣的相關信息。
 */
    getInfo(): string;
    /**
 * 根據數字和顏色獲取數字圖示。
 * 
 * @param i 數字。
 * @param color 顏色。
 * @return 數字圖示的字串。
 */
    getNumberIcon(i: number, color: number): string;
    /**
 * 根據數字和顏色獲取數字圖示。
 * 
 * @param number 數字。
 * @param color 顏色。
 * @return 數字圖示的字串。
 */
    getNumberIcon2(i: number, color: number): string;
    /**
 * 根據數字和路徑獲取數字圖示。
 * 
 * @param path 路徑。
 * @param number 數字。
 * @return 數字圖示的字串。
 */
    getNumber(path: string, i: number): string;
    /**
 * 根據數字、路徑和總數獲取數字圖示。
 * 
 * @param path 路徑。
 * @param number 數字。
 * @param totalNumber 總數。
 * @return 數字圖示的字串。
 */
    getNumber(path: string, i: number, totalnum: number): string;
    /**
 * 根據數字獲取數字圖示。
 * 
 * @param number 數字。
 * @return 數字圖示的字串。
 */
    getNumberIcon3(number: number): string;
    /**
 * 在賭場投注百家樂遊戲。
 * 
 * @param type 投注類型。
 * @param amount 投注金額。
 * @param pointtype 積分類型。
 * @return 投注結果訊息。
 */
    BaccaratBet(type: string, amount: number, pointtype: string): string;
    /**
 * 獲取百家樂遊戲的對戰記錄。
 * 
 * @return 對戰記錄。
 */
    getShowdownLog(): string;
    /**
 * 獲取彩票遊戲的對戰記錄。
 * 
 * @return 對戰記錄。
 */
    getLottoryLog(): string;
    /**
 * 在賭場投注牛牛遊戲。
 * 
 * @param amount 投注金額。
 * @return 投注結果訊息。
 */
    NiuNiuBet(amount: number): string;
    /**
 * 獲取百家樂遊戲的規則說明。
 * 
 * @return 規則說明。
 */
    getBaccaratRules(): string;
    /**
 * 獲取百家樂遊戲的總投注金額。
 * 
 * @return 總投注金額。
 */
    getBaccaratTotalBet(): number;
    /**
 * 獲取牛牛遊戲的總投注金額。
 * 
 * @return 總投注金額。
 */
    getNiuNiuTotalBet(): number;
    /**
 * 獲取二十一點遊戲目前的投注金額。
 * 
 * @return 目前投注金額。
 */
    getBlackJackNowBet(): number;
    /**
 * 獲取牛牛遊戲目前的投注金額。
 * 
 * @return 目前投注金額。
 */
    getNiuNiuNowBet(): number;
    /**
 * 獲取牛牛遊戲的總勝利金額。
 * 
 * @return 總勝利金額。
 */
    getNiuNiuTotalWin(): number;
    /**
 * 獲取二十一點遊戲的總勝利金額。
 * 
 * @return 總勝利金額。
 */
    getBlackJackTotalWin(): number;
    /**
 * 獲取牛牛遊戲的規則說明。
 * 
 * @return 規則說明。
 */
    getNiuNiuRules(): string;
    /**
 * 獲取二十一點遊戲的規則說明。
 * 
 * @return 規則說明。
 */
    getBlackJackRules(): string;
    /**
 * 獲取百家樂遊戲的GM資訊。
 * 
 * @return GM資訊。
 */
    getBaccaratGMInfo(): string;
    /**
 * 在二十一點遊戲中進行投注。
 * 
 * @param amount 投注金額。
 * @return 投注結果訊息。
 */
    BlackJackBet(amount: number): string;
    /**
 * 獲取二十一點遊戲的總投注金額。
 * 
 * @return 總投注金額。
 */
    getBlackJackTotalBet(): number;
    /**
 * 獲取目前二十一點遊戲的牌組。
 * 
 * @return 目前牌組。
 */
    getNowBlackJackCard(): string;
    /**
 * 顯示PVP視窗。
 */
    sendPVPWindow(): void;
    /**
 * 顯示職業視窗。
 */
    sendProfessionWindow(): void;
    /**
 * 獲取NPC的名稱。
 * 
 * @return NPC名稱。
 */
    getNpcName(): string;
    /**
 * 顯示究極冒險家視窗。
 */
    sendUltimateExplorer(): void;
    /**
 * 顯示吊墜槽狀態。
 * 
 * @param b 是否顯示吊墜槽。
 */
    sendPendant(b: boolean): void;
    /**
 * 強制播放特定動作。
 * 
 * @param values 動作相關參數。
 */
    forcedAction(values: any): void;
    /**
 * 延遲特定時間。
 * 
 * @param time 延遲時間。
 */
    exceTime(time: number): void;
    /**
 * 播放特定事件效果。
 * 
 * @param data 效果數據。
 * @param values 相關參數。
 */
    getEventEffect(data: string, values: any): void;
    /**
 * 強制玩家等待。
 */
    playerWaite(): void;
    /**
 * 強制玩家向左移動。
 */
    playerMoveLeft(): void;
    /**
 * 強制玩家向右移動。
 */
    playerMoveRight(): void;
    /**
 * 強制玩家跳躍。
 */
    playerJump(): void;
    /**
 * 強制玩家向下移動。
 */
    playerMoveDown(): void;
    /**
 * 強制玩家輸入特定指令。
 * 
 * @param input 輸入指令。
 */
    forcedInput(input: number): void;
    /**
 * 執行特殊的輸入模式。
 * 
 * @param data 數據。
 * @param values 相關參數。
 */
    patternInput(data: string, values: any): void;
    /**
 * 控制相機移動。
 * 
 * @param values 相關參數。
 */
    cameraMove(values: any): void;
    /**
 * 將相機對準角色。
 * 
 * @param value 相機方向。
 */
    cameraOnCharacter(value: number): void;
    /**
 * 控制相機縮放。
 * 
 * @param values 相關參數。
 */
    cameraZoom(values: any): void;
    /**
 * 隱藏或顯示玩家。
 * 
 * @param hide 是否隱藏玩家。
 */
    hidePlayer(hide: boolean): void;
    /**
 * 修改角色表情。
 * 
 * @param value 表情編號。
 */
    faceOff(value: number): void;
    /**
 * 發送遊戲故事訊息。
 * 
 * @param data 故事訊息。
 * @param lastLine 是否最後一行。
 */
    sendTellStory(data: string, lastLine: boolean): void;
    /**
 * 移除額外效果。
 */
    removeAdditionalEffect(): void;
    /**
 * 強制移動角色。
 * 
 * @param value 移動方向。
 * @param value1 移動距離。
 */
    forcedMove(value: number, value1: number): void;
    /**
 * 強制翻轉角色。
 * 
 * @param value 翻轉方向。
 */
    forcedFlip(value: number): void;
    /**
 * 輸入UI操作。
 * 
 * @param value 輸入的值。
 */
    inputUI(value: number): void;
    /**
 * 獲取方向效果。
 * 
 * @param mod 方向效果模式。
 * @param data 數據。
 * @param values 數值陣列。
 */
    getDirectionEffect(mod: number, data: string, values: any): void;
    /**
 * 生成NPC請求控制器。
 * 
 * @param npcid NPC的ID。
 * @param x X坐標。
 * @param y Y坐標。
 */
    spawnNPCRequestController(npcid: number, x: number, y: number): void;
    /**
 * 生成NPC請求控制器。
 * 
 * @param npcid NPC的ID。
 * @param x X坐標。
 * @param y Y坐標。
 * @param f F值。
 */
    spawnNPCRequestController(npcid: number, x: number, y: number, f: number): void;
    /**
 * 生成NPC請求控制器。
 * 
 * @param npcid NPC的ID。
 * @param x X坐標。
 * @param y Y坐標。
 * @param f F值。
 * @param oid 物件ID。
 */
    spawnNPCRequestController(npcid: number, x: number, y: number, f: number, oid: number): void;
    /**
 * 設置NPC特殊動作。
 * 
 * @param npcid NPC的ID。
 * @param action 特殊動作。
 */
    setNPCSpecialAction(npcid: number, action: string): void;
    /**
 * 設置NPC特殊動作。
 * 
 * @param npcid NPC的ID。
 * @param action 特殊動作。
 * @param time 時間。
 * @param unk 未知。
 */
    setNPCSpecialAction(npcid: number, action: string, time: number, unk: boolean): void;
    /**
 * 設置NPC特殊動作。
 * 
 * @param npcid NPC的ID。
 * @param action 特殊動作。
 * @param time 時間。
 * @param unk 未知。
 * @param directionTime 方向時間。
 */
    setNPCSpecialAction(npcid: number, action: string, time: number, unk: boolean, directionTime: number): void;
    /**
 * 更新NPC特殊動作。
 * 
 * @param oid 物件ID。
 * @param value 值。
 * @param x X坐標。
 * @param y Y坐標。
 */
    updateNPCSpecialAction(oid: number, value: number, x: number, y: number): void;
    /**
 * 設置NPC其他動作。
 * 
 * @param npcid NPC的ID。
 * @param Action 動作。
 */
    setNPCOtherAction(npcid: number, Action: string): void;
    /**
 * 獲取NPC方向效果。
 * 
 * @param npcid NPC的ID。
 * @param data 數據。
 * @param value 值。
 * @param x X坐標。
 * @param y Y坐標。
 */
    getNPCDirectionEffect(npcid: number, data: string, value: number, x: number, y: number): void;
    /**
 * 移除NPC請求控制器。
 * 
 * @param oid 物件ID。
 */
    removeNPCRequestController(oid: number): void;
    /**
 * 說話。
 * 
 * @param sMsg 訊息。
 */
    say(sMsg: string): void;
    /**
 * 說話。
 * 
 * @param sMsg 訊息。
 * @param prev 前一個。
 * @param next 下一個。
 */
    say(sMsg: string, prev: boolean, next: boolean): void;
    /**
 * 說話。
 * 
 * @param bParam 參數。
 * @param sMsg 訊息。
 * @param prev 前一個。
 * @param next 下一個。
 */
    say(bParam: number, sMsg: string, prev: boolean, next: boolean): void;
    /**
 * 說話。
 * 
 * @param nSpeakerTemplateID 說話者模板ID。
 * @param bParam 參數。
 * @param sMsg 訊息。
 * @param prev 前一個。
 * @param next 下一個。
 */
    say(nSpeakerTemplateID: number, bParam: number, sMsg: string, prev: boolean, next: boolean): void;
    /**
 * 說話。
 * 
 * @param nSpeakerTemplateID 說話者模板ID。
 * @param nAnotherSpeakerTemplateID 另一個說話者模板ID。
 * @param bParam 參數。
 * @param sMsg 訊息。
 * @param prev 前一個。
 * @param next 下一個。
 */
    say(nSpeakerTemplateID: number, nAnotherSpeakerTemplateID: number, bParam: number, sMsg: string, prev: boolean, next: boolean): void;
    /**
 * 說話。
 * 
 * @param nSpeakerTemplateID 說話者模板ID。
 * @param nAnotherSpeakerTemplateID 另一個說話者模板ID。
 * @param nOtherSpeakerTemplateID 其他說話者模板ID。
 * @param bParam 參數。
 * @param sMsg 訊息。
 * @param prev 前一個。
 * @param next 下一個。
 */
    say(nSpeakerTemplateID: number, nAnotherSpeakerTemplateID: number, nOtherSpeakerTemplateID: number, bParam: number, sMsg: string, prev: boolean, next: boolean): void;
    /**
 * 說話。
 * 
 * @param nSpeakerTypeID 說話者類型ID。
 * @param nSpeakerTemplateID 說話者模板ID。
 * @param nAnotherSpeakerTemplateID 另一個說話者模板ID。
 * @param nOtherSpeakerTemplateID 其他說話者模板ID。
 * @param bParam 參數。
 * @param eColor 顏色。
 * @param sMsg 訊息。
 * @param prev 前一個。
 * @param next 下一個。
 * @param tWait 等待時間。
 */
    say(nSpeakerTypeID: number, nSpeakerTemplateID: number, nAnotherSpeakerTemplateID: number, nOtherSpeakerTemplateID: number, bParam: number, eColor: number, sMsg: string, prev: boolean, next: boolean, tWait: number): void;
    /**
 * 問題選單。
 * 
 * @param sMsg 訊息。
 */
    askMenu(sMsg: string): void;
    /**
 * 問題選單。
 * 
 * @param bParam 參數。
 * @param sMsg 訊息。
 */
    askMenu(bParam: number, sMsg: string): void;
    /**
 * 問題選單。
 * 
 * @param nSpeakerTemplateID 說話者模板ID。
 * @param bParam 參數。
 * @param sMsg 訊息。
 */
    askMenu(nSpeakerTemplateID: number, bParam: number, sMsg: string): void;
    /**
 * 問題選單。
 * 
 * @param nSpeakerTemplateID 說話者模板ID。
 * @param nAnotherSpeakerTemplateID 另一個說話者模板ID。
 * @param bParam 參數。
 * @param sMsg 訊息。
 */
    askMenu(nSpeakerTemplateID: number, nAnotherSpeakerTemplateID: number, bParam: number, sMsg: string): void;
    /**
 * 問題選單。
 * 
 * @param nSpeakerTemplateID 說話者模板ID。
 * @param nAnotherSpeakerTemplateID 另一個說話者模板ID。
 * @param nOtherSpeakerTemplateID 其他說話者模板ID。
 * @param bParam 參數。
 * @param sMsg 訊息。
 */
    askMenu(nSpeakerTemplateID: number, nAnotherSpeakerTemplateID: number, nOtherSpeakerTemplateID: number, bParam: number, sMsg: string): void;
    /**
 * 問題選單。
 * 
 * @param nSpeakerTypeID 說話者類型ID。
 * @param nSpeakerTemplateID 說話者模板ID。
 * @param nAnotherSpeakerTemplateID 另一個說話者模板ID。
 * @param nOtherSpeakerTemplateID 其他說話者模板ID。
 * @param bParam 參數。
 * @param eColor 顏色。
 * @param sMsg 訊息。
 */
    askMenu(nSpeakerTypeID: number, nSpeakerTemplateID: number, nAnotherSpeakerTemplateID: number, nOtherSpeakerTemplateID: number, bParam: number, eColor: number, sMsg: string): void;
    /**
 * 將玩家的訊息傳給NPC。
 * 
 * @param text 訊息內容。
 */
    sendPlayerToNpc(text: string): void;
    /**
 * 將玩家的訊息傳給NPC，訊息顯示在對話框的左側。
 * 
 * @param text 訊息內容。
 */
    sendLeftPlayerToNpc(text: string): void;
    /**
 * 將玩家的訊息傳給NPC，訊息顯示在對話框的右側。
 * 
 * @param text 訊息內容。
 */
    sendRightPlayerToNpc(text: string): void;
    /**
 * 發送下一條訊息給玩家，不包含ESC按鈕。
 * 
 * @param text 訊息內容。
 */
    sendNextNoESC(text: string): void;
    /**
 * 將玩家的訊息傳給NPC，訊息顯示在對話框的右側。
 * 
 * @param text 訊息內容。
 */
    sendRightPlayerNoESC(text: string): void;
    /**
 * 將玩家的訊息傳給指定NPC，訊息顯示在對話框的右側。
 * 
 * @param text 訊息內容。
 * @param npcidd NPC的ID。
 */
    sendRightPlayerNoESC(text: string, npcidd: number): void;
    /**
 * 將玩家的訊息傳給NPC，訊息顯示在對話框的左側。
 * 
 * @param text 訊息內容。
 */
    sendLeftPlayerNoESC(text: string): void;
    /**
 * 將玩家的訊息傳給指定NPC，訊息顯示在對話框的左側。
 * 
 * @param text 訊息內容。
 * @param npcidd NPC的ID。
 */
    sendLeftPlayerNoESC(text: string, npcidd: number): void;
    /**
 * 播放影片。
 * 
 * @param data 影片資料。
 */
    playMovie(data: string): void;
    /**
 * 播放影片。
 * 
 * @param data 影片資料。
 * @param show 是否顯示。
 */
    playMovie(data: string, show: boolean): void;
    /**
 * 播放角色表情。
 * 
 * @param expression 表情。
 * @param duration 持續時間。
 */
    getDirectionFacialExpression(expression: number, duration: number): void;
    /**
 * 裝備道具。
 * 
 * @param itemId 道具ID。
 */
    equip(itemId: number): void;
    /**
 * 裝備道具。
 * 
 * @param itemId 道具ID。
 * @param replace 是否替換。
 */
    equip(itemId: number, replace: boolean): void;
    /**
 * 裝備道具。
 * 
 * @param itemId 道具ID。
 * @param replace 是否替換。
 * @param add 是否新增。
 */
    equip(itemId: number, replace: boolean, add: boolean): void;
    /**
 * 卸除裝備。
 * 
 * @param itemId 道具ID。
 */
    unequip(itemId: number): void;
    /**
 * 卸除裝備。
 * 
 * @param itemId 道具ID。
 * @param remove 是否移除。
 */
    unequip(itemId: number, remove: boolean): void;
    /**
 * 獲取建議對話。
 * 
 * @param wzinfo 建議對話訊息。
 */
    getAdviceTalk(wzinfo: any): void;
    /**
 * 發送他人對話。
 * 
 * @param text 對話內容。
 * @param npcid NPC的ID。
 * @param bottom 下部按鈕的陣列。
 */
    sendOthersTalk(text: string, npcid: number, bottom: any): void;
    /**
 * 發送他人對話。
 * 
 * @param text 對話內容。
 * @param npcidd NPC的ID。
 * @param bottom 下部按鈕的陣列。
 * @param type 類型。
 */
    sendOthersTalk(text: string, npcidd: number, bottom: any, type: any): void;
    /**
 * 發送好友窗口。
 */
    sendFriendWindow(): void;
    /**
 * 獲取字型。
 * 
 * @return 字型。
 */
    getFont(): any;
    /**
 * 發送傷害字型封包。
 */
    sendFontStyle(): void;
    /**
 * 執行日本婚禮效果。
 * 
 * @param ch 角色物件。
 */
    doJapaneseWeddingEffect(ch: any): void;
    run(): void;
    run(): void;
    run(): void;
    /**
 * 使用黃金剪刀。
 * 
 * @param invType 物品的背包類型。
 * @param slot 物品的插槽。
 * @return 是否成功使用。
 */
    useGoldScissor(invType: number, slot: any): boolean;
    /**
 * 獲取職業選擇。
 * 
 * @param job 職業代碼。
 */
    getJobSelection(job: number): void;
    /**
 * 潛能付費四五隨機。
 * 
 * @param slot 插槽。
 * @param type 類型。
 * @param amount 數量。
 */
    潛能付費四五隨機(slot: any, type: number, amount: number): void;
    /**
 * 顯示道場排名。
 */
    showDojoRank(): void;
    /**
 * 顯示道場排名。
 * 
 * @param weekrank 是否顯示本週排名。
 */
    showDojoRank(weekrank: boolean): void;
    /**
 * 生成訂單金幣。
 * 
 * @param amount 金額。
 * @param coin 貨幣類型。
 * @return 訂單金幣字串。
 * @throws IOException
 */
    generateOrderCoin(amount: number, coin: string): string;
    checkPhoneVerfied(MERCHANT_ID: string): boolean;
    generateOrderPayUni(amount: number, CVS: boolean): string;
    generateOrder(amount: number): string;
    generateOrder2(amount: number): string;
    generateOrder4(amount: number): string;
    generateOrder3(amount: number): string;
    generateOrder5(amount: number): string;
    generateOrder6(amount: number): string;
    generateLinePay(amount: number): string;
    /**
 * 獲得地圖上的玩家資料。
 * 
 * @return List<MapleCharacter>
 */
    getMapPlayers(): any;
    /**
 * 從掉落中添加物品到背包。
 * 
 * @param c 客戶端。
 * @param item 物品。
 */
    addFromDrop(c: MapleClient, item: any): void;
    /**
 * 從字串中獲得數字。
 * 
 * @param s 字串。
 * @return 數字。
 */
    getIntFromString(s: string): number;
    /**
 * 獲得該NPC所在的地圖代碼。
 * 
 * @return 地圖代碼。
 */
    getNpcMapId(): number;
    /**
 * 獲得該NPC所在的地圖。
 * 
 * @return 地圖。
 */
    getNpcMap(): MapleMap;
    /**
 * 獲得怪物實例。
 * 
 * @return 怪物實例。
 */
    getMonster(): any;
    /**
 * 獲得打怪傷害。
 * 
 * @return 怪物實例。
 */
    getMonsterDamage(): number;
    /**
 * 獲得指令陣列。
 * 
 * @return 指令陣列。
 */
    getCommand(): any;
    /**
 * 發送猜測名稱的訊息。
 * 
 * @param type 類型。
 * @param quest 任務。
 * @param nowpoint 目前點數。
 * @param questNum 任務編號。
 * @param second 秒數。
 */
    sendGuessName(type: number, quest: number, nowpoint: number, questNum: number, second: number): void;
    /**
 * 發送初始問答的訊息。
 * 
 * @param title 標題。
 * @param question 問題。
 * @param hint 提示。
 * @param point 分數。
 * @param limit 限制。
 * @param second 秒數。
 */
    sendInitialQuiz(title: string, question: string, hint: string, point: number, limit: number, second: number): void;
    /**
 * 根據類型和任務編號獲得猜測的答案。
 * 
 * @param type 類型。
 * @param quest 任務。
 * @return 猜測的答案。
 */
    getGuessAnswer(type: number, quest: number): string;
    /**
 * 根據物品ID獲得賣出價格。
 * 
 * @param itemid 物品ID。
 * @return 賣出價格。
 */
    getSellPrice(itemid: number): number;
    getAllCharacters(): any;
    /**
 * 延遲執行function。
 * 
 * @param function 函數。
 * @param delay 毫秒。
 * @return 角色。
 */
    schedule(function: string, delay: number): void;
    updateHair(): void;
    getAttackInfo(): any;
    getNpcPosition(): any;
    getMapleNPC(): any;
    getRecvPacket(): any;
    getData(): any;
}

declare interface MapleCharacter {
    /**
 * 
 * @param client
 * @param jobid
 * @return
 */
    getDefault(client: MapleClient, jobid: number): MapleCharacter;
    /**
 * 
 * @param ct
 * @param client
 * @param isChannel
 * @return
 */
    ReconstructChr(ct: any, client: MapleClient, isChannel: boolean): MapleCharacter;
    /**
 * 
 * @param charid
 * @param client
 * @param channelserver
 * @return
 */
    loadCharFromDB(charid: number, client: MapleClient, channelserver: boolean): MapleCharacter;
    /**
 * 
 * @param charid
 * @param client
 * @param channelserver
 * @param cards
 * @return
 */
    loadCharFromDB(charid: number, client: MapleClient, channelserver: boolean, cards: any): MapleCharacter;
    loadCharFromDB(charid: number, client: MapleClient, channelserver: boolean, cards: any, loadPlayer: boolean): MapleCharacter;
    /**
 * 
 * @param charid
 * @param client
 * @param channelserver
 * @param cards
 * @param loadPlayer
 * @return
 */
    loadCharFromDB(charid: number, client: MapleClient, channelserver: boolean, cards: any, loadPlayer: boolean, robot: boolean): MapleCharacter;
    compare(o1: any, o2: any): number;
    /**
 * 
 * @param chr
 * @param type
 * @param db
 */
    saveNewCharToDB(chr: MapleCharacter, type: any, db: any): void;
    /**
 * 
 * @param chr
 * @param type
 * @param db
 * @param keymapType
 */
    saveNewCharToDB(chr: MapleCharacter, type: any, db: any, keymapType: number): void;
    /**
 * 
 * @param dc
 * @param fromcs
 */
    saveToDB_Others(dc: boolean, fromcs: boolean): void;
    saveOfflineBuff(all: boolean): void;
    /**
 * 
 * @param ps
 * @return
 */
    getSQL(ps: any): string;
    /**
 * 
 * @return
 */
    getSaveKeyA(): string;
    /**
 * 
 * @param ps
 * @return
 */
    SaveKeyA(ps: any): boolean;
    /**
 * 
 * @return
 */
    getSaveKeyB(): string;
    /**
 * 
 * @param ps
 * @return
 */
    SaveKeyB(ps: any): boolean;
    /**
 * 
 * @return
 */
    getSaveKeyCs(): string;
    /**
 * 
 * @return
 */
    SaveKeyCs(): boolean;
    /**
 * 
 * @return
 */
    SaveKeyMts(): boolean;
    /**
 * 
 * @return
 */
    getSaveKeyInventory(): string;
    /**
 * 
 * @return
 */
    SaveKeyInventory(): boolean;
    /**
 * 
 * @return
 */
    getSaveKeyStorage(): string;
    /**
 * 
 * @return
 */
    SaveKeyStorage(): boolean;
    /**
 * 
 * @param dc
 * @param fromcs
 * @return
 */
    saveToDB(dc: boolean, fromcs: boolean): number;
    /**
 * 
 * @param con
 * @param sql
 * @param id
 */
    deleteWhereCharacterId(con: any, sql: string, id: number): void;
    /**
 * 
 * @param con
 * @param sql
 * @param id
 */
    deleteWhereCharacterId_NoLock(con: any, sql: string, id: number): void;
    /**
 * 
 * @param con
 * @param sql
 * @param id
 */
    deleteWhereAcccountId(con: any, sql: string, id: number): void;
    /**
 * 
 * @param con
 */
    saveInventory(con: any): void;
    /**
 * 
 * @return
 */
    getStat(): any;
    /**
 * 
 * @return
 */
    CRand(): any;
    /**
 * 
 * @param mplew
 */
    QuestInfoPacket(mplew: any): void;
    /**
 * 
 * @param questid
 * @return
 */
    getInfoQuest(questid: number): string;
    /**
 * 
 * @param questid
 * @param data
 */
    updateInfoQuest(questid: number, data: string): void;
    /**
 * 
 * @param questid
 */
    clearInfoQuest(questid: number): void;
    /**
 * 
 */
    removeAllQuest(): void;
    /**
 * 
 * @return
 */
    getNumQuest(): number;
    /**
 * 
 * @param quest
 * @return
 */
    getQuestStatus(quest: number): any;
    /**
 * 
 * @param questid
 * @return
 */
    getQuest(questid: number): any;
    /**
 * 
 * @param quest
 * @return
 */
    getQuest(quest: any): any;
    /**
 * 
 * @param quest
 * @param status
 * @param customData
 */
    setQuestAdd(quest: any, status: any, customData: string): void;
    /**
 * 
 * @param quest
 * @return
 */
    getQuestNAdd(quest: any): any;
    /**
 * 
 * @param quest
 * @return
 */
    getQuestNoAdd(quest: any): any;
    /**
 * 
 * @param quest
 * @return
 */
    getQuestRemove(quest: any): any;
    /**
 * 
 * @param quest
 * @return
 */
    getQuestRemove(quest: number): any;
    /**
 * 
 * @param questid
 */
    removeQuest(questid: number): void;
    /**
 * 
 * @param quest
 */
    updateQuest(quest: any): void;
    /**
 * 
 * @param quest
 */
    forceupdateQuest(quest: any): void;
    /**
 * 
 * @param quest
 */
    updateQuest(quest: number): void;
    /**
 * 
 * @param quest
 * @param update
 */
    updateQuest(quest: any, update: boolean): void;
    /**
 * 
 * @param quest
 * @param update
 */
    forceupdateQuest(quest: any, update: boolean): void;
    /**
 * 
 * @return
 */
    getInfoQuest_Map(): any;
    /**
 * 
 * @return
 */
    getQuest_Map(): any;
    /**
 * 
 * @return
 */
    getCompleteQuest_Map(): any;
    removeStackEffect(effect: any): void;
    /**
 * 
 * @param effect
 * @return
 */
    getBuffedValue(effect: any): any;
    /**
 * 
 * @param effect
 * @return
 */
    getBuffedValue2(effect: any): any;
    /**
 * 
 * @param effect
 * @return
 */
    getBuffStatValueHolder(effect: any): any;
    /**
 * 
 * @param effect
 * @param skillID
 * @return
 */
    getBuffStatValueHolder(effect: any, skillID: number): any;
    /**
 * 
 * @param effect
 * @return
 */
    hasBuffedValue(effect: any): boolean;
    /**
 * 
 * @param effect
 * @return
 */
    getBuffedSkill_X(effect: any): any;
    /**
 * 
 * @param effect
 * @return
 */
    getBuffedDamage(effect: any): any;
    /**
 * 
 * @param effect
 * @return
 */
    getBuffedSkill_Y(effect: any): any;
    /**
 * 
 * @param stat
 * @param skill
 * @return
 */
    isBuffFrom(stat: any, skill: any): boolean;
    /**
 * 
 * @param item
 * @param color
 * @return
 */
    changeFace(item: any, color: number): boolean;
    /**
 * 
 * @param id
 * @return
 */
    hasBuff(id: number): boolean;
    /**
 * 
 * @param stat
 * @return
 */
    getBuffSource(stat: any): number;
    /**
 * 
 * @return
 */
    getAllBuffId(): string;
    /**
 * 
 * @param stat
 * @return
 */
    getTrueBuffSource(stat: any): number;
    /**
 * 
 * @param itemid
 * @param checkEquipped
 * @return
 */
    getItemQuantity(itemid: number, checkEquipped: boolean): number;
    /**
 * 
 * @param effect
 * @param value
 */
    setBuffedValue(effect: any, value: number): void;
    /**
 * 
 * @param effect
 * @return
 */
    getBuffedStarttime(effect: any): number;
    /**
 * 
 * @param effect
 * @return
 */
    getStatForBuff(effect: any): any;
    /**
 * 
 */
    doBerserk(): void;
    /**
 * 
 * @return
 */
    canBerserk(): boolean;
    /**
 * 
 */
    doRecovery(): void;
    /**
 * 
 * @param now
 * @return
 */
    canRecover(now: number): boolean;
    /**
 * 
 */
    doDragonBlood(): void;
    /**
 * 
 * @param now
 * @return
 */
    canBlood(now: number): boolean;
    /**
 * 
 * @param time
 * @param to
 */
    startMapTimeLimitTask(time: number, to: MapleMap): void;
    run(): void;
    /**
 * 
 * @param time
 * @param mapid
 */
    startMapTimeLimitTask(time: number, mapid: number): void;
    run(): void;
    /**
 * 
 */
    startFishingTask(): void;
    /**
 * 
 * @param used
 * @param HiredFishing
 */
    gainFishReward(used: number, HiredFishing: boolean): void;
    /**
 * 
 */
    doFish(): void;
    /**
 * 
 * @param check
 */
    doFish(check: boolean): void;
    /**
 * 
 */
    doHiredFish(): void;
    /**
 * 
 */
    cancelMapTimeLimitTask(): void;
    /**
 * 
 */
    cancelFishingTask(): void;
    /**
 * 
 */
    startHiredFishingTask(): void;
    /**
 * 
 */
    cancelHiredFishingTask(): void;
    /**
 * 
 * @return
 */
    getLastHiredFishingTime(): number;
    /**
 * 
 */
    updatePetAuto(): void;
    /**
 * 
 * @param effect
 * @param starttime
 * @param from
 */
    registerEffect(effect: any, starttime: number, from: number): void;
    registerEffect(effect: any, starttime: number, statups: any, localDuration: number, cid: number): void;
    /**
 * 
 * @param effect
 * @param starttime
 * @param statups
 * @param localDuration
 * @param cid
 */
    registerEffect(effect: any, starttime: number, statups: any, localDuration: number, cid: number, familybuff: boolean): void;
    /**
 * 
 * @param buff
 * @return
 */
    getStackBuffInfo(buff: any): any;
    /**
 * 
 * @return
 */
    getSpecialBuffInfo(): any;
    /**
 * 
 * @param effect
 * @param startTime
 * @return
 */
    getBuffStats(effect: any, startTime: number): any;
    /**
 * 
 * @param effect
 * @param startTime
 * @return
 */
    getBuffStatsFromStatEffect(effect: any, startTime: number): any;
    /**
 * 
 * @param buffstats
 * @param overWrite
 */
    cancelPlayerBuffs(buffstats: any, overWrite: boolean): void;
    /**
 * 
 * @param stats
 * @return
 */
    deregisterBuffStats(stats: any): boolean;
    /**
 * 
 * @param effect
 * @param overwrite when overwrite is set no data is sent and all the
 * Buffstats in the StatEffect are deregistered
 * @param startTime
 */
    cancelEffect(effect: any, overwrite: boolean, startTime: number): void;
    /**
 * 
 * @param effect
 * @param overwrite
 * @param startTime
 * @param statups
 */
    cancelEffect(effect: any, overwrite: boolean, startTime: number, statups: any): void;
    /**
 * 
 * @param stat
 */
    cancelBuffStats(stat: any): void;
    /**
 * 
 * @param stat
 */
    cancelEffectFromBuffStat(stat: any): void;
    /**
 * 
 * @param stat
 * @param from
 */
    cancelEffectFromBuffStat(stat: any, from: number): void;
    /**
 * 
 * @param buffstats
 */
    cancelPlayerBuffs(buffstats: any): void;
    /**
 * 
 */
    dispel(): void;
    dispelByMob(): void;
    /**
 * 
 * @param skillid
 */
    dispelSkill(skillid: number): void;
    /**
 * 
 * @param skillid
 */
    dispelBuff(skillid: number): void;
    /**
 * 
 */
    cancelAllBuffs_(): void;
    /**
 * 
 */
    cancelAllBuffs(): void;
    /**
 * 
 */
    cancelAlpha(): void;
    /**
 * 取消變身效果
 */
    cancelMorphs(): void;
    /**
 * 
 * @return
 */
    getMorphState(): number;
    /**
 * 
 * @param buffs
 */
    silentGiveBuffs(buffs: any): void;
    /**
 * 
 */
    clearofflinebuffs(): void;
    getAllBuffs(): any;
    /**
 * 
 * @param skillid
 * @return
 */
    getSkillLevel(skillid: number): number;
    /**
 * 
 * @param skillid
 * @param targets
 */
    handleEnergyCharge(skillid: number, targets: number): void;
    /**
 * 
 * @param skillid
 * @return
 */
    isActiveBuffedValue(skillid: number): boolean;
    /**
 * 
 * @param damage
 */
    handleBattleshipHP(damage: number): void;
    /**
 * 
 * @return
 */
    currentBattleshipHP(): number;
    /**
 * 
 * @param v
 */
    setBattleshipHP(v: number): void;
    /**
 * 
 */
    decreaseBattleshipHP(): void;
    /**
 * 
 * @param skillid
 */
    handleOrbgain(skillid: number): void;
    /**
 * 
 * @param skillid
 * @param attackSkillId
 */
    handleOrbConsume(skillid: number, attackSkillId: number): void;
    /**
 * 
 */
    silentEnforceMaxHpMp(): void;
    /**
 * 
 */
    enforceMaxHpMp(): void;
    /**
 * 
 * @return
 */
    getMap(): MapleMap;
    /**
 * 
 * @return
 */
    getMonsterBook(): any;
    /**
 * 
 * @param newmap
 */
    setMap(newmap: MapleMap): void;
    /**
 * 
 * @param PmapId
 */
    setMap_Force(PmapId: number): void;
    /**
 * 
 * @param PmapId
 */
    setMap(PmapId: number): void;
    /**
 * 
 * @return
 */
    getMapId(): number;
    /**
 * 
 * @return
 */
    getInitialSpawnpoint(): any;
    /**
 * 
 * @return
 */
    getId(): number;
    /**
 * 
 * @return
 */
    getName(): string;
    /**
 * 
 * @param itemid
 * @return
 */
    canHold(itemid: number): boolean;
    /**
 * 
 * @param itemid
 * @param quantity
 * @return
 */
    canHold(itemid: number, quantity: number): boolean;
    /**
 * 
 * @return
 */
    getBlessOfFairyOrigin(): string;
    /**
 * 
 * @return
 */
    getLevel(): any;
    /**
 * 
 * @return
 */
    getFame(): any;
    /**
 * 
 * @return
 */
    getDojo(): number;
    /**
 * 
 * @return
 */
    getDojoRecord(): number;
    /**
 * 
 * @return
 */
    getFallCounter(): number;
    /**
 * 
 * @return
 */
    getClient(): MapleClient;
    /**
 * 
 * @param client
 */
    setClient(client: MapleClient): void;
    /**
 * 
 * @return
 */
    getExp(): number;
    /**
 * 
 * @return
 */
    getRemainingAp(): any;
    /**
 * 
 * @return
 */
    getRemainingSp(): number;
    /**
 * 
 * @param skillbook
 * @return
 */
    getRemainingSp(skillbook: number): number;
    /**
 * 
 * @return
 */
    getRemainingSps(): any;
    /**
 * 
 * @return
 */
    getRemainingSpSize(): number;
    /**
 * 
 * @return
 */
    getHpMpApUsed(): any;
    /**
 * 
 * @return
 */
    isHidden(): boolean;
    /**
 * 
 * @param hpApUsed
 */
    setHpMpApUsed(hpApUsed: any): void;
    /**
 * 
 * @return
 */
    getSkinColor(): any;
    /**
 * 
 * @param skinColor
 */
    setSkinColor(skinColor: any): void;
    /**
 * 
 * @param v
 */
    setSkinColor_Force(v: any): void;
    /**
 * 
 * @return
 */
    getJob(): any;
    /**
 * 
 * @param v
 */
    setJob(v: any): void;
    /**
 * 
 * @param v
 */
    setJob_Force(v: any): void;
    /**
 * 
 * @return
 */
    getGender(): any;
    /**
 * 
 * @param v
 */
    setGender_Force(v: any): void;
    /**
 * 
 * @return
 */
    getHair(): number;
    /**
 * 
 * @return
 */
    getFace(): number;
    /**
 * 
 * @param name
 */
    setName(name: string): void;
    /**
 * 
 * @param n
 */
    setName_Force(n: string): void;
    /**
 * 
 * @param exp
 */
    setExp(exp: number): void;
    /**
 * 
 * @param set
 */
    setExp_Force(set: number): void;
    /**
 * 
 * @param hair
 */
    setHair(hair: number): void;
    /**
 * 
 * @param set
 */
    setHair_Force(set: number): void;
    /**
 * 
 * @param face
 */
    setFace(face: number): void;
    /**
 * 
 * @param set
 */
    setFace_Force(set: number): void;
    /**
 * 
 * @param fame
 */
    setFame(fame: any): void;
    /**
 * 
 * @param set
 */
    setFame_Force(set: number): void;
    /**
 * 
 * @param dojo
 */
    setDojo(dojo: number): void;
    /**
 * 
 * @param reset
 */
    setDojoRecord(reset: boolean): void;
    /**
 * 
 * @param fallcounter
 */
    setFallCounter(fallcounter: number): void;
    /**
 * 
 * @return
 */
    getOldPosition(): any;
    /**
 * 
 * @param x
 */
    setOldPosition(x: any): void;
    /**
 * 
 * @param remainingAp
 */
    setRemainingAp(remainingAp: any): void;
    /**
 * 
 */
    resetRemainSp(): void;
    /**
 * 
 * @param remainingSp
 */
    setRemainingSp(remainingSp: number): void;
    /**
 * 
 * @param remainingSp
 * @param skillbook
 */
    setRemainingSp(remainingSp: number, skillbook: number): void;
    /**
 * 
 * @param gender
 */
    setGender(gender: any): void;
    /**
 * 
 * @param invinc
 */
    setInvincible(invinc: boolean): void;
    /**
 * 
 * @param duration
 */
    setInvincible(duration: number): void;
    /**
 * 
 * @return
 */
    isInvincible(): boolean;
    /**
 * 
 * @return
 */
    getCheatTracker(): any;
    /**
 * 
 * @return
 */
    getBuddylist(): any;
    /**
 * 
 * @param famechange
 */
    addFame(famechange: number): void;
    /**
 * 
 * @param map
 * @param portal
 */
    changeMap(map: number, portal: number): void;
    /**
 * 
 * @param mapid
 */
    changeMap(mapid: number): void;
    /**
 * 
 * @param mapid
 * @param portal
 * @param msg
 */
    changeMapBanish(mapid: number, portal: string, msg: string): void;
    /**
 * 
 * @param to
 * @param pos
 */
    changeMap(to: MapleMap, pos: any): void;
    /**
 * 
 * @param to
 * @param pto
 */
    changeMap(to: MapleMap, pto: any): void;
    /**
 * 
 * @param to
 */
    changeMap(to: MapleMap): void;
    /**
 * 
 * @param to
 * @param pto
 */
    changeMapPortal(to: MapleMap, pto: any): void;
    /**
 * 
 * @param star
 */
    handleStarDamage(star: number): void;
    /**
 * 
 * @param mapid
 */
    handleMapQuest(mapid: number): void;
    /**
 * 
 * @param questId
 * @return
 */
    getQuestInfo(questId: number): string;
    /**
 * 
 * @param questId
 * @param info
 */
    setQuestInfo(questId: number, info: string): void;
    /**
 * 
 * @param mapId
 */
    NewerPlayerJump(mapId: number): void;
    /**
 * 
 */
    leaveMap(): void;
    /**
 * 
 * @param newJob
 */
    changeJob(newJob: number): void;
    /**
 * 
 */
    resetRunningStack(): void;
    /**
 * 
 * @return
 */
    getRunningStack(): number;
    /**
 * 
 * @param s
 */
    addRunningStack(s: number): void;
    /**
 * 
 */
    sidekickUpdate(): void;
    /**
 * 
 */
    baseSkills(): void;
    /**
 * 
 * @param ap
 */
    gainAp(ap: any): void;
    /**
 * 
 * @param ap
 */
    setAp_Force(ap: any): void;
    /**
 * 
 * @param sp
 */
    gainSP(sp: number): void;
    /**
 * 
 * @param sp
 * @param skillbook
 */
    gainSP(sp: number, skillbook: number): void;
    /**
 * 
 */
    resetAPSP(): void;
    /**
 * 
 */
    resetSP(): void;
    /**
 * 
 */
    resetAP(): void;
    /**
 * 
 * @param skillId
 * @param newLevel
 * @param newMasterlevel
 */
    changeSkillLevel(skillId: any, newLevel: number, newMasterlevel: any): void;
    /**
 * 
 * @param skillId
 * @param newLevel
 * @param newMasterlevel
 * @param day
 */
    changeSkillLevel(skillId: any, newLevel: number, newMasterlevel: any, day: number): void;
    changeSkillLevelSecond(skillId: any, newLevel: number, newMasterlevel: any, second: number): void;
    /**
 * 
 * @param skill
 * @param newLevel
 * @param newMasterlevel
 */
    changeSkillLevel(skill: any, newLevel: number, newMasterlevel: number): void;
    /**
 * 
 */
    reloadAllSkills(): void;
    updateSkills(): void;
    /**
 * 
 * @param update
 */
    changeSkillLevel(update: any): void;
    /**
 * 
 * @param skill
 * @param newLevel
 * @param newMasterlevel
 * @param expiration
 */
    changeSkillLevel(skill: any, newLevel: number, newMasterlevel: number, expiration: number): void;
    /**
 * 
 * @param chr
 * @param skillid
 * @param jobid
 * @return
 */
    handleSkill(chr: MapleCharacter, skillid: number, jobid: number): boolean;
    /**
 * 
 * @param skillid
 * @param newLevel
 * @param newMasterlevel
 * @param write
 */
    changeSkillLevel_Skip(skillid: number, newLevel: any, newMasterlevel: any, write: boolean): void;
    /**
 * 
 * @param skill
 * @param newLevel
 * @param newMasterlevel
 * @param write
 */
    changeSkillLevel_Skip(skill: any, newLevel: any, newMasterlevel: any, write: boolean): void;
    /**
 * 
 * @param skill
 * @param newLevel
 * @param newMasterlevel
 */
    changeSkillLevel_Skip(skill: any, newLevel: any, newMasterlevel: any): void;
    /**
 * 
 * @param skill
 * @param newLevel
 * @param newMasterlevel
 */
    changeSkillLevel_Skip(skill: number, newLevel: any, newMasterlevel: any): void;
    /**
 * 
 */
    playerDead(): void;
    /**
 * 
 * @return
 */
    getPartyMapMembers(attackerlevel: number, moblevel: number): number;
    /**
 * 
 * @return
 */
    getPartyMapAttackingMembers(): number;
    getPartyMapAttackingMembersLevel(level: number): number;
    /**
 * 
 */
    updatePartyMemberHP(): void;
    /**
 * 
 */
    receivePartyMemberHP(): void;
    /**
 * 
 * @param delta
 */
    healHP(delta: number): void;
    /**
 * 
 * @param delta
 * @param Show
 */
    healHP(delta: number, Show: boolean): void;
    /**
 * 
 * @param delta
 * @param packet
 */
    healMP(delta: number, packet: boolean): void;
    /**
 * 
 * @param delta
 */
    healMP(delta: number): void;
    /**
 * 
 */
    kill(): void;
    /**
 * Convenience function which adds the supplied parameter to the current hp
 * then directly does a updateSingleStat.
 * 
 * @param delta
 * @see MapleCharacter#setHp(int)
 */
    addHP(delta: number): void;
    /**
 * 
 * @param addhp
 */
    addMaxHP(addhp: number): void;
    /**
 * 
 * @param addmp
 */
    addMaxMP(addmp: number): void;
    /**
 * Convenience function which adds the supplied parameter to the current mp
 * then directly does a updateSingleStat.
 * 
 * @param delta
 * @see MapleCharacter#setMp(int)
 */
    addMP(delta: number): void;
    /**
 * 
 */
    checkAutoHpMp(): void;
    /**
 * 
 * @param hpDiff
 * @param mpDiff
 */
    addMPHP(hpDiff: number, mpDiff: number): void;
    /**
 * 
 * @param stat
 * @param newval
 */
    updateSingleStat(stat: any, newval: number): void;
    /**
 * Updates a single stat of this MapleCharacter for the client. This method
 * only creates and sends an update packet, it does not update the stat
 * stored in this MapleCharacter instance.
 * 
 * @param stat
 * @param newval
 * @param itemReaction
 */
    updateSingleStat(stat: any, newval: number, itemReaction: boolean): void;
    /**
 * 
 * @param prevexp
 * @param needed
 * @param leveled
 */
    familyRep(prevexp: number, needed: number, leveled: boolean): void;
    /**
 * 
 * @return
 */
    isShowInfo(): boolean;
    /**
 * 
 * @return
 */
    isShowErr(): boolean;
    /**
 * 
 * @param total
 */
    gainExp(total: number): void;
    /**
 * 
 * @param total
 * @param show
 * @param inChat
 * @param white
 */
    gainExp(total: number, show: boolean, inChat: boolean, white: boolean): void;
    /**
 * 
 * @param equip
 * @return
 */
    getAllExpRateAdd(equip: boolean): number;
    /**
 * 
 * @return
 */
    getAllExpRateAdd(): number;
    /**
 * 
 * @param mob
 * @param pty
 * @return
 */
    getAllExpRateMultiply(mob: any, pty: number): number;
    /**
 * 
 * @param gain
 * @param show
 * @param white
 * @param pty
 * @param classBounsExpPercent
 * @param Premium_Bonus_EXP_PERCENT
 * @param mob
 */
    gainExpMonster(gain: number, show: boolean, white: boolean, pty: number, classBounsExpPercent: number, Premium_Bonus_EXP_PERCENT: number, mob: any): void;
    /**
 * 
 */
    reloadC(): void;
    /**
 * 
 * @param item
 */
    forceUpdateItem(item: any): void;
    /**
 * 
 * @param item
 * @param updateTick
 */
    forceUpdateItem(item: any, updateTick: boolean): void;
    /**
 * 
 * @param item
 * @param type
 */
    forceReAddItem_NoUpdate(item: any, type: any): void;
    /**
 * 
 * @param item
 * @param type
 */
    forceReAddItem(item: any, type: any): void;
    /**
 * 
 * @param item
 * @param type
 * @param watk
 * @param matk
 */
    forceReAddItem_Equip(item: any, type: any, watk: any, matk: any): void;
    /**
 * 
 * @param item
 * @param type
 * @param watk
 * @param matk
 * @param wdef
 * @param mdef
 * @param speed
 * @param jump
 * @param acc
 * @param avoid
 * @param str
 * @param dex
 * @param luk
 * @param int_
 */
    forceReAddItem_Equip(item: any, type: any, watk: any, matk: any, wdef: any, mdef: any, speed: any, jump: any, acc: any, avoid: any, str: any, dex: any, luk: any, int_: any): void;
    /**
 * 
 * @param forcezero
 */
    renewCashEquipDamage(forcezero: boolean): void;
    /**
 * 
 * @param forcezero
 */
    renewTotemDamage(forcezero: boolean): void;
    /**
 * 
 * @param item
 * @param type
 * @param readd
 */
    forceReAddItem_Equip(item: any, type: any, readd: boolean): void;
    /**
 * 
 * @param item
 * @param type
 */
    forceReAddItem_Equip(item: any, type: any): void;
    /**
 * 
 * @param item
 * @param type
 */
    forceReAddItem_Flag(item: any, type: any): void;
    /**
 * 
 */
    silentPartyUpdate(): void;
    /**
 * 
 * @param x
 */
    setGM(x: any): void;
    /**
 * 
 * @param set
 */
    setGM_Force(set: any): void;
    /**
 * 
 * @return
 */
    isGM(): boolean;
    /**
 * 
 * @return
 */
    isAdmin(): boolean;
    /**
 * 
 * @return
 */
    getGMLevel(): number;
    /**
 * 
 * @return
 */
    isPlayer(): boolean;
    /**
 * 
 * @param level
 * @return
 */
    hasGmLevel(level: number): boolean;
    /**
 * 
 * @param type
 * @return
 */
    getInventory(type: any): any;
    /**
 * 
 * @return
 */
    getInventorys(): any;
    /**
 * 
 */
    expirationTask(): void;
    /**
 * 
 * @param pending
 */
    expirationTask(pending: boolean): void;
    /**
 * 
 * @return
 */
    getCreateDate(): string;
    /**
 * 
 * @param packet
 * @param pending
 */
    expirationTask(packet: boolean, pending: boolean): void;
    /**
 * 
 * @return
 */
    getShop(): any;
    /**
 * 
 * @param shop
 */
    setShop(shop: any): void;
    /**
 * 
 * @return
 */
    getMeso(): number;
    /**
 * 
 * @return
 */
    getSavedLocations(): any;
    /**
 * 
 * @param type
 * @return
 */
    getSavedLocation(type: any): number;
    /**
 * 
 * @param type
 */
    saveLocation(type: any): void;
    /**
 * 
 * @param type
 * @param mapz
 */
    saveLocation(type: any, mapz: number): void;
    /**
 * 
 * @param type
 */
    clearSavedLocation(type: any): void;
    /**
 * 
 * @param gain
 * @param show
 */
    gainMeso(gain: number, show: boolean): void;
    /**
 * 
 * @param gain
 * @param show
 * @param enableActions
 */
    gainMeso(gain: number, show: boolean, enableActions: boolean): void;
    /**
 * 
 * @param gain
 * @param show
 * @param enableActions
 * @param inChat
 */
    gainMeso(gain: number, show: boolean, enableActions: boolean, inChat: boolean): void;
    /**
 * 
 * @param gain
 * @param show
 * @param enableActions
 * @param inChat
 * @param storage
 */
    gainMeso(gain: number, show: boolean, enableActions: boolean, inChat: boolean, storage: boolean): void;
    /**
 * 
 * @param monster
 * @param aggro
 */
    controlMonster(monster: any, aggro: boolean): void;
    /**
 * 
 * @param monster
 */
    stopControllingMonster(monster: any): void;
    /**
 * 
 * @param monster
 */
    checkMonsterAggro(monster: any): void;
    /**
 * 
 * @return
 */
    getControlled(): any;
    /**
 * 
 * @return
 */
    getControlledSize(): number;
    /**
 * 
 * @return
 */
    getAccountID(): number;
    /**
 * 
 * @param id
 * @param skillID
 */
    mobKilled(id: number, skillID: number): void;
    /**
 * 
 * @return
 */
    getStartedQuests(): any;
    /**
 * 
 * @return
 */
    getCompletedQuests(): any;
    /**
 * 
 * @return
 */
    getSkills(): any;
    /**
 * 
 * @param skill
 * @return
 */
    getSkillLevel(skill: any): number;
    /**
 * 
 * @param skillid
 * @return
 */
    getTotalSkillLevel(skillid: number): number;
    /**
 * 
 * @param skill
 * @return
 */
    getTotalSkillLevel(skill: any): number;
    /**
 * 
 * @param skill
 * @return
 */
    getMasterLevel(skill: number): number;
    /**
 * 
 * @param skill
 * @return
 */
    getMasterLevel(skill: any): number;
    /**
 * 
 */
    levelUp(): void;
    /**
 * 
 * @param maxhp
 * @param maxmp
 * @return
 */
    handleMaxHp_afterBigBang(maxhp: number, maxmp: number): any;
    /**
 * 
 * @param maxhp
 * @param maxmp
 * @return
 */
    handleMaxHp_beforeBigBang(maxhp: number, maxmp: number): any;
    handleMaxHp3(maxhp: number, maxmp: number): any;
    handleMaxHp2(maxhp: number, maxmp: number): any;
    /**
 * 
 * @param maxhp
 * @param maxmp
 * @return
 */
    handleHpMp(maxhp: number, maxmp: number): any;
    /**
 * 
 * @return
 */
    canLevelUp(): boolean;
    /**
 * 
 */
    handleLevelup(): void;
    /**
 * 
 */
    DoLevelMsg(): void;
    /**
 * 
 */
    DoLevelMap(): void;
    /**
 * 
 * @param key
 * @param type
 * @param action
 */
    changeKeybinding(key: number, type: any, action: number): void;
    /**
 * 
 * @param action
 */
    RemoveKeybindingBySkillid(action: number): void;
    /**
 * 
 * @param action
 * @return
 */
    containsBindingBySkillid(action: number): boolean;
    /**
 * 
 * @param skill1
 * @param skill2
 * @param skill3
 * @param name
 * @param pos
 */
    setMacros(skill1: number, skill2: number, skill3: number, name: string, pos: number): void;
    /**
 * 
 */
    clearMacros(): void;
    /**
 * 
 */
    sendMacros(): void;
    /**
 * 
 * @param position
 * @param updateMacro
 */
    updateMacros(position: number, updateMacro: any): void;
    /**
 * 
 * @return
 */
    getMacros(): any;
    /**
 * 
 * @param reason
 * @param duration
 * @param greason
 * @param bandIp
 */
    tempban(reason: string, duration: any, greason: number, bandIp: boolean): void;
    /**
 * 
 * @param ip
 * @param id
 * @param reason
 * @param accountId
 * @param gmlevel
 * @param hellban
 * @return
 */
    ban(ip: string, id: string, reason: string, accountId: boolean, gmlevel: number, hellban: boolean): boolean;
    /**
 * 
 * @param reason
 * @param banIP
 * @param autoban
 * @param hellban
 * @return
 */
    ban(reason: string, banIP: boolean, autoban: boolean, hellban: boolean): boolean;
    /**
 * 
 * @param name
 * @param reason
 * @return
 */
    OfflineBanByName(name: string, reason: string): boolean;
    /**
 * 
 * @param id
 * @param reason
 * @return
 */
    OfflineBanById(id: number, reason: string): boolean;
    /**
 * Oid of players is always = the cid
 * 
 * @return ObjectId
 */
    getObjectId(): number;
    /**
 * Throws unsupported operation exception, oid of players is read only
 * 
 * @param id
 */
    setObjectId(id: number): void;
    /**
 * 
 * @return
 */
    getStorage(): any;
    getStorageSlots(): number;
    addStorageSlots(increase: any): void;
    /**
 * 
 * @return
 */
    getStorageExceed(): any;
    /**
 * 
 * @param mo
 */
    addVisibleMapObject(mo: any): void;
    /**
 * 
 * @param mo
 */
    removeVisibleMapObject(mo: any): void;
    /**
 * 
 * @param mo
 * @return
 */
    isMapObjectVisible(mo: any): boolean;
    /**
 * 
 * @return
 */
    getAndWriteLockVisibleMapObjects(): any;
    /**
 * 
 */
    unlockWriteVisibleMapObjects(): void;
    /**
 * 
 * @return
 */
    isAlive(): boolean;
    /**
 * 
 * @param client
 */
    sendDestroyData(client: MapleClient): void;
    /**
 * 
 * @param client
 */
    sendSpawnData(client: MapleClient): void;
    /**
 * 
 */
    equipChanged(): void;
    run(): void;
    /**
 * 
 * @param index
 * @return
 */
    getPet(index: number): any;
    /**
 * 
 * @param pet
 */
    addPet(pet: any): void;
    /**
 * 
 * @param pet
 */
    removePet(pet: any): void;
    /**
 * 
 * @return
 */
    getSummonedPets(): any;
    /**
 * 
 * @param index
 * @return
 */
    getSummonedPet(index: number): any;
    /**
 * 
 */
    shiftPetsRight(): void;
    /**
 * 
 * @return
 */
    getPetSlotNext(): number;
    /**
 * 
 * @param petz
 * @return
 */
    getPetIndex(petz: any): any;
    /**
 * 
 * @param petId
 * @return
 */
    getPetIndex(petId: number): any;
    /**
 * 
 * @param petId
 * @return
 */
    getPetById(petId: number): any;
    /**
 * 
 * @return
 */
    getPets(): any;
    /**
 * 
 */
    unequipAllPets(): void;
    unequipPetPacket(pet: any, hunger: boolean): void;
    /**
 * 
 * @param pet
 * @param hunger
 */
    unequipPet(pet: any, hunger: boolean): void;
    /**
 * 
 * @param pet
 * @param hunger
 * @param index
 */
    unequipPet(pet: any, hunger: boolean, index: number): void;
    /**
 * 
 * @return
 */
    getLastFameTime(): number;
    /**
 * 
 * @return
 */
    getFamedCharacters(): any;
    /**
 * 
 * @param from
 * @return
 */
    canGiveFame(from: MapleCharacter): any;
    /**
 * 
 * @param to
 */
    hasGivenFame(to: MapleCharacter): void;
    /**
 * 
 * @return
 */
    getKeyLayout(): any;
    /**
 * 
 * @return
 */
    getParty(): any;
    /**
 * 
 * @return
 */
    getPartyId(): number;
    /**
 * 
 * @return
 */
    getWorld(): any;
    /**
 * 
 * @param world
 */
    setWorld(world: any): void;
    /**
 * 
 * @param party
 */
    setParty(party: any): void;
    /**
 * 
 * @return
 */
    getTrade(): any;
    /**
 * 
 * @param trade
 */
    setTrade(trade: any): void;
    /**
 * 
 * @return
 */
    getAntiMacro(): any;
    /**
 * 
 * @param isItem
 */
    startLieDetector(isItem: boolean): void;
    /**
 * 
 * @return
 */
    getEventInstance(): any;
    /**
 * 
 * @param eventInstance
 */
    setEventInstance(eventInstance: any): void;
    /**
 * 
 * @return
 */
    getEventManager(): any;
    /**
 * 
 * @param door
 */
    addDoor(door: any): void;
    /**
 * 
 */
    clearDoors(): void;
    /**
 * 
 * @return
 */
    getDoors(): any;
    /**
 * 
 */
    setSmega(): void;
    /**
 * 
 * @return
 */
    getSmega(): boolean;
    /**
 * 
 */
    setGashaponMega(): void;
    /**
 * 
 * @return
 */
    getGashaponMega(): boolean;
    /**
 * 
 */
    setGuildLevelup(): void;
    /**
 * 
 * @return
 */
    getGuildLevelup(): boolean;
    /**
 * 
 */
    setSecondJump(): void;
    /**
 * 
 * @return
 */
    getSecondJump(): boolean;
    /**
 * 
 * @return
 */
    getSummons(): any;
    /**
 * 
 * @return
 */
    getChair(): number;
    /**
 * 
 * @return
 */
    getItemEffect(): number;
    /**
 * 
 * @param chair
 */
    setChair(chair: number): void;
    /**
 * 
 * @param itemEffect
 */
    setItemEffect(itemEffect: number): void;
    /**
 * 
 * @return
 */
    getType(): any;
    /**
 * 
 * @return
 */
    getFamilyId(): number;
    /**
 * 
 * @return
 */
    getSeniorId(): number;
    /**
 * 
 * @return
 */
    getJunior1(): number;
    /**
 * 
 * @return
 */
    getJunior2(): number;
    /**
 * 
 * @return
 */
    getCurrentRep(): number;
    /**
 * 
 * @return
 */
    getTotalRep(): number;
    /**
 * 
 * @param _rank
 */
    setCurrentRep(_rank: number): void;
    /**
 * 
 * @param _rank
 */
    setTotalRep(_rank: number): void;
    /**
 * 
 * @return
 */
    getGuildId(): number;
    /**
 * 
 * @return
 */
    getGuildRank(): any;
    /**
 * 
 * @return
 */
    getGuildContribution(): number;
    /**
 * 
 * @param _c
 */
    setGuildContribution(_c: number): void;
    /**
 * 
 * @param _id
 */
    setGuildId(_id: number): void;
    /**
 * 
 * @param _rank
 */
    setGuildRank(_rank: any): void;
    /**
 * 
 * @return
 */
    getMGC(): any;
    /**
 * 
 * @param rank
 */
    setAllianceRank(rank: any): void;
    /**
 * 
 * @return
 */
    getAllianceRank(): any;
    /**
 * 
 * @return
 */
    getGuild(): any;
    /**
 * 
 */
    guildUpdate(): void;
    /**
 * 
 */
    saveGuildStatus(): void;
    /**
 * 
 */
    familyUpdate(): void;
    /**
 * 
 */
    saveFamilyStatus(): void;
    /**
 * 
 * @param type
 * @param quantity
 */
    modifyCSPoints(type: number, quantity: number): void;
    /**
 * 
 * @param message
 */
    dropMessage(message: string): void;
    /**
 * 
 * @param message
 */
    dropMessageAll(message: string): void;
    /**
 * 
 * @param message
 */
    dropMessagePotential(message: string): void;
    /**
 * 
 */
    setPotentialMessage(): void;
    /**
 * 
 * @param type 1 = NX點數 2 = 楓葉點數
 * @param quantity 獲得點數數量
 */
    gainCash(type: number, quantity: number): void;
    /**
 * 
 * @param type
 * @param quantity
 * @param show
 */
    modifyCSPoints(type: number, quantity: number, show: boolean): void;
    /**
 * 
 * @param type
 * @return
 */
    getCSPoints(type: number): number;
    /**
 * 
 * @param victim
 * @return
 */
    getOfflineAcash(victim: MapleCharacter): number;
    /**
 * 
 * @param itemid
 * @return
 */
    hasEquipped(itemid: number): boolean;
    /**
 * 
 * @param itemid
 * @return
 */
    getEquippedSize(itemid: number): number;
    /**
 * 
 * @param itemid
 * @param quantity
 * @param checkEquipped
 * @param greaterOrEquals
 * @return
 */
    haveItem(itemid: number, quantity: number, checkEquipped: boolean, greaterOrEquals: boolean): boolean;
    /**
 * 
 * @param itemid
 * @param quantity
 * @return
 */
    getItemCount(itemid: number, quantity: number): number;
    /**
 * 
 * @param itemid
 * @param quantity
 * @return
 */
    haveItem(itemid: number, quantity: number): boolean;
    /**
 * 
 * @param itemid
 * @return
 */
    haveItem(itemid: number): boolean;
    /**
 * 
 * @param message
 */
    dropNPC(message: string): void;
    /**
 * 
 * @param npc
 * @param message
 */
    dropNPC(npc: number, message: string): void;
    /**
 * 
 * @return
 */
    getItemVac(): boolean;
    /**
 * 
 */
    startItemVac(): void;
    /**
 * 
 */
    stopItemVac(): void;
    /**
 * 
 * @return
 */
    getCombo(): number;
    /**
 * 
 * @param combo
 */
    setCombo(combo: number): void;
    /**
 * 
 * @return
 */
    getLastCombo(): number;
    /**
 * 
 * @param combo
 */
    setLastCombo(combo: number): void;
    /**
 * 
 * @return
 */
    getBuddyCapacity(): any;
    /**
 * 
 * @param capacity
 */
    setBuddyCapacity(capacity: any): void;
    /**
 * 
 * @return
 */
    getMessenger(): any;
    /**
 * 
 * @param messenger
 */
    setMessenger(messenger: any): void;
    /**
 * 
 * @param skillId
 * @param startTime
 * @param length
 */
    addCooldown(skillId: number, startTime: number, length: number): void;
    /**
 * 
 * @param skillId
 */
    removeCooldown(skillId: number): void;
    /**
 * 
 */
    clearAllCooldowns(): void;
    /**
 * 
 * @param skillId
 * @return
 */
    skillisCooling(skillId: number): boolean;
    /**
 * 
 * @param skillid
 * @param starttime
 * @param length
 */
    giveCoolDowns(skillid: number, starttime: number, length: number): void;
    /**
 * 
 * @param cooldowns
 */
    giveCoolDowns(cooldowns: any): void;
    /**
 * 
 * @param cooldowns
 * @param packet
 */
    giveCoolDowns(cooldowns: any, packet: boolean): void;
    /**
 * 
 * @return
 */
    getCurrentBuffs(): any;
    /**
 * 
 * @return
 */
    getCooldowns(): any;
    /**
 * 
 * @return
 */
    getCooldownsSize(): number;
    /**
 * 
 * @return
 */
    getAllDiseases(): any;
    /**
 * 
 * @param dis
 * @return
 */
    hasDisease(dis: any): boolean;
    /**
 * 
 * @param type
 */
    getDiseaseBuff(type: number): void;
    /**
 * 
 * @param type
 */
    getDiseaseBuff(type: number, duration: number): void;
    /**
 * 
 * @param disease
 * @param skill
 */
    getDiseaseBuff(disease: any, skill: any): void;
    /**
 * 
 * @param disease
 * @param x
 * @param duration
 * @param skillid
 * @param level
 */
    getDiseaseBuff(disease: any, x: number, duration: number, skillid: number, level: number): void;
    /**
 * 
 * @param disease
 * @param x
 * @param duration
 * @param skillid
 * @param level
 */
    giveDebuff(disease: any, x: number, duration: number, skillid: number, level: number): void;
    /**
 * 
 * @param ld
 */
    giveSilentDebuff(ld: any): void;
    /**
 * 
 */
    dispelDebuffs(): void;
    /**
 * 
 * @param debuff
 */
    cancelDeiseaseBuff(debuff: any): void;
    /**
 * 
 */
    cancelAllDebuffs(): void;
    /**
 * 
 * @return
 */
    useMagicShield(): boolean;
    /**
 * 
 * @param level
 */
    setLevel(level: any): void;
    /**
 * 
 * @param l
 */
    setLevel_Force(l: any): void;
    /**
 * 
 * @param column
 * @param set
 * @return
 */
    UpdateCharacterLong(column: string, set: number): boolean;
    /**
 * 
 * @param column
 * @param set
 * @return
 */
    UpdateCharacter(column: string, set: number): boolean;
    /**
 * 
 * @param column
 * @param set
 * @return
 */
    UpdateCharacterString(column: string, set: string): boolean;
    /**
 * 
 * @param to
 * @param msg
 */
    sendNote(to: string, msg: string): void;
    /**
 * 
 * @param to
 * @param msg
 * @param fame
 */
    sendNote(to: string, msg: string, fame: number): void;
    /**
 * 
 */
    showNote(): void;
    /**
 * 
 * @param id
 * @param fame
 */
    deleteNote(id: number, fame: number): void;
    /**
 * 
 * @return
 */
    getmulungEnergy(): number;
    /**
 * 
 * @param inc
 */
    mulungEnergyModify(inc: boolean): void;
    /**
 * 
 */
    writeMulungEnergy(): void;
    /**
 * 
 * @param type
 * @param inc
 */
    writeEnergy(type: string, inc: string): void;
    /**
 * 
 * @param type
 * @param inc
 */
    writeStatus(type: string, inc: string): void;
    /**
 * 
 * @param type
 * @param inc
 */
    writePoint(type: string, inc: string): void;
    /**
 * 
 * @return
 */
    getKeyDownSkill_Time(): number;
    /**
 * 
 * @param keydown_skill
 */
    setKeyDownSkill_Time(keydown_skill: number): void;
    /**
 * 
 * @param text
 */
    setChalkboard(text: string): void;
    /**
 * 
 * @return
 */
    getChalkboard(): string;
    /**
 * 
 * @return
 */
    getMount(): any;
    /**
 * 
 * @return
 */
    gmLevel(): number;
    /**
 * 
 * @return
 */
    getWishlist(): any;
    /**
 * 
 */
    clearWishlist(): void;
    /**
 * 
 * @return
 */
    getWishlistSize(): number;
    /**
 * 
 * @param wl
 */
    setWishlist(wl: any): void;
    /**
 * 
 * @return
 */
    getRocks(): any;
    /**
 * 
 * @return
 */
    getRockSize(): number;
    /**
 * 
 * @param map
 */
    deleteFromRocks(map: number): void;
    /**
 * 
 */
    addRockMap(): void;
    /**
 * 
 * @param id
 * @return
 */
    isRockMap(id: number): boolean;
    /**
 * 
 * @return
 */
    getRegRocks(): any;
    /**
 * 
 * @return
 */
    getHyperRocks(): any;
    /**
 * 
 * @param map
 */
    deleteFromHyperRocks(map: number): void;
    /**
 * 
 */
    addHyperRockMap(): void;
    /**
 * 
 * @return
 */
    getHyperRockSize(): number;
    /**
 * 
 * @param id
 * @return
 */
    isHyperRockMap(id: number): boolean;
    /**
 * 
 * @return
 */
    getRegRockSize(): number;
    /**
 * 
 * @param map
 */
    deleteFromRegRocks(map: number): void;
    /**
 * 
 */
    addRegRockMap(): void;
    /**
 * 
 * @param id
 * @return
 */
    isRegRockMap(id: number): boolean;
    /**
 * 
 * @return
 */
    getLastRes(): any;
    /**
 * 
 * @param lastres
 */
    setLastRes(lastres: any): void;
    /**
 * 
 * @param bookCover
 */
    setMonsterBookCover(bookCover: number): void;
    /**
 * 
 * @return
 */
    getMonsterBookCover(): number;
    /**
 * 
 * @return
 */
    getSignTimes(): number;
    /**
 * 
 * @param set
 */
    setSignLog(set: number): void;
    /**
 * 
 */
    addSignLog(): void;
    /**
 * 
 * @param bossid
 */
    setMonthLog(bossid: string): void;
    /**
 * 
 * @param bossid
 * @return
 */
    getMonthLog(bossid: string): number;
    /**
 * 
 * @param bossid
 * @return
 */
    getMonthAcLog(bossid: string): number;
    /**
 * 
 * @param bossid
 */
    setMonthAcLog(bossid: string): void;
    /**
 * 
 * @param bossid
 * @param add
 */
    addMonthAcLog(bossid: string, add: number): void;
    /**
 * 
 * @param bossid
 * @param add
 */
    addMonthLog(bossid: string, add: number): void;
    /**
 * 
 * @param bossid
 * @param add
 */
    setMonthLog(bossid: string, add: number): void;
    /**
 * 
 * @param bossid
 */
    setWeekLog(bossid: string): void;
    /**
 * 
 * @param bossid
 * @param add
 */
    addWeekLog(bossid: string, add: number): void;
    /**
 * 
 * @param bossid
 * @return
 */
    getWeekLog(bossid: string): number;
    /**
 * 
 * @param bossid
 * @param add
 */
    setWeekLog(bossid: string, add: number): void;
    /**
 * 
 * @param bossid
 * @param add
 */
    setWeekAcLog(bossid: string, add: number): void;
    /**
 * 
 * @param bossid
 */
    resetWeekAcLog(bossid: string): void;
    /**
 * 
 * @param bossid
 * @return
 */
    getWeekAcLog(bossid: string): number;
    /**
 * 
 * @param bossid
 */
    setWeekAcLog(bossid: string): void;
    /**
 * 
 * @param bossid
 * @param add
 */
    addWeekAcLog(bossid: string, add: number): void;
    /**
 * 
 * @param bossid
 * @return
 */
    getBossLog(bossid: string): number;
    /**
 * 
 * @param bossid
 * @return
 */
    getLastWeekAcLog(bossid: string): number;
    /**
 * 
 * @param bossid
 * @return
 */
    getLastWeekLog(bossid: string): number;
    /**
 * 
 * @param bossid
 * @return
 */
    getBossLogWeek(bossid: string): number;
    /**
 * 
 * @param phoneNumber
 * @return
 */
    checkPhoneUsed(phoneNumber: number): boolean;
    getPhoneUsed(phoneNumber: number): number;
    /**
 * 
 * @param bossid
 * @return
 */
    getBossLogReload(bossid: string): number;
    /**
 * 
 * @param day
 * @param bossid
 * @return
 */
    getBossLog(day: number, bossid: string): number;
    /**
 * 
 * @param bossid
 */
    removeBossLog(bossid: string): void;
    /**
 * 
 * @param bossid
 */
    setBossLog(bossid: string): void;
    /**
 * 
 * @param mobid
 * @return
 */
    getMobLog(mobid: number): number;
    /**
 * 
 * @param mobid
 * @return
 */
    getAllMobLog(mobid: number): number;
    /**
 * 
 * @param bossid
 * @param count
 */
    setBossLog(bossid: string, count: number): void;
    /**
 * 
 * @param bossid
 * @param count
 */
    setAcLog(bossid: string, count: number): void;
    /**
 * 
 * @param bossid
 * @param count
 * @return
 */
    getBossLogTime(bossid: string, count: number): string;
    /**
 * 
 * @param second
 * @return
 */
    secondToTime(second: number): string;
    /**
 * 
 * @param EventName
 */
    setEventCount(EventName: string): void;
    /**
 * 
 * @param EventName
 * @return
 */
    getEventCount(EventName: string): number;
    /**
 * 
 * @param log
 * @return
 */
    getOneTimeLog(log: string): number;
    /**
 * 
 * @param log
 */
    setOneTimeLog(log: string): void;
    setPrizeLog(bossid: string): void;
    addPrizeLog(bossid: string, count: number): void;
    /**
 * 
 * @param bossid
 * @return
 */
    getPrizeLog(bossid: string): number;
    /**
 * 
 * @param bossid
 */
    deletePrizeLog(bossid: string): void;
    /**
 * 這個方法用於刪除指定的獎勵日誌條目。
 * 
 * @param bossid 這是一個字符串，表示要刪除的獎勵日誌的bossid。
 * @param count 這是一個整數，表示要刪除的獎勵日誌條目的數量。
 */
    deletePrizeLog(bossid: string, count: number): void;
    /**
 * 這個方法用於重置指定的獎勵日誌。
 * 
 * @param bossid 這是一個字符串，表示要重置的獎勵日誌的bossid。
 */
    resetPrizeLog(bossid: string): void;
    /**
 * 
 * @param bossid
 */
    removeAcLog(bossid: string): void;
    /**
 * 
 * @param bossid
 * @param i
 */
    removeAcLog(bossid: string, i: number): void;
    /**
 * 
 * @param bossid
 */
    setAccLog(bossid: string): void;
    /**
 * 
 * @param bossid
 */
    setAcLog(bossid: string): void;
    /**
 * 
 * @param bossid
 */
    resetAcLog(bossid: string): void;
    /**
 * 
 * @param bossid
 * @param t
 */
    addAcLog(bossid: string, t: number): void;
    /**
 * 
 * @param bossid
 * @return
 */
    getAccLog(bossid: string): number;
    /**
 * 
 * @param bossid
 * @return
 */
    getAcLog(bossid: string): number;
    /**
 * 
 * @param bossid
 * @return
 */
    getAcLogReload(bossid: string): number;
    /**
 * 
 * @param dayid
 */
    setDayLog(dayid: string): void;
    /**
 * 
 * @param dayid
 * @return
 */
    getDayLog(dayid: string): number;
    /**
 * 
 * @param dayid
 * @return
 */
    getDayLogReload(dayid: string): number;
    /**
 * 
 * @param type
 * @param message
 */
    dropMessage(type: number, message: string): void;
    /**
 * 
 * @param type
 * @param message
 * @param force
 */
    dropMessage(type: number, message: string, force: boolean): void;
    /**
 * 
 * @param caption
 * @param pink
 * @param msg
 */
    showInfo(caption: string, pink: boolean, msg: string): void;
    /**
 * 
 * @return
 */
    getPlayerShop(): any;
    /**
 * 
 * @param playerShop
 */
    setPlayerShop(playerShop: any): void;
    /**
 * 
 * @return
 */
    getConversation(): number;
    /**
 * 
 * @param inst
 */
    setConversation(inst: number): void;
    /**
 * 
 * @return
 */
    getCarnivalParty(): any;
    /**
 * 
 * @param party
 */
    setCarnivalParty(party: any): void;
    /**
 * 
 * @param ammount
 */
    addCP(ammount: number): void;
    /**
 * 
 * @param ammount
 */
    useCP(ammount: number): void;
    /**
 * 
 * @return
 */
    getAvailableCP(): number;
    /**
 * 
 * @return
 */
    getTotalCP(): number;
    /**
 * 
 */
    resetCP(): void;
    /**
 * 
 * @param name
 * @return
 */
    getIdByName(name: string): number;
    /**
 * 
 * @param request
 */
    addCarnivalRequest(request: any): void;
    /**
 * 
 * @return
 */
    getNextCarnivalRequest(): any;
    /**
 * 
 */
    clearCarnivalRequests(): void;
    /**
 * 
 * @param enemyavailable
 * @param enemytotal
 */
    startMonsterCarnival(enemyavailable: number, enemytotal: number): void;
    /**
 * 
 * @param party
 * @param available
 * @param total
 * @param team
 */
    CPUpdate(party: boolean, available: number, total: number, team: number): void;
    /**
 * 
 * @param name
 * @param lostCP
 * @param team
 */
    playerDiedCPQ(name: string, lostCP: number, team: number): void;
    /**
 * 
 * @param id
 */
    setAchievementFinished(id: number): void;
    /**
 * 
 * @param achievementid
 * @return
 */
    achievementFinished(achievementid: number): boolean;
    /**
 * 
 * @param id
 */
    finishAchievement(id: number): void;
    /**
 * 
 * @return
 */
    getFinishedAchievements(): any;
    /**
 * 
 * @param type
 * @param quantity
 */
    modifyAchievementCSPoints(type: number, quantity: number): void;
    /**
 * 
 * @return
 */
    getCanTalk(): boolean;
    /**
 * 
 * @param talk
 */
    canTalk(talk: boolean): void;
    /**
 * 
 * @return
 */
    isSpeakOutPut(): boolean;
    /**
 * 
 * @param out
 */
    setSpeakOutPut(out: string): void;
    /**
 * 
 * @return
 */
    getSpeakOutPut(): string;
    /**
 * 
 * @return
 */
    getCanTalk_event(): boolean;
    /**
 * 
 * @param talk
 */
    canTalk_event(talk: boolean): void;
    /**
 * 
 * @return
 */
    getEXPMod(): number;
    /**
 * 
 * @return
 */
    getEXPRate(): number;
    /**
 * 
 * @return
 */
    getDropMod(): number;
    /**
 * 
 * @param map
 * @param mob
 * @return
 */
    getAllDropRate(map: MapleMap, mob: any): number;
    getAllDropRate(): number;
    /**
 * 
 * @param map
 * @param mob
 * @param vip
 * @return
 */
    getAllDropRate(map: MapleMap, mob: any, vip: boolean): number;
    /**
 * 
 * @return
 */
    getAllMesoRate(): number;
    /**
 * 
 * @return
 */
    getEquipExpRate(): number;
    /**
 * 
 * @return
 */
    getEquipDamage(): number;
    /**
 * 
 * @return
 */
    getEquipDropRate(): number;
    /**
 * 
 * @return
 */
    getEquipMesoRate(): number;
    /**
 * 
 * @return
 */
    getCanDice(): boolean;
    /**
 * 
 * @param Dice
 */
    setCanDice(Dice: boolean): void;
    /**
 * 
 * @return
 */
    getCanClone(): boolean;
    /**
 * 
 * @param Clone
 */
    setCanClone(Clone: boolean): void;
    /**
 * 
 * @return
 */
    getCashMod(): number;
    /**
 * 
 * @param str
 */
    dropGMMessage(str: string): void;
    /**
 * 
 * @param p
 */
    setPoints(p: number): void;
    /**
 * 
 * @param p
 */
    gainPoints(p: number): void;
    /**
 * 
 * @return
 */
    getPoints(): number;
    /**
 * 
 * @param p
 */
    setVPoints(p: number): void;
    /**
 * 
 * @param p
 */
    gainVPoints(p: number): void;
    /**
 * 
 * @return
 */
    getVPoints(): number;
    /**
 * 
 * @return
 */
    getCashInventory(): any;
    /**
 * 
 * @param id
 */
    removeAll(id: number): void;
    /**
 * 
 * @param id
 * @param show
 */
    removeAll(id: number, show: boolean): void;
    /**
 * 
 * @param id
 * @param show
 * @param equip
 */
    removeAll(id: number, show: boolean, equip: boolean): void;
    /**
 * 
 * @param incluedEquip
 * @return
 */
    getMarriageRing(incluedEquip: boolean): any;
    /**
 * 
 * @param equip
 * @return
 */
    getRings(equip: boolean): any;
    /**
 * 
 * @param equip
 * @return
 */
    getRingsTriple(equip: boolean): any;
    /**
 * 
 * @param exp
 */
    startFairySchedule(exp: boolean): void;
    /**
 * 
 * @param exp
 * @param equipped
 */
    startFairySchedule(exp: boolean, equipped: boolean): void;
    /**
 * 
 * @param exp
 */
    cancelFairySchedule(exp: boolean): void;
    /**
 * 
 * @return
 */
    getFairyExp(): any;
    /**
 * 
 * @return
 */
    getCoconutTeam(): number;
    /**
 * 
 * @param team
 */
    setCoconutTeam(team: number): void;
    /**
 * 
 * @param slot
 */
    spawnPet(slot: any): void;
    /**
 * 
 * @param slot
 * @param lead
 */
    spawnPet(slot: any, lead: boolean): void;
    /**
 * 
 * @param slot
 * @param lead
 * @param broadcast
 */
    spawnPet(slot: any, lead: boolean, broadcast: boolean): void;
    /**
 * 
 * @param mobid
 */
    addMoveMob(mobid: number): void;
    /**
 * 
 * @return
 */
    getMoveMobs(): any;
    /**
 * 
 * @return
 */
    getLinkMid(): number;
    /**
 * 
 * @param lm
 */
    setLinkMid(lm: number): void;
    /**
 * 
 * @return
 */
    isClone(): boolean;
    /**
 * 
 * @param c
 */
    setClone(c: boolean): void;
    /**
 * 
 * @return
 */
    getClones(): any;
    /**
 * 
 * @return
 */
    cloneLooks(): MapleCharacter;
    /**
 * 
 * @param sec
 */
    cloneLook(sec: number): void;
    run(): void;
    /**
 * 
 */
    cloneLook(): void;
    cloneRobotRandom(set: boolean, minlevel: number, maxlevel: number): boolean;
    cloneRobot(map: MapleMap, name: string, sit: boolean, stand: boolean): void;
    cloneRobot(name: string): void;
    cloneRobot(): void;
    isRobot(): boolean;
    /**
 * 
 */
    disposeClones(): void;
    /**
 * 
 * @return
 */
    getCloneSize(): number;
    /**
 * 
 */
    spawnClones(): void;
    /**
 * 
 * @return
 */
    getNumClones(): any;
    /**
 * 
 */
    spawnSavedPets(): void;
    /**
 * 
 * @return
 */
    getPetStores(): any;
    /**
 * 
 * @param str
 * @param dex
 * @param int_
 * @param luk
 */
    resetStats(str: number, dex: number, int_: number, luk: number): void;
    /**
 * 
 * @return
 */
    getPyramidSubway(): any;
    /**
 * 
 * @param ps
 */
    setPyramidSubway(ps: any): void;
    /**
 * 
 * @return
 */
    getSubcategory(): any;
    /**
 * 
 * @param itemid
 * @return
 */
    itemQuantity(itemid: number): number;
    /**
 * 
 * @param itemid
 * @return
 */
    getQuantity(itemid: number): number;
    /**
 * 
 * @param rps
 */
    setRPS(rps: any): void;
    /**
 * 
 * @return
 */
    getRPS(): any;
    /**
 * 
 * @return
 */
    getNextConsume(): number;
    /**
 * 
 * @param nc
 */
    setNextConsume(nc: number): void;
    /**
 * 
 */
    setLifeRandom(): void;
    /**
 * 
 * @return
 */
    getLifeRandom(): number;
    /**
 * 
 * @return
 */
    getRank(): number;
    /**
 * 
 * @return
 */
    getRankMove(): number;
    /**
 * 
 * @return
 */
    getJobRank(): number;
    /**
 * 
 * @return
 */
    getJobRankMove(): number;
    /**
 * 
 * @param channel
 */
    ForcechangeChannel(channel: number): void;
    /**
 * 
 * @param channel
 */
    changeChannel2(channel: number): void;
    /**
 * 
 * @return
 */
    inCS(): boolean;
    /**
 * 
 * @param channel
 */
    changeChannel(channel: number): void;
    /**
 * 
 * @param type
 * @param amount
 */
    expandInventory(type: any, amount: number): void;
    /**
 * 
 * @param other
 * @return
 */
    allowedToTarget(other: MapleCharacter): boolean;
    /**
 * 
 * @return
 */
    getFollowId(): number;
    /**
 * 
 * @param fi
 */
    setFollowId(fi: number): void;
    /**
 * 
 * @param fi
 */
    setFollowInitiator(fi: boolean): void;
    /**
 * 
 * @param fi
 */
    setFollowOn(fi: boolean): void;
    /**
 * 
 * @return
 */
    isFollowOn(): boolean;
    /**
 * 
 * @return
 */
    isFollowInitiator(): boolean;
    /**
 * 
 */
    checkFollow(): void;
    /**
 * 
 * @return
 */
    getMarriageId(): number;
    /**
 * 
 * @param mi
 */
    setMarriageId(mi: number): void;
    /**
 * 
 * @return
 */
    getMarriageItemId(): number;
    /**
 * 
 * @param mi
 */
    setMarriageItemId(mi: number): void;
    /**
 * 
 * @return
 */
    isStaff(): boolean;
    /**
 * 
 */
    updateAllStats(): void;
    /**
 * 
 * @param questid
 * @return
 */
    startPartyQuest(questid: number): boolean;
    /**
 * 
 * @param questid
 * @param key
 * @return
 */
    getOneInfo(questid: number, key: string): string;
    /**
 * 
 * @param questid
 * @param key
 * @param value
 */
    updateOneInfo(questid: number, key: string, value: string): void;
    /**
 * 
 * @param questid
 */
    recalcPartyQuestRank(questid: number): void;
    /**
 * 
 * @param questid
 */
    tryPartyQuest(questid: number): void;
    /**
 * 
 * @param questid
 */
    endPartyQuest(questid: number): void;
    /**
 * 
 * @param itemId
 */
    havePartyQuest(itemId: number): void;
    /**
 * 
 * @param beginnerJob
 */
    resetStatsByJob(beginnerJob: boolean): void;
    /**
 * 
 * @return
 */
    hasSummon(): boolean;
    /**
 * 
 * @param summ
 */
    setHasSummon(summ: boolean): void;
    /**
 * 
 */
    removeDoor(): void;
    /**
 * 
 */
    changeRemoval(): void;
    /**
 * 
 * @param dc
 */
    changeRemoval(dc: boolean): void;
    /**
 * 
 * @param newTick
 */
    updateTick(newTick: number): void;
    /**
 * 
 * @param buff
 * @return
 */
    canUseFamilyBuff(buff: any): boolean;
    /**
 * 
 * @param buff
 */
    useFamilyBuff(buff: any): void;
    /**
 * 
 * @return
 */
    usedBuffs(): any;
    /**
 * 
 * @return
 */
    getTeleportName(): string;
    /**
 * 
 * @param tname
 */
    setTeleportName(tname: string): void;
    /**
 * 
 * @return
 */
    getNoJuniors(): number;
    /**
 * 
 * @return
 */
    getMFC(): any;
    /**
 * 
 * @param familyid
 * @param seniorid
 * @param junior1
 * @param junior2
 */
    makeMFC(familyid: number, seniorid: number, junior1: number, junior2: number): void;
    /**
 * 
 * @param newf
 * @param news
 * @param newj1
 * @param newj2
 */
    setFamily(newf: number, news: number, newj1: number, newj2: number): void;
    /**
 * 
 * @param skillid
 * @return
 */
    maxBattleshipHP(skillid: number): number;
    /**
 * 
 * @return
 */
    getCurrentBattleshipHP(): number;
    /**
 * 
 * @return
 */
    getGachExp(): number;
    /**
 * 
 * @param ge
 */
    setGachExp(ge: number): void;
    /**
 * 
 * @param msg
 */
    sendEnglishQuiz(msg: string): void;
    /**
 * 
 */
    fakeRelog(): void;
    /**
 * 
 */
    renewGuildMsg(): void;
    /**
 * 
 * @param mapid
 */
    MapReload(mapid: number): void;
    /**
 * 
 * @return
 */
    canSummon(): boolean;
    /**
 * 
 * @param g
 * @return
 */
    canSummon(g: number): boolean;
    /**
 * 
 * @return
 */
    getcharmessage(): string;
    /**
 * 
 * @param s
 */
    setcharmessage(s: string): void;
    /**
 * 
 * @return
 */
    getexpression(): number;
    /**
 * 
 * @param s
 */
    setexpression(s: number): void;
    /**
 * 
 * @return
 */
    getconstellation(): number;
    /**
 * 
 * @param s
 */
    setconstellation(s: number): void;
    /**
 * 
 * @return
 */
    getblood(): number;
    /**
 * 
 * @param s
 */
    setblood(s: number): void;
    /**
 * 
 * @return
 */
    getmonth(): number;
    /**
 * 
 * @param s
 */
    setmonth(s: number): void;
    /**
 * 
 * @return
 */
    getday(): number;
    /**
 * 
 * @param s
 */
    setday(s: number): void;
    /**
 * 
 * @return
 */
    getTeam(): number;
    /**
 * 
 * @return
 */
    canGainBeansReward(): boolean;
    /**
 * 
 * @return
 */
    getBeans(): number;
    /**
 * 
 * @param b
 */
    gainBeans(b: number): void;
    /**
 * 
 * @param m
 */
    setBeans(m: number): void;
    /**
 * 
 */
    updateBeans(): void;
    /**
 * 
 * @return
 */
    getBeansStage(): number;
    /**
 * 
 * @param m
 */
    setBeansStage(m: number): void;
    /**
 * 
 * @return
 */
    getBeansTime(): number;
    /**
 * 
 * @param m
 */
    setBeansTime(m: number): void;
    /**
 * 
 * @return
 */
    getBeansLight(): number;
    /**
 * 
 * @param m
 */
    setBeansLight(m: number): void;
    /**
 * 
 */
    addBeansLight(): void;
    /**
 * 
 * @return
 */
    getBeanConsume(): number;
    /**
 * 
 * @param m
 */
    setBeanConsume(m: number): void;
    /**
 * 
 * @return
 */
    getBeanResult(): boolean;
    /**
 * 
 * @param m
 */
    setBeanResult(m: boolean): void;
    /**
 * 
 */
    addBeanConsume(): void;
    /**
 * 
 * @param s
 */
    gainBeanConsume(s: number): void;
    /**
 * 
 * @return
 */
    CanUseBeans(): boolean;
    /**
 * 
 * @param s
 */
    setBeansStatus(s: boolean): void;
    /**
 * 
 * @param s
 */
    handlemessage(s: string): void;
    /**
 * 
 */
    resetBeans(): void;
    /**
 * 
 * @return the canSetBeansNum
 */
    isCanSetBeansNum(): boolean;
    /**
 * 
 * @param canSetBeansNum the canSetBeansNum to set
 */
    setCanSetBeansNum(canSetBeansNum: boolean): void;
    /**
 * 
 * @return
 */
    haveGM(): boolean;
    /**
 * 
 * @param prefix
 */
    setprefix(prefix: string): void;
    /**
 * 
 * @return
 */
    getPrefix(): string;
    /**
 * 
 * @param code
 * @param amount
 */
    gainItem(code: number, amount: number): void;
    gainItem(code: number, amount: number, owner: string): void;
    /**
 * 
 * @param code
 * @param amount mv
 * @param owner
 */
    gainItem(code: number, amount: number, owner: string, period: number): void;
    /**
 * 
 * @param code
 */
    gainItem(code: number): void;
    /**
 * 
 * @param id
 */
    giftMedal(id: number): void;
    /**
 * 
 * @param msg
 * @param width
 * @param height
 */
    showInstruction(msg: string, width: number, height: number): void;
    /**
 * 
 * @return
 */
    isVip(): boolean;
    /**
 * 
 * @return
 */
    getVip(): number;
    /**
 * 
 * @param x
 */
    setVip(x: number): void;
    /**
 * 
 * @return
 */
    getVipName(): string;
    /**
 * 
 * @return
 */
    getNick(): string;
    /**
 * 
 * @return
 */
    getVipMedal(): boolean;
    /**
 * 
 * @param x
 */
    setVipMedal(x: boolean): void;
    /**
 * 
 * @return
 */
    getVipExpRate(): number;
    /**
 * 
 * @return
 */
    getVipDropRate(): number;
    /**
 * 
 * @param control
 */
    setmsg_HiredMerchant(control: boolean): void;
    /**
 * 
 * @param control
 */
    setmsg_MobVac(control: boolean): void;
    /**
 * 
 * @return
 */
    getmsg_HiredMerchant(): boolean;
    /**
 * 
 * @return
 */
    getmsg_MobVac(): boolean;
    /**
 * 
 * @return
 */
    getCheckedPyramid(): boolean;
    /**
 * 
 * @param x
 */
    setCheckedPyramid(x: boolean): void;
    /**
 * 
 * @return
 */
    getCheckedAmulet(): boolean;
    /**
 * 
 * @param x
 */
    setCheckedAmulet(x: boolean): void;
    /**
 * 
 * @return
 */
    getCheckedEffectAmulet(): boolean;
    /**
 * 
 * @param x
 */
    setCheckedEffectAmulet(x: boolean): void;
    /**
 * 
 * @return
 */
    getcheck_FishingVip(): boolean;
    /**
 * 
 * @param x
 */
    setcheck_FishingVip(x: boolean): void;
    /**
 * 
 * @return
 */
    getDiseaseSize(): number;
    /**
 * 
 * @return
 */
    getMSG(): number;
    /**
 * 
 * @param x
 */
    setMSG(x: number): void;
    /**
 * 
 */
    addMSG(): void;
    /**
 * 
 */
    fly(): void;
    /**
 * 
 * @return
 */
    isGuildPvPMap(): boolean;
    /**
 * 
 * @return
 */
    canStorage(): boolean;
    /**
 * 
 * @return
 */
    canHP(): boolean;
    /**
 * 
 * @return
 */
    canTrade(): boolean;
    /**
 * 
 * @return
 */
    canMP(): boolean;
    /**
 * 
 * @return
 */
    canMPSkill(): boolean;
    /**
 * 
 * @return
 */
    hasChallageJP(): boolean;
    /**
 * 
 */
    cancelChallageJP(): void;
    /**
 * 
 * @return
 */
    canChallageJP(): boolean;
    /**
 * 
 */
    addMobVac(): void;
    /**
 * 
 * @return
 */
    getMobVac(): number;
    /**
 * 
 */
    addMobVac_X(): void;
    /**
 * 
 * @return
 */
    getMobVac_X(): number;
    /**
 * 
 * @param skill
 * @return
 */
    CountAranCombo(skill: number): number;
    /**
 * 
 * @return
 */
    getAcash(): number;
    /**
 * 
 * @param chr
 * @return
 */
    getAcash(chr: MapleCharacter): number;
    /**
 * 
 * @param x
 */
    setAcash(x: number): void;
    /**
 * 
 * @param control
 */
    setDebugMessage(control: boolean): void;
    /**
 * 
 * @return
 */
    getDebugMessage(): boolean;
    /**
 * 
 * @param x
 */
    setWalkDebugMessage(x: boolean): void;
    /**
 * 
 * @return
 */
    getWalkDebugMessage(): boolean;
    /**
 * 
 * @param x
 */
    setAttackDebugMessage(x: boolean): void;
    /**
 * 
 * @return
 */
    getAttackDebugMessage(): boolean;
    /**
 * 
 */
    RemoveHired(): void;
    /**
 * 
 */
    maxSkillsByJob(): void;
    /**
 * 
 */
    maxSkillsByJob2(): void;
    /**
 * 
 */
    maxSkillsByJob3(): void;
    /**
 * 
 */
    maxSkillsByJob4(): void;
    /**
 * 
 */
    maxSkillsByJob5(): void;
    /**
 * 
 */
    maxMasterSkills(): void;
    /**
 * 
 * @param max
 */
    maxMasterSkills(max: number): void;
    /**
 * 
 */
    maxMasterSkills2(): void;
    /**
 * 
 */
    maxSkills(): void;
    /**
 * 
 */
    clearSkills(withoutprofess: boolean): void;
    clearSkills(): void;
    /**
 * 
 * @param victim
 */
    addSameSkill(victim: MapleCharacter): void;
    /**
 * 
 * @return
 */
    getStr(): number;
    /**
 * 
 * @return
 */
    getInt(): number;
    /**
 * 
 * @return
 */
    getLuk(): number;
    /**
 * 
 * @return
 */
    getDex(): number;
    /**
 * 
 * @return
 */
    getHp(): number;
    /**
 * 
 * @return
 */
    getMp(): number;
    /**
 * 
 * @return
 */
    getMaxHp(): number;
    /**
 * 
 * @return
 */
    getPvpMaxHp(): number;
    /**
 * 
 * @return
 */
    getMaxMp(): number;
    /**
 * 
 * @param amount
 */
    setHp(amount: number): void;
    /**
 * 
 * @param set
 */
    setHp_Force(set: number): void;
    /**
 * 
 * @param amount
 */
    setMp(amount: number): void;
    /**
 * 
 * @param set
 */
    setMp_Force(set: number): void;
    /**
 * 
 * @param amount
 */
    setMaxHp(amount: number): void;
    /**
 * 
 * @param set
 */
    setMaxHp_Force(set: number): void;
    /**
 * 
 * @param amount
 */
    setMaxMp(amount: number): void;
    /**
 * 
 * @param set
 */
    setMaxMp_Force(set: number): void;
    /**
 * 
 * @param str
 */
    setStr(str: number): void;
    /**
 * 
 * @param set
 */
    setStr_Force(set: number): void;
    /**
 * 
 * @param luk
 */
    setLuk(luk: number): void;
    /**
 * 
 * @param set
 */
    setLuk_Force(set: number): void;
    /**
 * 
 * @param dex
 */
    setDex(dex: number): void;
    /**
 * 
 * @param set
 */
    setDex_Force(set: number): void;
    /**
 * 
 * @param int_
 */
    setInt(int_: number): void;
    /**
 * 
 * @param set
 */
    setInt_Force(set: number): void;
    /**
 * 
 * @param mesos
 */
    setMeso(mesos: number): void;
    /**
 * 
 * @param set
 */
    setMeso_Force(set: number): void;
    /**
 * 
 */
    updateFame(): void;
    /**
 * 
 * @return
 */
    inBossMap(): boolean;
    /**
 * 
 * @return
 */
    inMapleLand(): boolean;
    /**
 * 
 * @param ip
 * @return
 */
    isVpn(ip: string): boolean;
    /**
 * 
 * @return
 */
    isCygnus(): boolean;
    /**
 * 
 * @return
 */
    isKOC(): boolean;
    /**
 * 
 * @return
 */
    isAdventurer(): boolean;
    /**
 * 
 * @return
 */
    isAran(): boolean;
    /**
 * 
 * @return
 */
    isEvan(): boolean;
    /**
 * 
 * @return
 */
    isPirate(): boolean;
    /**
 * 
 * @return
 */
    isThief(): boolean;
    /**
 * 
 * @return
 */
    isBowman(): boolean;
    /**
 * 
 * @return
 */
    isMage(): boolean;
    /**
 * 
 * @return
 */
    isWarrior(): boolean;
    /**
 * 
 * @return
 */
    isGod(): boolean;
    /**
 * 
 * @return
 */
    isHiddenChatCanSee(): boolean;
    /**
 * 
 * @param can
 */
    setHiddenChatCanSee(can: boolean): void;
    /**
 * 
 * @param id
 * @return
 */
    getCharacterNameById(id: number): string;
    /**
 * 
 * @param id
 * @return
 */
    getCharacterNameById2(id: number): string;
    /**
 * 
 * @param name
 * @return
 */
    getCharacterIdByName(name: string): number;
    /**
 * 
 * @return
 */
    getCharacterIdRandom(): number;
    /**
 * 
 * @return
 */
    getCharacterId(minlevel: number, maxlevel: number): number;
    /**
 * 
 * @param name
 * @return
 */
    getCharacterIdByName2(name: string): number;
    /**
 * 
 * @param cid
 * @return
 */
    getOnlineCharacterById(cid: number): MapleCharacter;
    /**
 * 
 * @param cid
 * @return
 */
    getAllOnlineCharacterById(cid: number): MapleCharacter;
    /**
 * 
 * @param name
 * @return
 */
    getOnlineCharacterByName(name: string): MapleCharacter;
    getCharacterById(cid: number): MapleCharacter;
    /**
 * 
 * @param cid
 * @return
 */
    getCharacterById(cid: number, setplayer: boolean, robot: boolean): MapleCharacter;
    getCharacterById(setplayer: boolean, robot: boolean, minlevel: number, maxlevel: number): MapleCharacter;
    getCharacterByIdRand(setplayer: boolean, robot: boolean): MapleCharacter;
    /**
 * 
 * @param name
 * @return
 */
    getCharacterByName(name: string): MapleCharacter;
    getCharacterByName(name: string, pass: boolean): MapleCharacter;
    /**
 * 
 * @param name
 * @param pass
 * @return
 */
    getCharacterByName(name: string, pass: boolean, setplayer: boolean, robot: boolean): MapleCharacter;
    /**
 * 
 * @param GiveList
 * @param showMessage
 */
    setMP(GiveList: any, showMessage: boolean): void;
    /**
 * 
 * @param id
 */
    setPortalNow(id: number): void;
    /**
 * 
 * @return
 */
    getPortalNow(): number;
    /**
 * 
 * @param id
 */
    setReactorNow(id: number): void;
    /**
 * 
 * @return
 */
    getReactorNow(): number;
    /**
 * 
 * @param id
 */
    setReactor(id: any): void;
    /**
 * 
 * @return
 */
    getReactor(): any;
    /**
 * 
 * @param id
 */
    setNpcNow(id: number): void;
    /**
 * 
 * @return
 */
    getNpcNow(): number;
    /**
 * 
 * @param npcScript
 */
    setNpcScript(npcScript: string): void;
    /**
 * 
 * @return
 */
    getNpcScript(): string;
    /**
 * 
 * @param x
 */
    setMP(x: number): void;
    /**
 * 
 * @return
 */
    getMP(): number;
    /**
 * 當玩家死亡、正在交易、開起特殊NPC(倉庫、富蘭德里)、個人商店
 * 
 * @param dead 是否檢測死亡狀態
 * @return
 */
    hasBlockedInventory(dead: boolean): boolean;
    /**
 * 
 * @return
 */
    getNowMacs(): string;
    /**
 * 
 * @param type
 * @return
 */
    getShow(type: number): boolean;
    /**
 * 
 * @param type
 */
    changeShow(type: number): void;
    /**
 * 
 * @return
 */
    addAntiMacroFailureTimes(): number;
    /**
 * 
 * @param times
 */
    setAntiMacroFailureTimes(times: number): void;
    /**
 * 
 * @return
 */
    getAntiMacroFailureTimes(): number;
    /**
 * 
 * @return
 */
    getAllFaces(): any;
    /**
 * 
 * @param sel
 * @param id
 */
    addSavedFaces(sel: number, id: number): void;
    /**
 * 
 * @param sel
 * @return
 */
    getSavedFaces(sel: number): number;
    /**
 * 
 * @return
 */
    getAllHairs(): any;
    /**
 * 
 * @param sel
 * @param id
 */
    addSavedHairs(sel: number, id: number): void;
    /**
 * 
 * @param sel
 * @return
 */
    getSavedHairs(sel: number): number;
    /**
 * 
 * @param set
 */
    updateWarpingMap(set: boolean): void;
    /**
 * 
 * @return
 */
    checkWarpingMap(): boolean;
    /**
 * 
 * @param set
 */
    updateUsingPortal(set: boolean): void;
    /**
 * 
 * @return
 */
    checkUsingPortal(): boolean;
    /**
 * 
 * @param set
 */
    updateUsingMoveSkill(set: boolean): void;
    /**
 * 
 * @return
 */
    checkUsingMoveskillTime(): boolean;
    /**
 * 
 * @param delay
 * @param set
 */
    updateUsingMoveSkill_sp(delay: number, set: boolean): void;
    /**
 * 
 * @return
 */
    getLastAddMoveTime(): number;
    /**
 * 
 */
    reduceMove(): void;
    /**
 * 
 */
    addMove(): void;
    /**
 * 
 */
    clearAddMove(): void;
    /**
 * 
 * @return
 */
    getAddMove(): number;
    /**
 * 
 * @return
 */
    getSkillWorkings(): any;
    /**
 * 
 * @param SkillID
 */
    removeSkillWorking(SkillID: number): void;
    /**
 * 
 * @param SkillID
 * @param SkillTime
 */
    setSkillWorking(SkillID: number, SkillTime: number): void;
    /**
 * 
 * @param SkillID
 * @return
 */
    isSkillWorking(SkillID: number): boolean;
    /**
 * 
 * @param SkillID
 * @return
 */
    getSkillWorking(SkillID: number): number;
    /**
 * 
 * @param monsterlevel
 */
    addMobCount(monsterlevel: number): void;
    /**
 * 
 * @return
 */
    getMobCount(): number;
    /**
 * 
 * @return
 */
    getMobCountAcc(): number;
    /**
 * 
 * @param forceshow
 */
    showKillMobCount(forceshow: boolean): void;
    /**
 * 
 */
    handleMonsterEffectCard(): void;
    /**
 * 
 * @return
 */
    getPee(): number;
    /**
 * 
 */
    resetPee(): void;
    /**
 * 
 * @param pee
 */
    setPee(pee: number): void;
    /**
 * 
 */
    peeEffects(): void;
    /**
 * 
 */
    pooEffects(): void;
    /**
 * 
 * @param questID
 * @return
 */
    getIntNoRecord(questID: number): number;
    /**
 * 
 * @param questID
 * @return
 */
    getIntRecord(questID: number): number;
    /**
 * 
 * @return
 */
    getMountId(): number;
    /**
 * 
 * @param id
 */
    setMountId(id: number): void;
    /**
 * 
 * @return
 */
    getFlyChairId(): number;
    /**
 * 
 * @param id
 */
    setFlyChairId(id: number): void;
    /**
 * 
 * @param HairId
 */
    setHairAlbum(HairId: number): void;
    /**
 * 
 * @param FaceId
 */
    setFaceAlbum(FaceId: number): void;
    /**
 * 
 * @return
 */
    getExcludeItem(): any;
    /**
 * 
 * @param itemid
 * @return
 */
    isExcludeItem(itemid: number): boolean;
    /**
 * 
 * @return
 */
    getExcludeItems(): any;
    /**
 * 將指定的道具 ID 添加到排除道具列表中。
 * 
 * @param itemid 要排除的道具 ID。
 */
    setExcludeItem(itemid: number): void;
    /**
 * 從排除道具列表中刪除指定的道具 ID。
 * 
 * @param itemId 要刪除的道具 ID。
 */
    DeleteExcludeItem(itemId: number): void;
    /**
 * 刪除所有排除道具，並保留其他角色設置。
 */
    DeleteAllExcludeItem(): void;
    /**
 * 從頭髮相冊中刪除指定的頭髮 ID。
 * 
 * @param HairId 要刪除的頭髮 ID。
 */
    DeleteHairAlbum(HairId: number): void;
    /**
 * 從臉部相冊中刪除指定的臉部 ID。
 * 
 * @param FaceId 要刪除的臉部 ID。
 */
    DeleteFaceAlbum(FaceId: number): void;
    /**
 * 設置角色的頭髮相冊。
 * 
 * @param HairAlbum 要設置的頭髮相冊數組。
 */
    setHairAlbum(HairAlbum: any): void;
    /**
 * 設置角色的臉部相冊。
 * 
 * @param FaceAlbum 要設置的臉部相冊數組。
 */
    setFaceAlbum(FaceAlbum: any): void;
    /**
 * 獲取頭髮相冊中已經收集的頭髮圖片編號列表。
 * 
 * @return 頭髮相冊中已經收集的頭髮圖片編號列表。
 */
    getHairAlbum(): any;
    /**
 * 獲取臉部相冊中已經收集的臉部圖片編號列表。
 * 
 * @return 臉部相冊中已經收集的臉部圖片編號列表。
 */
    getFaceAlbum(): any;
    /**
 * 將頭髮相冊中已經收集的頭髮圖片編號轉換為整數數組。
 * 
 * @return 頭髮相冊中已經收集的頭髮圖片編號數組。
 */
    getHairAlbums(): any;
    /**
 * 將臉部相冊中已經收集的臉部圖片編號轉換為整數數組。
 * 
 * @return 臉部相冊中已經收集的臉部圖片編號數組。
 */
    getFaceAlbums(): any;
    /**
 * 獲取角色已經收集的頭髮相冊數組。
 * 
 * @return 頭髮相冊數組。
 */
    GetHairAlbum(): any;
    /**
 * 獲取角色已經收集的排除道具數組。
 * 
 * @return 排除道具數組。
 */
    GetExcludeItem(): any;
    /**
 * 獲取角色已經收集的臉部相冊數組。
 * 
 * @return 臉部相冊數組。
 */
    GetFaceAlbum(): any;
    getTouzhuNX(): number;
    setTouzhuNX(touzhuNX: number): void;
    getTouzhuNum(): number;
    setTouzhuNum(touzhuNum: number): void;
    getTouzhuType(): number;
    setTouzhuType(touzhuType: number): void;
    getTouzhuPointType(): number;
    setTouzhuPointType(touzhuPointType: number): void;
    /**
 * 設置角色是否正在進行存儲操作。
 * 
 * @param set 設置為true表示正在進行存儲操作，否則為false。
 */
    setOperateStorage(set: boolean): void;
    /**
 * 設置角色是否正在進行存儲操作（超過限制）。
 * 
 * @param set 要設置的存儲類型。
 */
    setOperateStorageExceed(set: any): void;
    /**
 * 獲取角色正在進行的存儲操作類型（超過限制）。
 * 
 * @return 正在進行的存儲操作類型。
 */
    getOperateStorageExceed(): any;
    /**
 * 檢查角色是否正在進行存儲操作。
 * 
 * @return 如果正在進行存儲操作則返回true，否則返回false。
 */
    isOperateStorage(): boolean;
    /**
 * 設置角色是否被邀請進行交易。
 * 
 * @param set 設置為true表示被邀請進行交易，否則為false。
 */
    setInvited(set: boolean): void;
    /**
 * 檢查角色是否被邀請進行交易。
 * 
 * @return 如果被邀請進行交易則返回true，否則返回false。
 */
    isInvited(): boolean;
    /**
 * 檢查角色是否正在進行交易。
 * 
 * @return 如果正在進行交易則返回true，否則返回false。
 */
    istrading(): boolean;
    /**
 * 設置角色是否正在進行交易。
 * 
 * @param set 設置為true表示正在進行交易，否則為false。
 */
    settrading(set: boolean): void;
    getMobDirection(): number;
    addMobDirection(distance: number): void;
    resetMobDirection(): void;
    CompensateSP(): void;
    LevelupGiveSP(): void;
    LevelupGiveEvan_ExtraSP(): void;
    /**
 * 如果角色有開啟除錯訊息，則將訊息顯示在聊天框中。
 * 
 * @param msg 要顯示的訊息。
 */
    dropDebugMessage(msg: string): void;
    /**
 * 獲取被監控的帳號清單。
 * 
 * @return 包含被監控帳號名稱和其對應ID的Map。
 */
    getMonitored(): any;
    /**
 * 根據帳號ID載入角色名稱。
 * 
 * @param accId 帳號ID。
 * @return 包含角色名稱和其對應ID的Map。
 */
    loadCharacterNamesByAccId(accId: number): any;
    getSetuplist(): number;
    getAntiKS(): boolean;
    setAntiKS(b: boolean): void;
    getNumAntiKSMonsters(): any;
    incAntiKSNum(): void;
    decAntiKSNum(): void;
    /**
 * 設置玩家的PVP方向。
 * 
 * @param value 設置的PVP方向值。
 */
    setPVPDirection(value: number): void;
    /**
 * 獲取玩家的PVP方向。
 * 
 * @return 玩家的PVP方向值。
 */
    getPVPDirection(): number;
    /**
 * 檢查玩家是否面向左方。
 * 
 * @return 如果PVP方向值大於等於0，則返回true。
 */
    isLeft(): boolean;
    /**
 * 檢查玩家是否面向右方。
 * 
 * @return 如果PVP方向值小於等於0，則返回true。
 */
    isRight(): boolean;
    /**
 * 設置玩家的方向值。
 * 
 * @param value 設置的方向值。
 */
    setDirection(value: number): void;
    /**
 * 獲取玩家的方向值。
 * 
 * @return 玩家的方向值。
 */
    getDirection(): number;
    /**
 * 創建玩家的龍寵。
 */
    makeDragon(): void;
    /**
 * 摧毀玩家的龍寵。
 */
    destroyDragon(): void;
    /**
 * 獲取玩家的龍寵（MapleDragon）。
 * 
 * @return 玩家的龍寵對象。
 */
    getDragon(): any;
    /**
 * 處理每月的重置。 更新玩家的一些狀態，如任意門使用次數，最後上線月份等。
 */
    handleResetMonth(): void;
    /**
 * 處理每天的重置。 更新玩家的每日狀態，如活躍度、消費點數、獲得點數等。
 */
    handleResetDay(): void;
    /**
 * 更新玩家的在線秒數。
 */
    renewOnlineSecond(): void;
    /**
 * 增加玩家的在線秒數。
 * 
 * @param sec 增加的秒數。
 */
    addOnlineSecond(sec: number): void;
    /**
 * 獲取玩家的總在線秒數。
 * 
 * @return 總在線秒數。
 */
    getOnlineSecond(): number;
    /**
 * 設定玩家的最後上線周。
 * 
 * @param d 新的最後上線周。
 */
    setLastMonth(d: number): void;
    /**
 * 獲取玩家的最後上線周。
 * 
 * @return 最後上線周。
 */
    getLastMonth(): number;
    /**
 * 設定玩家的最後上線日期。
 * 
 * @param d 新的最後上線日期。
 */
    setLastDay(d: number): void;
    /**
 * 獲取玩家的最後上線日期。
 * 
 * @return 最後上線日期。
 */
    getLastDay(): number;
    /**
 * 設定帳號最後上線的日期。
 * 
 * @param d 最後上線的日期。
 */
    setLastDayAcc(d: number): void;
    /**
 * 獲取帳號最後上線的日期。
 * 
 * @return 最後上線的日期。
 */
    getLastDayAcc(): number;
    /**
 * 獲取今日的總在線時間（分鐘）。
 * 
 * @return 今日的總在線時間（分鐘）。
 */
    getOnlineTime(): number;
    /**
 * 獲取最後上線的小時。
 * 
 * @return 最後上線的小時。
 */
    getLastHour(): number;
    /**
 * 設定最後上線的小時。
 * 
 * @param set 新的最後上線小時。
 */
    setLastHour(set: number): void;
    /**
 * 重置今日的在線分鐘數。
 */
    resetMinute(): void;
    /**
 * 獲取今日的在線分鐘數。
 * 
 * @return 今日的在線分鐘數。
 */
    getOnlineMins(): number;
    /**
 * 增加今日的在線分鐘數。
 * 
 * @param add 要增加的分鐘數。
 */
    addOnlineMins(add: number): void;
    /**
 * 增加今日的花費楓幣數量。
 * 
 * @param add 要增加的楓幣數量。
 */
    addSpendMeso(add: number): void;
    /**
 * 獲取今日的花費楓幣數量。
 * 
 * @return 今日的花費楓幣數量。
 */
    getSpendMeso(): number;
    /**
 * 設定今日的花費楓幣數量。
 * 
 * @param set 新的今日花費楓幣數量。
 */
    setSpendMeso(set: number): void;
    /**
 * 增加今日的花費贊助數量。
 * 
 * @param add 要增加的楓幣數量。
 */
    addSpendDonatePoint(add: number): void;
    /**
 * 獲取今日的花費贊助數量。
 * 
 * @return 今日的獲得楓幣數量。
 */
    getSpendDonatePoint(): number;
    /**
 * 增加今日的獲得楓幣數量。
 * 
 * @param add 要增加的楓幣數量。
 */
    addEarnMeso(add: number): void;
    /**
 * 獲取今日的獲得楓幣數量。
 * 
 * @return 今日的獲得楓幣數量。
 */
    getEarnMeso(): number;
    /**
 * 設定今日的獲得楓幣數量。
 * 
 * @param set 新的今日獲得楓幣數量。
 */
    setEarnMeso(set: number): void;
    /**
 * 增加今日的獲得楓點數量。
 * 
 * @param add 要增加的楓點數量。
 */
    addEarnMaplePoint(add: number): void;
    /**
 * 獲取今日已獲得的楓點數量。
 * 
 * @return 今日獲得楓點的數量。
 */
    getEarnMaplePoint(): number;
    /**
 * 設定今日已獲得的楓點數量。
 * 
 * @param set 新的今日獲得楓點數量。
 */
    setEarnMaplePoint(set: number): void;
    /**
 * 增加今日花費楓點的數量。
 * 
 * @param add 要增加的數量。
 */
    addSpendMaplePoint(add: number): void;
    /**
 * 獲取今日花費楓點的數量。
 * 
 * @return 今日花費楓點的數量。
 */
    getSpendMaplePoint(): number;
    /**
 * 設定今日花費楓點的數量。
 * 
 * @param set 新的今日花費楓點數量。
 */
    setSpendMaplePoint(set: number): void;
    /**
 * 增加特定卷軸的使用次數。
 * 
 * @param id 卷軸的ID。
 */
    addScrollUse(id: number): void;
    /**
 * 獲取特定卷軸的使用次數。
 * 
 * @param id 卷軸的ID。
 * @return 特定卷軸的使用次數。
 */
    getScrollUse(id: number): number;
    /**
 * 增加使用奇幻方塊的次數。
 * 
 * @param add 要增加的次數。
 */
    addUseCube(add: number): void;
    /**
 * 獲取使用奇幻方塊的次數。
 * 
 * @return 使用奇幻方塊的次數。
 */
    getUseCube(): number;
    /**
 * 設定使用奇幻方塊的次數。
 * 
 * @param set 新的使用奇幻方塊次數。
 */
    setUseCube(set: number): void;
    /**
 * 增加今日獲得的Gash數量。
 * 
 * @param add 要增加的數量。
 */
    addEarnGash(add: number): void;
    /**
 * 獲取今日已獲得的Gash數量。
 * 
 * @return 今日獲得Gash的數量。
 */
    getEarnGash(): number;
    /**
 * 設定今日已獲得的Gash數量。
 * 
 * @param set 新的今日獲得Gash數量。
 */
    setEarnGash(set: number): void;
    /**
 * 增加今日使用超級廣播的次數。
 * 
 * @param add 要增加的次數。
 */
    addUseMega(add: number): void;
    /**
 * 獲取今日使用超級廣播的次數。
 * 
 * @return 今日使用超級廣播的次數。
 */
    getUseMega(): number;
    /**
 * 設定今日使用超級廣播的次數。
 * 
 * @param set 新的今日使用超級廣播次數。
 */
    setUseMega(set: number): void;
    /**
 * 增加今日獲得名聲的數量。
 * 
 * @param add 要增加的數量。
 */
    addGainFame(add: number): void;
    /**
 * 獲取今日獲得名聲的數量。
 * 
 * @return 今日獲得名聲的數量。
 */
    getGainFame(): number;
    /**
 * 設定今日獲得名聲的數量。
 * 
 * @param set 新的今日獲得名聲數量。
 */
    setGainFame(set: number): void;
    /**
 * 增加今日給予名聲的數量。
 * 
 * @param add 要增加的數量。
 */
    addGiveFame(add: number): void;
    /**
 * 獲取今日給予名聲的數量。
 * 
 * @return 今日給予名聲的數量。
 */
    getGiveFame(): number;
    /**
 * 設定今日給予名聲的數量。
 * 
 * @param set 新的今日給予名聲數量。
 */
    setGiveFame(set: number): void;
    /**
 * 增加今日花費Gash的數量。
 * 
 * @param add 要增加的數量。
 */
    addSpendGash(add: number): void;
    /**
 * 獲取今日已花費Gash的數量。
 * 
 * @return 今日花費Gash的數量。
 */
    getSpendGash(): number;
    /**
 * 設定今日花費Gash的數量。
 * 
 * @param set 新的今日花費Gash數量。
 */
    setSpendGash(set: number): void;
    /**
 * 增加今日獲得紅利的數量。
 * 
 * @param add 要增加的數量。
 */
    addEarnPoint(add: number): void;
    /**
 * 獲取今日獲得紅利的數量。
 * 
 * @return 今日獲得紅利的數量。
 */
    getEarnPoint(): number;
    /**
 * 設定今日獲得紅利的數量。
 * 
 * @param set 新的今日獲得紅利數量。
 */
    setEarnPoint(set: number): void;
    /**
 * 增加今日花費紅利的數量。
 * 
 * @param add 要增加的數量。
 */
    addSpendPoint(add: number): void;
    /**
 * 獲取今日花費紅利的數量。
 * 
 * @return 今日花費紅利的數量。
 */
    getSpendPoint(): number;
    /**
 * 設定今日花費紅利的數量。
 * 
 * @param set 新的今日花費紅利數量。
 */
    setSpendPoint(set: number): void;
    /**
 * 增加在線總分鐘數。
 * 
 * @param add 要增加的分鐘數。
 */
    addOnlineTotalMins(add: number): void;
    /**
 * 獲取在線總分鐘數。
 * 
 * @return 在線總分鐘數。
 */
    getOnlineTotalMins(): number;
    addVipFromMeso(): void;
    getVipFromMeso(): number;
    addDonateMeso(meso: number): void;
    getDonateMeso(): number;
    /**
 * 
 * @param num
 */
    addBTC(num: number): void;
    getBTC(): number;
    addETH(num: number): void;
    getETH(): number;
    addLTC(num: number): void;
    getLTC(): number;
    addNiuNiuOwe(num: number): void;
    setNiuNiuOwe(num: number): void;
    getNiuNiuOwe(): number;
    /**
 * 設定手機驗證狀態。
 * 
 * @param num 新的手機驗證狀態。
 */
    setPhoneNumber(num: number): void;
    /**
 * 獲取手機驗證狀態。
 * 
 * @return 手機驗證狀態。
 */
    getPhoneNumber(): number;
    /**
 * 檢查是否已通過手機驗證。
 * 
 * @return 是否已通過手機驗證。
 */
    isPhoneVerified(): boolean;
    /**
 * 設定商店物品返回狀態。
 * 
 * @param d 新的商店物品返回狀態。
 */
    setMerchantItemBack(d: boolean): void;
    /**
 * 獲取商店物品返回狀態。
 * 
 * @return 商店物品返回狀態。
 */
    getMerchantItemBack(): boolean;
    /**
 * 檢查是否啟用寵物全圖吸功能。
 * 
 * @return 是否啟用寵物全圖吸功能。
 */
    isPetVac(): boolean;
    /**
 * 設定寵物全圖吸功能。
 * 
 * @param set 新的寵物全圖吸功能設定。
 */
    setPetVac(set: number): void;
    /**
 * 獲取寵物全圖吸功能設定。
 * 
 * @return 寵物全圖吸功能設定。
 */
    getPetVac(): number;
    /**
 * 關閉寵物全圖吸功能。
 */
    setPetVacOFF(): void;
    /**
 * 檢查寵物全圖吸功能是否關閉。
 * 
 * @return 是否關閉寵物全圖吸功能。
 */
    getPetVacOFF(): boolean;
    /**
 * 檢查是否已轉生過。
 * 
 * @return 是否已轉生過。
 */
    isReborn(): boolean;
    /**
 * 獲取轉生次數。
 * 
 * @return 轉生次數。
 */
    getReborn(): number;
    /**
 * 增加一次轉生次數。
 */
    addReborn(): void;
    /**
 * 檢查是否處於燃燒模式。
 * 
 * @return 是否處於燃燒模式。
 */
    isLevelBurnUp(): boolean;
    /**
 * 設定是否進入燃燒模式。
 * 
 * @param set 是否進入燃燒模式。
 */
    setLevelBurnUp(set: boolean): void;
    /**
 * 增加潛能額外加成值。
 * 
 * @param num 要增加的潛能額外加成值。
 */
    addExtraPotential(num: number): void;
    /**
 * 設定潛能額外加成值。
 * 
 * @param num 新的潛能額外加成值。
 */
    setExtraPotential(num: number): void;
    /**
 * 獲取潛能額外加成值。
 * 
 * @return 潛能額外加成值。
 */
    getExtraPotential(): number;
    /**
 * 增加潛能最大總值。
 * 
 * @param num 要增加的潛能最大總值。
 */
    addPotentialAll(num: number): void;
    /**
 * 設定潛能最大總值。
 * 
 * @param num 新的潛能最大總值。
 */
    setPotentialAll(num: number): void;
    /**
 * 獲取潛能最大總值。
 * 
 * @return 潛能最大總值。
 */
    getPotentialAll(): number;
    /**
 * 獲取總潛能值。
 * 
 * @return 總潛能值。
 */
    getPotentialTotal(): number;
    /**
 * 設定普通怪物額外傷害加成值。
 * 
 * @param num 新的普通怪物額外傷害加成值。
 */
    setPotential1(num: number): void;
    /**
 * 獲取普通怪物額外傷害加成。
 * 
 * @return 普通怪物額外傷害加成值。
 */
    getPotential1(): number;
    /**
 * 設定是否進行等級檢查。
 * 
 * @param num 是否進行等級檢查。
 */
    setLevelNoCheck(num: boolean): void;
    /**
 * 獲取是否進行等級檢查。
 * 
 * @return 是否進行等級檢查。
 */
    getLevelNoCheck(): boolean;
    /**
 * 設定BOSS怪物額外傷害加成。
 * 
 * @param num BOSS怪物額外傷害加成值。
 */
    setPotential2(num: number): void;
    /**
 * 獲取BOSS怪物額外傷害加成。
 * 
 * @return BOSS怪物額外傷害加成值。
 */
    getPotential2(): number;
    /**
 * 設定機率無視傷害。
 * 
 * @param num 機率無視傷害值。
 */
    setPotential3(num: number): void;
    /**
 * 獲取機率無視傷害值。
 * 
 * @return 機率無視傷害值。
 */
    getPotential3(): number;
    /**
 * 設定機率無視異常效果。
 * 
 * @param num 機率無視異常效果值。
 */
    setPotential4(num: number): void;
    /**
 * 獲取機率無視異常效果值。
 * 
 * @return 機率無視異常效果值。
 */
    getPotential4(): number;
    /**
 * 設定補血藥劑加成。
 * 
 * @param num 補血藥劑加成值。
 */
    setPotential5(num: number): void;
    /**
 * 獲取補血藥劑加成值。
 * 
 * @return 補血藥劑加成值。
 */
    getPotential5(): number;
    /**
 * 設定補魔藥劑加成。
 * 
 * @param num 補魔藥劑加成值。
 */
    setPotential6(num: number): void;
    /**
 * 獲取補魔藥劑加成值。
 * 
 * @return 補魔藥劑加成值。
 */
    getPotential6(): number;
    /**
 * 設定傷害減免。
 * 
 * @param num 傷害減免值。
 */
    setPotential7(num: number): void;
    /**
 * 獲取傷害減免值。
 * 
 * @return 傷害減免值。
 */
    getPotential7(): number;
    /**
 * 設定機率無視傷害。
 * 
 * @param num 要設定的機率無視傷害值。
 */
    setIgnoreDamage(num: number): void;
    /**
 * 獲取機率無視傷害值。
 * 
 * @return 機率無視傷害值。
 */
    getIgnoreDamage(): number;
    /**
 * 設定機率無視異常效果。
 * 
 * @param num 要設定的機率無視異常效果值。
 */
    setIgnoreDebuff(num: number): void;
    /**
 * 獲取機率無視異常效果值。
 * 
 * @return 機率無視異常效果值。
 */
    getIgnoreDebuff(): number;
    /**
 * 設定補魔藥劑加成。
 * 
 * @param num 要設定的補魔藥劑加成值。
 */
    setPotionBonus(num: number): void;
    /**
 * 獲取補魔藥劑加成值。
 * 
 * @return 補魔藥劑加成值。
 */
    getPotionBonus(): number;
    /**
 * 設定傷害減免。
 * 
 * @param num 要設定的傷害減免值。
 */
    setDamageReduce(num: number): void;
    /**
 * 獲取傷害減免值。
 * 
 * @return 傷害減免值。
 */
    getDamageReduce(): number;
    /**
 * 設定經驗額外加成。
 * 
 * @param num 要設定的經驗額外加成值。
 */
    setExtraExp(num: number): void;
    /**
 * 獲取經驗額外加成值。
 * 
 * @return 經驗額外加成值。
 */
    getExtraExp(): number;
    /**
 * 設定掉寶額外加成。
 * 
 * @param num 要設定的掉寶額外加成值。
 */
    setExtraDrop(num: number): void;
    /**
 * 獲取掉寶額外加成值。
 * 
 * @return 掉寶額外加成值。
 */
    getExtraDrop(): number;
    getFactionPoint(): number;
    /**
 * 
 * @param amount
 */
    addFactionPoint(amount: number): void;
    getFaction(): string;
    resetFaction(): string;
    setFactionEvil(): string;
    setFactionGood(): string;
    randomPotential(): void;
    /**
 * 獲取每日打怪獲得點數。
 * 
 * @return 每日打怪獲得點數。
 */
    getMonsterPoint(): number;
    /**
 * 設定每日打怪獲得點數。
 * 
 * @param num 要設定的每日打怪獲得點數。
 */
    setMonsterPoint(num: number): void;
    /**
 * 增加每日打怪獲得點數。
 * 
 * @param add 要增加的每日打怪獲得點數。
 */
    addMonsterPoint(add: number): void;
    /**
 * 獲取每日打怪獲得點數2。
 * 
 * @return 每日打怪獲得點數2。
 */
    getMonsterPoint2(): number;
    /**
 * 設定每日打怪獲得點數2。
 * 
 * @param num 要設定的每日打怪獲得點數2。
 */
    setMonsterPoint2(num: number): void;
    /**
 * 增加每日打怪獲得點數2。
 * 
 * @param add 要增加的每日打怪獲得點數2。
 */
    addMonsterPoint2(add: number): void;
    /**
 * 獲取今日怪物擊殺數量。
 * 
 * @return 今日怪物擊殺數量。
 */
    getMonsterKillToday(): number;
    getMonsterKillWeek(): number;
    /**
 * 獲取昨日怪物擊殺數量。
 * 
 * @return 昨日怪物擊殺數量。
 */
    getMonsterKillYesturday(): number;
    /**
 * 增加今日怪物擊殺數量。
 */
    addMonsterKillToday(): void;
    /**
 * 獲取今日怪物擊殺排名。
 * 
 * @return 今日怪物擊殺排名。
 */
    getMonsterKillTodayRank(): number;
    /**
 * 獲取昨日怪物擊殺排名。
 * 
 * @return 昨日怪物擊殺排名。
 */
    getMonsterKillYesturdayRank(): number;
    /**
 * 獲取活躍度。
 * 
 * @return 活躍度數值。
 */
    getActivity(): number;
    /**
 * 設定活躍度。
 * 
 * @param num 要設定的活躍度數值。
 */
    setActivity(num: number): void;
    /**
 * 增加活躍度。
 * 
 * @param add 要增加的活躍度數值。
 */
    addActivity(add: number): void;
    /**
 * 獲取怪物擊殺換血數值。
 * 
 * @return 怪物擊殺換血數值。
 */
    getKillHp(): number;
    /**
 * 設定怪物擊殺換血數值。
 * 
 * @param num 怪物擊殺換血數值。
 */
    setKillHp(num: number): void;
    /**
 * 增加怪物擊殺換血數值。
 */
    addKillHp(): void;
    /**
 * 獲取殺怪加血數值。
 * 
 * @return 殺怪加血數值。
 */
    getKillHpAdd(): number;
    /**
 * 增加殺怪加血數值。
 * 
 * @param add 要增加的殺怪加血數值。
 */
    addKillHpAdd(add: number): void;
    /**
 * 獲取指定事件今日紀錄。
 * 
 * @param event 事件名稱。
 * @return 今日紀錄數值。
 */
    getEventToday(event: string): number;
    /**
 * 設定指定事件今日紀錄。
 * 
 * @param event 事件名稱。
 * @param set 今日紀錄數值。
 */
    setEventToday(event: string, set: number): void;
    /**
 * 設定指定事件的今日紀錄數值。
 * 
 * @param name 事件名稱。
 * @param value 今日紀錄數值。
 * @param account 是否為帳號紀錄。
 */
    setCharacterSetToday(name: string, value: number, account: boolean): void;
    /**
 * 獲取指定事件的今日紀錄數值。
 * 
 * @param name 事件名稱。
 * @param account 是否為帳號紀錄。
 * @return 今日紀錄數值。
 */
    getCharacterSetToday(name: string, account: boolean): number;
    /**
 * 獲取指定事件的昨日紀錄數值。
 * 
 * @param name 事件名稱。
 * @param account 是否為帳號紀錄。
 * @return 昨日紀錄數值。
 */
    getCharacterSetYesturday(name: string, account: boolean): number;
    /**
 * 獲取自動補血數值。
 * 
 * @return 自動補血數值。
 */
    getAutoHP(): number;
    /**
 * 設定自動補血數值。
 * 
 * @param num 自動補血數值。
 */
    setAutoHP(num: number): void;
    /**
 * 獲取自動補魔數值。
 * 
 * @return 自動補魔數值。
 */
    getAutoMP(): number;
    /**
 * 設定自動補魔數值。
 * 
 * @param num 自動補魔數值。
 */
    setAutoMP(num: number): void;
    /**
 * 獲取自動補血比例。
 * 
 * @return 自動補血比例。
 */
    getAutoHPPercent(): number;
    /**
 * 設定自動補血比例。
 * 
 * @param num 自動補血比例。
 */
    setAutoHPPercent(num: number): void;
    /**
 * 獲取自動補魔比例。
 * 
 * @return 自動補魔比例。
 */
    getAutoMPPercent(): number;
    /**
 * 設定自動補魔比例。
 * 
 * @param num 自動補魔比例。
 */
    setAutoMPPercent(num: number): void;
    /**
 * 獲取指定地圖的速度記錄時間。
 * 
 * @param mapname 地圖名稱。
 * @return 速度記錄時間。
 */
    getSpeedTime(mapname: string): number;
    /**
 * 設定指定地圖的速度記錄時間。
 * 
 * @param mapname 地圖名稱。
 * @param time 速度記錄時間。
 */
    setSpeedTime(mapname: string, time: number): void;
    /**
 * 設定速度挑戰的開始時間為當前系統時間。
 */
    setSpeedStartTime(): void;
    /**
 * 獲取速度挑戰的開始時間。
 * 
 * @return 速度挑戰的開始時間。
 */
    getSpeedStartTime(): number;
    /**
 * 設定速度挑戰的開始時間。
 * 
 * @param s 速度挑戰的開始時間。
 */
    setSpeedStartTime(s: number): void;
    /**
 * 創建速度挑戰記錄。
 */
    CreateSpeedTime(): void;
    /**
 * 創建速度挑戰記錄。
 * 
 * @param nameA 地圖名稱。
 */
    CreateSpeedTime(nameA: string): void;
    /**
 * 獲取角色設定，以Map形式返回。
 * 
 * @return 包含角色設定的副本的Map。
 */
    getCharacterSet(): any;
    /**
 * 獲取角色臨時設定，以Map形式返回。
 * 
 * @return 包含角色臨時設定的副本的Map。
 */
    getCharacterSetTemp(): any;
    /**
 * 獲取帳號相關角色設定，以Map形式返回。
 * 
 * @return 包含帳號相關角色設定的副本的Map。
 */
    getCharacterSet_Acc(): any;
    /**
 * 根據指定的名稱和帳號狀態獲取角色設定的值。
 * 
 * @param name 設定名稱。
 * @param account 是否帳號相關。
 * @return 角色設定的值。
 */
    getCharacterSet(name: string, account: boolean): number;
    /**
 * 根據名稱和帳號參數，判斷指定的角色設定是否為真。
 * 
 * @param name 設定名稱。
 * @param account 是否帳號相關。
 * @return 若角色設定為真，則返回 true，否則返回 false。
 */
    getCharacterSetBool(name: string, account: boolean): boolean;
    /**
 * 設定 LUNAR 傷害百分比，同時向客戶端傳送更新。
 * 
 * @param set 要設定的傷害百分比。
 */
    setLunarDamage(set: number): void;
    /**
 * 從角色設定中移除指定的名稱。
 * 
 * @param name 要移除的名稱。
 */
    removeCharacterSet(name: string): void;
    /**
 * 設定角色設定的值。
 * 
 * @param name 設定名稱。
 * @param value 設定值。
 */
    setCharacterSet(name: string, value: number): void;
    /**
 * 設定是否更改角色設定。
 * 
 * @param set 是否更改角色設定。
 */
    setChangeCharacterSet(set: boolean): void;
    /**
 * 根據名稱獲取角色設定的值。
 * 
 * @param name 設定名稱。
 * @return 角色設定的值。
 */
    getCharacterSet(name: string): number;
    /**
 * 增加指定名稱的角色設定。
 * 
 * @param name 設定名稱。
 */
    addCharacterSet(name: string): void;
    /**
 * 增加指定名稱的角色設定，並根據帳號參數決定是否是帳號相關的設定。
 * 
 * @param name 設定名稱。
 * @param add 增加的值。
 */
    addCharacterSet(name: string, add: number): void;
    /**
 * 
 * @param name
 * @param add
 * @param account
 */
    addCharacterSet(name: string, add: number, account: boolean): void;
    /**
 * 設定指定名稱的角色設定，並根據帳號參數決定是否是帳號相關的設定。
 * 
 * @param name 設定名稱。
 * @param value 設定值。
 * @param account 是否帳號相關。
 */
    setCharacterSet(name: string, value: number, account: boolean): void;
    setCharacterSetTemp(name: string, value: number): void;
    /**
 * 增加指定名稱的角色設定，並根據帳號參數決定是否是帳號相關的設定。
 * 
 * @param name 設定名稱。
 */
    getCharacterSetTemp(name: string): number;
    /**
 * 設定指定名稱的角色設定，並根據帳號參數決定是否是帳號相關的設定。
 * 
 * @param name 設定名稱。
 * @param set 設定值。
 * @param account 是否帳號相關。
 */
    setCharacterSet(name: string, set: boolean, account: boolean): void;
    getAllSpeedToday(): any;
    loadMapleTrait(): void;
    saveMapleTrait(): void;
    loadCharacterJson(accountId: number, chrId: number): void;
    loadCharacterJson(): void;
    /**
 * 從角色的帳號角色設定中移除指定的鍵值對。
 * 
 * @param key 鍵值。
 */
    removeCharacterSetAcc(key: string): void;
    loadCharacterSet(): void;
    saveCharacterSet(con: any): void;
    saveCharacterSet2(con: any): void;
    deletefunctionAcccountId(con: any, sql: string, id: number, functionName: string): void;
    deletefunctionCharacterid(con: any, sql: string, id: number, functionName: string): void;
    loadLoginKey(accountID: number): string;
    getMonsterPet(type: number): number;
    hasMonsterPet(monsterid: number): boolean;
    /**
 * 增加角色殺死怪物寵物的次數。
 * 
 * @param monsterid 怪物的ID。
 * @return 操作是否成功。
 */
    addMonsterPetKill(monsterid: number): boolean;
    /**
 * 取得角色殺死特定怪物寵物的次數。
 * 
 * @param monsterid 怪物的ID。
 * @return 角色殺死特定怪物寵物的次數。
 */
    getMonsterPetKill(monsterid: number): number;
    /**
 * 增加角色特定怪物寵物的等級。
 * 
 * @param monsterid 怪物的ID。
 * @return 操作是否成功。
 */
    addMonsterPetLevel(monsterid: number): boolean;
    /**
 * 取得角色特定怪物寵物的等級。
 * 
 * @param monsterid 怪物的ID。
 * @return 角色特定怪物寵物的等級。
 */
    getMonsterPetLevel(monsterid: number): number;
    /**
 * 設定角色特定怪物寵物的技能。
 * 
 * @param Skill 技能的ID。
 * @return 操作是否成功。
 */
    setMonsterPetSkill(Skill: number): boolean;
    /**
 * 設定角色特定怪物寵物的等級。
 * 
 * @return 操作是否成功。
 */
    setMonsterPet(mountid: number): boolean;
    /**
 * 這個方法用於將已裝備的物品全部取下。
 */
    unequips(): void;
    /**
 * 取得已裝備物品的數量。
 * 
 * @return 已裝備物品的數量。
 */
    getEquippedSize(): number;
    /**
 * 移除除了零極限技能、教學技能和特定技能之外的所有技能。
 */
    removeSkillsExceptZeroSkill(): void;
    /**
 * 移除除了設為極限的技能之外的所有技能。
 */
    removeSkillsExceptMaxSkill(): void;
    /**
 * 移除所有技能。
 */
    removeAllSkills(): void;
    /**
 * 清除按鍵配置。
 */
    clearKeyMap(): void;
    /**
 * 更新角色的所有狀態統計數值。
 */
    UpdateAllStats(): void;
    /**
 * 執行每日簽到操作，增加簽到次數。
 */
    DaySign(): void;
    doReborn(i: number, keyreset: boolean): boolean;
    doReborn2(i: number): boolean;
    endStorageMsg(name: string, storage: boolean): void;
    /**
 * 向空的儲存訊息中添加內容。
 * 
 * @param msg 訊息內容
 */
    addEmptyStorageMsg(msg: string): void;
    /**
 * 向儲存訊息中添加內容，包括名稱和訊息。
 * 
 * @param name 玩家名稱
 * @param msg 訊息內容
 */
    addStorageMsg(name: string, msg: string): void;
    /**
 * 結束交易訊息並進行紀錄。
 * 
 * @param name 玩家名稱
 */
    endTradeMsg(name: string): void;
    /**
 * 向空的交易訊息中添加內容。
 * 
 * @param msg 訊息內容
 */
    addEmptyTradeMsg(msg: string): void;
    /**
 * 向交易訊息中添加內容，包括名稱和訊息。
 * 
 * @param name 玩家名稱
 * @param msg 訊息內容
 */
    addTradeMsg(name: string, msg: string): void;
    /**
 * 獲取指定怪物的擊殺數量。
 * 
 * @param monsterid 怪物ID
 * @return 擊殺數量
 */
    getMobKill(monsterid: number): number;
    /**
 * 設置指定怪物的擊殺數量。
 * 
 * @param monsterid 怪物ID
 * @param add 增加的數量
 */
    setMobKill(monsterid: number, add: number): void;
    /**
 * 增加指定怪物的擊殺數量。
 * 
 * @param monsterid 怪物ID
 * @param add 增加的數量
 */
    addMobKill(monsterid: number, add: number): void;
    /**
 * 增加指定怪物的每日擊殺數量。
 * 
 * @param monsterid 怪物ID
 * @param add 增加的數量
 */
    addDayMobKill(monsterid: number, add: number): void;
    /**
 * 獲取指定怪物的每日擊殺數量。
 * 
 * @param monsterid 怪物ID
 * @return 每日擊殺數量
 */
    getDayMobKill(monsterid: number): number;
    /**
 * 增加指定怪物的每日帳號擊殺數量。
 * 
 * @param monsterid 怪物ID
 * @param add 增加的數量
 */
    addDayMobKillAcc(monsterid: number, add: number): void;
    /**
 * 獲取指定怪物的每日帳號擊殺數量。
 * 
 * @param monsterid 怪物ID
 * @return 每日帳號擊殺數量
 */
    getDayMobKillAcc(monsterid: number): number;
    /**
 * 獲取指定等級範圍內的怪物擊殺數量總和。
 * 
 * @param level 等級
 * @return 怪物擊殺數量總和
 */
    getMobKillDayInterval(level: number): number;
    /**
 * 增加指定怪物的擊殺數量。
 * 
 * @param monsterid 怪物ID
 */
    addMobKill(monsterid: number, isboss: boolean): void;
    /**
 * 
 */
    resetMobKill(): void;
    /**
 * 
 * @return
 */
    getAllMobKillInfo(): string;
    /**
 * 獲取已簽到次數。
 * 
 * @return 已簽到次數
 */
    getSignedNumber(): number;
    /**
 * 檢查角色是否已簽到。
 * 
 * @return 若已簽到則返回true，否則返回false
 */
    isSigned(): boolean;
    /**
 * 獲取最後使用的技能ID。
 * 
 * @return 最後使用的技能ID
 */
    getLastUseSkill(): number;
    /**
 * 設置最後使用的技能ID。
 * 
 * @param LastUseSkill 最後使用的技能ID
 */
    setLastUseSkill(LastUseSkill: number): void;
    /**
 * 設置已更改好友列表。
 */
    setchanged_buddies(): void;
    /**
 * 設置已更改欄位限制。
 */
    setchanged_slotlimit(): void;
    /**
 * 獲取贊助點數。
 * 
 * @param point 點數
 * @param message 是否顯示訊息
 */
    gainDonatePoint(point: number, message: boolean): void;
    /**
 * 獲取捐贈點數。
 * 
 * @param code 捐贈碼
 * @param point 點數
 */
    gainDonate(code: string, point: number): void;
    /**
 * 取消角色身上的Buff效果。
 * 
 * @param buffStatList 要取消的Buff效果列表
 */
    cancelBuffStats(buffStatList: any): void;
    /**
 * 獲取角色創建時的IP地址。
 * 
 * @return 創建時的IP地址
 */
    getbirthIP(): string;
    /**
 * 獲取角色創建時的MAC地址。
 * 
 * @return 創建時的MAC地址
 */
    getbirthMAC(): string;
    /**
 * 獲取角色最後一次登錄時的MAC地址。
 * 
 * @return 最後一次登錄時的MAC地址
 */
    getlastMAC(): string;
    hasBlockedInventory(): boolean;
    /**
 * 檢查角色是否有被封鎖的背包。
 * 
 * @return 若有被封鎖的背包則返回true，否則返回false
 */
    hasBlockedInventoryLog(print: boolean, portal_name: string): boolean;
    BlockedLoggedIn(): boolean;
    isFirstBuff(): boolean;
    setBuff(s: boolean): void;
    getLastCheckCopyTime(): number;
    canCheckCopyItem(): boolean;
    checkCopyItems(): void;
    checkCopyItems(itemA: any): void;
    checkCopyItems(force: boolean): void;
    checkCopyItemsByID(fromid: number, itemid: number): void;
    /**
 * 切換測試DPM模式。
 */
    toggleTestingDPM(): void;
    /**
 * 檢查是否處於測試DPM模式。
 * 
 * @return 若處於測試DPM模式則返回true，否則返回false
 */
    isTestingDPM(): boolean;
    /**
 * 設定DPM（每分鐘傷害）數值。
 * 
 * @param newdpm 新的DPM數值
 */
    setDPM(newdpm: number): void;
    /**
 * 獲取DPM（每分鐘傷害）數值。
 * 
 * @return DPM數值
 */
    getDPM(): number;
    /**
 * 停止DPM測試。
 */
    StopDpm(): void;
    /**
 * 獲取角色的疲勞值。
 * 
 * @return 疲勞值
 */
    getFatigue(): number;
    /**
 * 設定角色的疲勞值。
 * 
 * @param j 新的疲勞值
 */
    setFatigue(j: number): void;
    /**
 * 獲取角色的特性。
 * 
 * @param t 特性類型
 * @return 特性對象
 */
    getTrait(t: any): any;
    /**
 * 獲取角色的總戰鬥經驗值。
 * 
 * @return 總戰鬥經驗值
 */
    getTotalBattleExp(): number;
    /**
 * 獲取最後一次移動封包的時間間隔。
 * 
 * @return 最後一次移動封包的時間間隔
 */
    getlastmovepackettime(): number;
    /**
 * 檢查是否能夠發言。
 * 
 * @return 若可以發言則返回true，否則返回false
 */
    canSpeak(): boolean;
    /**
 * 設定發言的時間。
 */
    setSpeakTime(): void;
    checkSpecialMobVac(s: number): void;
    getMobVac2_Count(): number;
    setMobVac2_Count(s: number): void;
    addMobVac2_Count(): void;
    setMobVac2_LastTime(s: number): void;
    setMobVac_Coefficient(s: number): void;
    getMobVac_Count(): number;
    setMobVac_Count(s: number): void;
    addMobVac_Count(): void;
    getMobVac_LastTime(): number;
    setMobVac_LastTime(s: number): void;
    getMobMove_Count(): number;
    setMobMove_Count(s: number): void;
    setMobMove(s: boolean): void;
    /**
 * 設定精靈小釣手
 * 
 * @param elf
 */
    setPlayerFishing(elf: any): void;
    /**
 * 獲得目前雇用的小釣手
 * 
 * @return
 */
    getPlayerFishing(): any;
    /**
 * 檢查角色是否能夠進行釣魚。
 * 
 * @param now 現在的時間
 * @return 若可以進行釣魚則返回true，否則返回false
 */
    canFish(now: number): boolean;
    /**
 * 開始進行釣魚。
 */
    startFish(): void;
    /**
 * 檢查角色是否能夠進行雇用釣魚。
 * 
 * @param now 現在的時間
 * @return 若可以進行雇用釣魚則返回true，否則返回false
 */
    canHiredFish(now: number): boolean;
    /**
 * 獲取角色的怪物寵物（MapleMonsterPet）。
 * 
 * @return 角色的怪物寵物
 */
    getMonsterPet(): any;
    /**
 * 設置角色的怪物寵物（MapleMonsterPet）。
 * 
 * @param mob 要設置的怪物寵物
 */
    setMonsterPet(mob: any): void;
    /**
 * 獲取角色的PVP怪物（MapleMonsterPVP）。
 * 
 * @return 角色的PVP怪物
 */
    getMonsterPVP(): any;
    /**
 * 設置角色的PVP怪物（MapleMonsterPVP）。
 * 
 * @param mob 要設置的PVP怪物
 */
    setMonsterPVP(mob: any): void;
    /**
 * 獲取角色的貓頭鷹計數。
 * 
 * @return 貓頭鷹計數
 */
    getOwlCount(): number;
    /**
 * 增加角色的貓頭鷹計數。
 */
    addOwlCount(): void;
    /**
 * 設置自訂任務數據。
 * 
 * @param questid 任務ID
 * @param points 數據值
 */
    setCData(questid: number, points: number): void;
    /**
 * 增加自訂任務數據。
 * 
 * @param questid 任務ID
 * @param points 數據值
 */
    addCData(questid: number, points: number): void;
    /**
 * 獲取自訂任務數據。
 * 
 * @param questid 任務ID
 * @return 自訂任務數據
 */
    getCData(questid: number): number;
    /**
 * 獲取自訂任務數據。
 * 
 * @param sai 角色
 * @param questid 任務ID
 * @return 自訂任務數據
 */
    getCData(sai: MapleCharacter, questid: number): number;
    getNiuNiuCard(): any;
    getNiuNiuCardLast(): string;
    setNiuNiuCard(card: any): void;
    getBlackJackCard(): any;
    setBlackJackCard(card: any): void;
    /**
 * 獲取女皇的祝福原始效果。
 * 
 * @return 女皇的祝福原始效果
 */
    getBlessOfEmpressOrigin(): string;
    /**
 * 處理角色的HP和MP恢復。
 */
    handleHpMpRecover(): void;
    /**
 * 設置角色的夥伴（MapleSidekick）。
 * 
 * @param s 要設置的夥伴
 */
    setSidekick(s: any): void;
    /**
 * 獲取角色的安卓（MapleAndroid）。
 * 
 * @return 角色的安卓
 */
    getAndroid(): any;
    /**
 * 獲取角色的夥伴（MapleSidekick）。
 * 
 * @return 角色的夥伴
 */
    getSidekick(): any;
    getExtendedSlots(): any;
    getExtendedSlot(index: number): number;
    getExtendedSlotByIndex(index: number): any;
    getExtendedSlotUniqueid(index: number): number;
    getExtendedSlotsIndexByItemId(ItemID: number): number;
    getExtendedSlotsIndexByUniqueid(uid: number): number;
    getExtendedSlotsByUniqueid(uid: number): any;
    isSaving(): boolean;
    checkHearts(): boolean;
    setAndroid(a: any): void;
    UpdateYutoShieldTime(): void;
    UpdateLunarHeartTime(): void;
    UpdateSaveTime(): void;
    getLastSaveTime(): number;
    canCheckBuff(): boolean;
    checkYutoShieldProtecting(): void;
    checkLunarShieldProtecting(): void;
    /**
 * 添加要出售的物品到商店出售清單。
 * 
 * @param item 要添加的物品
 */
    addSell(item: any): void;
    /**
 * 從商店出售清單中移除物品。
 * 
 * @param item 要移除的物品
 */
    removeSell(item: any): void;
    /**
 * 獲取商店出售清單中的物品列表。
 * 
 * @return 商店出售清單中的物品列表
 */
    getSell(): any;
    /**
 * 檢查角色是否正在PVP活動中。
 * 
 * @return 如果角色正在PVP活動中，則返回true；否則返回false
 */
    inPVP(): boolean;
    /**
 * 獲取PVP活動的階段。
 * 
 * @return PVP活動的階段，如果不在PVP活動中，則返回0
 */
    getPVPStage(): number;
    /**
 * 設置角色的萃取器（Extractor）。
 * 
 * @param me 要設置的萃取器
 */
    setExtractor(me: any): void;
    /**
 * 移除角色的萃取器。
 */
    removeExtractor(): void;
    /**
 * 獲取角色的萃取器（Extractor）。
 * 
 * @return 角色的萃取器
 */
    getExtractor(): any;
    /**
 * 清除角色的連結怪物。
 */
    clearLinkMid(): void;
    /**
 * 獲取第一個連結怪物的怪物ID。
 * 
 * @return 第一個連結怪物的怪物ID
 */
    getFirstLinkMid(): number;
    /**
 * 獲取所有連結怪物的怪物ID和連結數量映射。
 * 
 * @return 所有連結怪物的怪物ID和連結數量映射
 */
    getAllLinkMid(): any;
    /**
 * 設置連結怪物的怪物ID和連結數量。
 * 
 * @param lm 連結怪物的怪物ID
 * @param x 連結數量
 */
    setLinkMid(lm: number, x: number): void;
    /**
 * 添加連結怪物的怪物ID和連結數量。
 * 
 * @param lm 連結怪物的怪物ID
 * @param x 連結數量
 */
    addLinkMid(lm: number, x: number): void;
    /**
 * 獲取連結怪物的連結數量。
 * 
 * @param lm 連結怪物的怪物ID
 * @return 連結怪物的連結數量
 */
    getLinkMid(lm: number): number;
    /**
 * 獲取角色相關信息。
 * 
 * @param msg 訊息
 * @return 包含角色相關信息的字串
 */
    getChrInfo(msg: string): string;
    /**
 * 應用冰屬性條數值。
 * 
 * @param x 冰屬性條數值
 */
    applyIceGage(x: number): void;
    /**
 * 授予Debuff效果。
 * 
 * @param disease Debuff效果對應的MapleBuffStat
 * @param skill MobSkill對象
 */
    giveDebuff(disease: any, skill: any): void;
    /**
 * 觸發疾病效果。
 * 
 * @param type 疾病類型
 * @param level 疾病等級
 */
    disease(type: number, level: number): void;
    /**
 * 獲取召喚獸列表的讀取鎖，以讀取召喚獸列表。
 * 
 * @return 召喚獸列表
 */
    getSummonsReadLock(): any;
    /**
 * 獲取召喚獸列表的大小。
 * 
 * @return 召喚獸列表的大小
 */
    getSummonsSize(): number;
    unlockSummonsReadLock(): void;
    addSummon(s: any): void;
    removeExtraSummon(): void;
    removeSummon(s: any): void;
    getSummonedFamiliar(): any;
    removeFamiliar(): void;
    removeVisibleFamiliar(): void;
    spawnFamiliar(mf: any): void;
    /**
 * 判斷是否能使用召喚獸效果。
 * 
 * @param now 目前時間
 * @param eff MapleStatEffect對象
 * @return 是否能使用召喚獸效果
 */
    canFamiliarEffect(now: number, eff: any): boolean;
    /**
 * 執行召喚獸日程安排。
 * 
 * @param now 目前時間
 */
    doFamiliarSchedule(now: number): void;
    /**
 * 獲取已學習的專業列表。
 * 
 * @return 已學習的專業列表
 */
    getProfessions(): any;
    /**
 * 獲取專業等級。
 * 
 * @param id 專業技能的ID
 * @return 專業等級
 */
    getProfessionLevel(id: number): number;
    /**
 * 獲取專業經驗值。
 * 
 * @param id 專業技能的ID
 * @return 專業經驗值
 */
    getProfessionExp(id: number): any;
    /**
 * 增加專業經驗值。
 * 
 * @param id 專業技能的ID
 * @param expGain 增加的經驗值
 * @return 是否升級
 */
    addProfessionExp(id: number, expGain: number): boolean;
    /**
 * 改變專業等級和經驗值。
 * 
 * @param id 專業技能的ID
 * @param level 專業等級
 * @param exp 專業經驗值
 */
    changeProfessionLevelExp(id: number, level: number, exp: number): void;
    /**
 * 獲取已獲得的勳章列表。
 * 
 * @return 已獲得的勳章列表，每個勳章由任務ID和完成時間組成
 */
    getCompletedMedals(): any;
    /**
 * 角色結婚處理。 若有結婚對象，則更新對象的外觀。
 */
    marriage(): void;
    removeMechDoor(): void;
    addMechDoor(door: any): void;
    clearMechDoors(): void;
    getMechDoors(): any;
    getFH(): number;
    onAttack(monster: any, maxhp: number, maxmp: number, attack: any, skillid: number, oid: number, totDamage: number): void;
    afterAttack(mobCount: number, attackCount: number, skillid: number): void;
    addMagicBulletCount(): void;
    updateShadowKillCount(): void;
    resetShadowKillCount(): void;
    getShadowKillCount(): number;
    setShadowKillCount(set: number): void;
    setSkillTemp(skill: number, set: number): void;
    addSkillTemp(skill: number): void;
    getSkillTemp(skill: number): number;
    getBattlePoints(): number;
    setBattlePoints(p: number): void;
    setTotalBattleExp(p: number): void;
    getBounds(): any;
    getDamageIncrease(lm: number): number;
    modifyDamageTaken(damage: number, attacke: any, packet_skill: number): any;
    /**
 * 處理力量增加事件，不使用額外力量值。
 * 
 * @param oid 角色ID
 * @param skillid 技能ID
 */
    handleForceGain(oid: number, skillid: number): void;
    /**
 * 處理力量增加事件，可以使用額外力量值。
 * 
 * @param oid 角色ID
 * @param skillid 技能ID
 * @param extraForce 額外的力量值
 */
    handleForceGain(oid: number, skillid: number, extraForce: number): void;
    /**
 * 獲取指定友誼類型的友誼對象。
 * 
 * @param t 友誼類型
 * @return 友誼對象
 */
    getFriendship(t: any): any;
    /**
 * 獲取捲軸使用位置。
 * 
 * @return 捲軸使用位置
 */
    getScrolledPosition(): any;
    /**
 * 設置捲軸使用位置。
 * 
 * @param s 捲軸使用位置
 */
    setScrolledPosition(s: any): void;
    /**
 * 移除安卓機器人。
 */
    removeAndroid(): void;
    /**
 * 更新安卓機器人的外觀。
 * 
 * @param size 安卓機器人的大小
 * @param itemId 安卓機器人的道具ID
 */
    updateAndroid(size: number, itemId: number): void;
    /**
 * 標記擴充欄位已更改。
 */
    changedExtended(): void;
    /**
 * 變更角色所屬隊伍。
 * 
 * @param newTeam 新的隊伍
 */
    changeTeam(newTeam: number): void;
    /**
 * 獲取升級所需經驗值。
 * 
 * @return 升級所需經驗值
 */
    getNeededExp(): number;
    /**
 * 獲取角色的精靈寵物。
 * 
 * @return 包含角色精靈寵物的映射
 */
    getFamiliars(): any;
    /**
 * 獲取角色的地理位置。
 * 
 * @return 角色的地理位置
 */
    getGeoLocation(): string;
    /**
 * 發送簡訊到指定的手機號碼。
 * 
 * @param phoneNumber 手機號碼
 * @return 如果發送成功則返回 true，否則返回 false
 */
    sendSMS(phoneNumber: string): boolean;
    /**
 * 獲取驗證號碼。
 * 
 * @return 驗證號碼
 */
    getVerifyNumber(): string;
    /**
 * 設置是否正在進行收穫操作。
 * 
 * @param set 如果正在收穫則為 true，否則為 false
 */
    setHarvesting(set: boolean): void;
    /**
 * 檢查角色是否正在進行採集操作。
 * 
 * @return 如果角色正在進行採集操作則返回 true，否則返回 false
 */
    isHarversting(): boolean;
    /**
 * 獲取角色的所有小精靈寵物。
 * 
 * @return 包含角色小精靈寵物的陣列
 */
    getImps(): any;
    /**
 * 發送小精靈寵物資訊給客戶端。
 */
    sendImp(): void;
    gainAllOfflineItems(): string;
    SelectOffline(): string;
    /**
 * 領取指定的離線物品。
 * 
 * @return 包含領取結果的字符串
 */
    giveOffline(selection: number): string;
    /**
 * 獲取離線道具的數量。
 * 
 * @param itemid 道具ID
 * @param count 數量
 */
    gainOfflineItem(itemid: number, count: number): void;
    /**
 * 獲取離線道具的映射集合。
 * 
 * @return 包含離線道具信息的映射集合
 */
    getOfflineItems(): any;
    /**
 * 檢查角色是否在被阻止的地圖中。
 * 
 * @return 如果角色在被阻止的地圖中則返回 true，否則返回 false
 */
    isInBlockedMap(): boolean;
    /**
 * 檢查角色是否具有臉部標誌。
 * 
 * @return 如果角色是惡魔、傑諾或幻獸師則返回 true，否則返回 false
 */
    hasFaceMarking(): boolean;
    /**
 * 獲取臉部標誌的ID。
 * 
 * @return 臉部標誌的ID
 */
    getFaceMarking(): number;
    /**
 * 設定臉部特徵的標誌ID。
 * 
 * @param id 道具ID，表示臉部特徵的標誌ID
 */
    setFaceMarking(id: number): void;
    /**
 * 獲取綠色保護標誌的數量。
 * 
 * @return 綠色保護標誌的數量
 */
    getGreenSaver(): number;
    /**
 * 添加綠色保護標誌的數量。
 * 
 * @param amount 要添加的數量
 */
    addGreenSaver(amount: number): void;
    /**
 * 變更精靈耳朵的狀態。
 */
    changeElfEar(): void;
    /**
 * 檢查角色是否擁有精靈耳朵。
 * 
 * @return 如果角色擁有精靈耳朵則返回 true，否則返回 false
 */
    isElfEar(): boolean;
    /**
 * 檢查信息任務是否包含指定的數據。
 * 
 * @param questid 任務ID
 * @param data 要檢查的數據
 * @return 如果信息任務包含指定的數據則返回 true，否則返回 false
 */
    containsInfoQuest(questid: number, data: string): boolean;
    /**
 * 檢查隊伍成員的等級是否在指定的範圍內。
 * 
 * @param min 最低等級
 * @param max 最高等級
 * @return 如果隊伍中有成員的等級在指定的範圍內則返回 true，否則返回 false
 */
    checkPartyLevel(min: number, max: number): boolean;
    /**
 * 獲取魅力值。
 * 
 * @return 魅力值
 */
    getCharm(): number;
    /**
 * 設置魅力值。
 * 
 * @param itemId 道具ID，表示魅力值
 */
    setCharm(itemId: number): void;
    /**
 * 檢查角色是否是隊伍的隊長。
 * 
 * @return 如果角色是隊伍的隊長則返回 true，否則返回 false
 */
    isLeader(): boolean;
    /**
 * 檢查角色是否有任務獎勵UI的顯示。
 * 
 * @return 如果角色有任務獎勵UI的顯示則返回 true，否則返回 false
 */
    hasPQrewardUI(): boolean;
    /**
 * 設置角色是否有任務獎勵UI的顯示。
 * 
 * @param status 設定狀態，true 表示有顯示，false 表示沒有顯示
 */
    setPQrewardUI(status: boolean): void;
    /**
 * 獲取漁王遊戲分數。
 * 
 * @return 漁王遊戲分數
 */
    getFishKingScore(): number;
    /**
 * 獲取漁王遊戲次數。
 * 
 * @return 漁王遊戲次數
 */
    getFishGameTime(): number;
    /**
 * 獲取漁王遊戲歷史最高分數。
 * 
 * @return 漁王遊戲歷史最高分數
 */
    getFishGameHistoryScore(): number;
    /**
 * 重置漁王遊戲分數。
 */
    resetFishKingScore(): void;
    /**
 * 獲取地圖中怪物擊殺數的映射。
 * 
 * @return 包含怪物ID和擊殺數的映射
 */
    updateFishKingScore(score: number): void;
    /**
 * 
 * @return
 */
    getMosterKillInMap(): any;
    /**
 * 增加地圖中指定怪物的擊殺數。
 * 
 * @param mobId 要增加擊殺數的怪物ID
 */
    addMonsterKillInMap(mobId: number): void;
    /**
 * 發送漁王遊戲結果給客戶端。
 * 
 * @param itemid 獲得的道具ID
 * @param itemQty 獲得的道具數量
 * @param exp 獲得的經驗值
 */
    sendFishKingResult(itemid: number, itemQty: number, exp: number): void;
    /**
 * 獲取漁王遊戲的圖騰映射。
 * 
 * @return 包含圖騰位置和圖騰道具ID的映射
 */
    getTotems(): any;
    /**
 * 設置是否隱藏圖騰的顯示。
 */
    setTotemHide(): void;
    /**
 * 獲取是否隱藏圖騰的顯示狀態。
 * 
 * @return 是否隱藏圖騰的顯示
 */
    getTotemHide(): boolean;
    /**
 * 獲取回購商店的物品列表。
 * 
 * @return 回購商店的物品列表
 */
    getRebuy(): any;
    /**
 * 設置回購商店的物品列表。
 * 
 * @param rebuy 要設置的回購商店物品列表
 */
    setRebuy(rebuy: any): void;
    /**
 * 設置經驗椅的經驗值。
 * 
 * @param uid 椅子的唯一ID
 * @param exp 要設置的經驗值
 */
    setChairExp(uid: number, exp: number): void;
    /**
 * 增加經驗椅的經驗值。
 * 
 * @param uid 椅子的唯一ID
 * @param add 要增加的經驗值
 */
    gainChairExp(uid: number, add: number): void;
    /**
 * 獲取經驗椅的經驗值。
 * 
 * @param uid 椅子的唯一ID
 * @return 經驗椅的經驗值
 */
    getChairExp(uid: number): number;
    /**
 * 設置選擇使用的經驗椅唯一ID。
 * 
 * @param uid 要設置的唯一ID
 */
    setExpChairSelect(uid: number): void;
    /**
 * 獲取選擇使用的經驗椅唯一ID。
 * 
 * @return 選擇使用的經驗椅唯一ID
 */
    getExpChairSelect(): number;
    /**
 * 選擇使用經驗椅並發送相關信息給客戶端。
 */
    selectExpChair(): void;
    /**
 * 獲取是否顯示經驗值歸零的提示。
 * 
 * @return 是否顯示經驗值歸零的提示
 */
    getExpZeroNotice(): boolean;
    /**
 * 設置是否顯示經驗值歸零的提示。
 * 
 * @param set 要設置的值
 */
    SetExpZeroNotice(set: boolean): void;
    /**
 * 獲取已裝備武器的道具ID。
 * 
 * @return 已裝備武器的道具ID，如果沒有已裝備的武器則返回0
 */
    getEquippedWeapon(): number;
    getEquippedWeaponWatk(): any;
    getTotalEquippedWatk(): any;
    /**
 * 獲取已裝備道具的集合。
 * 
 * @return 包含已裝備道具的集合
 */
    getEquippedItems(): any;
    /**
 * 在已裝備的道具中查找指定的道具ID。
 * 
 * @param itemid 要查找的道具ID
 * @return 符合道具ID的道具，如果未找到則返回null
 */
    FindEquipped(itemid: number): any;
    /**
 * 從已裝備的道具中移除指定的道具ID。
 * 
 * @param itemid 要移除的道具ID
 */
    removeEquipped(itemid: number): void;
    /**
 * 獲取角色的Pee數量。
 * 
 * @return Pee數量
 */
    getPeeNumber(): number;
    /**
 * 設置角色的Pee數量。
 * 
 * @param pee 要設置的Pee數量
 * @return 更新後的Pee數量
 */
    setPeeNumber(pee: number): number;
    /**
 * 獲取角色的偷竊技能列表，同時檢查技能是否合法。
 * 
 * @return 偷竊技能列表
 */
    getStolenSkills(): any;
    /**
 * 清空角色的偷竊技能列表。
 */
    clearStolenSkills(): void;
    /**
 * 檢查角色的楓幣是否異常，並進行修正。
 */
    checkMeso(): void;
    /**
 * 獲取角色的轉移時間。
 * 
 * @return 轉移時間
 */
    getTransferTime(): number;
    /**
 * 設置角色的轉移時間。
 * 
 * @param set 要設置的轉移時間
 */
    setTransferTime(set: number): void;
    /**
 * 獲取角色的相關信息。
 * 
 * @return 角色信息的字符串
 */
    getInfo(): string;
    /**
 * 獲取角色的寵物吸收時間。
 * 
 * @return 寵物吸收時間
 */
    getPetVacTime(): number;
    /**
 * 設置角色的寵物吸收時間。
 * 
 * @param set 要設置的寵物吸收時間
 */
    setPetVacTime(set: number): void;
    /**
 * 
 */
    addJobSkills(): void;
    /**
 * 執行惡魔職業相關操作，根據角色職業和等級添加相應裝備。
 */
    doDemon(): void;
    /**
 * 判斷是否可以進行HP恢復。
 * 
 * @param now 目前時間。
 * @return 如果可以進行HP恢復，則返回true；否則返回false。
 */
    canHPRecover(now: number): boolean;
    /**
 * 判斷是否可以進行MP恢復。
 * 
 * @param now 目前時間。
 * @return 如果可以進行MP恢復，則返回true；否則返回false。
 */
    canMPRecover(now: number): boolean;
    /**
 * 
 * @param monster
 * @param attack
 */
    handleJobAttack(monster: any, attack: any): void;
    handleCardStack(): void;
    /**
 * 設置卡片堆疊數量。
 * 
 * @param amount 卡片堆疊數量。
 */
    setCardStack(amount: any): void;
    /**
 * 獲取卡片堆疊數量。
 * 
 * @return 卡片堆疊數量。
 */
    getCardStack(): any;
    /**
 * 獲取卡片堆疊的最大數量。
 * 
 * @return 卡片堆疊的最大數量。
 */
    getCardStackMax(): number;
    /**
 * 設置擊殺數量。
 * 
 * @param kill 擊殺數量。
 */
    setKillCount(kill: number): void;
    /**
 * 獲取擊殺數量。
 * 
 * @return 擊殺數量。
 */
    getKillCount(): number;
    /**
 * 獲取免費任意門次數。
 * 
 * @return 免費任意門次數。
 */
    getAnyWhereDoor(): number;
    /**
 * 設置免費任意門次數。
 * 
 * @param count 免費任意門次數。
 */
    setAnyWhereDoor(count: number): void;
    /**
 * 獲取強化任意門次數。
 * 
 * @return 強化任意門次數。
 */
    getAnyWhereDoorCash(): number;
    /**
 * 設置強化任意門次數。
 * 
 * @param count 強化任意門次數。
 */
    setAnyWhereDoorCash(count: number): void;
    /**
 * 更新任意門次數。
 */
    updateAnyWhereDoor(): void;
    /**
 * 獲取角色卡片數據。
 * 
 * @return 角色卡片數據。
 */
    getCharacterCard(): any;
    /**
 * 獲取內在技能列表。
 * 
 * @return 內在技能列表。
 */
    getInnerSkills(): any;
    /**
 * 檢查是否擁有指定的內在技能。
 * 
 * @param skillid 內在技能編號。
 * @return 若擁有指定的內在技能，則返回 true，否則返回 false。
 */
    hasInnerSkills(skillid: number): boolean;
    /**
 * 設置榮譽經驗值。
 * 
 * @param exp 榮譽經驗值。
 */
    setHonourExp(exp: number): void;
    /**
 * 獲取榮譽經驗值。
 * 
 * @return 榮譽經驗值。
 */
    getHonourExp(): number;
    /**
 * 設置榮譽等級。
 * 
 * @param level 榮譽等級。
 */
    setHonorLevel(level: number): void;
    /**
 * 獲取榮譽等級。
 * 
 * @return 榮譽等級。
 */
    getHonorLevel(): number;
    /**
 * 增加榮譽經驗值，並選擇是否顯示訊息。
 * 
 * @param amount 增加的榮譽經驗值。
 * @param show 是否顯示訊息。
 */
    addHonorExp(amount: number, show: boolean): void;
    /**
 * 榮譽等級升級處理。
 */
    honourLevelUp(): void;
    /**
 * 獲取升級至下一個榮譽等級所需的經驗值。
 * 
 * @return 下一個榮譽等級所需的經驗值。
 */
    getHonourNextExp(): number;
    /**
 * 解鎖榮譽技能。
 */
    HonorUnlock(): void;
    /**
 * 解鎖第二個榮譽技能。
 */
    HonorUnlock2(): void;
    /**
 * 解鎖第三個榮譽技能。
 */
    HonorUnlock3(): void;
    /**
 * 獲得榮譽值，並選擇是否顯示訊息。
 * 
 * @param honor 榮譽值。
 * @param show 是否顯示訊息。
 */
    gainHonor(honor: number, show: boolean): void;
    /**
 * 獲取核心光環屬性。
 * 
 * @return 核心光環屬性。
 */
    getCoreAura(): any;
    /**
 * 更新核心光環屬性。
 */
    updataCoreAura(): void;
    /**
 * 獲取技能的教學編號。
 * 
 * @param skillId 技能編號。
 * @return 技能的教學編號。
 */
    getSkillTeachId(skillId: number): number;
    /**
 * 獲取技能的教學編號。
 * 
 * @param skill 技能。
 * @return 技能的教學編號。
 */
    getSkillTeachId(skill: any): number;
    /**
 * 獲取技能的進入點。
 * 
 * @param skill 技能。
 * @return 技能的進入點。
 */
    getSkillEntry(skill: any): any;
    /**
 * 取消選擇偷取技能。
 * 
 * @param skillID 技能編號。
 */
    unchooseStolenSkill(skillID: number): void;
    /**
 * 取消被偷竊的技能的效果。
 * 
 * @param skillID 技能ID。
 */
    cancelStolenSkill(skillID: number): void;
    /**
 * 選擇一個被偷竊的技能。
 * 
 * @param skillID 技能ID。
 */
    chooseStolenSkill(skillID: number): void;
    /**
 * 添加被偷竊的技能。
 * 
 * @param skillID 技能ID。
 * @param skillLevel 技能等級。
 */
    addStolenSkill(skillID: number, skillLevel: number): void;
    /**
 * 移除被偷竊的技能。
 * 
 * @param skillID 技能ID。
 */
    removeStolenSkill(skillID: number): void;
    /**
 * 獲取角色的友誼點數數組。
 * 
 * @return 友誼點數數組。
 */
    getFriendShipPoints(): any;
    /**
 * 設置角色的友誼點數。
 * 
 * @param joejoe 第一個朋友的友誼點數。
 * @param hermoninny 第二個朋友的友誼點數。
 * @param littledragon 第三個朋友的友誼點數。
 * @param ika 第四個朋友的友誼點數。
 * @param yk 第五個朋友的友誼點數。
 */
    setFriendShipPoints(joejoe: number, hermoninny: number, littledragon: number, ika: number, yk: number): void;
    /**
 * 獲取指定位置的友誼點數。
 * 
 * @param val 位置索引（0到4）。
 * @return 指定位置的友誼點數。
 */
    getFriendShipPoints(val: number): number;
    /**
 * 獲取待添加的友誼點數。
 * 
 * @return 待添加的友誼點數。
 */
    getFriendShipToAdd(): number;
    /**
 * 設置待添加的友誼點數。
 * 
 * @param points 待添加的友誼點數。
 */
    setFriendShipToAdd(points: number): void;
    /**
 * 增加待添加的友誼點數。
 * 
 * @param points 要增加的友誼點數。
 */
    addFriendShipToAdd(points: number): void;
    /**
 * 更新角色的友誼點數，並通過封包通知客戶端。
 */
    updateFriendPoints(): void;
    /**
 * 設置角色的稱號效果。
 * 
 * @param titleEffect 稱號效果的ID。
 */
    setTitleEffect(titleEffect: number): void;
    /**
 * 設置角色是否正在裝扮。
 * 
 * @param set 設定為true表示正在裝扮，設定為false表示不在裝扮中。
 */
    setDressingUp(set: boolean): void;
    /**
 * 獲取角色的第二性別。如果角色是神之子，則返回1；否則返回性別。
 * 
 * @return 第二性別的值。
 */
    getSecondGender(): any;
    /**
 * 設置角色的第二個髮型。
 * 
 * @param hair 第二個髮型的ID。
 */
    setSecondHair(hair: number): void;
    /**
 * 獲取角色的第二個髮型。
 * 
 * @return 第二個髮型的ID。
 */
    getSecondHair(): number;
    /**
 * 獲取角色的第二個臉型。
 * 
 * @return 第二個臉型的ID。
 */
    getSecondFace(): number;
    /**
 * 設置角色的第二個臉型。
 * 
 * @param face 第二個臉型的ID。
 */
    setSecondFace(face: number): void;
    /**
 * 獲取角色的神之子外觀編號。
 * 
 * @return 神之子外觀編號。
 */
    getZeroLook(): any;
    /**
 * 切換角色的神之子外觀編號。
 */
    changeZeroLook(): void;
    /**
 * 檢查角色是否使用了神之子的第二個外觀。
 * 
 * @return 如果使用了神之子的第二個外觀，則返回true；否則返回false。
 */
    isZeroSecondLook(): boolean;
    /**
 * 獲取角色的第二個皮膚顏色。
 * 
 * @return 第二個皮膚顏色的值。
 */
    getSecondSkinColor(): any;
    /**
 * 設置角色的第二個皮膚顏色。
 * 
 * @param b 第二個皮膚顏色的值。
 */
    setSecondSkinColor(b: any): void;
    getEquips(fusionAnvil: boolean): any;
    getAllEquipsItem(): any;
    getEquipsItem(fusionAnvil: boolean): any;
    getSecondEquips(fusionAnvil: boolean): any;
    /**
 * 檢查角色是否將現金道具隱藏於裝備中。
 * 
 * @return 如果現金道具被隱藏，則返回true；否則返回false。
 */
    getCashEquipHide(): boolean;
    /**
 * 切換角色現金道具的隱藏狀態。如果目前已隱藏，則顯示；如果目前顯示，則隱藏。
 */
    setCashEquipHide(): void;
    /**
 * 設置角色現金道具的隱藏狀態。
 * 
 * @param x 設定為true表示隱藏，設定為false表示顯示。
 */
    setCashEquipHide(x: boolean): void;
    /**
 * 檢查角色是否正在進行換裝。
 * 
 * @return 如果正在進行換裝，則返回true；否則返回false。
 */
    isDressingUp(): boolean;
    /**
 * 設置樂透的第一個號碼。
 * 
 * @param a 要設置的號碼。
 */
    setLottoryNumber1(a: number): void;
    /**
 * 獲取樂透的第一個號碼。
 * 
 * @return 樂透的第一個號碼。
 */
    getLottoryNumber1(): number;
    /**
 * 設置樂透的第二個號碼。
 * 
 * @param a 要設置的號碼。
 */
    setLottoryNumber2(a: number): void;
    /**
 * 獲取樂透的第二個號碼。
 * 
 * @return 樂透的第二個號碼。
 */
    getLottoryNumber2(): number;
    /**
 * 
 * @param a
 */
    setLottoryNumber3(a: number): void;
    /**
 * 
 * @return
 */
    getLottoryNumber3(): number;
    /**
 * 
 * @param a
 */
    setLottoryNumber4(a: number): void;
    /**
 * 
 * @return
 */
    getLottoryNumber4(): number;
    /**
 * 
 * @param a
 */
    setLottoryNumber5(a: number): void;
    /**
 * 
 * @return
 */
    getLottoryNumber5(): number;
    /**
 * 更新樂透的投注日期。
 */
    UpdateLottoryDate(): void;
    /**
 * 獲取樂透的投注日期。
 * 
 * @return 樂透的投注日期。
 */
    getLottoryDate(): number;
    /**
 * 檢查是否可以進行樂透投注。
 * 
 * @return 如果可以進行投注，則返回true；否則返回false。
 */
    canLottory(): boolean;
    /**
 * 檢查是否今天已經進行過樂透投注。
 * 
 * @return 如果今天已經投注，則返回true；否則返回false。
 */
    isLottoryToday(): boolean;
    /**
 * 設置樂透的投注狀態。
 * 
 * @param a 要設置的投注狀態。
 */
    setLottoryStatus(a: boolean): void;
    /**
 * 獲取樂透的投注狀態。
 * 
 * @return 樂透的投注狀態。如果投注了，則返回true；否則返回false。
 */
    getLottoryStatus(): boolean;
    autoJob(): void;
    autoJob_冒險家(): void;
    autoJob_皇家(): void;
    autoJob_米哈逸(): void;
    autoJob_精靈遊俠(): void;
    autoJob_英雄(): void;
    autoJob_末日(): void;
    autoJob_戰國(): void;
    /**
 * 
 */
    autoJob_超新星(): void;
    /**
 * 獲取雇用商人實例。
 * 
 * @return 雇用商人實例，如果找不到則返回null。
 */
    getHiredMerchant(): any;
    /**
 * 設置道具任務的道具編號。
 * 
 * @param itemid 要設置的道具編號。
 */
    setItemQuestItemId(itemid: number): void;
    /**
 * 獲取道具任務的道具編號。
 * 
 * @return 道具任務的道具編號。
 */
    getItemQuestItemId(): number;
    /**
 * 設置道具任務的任務編號。
 * 
 * @param qid 要設置的任務編號。
 */
    setItemQuestId(qid: number): void;
    /**
 * 
 * @return
 */
    getItemQuestId(): number;
    /**
 * 檢查角色的Buff效果，並移除無效的Buff。
 */
    checkBuff(): void;
    /**
 * 穿戴指定的裝備。
 * 
 * @param itemId 要穿戴的道具編號。
 */
    equip(itemId: number): void;
    /**
 * 穿戴指定的裝備。
 * 
 * @param itemId 要穿戴的道具編號。
 * @param replace 是否替換已穿戴的裝備。
 */
    equip(itemId: number, replace: boolean): void;
    /**
 * 穿戴指定的裝備。
 * 
 * @param itemId 要穿戴的道具編號。
 * @param replace 是否替換已穿戴的裝備。
 * @param add 是否新增未穿戴的裝備。
 */
    equip(itemId: number, replace: boolean, add: boolean): void;
    /**
 * 脫下指定的裝備。
 * 
 * @param itemId 要脫下的道具編號。
 */
    unequip(itemId: number): void;
    /**
 * 脫下指定道具編號的裝備，並將其放入背包。
 * 
 * @param itemId 要脫下的道具編號。
 * @param remove 是否要移除裝備。
 */
    unequip(itemId: number, remove: boolean): void;
    /**
 * 脫下指定位置的裝備。
 * 
 * @param slot 要脫下的裝備位置。
 */
    unequipslot(slot: any): void;
    /**
 * 在地圖上顯示自訂地圖效果，並在指定時間後移除效果。
 * 
 * @param msg 要顯示的訊息。
 * @param itemId 地圖效果的道具編號。
 * @param duration 地圖效果持續時間（毫秒）。
 */
    startSelfMapEffect(msg: string, itemId: number, duration: number): void;
    run(): void;
    /**
 * 關閉指定類型的使用者介面。
 * 
 * @param type 要關閉的介面類型。
 */
    closeUI(type: number): void;
    /**
 * 設置是否已更改任務狀態。
 * 
 * @param set 是否已更改任務狀態。
 */
    serChangeQuest(set: boolean): void;
    /**
 * 設置LINE點數。
 * 
 * @param d 要設置的LINE點數。
 */
    setLinePoint(d: number): void;
    /**
 * 增加LINE點數。
 * 
 * @param d 要增加的LINE點數。
 */
    addLinePoint(d: number): void;
    /**
 * 獲取LINE點數。
 * 
 * @return LINE點數。
 */
    getLinePoint(): number;
    /**
 * 使用洗血道具，減少洗血扣血次數。
 */
    useHpWash(): void;
    /**
 * 增加洗血扣血次數。
 */
    addHpWash(): void;
    /**
 * 獲取洗血扣血次數。
 * 
 * @return 洗血扣血次數。
 */
    getHpWash(): number;
    /**
 * 設置LINE聊天通知狀態。
 * 
 * @param set 是否設置LINE聊天通知。
 */
    setLineChatNotice(set: boolean): void;
    /**
 * 檢查是否開啟LINE聊天通知。
 * 
 * @return 是否開啟LINE聊天通知。
 */
    isLineChatNotice(): boolean;
    /**
 * 設置對話NPC。
 * 
 * @param npc NPC的編號。
 */
    setTalkNpc(npc: number): void;
    /**
 * 獲取當前對話NPC的編號。
 * 
 * @return 當前對話NPC的編號。
 */
    getTalkNpc(): number;
    /**
 * 檢查是否能夠使用魔力無限技能。
 * 
 * @return 是否能夠使用魔力無限技能。
 */
    canInfinity(): boolean;
    /**
 * 開始計時魔力無限技能的冷卻時間。
 */
    startInfinity(): void;
    /**
 * 更新魔力無限技能的時間。
 */
    updateInfinityTime(): void;
    /**
 * 更新魔力無限技能的時間。
 * 
 * @param startTime 開始時間。
 */
    updateInfinityTime(startTime: number): void;
    /**
 * 增加魔力無限技能的使用次數。
 */
    addInfinityCount(): void;
    /**
 * 獲取魔力無限技能的使用次數。
 * 
 * @return 魔力無限技能的使用次數。
 */
    getInfinityCount(): number;
    /**
 * 重置魔力無限技能的使用次數。
 */
    resetInfinityCount(): void;
    /**
 * 使用魔力無限技能的效果。
 */
    doInfinity(): void;
    /**
 * 重置奧義傷害。
 */
    resetArcaneDamage(): void;
    /**
 * 增加奧義傷害。
 * 
 * @param damR 傷害比例。
 */
    addArcaneDamage(damR: number): void;
    /**
 * 獲取奧義傷害。
 * 
 * @return 奧義傷害。
 */
    getArcaneDamage(): number;
    /**
 * 設置石化狀態。
 * 
 * @param on 是否開啟石化狀態。
 */
    setLapidification(on: boolean): void;
    /**
 * 是否具有石化狀態。
 * 
 * @return 是否具有石化狀態。
 */
    hasLapidification(): boolean;
    /**
 * 設置角色子類別。
 * 
 * @param set 子類別。
 */
    setSubcategory(set: any): void;
    /**
 * 處理施加狀態效果。
 * 
 * @param monster 怪物。
 * @param skillid 技能ID。
 * @param attackCount 攻擊次數。
 */
    handleApplyStatus(monster: any, skillid: number, attackCount: number): void;
    /**
 * 教授技能給其他角色。
 * 
 * @param skillId 技能ID。
 * @param toCharId 目標角色ID。
 * @return 教授技能結果。
 */
    teachSkill(skillId: number, toCharId: number): number;
    /**
 * 變更教授技能的資料。
 * 
 * @param skill 技能。
 * @param newLevel 新等級。
 * @param newMasterlevel 新主等級。
 * @param expiration 到期時間。
 * @return 變更結果。
 */
    changeTeachSkillData(skill: any, newLevel: number, newMasterlevel: number, expiration: number): boolean;
    /**
 * 改變教導技能。
 * 
 * @param skillId 技能ID。
 * @param toCharId 目標角色ID。
 */
    changeTeachSkill(skillId: number, toCharId: number): void;
    /**
 * 將技能加入技能清單中。
 * 
 * @param sk 技能。
 * @param ent 技能項目。
 */
    putSkillEntry(sk: any, ent: any): void;
    /**
 * 變更房間。
 * 
 * @param channel 頻道編號。
 * @param mapid_ 地圖ID。
 * @param room 是否是房間。
 */
    changeRoom(channel: number, mapid_: number, room: boolean): void;
    /**
 * 獲取標題效果。
 * 
 * @return 標題效果。
 */
    getTitleEffect(): number;
    /**
 * 獲取角色排名。
 * 
 * @param name 角色名稱。
 * @return 角色排名。
 */
    getCharacterRank(name: string): number;
    /**
 * 獲取角色集合。
 * 
 * @param name 角色名稱。
 * @return 角色集合。
 */
    getChrSet(name: string): any;
    /**
 * 獲取銀行金額。
 * 
 * @return 銀行金額。
 */
    getBank(): number;
    /**
 * 增加銀行金額。
 * 
 * @param add 要增加的金額。
 */
    addBank(add: number): void;
    /**
 * 重置任務點數。
 * 
 * @param id 任務ID。
 */
    resetQuestPoint(id: number): void;
    /**
 * 設置隊伍任務點數。
 * 
 * @param id 任務ID。
 * @param points 點數。
 */
    setPartyQuestPoint(id: number, points: number): void;
    /**
 * 增加隊伍任務點數。
 * 
 * @param id 任務ID。
 * @param points 點數。
 */
    addPartyQuestPoint(id: number, points: number): void;
    /**
 * 設置任務點數。
 * 
 * @param id 任務ID。
 * @param points 點數。
 */
    setQuestPoint(id: number, points: number): void;
    /**
 * 增加任務點數。
 * 
 * @param id 任務ID。
 * @param points 點數。
 */
    addQuestPoint(id: number, points: number): void;
    /**
 * 獲取任務點數。
 * 
 * @param id 任務ID。
 * @return 任務點數。
 */
    getQuestPoint(id: number): number;
    /**
 * 重置裝備耐久度的時間。
 */
    resetEquipDurabilitysTime(): void;
    /**
 * 獲取裝備耐久度的持續時間。
 * 
 * @return 裝備耐久度的持續時間。
 */
    getEquipDurabilitysTime(): number;
    /**
 * 賦予角色Cygnus相關任務。
 */
    giveCygnusQuest(): void;
    /**
 * 判斷角色是否正在滑翔中。
 * 
 * @return 如果正在滑翔中則返回true，否則返回false。
 */
    isGlidingDragon(): boolean;
    /**
 * 設置角色是否正在滑翔中。
 * 
 * @param set 設置為true表示正在滑翔中，設置為false表示非滑翔狀態。
 */
    setGildingDragon(set: boolean): void;
    /**
 * 處理技能對怪物造成的傷害。
 * 
 * @param monster 目標怪物。
 * @param attack 攻擊信息。
 * @param totDamageToOneMonster 傷害總量。
 * @param CheckRealMaxDamage 實際最大傷害。
 * @return 計算後的傷害總量。
 */
    handleSkillDamage(monster: any, attack: any, totDamageToOneMonster: number, CheckRealMaxDamage: number): number;
    /**
 * 增加角色的HP和MP。
 * 
 * @param hp 要增加的HP值
 * @param mp 要增加的MP值
 */
    addHPMP(hp: number, mp: number): void;
    /**
 * 添加Npc選擇。
 * 
 * @param add 要添加的Npc選擇值
 */
    addNpcSelect(add: number): void;
    /**
 * 清除Npc選擇。
 */
    clearNpcSelect(): void;
    /**
 * 檢查是否具有特定Npc選擇。
 * 
 * @param add 要檢查的Npc選擇值
 * @return 是否具有特定Npc選擇
 */
    isNpcSelect(add: number): boolean;
    /**
 * 設置內在能力技能是否已更改的標誌。
 */
    setInnerSkillChanged(): void;
    /**
 * 使用Aran角色的臨時屬性。
 */
    useTemporaryStats_Aran(): void;
    /**
 * 獲取角色的攻擊字型。
 * 
 * @return 攻擊字型值
 */
    getAttackFont(): number;
    /**
 * 設置角色的攻擊字型。
 * 
 * @param s 要設置的攻擊字型值
 */
    setAttackFont(s: number): void;
    /**
 * 增加捐贈點數記錄。
 * 
 * @param amount 捐贈點數金額
 */
    gainDonate(amount: number): void;
    /**
 * 檢查是否能夠使用 Shroud Walk 技能。
 * 
 * @return 是否能夠使用 Shroud Walk 技能
 */
    canShroudWalk(): boolean;
    /**
 * 發送靈魂值相關封包。
 */
    writeSoulPacket(): void;
    /**
 * 裝備靈魂武器。
 * 
 * @param equip 要裝備的武器
 */
    equipSoulWeapon(equip: any): void;
    unequipSoulWeapon(equip: any): void;
    unequipPotentialSkill(equip: any): void;
    isSoulWeapon(equip: any): boolean;
    /**
 * 獲取已裝備的靈魂技能。
 * 
 * @return 已裝備的靈魂技能ID
 */
    getEquippedSoulSkill(): number;
    getEquippedSoulPotential(): number;
    /**
 * 獲取靈魂值數量。
 * 
 * @return 靈魂值數量
 */
    getSoulCount(): any;
    /**
 * 設置靈魂值數量。
 * 
 * @param soulcount 靈魂值數量
 */
    setSoulCount(soulcount: any): void;
    /**
 * 增加靈魂值數量。
 */
    addSoulCount(): void;
    /**
 * 檢查是否裝備了具有靈魂附魔的武器。
 * 
 * @return 是否裝備了具有靈魂附魔的武器
 */
    checkSoulWeapon(): boolean;
    /**
 * 檢查靈魂狀態並處理相關邏輯。
 * 
 * @param useskill 是否使用技能
 */
    checkSoulState(useskill: boolean): void;
    /**
 * 獲取技能的冷卻剩餘時間限制。
 * 
 * @param skillid 技能ID
 * @return 冷卻剩餘時間
 */
    getCooldownLimit(skillid: number): number;
    /**
 * 獲取所有冷卻中的技能的列表。
 * 
 * @return 冷卻中的技能列表
 */
    getAllCooldowns(): any;
    /**
 * 獲取攻擊連擊數。
 * 
 * @return 攻擊連擊數
 */
    getAttackCombo(): any;
    /**
 * 設置攻擊連擊數。
 * 
 * @param value 攻擊連擊數值
 */
    setAttackCombo(value: any): void;
    /**
 * 處理 Kaiser 的連擊相關邏輯。
 */
    handleKaiserCombo(): void;
    /**
 * 重置 Kaiser 的連擊數。
 */
    resetKaiserCombo(): void;
    /**
 * 設置 Luminous 的光暗模式。
 * 
 * @param skillid 技能ID
 */
    setLuminousMode(skillid: number): void;
    /**
 * 切換 Luminous 的光暗模式。
 * 
 * @param skillid 技能ID
 */
    changeLuminousMode(skillid: number): void;
    run(): void;
    /**
 * 處理 Luminous 的相關邏輯。
 * 
 * @param skillid 技能ID
 */
    handleLuminous(skillid: number): void;
    /**
 * 重置 Luminous 的光暗平衡相關數值。
 */
    resetRunningDarks(): void;
    /**
 * 獲取 Luminous 的光能數值。
 * 
 * @return 光能數值
 */
    getRunningLight(): number;
    /**
 * 獲取 Luminous 的暗能數值。
 * 
 * @return 暗能數值
 */
    getRunningDark(): number;
    /**
 * 獲取 Luminous 的光能槽位數值。
 * 
 * @return 光能槽位數值
 */
    getLightGauge(): number;
    /**
 * 獲取 Luminous 的暗能槽位數值。
 * 
 * @return 暗能槽位數值
 */
    getDarkGauge(): number;
    /**
 * 檢查 Luminous 是否處於光暗平衡狀態。
 * 
 * @return 是否處於光暗平衡狀態
 */
    isLuminousBalance(): boolean;
    /**
 * 獲取 Luminous 的光暗狀態。
 * 
 * @return 光暗狀態
 */
    getLuminousState(): number;
    /**
 * 設置 Luminous 的光暗狀態。
 * 
 * @param luminousState 光暗狀態
 */
    setLuminousState(luminousState: number): void;
    /**
 * 獲取 Buff 的開始時間（根據 Buff 的效果）。
 * 
 * @param effect Buff 效果
 * @return Buff 開始時間
 */
    getBuffedStartTime(effect: any): number;
    /**
 * 處理 Dark Crescendo（Luminous技能）的相關邏輯。
 */
    handleDarkCrescendo(): void;
    /**
 * 處理 Black Blessing（Luminous技能）的相關邏輯。
 */
    handleBlackBless(): void;
    /**
 * 處理失去 Black Blessing（Luminous技能）的相關邏輯，根據失去的次數。
 * 
 * @param howmany 失去的次數
 */
    handleBlackBlessLost(howmany: number): void;
    /**
 * 离婚的相關邏輯。
 * 
 * @param self 是否是自己的角色
 */
    divorce(self: boolean): void;
    /**
 * 獲取NPC潛力訊息。
 * 
 * @return NPC潛力訊息
 */
    getNpcPotentialMessage(): string;
    /**
 * 設置NPC潛力訊息。
 * 
 * @param st 要設置的潛力訊息
 */
    setNpcPotentialMessage(st: string): void;
    /**
 * 檢查是否可以使用復活道具（Revive Item）。
 * 
 * @return 是否可以使用復活道具
 */
    canUseReviveItem(): boolean;
    /**
 * 獲取剩餘的 HSP（超級技能點）陣列。
 * 
 * @return 剩餘的 HSP 陣列
 */
    getRemainingHSps(): any;
    /**
 * 獲取特定模式下的剩餘 HSP。
 * 
 * @param mode HSP 模式
 * @return 特定模式下的剩餘 HSP
 */
    getRemainingHSp(mode: number): number;
    /**
 * 設置特定模式下的剩餘 HSP 數量。
 * 
 * @param mode HSP 模式
 * @param amount 要設置的數量
 */
    setRemainingHSp(mode: number, amount: number): void;
    /**
 * 增加特定模式下的 HSP 數量。
 * 
 * @param mode HSP 模式
 * @param hsp 要增加的 HSP 數量
 */
    gainHSP(mode: number, hsp: number): void;
    /**
 * 處理地圖殺怪的相關邏輯。
 */
    handleMapKillAll(): void;
    /**
 * 添加已裝備的物品。
 * 
 * @param itemid 要添加的物品ID
 */
    addEquipped(itemid: number): void;
    /**
 * 檢查是否擁有 Force Shield（特殊裝備）並進行相應處理。
 */
    checkForceShield(): void;
    /**
 * 設置是否自動撿物。
 * 
 * @param a 要設置的自動撿物狀態
 */
    setAutoPickup(a: boolean): void;
    /**
 * 檢查是否開啟自動撿物功能。
 * 
 * @return 是否開啟自動撿物
 */
    isAutoPickup(): boolean;
    handleRechargeEffect(effect: any, skillId: number, special: boolean): void;
    getRechargeAdd(effect: any): number;
    /**
 * 設置是否正在使用 KillMob_Temp。
 * 
 * @param use 要設置的使用狀態
 */
    setKillMob_Temp_using(use: boolean): void;
    /**
 * 獲取是否正在使用 KillMob_Temp。
 * 
 * @return 是否正在使用 KillMob_Temp
 */
    getKillMob_Temp_using(): boolean;
    /**
 * 獲取 ReChargeFalse 數量。
 * 
 * @return ReChargeFalse 數量
 */
    getReChargeFalse(): number;
    /**
 * 增加 ReChargeFalse 數量。
 */
    addReChargeFalse(): void;
    /**
 * 重置 ReChargeFalse 數量。
 */
    resetReChargeFalse(): void;
    /**
 * 獲取 ReChargeFalse_2 數量。
 * 
 * @return ReChargeFalse_2 數量
 */
    getReChargeFalse_2(): number;
    /**
 * 增加 ReChargeFalse_2 數量。
 */
    addReChargeFalse_2(): void;
    /**
 * 重置 ReChargeFalse_2 數量。
 */
    resetReChargeFalse_2(): void;
    /**
 * 檢查是否已登入。
 * 
 * @return 是否已登入
 */
    isLoggedIn(): boolean;
    /**
 * 設置登入狀態。
 * 
 * @param set 要設置的狀態
 */
    setLoggedIn(set: boolean): void;
    /**
 * 添加最大傷害值。
 * 
 * @param add 要添加的值
 */
    addMaxDamage(add: number): void;
    /**
 * 獲取總傷害值。
 * 
 * @return 總傷害值
 */
    getTotalDamage(): number;
    /**
 * 獲取物品最大傷害值。
 * 
 * @return 物品最大傷害值
 */
    getItemMaxDamage(): number;
    /**
 * 設置物品最大傷害值。
 * 
 * @param set 要設置的值
 */
    setItemMaxDamage(set: number): void;
    getItemSummonDamage(): number;
    /**
 * 設置物品最大傷害值。
 * 
 * @param set 要設置的值
 */
    setItemSummonDamage(set: number): void;
    /**
 * 設置 ARC 額外傷害。
 * 
 * @param set 要設置的值
 */
    setArcDamage(set: number): void;
    /**
 * 獲取 ARC 額外傷害。
 * 
 * @return ARC 額外傷害
 */
    getArcDamage(): number;
    /**
 * 獲取總額外傷害。
 * 
 * @return 總額外傷害
 */
    getTotalExtraDamage(): number;
    /**
 * 設置 ARC BOSS 傷害。
 * 
 * @param set 要設置的值
 */
    setArcBossDamage(set: number): void;
    /**
 * 獲取 ARC BOSS 傷害。
 * 
 * @return ARC BOSS 傷害
 */
    getArcBossDamage(): number;
    /**
 * 獲取總 BOSS 傷害。
 * 
 * @return 總 BOSS 傷害
 */
    getTotalBossDamage(): number;
    /**
 * 設置 ARC 最大傷害。
 * 
 * @param set 要設置的值
 */
    setArcMaxDamage(set: number): void;
    /**
 * 獲取 ARC 最大傷害。
 * 
 * @return ARC 最大傷害
 */
    getArcMaxDamage(): number;
    /**
 * 設置 ARC 最大生命值。
 * 
 * @param addhp 要添加的生命值
 */
    setArcMaxHP(addhp: number): void;
    /**
 * 獲取 ARC 最大生命值。
 * 
 * @return ARC 最大生命值
 */
    getArcMaxHP(): number;
    /**
 * 獲取最大傷害。
 * 
 * @return 最大傷害
 */
    getMaxDamage(): number;
    /**
 * 設置最大傷害。
 * 
 * @param set 要設置的值
 */
    setMaxDamage(set: number): void;
    /**
 * 添加最大傷害精確度。
 * 
 * @param add 要添加的值
 */
    addMaxDamageAcc(add: number): void;
    /**
 * 獲取最大傷害精確度。
 * 
 * @return 最大傷害精確度
 */
    getMaxDamageAcc(): number;
    /**
 * 設置最大傷害精確度。
 * 
 * @param set 要設置的值
 */
    setMaxDamageAcc(set: number): void;
    /**
 * 設置檢查選項。
 * 
 * @param set 要設置的值
 */
    setCheckSelection(set: boolean): void;
    /**
 * 檢查是否已啟用檢查選項。
 * 
 * @return 若已啟用檢查選項，則為 true；否則為 false
 */
    isCheckSelection(): boolean;
    /**
 * 設置檢查選項的最小值。
 * 
 * @param set 要設置的值
 */
    setCheckSelectionMin(set: number): void;
    /**
 * 獲取檢查選項的最小值。
 * 
 * @return 檢查選項的最小值
 */
    getCheckSelectionMin(): number;
    /**
 * 設置檢查選項的最大值。
 * 
 * @param set 要設置的值
 */
    setCheckSelectionMax(set: number): void;
    /**
 * 獲取檢查選項的最大值。
 * 
 * @return 檢查選項的最大值
 */
    getCheckSelectionMax(): number;
    /**
 * 獲取Hyper技能點（HSP）。
 */
    obtainHyperSP(): void;
    /**
 * 將物品冷卻時間應用到客戶端。
 */
    applyItemCooldowns(): void;
    /**
 * 移除物品冷卻時間效果。
 */
    removeItemCooldowns(): void;
    /**
 * 獲取物品冷卻時間。
 * 
 * @param itemId 物品ID
 * @return 物品冷卻時間
 */
    getItemCooldown(itemId: number): number;
    /**
 * 添加物品冷卻時間效果。
 * 
 * @param itemId 物品ID
 * @param milsec 冷卻時間（毫秒）
 */
    addItemCooldown(itemId: number, milsec: number): void;
    /**
 * 添加技能位置座標。
 * 
 * @param p 技能位置座標
 */
    addSkillPosition(p: any): void;
    /**
 * 獲取技能位置座標清單。
 * 
 * @return 技能位置座標清單
 */
    getSkillPosition(): any;
    /**
 * 清空技能位置座標清單。
 */
    clearSkillPosition(): void;
    /**
 * 獲取指定類型背包的空位數量。
 * 
 * @param type 背包類型
 * @return 空位數量
 */
    getSpace(type: number): any;
    useSpReset(): void;
    SelectAuction(): string;
    getAuctionItems(): any;
    giveAuction(index: number): string;
    /**
 * 獲取監獄解封時間的日曆對象。
 * 
 * @return 監獄解封時間的日曆對象
 */
    getJailBanCalendar(): any;
    /**
 * 檢查是否處於監獄封鎖狀態。
 * 
 * @return 如果處於監獄封鎖狀態則返回true，否則返回false
 */
    isJailBan(): boolean;
    /**
 * 解封角色並重置監獄封鎖時間。
 */
    unJail(): void;
    /**
 * 獲取監獄封鎖的原因代碼。
 * 
 * @return 監獄封鎖的原因代碼
 */
    getJailBanResult(): number;
    /**
 * 切換地圖內角色的顯示。
 */
    setClosePlayer(): void;
    /**
 * 檢查地圖內角色是否被隱藏。
 * 
 * @return 如果角色被隱藏則返回true，否則返回false
 */
    isClosePlayer(): boolean;
    /**
 * 切換角色攻擊特效的顯示。
 */
    setCloseAttackEffect(): void;
    /**
 * 檢查角色是否關閉了攻擊特效的顯示。
 * 
 * @return 如果角色關閉了攻擊特效的顯示則返回true，否則返回false
 */
    isCloseAttackEffect(): boolean;
    /**
 * 設置魔法轉盤獎勵清單。
 * 
 * @param set 魔法轉盤獎勵清單
 */
    setMagicPrize(set: any): void;
    /**
 * 清空魔法轉盤獎勵清單。
 */
    clearMagicPrize(): void;
    /**
 * 增加魔法輪獎勵。
 * 
 * @param add 要增加的獎勵值。
 */
    addMagicPrize(add: number): void;
    /**
 * 獲取魔法輪獎勵列表。
 * 
 * @return 魔法輪獎勵列表。
 */
    getMagicPrize(): any;
    /**
 * 設定魔法輪獎勵索引。
 * 
 * @param index 要設定的索引值。
 */
    setMagicWheelReward(index: any): void;
    /**
 * 設定是否開啟魔法廣播。
 * 
 * @param set 要設定的值。
 */
    setMagicBroadcast(set: boolean): void;
    /**
 * 獲取魔法廣播設定值。
 * 
 * @return 魔法廣播設定值。
 */
    getMagicBroadcast(): boolean;
    /**
 * 獲取魔法輪獎勵索引。
 * 
 * @return 魔法輪獎勵索引。
 */
    getMagicWheelReward(): any;
    /**
 * 設定魔法蛋獎勵列表。
 * 
 * @param set 要設定的列表。
 */
    setEggPrize(set: any): void;
    /**
 * 清除魔法蛋獎勵列表。
 */
    clearEggPrize(): void;
    /**
 * 增加魔法蛋獎勵。
 * 
 * @param add 要增加的獎勵值。
 */
    addEggPrize(add: number): void;
    /**
 * 獲取魔法蛋獎勵列表。
 * 
 * @return 魔法蛋獎勵列表。
 */
    getEggPrize(): any;
    /**
 * 設定寵物吸怪動畫是否關閉。
 */
    setPetVacAnimationRemove(): void;
    /**
 * 判斷寵物吸怪動畫是否關閉。
 * 
 * @return 如果關閉則返回 true，否則返回 false。
 */
    isPetVacAnimationRemove(): boolean;
    /**
 * 判斷是否可以使用推筒子。
 * 
 * @return 如果冷卻時間已過則返回 true，否則返回 false。
 */
    canSuIn(): boolean;
    /**
 * 增加推筒子冷卻時間。
 */
    addSuIn(): void;
    /**
 * 判斷是否已經給予名聲。
 * 
 * @return 如果在一天內已經給予名聲則返回 true，否則返回 false。
 */
    giveFameAlready(): boolean;
    /**
 * 獲取全圖打時間。
 * 
 * @return 全圖打時間。
 */
    getMapAttackTime(): number;
    /**
 * 設定全圖打時間。
 * 
 * @param set 要設定的時間值。
 */
    setMapAttackTime(set: number): void;
    /**
 * 增加追怪授權時間。
 * 
 * @param set 要增加的時間值。
 */
    addMonsterAttackTime(set: number): void;
    /**
 * 獲取追怪授權剩餘時間。
 * 
 * @return 追怪授權剩餘時間。
 */
    getMonsterAttackTime(): number;
    /**
 * 設定追怪授權時間。
 * 
 * @param set 要設定的時間值。
 */
    setMonsterAttackTime(set: number): void;
    /**
 * 更新攻擊時間訊息。
 */
    renewAttackTime(): void;
    /**
 * 增加全圖打授權時間。
 * 
 * @param set 要增加的時間值。
 */
    addMapAttackTime(set: number): void;
    /**
 * 設定NPC視窗是否開啟。
 * 
 * @param set 要設定的值。
 */
    setNpcWindowed(set: boolean): void;
    /**
 * 獲取NPC視窗是否開啟的設定值。
 * 
 * @return NPC視窗是否開啟的設定值。
 */
    getNpcWindowed(): boolean;
    /**
 * 設定是否監聽公會聊天訊息。
 * 
 * @param set 要設定的值。
 */
    setGuildChat(set: boolean): void;
    /**
 * 獲取是否監聽公會聊天訊息的設定值。
 * 
 * @return 是否監聽公會聊天訊息的設定值。
 */
    getGuildChat(): boolean;
    /**
 * 設定是否監聽聯盟聊天訊息。
 * 
 * @param set 要設定的值。
 */
    setAllianceChat(set: boolean): void;
    /**
 * 獲取是否監聽聯盟聊天訊息的設定值。
 * 
 * @return 是否監聽聯盟聊天訊息的設定值。
 */
    getAllianceChat(): boolean;
    /**
 * 設定是否監聽普通聊天訊息。
 * 
 * @param set 要設定的值。
 */
    setNormalChat(set: boolean): void;
    /**
 * 獲取是否監聽普通聊天訊息的設定值。
 * 
 * @return 是否監聽普通聊天訊息的設定值。
 */
    getNormalChat(): boolean;
    /**
 * 設定是否監聽交易聊天訊息。
 * 
 * @param set 要設定的值。
 */
    setTradeChat(set: boolean): void;
    /**
 * 獲取是否監聽交易聊天訊息的設定值。
 * 
 * @return 是否監聽交易聊天訊息的設定值。
 */
    getTradeChat(): boolean;
    /**
 * 設定是否監聽密語聊天訊息。
 * 
 * @param set 要設定的值。
 */
    setWhisperChat(set: boolean): void;
    /**
 * 獲取是否監聽密語聊天訊息的設定值。
 * 
 * @return 是否監聽密語聊天訊息的設定值。
 */
    getWhisperChat(): boolean;
    /**
 * 設定是否監聽好友聊天訊息。
 * 
 * @param set 要設定的值。
 */
    setFriendChat(set: boolean): void;
    /**
 * 獲取是否監聽好友聊天訊息的設定值。
 * 
 * @return 是否監聽好友聊天訊息的設定值。
 */
    getFriendChat(): boolean;
    /**
 * 設定是否開啟找人開關功能。
 * 
 * @param set 要設定的值。
 */
    setWhisperFindClose(set: boolean): void;
    /**
 * 獲取是否開啟找人開關功能的設定值。
 * 
 * @return 是否開啟找人開關功能的設定值。
 */
    getWhisperFindClose(): boolean;
    /**
 * 設定惡意之鎚的數值。
 * 
 * @param val 要設定的值。
 */
    setViciousHammerValue(val: number): void;
    /**
 * 獲取惡意之鎚的數值。
 * 
 * @return 惡意之鎚的數值。
 */
    getViciousHammerValue(): number;
    /**
 * 設定裝備的物理攻擊值。
 * 
 * @param set 要設定的值。
 */
    setEquipWatk(set: number): void;
    /**
 * 設定裝備的魔法攻擊值。
 * 
 * @param set 要設定的值。
 */
    setEquipMatk(set: number): void;
    /**
 * 設定裝備的物理防禦值。
 * 
 * @param set 要設定的值。
 */
    setEquipWdef(set: number): void;
    /**
 * 設定裝備的魔法防禦值。
 * 
 * @param set 要設定的值。
 */
    setEquipMdef(set: number): void;
    /**
 * 設定裝備的命中值。
 * 
 * @param set 要設定的值。
 */
    setEquipAcc(set: number): void;
    /**
 * 設定裝備的迴避值。
 * 
 * @param set 要設定的值。
 */
    setEquipAvoid(set: number): void;
    /**
 * 設定裝備的速度值。
 * 
 * @param set 要設定的值。
 */
    setEquipSpeed(set: number): void;
    /**
 * 設定裝備的跳躍值。
 * 
 * @param set 要設定的值。
 */
    setEquipJump(set: number): void;
    /**
 * 設定裝備的敏捷值。
 * 
 * @param set 要設定的值。
 */
    setEquipDex(set: number): void;
    /**
 * 設定裝備的智力值。
 * 
 * @param set 要設定的值。
 */
    setEquipInt(set: number): void;
    /**
 * 設定裝備的幸運值。
 * 
 * @param set 要設定的值。
 */
    setEquipLuk(set: number): void;
    /**
 * 設定裝備的力量值。
 * 
 * @param set 要設定的值。
 */
    setEquipStr(set: number): void;
    /**
 * 獲取裝備的物理攻擊值。
 * 
 * @return 裝備的物理攻擊值。
 */
    getEquipWatk(): any;
    /**
 * 獲取裝備的魔法攻擊值。
 * 
 * @return 裝備的魔法攻擊值。
 */
    getEquipMatk(): any;
    /**
 * 獲取裝備的物理防禦值。
 * 
 * @return 裝備的物理防禦值。
 */
    getEquipWdef(): any;
    /**
 * 獲取裝備的魔法防禦值。
 * 
 * @return 裝備的魔法防禦值。
 */
    getEquipMdef(): any;
    /**
 * 獲取裝備的速度值。
 * 
 * @return 裝備的速度值。
 */
    getEquipSpeed(): any;
    /**
 * 獲取裝備的跳躍值。
 * 
 * @return 裝備的跳躍值。
 */
    getEquipJump(): any;
    /**
 * 獲取裝備的命中值。
 * 
 * @return 裝備的命中值。
 */
    getEquipAcc(): any;
    /**
 * 獲取裝備的迴避值。
 * 
 * @return 裝備的迴避值。
 */
    getEquipAvoid(): any;
    /**
 * 獲取裝備的敏捷值。
 * 
 * @return 裝備的敏捷值。
 */
    getEquipDex(): any;
    /**
 * 獲取裝備的智力值。
 * 
 * @return 裝備的智力值。
 */
    getEquipInt(): any;
    /**
 * 獲取裝備的幸運值。
 * 
 * @return 裝備的幸運值。
 */
    getEquipLuk(): any;
    /**
 * 獲取裝備的力量值。
 * 
 * @return 裝備的力量值。
 */
    getEquipStr(): any;
    /**
 * 更新攻擊時間。
 * 
 * @param skillid 技能ID。
 */
    renewAttack(skillid: number): void;
    /**
 * 檢查角色是否正在進行攻擊。
 * 
 * @return 如果角色正在進行攻擊則返回 true，否則返回 false。
 */
    isAttack(): boolean;
    /**
 * 檢查角色是否正在進行攻擊。
 * 
 * @return 如果角色正在進行攻擊則返回 true，否則返回 false。
 */
    isMinuteAttack(): boolean;
    renewAttackDamage(): void;
    /**
 * 更新技能攻擊時間。
 */
    renewSkillAttack(): void;
    /**
 * 檢查角色是否正在進行技能攻擊。
 * 
 * @return 如果角色正在進行技能攻擊則返回 true，否則返回 false。
 */
    isSkillAttack(): boolean;
    /**
 * 更新承受傷害時間。
 */
    renewTakeDamageTime(): void;
    /**
 * 檢查角色是否正在承受傷害。
 * 
 * @return 如果角色正在承受傷害則返回 true，否則返回 false。
 */
    isTakeDamage(): boolean;
    /**
 * 取消騎乘狀態。
 */
    cancelRiding(): void;
    /**
 * 檢查角色是否正在騎乘。
 * 
 * @return 如果角色正在騎乘則返回 true，否則返回 false。
 */
    isRiding(): boolean;
    /**
 * 取得角色的暱稱。
 * 
 * @return 角色的暱稱。
 */
    getNickName(): string;
    /**
 * 設定角色的暱稱。
 * 
 * @param nick 要設定的暱稱。
 */
    setNickName(nick: string): void;
    /**
 * 傳送黃色聊天訊息給玩家。
 * 
 * @param s 要傳送的訊息內容。
 */
    yellowMessage(s: string): void;
    /**
 * 設定是否啟用「尿尿死掉」特性。
 * 
 * @param set 要設定的布林值。
 */
    setPeeDead(set: boolean): void;
    /**
 * 取得是否啟用了「尿尿死掉」特性。
 * 
 * @return 是否啟用了「尿尿死掉」特性。
 */
    getPeeDead(): boolean;
    /**
 * 檢查角色的儲存空間是否已滿。
 * 
 * @return 如果儲存空間已滿則返回 true，否則返回 false。
 */
    isStorageFull(): boolean;
    /**
 * 設定轉生怪物。
 * 
 * @param mob 要設定的轉生怪物。
 */
    setReincarnationMob(mob: any): void;
    setRespawnPointMob(mob: any): void;
    /**
 * 取得轉生怪物。
 * 
 * @return 轉生怪物物件。
 */
    getReincarnationMob(): any;
    getRespawnPointMob(): any;
    /**
 * 取得競標選擇。
 * 
 * @return 競標選擇的數值。
 */
    getAuctionSelect(): number;
    /**
 * 設定競標選擇。
 * 
 * @param i 要設定的競標選擇的數值。
 */
    setAuctionSelect(i: number): void;
    /**
 * 恢復角色的生命值和魔法值到最大值。
 */
    heal(): void;
    /**
 * 從玩家的物品欄移除指定物品。
 * 
 * @param item 要移除的物品。
 */
    removeItem(item: any): void;
    /**
 * 從玩家的物品欄移除指定物品。
 * 
 * @param itemid 物品的ID。
 * @param position 物品的位置。
 * @param quantity 物品的數量。
 */
    removeItem(itemid: number, position: number, quantity: number): void;
    /**
 * 設定特定頁面的額外力量百分比。
 * 
 * @param page 要設定力量百分比的頁面。
 */
    setExtraStr(page: number): void;
    /**
 * 獲取該角色的額外力量百分比。
 * 
 * @return 額外力量百分比。
 */
    getExtraStr(): number;
    /**
 * 設定特定頁面的額外智力百分比。
 * 
 * @param page 要設定智力百分比的頁面。
 */
    setExtraInt(page: number): void;
    /**
 * 獲取該角色的額外智力百分比。
 * 
 * @return 額外智力百分比。
 */
    getExtraInt(): number;
    /**
 * 設定特定頁面的額外幸運百分比。
 * 
 * @param page 要設定幸運百分比的頁面。
 */
    setExtraLuk(page: number): void;
    /**
 * 獲取該角色的額外幸運百分比。
 * 
 * @return 額外幸運百分比。
 */
    getExtraLuk(): number;
    /**
 * 設定特定頁面的額外敏捷百分比。
 * 
 * @param page 要設定敏捷百分比的頁面。
 */
    setExtraDex(page: number): void;
    /**
 * 獲取該角色的額外敏捷百分比。
 * 
 * @return 額外敏捷百分比。
 */
    getExtraDex(): number;
    /**
 * 設定特定頁面的額外力量值。
 * 
 * @param page 要設定額外力量值的頁面。
 */
    setPlusStr(page: number): void;
    /**
 * 獲取該角色的額外力量值。
 * 
 * @return 額外力量值。
 */
    getPlusStr(): number;
    /**
 * 設定特定頁面的額外智力值。
 * 
 * @param page 要設定額外智力值的頁面。
 */
    setPlusInt(page: number): void;
    /**
 * 獲取該角色的額外智力值。
 * 
 * @return 額外智力值。
 */
    getPlusInt(): number;
    /**
 * 設定額外的幸運
 * 
 * @param page
 */
    setPlusLuk(page: number): void;
    /**
 * 獲得額外的幸運
 * 
 * @return
 */
    getPlusLuk(): number;
    /**
 * 設定額外的敏捷
 * 
 * @param page
 */
    setPlusDex(page: number): void;
    /**
 * 獲得額外的敏捷
 * 
 * @return
 */
    getPlusDex(): number;
    /**
 * 設定額外的頂傷
 * 
 * @param page
 */
    setExtraMaxDamage(page: number): void;
    /**
 * 獲得額外的頂傷
 * 
 * @return
 */
    getExtraMaxDamage(): number;
    /**
 * 設定額外的傷害%
 * 
 * @param page
 */
    setExtraDamage(page: number): void;
    /**
 * 獲得額外的傷害%
 * 
 * @return
 */
    getExtraDamage(): number;
    /**
 * 設定額外的boss傷害%
 * 
 * @param page
 */
    setExtraBossDamage(page: number): void;
    /**
 * 獲得額外的boss傷害%
 * 
 * @return
 */
    getExtraBossDamage(): number;
    getEquipExtraStat(): any;
    setExtraStun(set: number): void;
    setExtraPoison(set: number): void;
    setExtraSeal(set: number): void;
    setExtraFreeze(set: number): void;
    setExtraMeso(set: number): void;
    getExtraStun(): number;
    getExtraPoison(): number;
    getExtraSeal(): number;
    getExtraFreeze(): number;
    getExtraMeso(): number;
    getEquipDisease(): any;
    /**
 * 獲得身上的裝備給予的hp回復加成率
 * 
 * @return
 */
    getEquipHealHpRate(): number;
    /**
 * 獲得身上的裝備給予的p回復加成率
 * 
 * @return
 */
    getEquipHealMpRate(): number;
    /**
 * 獲得身上的裝備給予的總經驗機率
 * 
 * @return
 */
    getEquipExp(): number;
    /**
 * 獲得身上的裝備給予的總楓幣機率
 * 
 * @return
 */
    getEquipMeso(): number;
    /**
 * 獲得身上的裝備給予的總掉落機率
 * 
 * @return
 */
    getEquipDrop(): number;
    /**
 * 獲得身上的裝備給予的總冰凍機率(打在怪物上)
 * 
 * @return
 */
    getEquipFreeze(): number;
    /**
 * 獲得身上的裝備給予的總毒機率(打在怪物上)
 * 
 * @return
 */
    getEquipPoison(): number;
    /**
 * 獲得身上的裝備給予的總封印機率(打在怪物上)
 * 
 * @return
 */
    getEquipSeal(): number;
    /**
 * 獲得身上的裝備給予的總暈眩機率(打在怪物上)
 * 
 * @return
 */
    getEquipStun(): number;
    isMagicWheelStart(): boolean;
    setMagicWheelStart(set: boolean): void;
    /**
 * 獲得好友清單數量
 * 
 * @return
 */
    getBuddySize(): number;
    setInventoryNowPage(type: number, page: number): void;
    getInventoryNowPage(type: number): number;
    setInventoryPage(type: number, page: number): void;
    getInventoryPage(type: number): number;
    /**
 * 重製背包最大欄位
 */
    renewSlotLimit(): void;
    /**
 * 重製技能組合欄位
 */
    ResetSkillMacro(): void;
    /**
 * 重製寵物技能
 */
    ResetPetSkills(): void;
    loadSpecialStats(): void;
    getOnlineTimeRecord(): number;
    /**
 * 獲得在線的時間(毫秒)
 * 
 * @return
 */
    getOnlineTimes(): number;
    getTransferItem(): boolean;
    setTransferItem(set: boolean): void;
    /**
 * 獲得monsterbook的等級
 * 
 * @return
 */
    getBooksLv(): number;
    /**
 * 更新角色移動
 */
    setNoMove(): void;
    /**
 * 獲得角色是否沒有移動
 * 
 * @return
 */
    getNoMove(): boolean;
    getDragonBall(): any;
    getTransferItem(ball: number): number;
    setDragonBall(ball: number, set: number): void;
    /**
 * 獲得小鋼珠中獎的代碼
 * 
 * @return
 */
    getBeanReward(): number;
    /**
 * 設定小鋼珠中獎的物品
 * 
 * @param set
 */
    setBeanReward(set: number): void;
    /**
 * 暫停自動洗潛
 */
    stopPotential(): void;
    /**
 * 跑自動洗潛(用不太到)
 */
    doPotential(): void;
    /**
 * 自動洗潛能的設定函數
 * 
 * @param timesa
 * @param speeda
 * @param eqa
 * @param statea
 * @param cubea
 * @param magnifya
 * @param potentiala
 * @param potentiala2
 */
    startPotential(timesa: number, speeda: number, eqa: any, statea: number, cubea: number, magnifya: number, potentiala: number, potentiala2: number): void;
    /**
 * 顯示WZ特效
 * 
 * @param path
 */
    showEffect(path: string): void;
    /**
 * 獲得結婚資料
 * 
 * @return
 */
    getMarriage(): any;
    canChangeFeather(): boolean;
    canUseLunarFunc(): boolean;
    setUseLunarFunc(enable: boolean): void;
    /**
 * 用道具代碼取得身上的道具IItem
 * 
 * @param itemid
 * @return
 */
    getItem(itemid: number): any;
    /**
 * 發送動態勳章的封包
 */
    sendMedalPacket(): void;
    /**
 * 發送動態稱號的封包
 */
    sendTitlePacket(): void;
    warpEventInstance(): void;
    disposeEventInstance(eim: any): void;
    warpEventInstance2(): void;
    /**
 * 回到目前正在進行的event
 */
    warpEvent(): void;
    /**
 * 噴楓幣出來
 * 
 * @param meso
 */
    dropMeso(meso: number): void;
    /**
 * 顯示wz特效
 * 
 * @param data
 */
    showWZEffect(data: string): void;
    /**
 * 顯示wz特效
 * 
 * @param data
 */
    showWZEffectNew(data: string): void;
    /**
 * 
 * @param skill
 * @param level
 */
    useSkill(skill: number, level: number): void;
    /**
 * 設定characterset的string值
 * 
 * @param set
 * @param value
 */
    setCharacterSetString(set: string, value: string): void;
    setCharacterSetStringAcc(set: string, value: string): void;
    /**
 * 獲得characterset的string值
 * 
 * @param set
 * @return
 */
    getCharacterSetString(set: string): string;
    getCharacterSetStringAcc(set: string): string;
    getNowCashItem(): string;
    removeCashItem(item: string): void;
    addNowCashItem(): void;
    getAllCashItemString(): any;
    getAllCashItem(): any;
    setCashItem(s: string): void;
    getCashItem(): any;
    /**
 * 獲得所有小屋物件
 * 
 * @return
 */
    getCharacterMapReactor(): any;
    /**
 * 增加小屋的地圖物件
 * 
 * @param reactorid
 * @param x
 * @param y
 */
    addCharacterMapReactor(reactorid: number, x: number, y: number): void;
    /**
 * 移除指定的小屋物件
 * 
 * @param reactorid
 * @param x
 * @param y
 */
    removeCharacterMapReactor(reactorid: number, x: number, y: number): void;
    /**
 * 隨身倉庫的所有物品
 * 
 * @return
 */
    getCharacterItem(): any;
    /**
 * 獲得隨身倉庫的道具
 * 
 * @param item
 */
    addCharacterItem(item: any): void;
    /**
 * 移除隨身倉庫的道具
 * 
 * @param item
 * @return
 */
    removeCharacterItem(item: any): boolean;
    /**
 * 移除所有小屋物件
 */
    removeAllReactor(): void;
    /**
 * 設定精靈商人自動釣魚
 * 
 * @param set
 */
    setMervhantAutoFish(set: boolean): void;
    /**
 * 是否精靈商人自動釣魚
 * 
 * @return
 */
    isMerchantAutoFish(): boolean;
    /**
 * 獲得身上裝備的總星力
 * 
 * @return
 */
    getTotalStarLevel(): number;
    setAIMode(set: boolean): void;
    isAIMode(): boolean;
    /**
 * 登出遊戲
 */
    loggedout(): void;
    /**
 * 獲得角色總經驗倍率
 * 
 * @return
 */
    getTotalExpRate(): number;
    /**
 * 獲得自動販賣是否開啟
 * 
 * @return
 */
    gerAutoSell(): boolean;
    /**
 * 設定自動販賣開關
 * 
 * @param set
 */
    setAutoSell(set: boolean): void;
    setGuildStorage(set: any): void;
    /**
 * 獲得公會的倉庫
 * 
 * @return
 */
    getGuildStorage(): any;
    /**
 * 獲得怪物卡的數量
 * 
 * @param cardid
 * @return
 */
    getMonsterCard(cardid: number): number;
    /**
 * 獲得拍賣的MTSCart
 * 
 * @return
 */
    getMTSCart(): any;
    /**
 * 判斷玩家是否在線上
 * 
 * @return
 */
    isOnline(): boolean;
    /**
 * 獲得玩家最大等級
 * 
 * @return
 */
    getMaxLevel(): number;
    /**
 * 設定玩家最大等級
 * 
 * @return
 */
    setMaxLevel(set: number): void;
    /**
 * 獲得玩家背景
 * 
 * @return
 */
    getCharUI(): number;
    /**
 * 設定玩家背景
 * 
 * @return
 */
    setCharUI(set: number): void;
    isChangingMap(): boolean;
    getBossKill(): number;
    getTodayBossKill(): number;
    canPetVac(): boolean;
    canPetVac(mob: any): boolean;
    useItem(itemid: number): void;
    /**
 * 取消技能效果
 * 
 * @return
 */
    cancelBuff(skillid: number): void;
    showBuffItemEffect(itemid: number): void;
    removeMonsterBuff(status: any): void;
    removeAllMonsterBuff(): void;
    warpGuildMap(mapid: number): void;
    warpGuildMap(mapid: number, Practicemap: boolean): void;
    /**
 * 獲得正在攻擊的怪物
 * 
 * @return
 */
    getMonster(): any;
    setAttackMonster(mob: any): void;
    startAnti(): void;
    playSound(broadcast: boolean, sound: string): void;
    spawnCharacterMapReactor(id: number, x: number, y: number): void;
    isEnglishMode(): boolean;
    setBuffStatLog(show: boolean): void;
    getBuffStatLog(): boolean;
    getDamageRate(): number;
    setDamageRate(set: number): void;
    getEquippedList(): any;
    setMixHair(hairid: number): void;
    getMixHair(): number;
    setMixHairColor(hairid: number): void;
    getMixHairColor(): number;
    setMixHairRate(hairid: number): void;
    getMixHairRate(): number;
    setMixFace(hairid: number): void;
    getMixFace(): number;
    setMixFaceColor(hairid: number): void;
    getMixFaceColor(): number;
    setMixFaceRate(hairid: number): void;
    getMixFaceRate(): number;
    setSummonMaxDamage(set: number): void;
    sendSummonMaxDamage(): void;
    getTotalSummonMaxDamage(): number;
    getSummonMaxDamage(): number;
    addSummonMaxDamage(add: number): void;
    removeSummon(skillid: number): void;
    sendMessengerChat(name: string, message: string): void;
    changeInnerSkill(index: any, skillid: number, skilllevel: any, skillmaxlevel: any, skillrank: any): void;
    /**
 * 獲得當前剛使用的技能代碼
 * 
 * @return
 */
    getNowApplyBuff(): number;
    setNowApplyBuff(set: number): void;
    sitMountChair(chairid: number): void;
    removeConversation(): void;
    getItemExtraStat(stat: any): number;
    setCatchedMonster(mob: any): void;
    getCatchedMonster(): any;
    getLastSpeak(): string;
    setLastSpeak(set: string): void;
    noBulletConsume(itemid: number): boolean;
    get直播時數(): number;
    get直播時數(chr: MapleCharacter): number;
    領取直播獎勵(): void;
    killAllSelfMonsters(): void;
    clearMonsterSelf(): void;
    killMonsterSelf(monsterid: number): void;
    getAllMonsterSelf(): any;
    getMonsterSelf(mobid: number): any;
    getMonsterSelfByOid(mobid: number): any;
    spawnNowReactor(reactorid: number, position: any): void;
    destoryAllNowReactor(): void;
    getNowReactors(): any;
    setGuildNotice(notice: string): void;
    spawnMonsterSelf(id: number, qty: number, x: number, y: number): void;
    instantMapWarp(map: number, portal: number): void;
    領取粉專分享獎勵(): void;
}

declare interface MapleClient {
    /**
 * 取得解碼代理伺服器的 IP 位址。
 * 
 * @return 解碼代理伺服器的 IP 位址
 */
    getDecodeProxyIP(): string;
    /**
 * 設定解碼代理伺服器的 IP 位址。
 * 
 * @param set 要設定的 IP 位址
 */
    setDecodeProxyIP(set: string): void;
    /**
 * 取得登入時的 IP 位址。
 * 
 * @return 登入時的 IP 位址
 */
    getLoggedInIP(): string;
    getVolumeSerial(): string;
    /**
 * 設定登入時的 IP 位址。
 * 
 * @param set 要設定的 IP 位址
 */
    setLoggedInIP(set: string): void;
    setVolumeSerial(set: string): void;
    /**
 * 檢查是否需要解碼代理伺服器的 IP 位址。
 * 
 * @return 若需要解碼代理伺服器的 IP 位址則為 true，否則為 false
 */
    needDecodeProxyIP(): boolean;
    /**
 * 取得 One-Time Password (OTP) 金鑰。
 * 
 * @return OTP 金鑰
 */
    getOtp(): string;
    /**
 * 取得接收資料的加密器。
 * 
 * @return 接收資料的加密器
 */
    getReceiveCrypto(): any;
    /**
 * 取得發送資料的加密器。
 * 
 * @return 發送資料的加密器
 */
    getSendCrypto(): any;
    /**
 * 取得客戶端連線的頻道。
 * 
 * @return 客戶端連線的頻道
 */
    getSession(): any;
    closeSession(): void;
    closeSession(log: boolean): void;
    /**
 * 取得用於同步的鎖物件。
 * 
 * @return 同步鎖
 */
    getLock(): any;
    /**
 * 取得用於同步 NPC 的鎖物件。
 * 
 * @return NPC 同步鎖
 */
    getNPCLock(): any;
    /**
 * 取得玩家角色的資訊。
 * 
 * @return 玩家角色的資訊
 */
    getPlayer(): MapleCharacter;
    /**
 * 取得客戶端的 MAC 位址。
 * 
 * @return MAC 位址
 */
    getClientMac(): string;
    /**
 * 設定玩家角色的資訊。
 * 
 * @param player 要設定的玩家角色
 */
    setPlayer(player: MapleCharacter): void;
    /**
 * 標記已創建角色的狀態。
 * 
 * @param id 角色的ID
 */
    createdChar(id: number): void;
    /**
 * 檢查是否有新創建的角色。
 * 
 * @return 若有新創建的角色則為 true，否則為 false
 */
    hasNewChar(): boolean;
    /**
 * 登入驗證。
 * 
 * @param id 角色的ID
 * @return 若驗證通過則為 true，否則為 false
 */
    login_Auth(id: number): boolean;
    /**
 * 取得玩家角色的ID列表。
 * 
 * @return 玩家角色的ID列表
 */
    getCharacterIdList(): any;
    /**
 * 新增角色的ID到列表。
 * 
 * @param charid 要新增的角色ID
 */
    addCharacterIdList(charid: number): void;
    /**
 * 從列表中移除角色的ID。
 * 
 * @param charid 要移除的角色ID
 */
    removeCharacterIdList(charid: number): void;
    /**
 * 從資料庫載入所有角色的資訊。
 * 
 * @param serverId 伺服器的ID
 * @return 載入的角色列表
 */
    loadAllCharacters(serverId: number): any;
    /**
 * 從資料庫載入角色名稱列表。
 * 
 * @param serverId 伺服器的ID
 * @return 載入的角色名稱列表
 */
    loadCharacterNames(serverId: number): any;
    /**
 * 檢查是否已登入。
 * 
 * @return 若已登入則為 true，否則為 false
 */
    isLoggedIn(): boolean;
    /**
 * 取得臨時封鎖解除時間。
 * 
 * @return 臨時封鎖解除時間的日曆物件
 */
    getTempBanCalendar(): any;
    /**
 * 檢查是否可以聊天。
 * 
 * @return 若可以聊天則為 true，否則為 false
 */
    getCanTalk(): boolean;
    /**
 * 取得聊天封鎖解除時間。
 * 
 * @return 聊天封鎖解除時間的日曆物件
 */
    getTalkBanCalendar(): any;
    /**
 * 取得封鎖原因。
 * 
 * @return 封鎖原因
 */
    getBanReason(): string;
    /**
 * 取得封鎖等級。
 * 
 * @return 封鎖等級
 */
    getGreason(): any;
    /**
 * 取得封鎖狀態。
 * 
 * @return 封鎖狀態
 */
    getBanned(): number;
    /**
 * 檢查是否已被封鎖。
 * 
 * @return 若已被封鎖則為 true，否則為 false
 */
    isBanned(): boolean;
    /**
 * 檢查是否為遊戲管理員（GM）。
 * 
 * @return 若是 GM 則為 true，否則為 false
 */
    isGM(): boolean;
    /**
 * 檢查 IP 是否被封鎖。
 * 
 * @param ip 要檢查的 IP 位址
 * @return 若 IP 被封鎖則為 true，否則為 false
 */
    isBannedIP(ip: string): boolean;
    /**
 * 檢查是否有被封鎖的 IP。
 * 
 * @return 若有被封鎖的 IP 則為 true，否則為 false
 */
    hasBannedIP(): boolean;
    isBannedSerial(serial: string): boolean;
    /**
 * 完成登入的處理，更新登入狀態為 {@link MapleClient#LOGIN_SERVERLIST}。
 * 
 * @return 登入的結果狀態碼，0 表示成功，其他表示失敗
 */
    finishLogin(): number;
    /**
 * 從資料庫載入帳號資訊。
 * 
 * @param account 帳號名稱
 */
    loadAccount(account: string): void;
    /**
 * 重置客戶端資訊。
 */
    renewClient(): void;
    /**
 * 嘗試登入。
 * 
 * @param account 帳號名稱
 * @param password 密碼
 * @param isIPBanned 是否被封鎖
 * @param nopass 是否無需密碼
 * @return 登入結果的狀態碼
 */
    login(account: string, password: string, isIPBanned: boolean, nopass: boolean): number;
    checklogin(account: string, password: string, isIPBanned: boolean, nopass: boolean): number;
    /**
 * 從資料庫載入 VIP 資訊。
 * 
 * @param accountID 帳號 ID
 */
    loadVip(accountID: number): void;
    /**
 * 根據角色 ID 載入帳號 ID。
 * 
 * @param charid 角色 ID
 */
    loadAccountidByPlayerid(charid: number): void;
    /**
 * 根據角色 ID 載入帳號資訊。
 * 
 * @param charid 角色 ID
 */
    loadAccountInfoByPlayerid(charid: number): void;
    /**
 * 從資料庫載入帳號資訊。
 * 
 * @param accountID 帳號 ID
 */
    loadAccountData(accountID: number): void;
    /**
 * 取得最後登入日期。
 * 
 * @return 最後登入日期的字串表示
 */
    getLastLoginDate(): string;
    getCreateDate(): string;
    /**
 * 更新第二密碼的哈希值。
 */
    update2ndPassword(): void;
    /**
 * 解封指定角色的帳號。
 * 
 * @param charname 角色名稱
 * @return 解封結果的狀態碼
 */
    unban(charname: string): any;
    /**
 * 設定帳號 ID。
 * 
 * @param id 帳號 ID
 */
    setAccID(id: number): void;
    /**
 * 取得帳號 ID。
 * 
 * @return 帳號 ID
 */
    getAccID(): number;
    /**
 * 更新登入狀態，將玩家的登入狀態、登入IP以及最後登入時間進行更新。
 * 
 * @param newstate 新的登入狀態
 * @param SessionID 登入的Session ID
 */
    updateLoginState(newstate: number, SessionID: string): void;
    /**
 * 更新玩家的第二組密碼。
 */
    updateSecondPassword(): void;
    /**
 * 更新玩家的性別。
 */
    updateGender(): void;
    /**
 * 獲取玩家綁定的帳號驗證碼。
 * 
 * @return 玩家綁定的帳號驗證碼
 */
    getbindac(): any;
    /**
 * 獲取玩家的登入狀態。
 * 
 * @return 登入狀態
 */
    getLoginState(): any;
    /**
 * 檢查玩家的出生日期是否符合指定日期。
 * 
 * @param date 指定的出生日期
 * @return 如果出生日期匹配，返回true；否則返回false
 */
    checkBirthDate(date: number): boolean;
    /**
 * 獲取玩家的出生日期。
 * 
 * @return 玩家的出生日期
 */
    getBirthday(): number;
    /**
 * 執行移除任務，處理玩家斷線時的清理工作。
 * 
 * @param shutdown 是否為伺服器關閉
 */
    removalTask(shutdown: boolean): void;
    /**
 * 執行移除任務，處理玩家斷線時的清理工作。
 * 
 * @param shutdown 是否為伺服器關閉
 * @param fromdisconnect 是否為來自斷線
 */
    removalTask(shutdown: boolean, fromdisconnect: boolean): void;
    /**
 * 解鎖斷線，斷開玩家的連接並進行清理。
 */
    unLockDisconnect(): void;
    run(): void;
    /**
 * 斷開玩家的連接，預設不進行伺服器關閉操作，並且保存數據。
 */
    disconnect(): void;
    /**
 * 斷開玩家的連接，可以指定是否為伺服器關閉操作，並且預設保存數據。
 * 
 * @param shutdown 是否為伺服器關閉操作
 */
    disconnect(shutdown: boolean): void;
    /**
 * 斷開玩家的連接，可以指定是否為伺服器關閉操作，以及是否保存數據。
 * 
 * @param shutdown 是否為伺服器關閉操作
 * @param save 是否保存數據
 */
    disconnect(shutdown: boolean, save: boolean): void;
    /**
 * 獲取用戶端的連接IP地址。如果存在代理IP，則返回代理IP；否則返回遠程地址中的IP。 如果連接為空或遠程地址為空，則返回上次的IP地址。
 * 
 * @return 連接的IP地址
 */
    getSessionIPAddress(): string;
    /**
 * 獲取上次使用的IP地址。
 * 
 * @return 上次使用的IP地址
 */
    getLastIPAddress(): string;
    /**
 * 檢查連接的IP地址是否有效。
 * 
 * @return 如果連接的IP地址有效，則返回 true；否則返回 false
 */
    CheckIPAddress(): boolean;
    /**
 * 將用於調試的信息添加到 StringBuilder 中。
 * 
 * @param sb 用於調試的 StringBuilder
 */
    DebugMessage(sb: any): void;
    /**
 * 獲取玩家所在的頻道。
 * 
 * @return 玩家所在的頻道
 */
    getChannel(): number;
    /**
 * 獲取指定編號的頻道伺服器。
 * 
 * @return 指定編號的頻道伺服器
 */
    getChannelServer1(): any;
    /**
 * 獲取玩家所在的頻道伺服器。
 * 
 * @return 玩家所在的頻道伺服器，如果頻道伺服器編號不正確，則返回 null
 */
    getChannelServer(): any;
    /**
 * 獲取玩家所在的世界伺服器。
 * 
 * @return 玩家所在的世界伺服器
 */
    getWorldServer(): any;
    /**
 * 刪除角色的新版本方法。
 * 
 * @param cid 角色的編號
 * @param clearall 是否清空所有數據
 * @param hackpwd 是否為黑客密碼
 * @return 刪除結果碼，0 表示成功，其他表示失敗
 */
    deleteCharacterNew(cid: number, clearall: boolean, hackpwd: boolean): number;
    deleteCharacter(cid: number, clearall: boolean, hackpwd: boolean): number;
    /**
 * 獲取玩家的性別。
 * 
 * @return 玩家的性別，0 表示男性，1 表示女性
 */
    getGender(): any;
    /**
 * 設置玩家的性別。
 * 
 * @param gender 玩家的性別，0 表示男性，1 表示女性
 */
    setGender(gender: any): void;
    /**
 * 獲取玩家的第二組密碼。
 * 
 * @return 玩家的第二組密碼
 */
    getSecondPassword(): string;
    /**
 * 設置玩家的第二組密碼。
 * 
 * @param secondPassword 玩家的第二組密碼
 */
    setSecondPassword(secondPassword: string): void;
    /**
 * 檢查玩家的第二組密碼是否正確。
 * 
 * @param account 玩家的帳號名稱
 * @param secondPassword 玩家輸入的第二組密碼
 * @return 如果第二組密碼正確，則返回 true；否則返回 false
 */
    check2ndPassword(account: string, secondPassword: string): boolean;
    /**
 * 檢查玩家的第二組密碼是否正確。
 * 
 * @param secondPassword 玩家輸入的第二組密碼
 * @return 如果第二組密碼正確，則返回 true；否則返回 false
 */
    check2ndPassword(secondPassword: string): boolean;
    /**
 * 檢查哈希值是否匹配。
 * 
 * @param hash 要檢查的哈希值
 * @param type 哈希算法的類型
 * @param password 要比較的密碼
 * @return 如果哈希值匹配，則返回 true；否則返回 false
 */
    checkHash(hash: string, type: string, password: string): boolean;
    /**
 * 獲取玩家的帳號名稱。
 * 
 * @return 玩家的帳號名稱
 */
    getAccountName(): string;
    /**
 * 設置玩家的帳號名稱。
 * 
 * @param accountName 玩家的帳號名稱
 */
    setAccountName(accountName: string): void;
    /**
 * 設置玩家所在的頻道編號。
 * 
 * @param channel 玩家所在的頻道編號
 */
    setChannel(channel: number): void;
    /**
 * 設置是否為商城頻道。
 * 
 * @param cs 是否為商城頻道，true 表示是，false 表示不是
 */
    setCs(cs: boolean): void;
    /**
 * 檢查玩家是否為商城頻道。
 * 
 * @return 如果是商城頻道，則返回 true；否則返回 false
 */
    isCs(): boolean;
    /**
 * 獲取玩家所在的世界編號。
 * 
 * @return 玩家所在的世界編號
 */
    getWorld(): number;
    /**
 * 設置玩家所在的世界編號。
 * 
 * @param world 玩家所在的世界編號
 */
    setWorld(world: number): void;
    /**
 * 獲取玩家的延遲時間。
 * 
 * @return 玩家的延遲時間
 */
    getLatency(): number;
    /**
 * 獲取最後一次接收到Pong的時間。
 * 
 * @return 最後一次接收到Pong的時間
 */
    getLastPong(): number;
    /**
 * 獲取最後一次發送Ping的時間。
 * 
 * @return 最後一次發送Ping的時間
 */
    getLastPing(): number;
    /**
 * 表示接收到Pong包。
 */
    pongReceived(): void;
    /**
 * 檢查是否可以點擊NPC。
 * 
 * @return 如果可以點擊NPC，則返回 true；否則返回 false
 */
    canClickNPC(): boolean;
    /**
 * 設置最後一次點擊NPC的時間。
 */
    setClickedNPC(): void;
    /**
 * 獲取最後一次點擊NPC的時間。
 * 
 * @return 最後一次點擊NPC的時間
 */
    getClickedNPC(): number;
    /**
 * 移除最後一次點擊NPC的時間。
 */
    removeClickedNPC(): void;
    /**
 * 設置是否正在進行Ping操作。
 * 
 * @param set 要設置的值，true 表示正在進行Ping，false 表示不在進行Ping
 */
    setPinging(set: boolean): void;
    /**
 * 發送Ping請求。
 */
    sendPing(): void;
    /**
 * 發送Ping檢查請求。
 */
    sendPingCheck(): void;
    run(): void;
    /**
 * 獲取用於日誌的訊息。
 * 
 * @param cfor 用於發送消息的MapleClient
 * @param message 日誌訊息
 * @param parms 額外的參數
 * @return 用於日誌的訊息
 */
    getLogMessage(cfor: MapleClient, message: string): string;
    /**
 * 獲取用於日誌的訊息。
 * 
 * @param cfor MapleCharacter 對象
 * @param message 日誌訊息
 * @return 用於日誌的訊息
 */
    getLogMessage(cfor: MapleCharacter, message: string): string;
    /**
 * 獲取用於日誌的訊息，帶有參數。
 * 
 * @param cfor MapleCharacter 對象
 * @param message 日誌訊息
 * @param parms 可變參數列表
 * @return 用於日誌的訊息
 */
    getLogMessage(cfor: MapleCharacter, message: string, parms: any): string;
    /**
 * 獲取用於日誌的訊息，帶有參數。
 * 
 * @param cfor MapleClient 對象
 * @param message 日誌訊息
 * @param parms 可變參數列表
 * @return 用於日誌的訊息
 */
    getLogMessage(cfor: MapleClient, message: string, parms: any): string;
    /**
 * 根據角色名稱查詢帳號ID。
 * 
 * @param charName 角色名稱
 * @return 找到的帳號ID，如果未找到則返回 -1
 */
    findAccIdForCharacterName(charName: string): number;
    /**
 * 檢查角色是否為GM。
 * 
 * @return 如果角色是GM，則返回 true；否則返回 false
 */
    isGm(): boolean;
    /**
 * 檢查角色是否為超級管理員。
 * 
 * @return 如果角色是超級管理員，則返回 true；否則返回 false
 */
    isSuperGM(): boolean;
    /**
 * 檢查角色是否為神。
 * 
 * @return 如果角色是神，則返回 true；否則返回 false
 */
    isGod(): boolean;
    /**
 * 獲取GM等級。
 * 
 * @return GM等級
 */
    getGmLevel(): number;
    /**
 * 設置GM等級。
 * 
 * @param gmLevel GM等級
 */
    setGmLevel(gmLevel: number): void;
    /**
 * 設置VIP等級。
 * 
 * @param x VIP等級
 */
    setVip(x: number): void;
    /**
 * 設置GM等級。
 * 
 * @param x GM等級
 */
    setGM(x: number): void;
    /**
 * 獲取VIP等級。
 * 
 * @return VIP等級
 */
    getVip(): number;
    /**
 * 根據捐贈總額獲取VIP等級。
 * 
 * @return VIP等級
 */
    getVipFromDonate(): number;
    /**
 * 獲取總VIP等級。
 * 
 * @return 總VIP等級
 */
    getVipAll(): number;
    /**
 * 設置腳本引擎。
 * 
 * @param name 腳本名稱
 * @param e 腳本引擎
 */
    setScriptEngine(name: string, e: any): void;
    /**
 * 獲取腳本引擎。
 * 
 * @param name 腳本名稱
 * @return 腳本引擎
 */
    getScriptEngine(name: string): any;
    /**
 * 移除腳本引擎。
 * 
 * @param name 腳本名稱
 */
    removeScriptEngine(name: string): void;
    /**
 * 獲取閒置任務的 ScheduledFuture 對象。
 * 
 * @return 閒置任務的 ScheduledFuture 對象
 */
    getIdleTask(): any;
    /**
 * 設置閒置任務的 ScheduledFuture 對象。
 * 
 * @param idleTask 閒置任務的 ScheduledFuture 對象
 */
    setIdleTask(idleTask: any): void;
    /**
 * 獲取角色的可用角色槽數量。
 * 
 * @return 可用角色槽數量
 */
    getCharacterSlots(): number;
    /**
 * 增加角色的角色槽數量。
 * 
 * @return 如果增加成功，返回 true；否則返回 false
 */
    gainCharacterSlot(): boolean;
    /**
 * 用於解封帳戶相關的 IP 地址和 MAC 地址的封鎖。
 * 
 * @param charname 角色名稱
 * @return 解封操作的結果
 */
    unbanIPMacs(charname: string): any;
    /**
 * 用於解封帳戶相關的 IP 地址的封鎖。
 * 
 * @param charname 角色名稱
 * @return 解封操作的結果
 */
    unbanIP(charname: string): any;
    /**
 * 用於解除 Hellban（封鎖狀態）的帳戶。
 * 
 * @param charname 角色名稱
 * @return 解除 Hellban 的結果
 */
    unHellban(charname: string): any;
    /**
 * 從資料庫中取得特定狀態的已登入帳戶的 ID 清單。
 * 
 * @param state 帳戶登入狀態
 * @return 已登入帳戶的 ID 清單
 */
    getLoggedIdsFromDB(state: number): any;
    /**
 * 檢查是否為受監控帳戶。
 * 
 * @return 是否為受監控帳戶的結果
 */
    isMonitored(): boolean;
    /**
 * 設定是否為受監控帳戶。
 * 
 * @param m 是否為受監控帳戶
 */
    setMonitored(m: boolean): void;
    /**
 * 檢查是否正在接收數據。
 * 
 * @return 是否正在接收數據的結果
 */
    isReceiving(): boolean;
    /**
 * 設定是否正在接收數據。
 * 
 * @param m 是否正在接收數據
 */
    setReceiving(m: boolean): void;
    /**
 * 檢查是否可以使用帳號密碼登入。
 * 
 * @return 是否可以使用帳號密碼登入的結果
 */
    isCanloginpw(): boolean;
    /**
 * 設定是否可以使用帳號密碼登入。
 * 
 * @param x 是否可以使用帳號密碼登入
 */
    setCanloginpw(x: boolean): void;
    /**
 * 送出封包至客戶端。
 * 
 * @param packet 封包資料
 */
    sendPacket(packet: any): void;
    /**
 * 封禁特定的 MAC 地址。
 * 
 * @param macData 要封禁的 MAC 地址
 * @return 是否成功封禁 MAC 地址
 */
    banMacs(macData: string): boolean;
    /**
 * 取得登入使用的 MAC 地址。
 * 
 * @return 登入使用的 MAC 地址
 */
    getLoginMacs(): string;
    /**
 * 設定登入使用的 MAC 地址。
 * 
 * @param macData 登入使用的 MAC 地址
 */
    setLoginMacs(macData: string): void;
    /**
 * 取得不可修改的 MAC 地址集合。
 * 
 * @return MAC 地址集合
 */
    getMacs(): any;
    /**
 * 設定 MAC 地址集合。
 * 
 * @param macData 要設定的 MAC 地址
 */
    setMacs(macData: string): void;
    /**
 * 更新所有 MAC 地址資料。
 * 
 * @param macData 要更新的 MAC 地址資料
 */
    updateAllMac(macData: string): void;
    /**
 * 取得不可修改的 IP 地址集合。
 * 
 * @return IP 地址集合
 */
    getIps(): any;
    /**
 * 設定 IP 地址集合。
 * 
 * @param ipData 要設定的 IP 地址
 */
    setIps(ipData: string): void;
    /**
 * 更新 IP 地址集合。
 * 
 * @param ipData 要更新的 IP 地址
 */
    updateIPs(ipData: string): void;
    /**
 * 檢查是否封禁了指定的 MAC 地址。
 * 
 * @param mac 要檢查的 MAC 地址
 * @return 是否封禁了指定的 MAC 地址
 */
    isBannedMac(mac: string): boolean;
    /**
 * 檢查是否存在被封禁的 MAC 地址。
 * 
 * @return 是否存在被封禁的 MAC 地址
 */
    hasBannedMac(): boolean;
    /**
 * 封禁所有的 MAC 地址。
 */
    banMacs(): void;
    /**
 * 封禁單個 MAC 地址。
 * 
 * @param macData 要封禁的 MAC 地址
 * @return 是否成功封禁 MAC 地址
 */
    banSingleMacs(macData: string): boolean;
    /**
 * 封禁多個 MAC 地址。
 * 
 * @param macs 要封禁的 MAC 地址陣列
 */
    banMacs(macs: any): void;
    /**
 * 完全解封指定角色名稱的帳號。
 * 
 * @param charname 要解封的角色名稱
 * @return 是否成功解封
 */
    Fullyunban(charname: string): boolean;
    /**
 * 取得是否需要關閉連線的狀態。
 * 
 * @return 是否需要關閉連線
 */
    getCloseSession(): boolean;
    /**
 * 根據帳號 ID 載入角色 ID 列表。
 * 
 * @param accId 帳號 ID
 * @return 角色 ID 列表
 */
    loadCharacterIDsByAccId(accId: number): any;
    /**
 * 根據帳號 ID 載入角色名稱列表。
 * 
 * @param accId 帳號 ID
 * @return 角色名稱列表
 */
    loadCharacterNamesByAccId(accId: number): any;
    /**
 * 取得客戶端金鑰。
 * 
 * @return 客戶端金鑰
 */
    getClientKey(): string;
    /**
 * 設定客戶端金鑰。
 * 
 * @param key 要設定的客戶端金鑰
 */
    setClientKey(key: string): void;
    /**
 * 傳送 CGM 記錄。
 * 
 * @param c MapleClient 物件
 * @param message 訊息內容
 */
    sendCGMLog(c: MapleClient, message: string): void;
    /**
 * 取得最後登入時間。
 * 
 * @return 最後登入時間
 */
    getLastLogin(): number;
    /**
 * 取得贊助點數。
 * 
 * @return 贊助點數
 */
    getDonatePoints(): number;
    /**
 * 增加贊助點數。
 * 
 * @param points 要增加的贊助點數
 */
    gainDonatePoints(points: number): void;
    getTodayRealDonate(): number;
    getRealDonate(): number;
    getMonthRealDonate(): number;
    /**
 * 取得總贊助金額。
 * 
 * @return 總贊助金額
 */
    getTotalDonate(): number;
    /**
 * 取得今日的贊助金額。
 * 
 * @return 今日贊助金額
 */
    getTodayDonate(): number;
    /**
 * 取得贊助排名。
 * 
 * @return 贊助排名，未贊助則回傳 -1
 */
    getDonateRank(): number;
    /**
 * 取得本月贊助排名。
 * 
 * @return 本月贊助排名，未贊助則回傳 -1
 */
    getMonthDonateRank(): number;
    /**
 * 取得今日贊助排名。
 * 
 * @return 今日贊助排名，未贊助則回傳 -1
 */
    getTodayDonateRank(): number;
    /**
 * 取得昨日贊助排名。
 * 
 * @return 昨日贊助排名，未贊助則回傳 -1
 */
    getYesturdayDonateRank(): number;
    /**
 * 取得昨日贊助金額。
 * 
 * @return 昨日贊助金額
 */
    getYesturdayDonate(): number;
    /**
 * 取得指定日期範圍內的贊助金額總和。
 * 
 * @param date1 起始日期
 * @param date2 結束日期
 * @return 指定日期範圍內的贊助金額總和
 */
    getDonateRange(date1: string, date2: string): number;
    /**
 * 獲取本月的捐贈總額。
 * 
 * @return 本月的捐贈總額
 */
    getMonthDonate(): number;
    /**
 * 更新帳戶密碼。
 * 
 * @param password 新密碼
 * @return 是否成功更新密碼
 */
    updatePassword(password: string): boolean;
    /**
 * 更新二級密碼。
 * 
 * @param password 新密碼
 * @return 是否成功更新二級密碼
 */
    update2ndPassword(password: string): boolean;
    /**
 * 更新指定角色的二級密碼。
 * 
 * @param name 角色名稱
 * @param password 新密碼
 * @return 是否成功更新二級密碼
 */
    update2ndPassword(name: string, password: string): boolean;
    /**
 * 更新角色名稱。
 * 
 * @param name 舊角色名稱
 * @param newname 新角色名稱
 * @return 是否成功更新角色名稱
 */
    updatename(name: string, newname: string): boolean;
    /**
 * 增加指定角色的 Acash。
 * 
 * @param name 角色名稱
 * @param gash 增加的 Acash 數量
 * @return 是否成功增加 Acash
 */
    gaingash(name: string, gash: string): boolean;
    /**
 * 增加指定角色的楓點。
 * 
 * @param name 角色名稱
 * @param maplepoint 增加的楓點數量
 * @return 是否成功增加楓點
 */
    gainmaplepoint(name: string, maplepoint: string): boolean;
    /**
 * 增加指定角色的點數。
 * 
 * @param name 角色名稱
 * @param point 增加的點數數量
 * @return 是否成功增加點數
 */
    gainpoint(name: string, point: number): boolean;
    /**
 * 增加指定角色的 V 點數。
 * 
 * @param name 角色名稱
 * @param point 增加的 V 點數數量
 * @return 是否成功增加 V 點數
 */
    gainVpoint(name: string, point: number): boolean;
    /**
 * 獲取指定角色的 IP 狀態。
 * 
 * @param name 角色名稱
 * @param Cache 是否使用快取模式
 * @return IP 狀態資訊
 */
    getIPstatus(name: string, Cache: boolean): string;
    /**
 * 檢查帳戶是否綁定了 LINE 帳號。
 * 
 * @param uid 帳戶 ID
 * @return 是否已綁定 LINE 帳號
 */
    getLinebindac(uid: number): boolean;
    /**
 * 檢查帳戶是否為危險帳戶。
 * 
 * @return 如果帳戶為危險帳戶，則返回 true；否則返回 false
 */
    ChrDangerousAcc(): boolean;
    /**
 * 設置指定角色是否被監控。
 * 
 * @param name 角色名稱
 * @param Monitored 是否被監控
 * @return 是否成功設置監控狀態
 */
    SetMonitored(name: string, Monitored: boolean): boolean;
    /**
 * 設置帳戶是否被監控。
 * 
 * @param Monitored 是否被監控
 * @return 是否成功設置監控狀態
 */
    SetMonitored(Monitored: boolean): boolean;
    /**
 * 獲取指定角色的監控狀態。
 * 
 * @param name 角色名稱
 * @return 如果角色被監控，則返回 true；否則返回 false
 */
    getMonitored(name: string): boolean;
    /**
 * 更新登入密鑰。
 * 
 * @param loginkey 新登入密鑰
 */
    updateLoginKey(loginkey: string): void;
    /**
 * 根據角色 ID 加載角色名稱列表。
 * 
 * @param charId 角色 ID
 * @return 角色名稱列表
 */
    loadCharacterNamesByCharId(charId: number): any;
    /**
 * 修改所有角色名稱為 "hacked"。
 */
    HackChrName(): void;
    /**
 * 根據角色名稱獲取帳戶名稱。
 * 
 * @param chrname 角色名稱
 * @return 帳戶名稱
 */
    getAccNameByChrName(chrname: string): string;
    /**
 * 檢查帳戶名稱是否存在。
 * 
 * @param accname 帳戶名稱
 * @return 如果帳戶名稱存在，則返回 true；否則返回 false
 */
    AccNameExist(accname: string): boolean;
    /**
 * 更新 MAC 地址。
 * 
 * @param macData 新的 MAC 地址資料
 */
    updateMacs(macData: string): void;
    /**
 * 更新客戶端的 MAC 地址。
 * 
 * @param macData 新的 MAC 地址資料
 */
    updateClientMac(macData: string): void;
    /**
 * 暫停執行一段時間。
 * 
 * @param misec 毫秒數
 */
    sleep(misec: number): void;
    /**
 * 更新帳戶的數值欄位。
 * 
 * @param column 欄位名稱
 * @param set 新的數值
 * @return 更新是否成功
 */
    UpdateAccount(column: string, set: number): boolean;
    /**
 * 更新帳戶的字串欄位。
 * 
 * @param column 欄位名稱
 * @param set 新的字串
 * @return 更新是否成功
 */
    UpdateAccountString(column: string, set: string): boolean;
    /**
 * 設置商城點數。
 * 
 * @param cs 商城點數
 */
    setcs(cs: number): void;
    /**
 * 獲取商城點數。
 * 
 * @return 商城點數
 */
    getcs(): number;
    /**
 * 檢查是否可以創建角色。
 * 
 * @param serverId 伺服器 ID
 * @return 如果可以創建角色，則返回 true；否則返回 false
 */
    canMakeCharacter(serverId: number): boolean;
    /**
 * 處理封包並檢測封包攻擊。
 * 
 * @param packetlength 封包長度
 */
    handlePacket(packetlength: number): void;
    /**
 * 斷開該用戶在所有頻道的連接。
 */
    DcAllChannel(): void;
    /**
 * 設置最後一次反饋時間。
 * 
 * @param s 最後一次反饋時間
 */
    setLastFeedBackTime(s: number): void;
    /**
 * 獲取最後一次反饋時間。
 * 
 * @return 最後一次反饋時間
 */
    getLastFeedBackTime(): number;
    /**
 * 獲取最後所在的遊戲世界。
 * 
 * @return 最後所在的遊戲世界
 */
    getLastWorld(): number;
    /**
 * 在遊戲中向客戶端發送通告訊息。
 * 
 * @param data 要發送的訊息數據
 */
    announce(data: any): void;
    /**
 * 設置用戶是否在遊戲中。
 * 
 * @param set 如果在遊戲中，則為 true；否則為 false
 */
    setInGame(set: boolean): void;
    /**
 * 檢查用戶是否在遊戲中。
 * 
 * @return 如果在遊戲中，則返回 true；否則返回 false
 */
    isInGame(): boolean;
    /**
 * 獲取 NPC 對話管理器實例，用於玩家和 NPC 之間的互動。
 * 
 * @return NPC 對話管理器實例
 */
    getAbstractPlayerInteraction(): NPCConversationManager;
    /**
 * 從資料庫載入角色資訊。
 * 
 * @param serverId 伺服器的ID
 * @return 載入的角色列表
 */
    loadCharacters(serverId: number): any;
    /**
 * 創建一個新的客戶端連接。
 */
    newClient(): void;
    getLastToken(): string;
    setLastLoginToken(toString: string): void;
    updateToken(token: string): void;
    getLoginToken(): string;
}

declare interface MapleMap {
    /**
 * 取得重生時間。
 * 
 * @return 重生時間。
 */
    getRespawnTime(): number;
    /**
 * 取得重生間隔。
 * 
 * @return 重生間隔。
 */
    getRespawnInterval(): number;
    /**
 * 判斷是否可重生。
 * 
 * @return 若可重生，則返回true；否則，返回false。
 */
    canRespawn(): boolean;
    /**
 * 重置上次生成時間。
 */
    resetlastSpawnTime(): void;
    /**
 * 設定是否允許PvP。
 */
    setPvP(): void;
    /**
 * 取得是否允許PvP。
 * 
 * @return 若允許PvP，則返回true；否則，返回false。
 */
    getPvP(): boolean;
    /**
 * 設定是否生成。
 * 
 * @param fm 是否生成。
 */
    setSpawns(fm: boolean): void;
    /**
 * 取得是否生成。
 * 
 * @return 若生成，則返回true；否則，返回false。
 */
    getSpawns(): boolean;
    /**
 * 設定固定怪物。
 * 
 * @param fm 固定怪物。
 */
    setFixedMob(fm: number): void;
    /**
 * 設定強制移動等級。
 * 
 * @param fm 強制移動等級。
 */
    setForceMove(fm: number): void;
    /**
 * 取得強制移動等級。
 * 
 * @return 強制移動等級。
 */
    getForceMove(): number;
    /**
 * 設定等級限制。
 * 
 * @param fm 等級限制。
 */
    setLevelLimit(fm: number): void;
    /**
 * 取得等級限制。
 * 
 * @return 等級限制。
 */
    getLevelLimit(): number;
    /**
 * 設定返回地圖ID。
 * 
 * @param rmi 返回地圖ID。
 */
    setReturnMapId(rmi: number): void;
    /**
 * 設定是否滑翔。
 * 
 * @param b 是否滑翔。
 */
    setSoaring(b: boolean): void;
    /**
 * 判斷是否可滑翔。
 * 
 * @return 若可滑翔，則返回true；否則，返回false。
 */
    canSoar(): boolean;
    /**
 * 切換是否掉落物品。
 */
    toggleDrops(): void;
    /**
 * 關閉掉落物品。
 */
    closeDrops(): void;
    /**
 * 切換是否使用椅子。
 */
    toggleChair(): void;
    /**
 * 判斷是否禁用椅子。
 * 
 * @return 若禁用椅子，則返回true；否則，返回false。
 */
    ChairDisabled(): boolean;
    /**
 * 判斷是否可使用椅子。
 * 
 * @return 若可使用椅子，則返回true；否則，返回false。
 */
    canChair(): boolean;
    /**
 * 切換是否禁用技能。
 */
    toggleSkill(): void;
    /**
 * 判斷是否禁用技能。
 * 
 * @return 若禁用技能，則返回true；否則，返回false。
 */
    skillDisabled(skillid: number): boolean;
    /**
 * 判斷是否可使用技能。
 * 
 * @return 若可使用技能，則返回true；否則，返回false。
 */
    canSkill(): boolean;
    /**
 * 設定是否點擊遊戲地圖。
 * 
 * @param s 是否點擊遊戲地圖。
 */
    setClickGameMap(s: boolean): void;
    /**
 * 判斷是否點擊遊戲地圖。
 * 
 * @return 若是點擊遊戲地圖，則返回true；否則，返回false。
 */
    isClickGameMap(): boolean;
    /**
 * 設定是否關閉傳送門。
 * 
 * @param s 是否關閉傳送門。
 */
    setClosePortal(s: boolean): void;
    /**
 * 判斷是否關閉傳送門。
 * 
 * @return 若是關閉傳送門，則返回true；否則，返回false。
 */
    isClosePortal(): boolean;
    /**
 * 設定是否掉落物品。
 * 
 * @param b 是否掉落物品。
 */
    setDrops(b: boolean): void;
    /**
 * 切換是否禁用全域掉落。
 */
    toggleGDrops(): void;
    /**
 * 關閉全域掉落。
 */
    closeGDrops(): void;
    /**
 * 取得地圖ID。
 * 
 * @return 地圖ID。
 */
    getId(): number;
    /**
 * 取得返回地圖。
 * 
 * @return 返回地圖。
 */
    getReturnMap(): MapleMap;
    /**
 * 取得頻道伺服器。
 * 
 * @return 頻道伺服器。
 */
    getChannelServer(): any;
    /**
 * 取得返回地圖ID。
 * 
 * @return 返回地圖ID。
 */
    getReturnMapId(): number;
    /**
 * 取得強制返回地圖ID。
 * 
 * @return 強制返回地圖ID。
 */
    getForcedReturnId(): number;
    /**
 * 取得強制返回地圖。
 * 
 * @return 強制返回地圖。
 */
    getForcedReturnMap(): MapleMap;
    /**
 * 設定強制返回地圖。
 * 
 * @param map 強制返回地圖ID。
 */
    setForcedReturnMap(map: number): void;
    /**
 * 取得恢復速率。
 * 
 * @return 恢復速率。
 */
    getRecoveryRate(): number;
    /**
 * 設定恢復速率。
 * 
 * @param recoveryRate 恢復速率。
 */
    setRecoveryRate(recoveryRate: number): void;
    /**
 * 取得場地限制。
 * 
 * @return 場地限制。
 */
    getFieldLimit(): number;
    /**
 * 設定場地限制。
 * 
 * @param fieldLimit 場地限制。
 */
    setFieldLimit(fieldLimit: number): void;
    /**
 * 設定生成怪物間隔。
 * 
 * @param createMobInterval 生成怪物間隔。
 */
    setCreateMobInterval(createMobInterval: any): void;
    /**
 * 設定時間限制。
 * 
 * @param timeLimit 時間限制。
 */
    setTimeLimit(timeLimit: number): void;
    /**
 * 取得時間限制。
 * 
 * @return 時間限制。
 */
    getTimeLimit(): number;
    /**
 * 設定地圖名稱。
 * 
 * @param mapName 地圖名稱。
 */
    setMapName(mapName: string): void;
    /**
 * 取得地圖名稱。
 * 
 * @return 地圖名稱。
 */
    getMapName(): string;
    /**
 * 取得街道名稱。
 * 
 * @return 街道名稱。
 */
    getStreetName(): string;
    /**
 * 設定當第一名使用者進入時的動作。
 * 
 * @param onFirstUserEnter 當第一名使用者進入時的動作。
 */
    setFirstUserEnter(onFirstUserEnter: string): void;
    /**
 * 設定當使用者進入時的動作。
 * 
 * @param onUserEnter 當使用者進入時的動作。
 */
    setUserEnter(onUserEnter: string): void;
    /**
 * 判斷是否有時鐘。
 * 
 * @return 若有時鐘，則返回true；否則，返回false。
 */
    hasClock(): boolean;
    /**
 * 設定是否有時鐘。
 * 
 * @param hasClock 是否有時鐘。
 */
    setClock(hasClock: boolean): void;
    /**
 * 在地圖上顯示船的效果。
 * 
 * @param eff 船的效果。
 */
    boatEffect(eff: number): void;
    /**
 * 在地圖上顯示船的封包。
 * 
 * @param state 船的狀態。
 */
    boatPacket(state: boolean): void;
    /**
 * 設定是否有船。
 * 
 * @param hasBoat 是否有船。
 */
    setBoat(hasBoat: boolean): void;
    /**
 * 設定是否已停靠。
 * 
 * @param isDocked 是否已停靠。
 */
    setDocked(isDocked: boolean): void;
    /**
 * 判斷是否為城鎮地圖。
 * 
 * @return 若是城鎮地圖，則返回true；否則，返回false。
 */
    isTown(): boolean;
    /**
 * 設定是否為城鎮地圖。
 * 
 * @param town 是否為城鎮地圖。
 */
    setTown(town: boolean): void;
    /**
 * 判斷是否允許個人商店。
 * 
 * @return 若允許個人商店，則返回true；否則，返回false。
 */
    allowPersonalShop(): boolean;
    /**
 * 設定是否允許個人商店。
 * 
 * @param personalShop 是否允許個人商店。
 */
    setPersonalShop(personalShop: boolean): void;
    /**
 * 設定街道名稱。
 * 
 * @param streetName 街道名稱。
 */
    setStreetName(streetName: string): void;
    /**
 * 設定是否永久保留。
 * 
 * @param everlast 是否永久保留。
 */
    setEverlast(everlast: boolean): void;
    /**
 * 判斷是否永久保留。
 * 
 * @return 若永久保留，則返回true；否則，返回false。
 */
    getEverlast(): boolean;
    /**
 * 取得HP減少值。
 * 
 * @return HP減少值。
 */
    getHPDec(): number;
    /**
 * 設定HP減少值。
 * 
 * @param delta HP減少值的變化量。
 */
    setHPDec(delta: number): void;
    /**
 * 取得當第一名使用者進入時的動作。
 * 
 * @return 當第一名使用者進入時的動作。
 */
    getFirstUserEnter(): string;
    /**
 * 取得當使用者進入時的動作。
 * 
 * @return 當使用者進入時的動作。
 */
    getUserEnter(): string;
    /**
 * 取得HP減少間隔。
 * 
 * @return HP減少間隔。
 */
    getHPDecInterval(): number;
    /**
 * 設定HP減少間隔。
 * 
 * @param delta HP減少間隔的變化量。
 */
    setHPDecInterval(delta: number): void;
    /**
 * 取得HP減少保護。
 * 
 * @return HP減少保護。
 */
    getHPDecProtect(): number;
    /**
 * 設定HP減少保護。
 * 
 * @param delta HP減少保護的變化量。
 */
    setHPDecProtect(delta: number): void;
    /**
 * 取得目前隊伍ID。
 * 
 * @return 目前隊伍ID。
 */
    getCurrentPartyId(): number;
    /**
 * 將地圖物件加入地圖。
 * 
 * @param mapobject 要加入的地圖物件。
 */
    addMapObject(mapobject: any): void;
    /**
 * 從地圖移除地圖物件。
 * 
 * @param obj 要移除的地圖物件。
 */
    removeMapObject(obj: any): void;
    /**
 * 計算位於指定位置下方的座標。
 * 
 * @param initial 初始座標。
 * @return 位於下方的座標。
 */
    calcPointBelow(initial: any, chr: MapleCharacter): any;
    calcPointBelow(initial: any): any;
    calcFhAndPointBelow(initial: any): any;
    /**
 * 計算位於指定位置下方的鑰匙和座標。
 * 
 * @param initial 初始座標。
 * @return 鑰匙和位於下方的座標。
 */
    calcFhAndPointBelow(initial: any, chr: MapleCharacter): any;
    /**
 * 計算物品掉落的位置。
 * 
 * @param initial 初始位置。
 * @param fallback 回退位置。
 * @return 掉落的位置。
 */
    calcDropPos(initial: any, fallback: any, chr: MapleCharacter): any;
    /**
 * 加入物品掉落。
 * 
 * @param monsterId 怪物ID。
 * @param itemid 物品ID。
 * @param chance 掉落機率。
 */
    addDrop(monsterId: number, itemid: number, chance: number): void;
    /**
 * 加入楓幣掉落。
 * 
 * @param monsterId 怪物ID。
 * @param chance 掉落機率。
 * @param minimum_quantity 最小數量。
 * @param maximum_quantity 最大數量。
 */
    addMesoDrop(monsterId: number, chance: number, minimum_quantity: number, maximum_quantity: number): void;
    /**
 * 加入物品掉落。
 * 
 * @param monsterId 怪物ID。
 * @param itemid 物品ID。
 * @param chance 掉落機率。
 * @param minimum_quantity 最小數量。
 * @param maximum_quantity 最大數量。
 */
    addDrop(monsterId: number, itemid: number, chance: number, minimum_quantity: number, maximum_quantity: number): void;
    /**
 * 清除加入的掉落物品。
 */
    clearAddDrops(): void;
    /**
 * 加入多個物品掉落。
 * 
 * @param monsterId 怪物ID。
 * @param itemid 物品ID。
 * @param chance 掉落機率。
 * @param minimum_quantity 最小數量。
 * @param maximum_quantity 最大數量。
 */
    addDrops(monsterId: number, itemid: number, chance: number, minimum_quantity: number, maximum_quantity: number): void;
    /**
 * 加入物品掉落，包括任務ID。
 * 
 * @param monsterId 怪物ID。
 * @param itemid 物品ID。
 * @param chance 掉落機率。
 * @param minimum_quantity 最小數量。
 * @param maximum_quantity 最大數量。
 * @param questid 任務ID。
 */
    addDrop(monsterId: number, itemid: number, chance: number, minimum_quantity: number, maximum_quantity: number, questid: any): void;
    /**
 * 加入全地圖物品掉落。
 * 
 * @param itemid 物品ID。
 * @param chance 掉落機率。
 */
    addMapDrop(itemid: number, chance: number): void;
    /**
 * 增加地圖金幣掉落的方法。
 * 
 * @param chance 掉落機率
 * @param minimum_quantity 最小掉落數量
 * @param maximum_quantity 最大掉落數量
 */
    addMapMesoDrop(chance: number, minimum_quantity: number, maximum_quantity: number): void;
    /**
 * 增加地圖掉落的方法。
 * 
 * @param itemid 道具ID
 * @param chance 掉落機率
 * @param minimum_quantity 最小掉落數量
 * @param maximum_quantity 最大掉落數量
 */
    addMapDrop(itemid: number, chance: number, minimum_quantity: number, maximum_quantity: number): void;
    /**
 * 增加地圖掉落的方法，包括道具ID、掉落機率、最小掉落數量、最大掉落數量和任務ID。
 * 
 * @param itemid 道具ID
 * @param chance 掉落機率
 * @param minimum_quantity 最小掉落數量
 * @param maximum_quantity 最大掉落數量
 * @param questid 任務ID
 */
    addMapDrop(itemid: number, chance: number, minimum_quantity: number, maximum_quantity: number, questid: any): void;
    /**
 * 取得特定怪物的掉落清單。
 * 
 * @param monsterId 怪物ID
 * @return 怪物的掉落清單
 */
    retrieveDrop(monsterId: number): any;
    /**
 * 取得地圖的掉落清單。
 * 
 * @return 地圖的掉落清單
 */
    retrieveMapDrop(): any;
    /**
 * 移除怪物實例。
 * 
 * @param monster 要移除的怪物實例
 */
    removeMonster(monster: any): void;
    /**
 * 擊殺怪物實例，適用於具有 removeAfter 屬性的怪物。
 * 
 * @param monster 要擊殺的怪物實例
 */
    killMonster(monster: any): void;
    /**
 * 擊殺怪物實例，並處理掉落。
 * 
 * @param monster 要擊殺的怪物實例
 * @param chr 擊殺怪物的角色
 * @param withDrops 是否生成掉落物品
 * @param second 是否是第二擊（在一段時間內連續擊殺同一隻怪物）
 * @param animation 動畫效果
 */
    killMonster(monster: any, chr: MapleCharacter, withDrops: boolean, second: boolean, animation: any): void;
    /**
 * 擊殺怪物實例，並處理掉落。
 * 
 * @param monster 要擊殺的怪物實例
 * @param chr 擊殺怪物的角色
 * @param withDrops 是否生成掉落物品
 */
    killMonster(monster: any, chr: MapleCharacter, withDrops: boolean): void;
    /**
 * 怪物死亡後，設置事件計數。
 * 
 * @param monster 死亡的怪物實例
 * @param chr 觸發事件的角色
 */
    MonsterDead_SetEventCount(monster: any, chr: MapleCharacter): void;
    /**
 * 擊殺怪物實例，並處理掉落，包括特殊情況下的技能效果。
 * 
 * @param monster 要擊殺的怪物實例
 * @param chr 擊殺怪物的角色
 * @param withDrops 是否生成掉落物品
 * @param second 是否是第二次擊殺
 * @param animation 擊殺的動畫效果
 * @param lastSkill 最後使用的技能
 */
    killMonster(monster: any, chr: MapleCharacter, withDrops: boolean, second: boolean, animation: any, lastSkill: number): void;
    run(): void;
    /**
 * 如果遊戲設置中開啟了怪物寵物系統，將擊殺怪物的信息添加到角色的怪物寵物相關數據中。
 * 
 * @param monster 被擊殺的怪物
 * @param chr 擊殺怪物的角色
 */
    AddMonsterPetKill(monster: any, chr: MapleCharacter): void;
    /**
 * 處理怪物寵物的升級機制。
 * 
 * @param monster 被擊殺的怪物
 * @param chr 擊殺怪物的角色
 */
    HandleMonsterPetLevelup(monster: any, chr: MapleCharacter): void;
    /**
 * 獲取地圖上所有的反應物件（Reactor）。
 * 
 * @return 反應物件的列表
 */
    getAllReactor(): any;
    /**
 * 安全獲取地圖上所有的反應物件（Reactor）。
 * 
 * @return 反應物件的列表
 */
    getAllReactorsThreadsafe(): any;
    /**
 * 獲取地圖上所有的傳送門物件。
 * 
 * @return 傳送門物件的列表
 */
    getAllDoor(): any;
    /**
 * 安全獲取地圖上所有的傳送門物件。
 * 
 * @return 傳送門物件的列表
 */
    getAllDoorsThreadsafe(): any;
    /**
 * 獲取地圖上所有的租賃商人物件。
 * 
 * @return 租賃商人物件的列表
 */
    getAllMerchant(): any;
    /**
 * 安全獲取地圖上所有的租賃商人物件。
 * 
 * @return 租賃商人物件的列表
 */
    getAllHiredMerchantsThreadsafe(): any;
    /**
 * 安全獲取地圖上所有的租賃釣魚物件。
 * 
 * @return 租賃釣魚物件的列表
 */
    getAllHiredFishingThreadsafe(): any;
    /**
 * 獲取地圖上所有的怪物寵物物件。
 * 
 * @return 怪物寵物物件的列表
 */
    getAllMonsters(): any;
    /**
 * 安全獲取地圖上所有的怪物寵物物件。
 * 
 * @return 怪物寵物物件的列表
 */
    getAllMonstersThreadsafe(): any;
    /**
 * 獲取位於指定位置範圍內的地圖物件清單。
 * 
 * @param from 起始點
 * @param rangeSq 範圍的平方值
 * @return 地圖物件清單
 */
    getMonstersInRange(from: any, rangeSq: number): any;
    /**
 * 檢查地圖上是否有Boss怪物。
 * 
 * @return 是否有Boss怪物
 */
    hasBoss(): boolean;
    /**
 * 擊殺特定怪物ID的怪物。
 * 
 * @param animate 是否播放擊殺動畫
 */
    KillFk(animate: boolean): void;
    /**
 * 擊敗地圖上所有怪物，並廣播怪物死亡訊息。
 * 
 * @param animate 是否播放死亡動畫
 */
    killAllMonsters(animate: boolean): void;
    killAllMapMonsters(animate: boolean, min: number, max: number): void;
    /**
 * 擊敗地圖上所有怪物，可以指定是否掉落物品。
 * 
 * @param drop 是否掉落物品
 */
    killAll(drop: boolean): void;
    /**
 * 擊敗地圖上所有怪物。
 */
    killAll(): void;
    /**
 * 擊敗指定怪物ID的怪物。
 * 
 * @param monsId 怪物ID
 */
    killMonster(monsId: number): void;
    /**
 * 擊敗地圖上所有怪物。
 */
    killAllMonster(): void;
    /**
 * 擊敗指定怪物並處理DPM計算。
 * 
 * @param monster 要擊敗的怪物
 */
    killMonsterDpm(monster: any): void;
    /**
 * 限制某個反應物的生成數量，超過指定數量將銷毀多餘的反應物。
 * 
 * @param rid 反應物ID
 * @param num 最大生成數量
 */
    limitReactor(rid: number, num: number): void;
    /**
 * 摧毀地圖上指定範圍內的所有反應物。
 * 
 * @param first 第一個反應物ID
 * @param last 最後一個反應物ID
 */
    destroyReactors(first: number, last: number): void;
    /**
 * 摧毀地圖上的所有反應物。
 */
    destroyReactors(): void;
    /**
 * 摧毀指定ID的反應物。
 * 
 * @param oid 反應物的物件ID
 */
    destroyReactor(oid: number): void;
    run(): void;
    /**
 * 重新生成地圖上的所有反應物。
 */
    reloadReactors(): void;
    /**
 * 重置地圖上所有反應物的狀態為初始狀態（狀態 0）。
 */
    resetReactors(): void;
    /**
 * 設定地圖上所有反應物的狀態為指定狀態（狀態 1）。
 */
    setReactorState(): void;
    /**
 * 設定地圖上所有反應物的狀態為指定狀態。
 */
    setReactorState(oid: number, state: any): void;
    /**
 * 設定地圖上所有反應物的狀態為指定狀態。
 * 
 * @param state 要設定的狀態
 */
    setReactorState(state: any): void;
    /**
 * 重新排列地圖上所有反應物的位置，用於某些任務（例如 ZPQ/LMPQ）。
 */
    shuffleReactors(): void;
    /**
 * 重新排列地圖上指定範圍內的反應物的位置。
 * 
 * @param first 第一個反應物ID
 * @param last 最後一個反應物ID
 */
    shuffleReactors(first: number, last: number): void;
    /**
 * 自動為給定的怪物尋找新的控制者。
 * 
 * @param monster 要更新控制者的怪物
 */
    updateMonsterController(monster: any): void;
    /**
 * 根據物件ID和物件類型獲取地圖上的物件。
 * 
 * @param oid 物件的物件ID
 * @param type 物件的類型
 * @return 地圖物件
 */
    getMapObject(oid: number, type: any): any;
    /**
 * 檢查地圖上是否存在指定ID的NPC。
 * 
 * @param npcid NPC的ID
 * @return 如果存在指定ID的NPC則返回true，否則返回false
 */
    containsNPC(npcid: number): boolean;
    /**
 * 根據ID獲取NPC物件。
 * 
 * @param id NPC的ID
 * @return 對應ID的NPC物件，如果找不到則返回null
 */
    getNPCById(id: number): any;
    /**
 * 根據ID獲取怪物物件。
 * 
 * @param id 怪物的ID
 * @return 對應ID的怪物物件，如果找不到則返回null
 */
    getMonsterById(id: number): any;
    /**
 * 計算指定ID的怪物在地圖上的數量。
 * 
 * @param id 怪物的ID
 * @return 怪物數量
 */
    countMonsterById(id: number): number;
    /**
 * 計算指定ID範圍內的怪物在地圖上的數量。
 * 
 * @param id1 第一個怪物ID
 * @param id2 最後一個怪物ID
 * @return 怪物數量
 */
    countMonster(id1: number, id2: number): number;
    /**
 * 根據ID獲取反應物物件。
 * 
 * @param id 反應物的ID
 * @return 對應ID的反應物物件，如果找不到則返回null
 */
    getReactorById(id: number): any;
    /**
 * 根據物件ID獲取怪物物件。
 * 
 * @param oid 物件的ID
 * @return 對應ID的怪物物件，如果找不到則返回null
 */
    getMonsterByOid(oid: number): any;
    /**
 * 根據物件ID獲取NPC物件。
 * 
 * @param oid 物件的ID
 * @return 對應ID的NPC物件，如果找不到則返回null
 */
    getNPCByOid(oid: number): any;
    /**
 * 根據物件ID獲取反應物物件。
 * 
 * @param oid 物件的ID
 * @return 對應ID的反應物物件，如果找不到則返回null
 */
    getReactorByOid(oid: number): any;
    /**
 * 根據名稱獲取反應物物件。
 * 
 * @param name 反應物的名稱
 * @return 對應名稱的反應物物件，如果找不到則返回null
 */
    getReactorByName(name: string): any;
    /**
 * 在指定位置生成NPC。
 * 
 * @param id NPC的ID
 * @param pos 生成的位置
 */
    spawnNpc(id: number, pos: any): void;
    removeNpc_(npcid: number): void;
    /**
 * 移除地圖上指定的NPC。
 * 
 * @param npcid NPC的ID，如果為-1則移除所有NPC
 */
    removeNpc(npcid: number): void;
    /**
 * 移除地圖上指定的NPC。
 */
    removeNpcByOid(oid: number): void;
    /**
 * 獲取地圖上所有NPC的列表，安全地執行。
 * 
 * @return 包含所有NPC的列表
 */
    getAllNPCsThreadsafe(): any;
    /**
 * 在指定位置生成怪物。
 * 
 * @param mobid 怪物的ID
 */
    spawnMonster(mobid: number): void;
    /**
 * 在指定位置生成怪物，可以指定生成的數量。
 * 
 * @param id 怪物的ID
 * @param qty 要生成的數量
 * @param pos 生成的位置
 */
    spawnMob(id: number, qty: number, pos: any): void;
    /**
 * 在指定位置生成怪物。
 * 
 * @param mob 要生成的怪物
 */
    spawnMonster(mob: any): void;
    /**
 * 在指定位置生成指定數量的怪物。
 * 
 * @param mob 要生成的怪物
 * @param pos 生成的位置
 * @param count 生成的數量
 */
    spawnMonsterOnGroundBelow(mob: any, pos: any, count: number): void;
    /**
 * 在指定位置生成帶有效果的怪物。
 * 
 * @param mob 要生成的怪物
 * @param pos 生成的位置
 * @param effect 要顯示的效果
 * @return 生成的怪物的OID
 */
    spawnMonsterWithEffectBelow(mob: any, pos: any, effect: number): number;
    /**
 * 在指定位置生成Zakum和其手臂的怪物。
 * 
 * @param x 生成的X座標
 * @param y 生成的Y座標
 */
    spawnZakum(x: number, y: number): void;
    /**
 * 在指定位置生成混沌Zakum和其手臂的怪物。
 * 
 * @param x 生成的X座標
 * @param y 生成的Y座標
 */
    spawnChaosZakum(x: number, y: number): void;
    /**
 * 在指定位置生成粉紅Zakum和其手臂的怪物。
 * 
 * @param x 生成的X座標
 * @param y 生成的Y座標
 */
    spawnPinkZakum(x: number, y: number): void;
    /**
 * 獲取地圖上所有Mist（迷霧）物件的列表，安全地執行。
 * 
 * @return 包含所有Mist物件的列表
 */
    getAllMistsThreadsafe(): any;
    /**
 * 在指定位置生成怪物，生成一個。
 * 
 * @param id 怪物的ID
 * @param x 生成的X座標
 * @param y 生成的Y座標
 */
    spawnMob(id: number, x: number, y: number): void;
    /**
 * 在指定位置生成假的怪物，生成在地面下方。
 * 
 * @param mob 要生成的怪物
 * @param pos 生成的位置
 */
    spawnFakeMonsterOnGroundBelow(mob: any, pos: any): void;
    run(): void;
    /**
 * 改變怪物的數據，例如HP值。
 * 
 * @param monster 要改變的怪物
 */
    ChangeMonsterStat(monster: any): void;
    /**
 * 在指定位置生成復活的怪物。
 * 
 * @param monster 要生成的怪物
 * @param oid 怪物的OID
 */
    spawnRevives(monster: any, oid: number): void;
    sendPackets(c: MapleClient): void;
    /**
 * 在指定位置生成怪物。
 * 
 * @param monster 要生成的怪物
 * @param spawnType 生成的類型
 */
    spawnMonster(monster: any, spawnType: number): void;
    /**
 * 在地圖上生成怪物，並根據生成類型進行處理。
 * 
 * @param monster 要生成的怪物
 * @param spawnType 生成的類型
 * @param overwrite 是否覆蓋已存在的怪物
 */
    spawnMonster(monster: any, spawnType: number, overwrite: boolean): void;
    run(): void;
    sendPackets(c: MapleClient): void;
    /**
 * 獲取燃燒經驗值。
 * 
 * @return 燃燒經驗值
 */
    getBurnExp(): number;
    /**
 * 獲取燃燒經驗的時間戳。
 * 
 * @return 燃燒經驗的時間戳
 */
    getExpBurnTime(): number;
    /**
 * 設定燃燒經驗的時間戳。
 */
    setExpBurnTime(set: number): void;
    /**
 * 獲取定時燃燒經驗的時間戳。
 * 
 * @return 定時燃燒經驗的時間戳
 */
    getExpScheduleBurnTime(): number;
    /**
 * 在指定位置生成帶有效果的怪物。
 * 
 * @param monster 要生成的怪物
 * @param effect 生成的效果
 * @param pos 生成的位置
 * @return 生成的怪物的OID
 */
    spawnMonsterWithEffect(monster: any, effect: number, pos: any): number;
    sendPackets(c: MapleClient): void;
    /**
 * 在地圖上生成假的怪物。
 * 
 * @param monster 要生成的假怪物
 */
    spawnFakeMonster(monster: any): void;
    sendPackets(c: MapleClient): void;
    /**
 * 在地圖上生成反應堆。
 * 
 * @param reactorid 反應堆的ID
 * @param position 生成的位置
 */
    spawnReactor(reactorid: number, position: any): void;
    /**
 * 在地圖上生成反應堆。
 * 
 * @param reactor 要生成的反應堆
 */
    spawnReactor(reactor: any): void;
    sendPackets(c: MapleClient): void;
    /**
 * 在地圖上生成傳送門。
 * 
 * @param door 要生成的傳送門
 */
    spawnDoor(door: any): void;
    sendPackets(c: MapleClient): void;
    canSpawn(chr: MapleCharacter): boolean;
    /**
 * 在地圖上生成機器人傳送門。
 * 
 * @param door 要生成的機器人傳送門
 */
    spawnMechDoor(door: any): void;
    sendPackets(c: MapleClient): void;
    /**
 * 在地圖上生成召喚獸。
 * 
 * @param summon 要生成的召喚獸
 */
    spawnSummon(summon: any): void;
    sendPackets(c: MapleClient): void;
    /**
 * 在地圖上生成怪物化身。
 * 
 * @param familiar 要生成的怪物化身
 */
    spawnFamiliar(familiar: any): void;
    sendPackets(c: MapleClient): void;
    /**
 * 啟動定時燃燒怪物的效果。
 */
    burnScheduleMonster(): void;
    /**
 * 在指定位置生成Mist效果。
 * 
 * @param mist 要生成的Mist效果
 * @param duration 持續時間
 * @param fake 是否為假的Mist效果
 */
    spawnMist(mist: any, duration: number, fake: boolean): void;
    sendPackets(c: MapleClient): void;
    run(): void;
    run(): void;
    run(): void;
    /**
 * 在地圖上生成消失的物品掉落。
 * 
 * @param dropper 掉落物的來源
 * @param owner 掉落物的擁有者
 * @param item 要掉落的物品
 * @param pos 掉落的位置
 */
    disappearingItemDrop(dropper: any, owner: MapleCharacter, item: any, pos: any): void;
    /**
 * 在地圖上生成楓幣掉落。
 * 
 * @param meso 掉落的楓幣數量
 * @param position 掉落的位置
 * @param dropper 掉落物的來源
 * @param owner 掉落物的擁有者
 * @param playerDrop 是否由玩家掉落
 * @param droptype 掉落類型
 */
    spawnMesoDrop(meso: number, position: any, dropper: any, owner: MapleCharacter, playerDrop: boolean, droptype: any): void;
    sendPackets(c: MapleClient): void;
    /**
 * 在地圖上生成楓幣掉落（從一個位置到另一個位置）。
 * 
 * @param meso 掉落的楓幣數量
 * @param positionfrom 掉落的起始位置
 * @param positionto 掉落的終止位置
 * @param dropper 掉落物的來源
 * @param owner 掉落物的擁有者
 * @param playerDrop 是否由玩家掉落
 * @param droptype 掉落類型
 */
    spawnMesoDrops(meso: number, positionfrom: any, positionto: any, dropper: any, owner: MapleCharacter, playerDrop: boolean, droptype: any): void;
    sendPackets(c: MapleClient): void;
    /**
 * 在地圖上生成怪物楓幣掉落。
 * 
 * @param meso 掉落的楓幣數量
 * @param position 掉落的位置
 * @param dropper 掉落物的來源
 * @param owner 掉落物的擁有者
 * @param playerDrop 是否由玩家掉落
 * @param droptype 掉落類型
 */
    spawnMobMesoDrop(meso: number, position: any, dropper: any, owner: MapleCharacter, playerDrop: boolean, droptype: any): void;
    sendPackets(c: MapleClient): void;
    /**
 * 在地圖上生成怪物掉落。
 * 
 * @param idrop 要掉落的物品
 * @param dropPos 掉落的位置
 * @param mob 生成掉落的怪物
 * @param chr 玩家角色
 * @param droptype 掉落類型
 * @param questid 任務ID
 */
    spawnMobDrop(idrop: any, dropPos: any, mob: any, chr: MapleCharacter, droptype: any, questid: number): void;
    sendPackets(c: MapleClient): void;
    spawnSelfMobDrop(idrop: any, dropPos: any, mob: any, chr: MapleCharacter, droptype: any, questid: number): void;
    sendPackets(c: MapleClient): void;
    /**
 * 在地圖上生成隨機掉落物品。
 */
    spawnRandDrop(): void;
    run(): void;
    /**
 * 對地圖上的所有怪物進行燃燒效果。
 * 
 * @param chr 觸發效果的角色
 * @param second 燃燒的秒數
 */
    burnAllMonster(chr: MapleCharacter, second: number): void;
    /**
 * 在地圖上生成隨機掉落物品。
 * 
 * @param itemid 要掉落的物品ID
 * @param pos 掉落的位置
 */
    spawnAutoDrop(itemid: number, pos: any): void;
    sendPackets(c: MapleClient): void;
    /**
 * 在地圖上生成物品掉落。
 * 
 * @param dropper 掉落物的來源
 * @param owner 掉落物的擁有者
 * @param item 要掉落的物品
 * @param pos 掉落的位置
 * @param ffaDrop 是否為自由拾取
 * @param playerDrop 是否由玩家掉落
 */
    spawnItemDrop(dropper: any, owner: MapleCharacter, item: any, pos: any, ffaDrop: boolean, playerDrop: boolean): void;
    sendPackets(c: MapleClient): void;
    /**
 * 在地圖上生成物品掉落。(可寵吸)
 * 
 * @param dropper 掉落物的來源
 * @param owner 掉落物的擁有者
 * @param item 要掉落的物品
 * @param pos 掉落的位置
 */
    spawnItemDrop(dropper: any, owner: MapleCharacter, item: any, pos: any): void;
    sendPackets(c: MapleClient): void;
    /**
 * 獲取地圖上所有物品的數量。
 * 
 * @return 地圖上物品的數量
 */
    getItemsSize(): number;
    /**
 * 獲取地圖上的所有物品。
 * 
 * @return 地圖上的所有物品
 */
    getAllItems(): any;
    /**
 * 在執行緒安全的情況下獲取地圖上的所有物品。
 * 
 * @return 地圖上的所有物品
 */
    getAllItemsThreadsafe(): any;
    /**
 * 將地圖上由玩家拾取的物品返回給玩家。
 * 
 * @param chr 玩家角色
 */
    returnEverLastItem(chr: MapleCharacter): void;
    /**
 * 讓怪物說話，通常用於NPC型怪物的對話效果。
 * 
 * @param msg 訊息內容
 * @param itemId 聲音效果的物品ID（可選）
 * @param objectid 怪物的物件ID
 */
    talkMonster(msg: string, itemId: number, objectid: number): void;
    /**
 * 在地圖上播放地圖效果。
 * 
 * @param msg 訊息內容
 * @param itemId 地圖效果的物品ID
 */
    startMapEffect(msg: string, itemId: number): void;
    /**
 * 在地圖上播放地圖效果，可指定是否為Jukebox效果。
 * 
 * @param msg 訊息內容
 * @param itemId 地圖效果的物品ID
 * @param jukebox 是否為Jukebox效果
 */
    startMapEffect(msg: string, itemId: number, jukebox: boolean): void;
    /**
 * 在地圖上播放地圖效果，指定播放持續時間。
 * 
 * @param msg 訊息內容
 * @param itemId 地圖效果的物品ID
 * @param time 持續時間（毫秒）
 */
    startMapEffect(msg: string, itemId: number, time: number): void;
    /**
 * 在當前地圖上開始一個地圖效果。
 * 
 * @param msg 地圖效果的訊息內容。
 * @param itemId 與地圖效果相關聯的物品ID。
 * @param jukebox 是否為點唱機效果。
 * @param duration 地圖效果持續時間（毫秒）。
 */
    startMapEffect(msg: string, itemId: number, jukebox: boolean, duration: number): void;
    run(): void;
    /**
 * 在地圖上播放擴展的地圖效果，通常用於短暫的特殊效果，例如天氣變化。
 * 
 * @param msg 訊息內容
 * @param itemId 地圖效果的物品ID
 */
    startExtendedMapEffect(msg: string, itemId: number): void;
    run(): void;
    /**
 * 在地圖上啟動Jukebox效果。
 * 
 * @param msg 訊息內容
 * @param itemId 地圖效果的物品ID
 */
    startJukebox(msg: string, itemId: number): void;
    /**
 * 將玩家添加到地圖中。
 * 
 * @param chr 要添加的玩家角色
 */
    addPlayer(chr: MapleCharacter): void;
    sendMobZone(chr: MapleCharacter): void;
    /**
 * 將玩家加入地圖中。
 * 
 * @param chr 要加入的玩家角色。
 * @param same 是否為相同的地圖加入。
 */
    addPlayer(chr: MapleCharacter, same: boolean): void;
    compare(pet1: any, pet2: any): number;
    /**
 * 在特定地圖上根據玩家和地圖ID召喚額外的怪物。
 * 
 * @param chr 玩家角色。
 * @param mapid 地圖ID。
 */
    spawnExtraMonster(chr: MapleCharacter, mapid: number): void;
    /**
 * 獲取地圖上物品的數量。
 * 
 * @return 物品數量。
 */
    getNumItems(): number;
    /**
 * 獲取地圖上怪物的數量。
 * 
 * @return 怪物數量。
 */
    getNumMonsters(): number;
    doShrine(spawned: boolean): void;
    /**
 * 根據角色名稱獲取所在的隊伍。
 * 
 * @param chr 角色名稱
 * @return 對應的MapleSquad，若找不到則返回null
 */
    getSquadByMap(chr: string): any;
    /**
 * 根據地圖ID獲取相應的MapleSquad。
 * 
 * @return 對應的MapleSquad，若找不到則返回null
 */
    getSquadByMap(): any;
    getSquadBegin(): any;
    /**
 * 獲取與此地圖相關的事件管理器。
 * 
 * @return 對應的事件管理器，若找不到則返回null
 */
    getEMByMap(): any;
    /**
 * 從地圖中移除指定的角色。
 * 
 * @param chr 待移除的角色
 */
    removePlayer(chr: MapleCharacter): void;
    /**
 * 從地圖中移除指定的角色，並指定是否來自於斷線。
 * 
 * @param chr 待移除的角色
 * @param fromdisconnect 是否來自於斷線
 */
    removePlayer(chr: MapleCharacter, fromdisconnect: boolean): void;
    /**
 * 廣播非GM訊息到地圖上的玩家。
 * 
 * @param source 訊息來源角色
 * @param packet 要廣播的封包
 * @param repeatToSource 是否將訊息廣播給來源
 */
    broadcastNONGMMessage(source: MapleCharacter, packet: any, repeatToSource: boolean): void;
    /**
 * 廣播訊息到地圖上的所有玩家。
 * 
 * @param packet 要廣播的封包
 */
    broadcastMessage(packet: any): void;
    /**
 * 廣播訊息到地圖上的玩家。
 * 
 * @param source 訊息來源角色
 * @param packet 要廣播的封包
 * @param repeatToSource 是否將訊息廣播給來源
 */
    broadcastMessage(source: MapleCharacter, packet: any, repeatToSource: boolean): void;
    broadcastMessage(source: MapleCharacter, msg: string, unk: any, repeatToSource: boolean): void;
    /**
 * 獲取地圖上的玩家數量。
 * 
 * @return 玩家數量
 */
    playerCount(): number;
    /**
 * 獲取地圖上的怪物數量。
 * 
 * @return 怪物數量
 */
    mobCount(): number;
    /**
 * 傳送地圖中的物件給指定玩家。
 */
    broadcastMessage(packet: any, rangedFrom: any): void;
    /**
 * 廣播訊息到地圖上的玩家，根據玩家位置範圍廣播。
 * 
 * @param source 訊息來源角色
 * @param msg 訊息文字
 * @param unk 未知值
 * @param rangeSq 範圍的平方值
 * @param rangedFrom 範圍的起始點
 */
    broadcastMessage(source: MapleCharacter, msg: string, unk: any, rangeSq: number, rangedFrom: any): void;
    /**
 * 廣播訊息到地圖上的玩家，根據範圍廣播。
 * 
 * @param source 訊息來源角色
 * @param packet 要廣播的封包
 * @param rangeSq 範圍的平方值
 * @param rangedFrom 範圍的起始點
 */
    broadcastMessage(source: MapleCharacter, packet: any, rangeSq: number, rangedFrom: any): void;
    /**
 * 獲取位於指定位置範圍內的地圖物件清單。
 * 
 * @param from 起始點
 * @param rangeSq 範圍的平方值
 * @return 地圖物件清單
 */
    getMapObjectsInRange(from: any, rangeSq: number): any;
    /**
 * 獲取位於指定位置範圍內的物品清單。
 * 
 * @param from 起始點
 * @param rangeSq 範圍的平方值
 * @return 物品清單
 */
    getItemsInRange(from: any, rangeSq: number): any;
    /**
 * 獲取指定類型的地圖物件清單。
 * 
 * @param MapObject_types 地圖物件類型列表
 * @return 地圖物件清單
 */
    getMapObjects(MapObject_types: any): any;
    /**
 * 獲取位於指定位置範圍內且指定類型的地圖物件清單。
 * 
 * @param from 起始點
 * @param rangeSq 範圍的平方值
 * @param MapObject_types 地圖物件類型列表
 * @return 地圖物件清單
 */
    getMapObjectsInRange(from: any, rangeSq: number, MapObject_types: any): any;
    /**
 * 獲取位於指定矩形區域內且指定類型的地圖物件清單。
 * 
 * @param box 矩形區域
 * @param MapObject_types 地圖物件類型列表
 * @return 地圖物件清單
 */
    getMapObjectsInRect(box: any, MapObject_types: any): any;
    /**
 * 獲取地圖上所有玩家的清單（安全執行緒）。
 * 
 * @return 玩家清單
 */
    getAllPlayersThreadsafe(): any;
    /**
 * 獲取位於指定矩形區域內的玩家清單（安全執行緒）。
 * 
 * @param box 矩形區域
 * @param chrList 玩家清單
 * @return 符合條件的玩家清單
 */
    getPlayersInRectThreadsafe(box: any, chrList: any): any;
    /**
 * 廣播訊息給指定角色，並限制範圍。
 * 
 * @param source 發送訊息的角色
 * @param packet 要廣播的封包資料
 * @param rangedFrom 限制範圍的起始位置
 */
    broadcastMessage(source: MapleCharacter, packet: any, rangedFrom: any): void;
    /**
 * 產生聊天封包。
 * 
 * @param chr 角色
 * @param text 訊息文字
 * @param source 來源角色
 * @param unk 未知參數
 * @return 聊天封包資料
 */
    ChatPacket(chr: MapleCharacter, text: string, source: MapleCharacter, unk: any): any;
    /**
 * 添加傳送點至地圖。
 * 
 * @param myPortal 要添加的傳送點
 */
    addPortal(myPortal: any): void;
    /**
 * 根據名稱獲取傳送點。
 * 
 * @param portalname 傳送點名稱
 * @return 傳送點對象
 */
    getPortal(portalname: string): any;
    /**
 * 根據腳本名稱獲取傳送點。
 * 
 * @param scriptName 腳本名稱
 * @return 傳送點對象
 */
    getPortalByScriptName(scriptName: string): any;
    /**
 * 根據傳送點ID獲取傳送點。
 * 
 * @param portalid 傳送點ID
 * @return 傳送點對象
 */
    getPortal(portalid: number): any;
    /**
 * 重置所有傳送點的狀態。
 */
    resetPortals(): void;
    /**
 * 設定地圖的跳躍支撐。
 * 
 * @param footholds 跳躍支撐對象
 */
    setFootholds(footholds: any): void;
    /**
 * 獲取地圖的跳躍支撐。
 * 
 * @return 跳躍支撐對象
 */
    getFootholds(): any;
    onTheFloor(p: any): boolean;
    /**
 * 載入怪物刷新率，並調整刷新數量。
 * 
 * @param first 是否初次載入
 */
    loadMonsterRate(first: boolean): void;
    /**
 * 添加怪物刷新點至地圖。
 * 
 * @param monster 怪物對象
 * @param mobTime 刷新時間間隔
 * @param carnivalTeam 競技場隊伍
 * @param msg 刷新訊息
 * @return 刷新點對象
 */
    addMonsterSpawn(monster: any, mobTime: number, carnivalTeam: any, msg: string): any;
    /**
 * 添加怪物刷新點至地圖，並決定是否立即刷新怪物。
 * 
 * @param monster 怪物對象
 * @param mobTime 刷新時間間隔
 * @param carnivalTeam 競技場隊伍
 * @param msg 刷新訊息
 * @param spawn 是否立即刷新
 * @return 刷新點對象
 */
    addMonsterSpawn(monster: any, mobTime: number, carnivalTeam: any, msg: string, spawn: boolean): any;
    /**
 * 增加地圖中的最大刷新怪物數量。
 */
    addMaxMobInMap(): void;
    /**
 * 添加刷新點至地圖。
 * 
 * @param p 刷新點座標
 */
    addSpawnPoint(p: any): void;
    /**
 * 添加區域怪物刷新至地圖。
 * 
 * @param monster 怪物對象
 * @param pos1 第一刷新點座標
 * @param pos2 第二刷新點座標
 * @param pos3 第三刷新點座標
 * @param mobTime 刷新時間間隔
 * @param msg 刷新訊息
 * @param sendWorldMsg 是否發送世界訊息
 */
    addAreaMonsterSpawn(monster: any, pos1: any, pos2: any, pos3: any, mobTime: number, msg: string, sendWorldMsg: boolean): void;
    /**
 * 獲取地圖上的所有角色。
 * 
 * @return 地圖上的角色列表
 */
    getCharacters(): any;
    /**
 * 檢查地圖上是否有角色正在輸出對話訊息。
 * 
 * @return 是否有角色輸出對話訊息
 */
    isSpeakOutPut(): boolean;
    /**
 * 獲取角色正在輸出的對話訊息。
 * 
 * @return 輸出的對話訊息
 */
    getSpeakOutPut(): string;
    /**
 * 獲取經過執行緒安全處理的角色列表。
 * 
 * @return 角色列表
 */
    getCharactersThreadsafe(): any;
    /**
 * 通過ID獲取在地圖中的角色（安全版本）。
 * 
 * @param id 角色ID
 * @return 角色對象，如果找不到則返回null
 */
    getCharacterById_InMap(id: number): MapleCharacter;
    /**
 * 通過ID獲取在地圖中的角色。
 * 
 * @param id 角色ID
 * @return 角色對象，如果找不到則返回null
 */
    getCharacterById(id: number): MapleCharacter;
    /**
 * 通過名稱獲取在地圖中的角色。
 * 
 * @param name 角色名稱
 * @return 角色對象，如果找不到則返回null
 */
    getCharacterByName(name: string): MapleCharacter;
    /**
 * 更新地圖物件的可見性。
 * 
 * @param chr 角色對象
 * @param mo 地圖物件
 */
    updateMapObjectVisibility(chr: MapleCharacter, mo: any): void;
    /**
 * 移動怪物至指定位置。
 * 
 * @param monster 怪物對象
 * @param reportedPos 報告的位置
 */
    moveMonster(monster: any, reportedPos: any): void;
    /**
 * 移動玩家至指定位置。
 * 
 * @param player 玩家對象
 * @param newPosition 新位置
 */
    movePlayer(player: MapleCharacter, newPosition: any): void;
    /**
 * 尋找距離指定位置最近的刷新點。
 * 
 * @param from 起始位置
 * @return 最近的刷新點
 */
    findClosestSpawnpoint(from: any): any;
    /**
 * 尋找距離指定位置最近的傳送點。
 * 
 * @param from 起始位置
 * @return 最近的傳送點
 */
    findClosestPortal(from: any): any;
    /**
 * 用於調試目的的刷新資訊。
 * 
 * @return 刷新資訊字串
 */
    spawnDebug(): string;
    /**
 * 獲取地圖中的角色數量。
 * 
 * @return 角色數量
 */
    characterSize(): number;
    /**
 * 獲取地圖物件的總數量。
 * 
 * @return 地圖物件的總數量
 */
    getMapObjectSize(): number;
    /**
 * 獲取地圖中角色的數量。
 * 
 * @return 地圖中角色的數量
 */
    getCharactersSize(): number;
    /**
 * 獲取地圖的傳送點集合。
 * 
 * @return 傳送點集合
 */
    getPortals(): any;
    /**
 * 獲取隨機的傳送點。
 * 
 * @return 隨機的傳送點
 */
    getRandomPortal(): any;
    /**
 * 刷新風箏物件在地圖中。
 * 
 * @param Kite 風箏物件
 */
    spawnKite(Kite: any): void;
    run(): void;
    run(): void;
    /**
 * 獲取怪物刷新速率。
 * 
 * @return 怪物刷新速率
 */
    getMobSpawnRate(): number;
    /**
 * 觸發地圖中的怪物重生。
 * 
 * @param force 是否強制重生
 */
    respawn(force: boolean): void;
    sendPackets(c: MapleClient): void;
    canSpawn(chr: MapleCharacter): boolean;
    /**
 * 獲取雪球活動傳送點。
 * 
 * @return 雪球活動傳送點
 */
    getSnowballPortal(): string;
    /**
 * 檢查角色是否斷線。
 * 
 * @param id 角色ID
 * @return 是否斷線
 */
    isDisconnected(id: number): boolean;
    /**
 * 將斷線角色添加到列表中。
 * 
 * @param id 角色ID
 */
    addDisconnected(id: number): void;
    /**
 * 重置斷線角色列表。
 */
    resetDisconnected(): void;
    /**
 * 啟動速度競賽。
 */
    startSpeedRun(): void;
    /**
 * 使用領隊名稱啟動速度競賽。
 * 
 * @param leader 領隊名稱
 */
    startSpeedRun(leader: string): void;
    /**
 * 結束速度競賽。
 */
    endSpeedRun(): void;
    /**
 * 獲取Papfight狀態。
 * 
 * @return Papfight狀態
 */
    getPapfight(): boolean;
    /**
 * 啟動Papfight。
 */
    Papfight(): void;
    /**
 * 結束Papfight。
 */
    EndPapfight(): void;
    /**
 * 獲取排名並添加數據。
 * 
 * @param leader 領隊名稱
 * @param time 時間
 * @param type 速度競賽類型
 * @param timz 時間
 * @param squad 隊伍成員
 */
    getRankAndAdd(leader: string, time: string, type: any, timz: number, squad: any): void;
    /**
 * 獲取速度競賽的開始時間。
 * 
 * @return 速度競賽的開始時間
 */
    getSpeedRunStart(): number;
    /**
 * 斷開所有角色的連接。
 * 
 * @param chr 角色
 */
    disconnectAll(chr: MapleCharacter): void;
    /**
 * 斷開所有角色的連接。
 */
    disconnectAll(): void;
    /**
 * 獲取所有NPC。
 * 
 * @return 所有NPC列表
 */
    getAllNPCs(): any;
    /**
 * 重置所有NPC。
 */
    resetNPCs(): void;
    /**
 * 完整重置地圖。
 */
    resetFully(): void;
    /**
 * 完整重置地圖。
 * 
 * @param respawn 是否重生怪物
 */
    resetFully(respawn: boolean): void;
    /**
 * 設置MulungDojoLeave任務。
 * 
 * @param task MulungDojoLeave任務
 */
    setMulungDojoLeaveTask(task: any): void;
    /**
 * 取消隊伍排程。
 */
    cancelSquadSchedule(): void;
    /**
 * 移除所有掉落物品。
 */
    removeDrops(): void;
    /**
 * 重置所有的生成點，使用指定的怪物ID和生成時間。
 * 
 * @param mobid 怪物ID
 * @param mobTime 生成時間
 */
    resetAllSpawnPoint(mobid: number, mobTime: number): void;
    /**
 * 重置生成點，清除屬於競技場的生成點。
 */
    resetSpawns(): void;
    /**
 * 在指定隊伍下生成競技場怪物。
 * 
 * @param team 隊伍編號
 * @param newMons 新的怪物實例
 * @param num 數量
 * @return 是否成功生成
 */
    makeCarnivalSpawn(team: number, newMons: any, num: number): boolean;
    /**
 * 在指定隊伍下生成競技場反應物。
 * 
 * @param team 隊伍編號
 * @param num 數量
 * @return 是否成功生成
 */
    makeCarnivalReactor(team: number, num: number): boolean;
    /**
 * 封鎖地圖上的所有傳送門。
 */
    blockAllPortal(): void;
    /**
 * 獲取並切換隊伍。
 * 
 * @return 是否切換隊伍
 */
    getAndSwitchTeam(): boolean;
    /**
 * 設置地圖的遠征隊類型。
 * 
 * @param s 遠征隊類型
 */
    setSquad(s: any): void;
    /**
 * 獲取地圖的頻道編號。
 * 
 * @return 頻道編號
 */
    getChannel(): number;
    /**
 * 獲取地圖的世界編號。
 * 
 * @return 世界編號
 */
    getWorld(): number;
    /**
 * 獲取消耗道具的冷卻時間。
 * 
 * @return 消耗道具的冷卻時間
 */
    getConsumeItemCoolTime(): number;
    /**
 * 設置消耗道具的冷卻時間。
 * 
 * @param ciit 消耗道具的冷卻時間
 */
    setConsumeItemCoolTime(ciit: number): void;
    /**
 * 獲取隊伍獎勵倍率。
 * 
 * @return 隊伍獎勵倍率
 */
    getPartyBonusRate(): number;
    /**
 * 設置隊伍獎勵倍率。
 * 
 * @param ii 隊伍獎勵倍率
 */
    setPartyBonusRate(ii: number): void;
    /**
 * 設置永久的天氣效果。
 * 
 * @param pw 永久的天氣效果
 */
    setPermanentWeather(pw: number): void;
    /**
 * 獲取永久的天氣效果。
 * 
 * @return 永久的天氣效果
 */
    getPermanentWeather(): number;
    /**
 * 設置是否檢查狀態。
 * 
 * @param b 是否檢查狀態
 */
    setCheckStates(b: boolean): void;
    /**
 * 檢查角色的狀態。
 * 
 * @param chr 角色名稱
 */
    checkStates(chr: string): void;
    /**
 * 設置地圖的節點信息。
 * 
 * @param mn 節點信息
 */
    setNodes(mn: any): void;
    /**
 * 獲取地圖的平台列表。
 * 
 * @return 平台列表
 */
    getPlatforms(): any;
    /**
 * 獲取地圖的節點信息。
 * 
 * @return 節點信息列表
 */
    getNodes(): any;
    /**
 * 獲取指定索引的節點信息。
 * 
 * @param index 節點索引
 * @return 節點信息
 */
    getNode(index: number): any;
    /**
 * 獲取節點區域的列表。
 * 
 * @return 節點區域的列表
 */
    getAreas(): any;
    /**
 * 獲取指定索引的區域。
 * 
 * @param index 區域索引
 * @return 區域
 */
    getArea(index: number): any;
    /**
 * 改變地圖的環境效果。
 * 
 * @param ms 環境效果名稱
 * @param type 環境效果類型
 */
    changeEnvironment(ms: string, type: number): void;
    /**
 * 切換地圖的環境效果。
 * 
 * @param ms 環境效果名稱
 */
    toggleEnvironment(ms: string): void;
    /**
 * 移動地圖的環境效果。
 * 
 * @param ms 環境效果名稱
 * @param type 環境效果類型
 */
    moveEnvironment(ms: string, type: number): void;
    /**
 * 獲取地圖的環境效果映射。
 * 
 * @return 環境效果映射
 */
    getEnvironment(): any;
    /**
 * 獲取指定區域內的玩家數量。
 * 
 * @param index 區域索引
 * @return 玩家數量
 */
    getNumPlayersInArea(index: number): number;
    /**
 * 廣播GM訊息給地圖上的玩家。
 * 
 * @param source 訊息來源角色
 * @param packet 要廣播的封包
 * @param repeatToSource 是否向來源角色重複廣播
 */
    broadcastGMMessage(source: MapleCharacter, packet: any, repeatToSource: boolean): void;
    /**
 * 擊殺地圖上的特定怪物。
 * 
 * @param animate 是否顯示消失動畫
 */
    Killdpm(animate: boolean): void;
    /**
 * 獲取要生成的怪物數量和ID對。
 * 
 * @return 怪物數量和ID對的列表
 */
    getMobsToSpawn(): any;
    /**
 * 獲取地圖的技能ID列表。
 * 
 * @return 技能ID列表
 */
    getSkillIds(): any;
    /**
 * 檢查是否可以生成怪物。
 * 
 * @return 是否可以生成怪物
 */
    canSpawn(): boolean;
    /**
 * 設置生成怪物的間隔時間。
 * 
 * @param set 生成怪物的間隔時間
 */
    setSpawnInterval(set: number): void;
    /**
 * 獲取生成怪物的相關信息。
 * 
 * @return 生成怪物的相關信息
 */
    getSpawnInfo(): string;
    /**
 * 檢查是否可以受到傷害。
 * 
 * @return 是否可以受到傷害
 */
    canHurt(): boolean;
    /**
 * 獲取地圖的上界。
 * 
 * @return 上界
 */
    getTop(): any;
    /**
 * 獲取地圖的下界。
 * 
 * @return 下界
 */
    getBottom(): any;
    /**
 * 獲取地圖的左界。
 * 
 * @return 左界
 */
    getLeft(): any;
    /**
 * 獲取地圖的右界。
 * 
 * @return 右界
 */
    getRight(): any;
    /**
 * 設置地圖的上界。
 * 
 * @param ii 上界值
 */
    setTop(ii: number): void;
    /**
 * 設置地圖的下界。
 * 
 * @param ii 下界值
 */
    setBottom(ii: number): void;
    /**
 * 設置地圖的左界。
 * 
 * @param ii 左界值
 */
    setLeft(ii: number): void;
    /**
 * 設置地圖的右界。
 * 
 * @param ii 右界值
 */
    setRight(ii: number): void;
    getAllUniqueMonsters(): any;
    getNearestPvpChar(player: MapleCharacter, maxRange: number, maxHeight: number, chr: any): any;
    /**
 * 在指定位置生成帶有平台底下的怪物。
 * 
 * @param mob 怪物實例
 * @param pos 生成位置
 * @param spawnType 生成類型
 */
    spawnMonster_sSack(mob: any, pos: any, spawnType: number): void;
    getAllMonster(): any;
    /**
 * 隨機獲取地圖上的一個玩家角色。
 * 
 * @return 隨機玩家角色
 */
    getRandChr(): MapleCharacter;
    /**
 * 在地面下方生成怪物。
 * 
 * @param mob 怪物實例
 * @param pos 生成位置
 */
    spawnMonsterOnGroundBelow(mob: any, pos: any): void;
    /**
 * 設置該地圖的所屬角色。
 * 
 * @param chr 所屬角色
 */
    setBelongsTo(chr: MapleCharacter): void;
    /**
 * 獲取該地圖的所屬角色ID。
 * 
 * @return 所屬角色ID
 */
    getBelongsTo(): number;
    /**
 * 檢查是否可以被控制。
 * 
 * @return 是否可以被控制
 */
    getCanBelong(): boolean;
    /**
 * 檢查是否可以被控制。
 * 
 * @return 是否可以被控制
 */
    getBelongsToSomeone(): boolean;
    /**
 * 更新所屬角色的結束時間。
 */
    UpdateEndBelong(): void;
    /**
 * 獲取所屬角色的結束時間。
 * 
 * @return 結束時間
 */
    getEndBelong(): number;
    /**
 * 重置已應用狀態的怪物計數。
 */
    resetApplyedStatusMonster(): void;
    /**
 * 減少已應用狀態的怪物計數。
 */
    decApplyedStatusMonster(): void;
    /**
 * 增加已應用狀態的怪物計數並返回增加後的數量。
 * 
 * @return 增加後的計數
 */
    incApplyedStatusMonsterCount(): number;
    /**
 * 獲取已應用狀態的怪物計數。
 * 
 * @return 已應用狀態的怪物計數
 */
    getApplyedStatusMonsterCount(): number;
    /**
 * 獲取地圖上玩家角色的數量。
 * 
 * @return 玩家角色數量
 */
    getPlayerSize(): number;
    /**
 * 獲取地圖上怪物的數量。
 * 
 * @return 怪物數量
 */
    getMobsSize(): number;
    /**
 * 在指定的角色位置生成金幣雨。
 * 
 * @param chr 角色實例
 * @param meso 金幣數量
 * @throws InterruptedException 當執行緒被中斷時拋出
 */
    spawnMesoRain(chr: MapleCharacter, meso: number): void;
    /**
 * 檢查並斷開具有相同IP的角色連接。
 * 
 * @return 斷開的角色數量
 */
    DC_SameIPCharacter(): number;
    /**
 * 在地圖上生成擴展器。
 * 
 * @param ex 擴展器實例
 */
    spawnExtractor(ex: any): void;
    sendPackets(c: MapleClient): void;
    /**
 * 獲取所有守護者的位置和隊伍編號。
 * 
 * @return 守護者位置和隊伍編號列表
 */
    getGuardians(): any;
    /**
 * 獲取地圖上所有機械門的實例列表。
 * 
 * @return 機械門實例列表
 */
    getAllMechDoorsThreadsafe(): any;
    /**
 * 獲取與指定矩形相交的角色實例列表。
 * 
 * @param box 矩形範圍
 * @return 相交的角色實例列表
 */
    getCharactersIntersect(box: any): any;
    /**
 * 獲取指定物品編號的位置。
 * 
 * @param itemid 物品編號
 * @return 物品的位置
 */
    getPointOfItem(itemid: number): any;
    /**
 * 獲取擷取器（Extractor）的數量。
 * 
 * @return 擷取器數量
 */
    getExtractorSize(): number;
    /**
 * 獲取地圖上所有召喚獸的實例列表。
 * 
 * @return 召喚獸實例列表
 */
    getAllSummonsThreadsafe(): any;
    /**
 * 在地圖上播放簡單的地圖效果。
 * 
 * @param msg 效果訊息
 * @param itemId 物品編號
 */
    startSimpleMapEffect(msg: string, itemId: number): void;
    /**
 * 獲取生成速度。
 * 
 * @return 生成速度
 */
    getSpawnSpeed(): number;
    /**
 * 設置生成速度。
 * 
 * @param i 生成速度值
 */
    setSpawnSpeed(i: number): void;
    /**
 * 獲取強制生成的怪物。
 * 
 * @return 強制生成的怪物實例
 */
    getForceMob(): any;
    /**
 * 設置強制生成的怪物。
 * 
 * @param i 怪物實例
 */
    setForceMob(i: any): void;
    /**
 * 獲取生成點列表。
 * 
 * @return 生成點列表
 */
    getSpawnPoints(): any;
    /**
 * 重置關卡的進度並生成怪物。
 * 
 * @param level 關卡等級
 */
    resetPQ(level: number): void;
    /**
 * 重置怪物的刷新等級為指定等級。
 * 
 * @param level 指定的等級
 */
    resetSpawnLevel(level: number): void;
    /**
 * 在地圖上設置一個計時器，然後在指定時間後將玩家傳送到另一張地圖。
 * 
 * @param target 目標地圖的地圖編號
 * @param time 計時器持續時間（秒）
 */
    warpMapWithClock(target: number, time: number): void;
    run(): void;
    /**
 * 在地圖上生成一隻龍寵怪物。
 * 
 * @param times 龍寵怪物的刷新次數
 */
    spawnDragon(times: number): void;
    /**
 * 在地圖上對所有玩家顯示特定類型的訊息。
 * 
 * @param type 訊息類型
 * @param message 訊息內容
 */
    dropMessage(type: number, message: string): void;
    /**
 * 設置地圖的事件實例。
 * 
 * @param eim 事件實例
 */
    setEventInstance(eim: any): void;
    run(): void;
    /**
 * 處理角色技能冷卻時間、疾病效果等相關處理。
 * 
 * @param chr 角色
 * @param numTimes 執行次數
 * @param hurt 是否受傷
 */
    handleCooldowns(chr: MapleCharacter, numTimes: number, hurt: boolean): void;
    /**
 * 處理角色取消疾病效果、檢查Buff等相關處理。
 * 
 * @param numTimes 執行次數
 * @param size 角色數量
 * @param now 當前時間
 */
    handleDeCharacterBuff(numTimes: number, size: number, now: number): void;
    /**
 * 處理角色Buff效果，檢查Buff的有效時間，並在過期時移除Buff。 同時處理一些特定Buff效果的操作。
 * 
 * @param numTimes 執行次數
 * @param size 角色數量
 * @param now 當前時間
 */
    handleCharacterBuff(numTimes: number, size: number, now: number): void;
    /**
 * 處理地圖上的毒害效果和怪物Debuff效果。
 */
    handleMapPoison(): void;
    /**
 * 獲取地圖中的怪物數量。
 * 
 * @return 地圖中的總怪物數量。
 */
    getMobSizeByID(): number;
    /**
 * 根據怪物ID獲取地圖中特定怪物的數量。
 * 
 * @param mobid 要查詢的怪物ID，-1表示所有怪物。
 * @return 地圖中指定怪物ID的數量，如果mobid為-1，則返回總怪物數量。
 */
    getMobSizeByID(mobid: number): number;
    /**
 * 檢查地圖是否為公會地圖。
 * 
 * @return 如果地圖是公會地圖，則返回true，否則返回false。
 */
    getGuildMap(): boolean;
    /**
 * 設置地圖是否為公會地圖。
 * 
 * @param set 要設置的值，true表示設置為公會地圖，false表示不是。
 */
    setGuildMap(set: boolean): void;
    /**
 * 檢查地圖是否為角色地圖。
 * 
 * @return 如果地圖是角色地圖，則返回true，否則返回false。
 */
    getCharacterMap(): boolean;
    /**
 * 設置地圖是否為角色地圖。
 * 
 * @param set 要設置的值，true表示設置為角色地圖，false表示不是。
 */
    setCharacterMap(set: boolean): void;
    /**
 * 獲取地圖的帳號ID。
 * 
 * @return 地圖的帳號ID。
 */
    getAccountId(): number;
    /**
 * 設置地圖的帳號ID。
 * 
 * @param set 要設置的帳號ID。
 */
    setAccountId(set: number): void;
    /**
 * 獲取地圖的星力值。
 * 
 * @return 地圖的星力值，根據設置中的星力地圖數據。
 */
    getStar(): number;
    /**
 * 檢查是否禁止寵物在地圖上。
 * 
 * @return 如果禁止寵物在地圖上，則返回true，否則返回false。
 */
    isBanPet(): boolean;
    /**
 * 設置是否禁止寵物在地圖上。
 * 
 * @param set 要設置的值，true表示禁止寵物在地圖上，false表示允許。
 */
    setBanPet(set: boolean): void;
    /**
 * 檢查是否禁止機器人（Android）在地圖上。
 * 
 * @return 如果禁止機器人在地圖上，則返回true，否則返回false。
 */
    isBanAndroid(): boolean;
    /**
 * 設置是否禁止機器人（Android）在地圖上。
 * 
 * @param set 要設置的值，true表示禁止機器人在地圖上，false表示允許。
 */
    setBanAndroid(set: boolean): void;
    /**
 * 隨機重排地圖上的反應器的位置。
 * 
 * @param list 反應器的列表。
 */
    shuffleReactors(list: any): void;
    /**
 * 將角色傳送至地圖上的一個隨機怪物位置。
 * 
 * @param chr 要傳送的角色。
 */
    warpMonster(chr: MapleCharacter): void;
    /**
 * 將角色傳送至地圖上的一個隨機傳點位置。
 * 
 * @param chr 要傳送的角色。
 */
    warpPortal(chr: MapleCharacter): void;
    /**
 * 獲取目前的燃燒經驗值。
 * 
 * @return 目前的燃燒經驗值。
 */
    getNowBurnExp(): number;
    /**
 * 設置目前的燃燒經驗值。
 * 
 * @param exp 要設置的燃燒經驗值。
 */
    setNowBurnExp(exp: number): void;
    startClock(time: number): void;
    stopClock(): void;
    mapMessage(text: string): void;
    getNextPossibleSpawn(mobid: number): number;
    obtacleFall(count: number, type1: number, type2: number): void;
    getLeftX(): number;
    getRightX(): number;
    getTopY(): number;
    getBottomY(): number;
    getRunningOid(): number;
    getCanBet(): boolean;
    setCanBet(set: boolean): boolean;
    removeAllReactors(): void;
    yellowMessage(s: string): void;
    sendMapServerMessage(message: string): void;
}

// 範例: 若特定介面需要 global 變數
declare var cm: AbstractPlayerInteraction;

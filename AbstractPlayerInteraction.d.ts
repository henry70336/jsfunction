// ============================
// AbstractPlayerInteraction.d.ts
// ============================

/**
 * 對應 AbstractPlayerInteraction.java
 * 大部分自訂類 (MapleCharacter, MapleMap...) 在此簡化為 any。
 * 若有需要可再補充更詳細的型別/介面。
 */
declare interface AbstractPlayerInteraction {
    // --- 基本存取 / 角色資訊 ---
    getClient(): any;
    getC(): any;
    getChar(): any;
    getPlayer(): any;
    getChannelServer(): any;

    getOneTimeLog(bossid: string): number;
    setOneTimeLog(bossid: string): void;
    getBossLog(bossid: string): number;
    setBossLog(bossid: string): void;

    getEventManager(event: string): any;
    getEventInstance(): any;

    // --- 傳送 / 移動 ---
    warp(map: number): void;
    warp_Instanced(map: number): void;
    warp(map: number, portal: number): void;
    warp(map: number, portal: string): void;
    warpS(map: number, portal: number): void;
    warpS(map: number, portal: string): void;
    warpMap(mapid: number, portal: number): void;
    warpMap(mapid: number, portal: string): void;
    warpMap(mapid: number, portal?: number | string): void; // 可用重載或 union 型別

    playPortalSE(): void;

    getMap(): any;
    getMap(map: number): any;
    getMap_Instanced(map: number): any;

    // --- 召喚怪物 / NPC ---
    spawnMobOnMap(id: number, qty: number, x: number, y: number, map: number): void;
    spawnMob(id: number, qty: number, x: number, y: number): void;
    spawnMob(id: number, x: number, y: number): void;
    spawnMonster(id: number): void;
    spawnMonster(id: number, qty: number): void; 
    spawnMonster(id: number, qty: number, pos: any): void; 
    killMob(ids: number): void;
    killAllMob(): void;
    spawnNpc(npcId: number): void;
    spawnNpc(npcId: number, x: number, y: number): void;
    spawnNpc(npcId: number, pos: any): void;
    removeNpc(mapid: number, npcId: number): void;

    // --- 角色屬性 / 狀態 ---
    addHP(delta: number): void;
    getPlayerStat(type: string): number;
    getName(): string;
    getJob(): number;
    getMorphState(): number;

    // --- 物品判斷 / 持有物 ---
    haveItem(itemid: number): boolean;
    haveItem(itemid: number, quantity: number): boolean;
    haveItem(itemid: number, quantity: number, checkEquipped: boolean, greaterOrEquals: boolean): boolean;
    canHold(): boolean;
    canHold(itemid: number): boolean;
    canHold(itemid: number, quantity: number): boolean;
    removeAll(itemid: number): void;

    // --- 任務相關 ---
    getQuestRecord(id: number): any;
    getQuestStatus(id: number): number; // 0 = 未接, 1 = 進行中, 2 = 完成
    isQuestActive(id: number): boolean;
    isQuestFinished(id: number): boolean;
    showQuestMsg(msg: string): void;
    forceStartQuest(id: number): void;
    forceStartQuest(id: number, data: string): void;
    forceStartQuest(id: number, data: number, filler: boolean): void;
    forceCompleteQuest(id: number): void;

    // --- 怪物地圖重置 ---
    resetMap(mapid: number): void;

    // --- 傳送 / 移動（更進階）---
    warpParty(mapId: number): void;
    warpParty(mapId: number, portal: number): void;
    warpParty_Instanced(mapId: number): void;

    // --- 召喚相關 ---
    forceStartReactor(mapid: number, id: number): void;
    destroyReactor(mapid: number, id: number): void;
    hitReactor(mapid: number, id: number): void;

    // --- 改變音樂 ---
    changeMusic(songName: string): void;
    channelMapPlayerAllBuuff(): void; // 原檔如此拼寫

    // --- 訊息廣播 ---
    worldMessage(type: number, message: string): void;
    playerMessage(message: string): void;
    playerMessage(type: number, message: string): void;
    mapMessage(message: string): void;
    mapMessage(type: number, message: string): void;
    guildMessage(message: string): void;
    guildMessage(type: number, message: string): void;

    // --- 公會 / 組隊 ---
    getGuild(): any;
    getGuild(guildid: number): any;
    getParty(): any;
    getCurrentPartyId(mapid: number): number;
    isLeader(): boolean;
    isAllPartyMembersAllowedJob(job: number): boolean;
    allMembersHere(): boolean;

    // --- 經驗 / 楓幣 / NX ---
    gainMeso(gain: number): void;
    gainExp(gain: number): void;
    gainExpR(gain: number): void;
    gainPotion(type: number, amount: number): void;
    getPotion(type: number): number;
    gainNX(amount: number): void;
    getNX(): number;
    gainMaplePoint(amount: number): void;
    getMaplePoint(): number;

    // --- 發/收道具 ---
    gainItemPeriod(id: number, quantity: number, period: number): void;
    gainItemPeriod(id: number, quantity: number, period: number, owner: string): void;
    gainItem(
      id: number,
      quantity?: number,
      randomStats?: boolean,
      period?: number,
      slots?: number,
      owner?: string,
      cg?: any
    ): void;

    // 依原檔還有很多 gainItem overload，視需要可再加

    // --- 派對共享 ---
    givePartyItems(id: number, quantity: number): void;
    givePartyExp(amount: number): void;
    givePartyNX(amount: number): void;
    endPartyQuest(amount: number): void;
    removeFromParty(id: number): void;

    // --- 使用道具 / 技能 ---
    useSkill(skill: number, level: number): void;
    useItem(id: number): void;
    cancelItem(id: number): void;

    // --- 親密度/好感度 ---
    gainCloseness(closeness: number, index: number): void;
    gainClosenessAll(closeness: number): void;

    // --- 技能教學 ---
    teachSkill(id: number, level: number): void;
    teachSkill(id: number, level: number, masterlevel: number): void;

    // --- 其他：地圖/玩家數量、傳入/判斷 ---
    getMonsterCount(mapid: number): number;
    getPlayerCount(mapid: number): number;
    haveMonster(mobid: number): boolean;
    getChannelNumber(): number;

    // --- 武陵道場 (dojo) ---
    dojo_getUp(): void;
    dojoAgent_NextMap(dojo: boolean, fromresting: boolean): boolean;
    dojo_getPts(): number;

    // --- 事件、儲存點 ---
    getEvent(loc: string): any;
    getSavedLocation(loc: string): number;
    saveLocation(loc: string): void;
    saveReturnLocation(loc: string): void;
    clearSavedLocation(loc: string): void;

    // --- 召喚提示 / 特效 ---
    summonMsg(msg: string): void;
    summonMsg(type: number): void;
    showInstruction(msg: string, width: number, height: number): void;
    showEffect(broadcast: boolean, effect: string): void;
    playerSummonHint(summon: boolean): void;

    // --- InfoQuest (Evan / Aran) ---
    getInfoQuest(id: number): string;
    updateInfoQuest(id: number, data: string): void;
    getEvanIntroState(data: string): boolean;
    updateEvanIntroState(data: string): void;
    Aran_Start(): void;
    evanTutorial(data: string, v1: number): void;
    AranTutInstructionalBubble(data: string): void;
    ShowWZEffect(data: string): void;
    showWZEffect(data: string): void;
    EarnTitleMsg(data: string): void;
    MovieClipIntroUI(enabled: boolean): void;

    // --- 物品操作 ---
    getInvType(i: number): any;
    getItemName(id: number): string;
    removeSlot(invType: number, slot: number, quantity: number): void;
    itemQuantity(itemid: number): number;

    // --- 寵物相關 ---
    gainPet(id: number, name: string, level: number, closeness: number, fullness: number): void;
    gainPet(id: number, name: string, level: number, closeness: number, fullness: number, period: number): void;
    gainPet(id: number, name: string, level: number, closeness: number, fullness: number, period: number, flags: number): void;

    // --- 公會GP ---
    gainGP(gp: number): void;
    getGP(): number;

    // --- 地圖特效 / 時間 ---
    showMapEffect(path: string): void;
    getCurrentTime(): number;

    // --- 送NPC訊息 ---
    sendNPCText(text: string, npc: number): void;

    // --- warpAllPlayer/Factory ---
    warpAllPlayer(from: number, to: number): void;
    getMapFactory(): any;

    // --- MTS / 線上人數 ---
    enterMTS(): void;
    getChannelOnline(): number;
    getTotalOnline(): number;

    // --- MP / 儲存 ---
    getMP(): number;
    setMP(x: number): void;
    save(dc?: boolean, fromcs?: boolean): number;
    save(): void;

    // --- 副本/隊伍/地圖狀態 ---
    hasSquadByMap(): boolean;
    hasEventInstance(): boolean;
    hasEMByMap(): boolean;

    // --- 後台指令 ---
    processCommand(line: string): void;

    // --- warpPlayer ---
    warpPlayer(from: number, to: number): void;
}

// 如果楓之谷腳本裡常用「cm」代表 AbstractPlayerInteraction，
// 可以在此宣告一個全域變數供 IntelliSense 辨識:
declare var cm: AbstractPlayerInteraction;

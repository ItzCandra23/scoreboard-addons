import { Player } from "bdsx/bds/player";
import { AddonData } from "../src/addon";
import { RankPerms } from "@bdsx/rank-perms";
import { PlayerRank } from "@bdsx/rank-perms/src/player";
import { Ranks } from "@bdsx/rank-perms/src";

export function getProcessedTags(player: Player): AddonData[] {
    return [
        ["{rank}", PlayerRank.getRank(player.getXuid())!],
        ["{real_rank}", PlayerRank.getRank(player.getXuid())!],
        ["{display_rank}", Ranks.getDisplay(PlayerRank.getRank(player.getXuid())!)!],
        ["{ranks}", RankPerms.getRanks().toString()],
    ];
}

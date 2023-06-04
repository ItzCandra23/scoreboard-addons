"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getProcessedTags = void 0;
const rank_perms_1 = require("@bdsx/rank-perms");
const player_1 = require("@bdsx/rank-perms/src/player");
const src_1 = require("@bdsx/rank-perms/src");
function getProcessedTags(player) {
    return [
        ["{rank}", player_1.PlayerRank.getRank(player.getXuid())],
        ["{real_rank}", player_1.PlayerRank.getRank(player.getXuid())],
        ["{display_rank}", src_1.Ranks.getDisplay(player_1.PlayerRank.getRank(player.getXuid()))],
        ["{ranks}", rank_perms_1.RankPerms.getRanks().toString()],
    ];
}
exports.getProcessedTags = getProcessedTags;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUmFua1Blcm1zLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiUmFua1Blcm1zLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUVBLGlEQUE2QztBQUM3Qyx3REFBeUQ7QUFDekQsOENBQTZDO0FBRTdDLFNBQWdCLGdCQUFnQixDQUFDLE1BQWM7SUFDM0MsT0FBTztRQUNILENBQUMsUUFBUSxFQUFFLG1CQUFVLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxPQUFPLEVBQUUsQ0FBRSxDQUFDO1FBQ2pELENBQUMsYUFBYSxFQUFFLG1CQUFVLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxPQUFPLEVBQUUsQ0FBRSxDQUFDO1FBQ3RELENBQUMsZ0JBQWdCLEVBQUUsV0FBSyxDQUFDLFVBQVUsQ0FBQyxtQkFBVSxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsT0FBTyxFQUFFLENBQUUsQ0FBRSxDQUFDO1FBQzVFLENBQUMsU0FBUyxFQUFFLHNCQUFTLENBQUMsUUFBUSxFQUFFLENBQUMsUUFBUSxFQUFFLENBQUM7S0FDL0MsQ0FBQztBQUNOLENBQUM7QUFQRCw0Q0FPQyJ9
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getProcessedTags = void 0;
const actor_1 = require("bdsx/bds/actor");
const player_1 = require("bdsx/bds/player");
const common_1 = require("bdsx/common");
const launcher_1 = require("bdsx/launcher");
function getProcessedTags(player) {
    return [
        ["{name}", player.getName()],
        ["{real_name}", player.getName()],
        ["{display_name}", player.getNameTag()],
        ["{gamemode}", player_1.GameType[player.getGameType()]],
        ["{platform}", common_1.BuildPlatform[player.getPlatform()]],
        ["{online}", launcher_1.bedrockServer.serverInstance.getActivePlayerCount()],
        ["{max_online}", launcher_1.bedrockServer.serverInstance.getMaxPlayers()],
        ["{item_name}", player.getMainhandSlot().getName()],
        ["{item_custom_name}", player.getMainhandSlot().getCustomName()],
        ["{item_id}", player.getMainhandSlot().getId()],
        ["{item_damage}", player.getMainhandSlot().getDamageValue()],
        ["{item_attack}", player.getMainhandSlot().getAttackDamage()],
        ["{item_count}", player.getMainhandSlot().getAmount()],
        ["{item_amount}", player.getMainhandSlot().getAmount()],
        ["{health}", player.getHealth()],
        ["{max_health}", player.getMaxHealth()],
        ["{x}", Math.floor(player.getFeetPos().x)],
        ["{y}", Math.floor(player.getFeetPos().y)],
        ["{z}", Math.floor(player.getFeetPos().z)],
        ["{dimension}", actor_1.DimensionId[player.getDimensionId()]],
        ["{ping}", launcher_1.bedrockServer.rakPeer.GetAveragePing(player.getNetworkIdentifier().address)],
        ["{xuid}", player.getXuid()],
        ["{server_version}", launcher_1.bedrockServer.serverInstance.getGameVersion().fullVersionString],
        ["{ip}", player.getNetworkIdentifier().getAddress()],
        ["{world_player_count}", launcher_1.bedrockServer.serverInstance.getPlayers().length],
        ["{motd}", launcher_1.bedrockServer.serverInstance.getMotd()],
    ];
}
exports.getProcessedTags = getProcessedTags;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQmFzaWNBZGRvbi5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIkJhc2ljQWRkb24udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUEsMENBQTZDO0FBQzdDLDRDQUFtRDtBQUNuRCx3Q0FBNEM7QUFDNUMsNENBQThDO0FBRzlDLFNBQWdCLGdCQUFnQixDQUFDLE1BQWM7SUFDM0MsT0FBTztRQUNILENBQUMsUUFBUSxFQUFFLE1BQU0sQ0FBQyxPQUFPLEVBQUUsQ0FBQztRQUM1QixDQUFDLGFBQWEsRUFBRSxNQUFNLENBQUMsT0FBTyxFQUFFLENBQUM7UUFDakMsQ0FBQyxnQkFBZ0IsRUFBRSxNQUFNLENBQUMsVUFBVSxFQUFFLENBQUM7UUFDdkMsQ0FBQyxZQUFZLEVBQUUsaUJBQVEsQ0FBQyxNQUFNLENBQUMsV0FBVyxFQUFFLENBQUMsQ0FBQztRQUM5QyxDQUFDLFlBQVksRUFBRSxzQkFBYSxDQUFDLE1BQU0sQ0FBQyxXQUFXLEVBQUUsQ0FBQyxDQUFDO1FBQ25ELENBQUMsVUFBVSxFQUFFLHdCQUFhLENBQUMsY0FBYyxDQUFDLG9CQUFvQixFQUFFLENBQUM7UUFDakUsQ0FBQyxjQUFjLEVBQUUsd0JBQWEsQ0FBQyxjQUFjLENBQUMsYUFBYSxFQUFFLENBQUM7UUFDOUQsQ0FBQyxhQUFhLEVBQUUsTUFBTSxDQUFDLGVBQWUsRUFBRSxDQUFDLE9BQU8sRUFBRSxDQUFDO1FBQ25ELENBQUMsb0JBQW9CLEVBQUUsTUFBTSxDQUFDLGVBQWUsRUFBRSxDQUFDLGFBQWEsRUFBRSxDQUFDO1FBQ2hFLENBQUMsV0FBVyxFQUFFLE1BQU0sQ0FBQyxlQUFlLEVBQUUsQ0FBQyxLQUFLLEVBQUUsQ0FBQztRQUMvQyxDQUFDLGVBQWUsRUFBRSxNQUFNLENBQUMsZUFBZSxFQUFFLENBQUMsY0FBYyxFQUFFLENBQUM7UUFDNUQsQ0FBQyxlQUFlLEVBQUUsTUFBTSxDQUFDLGVBQWUsRUFBRSxDQUFDLGVBQWUsRUFBRSxDQUFDO1FBQzdELENBQUMsY0FBYyxFQUFFLE1BQU0sQ0FBQyxlQUFlLEVBQUUsQ0FBQyxTQUFTLEVBQUUsQ0FBQztRQUN0RCxDQUFDLGVBQWUsRUFBRSxNQUFNLENBQUMsZUFBZSxFQUFFLENBQUMsU0FBUyxFQUFFLENBQUM7UUFDdkQsQ0FBQyxVQUFVLEVBQUUsTUFBTSxDQUFDLFNBQVMsRUFBRSxDQUFDO1FBQ2hDLENBQUMsY0FBYyxFQUFFLE1BQU0sQ0FBQyxZQUFZLEVBQUUsQ0FBQztRQUN2QyxDQUFDLEtBQUssRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxVQUFVLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUMxQyxDQUFDLEtBQUssRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxVQUFVLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUMxQyxDQUFDLEtBQUssRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxVQUFVLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUMxQyxDQUFDLGFBQWEsRUFBRSxtQkFBVyxDQUFDLE1BQU0sQ0FBQyxjQUFjLEVBQUUsQ0FBQyxDQUFDO1FBQ3JELENBQUMsUUFBUSxFQUFFLHdCQUFhLENBQUMsT0FBTyxDQUFDLGNBQWMsQ0FBQyxNQUFNLENBQUMsb0JBQW9CLEVBQUUsQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUN2RixDQUFDLFFBQVEsRUFBRSxNQUFNLENBQUMsT0FBTyxFQUFFLENBQUM7UUFDNUIsQ0FBQyxrQkFBa0IsRUFBRSx3QkFBYSxDQUFDLGNBQWMsQ0FBQyxjQUFjLEVBQUUsQ0FBQyxpQkFBaUIsQ0FBQztRQUNyRixDQUFDLE1BQU0sRUFBRSxNQUFNLENBQUMsb0JBQW9CLEVBQUUsQ0FBQyxVQUFVLEVBQUUsQ0FBQztRQUNwRCxDQUFDLHNCQUFzQixFQUFFLHdCQUFhLENBQUMsY0FBYyxDQUFDLFVBQVUsRUFBRSxDQUFDLE1BQU0sQ0FBQztRQUMxRSxDQUFDLFFBQVEsRUFBRSx3QkFBYSxDQUFDLGNBQWMsQ0FBQyxPQUFPLEVBQUUsQ0FBQztLQUNyRCxDQUFDO0FBQ04sQ0FBQztBQTdCRCw0Q0E2QkMifQ==
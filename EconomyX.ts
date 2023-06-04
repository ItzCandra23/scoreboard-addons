import { Player } from "bdsx/bds/player";
import { AddonData } from "../src/addon";
import { EconomyX } from "@bdsx/economy-x";

export function getProcessedTags(player: Player): AddonData[] {
    return [
        ["{money}", EconomyX.getMoney(player)],
    ];
}

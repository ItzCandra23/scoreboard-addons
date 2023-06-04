import { Player } from "bdsx/bds/player";
import { AddonData } from "../src/addon";
import { EconomyX } from "@bdsx/economy-x";
import { EconomyConfig } from "@bdsx/economy-x/src";

export function getProcessedTags(player: Player): AddonData[] {
    return [
        ["{money}", EconomyX.getMoney(player)],
        ["{currency}", EconomyConfig.getCurrency()],
    ];
}

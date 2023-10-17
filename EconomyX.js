"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getProcessedTags = void 0;
const economy_x_1 = require("@bdsx/economy-x");
function getProcessedTags(player) {
    return [
        ["{money}", economy_x_1.EconomyX.getMoney(player).toLocaleString()],
        ["{currency}", economy_x_1.EconomyX.currency()],
    ];
}
exports.getProcessedTags = getProcessedTags;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRWNvbm9teVguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJFY29ub215WC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFFQSwrQ0FBMkM7QUFFM0MsU0FBZ0IsZ0JBQWdCLENBQUMsTUFBYztJQUMzQyxPQUFPO1FBQ0gsQ0FBQyxTQUFTLEVBQUUsb0JBQVEsQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLENBQUMsY0FBYyxFQUFFLENBQUM7UUFDdkQsQ0FBQyxZQUFZLEVBQUUsb0JBQVEsQ0FBQyxRQUFRLEVBQUUsQ0FBQztLQUN0QyxDQUFDO0FBQ04sQ0FBQztBQUxELDRDQUtDIn0=
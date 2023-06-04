"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getProcessedTags = void 0;
const economy_x_1 = require("@bdsx/economy-x");
const src_1 = require("@bdsx/economy-x/src");
function getProcessedTags(player) {
    return [
        ["{money}", economy_x_1.EconomyX.getMoney(player)],
        ["{currency}", src_1.EconomyConfig.getCurrency()],
    ];
}
exports.getProcessedTags = getProcessedTags;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRWNvbm9teVguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJFY29ub215WC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFFQSwrQ0FBMkM7QUFDM0MsNkNBQW9EO0FBRXBELFNBQWdCLGdCQUFnQixDQUFDLE1BQWM7SUFDM0MsT0FBTztRQUNILENBQUMsU0FBUyxFQUFFLG9CQUFRLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQ3RDLENBQUMsWUFBWSxFQUFFLG1CQUFhLENBQUMsV0FBVyxFQUFFLENBQUM7S0FDOUMsQ0FBQztBQUNOLENBQUM7QUFMRCw0Q0FLQyJ9
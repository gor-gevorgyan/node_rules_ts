"use strict";

import {runFlightRules} from "../check";

const testData = require('../../test.json');

test('flight Rules', async () => {
    let check: boolean = await runFlightRules(testData.PreviousFlightState, testData.NewFlightState, testData.passenger);

    expect(check).toEqual(true);
});
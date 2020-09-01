'use strict';

import {runFlightRules} from "./check";

const testData = require('../test.json');

runFlightRules(testData.PreviousFlightState, testData.NewFlightState, testData.passenger);
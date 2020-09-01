"use strict";

import {StatusType} from "../types";

export interface RuleState {
    previousFlightState: StatusType,
    newFlightState: StatusType,
};
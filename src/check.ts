"use strict";

import {StatusType} from "./types";
import {PassengerInterface} from "./interfaces";
import helpers from "./helpers";
import rules from "./rules";

export async function runFlightRules(PreviousFlightState: StatusType, NewFlightState: StatusType, Passenger: PassengerInterface): Promise<boolean> {
    return await helpers.engine(rules, {
            previousFlightState: PreviousFlightState,
            newFlightState: NewFlightState,
        }
        , Passenger);
};
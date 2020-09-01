"use strict";

import {StatusType} from "../types";

export interface Flight {
    Carrier: string,
    FlightNo: number,
    Destination: string,
    Origin: string,
    Status: StatusType,
    Gate: string
};
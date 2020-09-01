"use strict";

import {Notification} from "./Notification";

export interface Passenger {
    Name: string,
    Email: string,
    PhoneNo: string,
    Notifications: Notification
};
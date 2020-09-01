"use strict";

import {Engine} from "json-rules-engine";
import {RuleType, GlobalObjectType} from "../types";
import {FlightInterface, RuleGateInterface} from "../interfaces";

export default async function (rules: Object, firstFact: RuleType, passenger): Promise<boolean> {
    const flight: FlightInterface = {
        Carrier: "BA",
        FlightNo: 113,
        Destination: "LHR",
        Origin: "JFK",
        Status: "SCHEDULED",
        Gate:  "B34"
    };

    async function checkRule(rule, fact) {
        let engine = new Engine();
        let check = engine.addRule(rule);

        let result = await check.run(fact)
            .then(result => {
               // console.log(result.events);
               if (result.events.length > 0) {
                   let event: GlobalObjectType = result.events[0];
                   let message: string = '';

                    switch (event.type) {
                        case 'isLanded':
                            message = event.params.message.replace('{FLIGHT_NO}', flight.FlightNo);
                            passenger.Notifications.Landed = true;
                            flight.Gate = "B35";

                            console.log(message);
                            break;
                        case 'newGate':
                            message = event.params.message.replace('{GATE}', flight.Gate);

                            console.log(message);
                            break;
                    }
               }
            })
            .catch(error => {
                console.log(error.stack);
            });

        return result;
    }

    const oldFlightGate: string = flight.Gate;
    let retData: boolean = false;

    for (const [key, rule] of Object.entries(rules)) {
        switch (key) {
            case 'rule_1':
                await checkRule(rule, firstFact);
                break;
            case 'rule_2':
                retData = passenger.Notifications.Landed && oldFlightGate !== flight.Gate;
                let secondFact: RuleGateInterface = {
                    landedNotification: retData,
                };
                await checkRule(rule, secondFact);
                break;
            default:
                throw new Error('Invalid rule');
        }
    }

    return retData;
}
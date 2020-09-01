"use strict";

import fs from "fs";
import {basename} from "path";

const rules: Object = {};

let files = fs.readdirSync(__dirname);

files.forEach((fileName) => {
    if (fileName !== "index.ts") {
        let name = basename(fileName, '.json');

        rules[name] = require(`./${fileName}`);
    }
});

export default rules;
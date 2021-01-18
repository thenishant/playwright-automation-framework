"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Utils = void 0;
const fs = require('fs');
class Utils {
    getRandomString() {
        return Math.random().toString(20).substr(2, 6);
    }
}
exports.Utils = Utils;

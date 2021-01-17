"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Utils = void 0;
const fs = require('fs');
class Utils {
    getCookies() {
        const cookies = fs.readFileSync('cookies.json', 'utf8');
        return JSON.parse(cookies);
    }
}
exports.Utils = Utils;

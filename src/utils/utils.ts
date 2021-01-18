const fs = require('fs');

export class Utils {

getRandomString(): string {
    return Math.random().toString(20).substr(2, 6)
}
}
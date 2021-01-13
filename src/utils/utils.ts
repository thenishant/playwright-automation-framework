const fs = require('fs');

export class Utils {

getCookies() : any {
    const cookies = fs.readFileSync('cookies.json', 'utf8');
    return JSON.parse(cookies);
} 
}
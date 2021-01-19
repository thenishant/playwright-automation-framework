const fs = require('fs');
let faker = require('faker');


export class Utils {

    getRandomString(): string {
        return Math.random().toString(20).substr(2, 6)
    }

    getRandomEmailId(): string {
        return faker.internet.email()
    }

    getRandomName(): string {
        return faker.name.firstName()
    }
}
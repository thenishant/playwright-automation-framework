"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.NewProjectPage = void 0;
const config_json_1 = __importDefault(require("../../data/config.json"));
class NewProjectPage {
    constructor(page) {
        this.newProjectText = 'text=Create new project';
        this.blankProjectLink = config_json_1.default.newProjectUrl;
        this.page = page;
    }
    async waitForPageLoad() {
        await this.page.waitForSelector(this.newProjectText);
    }
    async clickOnBlankProject() {
        await this.page.goto(this.blankProjectLink);
    }
}
exports.NewProjectPage = NewProjectPage;

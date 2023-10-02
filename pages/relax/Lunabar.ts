import {expect, type Locator, Page} from "@playwright/test"
import {log} from "util";


export default class LunabarPage {
    readonly page: Page
    readonly phoneNumbersButton: Locator
    readonly phoneNumbersElements: Locator

    expectedNumbers: string[] = ["+375 33 333-33-29", "+375 33 333-33-49"]

    constructor(page: Page) {
        this.page = page;
        this.phoneNumbersButton = page.locator("//span[text()='Телефоны']")
    }


    async getNumbers() {
        await this.phoneNumbersButton.click()
        let phoneNumbers = await this.page.$$("//span[text()='Телефоны']")
        expect(this.expectedNumbers.toString() === phoneNumbers.toString())
    }
}
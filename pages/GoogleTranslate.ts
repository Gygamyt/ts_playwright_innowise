import {expect, type Locator, Page} from "@playwright/test";


export default class GoogleTranslate {

    readonly page: Page;
    readonly allLangRightButton: Locator;
    readonly russianLanguageWhenRightButtonClicked: Locator;
    readonly textForTranslateField: Locator;
    readonly fieldWithResult: Locator;

    constructor(page: Page) {
        this.page = page;
        this.allLangRightButton = page.getByRole('button', {name: 'More target languages'});
        this.russianLanguageWhenRightButtonClicked = page.getByRole('option', {name: 'Russian'});
        this.textForTranslateField = page.getByLabel('Source text', { exact: true });
        this.fieldWithResult = page.locator("(//span[@lang=\"ru\"])[1]")
    }

    async openPage() {
        await this.page.goto("https://translate.google.com/")
    }

    async pickRequiredLanguage() {
        await this.allLangRightButton.click()
        await this.russianLanguageWhenRightButtonClicked.click()
    }

    async enterTheText() {
        await this.textForTranslateField.click()
        await this.textForTranslateField.fill("Test")
    }

    async getResult() {
        return this.fieldWithResult.textContent()
    }
}
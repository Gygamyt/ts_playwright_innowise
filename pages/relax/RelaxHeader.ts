import {type Locator, Page} from "@playwright/test"

export default class RelaxHeader {
    readonly page: Page
    readonly searchBar: Locator
    readonly resultLunabar: Locator
    readonly searchField: Locator

    constructor(page: Page) {
        this.page = page;
        this.searchBar = page.locator('#search_open')
        this.resultLunabar = page.locator("//a[contains(@href, 'lunabar')]")
        this.searchField = page.getByRole('textbox').nth(1);
    }
    async openPage() {
        await this.page.goto("https://www.relax.by/")
    }

    async openLunabarPage() {
        await this.searchBar.click()
        await this.searchField.fill("Luna")
        await this.resultLunabar.click()
    }
}
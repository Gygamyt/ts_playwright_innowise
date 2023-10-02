import GoogleTranslate from "../pages/GoogleTranslate";
import {test, expect} from "@playwright/test";


test("translate", async ({page}) => {
    const googleTranslatePage = new GoogleTranslate(page)

    await googleTranslatePage.openPage()
    await googleTranslatePage.pickRequiredLanguage()
    await googleTranslatePage.enterTheText()
    await expect(googleTranslatePage.fieldWithResult).toContainText("Тест")
})
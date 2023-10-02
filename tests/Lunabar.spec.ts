import {test, expect} from '@playwright/test';
import RelaxHeader from "../pages/relax/RelaxHeader";
import LunabarPage from "../pages/relax/Lunabar";

test('Lunabar.spec.ts', async ({page}) => {
    const relaxHeader = new RelaxHeader(page)
    const lunabarPage = new LunabarPage(page)


    await relaxHeader.openPage()
    await relaxHeader.openLunabarPage()
    expect(page.url()==="https://lunabar.relax.by/")
    await lunabarPage.getNumbers()
});
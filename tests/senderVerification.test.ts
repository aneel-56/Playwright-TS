import {test, expect , chromium} from "@playwright/test";

test.describe("Sender Verification", () => {
    test("Sender Verification Window PopUp",async ({page}) => {
        await page.goto("https://mirsbranchsit.digitalmta.com/login");
        
    })
})
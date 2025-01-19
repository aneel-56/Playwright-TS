import { chromium, test, expect } from "@playwright/test";
//chromium is a browser engine

test.describe("Demo Testing Youtube", () => {
  test("Login test demo", async () => {
    const browser = await chromium.launch({ headless: false });
    const context = await browser.newContext();
    //the newContext doesnot share the cookies with other browser
    const page = await context.newPage();

    await page.goto("https://ecommerce-playground.lambdatest.io/");
    await page.hover(
      "//a[@data-toggle='dropdown']//span[contains(.,'My account')]" //we need "@" for the attribute inside a html tag
    );
    await page.click("text = Login"); // or ("'Login'")
    await page.fill("input[name ='email']", "anx@gmail.xom");
    await page.fill("input[name ='password']", "Notmypass@6");

    await page.click("//input[@type='submit']");

    const errorMessage = page.locator(
      "//div[contains(@class, 'alert-danger')]"
    );
    await expect(errorMessage).toBeVisible();
    await expect(errorMessage).toHaveText(
      "Warning: Your account has exceeded allowed number of login attempts. Please try again in 1 hour."
    );
  });

  test("Simple Calculator", async ({ page }) => {
    await page.goto(
      "https://www.lambdatest.com/selenium-playground/simple-form-demo"
    );
    const sum1 = page.locator("#sum1");
    const sum2 = page.locator("#sum2");
    const checkValue = page.locator("//button[text()='Get Sum']");

    let num1 = 123;
    let num2 = 456;
    let result = num2 + num1;
    await sum1.fill("" + num1);
    //type is deprecated
    await sum2.fill("" + num2);
    await checkValue.click();

    const resultMessage = page.locator("#addmessage");
    expect(resultMessage).toHaveText("" + result);
  });
});

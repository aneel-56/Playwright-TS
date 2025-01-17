import { chromium, test } from "@playwright/test";
//chromium is a browser engine

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

  await page.click("input[value = 'Login']");
});

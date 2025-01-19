import { expect, Locator, test } from "@playwright/test";
import { count } from "console";

// test("checkbox test", async ({ page }) => {
//   await page.goto(
//     "https://www.lambdatest.com/selenium-playground/checkbox-demo"
//   );
//   const checkbox = page.locator("#isAgeSelected");
//   expect(checkbox).not.toBeChecked();
// });

// test("disabled checkbox", async ({ page }) => {
//   await page.goto(
//     "https://www.lambdatest.com/selenium-playground/checkbox-demo"
//   );
//   const checkbox = page.locator(
//     "(//label[contains(text(), 'Option 3')]/preceding-sibling::input[@type='checkbox'])[1]"
//   );
//   expect(checkbox).toBeDisabled();
// });

test("check all checkbox", async ({ page }) => {
  await page.goto(
    "https://www.lambdatest.com/selenium-playground/checkbox-demo"
  );
  const checkboxes = page.locator(
    "//div[contains(@class, 'input-body')]//div/input[@type='checkbox']"
  );
  const count = await checkboxes.count();
  for (let i = 0; i < count; i++) {
    checkboxes.nth(i).click();
  }
  for (let i = 0; i < count; i++) {
   expect(checkboxes.nth(i)).toBeChecked;
  }
});

test("Check all at once", async({ page }) => {
  await page.goto("https://www.lambdatest.com/selenium-playground/checkbox-demo");
  const checkboxes = page.locator(
    "//div[contains(@class, 'input-body')]//div/input[@type='checkbox']"
  );
  const count = await checkboxes.count();
  const checkAll = page.locator("input[type='button'][value='Check All']");

  checkAll.click();

  for (let i=0; i< count; i++){
    expect(checkboxes.nth(i)).toBeChecked;
  }
});


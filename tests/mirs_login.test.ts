import { test, chromium, expect } from "@playwright/test";

test.describe("MIRS Login Page test", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("https://mirsbranchsit.digitalmta.com/login");
  });
  test("Invalid username and password test MIRSBranch", async ({ page }) => {
    await page.goto("https://mirsbranchsit.digitalmta.com/login");
    await page.fill("//input[@placeholder = 'Username']", "Invalid Username");
    await page.fill("//input[@placeholder = 'Password']", "Invalid Password");
    await page.locator("//button[@type='submit']").click();
    const errorToast = page.locator("text='Invalid Username or Password'");
    await expect(errorToast).toBeVisible();
  });

  test("Empty Username and password test MIRSBranch ", async ({ page }) => {
    await page.goto("https://mirsbranchsit.digitalmta.com/login");
    await page.locator("//button[@type='submit']").click();

    const usernameValidation = page.locator("text='Username is required'");
    const passwordValidation = page.locator("text='Password is required'");
    await expect(usernameValidation).toBeVisible({ timeout: 5000 });
    await expect(passwordValidation).toBeVisible({ timeout: 5000 });
  });

  //   test("Eye button functionlity", async ({ page }) => {
  //     await page.goto("https://mirsbranchsit.digitalmta.com/login");
  //     await page.fill("//input[@placeholder = 'Username']", "avhijitbranch");
  //     const passwordField = page.locator("//input[@placeholder='Password']");
  //     await page.fill("//input[@placeholder='Password']", "Branchuser@56");

  //     await page
  //       .locator("//input[@placeholder = 'Password']//following::span")
  //       .click();
  //   });
  test("Valid Username and password test MIRSBranch", async ({ page }) => {
    await page.goto("https://mirsbranchsit.digitalmta.com/login");
    await page.fill("//input[@placeholder = 'Username']", "avhijit");
    await page.fill("//input[@placeholder='Password']", "Branchuser@56");
    await page.locator("//button[@type='submit']").click();
    await page.waitForTimeout(5000);
    await expect(page).toHaveURL(
      "https://mirsbranchsit.digitalmta.com/dashboard"
    );
  });

  test("", async ({ page }) => {
    await page.goto("https://mirsbranchsit.digitalmta.com/login");
    const username = page.locator("input#username");
    expect(username).toHaveAttribute("placeholder", "Username");
    await username.fill("invalidusername");
  });
});

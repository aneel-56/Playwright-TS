import { test, expect } from "@playwright/test";

test.describe("Interact with Frames ", async () => {
  test("Verify frame input text", async ({ page }) => {
    await page.goto("https://letcode.in/frame");

    // First locate and switch to the frame
    const frame = page.frameLocator("#firstFr");
    const inp1 = "This is my First Name";
    const inp2 = "This is my Last Name";
    const allframe = page.frames();
    console.log("All the frames : ", allframe.length);

    // Now locate elements within the frame
    const FirstName = frame.locator("input[name='fname']");
    const LastName = frame.locator("input[name='lname']");

    // Fill the input fields
    await FirstName.fill(inp1);
    await LastName.fill(inp2);

    // Locate the result text within the frame
    const result = frame.locator("p.has-text-info");

    // Assert
    await expect(result).toBeVisible();
    await expect(result).toHaveText("You have entered " + inp1 + " " + inp2);
  });
});

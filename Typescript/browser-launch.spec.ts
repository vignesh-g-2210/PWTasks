import { chromium, test } from "@playwright/test";

test('launch Microsoft Edge', async () => {
  const browserInstance = await chromium.launch({
    headless: false, channel: "msedge"
  });

  const browserContext = await browserInstance.newContext();
  const page = await browserContext.newPage();
  await page.goto('https://www.youtube.com/');

  await browserInstance.close();
});

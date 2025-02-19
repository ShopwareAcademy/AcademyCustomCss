import { test, expect } from './BaseTestFile';

test('Test body color', async ({ page }) => {

  await page.goto('/');

  const body = await page.$('body');
  const backgroundColor = await body.evaluate(element => getComputedStyle(element).backgroundColor);
  expect(backgroundColor).toBe('rgb(0, 0, 255)');

});

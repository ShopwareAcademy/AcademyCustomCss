import { test, expect } from './BaseTestFile';

test('Test body color', async ({ page }) => {

  await page.goto('/');

  const mainNavigation = await page.$('.main-navigation');
  const backgroundColor = await mainNavigation.evaluate(element => getComputedStyle(element).backgroundColor);
  expect(backgroundColor).toBe('rgb(236, 236, 236)');

});

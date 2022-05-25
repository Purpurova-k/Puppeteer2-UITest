module.exports = {
  clickElement: async (page, selector) => {
    await page.waitForSelector(selector, { timeout: 60000 });
    return page.click(selector);
  },

  getTextContent: async (page, selector) => {
    await page.waitForSelector(selector, { timeout: 60000 });
    return await page.$eval(selector, (element) => {
      return element.textContent;
    });
  },
};

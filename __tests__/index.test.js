const openPage = async (url = '/') => page.goto(`http://localhost:${process.env.TEST_SERVER_PORT}${url}`);

describe('Basic integration', () => {

    it('shows the page', async () => {

        await openPage();

        await page.waitForSelector('.foo');

        let text = await page.evaluate(() => document.body.textContent)
        
        expect(text).toContain('Hello World!')

    },30000);

});
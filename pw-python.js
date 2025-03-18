const { chromium } = require('playwright');
const TurndownService = require('turndown');
const fs = require('fs').promises;
const path = require('path');

const BASE_URL = 'https://playwright.dev/python/docs/intro';
const OUTPUT_FILE = 'playwright-python-docs-for-llm.md';

async function getLinks(page) {
    await page.waitForSelector("nav[aria-label='Docs sidebar']");
    await page.locator("//a[normalize-space()='Integrations']").click();
    
    const firstLevelLinks = await page.$$eval(
        "nav[aria-label='Docs sidebar'] > ul > li > a",
        links => links.map(link => link.href)
    );

    const secondLevelLinks = await page.$$eval(
        "nav[aria-label='Docs sidebar'] > ul > li > ul > li > a",
        links => links.map(link => link.href)
    );

    const firstPageLinks = [...new Set([...firstLevelLinks, ...secondLevelLinks])];

    await page.locator("//a[normalize-space()='API']").click();
    await page.waitForLoadState();

    const firstLevelLinksAPI = await page.$$eval(
        "nav[aria-label='Docs sidebar'] > ul > li > ul > li > a",
        links => links.map(link => link.href)
    );

    const secondLevelLinksAPI = await page.$$eval(
        "nav[aria-label='Docs sidebar'] > ul > li > ul > li > ul > li > a",
        links => links.map(link => link.href)
    );    

    const secondPageLinks = [...new Set([...firstLevelLinksAPI, ...secondLevelLinksAPI])];
    return [...new Set([...firstPageLinks, ...secondPageLinks])];
}

async function appendToFile(content) {
    await fs.appendFile(OUTPUT_FILE, content + '\n\n', 'utf8');
}

async function main() {
    const browser = await chromium.launch({ headless: true }); 
    const context = await browser.newContext();
    const page = await context.newPage();
    const turndownService = new TurndownService();

    try {
        await fs.writeFile(OUTPUT_FILE, '', 'utf8');
        await appendToFile(`# THIS DOCUMENT CONTAINS THE COMPLETE DOCUMENTATION FOR PLAYWRIGHT PYTHON.\n\n`);

        await page.goto(BASE_URL, { waitUntil: 'networkidle' });
        
        const links = await getLinks(page);
        console.log(`Found ${links.length} documentation pages to process`);

        for (const [index, url] of links.entries()) {
            try {
                console.log(`Processing page ${index + 1}/${links.length}: ${url}`);
                
                await page.goto(url, { waitUntil: 'networkidle' });
                await page.waitForSelector('.theme-doc-markdown.markdown');
                
                const title = await page.$eval('h1', h1 => h1.textContent);

                const content = await page.$eval(
                    '.theme-doc-markdown.markdown',
                    element => element.innerHTML
                );

                if (content) {
                    const markdown = turndownService.turndown(content);
                    
                    await appendToFile(`# ${title}\n\n${markdown}`);
                    console.log(`Successfully processed: ${title}`);
                }
            } catch (error) {
                console.error(`Error processing ${url}:`, error);
            }
        }

        console.log('✅ Documentation scraping completed successfully!');
    } catch (error) {
        console.error('❌ An error occurred:', error);
    } finally {
        await browser.close();
    }
}

main().catch(console.error); 
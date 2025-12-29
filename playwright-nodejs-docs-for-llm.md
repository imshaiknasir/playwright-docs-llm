# THIS DOCUMENT CONTAINS THE COMPLETE DOCUMENTATION FOR PLAYWRIGHT NODEJS.



# Getting started - VS Code

Getting started - VS Code
=========================

Introduction[​](#introduction "Direct link to Introduction")
------------------------------------------------------------

The Playwright VS Code extension brings the power of Playwright Test directly into your editor, allowing you to run, debug, and generate tests with a seamless UI-driven experience. This guide will walk you through setting up the extension and using its core features to supercharge your end-to-end testing workflow.

Prerequisites[​](#prerequisites "Direct link to Prerequisites")
---------------------------------------------------------------

Before you begin, make sure you have the following installed:

*   [Node.js](https://nodejs.org/) (LTS version recommended)
*   [Visual Studio Code](https://code.visualstudio.com/)

Getting Started[​](#getting-started "Direct link to Getting Started")
---------------------------------------------------------------------

### Installation & Setup[​](#installation--setup "Direct link to Installation & Setup")

1.  **Install the Extension**: Open the Extensions view in VS Code (`Ctrl+Shift+X` or `Cmd+Shift+X`) and search for "Playwright". [Install the official extension from Microsoft](https://marketplace.visualstudio.com/items?itemName=ms-playwright.playwright).

![install playwright extension](/assets/images/vscode-extension-ce873e1c0d856b8c255e9de0781eb8d9.png)

1.  **Install Playwright**: Once the extension is installed, open the Command Palette (`Ctrl+Shift+P` or `Cmd+Shift+P`) and run the **Test: Install Playwright** command.

![install playwright](/assets/images/install-playwright-f211fc1079a8b3a01bcbd28e711c4eec.png)

3.  **Select Browsers**: Choose the browsers you want for your tests (e.g., Chromium, Firefox, WebKit). You can also add a GitHub Actions workflow to run tests in CI. These settings can be changed later in your `playwright.config.ts` file.

![install browsers](/assets/images/install-browsers-f8158381ce036e1299547aed66a4ccf0.png)

### Opening the Testing Sidebar[​](#opening-the-testing-sidebar "Direct link to Opening the Testing Sidebar")

Click the **Testing icon** in the VS Code Activity Bar to open the Test Explorer. Here, you'll find your tests, as well as the Playwright sidebar for managing projects, tools, and settings.

![Testing Sidebar](/assets/images/testing-sidebar-25b968f725bc3c175a12a4aa8b662c81.png)

Core Features[​](#core-features "Direct link to Core Features")
---------------------------------------------------------------

### Running Your Tests[​](#running-your-tests "Direct link to Running Your Tests")

*   **Run a Single Test**: Click the green "play" icon next to any test to run it. The play button will change to a green checkmark if the test passes or a red X if the test fails. You'll be able to see how long the test took to run displayed next to the test name. Additionally, the Test Results panel will automatically open at the bottom of VS Code, showing a summary of the test execution including how many tests ran, how many passed, failed, or were skipped, along with the total execution time.

![run a single test](/assets/images/run-single-test-a2c8b8cee4b02a198e11fcc0db4503a8.png)

*   **Run All Tests**: You can run all tests at different levels. Click the play icon next to a specific test file to run all tests within that file, or click the play icon at the very top of the Test Explorer to run all tests across your entire project.

![run all tests](/assets/images/run-all-tests-e16ffc6a8477c16b38b84dea676d671b.png)

*   **Run on Multiple Browsers**: In the Playwright sidebar, check the boxes for the projects (browsers) you want to test against. Projects in Playwright represent different browser configurations - each project typically corresponds to a specific browser (like Chromium, Firefox, or WebKit) with its own settings such as viewport size, device emulation, or other browser-specific options. When you run a test, it will execute across all selected projects, allowing you to verify your application works consistently across different browsers and configurations.

![Selecting projects to run tests on](/assets/images/select-projects-a66b52a5cc75100faef51e14e495d460.png)

*   **Show Browser**: To watch your tests execute in a live browser window, enable the **Show Browser** option in the sidebar. Disable it to run in headless mode (where tests run in the background without opening a visible browser window).

![show browsers while running tests](/assets/images/show-browser-b091435ade8f511a64a9f75c54b52f43.png)

### Debugging Your Tests[​](#debugging-your-tests "Direct link to Debugging Your Tests")

The VS Code extension provides powerful debugging tools to help you identify and fix issues in your tests. You can set breakpoints, inspect variables, view detailed error messages, get AI-powered suggestions to resolve test failures, and use the comprehensive trace viewer to analyze test execution step-by-step.

*   **Using Breakpoints**: Set a breakpoint by clicking in the gutter next to a line number. Right-click the test and select **Debug Test**. The test will pause at your breakpoint, allowing you to inspect variables and step through the code.

![setting debug mode](/assets/images/debug-mode-e145cba936d960900fc79b646016a9ba.png)

*   **Live Debugging**: With **Show Browsers** enabled, click on a locator in your code. Playwright will highlight the corresponding element in the browser, making it easy to verify locators.

![live debugging in vs code](/assets/images/live-debugging-73579e1b53e40d1e0169fd2254e4336a.png)

*   **Viewing Error Messages**: If a test fails, the extension displays detailed error messages, including the expected vs. received values and a full call log, directly in the editor.

![error messaging in vs code](/assets/images/error-messaging-74058e7f1bc8b8f8b477b726fa623493.png)

*   **Fix with AI**: When a test fails, click the sparkle icon next to the error to get an AI-powered fix suggestion from Copilot. Copilot analyzes the error and suggests a code change to resolve the issue.

![fix with ai in vs code](/assets/images/fix-with-ai-011728a352c48c0083ac472fe739815d.png)

*   **Debugging with Trace Viewer**: For comprehensive debugging, enable the **Show Trace Viewer** option in the Playwright sidebar. When your test finishes, a detailed trace will automatically open, providing you with a complete timeline of your test execution. The trace viewer is particularly useful for:
*   **Step-by-step analysis**: Navigate through each action your test performed with precise timestamps
*   **DOM inspection**: View DOM snapshots at any point during test execution to see exactly what the page looked like
*   **Network monitoring**: Examine all network requests and responses that occurred during the test
*   **Console logs**: Access all console messages and errors from the browser
*   **Source mapping**: Jump directly to the source code that executed each action
*   **Visual debugging**: See screenshots and understand what the user would have seen at each step

The trace viewer is especially valuable when debugging flaky tests or understanding complex user interactions.

![trace viewer debugging](/assets/images/trace-viewer-debug-1386da3466791b55394091f252ec2ca9.png)

To learn more, see our [Trace Viewer guide](/docs/trace-viewer).

### Generating Tests with CodeGen[​](#generating-tests-with-codegen "Direct link to Generating Tests with CodeGen")

CodeGen is Playwright's powerful test generation tool that automatically creates test code by recording your interactions with a web page. Instead of writing tests from scratch, you can simply navigate through your application while CodeGen captures your actions and converts them into reliable test code with proper locators and assertions.

*   **Record a New Test**: Click **Record new** in the sidebar. A browser window will open. As you interact with the page, Playwright will automatically generate the test code. You can also generate assertions from the recording toolbar.

![record a new test](/assets/images/record-new-test-cafcc94d48bf8ee82af0bc4e90a100ef.png)

*   **Record at Cursor**: Place your cursor inside an existing test and click **Record at cursor** to add new actions at that specific point. ![record at cursor](/assets/images/record-at-cursor-cc902be640e0c7789eee76efa37fbb53.png)
*   **Pick a Locator**: Use the **Pick locator** tool to click on any element in the opened browser. Playwright will determine the best locator and copy it to your clipboard, ready to be pasted into your code.

![pick locators](/assets/images/pick-locator-21752d14dc07a83f5fb1bd67b6c0e0c0.png)

To learn more, see our [CodeGen guide](/docs/codegen).

Advanced Features[​](#advanced-features "Direct link to Advanced Features")
---------------------------------------------------------------------------

### Project Dependencies[​](#project-dependencies "Direct link to Project Dependencies")

Use [project dependencies](/docs/test-projects) to define setup tests that run before other tests. For example, you can create a login test that runs first, then reuse that authenticated state across multiple tests without having to log in again for each test. In VS Code, you can see these setup tests in the Test Explorer and run them independently when needed.

![setup tests in vscode](/assets/images/setup-tests-8c128d60e165d9cbf13e0bdd3eb5c411.png)

To learn more, see our [Project Dependencies guide](/docs/test-projects).

### Global Setup[​](#global-setup "Direct link to Global Setup")

For tasks that need to run only once before all tests (like seeding a database), use **Global Setup**. You can trigger the global setup and teardown manually from the Playwright sidebar.

![running global setup](/assets/images/global-setup-c169662b46ac06131aa560fdf11e4deb.png)

### Multiple Configurations[​](#multiple-configurations "Direct link to Multiple Configurations")

If you have multiple `playwright.config.ts` files, you can switch between them using the gear icon in the Playwright sidebar. This allows you to easily work with different test suites or environments.

![Selecting a configuration file](/assets/images/selecting-configuration-8f3a095d5f89449532d3cc0276c29ba7.png)

Quick Reference[​](#quick-reference "Direct link to Quick Reference")
---------------------------------------------------------------------

Action

How to do it in VS Code

**Install Playwright**

Command Palette → `Test: Install Playwright`

**Run a Test**

Click the "play" icon next to the test

**Debug a Test**

Set a breakpoint, right-click the test → `Debug Test`

**Show Live Browser**

Enable `Show Browsers` in the Playwright sidebar

**Record a New Test**

Click `Record new` in the Playwright sidebar

**Pick a Locator**

Click `Pick locator` in the Playwright sidebar

**View Test Trace**

Enable `Show Trace Viewer` in the Playwright sidebar

What's Next[​](#whats-next "Direct link to What's Next")
--------------------------------------------------------

*   [Write tests using web-first assertions, page fixtures, and locators](/docs/writing-tests)
*   [Run your tests on CI](/docs/ci-intro)
*   [Learn more about the Trace Viewer](/docs/trace-viewer)

# Release notes

Release notes
=============

Version 1.57[​](#version-157 "Direct link to Version 1.57")
-----------------------------------------------------------

### Speedboard[​](#speedboard "Direct link to Speedboard")

In HTML reporter, there's a new tab we call "Speedboard":

![Speedboard](/assets/images/speedboard-a8fe4e48388f4075fdd70e83d2b53e7a.png)

It shows you all your executed tests sorted by slowness, and can help you understand where your test suite is taking longer than expected. Take a look at yours - maybe you'll find some tests that are spending a longer time waiting than they should!

### Chrome for Testing[​](#chrome-for-testing "Direct link to Chrome for Testing")

Starting with this release, Playwright switches from Chromium, to using [Chrome for Testing](https://developer.chrome.com/blog/chrome-for-testing/) builds. Both headed and headless browsers are subject to this. Your tests should still be passing after upgrading to Playwright 1.57.

We're expecting no functional changes to come from this switch. The biggest change is the new icon and title in your toolbar.

![new and old logo](/assets/images/cft-logo-change-e6c83cd629c1cf92a7856fe6e42ab80a.png)

If you still see an unexpected behaviour change, please [file an issue](https://github.com/microsoft/playwright/issues/new).

On Arm64 Linux, Playwright continues to use Chromium.

### Waiting for webserver output[​](#waiting-for-webserver-output "Direct link to Waiting for webserver output")

[testConfig.webServer](/docs/api/class-testconfig#test-config-web-server) added a `wait` field. Pass a regular expression, and Playwright will wait until the webserver logs match it.

    import { defineConfig } from '@playwright/test';export default defineConfig({  webServer: {    command: 'npm run start',    wait: {      stdout: '/Listening on port (?<my_server_port>\\d+)/'    },  },});

If you include a named capture group into the expression, then Playwright will provide the capture group contents via environment variables:

    import { test, expect } from '@playwright/test';test.use({ baseUrl: `http://localhost:${process.env.MY_SERVER_PORT ?? 3000}` });test('homepage', async ({ page }) => {  await page.goto('/');});

This is not just useful for capturing varying ports of dev servers. You can also use it to wait for readiness of a service that doesn't expose an HTTP readiness check, but instead prints a readiness message to stdout or stderr.

### Breaking Change[​](#breaking-change "Direct link to Breaking Change")

After 3 years of being deprecated, we removed `Page#accessibility` from our API. Please use other libraries such as [Axe](https://www.deque.com/axe/) if you need to test page accessibility. See our Node.js [guide](https://playwright.dev/docs/accessibility-testing) for integration with Axe.

### New APIs[​](#new-apis "Direct link to New APIs")

*   New property [testConfig.tag](/docs/api/class-testconfig#test-config-tag) adds a tag to all tests in this run. This is useful when using [merge-reports](/docs/test-sharding#merging-reports-from-multiple-shards).
*   [worker.on('console')](/docs/api/class-worker#worker-event-console) event is emitted when JavaScript within the worker calls one of console API methods, e.g. console.log or console.dir. [worker.waitForEvent()](/docs/api/class-worker#worker-wait-for-event) can be used to wait for it.
*   [locator.description()](/docs/api/class-locator#locator-description) returns locator description previously set with [locator.describe()](/docs/api/class-locator#locator-describe), and `Locator.toString()` now uses the description when available.
*   New option [steps](/docs/api/class-locator#locator-click-option-steps) in [locator.click()](/docs/api/class-locator#locator-click) and [locator.dragTo()](/docs/api/class-locator#locator-drag-to) that configures the number of `mousemove` events emitted while moving the mouse pointer to the target element.
*   Network requests issued by [Service Workers](/docs/service-workers#network-events-and-routing) are now reported and can be routed through the [BrowserContext](/docs/api/class-browsercontext), only in Chromium. You can opt out using the `PLAYWRIGHT_DISABLE_SERVICE_WORKER_NETWORK` environment variable.
*   Console messages from Service Workers are dispatched through [worker.on('console')](/docs/api/class-worker#worker-event-console). You can opt out of this using the `PLAYWRIGHT_DISABLE_SERVICE_WORKER_CONSOLE` environment variable.

### Browser Versions[​](#browser-versions "Direct link to Browser Versions")

*   Chromium 143.0.7499.4
*   Mozilla Firefox 142.0.1
*   WebKit 26.0

Version 1.56[​](#version-156 "Direct link to Version 1.56")
-----------------------------------------------------------

### Playwright Test Agents[​](#playwright-test-agents "Direct link to Playwright Test Agents")

Introducing Playwright Test Agents, three custom agent definitions designed to guide LLMs through the core process of building a Playwright test:

*   **🎭 planner** explores the app and produces a Markdown test plan
*   **🎭 generator** transforms the Markdown plan into the Playwright Test files
*   **🎭 healer** executes the test suite and automatically repairs failing tests

Run `npx playwright init-agents` with your client of choice to generate the latest agent definitions:

    # Generate agent files for each agentic loop# Visual Studio Codenpx playwright init-agents --loop=vscode# Claude Codenpx playwright init-agents --loop=claude# opencodenpx playwright init-agents --loop=opencode

[Learn more about Playwright Test Agents](/docs/test-agents)

### New APIs[​](#new-apis-1 "Direct link to New APIs")

*   New methods [page.consoleMessages()](/docs/api/class-page#page-console-messages) and [page.pageErrors()](/docs/api/class-page#page-page-errors) for retrieving the most recent console messages from the page
*   New method [page.requests()](/docs/api/class-page#page-requests) for retrieving the most recent network requests from the page
*   Added [`--test-list` and `--test-list-invert`](/docs/test-cli#test-list) to allow manual specification of specific tests from a file

### UI Mode and HTML Reporter[​](#ui-mode-and-html-reporter "Direct link to UI Mode and HTML Reporter")

*   Added option to `'html'` reporter to disable the "Copy prompt" button
*   Added option to `'html'` reporter and UI Mode to merge files, collapsing test and describe blocks into a single unified list
*   Added option to UI Mode mirroring the `--update-snapshots` options
*   Added option to UI Mode to run only a single worker at a time

### Breaking Changes[​](#breaking-changes "Direct link to Breaking Changes")

*   Event [browserContext.on('backgroundpage')](/docs/api/class-browsercontext#browser-context-event-background-page) has been deprecated and will not be emitted. Method [browserContext.backgroundPages()](/docs/api/class-browsercontext#browser-context-background-pages) will return an empty list

### Miscellaneous[​](#miscellaneous "Direct link to Miscellaneous")

*   Aria snapshots render and compare `input` `placeholder`
*   Added environment variable `PLAYWRIGHT_TEST` to Playwright worker processes to allow discriminating on testing status

### Browser Versions[​](#browser-versions-1 "Direct link to Browser Versions")

*   Chromium 141.0.7390.37
*   Mozilla Firefox 142.0.1
*   WebKit 26.0

Version 1.55[​](#version-155 "Direct link to Version 1.55")
-----------------------------------------------------------

### New APIs[​](#new-apis-2 "Direct link to New APIs")

*   New Property [testStepInfo.titlePath](/docs/api/class-teststepinfo#test-step-info-title-path) Returns the full title path starting from the test file, including test and step titles.

### Codegen[​](#codegen "Direct link to Codegen")

*   Automatic `toBeVisible()` assertions: Codegen can now generate automatic `toBeVisible()` assertions for common UI interactions. This feature can be enabled in the Codegen settings UI.

### Breaking Changes[​](#breaking-changes-1 "Direct link to Breaking Changes")

*   ⚠️ Dropped support for Chromium extension manifest v2.

### Miscellaneous[​](#miscellaneous-1 "Direct link to Miscellaneous")

*   Added support for Debian 13 "Trixie".

### Browser Versions[​](#browser-versions-2 "Direct link to Browser Versions")

*   Chromium 140.0.7339.16
*   Mozilla Firefox 141.0
*   WebKit 26.0

This version was also tested against the following stable channels:

*   Google Chrome 139
*   Microsoft Edge 139

Version 1.54[​](#version-154 "Direct link to Version 1.54")
-----------------------------------------------------------

### Highlights[​](#highlights "Direct link to Highlights")

*   New cookie property `partitionKey` in [browserContext.cookies()](/docs/api/class-browsercontext#browser-context-cookies) and [browserContext.addCookies()](/docs/api/class-browsercontext#browser-context-add-cookies). This property allows to save and restore partitioned cookies. See [CHIPS MDN article](https://developer.mozilla.org/en-US/docs/Web/Privacy/Guides/Privacy_sandbox/Partitioned_cookies) for more information. Note that browsers have different support and defaults for cookie partitioning.
    
*   New option `noSnippets` to disable code snippets in the html report.
    
        import { defineConfig } from '@playwright/test';export default defineConfig({  reporter: [['html', { noSnippets: true }]]});
    
*   New property `location` in test annotations, for example in [testResult.annotations](/docs/api/class-testresult#test-result-annotations) and [testInfo.annotations](/docs/api/class-testinfo#test-info-annotations). It shows where the annotation like `test.skip` or `test.fixme` was added.
    

### Command Line[​](#command-line "Direct link to Command Line")

*   New option `--user-data-dir` in multiple commands. You can specify the same user data dir to reuse browsing state, like authentication, between sessions.
    
        npx playwright codegen --user-data-dir=./user-data
    
*   Option `-gv` has been removed from the `npx playwright test` command. Use `--grep-invert` instead.
    
*   `npx playwright open` does not open the test recorder anymore. Use `npx playwright codegen` instead.
    

### Miscellaneous[​](#miscellaneous-2 "Direct link to Miscellaneous")

*   Support for Node.js 16 has been removed.
*   Support for Node.js 18 has been deprecated, and will be removed in the future.

### Browser Versions[​](#browser-versions-3 "Direct link to Browser Versions")

*   Chromium 139.0.7258.5
*   Mozilla Firefox 140.0.2
*   WebKit 26.0

This version was also tested against the following stable channels:

*   Google Chrome 140
*   Microsoft Edge 140

Version 1.53[​](#version-153 "Direct link to Version 1.53")
-----------------------------------------------------------

### Trace Viewer and HTML Reporter Updates[​](#trace-viewer-and-html-reporter-updates "Direct link to Trace Viewer and HTML Reporter Updates")

*   New Steps in Trace Viewer and HTML reporter: ![New Trace Viewer Steps](https://github.com/user-attachments/assets/1963ff7d-4070-41be-a79b-4333176921a2)
    
*   New option in `'html'` reporter to set the title of a specific test run:
    
        import { defineConfig } from '@playwright/test';export default defineConfig({  reporter: [['html', { title: 'Custom test run #1028' }]]});
    

### Miscellaneous[​](#miscellaneous-3 "Direct link to Miscellaneous")

*   New option [kind](/docs/api/class-testinfo#test-info-snapshot-path-option-kind) in [testInfo.snapshotPath()](/docs/api/class-testinfo#test-info-snapshot-path) controls which snapshot path template is used.
    
*   New method [locator.describe()](/docs/api/class-locator#locator-describe) to describe a locator. Used for trace viewer and reports.
    
        const button = page.getByTestId('btn-sub').describe('Subscribe button');await button.click();
    
*   `npx playwright install --list` will now list all installed browsers, versions and locations.
    

### Browser Versions[​](#browser-versions-4 "Direct link to Browser Versions")

*   Chromium 138.0.7204.4
*   Mozilla Firefox 139.0
*   WebKit 18.5

This version was also tested against the following stable channels:

*   Google Chrome 137
*   Microsoft Edge 137

Version 1.52[​](#version-152 "Direct link to Version 1.52")
-----------------------------------------------------------

### Highlights[​](#highlights-1 "Direct link to Highlights")

*   New method [expect(locator).toContainClass()](/docs/api/class-locatorassertions#locator-assertions-to-contain-class) to ergonomically assert individual class names on the element.
    
        await expect(page.getByRole('listitem', { name: 'Ship v1.52' })).toContainClass('done');
    
*   [Aria Snapshots](/docs/aria-snapshots) got two new properties: [`/children`](/docs/aria-snapshots#strict-matching) for strict matching and `/url` for links.
    
        await expect(locator).toMatchAriaSnapshot(`  - list    - /children: equal    - listitem: Feature A    - listitem:      - link "Feature B":        - /url: "https://playwright.dev"`);
    

### Test Runner[​](#test-runner "Direct link to Test Runner")

*   New property [testProject.workers](/docs/api/class-testproject#test-project-workers) allows to specify the number of concurrent worker processes to use for a test project. The global limit of property [testConfig.workers](/docs/api/class-testconfig#test-config-workers) still applies.
*   New [testConfig.failOnFlakyTests](/docs/api/class-testconfig#test-config-fail-on-flaky-tests) option to fail the test run if any flaky tests are detected, similarly to `--fail-on-flaky-tests`. This is useful for CI/CD environments where you want to ensure that all tests are stable before deploying.
*   New property [testResult.annotations](/docs/api/class-testresult#test-result-annotations) contains annotations for each test retry.

### Miscellaneous[​](#miscellaneous-4 "Direct link to Miscellaneous")

*   New option [maxRedirects](/docs/api/class-apirequest#api-request-new-context-option-max-redirects) in [apiRequest.newContext()](/docs/api/class-apirequest#api-request-new-context) to control the maximum number of redirects.
*   HTML reporter now supports _NOT filtering_ via `!@my-tag` or `!my-file.spec.ts` or `!p:my-project`.

### Breaking Changes[​](#breaking-changes-2 "Direct link to Breaking Changes")

*   Glob URL patterns in methods like [page.route()](/docs/api/class-page#page-route) do not support `?` and `[]` anymore. We recommend using regular expressions instead.
*   Method [route.continue()](/docs/api/class-route#route-continue) does not allow to override the `Cookie` header anymore. If a `Cookie` header is provided, it will be ignored, and the cookie will be loaded from the browser's cookie store. To set custom cookies, use [browserContext.addCookies()](/docs/api/class-browsercontext#browser-context-add-cookies).
*   macOS 13 is now deprecated and will no longer receive WebKit updates. Please upgrade to a more recent macOS version to continue benefiting from the latest WebKit improvements.

### Browser Versions[​](#browser-versions-5 "Direct link to Browser Versions")

*   Chromium 136.0.7103.25
*   Mozilla Firefox 137.0
*   WebKit 18.4

This version was also tested against the following stable channels:

*   Google Chrome 135
*   Microsoft Edge 135

Version 1.51[​](#version-151 "Direct link to Version 1.51")
-----------------------------------------------------------

### StorageState for indexedDB[​](#storagestate-for-indexeddb "Direct link to StorageState for indexedDB")

*   New option [indexedDB](/docs/api/class-browsercontext#browser-context-storage-state-option-indexed-db) for [browserContext.storageState()](/docs/api/class-browsercontext#browser-context-storage-state) allows to save and restore IndexedDB contents. Useful when your application uses [IndexedDB API](https://developer.mozilla.org/en-US/docs/Web/API/IndexedDB_API) to store authentication tokens, like Firebase Authentication.
    
    Here is an example following the [authentication guide](/docs/auth#basic-shared-account-in-all-tests):
    
    tests/auth.setup.ts
    
        import { test as setup, expect } from '@playwright/test';import path from 'path';const authFile = path.join(__dirname, '../playwright/.auth/user.json');setup('authenticate', async ({ page }) => {  await page.goto('/');  // ... perform authentication steps ...  // make sure to save indexedDB  await page.context().storageState({ path: authFile, indexedDB: true });});
    

### Copy as prompt[​](#copy-as-prompt "Direct link to Copy as prompt")

New "Copy prompt" button on errors in the HTML report, trace viewer and UI mode. Click to copy a pre-filled LLM prompt that contains the error message and useful context for fixing the error.

![Copy prompt](https://github.com/user-attachments/assets/f3654407-dd6d-4240-9845-0d96df2bf30a)

### Filter visible elements[​](#filter-visible-elements "Direct link to Filter visible elements")

New option [visible](/docs/api/class-locator#locator-filter-option-visible) for [locator.filter()](/docs/api/class-locator#locator-filter) allows matching only visible elements.

example.spec.ts

    test('some test', async ({ page }) => {  // Ignore invisible todo items.  const todoItems = page.getByTestId('todo-item').filter({ visible: true });  // Check there are exactly 3 visible ones.  await expect(todoItems).toHaveCount(3);});

### Git information in HTML report[​](#git-information-in-html-report "Direct link to Git information in HTML report")

Set option [testConfig.captureGitInfo](/docs/api/class-testconfig#test-config-capture-git-info) to capture git information into [testConfig.metadata](/docs/api/class-testconfig#test-config-metadata).

playwright.config.ts

    import { defineConfig } from '@playwright/test';export default defineConfig({  captureGitInfo: { commit: true, diff: true }});

HTML report will show this information when available:

![Git information in the report](https://github.com/user-attachments/assets/f5b3f6f4-aa08-4a24-816c-7edf33ef0c37)

### Test Step improvements[​](#test-step-improvements "Direct link to Test Step improvements")

A new [TestStepInfo](/docs/api/class-teststepinfo "TestStepInfo") object is now available in test steps. You can add step attachments or skip the step under some conditions.

    test('some test', async ({ page, isMobile }) => {  // Note the new "step" argument:  await test.step('here is my step', async step => {    step.skip(isMobile, 'not relevant on mobile layouts');    // ...    await step.attach('my attachment', { body: 'some text' });    // ...  });});

### Miscellaneous[​](#miscellaneous-5 "Direct link to Miscellaneous")

*   New option `contrast` for methods [page.emulateMedia()](/docs/api/class-page#page-emulate-media) and [browser.newContext()](/docs/api/class-browser#browser-new-context) allows to emulate the `prefers-contrast` media feature.
*   New option [failOnStatusCode](/docs/api/class-apirequest#api-request-new-context-option-fail-on-status-code) makes all fetch requests made through the [APIRequestContext](/docs/api/class-apirequestcontext "APIRequestContext") throw on response codes other than 2xx and 3xx.
*   Assertion [expect(page).toHaveURL()](/docs/api/class-pageassertions#page-assertions-to-have-url) now supports a predicate.

### Browser Versions[​](#browser-versions-6 "Direct link to Browser Versions")

*   Chromium 134.0.6998.35
*   Mozilla Firefox 135.0
*   WebKit 18.4

This version was also tested against the following stable channels:

*   Google Chrome 133
*   Microsoft Edge 133

Version 1.50[​](#version-150 "Direct link to Version 1.50")
-----------------------------------------------------------

### Test runner[​](#test-runner-1 "Direct link to Test runner")

*   New option [timeout](/docs/api/class-test#test-step-option-timeout) allows specifying a maximum run time for an individual test step. A timed-out step will fail the execution of the test.
    
        test('some test', async ({ page }) => {  await test.step('a step', async () => {    // This step can time out separately from the test  }, { timeout: 1000 });});
    
*   New method [test.step.skip()](/docs/api/class-test#test-step-skip) to disable execution of a test step.
    
        test('some test', async ({ page }) => {  await test.step('before running step', async () => {    // Normal step  });  await test.step.skip('not yet ready', async () => {    // This step is skipped  });  await test.step('after running step', async () => {    // This step still runs even though the previous one was skipped  });});
    
*   Expanded [expect(locator).toMatchAriaSnapshot()](/docs/api/class-locatorassertions#locator-assertions-to-match-aria-snapshot-2) to allow storing of aria snapshots in separate YAML files.
    
*   Added method [expect(locator).toHaveAccessibleErrorMessage()](/docs/api/class-locatorassertions#locator-assertions-to-have-accessible-error-message) to assert the Locator points to an element with a given [aria errormessage](https://w3c.github.io/aria/#aria-errormessage).
    
*   Option [testConfig.updateSnapshots](/docs/api/class-testconfig#test-config-update-snapshots) added the configuration enum `changed`. `changed` updates only the snapshots that have changed, whereas `all` now updates all snapshots, regardless of whether there are any differences.
    
*   New option [testConfig.updateSourceMethod](/docs/api/class-testconfig#test-config-update-source-method) defines the way source code is updated when [testConfig.updateSnapshots](/docs/api/class-testconfig#test-config-update-snapshots) is configured. Added `overwrite` and `3-way` modes that write the changes into source code, on top of existing `patch` mode that creates a patch file.
    
        npx playwright test --update-snapshots=changed --update-source-method=3way
    
*   Option [testConfig.webServer](/docs/api/class-testconfig#test-config-web-server) added a `gracefulShutdown` field for specifying a process kill signal other than the default `SIGKILL`.
    
*   Exposed [testStep.attachments](/docs/api/class-teststep#test-step-attachments) from the reporter API to allow retrieval of all attachments created by that step.
    
*   New option `pathTemplate` for `toHaveScreenshot` and `toMatchAriaSnapshot` assertions in the [testConfig.expect](/docs/api/class-testconfig#test-config-expect) configuration.
    

### UI updates[​](#ui-updates "Direct link to UI updates")

*   Updated default HTML reporter to improve display of attachments.
*   New button in Codegen for picking elements to produce aria snapshots.
*   Additional details (such as keys pressed) are now displayed alongside action API calls in traces.
*   Display of `canvas` content in traces is error-prone. Display is now disabled by default, and can be enabled via the `Display canvas content` UI setting.
*   `Call` and `Network` panels now display additional time information.

### Breaking[​](#breaking "Direct link to Breaking")

*   [expect(locator).toBeEditable()](/docs/api/class-locatorassertions#locator-assertions-to-be-editable) and [locator.isEditable()](/docs/api/class-locator#locator-is-editable) now throw if the target element is not `<input>`, `<select>`, or a number of other editable elements.
*   Option [testConfig.updateSnapshots](/docs/api/class-testconfig#test-config-update-snapshots) now updates all snapshots when set to `all`, rather than only the failed/changed snapshots. Use the new enum `changed` to keep the old functionality of only updating the changed snapshots.

### Browser Versions[​](#browser-versions-7 "Direct link to Browser Versions")

*   Chromium 133.0.6943.16
*   Mozilla Firefox 134.0
*   WebKit 18.2

This version was also tested against the following stable channels:

*   Google Chrome 132
*   Microsoft Edge 132

Version 1.49[​](#version-149 "Direct link to Version 1.49")
-----------------------------------------------------------

### Aria snapshots[​](#aria-snapshots "Direct link to Aria snapshots")

New assertion [expect(locator).toMatchAriaSnapshot()](/docs/api/class-locatorassertions#locator-assertions-to-match-aria-snapshot) verifies page structure by comparing to an expected accessibility tree, represented as YAML.

    await page.goto('https://playwright.dev');await expect(page.locator('body')).toMatchAriaSnapshot(`  - banner:    - heading /Playwright enables reliable/ [level=1]    - link "Get started"    - link "Star microsoft/playwright on GitHub"  - main:    - img "Browsers (Chromium, Firefox, WebKit)"    - heading "Any browser • Any platform • One API"`);

You can generate this assertion with [Test Generator](/docs/codegen) and update the expected snapshot with `--update-snapshots` command line flag.

Learn more in the [aria snapshots guide](/docs/aria-snapshots).

### Test runner[​](#test-runner-2 "Direct link to Test runner")

*   New option [testConfig.tsconfig](/docs/api/class-testconfig#test-config-tsconfig) allows to specify a single `tsconfig` to be used for all tests.
*   New method [test.fail.only()](/docs/api/class-test#test-fail-only) to focus on a failing test.
*   Options [testConfig.globalSetup](/docs/api/class-testconfig#test-config-global-setup) and [testConfig.globalTeardown](/docs/api/class-testconfig#test-config-global-teardown) now support multiple setups/teardowns.
*   New value `'on-first-failure'` for [testOptions.screenshot](/docs/api/class-testoptions#test-options-screenshot).
*   Added "previous" and "next" buttons to the HTML report to quickly switch between test cases.
*   New properties [testInfoError.cause](/docs/api/class-testinfoerror#test-info-error-cause) and [testError.cause](/docs/api/class-testerror#test-error-cause) mirroring [`Error.cause`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Error/cause).

### Breaking: `chrome` and `msedge` channels switch to new headless mode[​](#breaking-chrome-and-msedge-channels-switch-to-new-headless-mode "Direct link to breaking-chrome-and-msedge-channels-switch-to-new-headless-mode")

This change affects you if you're using one of the following channels in your `playwright.config.ts`:

*   `chrome`, `chrome-dev`, `chrome-beta`, or `chrome-canary`
*   `msedge`, `msedge-dev`, `msedge-beta`, or `msedge-canary`

#### What do I need to do?[​](#what-do-i-need-to-do "Direct link to What do I need to do?")

After updating to Playwright v1.49, run your test suite. If it still passes, you're good to go. If not, you will probably need to update your snapshots, and adapt some of your test code around PDF viewers and extensions. See [issue #33566](https://github.com/microsoft/playwright/issues/33566) for more details.

### Other breaking changes[​](#other-breaking-changes "Direct link to Other breaking changes")

*   There will be no more updates for WebKit on Ubuntu 20.04 and Debian 11. We recommend updating your OS to a later version.
*   Package `@playwright/experimental-ct-vue2` will no longer be updated.
*   Package `@playwright/experimental-ct-solid` will no longer be updated.

### Try new Chromium headless[​](#try-new-chromium-headless "Direct link to Try new Chromium headless")

You can opt into the new headless mode by using `'chromium'` channel. As [official Chrome documentation puts it](https://developer.chrome.com/blog/chrome-headless-shell):

> New Headless on the other hand is the real Chrome browser, and is thus more authentic, reliable, and offers more features. This makes it more suitable for high-accuracy end-to-end web app testing or browser extension testing.

See [issue #33566](https://github.com/microsoft/playwright/issues/33566) for the list of possible breakages you could encounter and more details on Chromium headless. Please file an issue if you see any problems after opting in.

    import { defineConfig, devices } from '@playwright/test';export default defineConfig({  projects: [    {      name: 'chromium',      use: { ...devices['Desktop Chrome'], channel: 'chromium' },    },  ],});

### Miscellaneous[​](#miscellaneous-6 "Direct link to Miscellaneous")

*   `<canvas>` elements inside a snapshot now draw a preview.
*   New method [tracing.group()](/docs/api/class-tracing#tracing-group) to visually group actions in the trace.
*   Playwright docker images switched from Node.js v20 to Node.js v22 LTS.

### Browser Versions[​](#browser-versions-8 "Direct link to Browser Versions")

*   Chromium 131.0.6778.33
*   Mozilla Firefox 132.0
*   WebKit 18.2

This version was also tested against the following stable channels:

*   Google Chrome 130
*   Microsoft Edge 130

Version 1.48[​](#version-148 "Direct link to Version 1.48")
-----------------------------------------------------------

### WebSocket routing[​](#websocket-routing "Direct link to WebSocket routing")

New methods [page.routeWebSocket()](/docs/api/class-page#page-route-web-socket) and [browserContext.routeWebSocket()](/docs/api/class-browsercontext#browser-context-route-web-socket) allow to intercept, modify and mock WebSocket connections initiated in the page. Below is a simple example that mocks WebSocket communication by responding to a `"request"` with a `"response"`.

    await page.routeWebSocket('/ws', ws => {  ws.onMessage(message => {    if (message === 'request')      ws.send('response');  });});

See [WebSocketRoute](/docs/api/class-websocketroute "WebSocketRoute") for more details.

### UI updates[​](#ui-updates-1 "Direct link to UI updates")

*   New "copy" buttons for annotations and test location in the HTML report.
*   Route method calls like [route.fulfill()](/docs/api/class-route#route-fulfill) are not shown in the report and trace viewer anymore. You can see which network requests were routed in the network tab instead.
*   New "Copy as cURL" and "Copy as fetch" buttons for requests in the network tab.

### Miscellaneous[​](#miscellaneous-7 "Direct link to Miscellaneous")

*   Option [form](/docs/api/class-apirequestcontext#api-request-context-fetch-option-form) and similar ones now accept [FormData](https://developer.mozilla.org/en-US/docs/Web/API/FormData).
*   New method [page.requestGC()](/docs/api/class-page#page-request-gc) may help detect memory leaks.
*   New option [location](/docs/api/class-test#test-step-option-location) to pass custom step location.
*   Requests made by [APIRequestContext](/docs/api/class-apirequestcontext "APIRequestContext") now record detailed timing and security information in the HAR.

### Browser Versions[​](#browser-versions-9 "Direct link to Browser Versions")

*   Chromium 130.0.6723.19
*   Mozilla Firefox 130.0
*   WebKit 18.0

This version was also tested against the following stable channels:

*   Google Chrome 129
*   Microsoft Edge 129

Version 1.47[​](#version-147 "Direct link to Version 1.47")
-----------------------------------------------------------

### Network Tab improvements[​](#network-tab-improvements "Direct link to Network Tab improvements")

The Network tab in the UI mode and trace viewer has several nice improvements:

*   filtering by asset type and URL
*   better display of query string parameters
*   preview of font assets

![Network tab now has filters](https://github.com/user-attachments/assets/4bd1b67d-90bd-438b-a227-00b9e86872e2)

### `--tsconfig` CLI option[​](#--tsconfig-cli-option "Direct link to --tsconfig-cli-option")

By default, Playwright will look up the closest tsconfig for each imported file using a heuristic. You can now specify a single tsconfig file in the command line, and Playwright will use it for all imported files, not only test files:

    # Pass a specific tsconfignpx playwright test --tsconfig tsconfig.test.json

### [APIRequestContext](/docs/api/class-apirequestcontext "APIRequestContext") now accepts [`URLSearchParams`](https://developer.mozilla.org/en-US/docs/Web/API/URLSearchParams) and `string` as query parameters[​](#apirequestcontext-now-accepts-urlsearchparams-and-string-as-query-parameters "Direct link to apirequestcontext-now-accepts-urlsearchparams-and-string-as-query-parameters")

You can now pass [`URLSearchParams`](https://developer.mozilla.org/en-US/docs/Web/API/URLSearchParams) and `string` as query parameters to [APIRequestContext](/docs/api/class-apirequestcontext "APIRequestContext"):

    test('query params', async ({ request }) => {  const searchParams = new URLSearchParams();  searchParams.set('userId', 1);  const response = await request.get(      'https://jsonplaceholder.typicode.com/posts',      {        params: searchParams // or as a string: 'userId=1'      }  );  // ...});

### Miscellaneous[​](#miscellaneous-8 "Direct link to Miscellaneous")

*   The `mcr.microsoft.com/playwright:v1.47.0` now serves a Playwright image based on Ubuntu 24.04 Noble. To use the 22.04 jammy-based image, please use `mcr.microsoft.com/playwright:v1.47.0-jammy` instead.
*   New options [behavior](/docs/api/class-page#page-remove-all-listeners-option-behavior), [behavior](/docs/api/class-browser#browser-remove-all-listeners-option-behavior) and [behavior](/docs/api/class-browsercontext#browser-context-remove-all-listeners-option-behavior) to wait for ongoing listeners to complete.
*   TLS client certificates can now be passed from memory by passing [clientCertificates.cert](/docs/api/class-browser#browser-new-context-option-client-certificates) and [clientCertificates.key](/docs/api/class-browser#browser-new-context-option-client-certificates) as buffers instead of file paths.
*   Attachments with a `text/html` content type can now be opened in a new tab in the HTML report. This is useful for including third-party reports or other HTML content in the Playwright test report and distributing it to your team.
*   [noWaitAfter](/docs/api/class-locator#locator-select-option-option-no-wait-after) option in [locator.selectOption()](/docs/api/class-locator#locator-select-option) was deprecated.
*   We've seen reports of WebGL in Webkit misbehaving on GitHub Actions `macos-13`. We recommend upgrading GitHub Actions to `macos-14`.

### Browser Versions[​](#browser-versions-10 "Direct link to Browser Versions")

*   Chromium 129.0.6668.29
*   Mozilla Firefox 130.0
*   WebKit 18.0

This version was also tested against the following stable channels:

*   Google Chrome 128
*   Microsoft Edge 128

Version 1.46[​](#version-146 "Direct link to Version 1.46")
-----------------------------------------------------------

### TLS Client Certificates[​](#tls-client-certificates "Direct link to TLS Client Certificates")

Playwright now allows you to supply client-side certificates, so that server can verify them, as specified by TLS Client Authentication.

The following snippet sets up a client certificate for `https://example.com`:

    import { defineConfig } from '@playwright/test';export default defineConfig({  // ...  use: {    clientCertificates: [{      origin: 'https://example.com',      certPath: './cert.pem',      keyPath: './key.pem',      passphrase: 'mysecretpassword',    }],  },  // ...});

You can also provide client certificates to a particular [test project](/docs/api/class-testproject#test-project-use) or as a parameter of [browser.newContext()](/docs/api/class-browser#browser-new-context) and [apiRequest.newContext()](/docs/api/class-apirequest#api-request-new-context).

### `--only-changed` cli option[​](#--only-changed-cli-option "Direct link to --only-changed-cli-option")

New CLI option `--only-changed` will only run test files that have been changed since the last git commit or from a specific git "ref". This will also run all test files that import any changed files.

    # Only run test files with uncommitted changesnpx playwright test --only-changed# Only run test files changed relative to the "main" branchnpx playwright test --only-changed=main

### Component Testing: New `router` fixture[​](#component-testing-new-router-fixture "Direct link to component-testing-new-router-fixture")

This release introduces an experimental `router` fixture to intercept and handle network requests in component testing. There are two ways to use the router fixture:

*   Call `router.route(url, handler)` that behaves similarly to [page.route()](/docs/api/class-page#page-route).
*   Call `router.use(handlers)` and pass [MSW library](https://mswjs.io) request handlers to it.

Here is an example of reusing your existing MSW handlers in the test.

    import { handlers } from '@src/mocks/handlers';test.beforeEach(async ({ router }) => {  // install common handlers before each test  await router.use(...handlers);});test('example test', async ({ mount }) => {  // test as usual, your handlers are active  // ...});

This fixture is only available in [component tests](/docs/test-components#handling-network-requests).

### UI Mode / Trace Viewer Updates[​](#ui-mode--trace-viewer-updates "Direct link to UI Mode / Trace Viewer Updates")

*   Test annotations are now shown in UI mode.
*   Content of text attachments is now rendered inline in the attachments pane.
*   New setting to show/hide routing actions like [route.continue()](/docs/api/class-route#route-continue).
*   Request method and status are shown in the network details tab.
*   New button to copy source file location to clipboard.
*   Metadata pane now displays the `baseURL`.

### Miscellaneous[​](#miscellaneous-9 "Direct link to Miscellaneous")

*   New `maxRetries` option in [apiRequestContext.fetch()](/docs/api/class-apirequestcontext#api-request-context-fetch) which retries on the `ECONNRESET` network error.
*   New option to [box a fixture](/docs/test-fixtures#box-fixtures) to minimize the fixture exposure in test reports and error messages.
*   New option to provide a [custom fixture title](/docs/test-fixtures#custom-fixture-title) to be used in test reports and error messages.

### Browser Versions[​](#browser-versions-11 "Direct link to Browser Versions")

*   Chromium 128.0.6613.18
*   Mozilla Firefox 128.0
*   WebKit 18.0

This version was also tested against the following stable channels:

*   Google Chrome 127
*   Microsoft Edge 127

Version 1.45[​](#version-145 "Direct link to Version 1.45")
-----------------------------------------------------------

### Clock[​](#clock "Direct link to Clock")

Utilizing the new [Clock](/docs/api/class-clock "Clock") API allows to manipulate and control time within tests to verify time-related behavior. This API covers many common scenarios, including:

*   testing with predefined time;
*   keeping consistent time and timers;
*   monitoring inactivity;
*   ticking through time manually.

    // Initialize clock and let the page load naturally.await page.clock.install({ time: new Date('2024-02-02T08:00:00') });await page.goto('http://localhost:3333');// Pretend that the user closed the laptop lid and opened it again at 10am,// Pause the time once reached that point.await page.clock.pauseAt(new Date('2024-02-02T10:00:00'));// Assert the page state.await expect(page.getByTestId('current-time')).toHaveText('2/2/2024, 10:00:00 AM');// Close the laptop lid again and open it at 10:30am.await page.clock.fastForward('30:00');await expect(page.getByTestId('current-time')).toHaveText('2/2/2024, 10:30:00 AM');

See [the clock guide](/docs/clock) for more details.

### Test runner[​](#test-runner-3 "Direct link to Test runner")

*   New CLI option `--fail-on-flaky-tests` that sets exit code to `1` upon any flaky tests. Note that by default, the test runner exits with code `0` when all failed tests recovered upon a retry. With this option, the test run will fail in such case.
    
*   New environment variable `PLAYWRIGHT_FORCE_TTY` controls whether built-in `list`, `line` and `dot` reporters assume a live terminal. For example, this could be useful to disable tty behavior when your CI environment does not handle ANSI control sequences well. Alternatively, you can enable tty behavior even when to live terminal is present, if you plan to post-process the output and handle control sequences.
    
        # Avoid TTY features that output ANSI control sequencesPLAYWRIGHT_FORCE_TTY=0 npx playwright test# Enable TTY features, assuming a terminal width 80PLAYWRIGHT_FORCE_TTY=80 npx playwright test
    
*   New options [testConfig.respectGitIgnore](/docs/api/class-testconfig#test-config-respect-git-ignore) and [testProject.respectGitIgnore](/docs/api/class-testproject#test-project-respect-git-ignore) control whether files matching `.gitignore` patterns are excluded when searching for tests.
    
*   New property `timeout` is now available for custom expect matchers. This property takes into account `playwright.config.ts` and `expect.configure()`.
    
        import { expect as baseExpect } from '@playwright/test';export const expect = baseExpect.extend({  async toHaveAmount(locator: Locator, expected: number, options?: { timeout?: number }) {    // When no timeout option is specified, use the config timeout.    const timeout = options?.timeout ?? this.timeout;    // ... implement the assertion ...  },});
    

### Miscellaneous[​](#miscellaneous-10 "Direct link to Miscellaneous")

*   Method [locator.setInputFiles()](/docs/api/class-locator#locator-set-input-files) now supports uploading a directory for `<input type=file webkitdirectory>` elements.
    
        await page.getByLabel('Upload directory').setInputFiles(path.join(__dirname, 'mydir'));
    
*   Multiple methods like [locator.click()](/docs/api/class-locator#locator-click) or [locator.press()](/docs/api/class-locator#locator-press) now support a `ControlOrMeta` modifier key. This key maps to `Meta` on macOS and maps to `Control` on Windows and Linux.
    
        // Press the common keyboard shortcut Control+S or Meta+S to trigger a "Save" operation.await page.keyboard.press('ControlOrMeta+S');
    
*   New property `httpCredentials.send` in [apiRequest.newContext()](/docs/api/class-apirequest#api-request-new-context) that allows to either always send the `Authorization` header or only send it in response to `401 Unauthorized`.
    
*   New option `reason` in [apiRequestContext.dispose()](/docs/api/class-apirequestcontext#api-request-context-dispose) that will be included in the error message of ongoing operations interrupted by the context disposal.
    
*   New option `host` in [browserType.launchServer()](/docs/api/class-browsertype#browser-type-launch-server) allows to accept websocket connections on a specific address instead of unspecified `0.0.0.0`.
    
*   Playwright now supports Chromium, Firefox and WebKit on Ubuntu 24.04.
    
*   v1.45 is the last release to receive WebKit update for macOS 12 Monterey. Please update macOS to keep using the latest WebKit.
    

### Browser Versions[​](#browser-versions-12 "Direct link to Browser Versions")

*   Chromium 127.0.6533.5
*   Mozilla Firefox 127.0
*   WebKit 17.4

This version was also tested against the following stable channels:

*   Google Chrome 126
*   Microsoft Edge 126

Version 1.44[​](#version-144 "Direct link to Version 1.44")
-----------------------------------------------------------

### New APIs[​](#new-apis-3 "Direct link to New APIs")

**Accessibility assertions**

*   [expect(locator).toHaveAccessibleName()](/docs/api/class-locatorassertions#locator-assertions-to-have-accessible-name) checks if the element has the specified accessible name:
    
        const locator = page.getByRole('button');await expect(locator).toHaveAccessibleName('Submit');
    
*   [expect(locator).toHaveAccessibleDescription()](/docs/api/class-locatorassertions#locator-assertions-to-have-accessible-description) checks if the element has the specified accessible description:
    
        const locator = page.getByRole('button');await expect(locator).toHaveAccessibleDescription('Upload a photo');
    
*   [expect(locator).toHaveRole()](/docs/api/class-locatorassertions#locator-assertions-to-have-role) checks if the element has the specified ARIA role:
    
        const locator = page.getByTestId('save-button');await expect(locator).toHaveRole('button');
    

**Locator handler**

*   After executing the handler added with [page.addLocatorHandler()](/docs/api/class-page#page-add-locator-handler), Playwright will now wait until the overlay that triggered the handler is not visible anymore. You can opt-out of this behavior with the new `noWaitAfter` option.
*   You can use new `times` option in [page.addLocatorHandler()](/docs/api/class-page#page-add-locator-handler) to specify maximum number of times the handler should be run.
*   The handler in [page.addLocatorHandler()](/docs/api/class-page#page-add-locator-handler) now accepts the locator as argument.
*   New [page.removeLocatorHandler()](/docs/api/class-page#page-remove-locator-handler) method for removing previously added locator handlers.

    const locator = page.getByText('This interstitial covers the button');await page.addLocatorHandler(locator, async overlay => {  await overlay.locator('#close').click();}, { times: 3, noWaitAfter: true });// Run your tests that can be interrupted by the overlay.// ...await page.removeLocatorHandler(locator);

**Miscellaneous options**

*   [`multipart`](/docs/api/class-apirequestcontext#api-request-context-fetch-option-multipart) option in `apiRequestContext.fetch()` now accepts [`FormData`](https://developer.mozilla.org/en-US/docs/Web/API/FormData) and supports repeating fields with the same name.
    
        const formData = new FormData();formData.append('file', new File(['let x = 2024;'], 'f1.js', { type: 'text/javascript' }));formData.append('file', new File(['hello'], 'f2.txt', { type: 'text/plain' }));context.request.post('https://example.com/uploadFiles', {  multipart: formData});
    
*   `expect(callback).toPass({ intervals })` can now be configured by `expect.toPass.intervals` option globally in [testConfig.expect](/docs/api/class-testconfig#test-config-expect) or per project in [testProject.expect](/docs/api/class-testproject#test-project-expect).
    
*   `expect(page).toHaveURL(url)` now supports `ignoreCase` [option](/docs/api/class-pageassertions#page-assertions-to-have-url-option-ignore-case).
    
*   [testProject.ignoreSnapshots](/docs/api/class-testproject#test-project-ignore-snapshots) allows to configure per project whether to skip screenshot expectations.
    

**Reporter API**

*   New method [suite.entries()](/docs/api/class-suite#suite-entries) returns child test suites and test cases in their declaration order. [suite.type](/docs/api/class-suite#suite-type) and [testCase.type](/docs/api/class-testcase#test-case-type) can be used to tell apart test cases and suites in the list.
*   [Blob](/docs/test-reporters#blob-reporter) reporter now allows overriding report file path with a single option `outputFile`. The same option can also be specified as `PLAYWRIGHT_BLOB_OUTPUT_FILE` environment variable that might be more convenient on CI/CD.
*   [JUnit](/docs/test-reporters#junit-reporter) reporter now supports `includeProjectInTestName` option.

**Command line**

*   `--last-failed` CLI option to for running only tests that failed in the previous run.
    
    First run all tests:
    
        $ npx playwright testRunning 103 tests using 5 workers...2 failed  [chromium] › my-test.spec.ts:8:5 › two ─────────────────────────────────────────────────────────  [chromium] › my-test.spec.ts:13:5 › three ──────────────────────────────────────────────────────101 passed (30.0s)
    
    Now fix the failing tests and run Playwright again with `--last-failed` option:
    
        $ npx playwright test --last-failedRunning 2 tests using 2 workers  2 passed (1.2s)
    

### Browser Versions[​](#browser-versions-13 "Direct link to Browser Versions")

*   Chromium 125.0.6422.14
*   Mozilla Firefox 125.0.1
*   WebKit 17.4

This version was also tested against the following stable channels:

*   Google Chrome 124
*   Microsoft Edge 124

Version 1.43[​](#version-143 "Direct link to Version 1.43")
-----------------------------------------------------------

### New APIs[​](#new-apis-4 "Direct link to New APIs")

*   Method [browserContext.clearCookies()](/docs/api/class-browsercontext#browser-context-clear-cookies) now supports filters to remove only some cookies.
    
        // Clear all cookies.await context.clearCookies();// New: clear cookies with a particular name.await context.clearCookies({ name: 'session-id' });// New: clear cookies for a particular domain.await context.clearCookies({ domain: 'my-origin.com' });
    
*   New mode `retain-on-first-failure` for [testOptions.trace](/docs/api/class-testoptions#test-options-trace). In this mode, trace is recorded for the first run of each test, but not for retires. When test run fails, the trace file is retained, otherwise it is removed.
    
        import { defineConfig } from '@playwright/test';export default defineConfig({  use: {    trace: 'retain-on-first-failure',  },});
    
*   New property [testInfo.tags](/docs/api/class-testinfo#test-info-tags) exposes test tags during test execution.
    
        test('example', async ({ page }) => {  console.log(test.info().tags);});
    
*   New method [locator.contentFrame()](/docs/api/class-locator#locator-content-frame) converts a [Locator](/docs/api/class-locator "Locator") object to a [FrameLocator](/docs/api/class-framelocator "FrameLocator"). This can be useful when you have a [Locator](/docs/api/class-locator "Locator") object obtained somewhere, and later on would like to interact with the content inside the frame.
    
        const locator = page.locator('iframe[name="embedded"]');// ...const frameLocator = locator.contentFrame();await frameLocator.getByRole('button').click();
    
*   New method [frameLocator.owner()](/docs/api/class-framelocator#frame-locator-owner) converts a [FrameLocator](/docs/api/class-framelocator "FrameLocator") object to a [Locator](/docs/api/class-locator "Locator"). This can be useful when you have a [FrameLocator](/docs/api/class-framelocator "FrameLocator") object obtained somewhere, and later on would like to interact with the `iframe` element.
    
        const frameLocator = page.frameLocator('iframe[name="embedded"]');// ...const locator = frameLocator.owner();await expect(locator).toBeVisible();
    

### UI Mode Updates[​](#ui-mode-updates "Direct link to UI Mode Updates")

![Playwright UI Mode](https://github.com/microsoft/playwright/assets/9881434/61ca7cfc-eb7a-4305-8b62-b6c9f098f300)

*   See tags in the test list.
*   Filter by tags by typing `@fast` or clicking on the tag itself.
*   New shortcuts:
    *   "F5" to run tests.
    *   "Shift F5" to stop running tests.
    *   "Ctrl \`" to toggle test output.

### Browser Versions[​](#browser-versions-14 "Direct link to Browser Versions")

*   Chromium 124.0.6367.8
*   Mozilla Firefox 124.0
*   WebKit 17.4

This version was also tested against the following stable channels:

*   Google Chrome 123
*   Microsoft Edge 123

Version 1.42[​](#version-142 "Direct link to Version 1.42")
-----------------------------------------------------------

### New APIs[​](#new-apis-5 "Direct link to New APIs")

*   New method [page.addLocatorHandler()](/docs/api/class-page#page-add-locator-handler) registers a callback that will be invoked when specified element becomes visible and may block Playwright actions. The callback can get rid of the overlay. Here is an example that closes a cookie dialog when it appears:

    // Setup the handler.await page.addLocatorHandler(    page.getByRole('heading', { name: 'Hej! You are in control of your cookies.' }),    async () => {      await page.getByRole('button', { name: 'Accept all' }).click();    });// Write the test as usual.await page.goto('https://www.ikea.com/');await page.getByRole('link', { name: 'Collection of blue and white' }).click();await expect(page.getByRole('heading', { name: 'Light and easy' })).toBeVisible();

*   `expect(callback).toPass()` timeout can now be configured by `expect.toPass.timeout` option [globally](/docs/api/class-testconfig#test-config-expect) or in [project config](/docs/api/class-testproject#test-project-expect)
*   [electronApplication.on('console')](/docs/api/class-electronapplication#electron-application-event-console) event is emitted when Electron main process calls console API methods.

    electronApp.on('console', async msg => {  const values = [];  for (const arg of msg.args())    values.push(await arg.jsonValue());  console.log(...values);});await electronApp.evaluate(() => console.log('hello', 5, { foo: 'bar' }));

*   [New syntax](/docs/test-annotations#tag-tests) for adding tags to the tests (@-tokens in the test title are still supported):

    test('test customer login', {  tag: ['@fast', '@login'],}, async ({ page }) => {  // ...});

Use `--grep` command line option to run only tests with certain tags.

    npx playwright test --grep @fast

*   `--project` command line [flag](/docs/test-cli#all-options) now supports '\*' wildcard:

    npx playwright test --project='*mobile*'

*   [New syntax](/docs/test-annotations#annotate-tests) for test annotations:

    test('test full report', {  annotation: [    { type: 'issue', description: 'https://github.com/microsoft/playwright/issues/23180' },    { type: 'docs', description: 'https://playwright.dev/docs/test-annotations#tag-tests' },  ],}, async ({ page }) => {  // ...});

*   [page.pdf()](/docs/api/class-page#page-pdf) accepts two new options [`tagged`](/docs/api/class-page#page-pdf-option-tagged) and [`outline`](/docs/api/class-page#page-pdf-option-outline).

### Announcements[​](#announcements "Direct link to Announcements")

*   ⚠️ Ubuntu 18 is not supported anymore.

### Browser Versions[​](#browser-versions-15 "Direct link to Browser Versions")

*   Chromium 123.0.6312.4
*   Mozilla Firefox 123.0
*   WebKit 17.4

This version was also tested against the following stable channels:

*   Google Chrome 122
*   Microsoft Edge 123

Version 1.41[​](#version-141 "Direct link to Version 1.41")
-----------------------------------------------------------

### New APIs[​](#new-apis-6 "Direct link to New APIs")

*   New method [page.unrouteAll()](/docs/api/class-page#page-unroute-all) removes all routes registered by [page.route()](/docs/api/class-page#page-route) and [page.routeFromHAR()](/docs/api/class-page#page-route-from-har). Optionally allows to wait for ongoing routes to finish, or ignore any errors from them.
*   New method [browserContext.unrouteAll()](/docs/api/class-browsercontext#browser-context-unroute-all) removes all routes registered by [browserContext.route()](/docs/api/class-browsercontext#browser-context-route) and [browserContext.routeFromHAR()](/docs/api/class-browsercontext#browser-context-route-from-har). Optionally allows to wait for ongoing routes to finish, or ignore any errors from them.
*   New options [style](/docs/api/class-page#page-screenshot-option-style) in [page.screenshot()](/docs/api/class-page#page-screenshot) and [style](/docs/api/class-locator#locator-screenshot-option-style) in [locator.screenshot()](/docs/api/class-locator#locator-screenshot) to add custom CSS to the page before taking a screenshot.
*   New option `stylePath` for methods [expect(page).toHaveScreenshot()](/docs/api/class-pageassertions#page-assertions-to-have-screenshot-1) and [expect(locator).toHaveScreenshot()](/docs/api/class-locatorassertions#locator-assertions-to-have-screenshot-1) to apply a custom stylesheet while making the screenshot.
*   New `fileName` option for [Blob reporter](/docs/test-reporters#blob-reporter), to specify the name of the report to be created.

### Browser Versions[​](#browser-versions-16 "Direct link to Browser Versions")

*   Chromium 121.0.6167.57
*   Mozilla Firefox 121.0
*   WebKit 17.4

This version was also tested against the following stable channels:

*   Google Chrome 120
*   Microsoft Edge 120

Version 1.40[​](#version-140 "Direct link to Version 1.40")
-----------------------------------------------------------

### Test Generator Update[​](#test-generator-update "Direct link to Test Generator Update")

![Playwright Test Generator](https://github.com/microsoft/playwright/assets/9881434/e8d67e2e-f36d-4301-8631-023948d3e190)

New tools to generate assertions:

*   "Assert visibility" tool generates [expect(locator).toBeVisible()](/docs/api/class-locatorassertions#locator-assertions-to-be-visible).
*   "Assert value" tool generates [expect(locator).toHaveValue()](/docs/api/class-locatorassertions#locator-assertions-to-have-value).
*   "Assert text" tool generates [expect(locator).toContainText()](/docs/api/class-locatorassertions#locator-assertions-to-contain-text).

Here is an example of a generated test with assertions:

    import { test, expect } from '@playwright/test';test('test', async ({ page }) => {  await page.goto('https://playwright.dev/');  await page.getByRole('link', { name: 'Get started' }).click();  await expect(page.getByLabel('Breadcrumbs').getByRole('list')).toContainText('Installation');  await expect(page.getByLabel('Search')).toBeVisible();  await page.getByLabel('Search').click();  await page.getByPlaceholder('Search docs').fill('locator');  await expect(page.getByPlaceholder('Search docs')).toHaveValue('locator');});

### New APIs[​](#new-apis-7 "Direct link to New APIs")

*   Options [reason](/docs/api/class-page#page-close-option-reason) in [page.close()](/docs/api/class-page#page-close), [reason](/docs/api/class-browsercontext#browser-context-close-option-reason) in [browserContext.close()](/docs/api/class-browsercontext#browser-context-close) and [reason](/docs/api/class-browser#browser-close-option-reason) in [browser.close()](/docs/api/class-browser#browser-close). Close reason is reported for all operations interrupted by the closure.
*   Option [firefoxUserPrefs](/docs/api/class-browsertype#browser-type-launch-persistent-context-option-firefox-user-prefs) in [browserType.launchPersistentContext()](/docs/api/class-browsertype#browser-type-launch-persistent-context).

### Other Changes[​](#other-changes "Direct link to Other Changes")

*   Methods [download.path()](/docs/api/class-download#download-path) and [download.createReadStream()](/docs/api/class-download#download-create-read-stream) throw an error for failed and cancelled downloads.
*   Playwright [docker image](/docs/docker) now comes with Node.js v20.

### Browser Versions[​](#browser-versions-17 "Direct link to Browser Versions")

*   Chromium 120.0.6099.28
*   Mozilla Firefox 119.0
*   WebKit 17.4

This version was also tested against the following stable channels:

*   Google Chrome 119
*   Microsoft Edge 119

Version 1.39[​](#version-139 "Direct link to Version 1.39")
-----------------------------------------------------------

### Add custom matchers to your expect[​](#add-custom-matchers-to-your-expect "Direct link to Add custom matchers to your expect")

You can extend Playwright assertions by providing custom matchers. These matchers will be available on the expect object.

test.spec.ts

    import { expect as baseExpect } from '@playwright/test';export const expect = baseExpect.extend({  async toHaveAmount(locator: Locator, expected: number, options?: { timeout?: number }) {    // ... see documentation for how to write matchers.  },});test('pass', async ({ page }) => {  await expect(page.getByTestId('cart')).toHaveAmount(5);});

See the documentation [for a full example](/docs/test-assertions#add-custom-matchers-using-expectextend).

### Merge test fixtures[​](#merge-test-fixtures "Direct link to Merge test fixtures")

You can now merge test fixtures from multiple files or modules:

fixtures.ts

    import { mergeTests } from '@playwright/test';import { test as dbTest } from 'database-test-utils';import { test as a11yTest } from 'a11y-test-utils';export const test = mergeTests(dbTest, a11yTest);

test.spec.ts

    import { test } from './fixtures';test('passes', async ({ database, page, a11y }) => {  // use database and a11y fixtures.});

### Merge custom expect matchers[​](#merge-custom-expect-matchers "Direct link to Merge custom expect matchers")

You can now merge custom expect matchers from multiple files or modules:

fixtures.ts

    import { mergeTests, mergeExpects } from '@playwright/test';import { test as dbTest, expect as dbExpect } from 'database-test-utils';import { test as a11yTest, expect as a11yExpect } from 'a11y-test-utils';export const test = mergeTests(dbTest, a11yTest);export const expect = mergeExpects(dbExpect, a11yExpect);

test.spec.ts

    import { test, expect } from './fixtures';test('passes', async ({ page, database }) => {  await expect(database).toHaveDatabaseUser('admin');  await expect(page).toPassA11yAudit();});

### Hide implementation details: box test steps[​](#hide-implementation-details-box-test-steps "Direct link to Hide implementation details: box test steps")

You can mark a [test.step()](/docs/api/class-test#test-step) as "boxed" so that errors inside it point to the step call site.

    async function login(page) {  await test.step('login', async () => {    // ...  }, { box: true });  // Note the "box" option here.}

    Error: Timed out 5000ms waiting for expect(locator).toBeVisible()  ... error details omitted ...  14 |   await page.goto('https://github.com/login');> 15 |   await login(page);     |         ^  16 | });

See [test.step()](/docs/api/class-test#test-step) documentation for a full example.

### New APIs[​](#new-apis-8 "Direct link to New APIs")

*   [expect(locator).toHaveAttribute()](/docs/api/class-locatorassertions#locator-assertions-to-have-attribute-2)

### Browser Versions[​](#browser-versions-18 "Direct link to Browser Versions")

*   Chromium 119.0.6045.9
*   Mozilla Firefox 118.0.1
*   WebKit 17.4

This version was also tested against the following stable channels:

*   Google Chrome 118
*   Microsoft Edge 118

Version 1.38[​](#version-138 "Direct link to Version 1.38")
-----------------------------------------------------------

### UI Mode Updates[​](#ui-mode-updates-1 "Direct link to UI Mode Updates")

![Playwright UI Mode](https://github.com/microsoft/playwright/assets/746130/8ba27be0-58fd-4f62-8561-950480610369)

1.  Zoom into time range.
2.  Network panel redesign.

### New APIs[​](#new-apis-9 "Direct link to New APIs")

*   [browserContext.on('weberror')](/docs/api/class-browsercontext#browser-context-event-web-error)
*   [locator.pressSequentially()](/docs/api/class-locator#locator-press-sequentially)
*   The [reporter.onEnd()](/docs/api/class-reporter#reporter-on-end) now reports `startTime` and total run `duration`.

### Deprecations[​](#deprecations "Direct link to Deprecations")

*   The following methods were deprecated: [page.type()](/docs/api/class-page#page-type), [frame.type()](/docs/api/class-frame#frame-type), [locator.type()](/docs/api/class-locator#locator-type) and [elementHandle.type()](/docs/api/class-elementhandle#element-handle-type). Please use [locator.fill()](/docs/api/class-locator#locator-fill) instead which is much faster. Use [locator.pressSequentially()](/docs/api/class-locator#locator-press-sequentially) only if there is a special keyboard handling on the page, and you need to press keys one-by-one.

### Breaking Changes: Playwright no longer downloads browsers automatically[​](#breaking-changes-playwright-no-longer-downloads-browsers-automatically "Direct link to Breaking Changes: Playwright no longer downloads browsers automatically")

> **Note**: If you are using `@playwright/test` package, this change does not affect you.

Playwright recommends to use `@playwright/test` package and download browsers via `npx playwright install` command. If you are following this recommendation, nothing has changed for you.

However, up to v1.38, installing the `playwright` package instead of `@playwright/test` did automatically download browsers. This is no longer the case, and we recommend to explicitly download browsers via `npx playwright install` command.

**v1.37 and earlier**

`playwright` package was downloading browsers during `npm install`, while `@playwright/test` was not.

**v1.38 and later**

`playwright` and `@playwright/test` packages do not download browsers during `npm install`.

**Recommended migration**

Run `npx playwright install` to download browsers after `npm install`. For example, in your CI configuration:

    - run: npm ci- run: npx playwright install --with-deps

**Alternative migration option - not recommended**

Add `@playwright/browser-chromium`, `@playwright/browser-firefox` and `@playwright/browser-webkit` as a dependency. These packages download respective browsers during `npm install`. Make sure you keep the version of all playwright packages in sync:

    // package.json{  "devDependencies": {    "playwright": "1.38.0",    "@playwright/browser-chromium": "1.38.0",    "@playwright/browser-firefox": "1.38.0",    "@playwright/browser-webkit": "1.38.0"  }}

### Browser Versions[​](#browser-versions-19 "Direct link to Browser Versions")

*   Chromium 117.0.5938.62
*   Mozilla Firefox 117.0
*   WebKit 17.0

This version was also tested against the following stable channels:

*   Google Chrome 116
*   Microsoft Edge 116

Version 1.37[​](#version-137 "Direct link to Version 1.37")
-----------------------------------------------------------

### New `npx playwright merge-reports` tool[​](#new-npx-playwright-merge-reports-tool "Direct link to new-npx-playwright-merge-reports-tool")

If you run tests on multiple shards, you can now merge all reports in a single HTML report (or any other report) using the new `merge-reports` CLI tool.

Using `merge-reports` tool requires the following steps:

1.  Adding a new "blob" reporter to the config when running on CI:
    
    playwright.config.ts
    
        export default defineConfig({  testDir: './tests',  reporter: process.env.CI ? 'blob' : 'html',});
    
    The "blob" reporter will produce ".zip" files that contain all the information about the test run.
    
2.  Copying all "blob" reports in a single shared location and running `npx playwright merge-reports`:
    

    npx playwright merge-reports --reporter html ./all-blob-reports

Read more in [our documentation](/docs/test-sharding).

### 📚 Debian 12 Bookworm Support[​](#-debian-12-bookworm-support "Direct link to 📚 Debian 12 Bookworm Support")

Playwright now supports Debian 12 Bookworm on both x86\_64 and arm64 for Chromium, Firefox and WebKit. Let us know if you encounter any issues!

Linux support looks like this:

Ubuntu 20.04

Ubuntu 22.04

Debian 11

Debian 12

Chromium

✅

✅

✅

✅

WebKit

✅

✅

✅

✅

Firefox

✅

✅

✅

✅

### UI Mode Updates[​](#ui-mode-updates-2 "Direct link to UI Mode Updates")

*   UI Mode now respects project dependencies. You can control which dependencies to respect by checking/unchecking them in a projects list.
*   Console logs from the test are now displayed in the Console tab.

### Browser Versions[​](#browser-versions-20 "Direct link to Browser Versions")

*   Chromium 116.0.5845.82
*   Mozilla Firefox 115.0
*   WebKit 17.0

This version was also tested against the following stable channels:

*   Google Chrome 115
*   Microsoft Edge 115

Version 1.36[​](#version-136 "Direct link to Version 1.36")
-----------------------------------------------------------

🏝️ Summer maintenance release.

### Browser Versions[​](#browser-versions-21 "Direct link to Browser Versions")

*   Chromium 115.0.5790.75
*   Mozilla Firefox 115.0
*   WebKit 17.0

This version was also tested against the following stable channels:

*   Google Chrome 114
*   Microsoft Edge 114

Version 1.35[​](#version-135 "Direct link to Version 1.35")
-----------------------------------------------------------

### Highlights[​](#highlights-2 "Direct link to Highlights")

*   UI mode is now available in VSCode Playwright extension via a new "Show trace viewer" button:
    
    ![Playwright UI Mode](https://github.com/microsoft/playwright/assets/746130/13094128-259b-477a-8bbb-c1181178e8a2)
    
*   UI mode and trace viewer mark network requests handled with [page.route()](/docs/api/class-page#page-route) and [browserContext.route()](/docs/api/class-browsercontext#browser-context-route) handlers, as well as those issued via the [API testing](/docs/api-testing):
    
    ![Trace Viewer](https://github.com/microsoft/playwright/assets/746130/0df2d4b6-faa3-465c-aff3-c435b430bfe1)
    
*   New option `maskColor` for methods [page.screenshot()](/docs/api/class-page#page-screenshot), [locator.screenshot()](/docs/api/class-locator#locator-screenshot), [expect(page).toHaveScreenshot()](/docs/api/class-pageassertions#page-assertions-to-have-screenshot-1) and [expect(locator).toHaveScreenshot()](/docs/api/class-locatorassertions#locator-assertions-to-have-screenshot-1) to change default masking color:
    
        await page.goto('https://playwright.dev');await expect(page).toHaveScreenshot({  mask: [page.locator('img')],  maskColor: '#00FF00', // green});
    
*   New `uninstall` CLI command to uninstall browser binaries:
    
        $ npx playwright uninstall # remove browsers installed by this installation$ npx playwright uninstall --all # remove all ever-install Playwright browsers
    
*   Both UI mode and trace viewer now could be opened in a browser tab:
    
        $ npx playwright test --ui-port 0 # open UI mode in a tab on a random port$ npx playwright show-trace --port 0 # open trace viewer in tab on a random port
    

### ⚠️ Breaking changes[​](#️-breaking-changes "Direct link to ⚠️ Breaking changes")

*   `playwright-core` binary got renamed from `playwright` to `playwright-core`. So if you use `playwright-core` CLI, make sure to update the name:
    
        $ npx playwright-core install # the new way to install browsers when using playwright-core
    
    This change **does not** affect `@playwright/test` and `playwright` package users.
    

### Browser Versions[​](#browser-versions-22 "Direct link to Browser Versions")

*   Chromium 115.0.5790.13
*   Mozilla Firefox 113.0
*   WebKit 16.4

This version was also tested against the following stable channels:

*   Google Chrome 114
*   Microsoft Edge 114

Version 1.34[​](#version-134 "Direct link to Version 1.34")
-----------------------------------------------------------

### Highlights[​](#highlights-3 "Direct link to Highlights")

*   UI Mode now shows steps, fixtures and attachments: ![UI Mode attachments](https://github.com/microsoft/playwright/assets/746130/1d280419-d79a-4a56-b2dc-54d631281d56)
    
*   New property [testProject.teardown](/docs/api/class-testproject#test-project-teardown) to specify a project that needs to run after this and all dependent projects have finished. Teardown is useful to cleanup any resources acquired by this project.
    
    A common pattern would be a `setup` dependency with a corresponding `teardown`:
    
    playwright.config.ts
    
        import { defineConfig } from '@playwright/test';export default defineConfig({  projects: [    {      name: 'setup',      testMatch: /global.setup\.ts/,      teardown: 'teardown',    },    {      name: 'teardown',      testMatch: /global.teardown\.ts/,    },    {      name: 'chromium',      use: devices['Desktop Chrome'],      dependencies: ['setup'],    },    {      name: 'firefox',      use: devices['Desktop Firefox'],      dependencies: ['setup'],    },    {      name: 'webkit',      use: devices['Desktop Safari'],      dependencies: ['setup'],    },  ],});
    
*   New method [`expect.configure`](/docs/test-assertions#expectconfigure) to create pre-configured expect instance with its own defaults such as `timeout` and `soft`.
    
        const slowExpect = expect.configure({ timeout: 10000 });await slowExpect(locator).toHaveText('Submit');// Always do soft assertions.const softExpect = expect.configure({ soft: true });
    
*   New options `stderr` and `stdout` in [testConfig.webServer](/docs/api/class-testconfig#test-config-web-server) to configure output handling:
    
    playwright.config.ts
    
        import { defineConfig } from '@playwright/test';export default defineConfig({  // Run your local dev server before starting the tests  webServer: {    command: 'npm run start',    url: 'http://127.0.0.1:3000',    reuseExistingServer: !process.env.CI,    stdout: 'pipe',    stderr: 'pipe',  },});
    
*   New [locator.and()](/docs/api/class-locator#locator-and) to create a locator that matches both locators.
    
        const button = page.getByRole('button').and(page.getByTitle('Subscribe'));
    
*   New events [browserContext.on('console')](/docs/api/class-browsercontext#browser-context-event-console) and [browserContext.on('dialog')](/docs/api/class-browsercontext#browser-context-event-dialog) to subscribe to any dialogs and console messages from any page from the given browser context. Use the new methods [consoleMessage.page()](/docs/api/class-consolemessage#console-message-page) and [dialog.page()](/docs/api/class-dialog#dialog-page) to pin-point event source.
    

### ⚠️ Breaking changes[​](#️-breaking-changes-1 "Direct link to ⚠️ Breaking changes")

*   `npx playwright test` no longer works if you install both `playwright` and `@playwright/test`. There's no need to install both, since you can always import browser automation APIs from `@playwright/test` directly:
    
    automation.ts
    
        import { chromium, firefox, webkit } from '@playwright/test';/* ... */
    
*   Node.js 14 is no longer supported since it [reached its end-of-life](https://nodejs.dev/en/about/releases/) on April 30, 2023.
    

### Browser Versions[​](#browser-versions-23 "Direct link to Browser Versions")

*   Chromium 114.0.5735.26
*   Mozilla Firefox 113.0
*   WebKit 16.4

This version was also tested against the following stable channels:

*   Google Chrome 113
*   Microsoft Edge 113

Version 1.33[​](#version-133 "Direct link to Version 1.33")
-----------------------------------------------------------

### Locators Update[​](#locators-update "Direct link to Locators Update")

*   Use [locator.or()](/docs/api/class-locator#locator-or) to create a locator that matches either of the two locators. Consider a scenario where you'd like to click on a "New email" button, but sometimes a security settings dialog shows up instead. In this case, you can wait for either a "New email" button, or a dialog and act accordingly:
    
        const newEmail = page.getByRole('button', { name: 'New email' });const dialog = page.getByText('Confirm security settings');await expect(newEmail.or(dialog)).toBeVisible();if (await dialog.isVisible())  await page.getByRole('button', { name: 'Dismiss' }).click();await newEmail.click();
    
*   Use new options [hasNot](/docs/api/class-locator#locator-filter-option-has-not) and [hasNotText](/docs/api/class-locator#locator-filter-option-has-not-text) in [locator.filter()](/docs/api/class-locator#locator-filter) to find elements that **do not match** certain conditions.
    
        const rowLocator = page.locator('tr');await rowLocator    .filter({ hasNotText: 'text in column 1' })    .filter({ hasNot: page.getByRole('button', { name: 'column 2 button' }) })    .screenshot();
    
*   Use new web-first assertion [expect(locator).toBeAttached()](/docs/api/class-locatorassertions#locator-assertions-to-be-attached) to ensure that the element is present in the page's DOM. Do not confuse with the [expect(locator).toBeVisible()](/docs/api/class-locatorassertions#locator-assertions-to-be-visible) that ensures that element is both attached & visible.
    

### New APIs[​](#new-apis-10 "Direct link to New APIs")

*   [locator.or()](/docs/api/class-locator#locator-or)
*   New option [hasNot](/docs/api/class-locator#locator-filter-option-has-not) in [locator.filter()](/docs/api/class-locator#locator-filter)
*   New option [hasNotText](/docs/api/class-locator#locator-filter-option-has-not-text) in [locator.filter()](/docs/api/class-locator#locator-filter)
*   [expect(locator).toBeAttached()](/docs/api/class-locatorassertions#locator-assertions-to-be-attached)
*   New option [timeout](/docs/api/class-route#route-fetch-option-timeout) in [route.fetch()](/docs/api/class-route#route-fetch)
*   [reporter.onExit()](/docs/api/class-reporter#reporter-on-exit)

### ⚠️ Breaking change[​](#️-breaking-change "Direct link to ⚠️ Breaking change")

*   The `mcr.microsoft.com/playwright:v1.33.0` now serves a Playwright image based on Ubuntu Jammy. To use the focal-based image, please use `mcr.microsoft.com/playwright:v1.33.0-focal` instead.

### Browser Versions[​](#browser-versions-24 "Direct link to Browser Versions")

*   Chromium 113.0.5672.53
*   Mozilla Firefox 112.0
*   WebKit 16.4

This version was also tested against the following stable channels:

*   Google Chrome 112
*   Microsoft Edge 112

Version 1.32[​](#version-132 "Direct link to Version 1.32")
-----------------------------------------------------------

### Introducing UI Mode (preview)[​](#introducing-ui-mode-preview "Direct link to Introducing UI Mode (preview)")

New [UI Mode](/docs/test-ui-mode) lets you explore, run and debug tests. Comes with a built-in watch mode.

![Playwright UI Mode](https://user-images.githubusercontent.com/746130/227004851-3901a691-4f8e-43d6-8d6b-cbfeafaeb999.png)

Engage with a new flag `--ui`:

    npx playwright test --ui

### New APIs[​](#new-apis-11 "Direct link to New APIs")

*   New options [updateMode](/docs/api/class-page#page-route-from-har-option-update-mode) and [updateContent](/docs/api/class-page#page-route-from-har-option-update-content) in [page.routeFromHAR()](/docs/api/class-page#page-route-from-har) and [browserContext.routeFromHAR()](/docs/api/class-browsercontext#browser-context-route-from-har).
*   Chaining existing locator objects, see [locator docs](/docs/locators#matching-inside-a-locator) for details.
*   New property [testInfo.testId](/docs/api/class-testinfo#test-info-test-id).
*   New option [name](/docs/api/class-tracing#tracing-start-chunk-option-name) in method [tracing.startChunk()](/docs/api/class-tracing#tracing-start-chunk).

### ⚠️ Breaking change in component tests[​](#️-breaking-change-in-component-tests "Direct link to ⚠️ Breaking change in component tests")

Note: **component tests only**, does not affect end-to-end tests.

*   `@playwright/experimental-ct-react` now supports **React 18 only**.
*   If you're running component tests with React 16 or 17, please replace `@playwright/experimental-ct-react` with `@playwright/experimental-ct-react17`.

### Browser Versions[​](#browser-versions-25 "Direct link to Browser Versions")

*   Chromium 112.0.5615.29
*   Mozilla Firefox 111.0
*   WebKit 16.4

This version was also tested against the following stable channels:

*   Google Chrome 111
*   Microsoft Edge 111

Version 1.31[​](#version-131 "Direct link to Version 1.31")
-----------------------------------------------------------

### New APIs[​](#new-apis-12 "Direct link to New APIs")

*   New property [testProject.dependencies](/docs/api/class-testproject#test-project-dependencies) to configure dependencies between projects.
    
    Using dependencies allows global setup to produce traces and other artifacts, see the setup steps in the test report and more.
    
    playwright.config.ts
    
        import { defineConfig } from '@playwright/test';export default defineConfig({  projects: [    {      name: 'setup',      testMatch: /global.setup\.ts/,    },    {      name: 'chromium',      use: devices['Desktop Chrome'],      dependencies: ['setup'],    },    {      name: 'firefox',      use: devices['Desktop Firefox'],      dependencies: ['setup'],    },    {      name: 'webkit',      use: devices['Desktop Safari'],      dependencies: ['setup'],    },  ],});
    
*   New assertion [expect(locator).toBeInViewport()](/docs/api/class-locatorassertions#locator-assertions-to-be-in-viewport) ensures that locator points to an element that intersects viewport, according to the [intersection observer API](https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API).
    
        const button = page.getByRole('button');// Make sure at least some part of element intersects viewport.await expect(button).toBeInViewport();// Make sure element is fully outside of viewport.await expect(button).not.toBeInViewport();// Make sure that at least half of the element intersects viewport.await expect(button).toBeInViewport({ ratio: 0.5 });
    

### Miscellaneous[​](#miscellaneous-11 "Direct link to Miscellaneous")

*   DOM snapshots in trace viewer can be now opened in a separate window.
*   New method `defineConfig` to be used in `playwright.config`.
*   New option [maxRedirects](/docs/api/class-route#route-fetch-option-max-redirects) for method [route.fetch()](/docs/api/class-route#route-fetch).
*   Playwright now supports Debian 11 arm64.
*   Official [docker images](/docs/docker) now include Node 18 instead of Node 16.

### ⚠️ Breaking change in component tests[​](#️-breaking-change-in-component-tests-1 "Direct link to ⚠️ Breaking change in component tests")

Note: **component tests only**, does not affect end-to-end tests.

`playwright-ct.config` configuration file for [component testing](/docs/test-components) now requires calling `defineConfig`.

    // Beforeimport { type PlaywrightTestConfig, devices } from '@playwright/experimental-ct-react';const config: PlaywrightTestConfig = {  // ... config goes here ...};export default config;

Replace `config` variable definition with `defineConfig` call:

    // Afterimport { defineConfig, devices } from '@playwright/experimental-ct-react';export default defineConfig({  // ... config goes here ...});

### Browser Versions[​](#browser-versions-26 "Direct link to Browser Versions")

*   Chromium 111.0.5563.19
*   Mozilla Firefox 109.0
*   WebKit 16.4

This version was also tested against the following stable channels:

*   Google Chrome 110
*   Microsoft Edge 110

Version 1.30[​](#version-130 "Direct link to Version 1.30")
-----------------------------------------------------------

### Browser Versions[​](#browser-versions-27 "Direct link to Browser Versions")

*   Chromium 110.0.5481.38
*   Mozilla Firefox 108.0.2
*   WebKit 16.4

This version was also tested against the following stable channels:

*   Google Chrome 109
*   Microsoft Edge 109

Version 1.29[​](#version-129 "Direct link to Version 1.29")
-----------------------------------------------------------

### New APIs[​](#new-apis-13 "Direct link to New APIs")

*   New method [route.fetch()](/docs/api/class-route#route-fetch) and new option `json` for [route.fulfill()](/docs/api/class-route#route-fulfill):
    
        await page.route('**/api/settings', async route => {  // Fetch original settings.  const response = await route.fetch();  // Force settings theme to a predefined value.  const json = await response.json();  json.theme = 'Solorized';  // Fulfill with modified data.  await route.fulfill({ json });});
    
*   New method [locator.all()](/docs/api/class-locator#locator-all) to iterate over all matching elements:
    
        // Check all checkboxes!const checkboxes = page.getByRole('checkbox');for (const checkbox of await checkboxes.all())  await checkbox.check();
    
*   [locator.selectOption()](/docs/api/class-locator#locator-select-option) matches now by value or label:
    
        <select multiple>  <option value="red">Red</option>  <option value="green">Green</option>  <option value="blue">Blue</option></select>
    
        await element.selectOption('Red');
    
*   Retry blocks of code until all assertions pass:
    
        await expect(async () => {  const response = await page.request.get('https://api.example.com');  await expect(response).toBeOK();}).toPass();
    
    Read more in [our documentation](/docs/test-assertions#expecttopass).
    
*   Automatically capture **full page screenshot** on test failure:
    
    playwright.config.ts
    
        import { defineConfig } from '@playwright/test';export default defineConfig({  use: {    screenshot: {      mode: 'only-on-failure',      fullPage: true,    }  }});
    

### Miscellaneous[​](#miscellaneous-12 "Direct link to Miscellaneous")

*   Playwright Test now respects [`jsconfig.json`](https://code.visualstudio.com/docs/languages/jsconfig).
*   New options `args` and `proxy` for [androidDevice.launchBrowser()](/docs/api/class-androiddevice#android-device-launch-browser).
*   Option `postData` in method [route.continue()](/docs/api/class-route#route-continue) now supports [Serializable](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify#Description "Serializable") values.

### Browser Versions[​](#browser-versions-28 "Direct link to Browser Versions")

*   Chromium 109.0.5414.46
*   Mozilla Firefox 107.0
*   WebKit 16.4

This version was also tested against the following stable channels:

*   Google Chrome 108
*   Microsoft Edge 108

Version 1.28[​](#version-128 "Direct link to Version 1.28")
-----------------------------------------------------------

### Playwright Tools[​](#playwright-tools "Direct link to Playwright Tools")

*   **Record at Cursor in VSCode.** You can run the test, position the cursor at the end of the test and continue generating the test.

![New VSCode Extension](https://user-images.githubusercontent.com/746130/202005839-aba2eeba-217b-424d-8496-8b4f5fa72f41.png)

*   **Live Locators in VSCode.** You can hover and edit locators in VSCode to get them highlighted in the opened browser.
*   **Live Locators in CodeGen.** Generate a locator for any element on the page using "Explore" tool.

![Locator Explorer](https://user-images.githubusercontent.com/746130/201796876-01567a0b-ca61-4a9d-b12b-04786c471671.png)

*   **Codegen and Trace Viewer Dark Theme.** Automatically picked up from operating system settings.

![Dark Theme](https://user-images.githubusercontent.com/746130/201797969-603f74df-d7cf-4c56-befd-798dbd269796.png)

### Test Runner[​](#test-runner-4 "Direct link to Test Runner")

*   Configure retries and test timeout for a file or a test with [test.describe.configure()](/docs/api/class-test#test-describe-configure).
    
        // Each test in the file will be retried twice and have a timeout of 20 seconds.test.describe.configure({ retries: 2, timeout: 20_000 });test('runs first', async ({ page }) => {});test('runs second', async ({ page }) => {});
    
*   Use [testProject.snapshotPathTemplate](/docs/api/class-testproject#test-project-snapshot-path-template) and [testConfig.snapshotPathTemplate](/docs/api/class-testconfig#test-config-snapshot-path-template) to configure a template controlling location of snapshots generated by [expect(page).toHaveScreenshot()](/docs/api/class-pageassertions#page-assertions-to-have-screenshot-1) and [expect(value).toMatchSnapshot()](/docs/api/class-snapshotassertions#snapshot-assertions-to-match-snapshot-1).
    
    playwright.config.ts
    
        import { defineConfig } from '@playwright/test';export default defineConfig({  testDir: './tests',  snapshotPathTemplate: '{testDir}/__screenshots__/{testFilePath}/{arg}{ext}',});
    

### New APIs[​](#new-apis-14 "Direct link to New APIs")

*   [locator.blur()](/docs/api/class-locator#locator-blur)
*   [locator.clear()](/docs/api/class-locator#locator-clear)
*   [android.launchServer()](/docs/api/class-android#android-launch-server) and [android.connect()](/docs/api/class-android#android-connect)
*   [androidDevice.on('close')](/docs/api/class-androiddevice#android-device-event-close)

### Browser Versions[​](#browser-versions-29 "Direct link to Browser Versions")

*   Chromium 108.0.5359.29
*   Mozilla Firefox 106.0
*   WebKit 16.4

This version was also tested against the following stable channels:

*   Google Chrome 107
*   Microsoft Edge 107

Version 1.27[​](#version-127 "Direct link to Version 1.27")
-----------------------------------------------------------

### Locators[​](#locators "Direct link to Locators")

With these new APIs writing locators is a joy:

*   [page.getByText()](/docs/api/class-page#page-get-by-text) to locate by text content.
*   [page.getByRole()](/docs/api/class-page#page-get-by-role) to locate by [ARIA role](https://www.w3.org/TR/wai-aria-1.2/#roles), [ARIA attributes](https://www.w3.org/TR/wai-aria-1.2/#aria-attributes) and [accessible name](https://w3c.github.io/accname/#dfn-accessible-name).
*   [page.getByLabel()](/docs/api/class-page#page-get-by-label) to locate a form control by associated label's text.
*   [page.getByTestId()](/docs/api/class-page#page-get-by-test-id) to locate an element based on its `data-testid` attribute (other attribute can be configured).
*   [page.getByPlaceholder()](/docs/api/class-page#page-get-by-placeholder) to locate an input by placeholder.
*   [page.getByAltText()](/docs/api/class-page#page-get-by-alt-text) to locate an element, usually image, by its text alternative.
*   [page.getByTitle()](/docs/api/class-page#page-get-by-title) to locate an element by its title.

    await page.getByLabel('User Name').fill('John');await page.getByLabel('Password').fill('secret-password');await page.getByRole('button', { name: 'Sign in' }).click();await expect(page.getByText('Welcome, John!')).toBeVisible();

All the same methods are also available on [Locator](/docs/api/class-locator "Locator"), [FrameLocator](/docs/api/class-framelocator "FrameLocator") and [Frame](/docs/api/class-frame "Frame") classes.

### Other highlights[​](#other-highlights "Direct link to Other highlights")

*   `workers` option in the `playwright.config.ts` now accepts a percentage string to use some of the available CPUs. You can also pass it in the command line:
    
        npx playwright test --workers=20%
    
*   New options `host` and `port` for the html reporter.
    
        import { defineConfig } from '@playwright/test';export default defineConfig({  reporter: [['html', { host: 'localhost', port: '9223' }]],});
    
*   New field `FullConfig.configFile` is available to test reporters, specifying the path to the config file if any.
    
*   As announced in v1.25, Ubuntu 18 will not be supported as of Dec 2022. In addition to that, there will be no WebKit updates on Ubuntu 18 starting from the next Playwright release.
    

### Behavior Changes[​](#behavior-changes "Direct link to Behavior Changes")

*   [expect(locator).toHaveAttribute()](/docs/api/class-locatorassertions#locator-assertions-to-have-attribute) with an empty value does not match missing attribute anymore. For example, the following snippet will succeed when `button` **does not** have a `disabled` attribute.
    
        await expect(page.getByRole('button')).toHaveAttribute('disabled', '');
    
*   Command line options `--grep` and `--grep-invert` previously incorrectly ignored `grep` and `grepInvert` options specified in the config. Now all of them are applied together.
    

### Browser Versions[​](#browser-versions-30 "Direct link to Browser Versions")

*   Chromium 107.0.5304.18
*   Mozilla Firefox 105.0.1
*   WebKit 16.0

This version was also tested against the following stable channels:

*   Google Chrome 106
*   Microsoft Edge 106

Version 1.26[​](#version-126 "Direct link to Version 1.26")
-----------------------------------------------------------

### Assertions[​](#assertions "Direct link to Assertions")

*   New option `enabled` for [expect(locator).toBeEnabled()](/docs/api/class-locatorassertions#locator-assertions-to-be-enabled).
*   [expect(locator).toHaveText()](/docs/api/class-locatorassertions#locator-assertions-to-have-text) now pierces open shadow roots.
*   New option `editable` for [expect(locator).toBeEditable()](/docs/api/class-locatorassertions#locator-assertions-to-be-editable).
*   New option `visible` for [expect(locator).toBeVisible()](/docs/api/class-locatorassertions#locator-assertions-to-be-visible).

### Other highlights[​](#other-highlights-1 "Direct link to Other highlights")

*   New option `maxRedirects` for [apiRequestContext.get()](/docs/api/class-apirequestcontext#api-request-context-get) and others to limit redirect count.
*   New command-line flag `--pass-with-no-tests` that allows the test suite to pass when no files are found.
*   New command-line flag `--ignore-snapshots` to skip snapshot expectations, such as `expect(value).toMatchSnapshot()` and `expect(page).toHaveScreenshot()`.

### Behavior Change[​](#behavior-change "Direct link to Behavior Change")

A bunch of Playwright APIs already support the `waitUntil: 'domcontentloaded'` option. For example:

    await page.goto('https://playwright.dev', {  waitUntil: 'domcontentloaded',});

Prior to 1.26, this would wait for all iframes to fire the `DOMContentLoaded` event.

To align with web specification, the `'domcontentloaded'` value only waits for the target frame to fire the `'DOMContentLoaded'` event. Use `waitUntil: 'load'` to wait for all iframes.

### Browser Versions[​](#browser-versions-31 "Direct link to Browser Versions")

*   Chromium 106.0.5249.30
*   Mozilla Firefox 104.0
*   WebKit 16.0

This version was also tested against the following stable channels:

*   Google Chrome 105
*   Microsoft Edge 105

Version 1.25[​](#version-125 "Direct link to Version 1.25")
-----------------------------------------------------------

### VSCode Extension[​](#vscode-extension "Direct link to VSCode Extension")

*   Watch your tests running live & keep devtools open.
*   Pick selector.
*   Record new test from current page state.

![vscode extension screenshot](https://user-images.githubusercontent.com/746130/183781999-1b9fdbc5-cfae-47d6-b4f7-5d4ae89716a8.jpg)

### Test Runner[​](#test-runner-5 "Direct link to Test Runner")

*   [test.step()](/docs/api/class-test#test-step) now returns the value of the step function:
    
        test('should work', async ({ page }) => {  const pageTitle = await test.step('get title', async () => {    await page.goto('https://playwright.dev');    return await page.title();  });  console.log(pageTitle);});
    
*   Added [test.describe.fixme()](/docs/api/class-test#test-describe-fixme).
    
*   New `'interrupted'` test status.
    
*   Enable tracing via CLI flag: `npx playwright test --trace=on`.
    

### Announcements[​](#announcements-1 "Direct link to Announcements")

*   🎁 We now ship Ubuntu 22.04 Jammy Jellyfish docker image: `mcr.microsoft.com/playwright:v1.34.0-jammy`.
*   🪦 This is the last release with macOS 10.15 support (deprecated as of 1.21).
*   🪦 This is the last release with Node.js 12 support, we recommend upgrading to Node.js LTS (16).
*   ⚠️ Ubuntu 18 is now deprecated and will not be supported as of Dec 2022.

### Browser Versions[​](#browser-versions-32 "Direct link to Browser Versions")

*   Chromium 105.0.5195.19
*   Mozilla Firefox 103.0
*   WebKit 16.0

This version was also tested against the following stable channels:

*   Google Chrome 104
*   Microsoft Edge 104

Version 1.24[​](#version-124 "Direct link to Version 1.24")
-----------------------------------------------------------

### 🌍 Multiple Web Servers in `playwright.config.ts`[​](#-multiple-web-servers-in-playwrightconfigts "Direct link to -multiple-web-servers-in-playwrightconfigts")

Launch multiple web servers, databases, or other processes by passing an array of configurations:

playwright.config.ts

    import { defineConfig } from '@playwright/test';export default defineConfig({  webServer: [    {      command: 'npm run start',      url: 'http://127.0.0.1:3000',      timeout: 120 * 1000,      reuseExistingServer: !process.env.CI,    },    {      command: 'npm run backend',      url: 'http://127.0.0.1:3333',      timeout: 120 * 1000,      reuseExistingServer: !process.env.CI,    }  ],  use: {    baseURL: 'http://localhost:3000/',  },});

### 🐂 Debian 11 Bullseye Support[​](#-debian-11-bullseye-support "Direct link to 🐂 Debian 11 Bullseye Support")

Playwright now supports Debian 11 Bullseye on x86\_64 for Chromium, Firefox and WebKit. Let us know if you encounter any issues!

Linux support looks like this:

| | Ubuntu 20.04 | Ubuntu 22.04 | Debian 11 | :--- | :---: | :---: | :---: | :---: | | Chromium | ✅ | ✅ | ✅ | | WebKit | ✅ | ✅ | ✅ | | Firefox | ✅ | ✅ | ✅ |

### 🕵️ Anonymous Describe[​](#️-anonymous-describe "Direct link to 🕵️ Anonymous Describe")

It is now possible to call [test.describe()](/docs/api/class-test#test-describe) to create suites without a title. This is useful for giving a group of tests a common option with [test.use()](/docs/api/class-test#test-use).

    test.describe(() => {  test.use({ colorScheme: 'dark' });  test('one', async ({ page }) => {    // ...  });  test('two', async ({ page }) => {    // ...  });});

### 🧩 Component Tests Update[​](#-component-tests-update "Direct link to 🧩 Component Tests Update")

Playwright 1.24 Component Tests introduce `beforeMount` and `afterMount` hooks. Use these to configure your app for tests.

For example, this could be used to setup App router in Vue.js:

src/component.spec.ts

    import { test } from '@playwright/experimental-ct-vue';import { Component } from './mycomponent';test('should work', async ({ mount }) => {  const component = await mount(Component, {    hooksConfig: {      /* anything to configure your app */    }  });});

playwright/index.ts

    import { router } from '../router';import { beforeMount } from '@playwright/experimental-ct-vue/hooks';beforeMount(async ({ app, hooksConfig }) => {  app.use(router);});

A similar configuration in Next.js would look like this:

src/component.spec.jsx

    import { test } from '@playwright/experimental-ct-react';import { Component } from './mycomponent';test('should work', async ({ mount }) => {  const component = await mount(<Component></Component>, {    // Pass mock value from test into `beforeMount`.    hooksConfig: {      router: {        query: { page: 1, per_page: 10 },        asPath: '/posts'      }    }  });});

playwright/index.js

    import router from 'next/router';import { beforeMount } from '@playwright/experimental-ct-react/hooks';beforeMount(async ({ hooksConfig }) => {  // Before mount, redefine useRouter to return mock value from test.  router.useRouter = () => hooksConfig.router;});

Version 1.23[​](#version-123 "Direct link to Version 1.23")
-----------------------------------------------------------

### Network Replay[​](#network-replay "Direct link to Network Replay")

Now you can record network traffic into a HAR file and re-use this traffic in your tests.

To record network into HAR file:

    npx playwright open --save-har=github.har.zip https://github.com/microsoft

Alternatively, you can record HAR programmatically:

    const context = await browser.newContext({  recordHar: { path: 'github.har.zip' }});// ... do stuff ...await context.close();

Use the new methods [page.routeFromHAR()](/docs/api/class-page#page-route-from-har) or [browserContext.routeFromHAR()](/docs/api/class-browsercontext#browser-context-route-from-har) to serve matching responses from the [HAR](http://www.softwareishard.com/blog/har-12-spec/) file:

    await context.routeFromHAR('github.har.zip');

Read more in [our documentation](/docs/mock#mocking-with-har-files).

### Advanced Routing[​](#advanced-routing "Direct link to Advanced Routing")

You can now use [route.fallback()](/docs/api/class-route#route-fallback) to defer routing to other handlers.

Consider the following example:

    // Remove a header from all requests.test.beforeEach(async ({ page }) => {  await page.route('**/*', async route => {    const headers = await route.request().allHeaders();    delete headers['if-none-match'];    await route.fallback({ headers });  });});test('should work', async ({ page }) => {  await page.route('**/*', async route => {    if (route.request().resourceType() === 'image')      await route.abort();    else      await route.fallback();  });});

Note that the new methods [page.routeFromHAR()](/docs/api/class-page#page-route-from-har) and [browserContext.routeFromHAR()](/docs/api/class-browsercontext#browser-context-route-from-har) also participate in routing and could be deferred to.

### Web-First Assertions Update[​](#web-first-assertions-update "Direct link to Web-First Assertions Update")

*   New method [expect(locator).toHaveValues()](/docs/api/class-locatorassertions#locator-assertions-to-have-values) that asserts all selected values of `<select multiple>` element.
*   Methods [expect(locator).toContainText()](/docs/api/class-locatorassertions#locator-assertions-to-contain-text) and [expect(locator).toHaveText()](/docs/api/class-locatorassertions#locator-assertions-to-have-text) now accept `ignoreCase` option.

### Component Tests Update[​](#component-tests-update "Direct link to Component Tests Update")

*   Support for Vue2 via the [`@playwright/experimental-ct-vue2`](https://www.npmjs.com/package/@playwright/experimental-ct-vue2) package.
*   Support for component tests for [create-react-app](https://www.npmjs.com/package/create-react-app) with components in `.js` files.

Read more about [component testing with Playwright](/docs/test-components).

### Miscellaneous[​](#miscellaneous-13 "Direct link to Miscellaneous")

*   If there's a service worker that's in your way, you can now easily disable it with a new context option `serviceWorkers`:
    
    playwright.config.ts
    
        export default {  use: {    serviceWorkers: 'block',  }};
    
*   Using `.zip` path for `recordHar` context option automatically zips the resulting HAR:
    
        const context = await browser.newContext({  recordHar: {    path: 'github.har.zip',  }});
    
*   If you intend to edit HAR by hand, consider using the `"minimal"` HAR recording mode that only records information that is essential for replaying:
    
        const context = await browser.newContext({  recordHar: {    path: 'github.har',    mode: 'minimal',  }});
    
*   Playwright now runs on Ubuntu 22 amd64 and Ubuntu 22 arm64. We also publish new docker image `mcr.microsoft.com/playwright:v1.34.0-jammy`.
    

### ⚠️ Breaking Changes ⚠️[​](#️-breaking-changes-️ "Direct link to ⚠️ Breaking Changes ⚠️")

WebServer is now considered "ready" if request to the specified url has any of the following HTTP status codes:

*   `200-299`
*   `300-399` (new)
*   `400`, `401`, `402`, `403` (new)

Version 1.22[​](#version-122 "Direct link to Version 1.22")
-----------------------------------------------------------

### Highlights[​](#highlights-4 "Direct link to Highlights")

*   Components Testing (preview)
    
    Playwright Test can now test your [React](https://reactjs.org/), [Vue.js](https://vuejs.org/) or [Svelte](https://svelte.dev/) components. You can use all the features of Playwright Test (such as parallelization, emulation & debugging) while running components in real browsers.
    
    Here is what a typical component test looks like:
    
    App.spec.tsx
    
        import { test, expect } from '@playwright/experimental-ct-react';import App from './App';// Let's test component in a dark scheme!test.use({ colorScheme: 'dark' });test('should render', async ({ mount }) => {  const component = await mount(<App></App>);  // As with any Playwright test, assert locator text.  await expect(component).toContainText('React');  // Or do a screenshot 🚀  await expect(component).toHaveScreenshot();  // Or use any Playwright method  await component.click();});
    
    Read more in [our documentation](/docs/test-components).
    
*   Role selectors that allow selecting elements by their [ARIA role](https://www.w3.org/TR/wai-aria-1.2/#roles), [ARIA attributes](https://www.w3.org/TR/wai-aria-1.2/#aria-attributes) and [accessible name](https://w3c.github.io/accname/#dfn-accessible-name).
    
        // Click a button with accessible name "log in"await page.locator('role=button[name="log in"]').click();
    
    Read more in [our documentation](/docs/locators#locate-by-role).
    
*   New [locator.filter()](/docs/api/class-locator#locator-filter) API to filter an existing locator
    
        const buttons = page.locator('role=button');// ...const submitButton = buttons.filter({ hasText: 'Submit' });await submitButton.click();
    
*   New web-first assertions [expect(page).toHaveScreenshot()](/docs/api/class-pageassertions#page-assertions-to-have-screenshot-1) and [expect(locator).toHaveScreenshot()](/docs/api/class-locatorassertions#locator-assertions-to-have-screenshot-1) that wait for screenshot stabilization and enhances test reliability.
    
    The new assertions has screenshot-specific defaults, such as:
    
    *   disables animations
    *   uses CSS scale option
    
        await page.goto('https://playwright.dev');await expect(page).toHaveScreenshot();
    
    The new [expect(page).toHaveScreenshot()](/docs/api/class-pageassertions#page-assertions-to-have-screenshot-1) saves screenshots at the same location as [expect(value).toMatchSnapshot()](/docs/api/class-snapshotassertions#snapshot-assertions-to-match-snapshot-1).
    

Version 1.21[​](#version-121 "Direct link to Version 1.21")
-----------------------------------------------------------

### Highlights[​](#highlights-5 "Direct link to Highlights")

*   New role selectors that allow selecting elements by their [ARIA role](https://www.w3.org/TR/wai-aria-1.2/#roles), [ARIA attributes](https://www.w3.org/TR/wai-aria-1.2/#aria-attributes) and [accessible name](https://w3c.github.io/accname/#dfn-accessible-name).
    
        // Click a button with accessible name "log in"await page.locator('role=button[name="log in"]').click();
    
    Read more in [our documentation](/docs/locators#locate-by-role).
    
*   New `scale` option in [page.screenshot()](/docs/api/class-page#page-screenshot) for smaller sized screenshots.
    
*   New `caret` option in [page.screenshot()](/docs/api/class-page#page-screenshot) to control text caret. Defaults to `"hide"`.
    
*   New method `expect.poll` to wait for an arbitrary condition:
    
        // Poll the method until it returns an expected result.await expect.poll(async () => {  const response = await page.request.get('https://api.example.com');  return response.status();}).toBe(200);
    
    `expect.poll` supports most synchronous matchers, like `.toBe()`, `.toContain()`, etc. Read more in [our documentation](/docs/test-assertions#expectpoll).
    

### Behavior Changes[​](#behavior-changes-1 "Direct link to Behavior Changes")

*   ESM support when running TypeScript tests is now enabled by default. The `PLAYWRIGHT_EXPERIMENTAL_TS_ESM` env variable is no longer required.
*   The `mcr.microsoft.com/playwright` docker image no longer contains Python. Please use `mcr.microsoft.com/playwright/python` as a Playwright-ready docker image with pre-installed Python.
*   Playwright now supports large file uploads (100s of MBs) via [locator.setInputFiles()](/docs/api/class-locator#locator-set-input-files) API.

### Browser Versions[​](#browser-versions-33 "Direct link to Browser Versions")

*   Chromium 101.0.4951.26
*   Mozilla Firefox 98.0.2
*   WebKit 15.4

This version was also tested against the following stable channels:

*   Google Chrome 100
*   Microsoft Edge 100

Version 1.20[​](#version-120 "Direct link to Version 1.20")
-----------------------------------------------------------

### Highlights[​](#highlights-6 "Direct link to Highlights")

*   New options for methods [page.screenshot()](/docs/api/class-page#page-screenshot), [locator.screenshot()](/docs/api/class-locator#locator-screenshot) and [elementHandle.screenshot()](/docs/api/class-elementhandle#element-handle-screenshot):
    
    *   Option `animations: "disabled"` rewinds all CSS animations and transitions to a consistent state
    *   Option `mask: Locator[]` masks given elements, overlaying them with pink `#FF00FF` boxes.
*   `expect().toMatchSnapshot()` now supports anonymous snapshots: when snapshot name is missing, Playwright Test will generate one automatically:
    
        expect('Web is Awesome <3').toMatchSnapshot();
    
*   New `maxDiffPixels` and `maxDiffPixelRatio` options for fine-grained screenshot comparison using `expect().toMatchSnapshot()`:
    
        expect(await page.screenshot()).toMatchSnapshot({  maxDiffPixels: 27, // allow no more than 27 different pixels.});
    
    It is most convenient to specify `maxDiffPixels` or `maxDiffPixelRatio` once in [testConfig.expect](/docs/api/class-testconfig#test-config-expect).
    
*   Playwright Test now adds [testConfig.fullyParallel](/docs/api/class-testconfig#test-config-fully-parallel) mode. By default, Playwright Test parallelizes between files. In fully parallel mode, tests inside a single file are also run in parallel. You can also use `--fully-parallel` command line flag.
    
    playwright.config.ts
    
        export default {  fullyParallel: true,};
    
*   [testProject.grep](/docs/api/class-testproject#test-project-grep) and [testProject.grepInvert](/docs/api/class-testproject#test-project-grep-invert) are now configurable per project. For example, you can now configure smoke tests project using `grep`:
    
    playwright.config.ts
    
        export default {  projects: [    {      name: 'smoke tests',      grep: /@smoke/,    },  ],};
    
*   [Trace Viewer](/docs/trace-viewer) now shows [API testing requests](/docs/api-testing).
    
*   [locator.highlight()](/docs/api/class-locator#locator-highlight) visually reveals element(s) for easier debugging.
    

### Announcements[​](#announcements-2 "Direct link to Announcements")

*   We now ship a designated Python docker image `mcr.microsoft.com/playwright/python`. Please switch over to it if you use Python. This is the last release that includes Python inside our javascript `mcr.microsoft.com/playwright` docker image.
*   v1.20 is the last release to receive WebKit update for macOS 10.15 Catalina. Please update macOS to keep using latest & greatest WebKit!

### Browser Versions[​](#browser-versions-34 "Direct link to Browser Versions")

*   Chromium 101.0.4921.0
*   Mozilla Firefox 97.0.1
*   WebKit 15.4

This version was also tested against the following stable channels:

*   Google Chrome 99
*   Microsoft Edge 99

Version 1.19[​](#version-119 "Direct link to Version 1.19")
-----------------------------------------------------------

### Playwright Test Update[​](#playwright-test-update "Direct link to Playwright Test Update")

*   Playwright Test v1.19 now supports _soft assertions_. Failed soft assertions
    
    **do not** terminate test execution, but mark the test as failed.
    
        // Make a few checks that will not stop the test when failed...await expect.soft(page.locator('#status')).toHaveText('Success');await expect.soft(page.locator('#eta')).toHaveText('1 day');// ... and continue the test to check more things.await page.locator('#next-page').click();await expect.soft(page.locator('#title')).toHaveText('Make another order');
    
    Read more in [our documentation](/docs/test-assertions#soft-assertions)
    
*   You can now specify a **custom expect message** as a second argument to the `expect` and `expect.soft` functions, for example:
    
        await expect(page.locator('text=Name'), 'should be logged in').toBeVisible();
    
    The error would look like this:
    
            Error: should be logged in    Call log:      - expect.toBeVisible with timeout 5000ms      - waiting for "getByText('Name')"      2 |      3 | test('example test', async({ page }) => {    > 4 |   await expect(page.locator('text=Name'), 'should be logged in').toBeVisible();        |                                                                  ^      5 | });      6 |
    
    Read more in [our documentation](/docs/test-assertions#custom-expect-message)
    
*   By default, tests in a single file are run in order. If you have many independent tests in a single file, you can now run them in parallel with [test.describe.configure()](/docs/api/class-test#test-describe-configure).
    

### Other Updates[​](#other-updates "Direct link to Other Updates")

*   Locator now supports a `has` option that makes sure it contains another locator inside:
    
        await page.locator('article', {  has: page.locator('.highlight'),}).click();
    
    Read more in [locator documentation](/docs/api/class-locator#locator-locator)
    
*   New [locator.page()](/docs/api/class-locator#locator-page)
    
*   [page.screenshot()](/docs/api/class-page#page-screenshot) and [locator.screenshot()](/docs/api/class-locator#locator-screenshot) now automatically hide blinking caret
    
*   Playwright Codegen now generates locators and frame locators
    
*   New option `url` in [testConfig.webServer](/docs/api/class-testconfig#test-config-web-server) to ensure your web server is ready before running the tests
    
*   New [testInfo.errors](/docs/api/class-testinfo#test-info-errors) and [testResult.errors](/docs/api/class-testresult#test-result-errors) that contain all failed assertions and soft assertions.
    

### Potentially breaking change in Playwright Test Global Setup[​](#potentially-breaking-change-in-playwright-test-global-setup "Direct link to Potentially breaking change in Playwright Test Global Setup")

It is unlikely that this change will affect you, no action is required if your tests keep running as they did.

We've noticed that in rare cases, the set of tests to be executed was configured in the global setup by means of the environment variables. We also noticed some applications that were post processing the reporters' output in the global teardown. If you are doing one of the two, [learn more](https://github.com/microsoft/playwright/issues/12018)

### Browser Versions[​](#browser-versions-35 "Direct link to Browser Versions")

*   Chromium 100.0.4863.0
*   Mozilla Firefox 96.0.1
*   WebKit 15.4

This version was also tested against the following stable channels:

*   Google Chrome 98
*   Microsoft Edge 98

Version 1.18[​](#version-118 "Direct link to Version 1.18")
-----------------------------------------------------------

### Locator Improvements[​](#locator-improvements "Direct link to Locator Improvements")

*   [locator.dragTo()](/docs/api/class-locator#locator-drag-to)
    
*   [`expect(locator).toBeChecked({ checked })`](/docs/api/class-locatorassertions#locator-assertions-to-be-checked)
    
*   Each locator can now be optionally filtered by the text it contains:
    
        await page.locator('li', { hasText: 'my item' }).locator('button').click();
    
    Read more in [locator documentation](/docs/api/class-locator#locator-locator)
    

### Testing API improvements[​](#testing-api-improvements "Direct link to Testing API improvements")

*   [`expect(response).toBeOK()`](/docs/test-assertions)
*   [`testInfo.attach()`](/docs/api/class-testinfo#test-info-attach)
*   [`test.info()`](/docs/api/class-test#test-info)

### Improved TypeScript Support[​](#improved-typescript-support "Direct link to Improved TypeScript Support")

1.  Playwright Test now respects `tsconfig.json`'s [`baseUrl`](https://www.typescriptlang.org/tsconfig#baseUrl) and [`paths`](https://www.typescriptlang.org/tsconfig#paths), so you can use aliases
2.  There is a new environment variable `PW_EXPERIMENTAL_TS_ESM` that allows importing ESM modules in your TS code, without the need for the compile step. Don't forget the `.js` suffix when you are importing your esm modules. Run your tests as follows:

    npm i --save-dev @playwright/test@1.18.0-rc1PW_EXPERIMENTAL_TS_ESM=1 npx playwright test

### Create Playwright[​](#create-playwright "Direct link to Create Playwright")

The `npm init playwright` command is now generally available for your use:

    # Run from your project's root directorynpm init playwright@latest# Or create a new projectnpm init playwright@latest new-project

This will create a Playwright Test configuration file, optionally add examples, a GitHub Action workflow and a first test `example.spec.ts`.

### New APIs & changes[​](#new-apis--changes "Direct link to New APIs & changes")

*   new [`testCase.repeatEachIndex`](/docs/api/class-testcase#test-case-repeat-each-index) API
*   [`acceptDownloads`](/docs/api/class-browser#browser-new-context-option-accept-downloads) option now defaults to `true`

### Breaking change: custom config options[​](#breaking-change-custom-config-options "Direct link to Breaking change: custom config options")

Custom config options are a convenient way to parametrize projects with different values. Learn more in [this guide](/docs/test-parameterize#parameterized-projects).

Previously, any fixture introduced through [test.extend()](/docs/api/class-test#test-extend) could be overridden in the [testProject.use](/docs/api/class-testproject#test-project-use) config section. For example,

    // WRONG: THIS SNIPPET DOES NOT WORK SINCE v1.18.// fixtures.jsconst test = base.extend({  myParameter: 'default',});// playwright.config.jsmodule.exports = {  use: {    myParameter: 'value',  },};

The proper way to make a fixture parametrized in the config file is to specify `option: true` when defining the fixture. For example,

    // CORRECT: THIS SNIPPET WORKS SINCE v1.18.// fixtures.jsconst test = base.extend({  // Fixtures marked as "option: true" will get a value specified in the config,  // or fallback to the default value.  myParameter: ['default', { option: true }],});// playwright.config.jsmodule.exports = {  use: {    myParameter: 'value',  },};

### Browser Versions[​](#browser-versions-36 "Direct link to Browser Versions")

*   Chromium 99.0.4812.0
*   Mozilla Firefox 95.0
*   WebKit 15.4

This version was also tested against the following stable channels:

*   Google Chrome 97
*   Microsoft Edge 97

Version 1.17[​](#version-117 "Direct link to Version 1.17")
-----------------------------------------------------------

### Frame Locators[​](#frame-locators "Direct link to Frame Locators")

Playwright 1.17 introduces [frame locators](/docs/api/class-framelocator) - a locator to the iframe on the page. Frame locators capture the logic sufficient to retrieve the `iframe` and then locate elements in that iframe. Frame locators are strict by default, will wait for `iframe` to appear and can be used in Web-First assertions.

![Graphics](https://user-images.githubusercontent.com/746130/142082759-2170db38-370d-43ec-8d41-5f9941f57d83.png)

Frame locators can be created with either [page.frameLocator()](/docs/api/class-page#page-frame-locator) or [locator.frameLocator()](/docs/api/class-locator#locator-frame-locator) method.

    const locator = page.frameLocator('#my-iframe').locator('text=Submit');await locator.click();

Read more at [our documentation](/docs/api/class-framelocator).

### Trace Viewer Update[​](#trace-viewer-update "Direct link to Trace Viewer Update")

Playwright Trace Viewer is now **available online** at [https://trace.playwright.dev](https://trace.playwright.dev)! Just drag-and-drop your `trace.zip` file to inspect its contents.

> **NOTE**: trace files are not uploaded anywhere; [trace.playwright.dev](https://trace.playwright.dev) is a [progressive web application](https://web.dev/progressive-web-apps/) that processes traces locally.

*   Playwright Test traces now include sources by default (these could be turned off with tracing option)
*   Trace Viewer now shows test name
*   New trace metadata tab with browser details
*   Snapshots now have URL bar

![image](https://user-images.githubusercontent.com/746130/141877831-29e37cd1-e574-4bd9-aab5-b13a463bb4ae.png)

### HTML Report Update[​](#html-report-update "Direct link to HTML Report Update")

*   HTML report now supports dynamic filtering
*   Report is now a **single static HTML file** that could be sent by e-mail or as a slack attachment.

![image](https://user-images.githubusercontent.com/746130/141877402-e486643d-72c7-4db3-8844-ed2072c5d676.png)

### Ubuntu ARM64 support + more[​](#ubuntu-arm64-support--more "Direct link to Ubuntu ARM64 support + more")

*   Playwright now supports **Ubuntu 20.04 ARM64**. You can now run Playwright tests inside Docker on Apple M1 and on Raspberry Pi.
    
*   You can now use Playwright to install stable version of Edge on Linux:
    
        npx playwright install msedge
    

### New APIs[​](#new-apis-15 "Direct link to New APIs")

*   Tracing now supports a [`'title'`](/docs/api/class-tracing#tracing-start-option-title) option
*   Page navigations support a new [`'commit'`](/docs/api/class-page#page-goto) waiting option
*   HTML reporter got [new configuration options](/docs/test-reporters#html-reporter)
*   [`testConfig.snapshotDir` option](/docs/api/class-testconfig#test-config-snapshot-dir)
*   [`testInfo.parallelIndex`](/docs/api/class-testinfo#test-info-parallel-index)
*   [`testInfo.titlePath`](/docs/api/class-testinfo#test-info-title-path)
*   [`testOptions.trace`](/docs/api/class-testoptions#test-options-trace) has new options
*   [`expect.toMatchSnapshot`](/docs/api/class-genericassertions) supports subdirectories
*   [`reporter.printsToStdio()`](/docs/api/class-reporter#reporter-prints-to-stdio)

Version 1.16[​](#version-116 "Direct link to Version 1.16")
-----------------------------------------------------------

### 🎭 Playwright Test[​](#-playwright-test "Direct link to 🎭 Playwright Test")

#### API Testing[​](#api-testing "Direct link to API Testing")

Playwright 1.16 introduces new [API Testing](/docs/api/class-apirequestcontext) that lets you send requests to the server directly from Node.js! Now you can:

*   test your server API
*   prepare server side state before visiting the web application in a test
*   validate server side post-conditions after running some actions in the browser

To do a request on behalf of Playwright's Page, use **new [page.request](/docs/api/class-page#page-request) API**:

    import { test, expect } from '@playwright/test';test('context fetch', async ({ page }) => {  // Do a GET request on behalf of page  const response = await page.request.get('http://example.com/foo.json');  // ...});

To do a stand-alone request from node.js to an API endpoint, use **new [`request` fixture](/docs/api/class-fixtures#fixtures-request)**:

    import { test, expect } from '@playwright/test';test('context fetch', async ({ request }) => {  // Do a GET request on behalf of page  const response = await request.get('http://example.com/foo.json');  // ...});

Read more about it in our [API testing guide](/docs/api-testing).

#### Response Interception[​](#response-interception "Direct link to Response Interception")

It is now possible to do response interception by combining [API Testing](/docs/api-testing) with [request interception](/docs/network#modify-requests).

For example, we can blur all the images on the page:

    import { test, expect } from '@playwright/test';import jimp from 'jimp'; // image processing librarytest('response interception', async ({ page }) => {  await page.route('**/*.jpeg', async route => {    const response = await page._request.fetch(route.request());    const image = await jimp.read(await response.body());    await image.blur(5);    await route.fulfill({      response,      body: await image.getBufferAsync('image/jpeg'),    });  });  const response = await page.goto('https://playwright.dev');  expect(response.status()).toBe(200);});

Read more about [response interception](/docs/network#modify-responses).

#### New HTML reporter[​](#new-html-reporter "Direct link to New HTML reporter")

Try it out new HTML reporter with either `--reporter=html` or a `reporter` entry in `playwright.config.ts` file:

    $ npx playwright test --reporter=html

The HTML reporter has all the information about tests and their failures, including surfacing trace and image artifacts.

![html reporter](https://user-images.githubusercontent.com/746130/138324311-94e68b39-b51a-4776-a446-f60037a77f32.png)

Read more about [our reporters](/docs/test-reporters#html-reporter).

### 🎭 Playwright Library[​](#-playwright-library "Direct link to 🎭 Playwright Library")

#### locator.waitFor[​](#locatorwaitfor "Direct link to locator.waitFor")

Wait for a locator to resolve to a single element with a given state. Defaults to the `state: 'visible'`.

Comes especially handy when working with lists:

    import { test, expect } from '@playwright/test';test('context fetch', async ({ page }) => {  const completeness = page.locator('text=Success');  await completeness.waitFor();  expect(await page.screenshot()).toMatchSnapshot('screen.png');});

Read more about [locator.waitFor()](/docs/api/class-locator#locator-wait-for).

### Docker support for Arm64[​](#docker-support-for-arm64 "Direct link to Docker support for Arm64")

Playwright Docker image is now published for Arm64 so it can be used on Apple Silicon.

Read more about [Docker integration](/docs/docker).

### 🎭 Playwright Trace Viewer[​](#-playwright-trace-viewer "Direct link to 🎭 Playwright Trace Viewer")

*   web-first assertions inside trace viewer
*   run trace viewer with `npx playwright show-trace` and drop trace files to the trace viewer PWA
*   API testing is integrated with trace viewer
*   better visual attribution of action targets

Read more about [Trace Viewer](/docs/trace-viewer).

### Browser Versions[​](#browser-versions-37 "Direct link to Browser Versions")

*   Chromium 97.0.4666.0
*   Mozilla Firefox 93.0
*   WebKit 15.4

This version of Playwright was also tested against the following stable channels:

*   Google Chrome 94
*   Microsoft Edge 94

Version 1.15[​](#version-115 "Direct link to Version 1.15")
-----------------------------------------------------------

### 🎭 Playwright Library[​](#-playwright-library-1 "Direct link to 🎭 Playwright Library")

#### 🖱️ Mouse Wheel[​](#️-mouse-wheel "Direct link to 🖱️ Mouse Wheel")

By using [mouse.wheel()](/docs/api/class-mouse#mouse-wheel) you are now able to scroll vertically or horizontally.

#### 📜 New Headers API[​](#-new-headers-api "Direct link to 📜 New Headers API")

Previously it was not possible to get multiple header values of a response. This is now possible and additional helper functions are available:

*   [request.allHeaders()](/docs/api/class-request#request-all-headers)
*   [request.headersArray()](/docs/api/class-request#request-headers-array)
*   [request.headerValue()](/docs/api/class-request#request-header-value)
*   [response.allHeaders()](/docs/api/class-response#response-all-headers)
*   [response.headersArray()](/docs/api/class-response#response-headers-array)
*   [response.headerValue()](/docs/api/class-response#response-header-value)
*   [response.headerValues()](/docs/api/class-response#response-header-values)

#### 🌈 Forced-Colors emulation[​](#-forced-colors-emulation "Direct link to 🌈 Forced-Colors emulation")

Its now possible to emulate the `forced-colors` CSS media feature by passing it in the [browser.newContext()](/docs/api/class-browser#browser-new-context) or calling [page.emulateMedia()](/docs/api/class-page#page-emulate-media).

#### New APIs[​](#new-apis-16 "Direct link to New APIs")

*   [page.route()](/docs/api/class-page#page-route) accepts new `times` option to specify how many times this route should be matched.
*   [page.setChecked()](/docs/api/class-page#page-set-checked) and [locator.setChecked()](/docs/api/class-locator#locator-set-checked) were introduced to set the checked state of a checkbox.
*   [request.sizes()](/docs/api/class-request#request-sizes) Returns resource size information for given http request.
*   [tracing.startChunk()](/docs/api/class-tracing#tracing-start-chunk) - Start a new trace chunk.
*   [tracing.stopChunk()](/docs/api/class-tracing#tracing-stop-chunk) - Stops a new trace chunk.

### 🎭 Playwright Test[​](#-playwright-test-1 "Direct link to 🎭 Playwright Test")

#### 🤝 `test.parallel()` run tests in the same file in parallel[​](#-testparallel-run-tests-in-the-same-file-in-parallel "Direct link to -testparallel-run-tests-in-the-same-file-in-parallel")

    test.describe.parallel('group', () => {  test('runs in parallel 1', async ({ page }) => {  });  test('runs in parallel 2', async ({ page }) => {  });});

By default, tests in a single file are run in order. If you have many independent tests in a single file, you can now run them in parallel with [test.describe.parallel(title, callback)](/docs/api/class-test#test-describe-parallel).

#### 🛠 Add `--debug` CLI flag[​](#-add---debug-cli-flag "Direct link to -add---debug-cli-flag")

By using `npx playwright test --debug` it will enable the [Playwright Inspector](/docs/debug#playwright-inspector) for you to debug your tests.

### Browser Versions[​](#browser-versions-38 "Direct link to Browser Versions")

*   Chromium 96.0.4641.0
*   Mozilla Firefox 92.0
*   WebKit 15.0

Version 1.14[​](#version-114 "Direct link to Version 1.14")
-----------------------------------------------------------

### 🎭 Playwright Library[​](#-playwright-library-2 "Direct link to 🎭 Playwright Library")

#### ⚡️ New "strict" mode[​](#️-new-strict-mode "Direct link to ⚡️ New \"strict\" mode")

Selector ambiguity is a common problem in automation testing. **"strict" mode** ensures that your selector points to a single element and throws otherwise.

Pass `strict: true` into your action calls to opt in.

    // This will throw if you have more than one button!await page.click('button', { strict: true });

#### 📍 New [**Locators API**](/docs/api/class-locator)[​](#-new-locators-api "Direct link to -new-locators-api")

Locator represents a view to the element(s) on the page. It captures the logic sufficient to retrieve the element at any given moment.

The difference between the [Locator](/docs/api/class-locator) and [ElementHandle](/docs/api/class-elementhandle) is that the latter points to a particular element, while [Locator](/docs/api/class-locator) captures the logic of how to retrieve that element.

Also, locators are **"strict" by default**!

    const locator = page.locator('button');await locator.click();

Learn more in the [documentation](/docs/api/class-locator).

#### 🧩 Experimental [**React**](/docs/other-locators#react-locator) and [**Vue**](/docs/other-locators#vue-locator) selector engines[​](#-experimental-react-and-vue-selector-engines "Direct link to -experimental-react-and-vue-selector-engines")

React and Vue selectors allow selecting elements by its component name and/or property values. The syntax is very similar to [attribute selectors](https://developer.mozilla.org/en-US/docs/Web/CSS/Attribute_selectors) and supports all attribute selector operators.

    await page.locator('_react=SubmitButton[enabled=true]').click();await page.locator('_vue=submit-button[enabled=true]').click();

Learn more in the [react selectors documentation](/docs/other-locators#react-locator) and the [vue selectors documentation](/docs/other-locators#vue-locator).

#### ✨ New [**`nth`**](/docs/other-locators#n-th-element-locator) and [**`visible`**](/docs/other-locators#css-matching-only-visible-elements) selector engines[​](#-new-nth-and-visible-selector-engines "Direct link to -new-nth-and-visible-selector-engines")

*   [`nth`](/docs/other-locators#n-th-element-locator) selector engine is equivalent to the `:nth-match` pseudo class, but could be combined with other selector engines.
*   [`visible`](/docs/other-locators#css-matching-only-visible-elements) selector engine is equivalent to the `:visible` pseudo class, but could be combined with other selector engines.

    // select the first button among all buttonsawait button.click('button >> nth=0');// or if you are using locators, you can use first(), nth() and last()await page.locator('button').first().click();// click a visible buttonawait button.click('button >> visible=true');

### 🎭 Playwright Test[​](#-playwright-test-2 "Direct link to 🎭 Playwright Test")

#### ✅ Web-First Assertions[​](#-web-first-assertions "Direct link to ✅ Web-First Assertions")

`expect` now supports lots of new web-first assertions.

Consider the following example:

    await expect(page.locator('.status')).toHaveText('Submitted');

Playwright Test will be re-testing the node with the selector `.status` until fetched Node has the `"Submitted"` text. It will be re-fetching the node and checking it over and over, until the condition is met or until the timeout is reached. You can either pass this timeout or configure it once via the [`testProject.expect`](/docs/api/class-testproject#test-project-expect) value in test config.

By default, the timeout for assertions is not set, so it'll wait forever, until the whole test times out.

List of all new assertions:

*   [`expect(locator).toBeChecked()`](/docs/api/class-locatorassertions#locator-assertions-to-be-checked)
*   [`expect(locator).toBeDisabled()`](/docs/api/class-locatorassertions#locator-assertions-to-be-disabled)
*   [`expect(locator).toBeEditable()`](/docs/api/class-locatorassertions#locator-assertions-to-be-editable)
*   [`expect(locator).toBeEmpty()`](/docs/api/class-locatorassertions#locator-assertions-to-be-empty)
*   [`expect(locator).toBeEnabled()`](/docs/api/class-locatorassertions#locator-assertions-to-be-enabled)
*   [`expect(locator).toBeFocused()`](/docs/api/class-locatorassertions#locator-assertions-to-be-focused)
*   [`expect(locator).toBeHidden()`](/docs/api/class-locatorassertions#locator-assertions-to-be-hidden)
*   [`expect(locator).toBeVisible()`](/docs/api/class-locatorassertions#locator-assertions-to-be-visible)
*   [`expect(locator).toContainText(text, options?)`](/docs/api/class-locatorassertions#locator-assertions-to-contain-text)
*   [`expect(locator).toHaveAttribute(name, value)`](/docs/api/class-locatorassertions#locator-assertions-to-have-attribute)
*   [`expect(locator).toHaveClass(expected)`](/docs/api/class-locatorassertions#locator-assertions-to-have-class)
*   [`expect(locator).toHaveCount(count)`](/docs/api/class-locatorassertions#locator-assertions-to-have-count)
*   [`expect(locator).toHaveCSS(name, value)`](/docs/api/class-locatorassertions#locator-assertions-to-have-css)
*   [`expect(locator).toHaveId(id)`](/docs/api/class-locatorassertions#locator-assertions-to-have-id)
*   [`expect(locator).toHaveJSProperty(name, value)`](/docs/api/class-locatorassertions#locator-assertions-to-have-js-property)
*   [`expect(locator).toHaveText(expected, options)`](/docs/api/class-locatorassertions#locator-assertions-to-have-text)
*   [`expect(page).toHaveTitle(title)`](/docs/api/class-pageassertions#page-assertions-to-have-title)
*   [`expect(page).toHaveURL(url)`](/docs/api/class-pageassertions#page-assertions-to-have-url)
*   [`expect(locator).toHaveValue(value)`](/docs/api/class-locatorassertions#locator-assertions-to-have-value)

#### ⛓ Serial mode with [`describe.serial`](/docs/api/class-test#test-describe-serial)[​](#-serial-mode-with-describeserial "Direct link to -serial-mode-with-describeserial")

Declares a group of tests that should always be run serially. If one of the tests fails, all subsequent tests are skipped. All tests in a group are retried together.

    test.describe.serial('group', () => {  test('runs first', async ({ page }) => { /* ... */ });  test('runs second', async ({ page }) => { /* ... */ });});

Learn more in the [documentation](/docs/api/class-test#test-describe-serial).

#### 🐾 Steps API with [`test.step`](/docs/api/class-test#test-step)[​](#-steps-api-with-teststep "Direct link to -steps-api-with-teststep")

Split long tests into multiple steps using `test.step()` API:

    import { test, expect } from '@playwright/test';test('test', async ({ page }) => {  await test.step('Log in', async () => {    // ...  });  await test.step('news feed', async () => {    // ...  });});

Step information is exposed in reporters API.

#### 🌎 Launch web server before running tests[​](#-launch-web-server-before-running-tests "Direct link to 🌎 Launch web server before running tests")

To launch a server during the tests, use the [`webServer`](/docs/test-webserver) option in the configuration file. The server will wait for a given url to be available before running the tests, and the url will be passed over to Playwright as a [`baseURL`](/docs/api/class-testoptions#test-options-base-url) when creating a context.

playwright.config.ts

    import { defineConfig } from '@playwright/test';export default defineConfig({  webServer: {    command: 'npm run start', // command to launch    url: 'http://127.0.0.1:3000', // url to await for    timeout: 120 * 1000,    reuseExistingServer: !process.env.CI,  },});

Learn more in the [documentation](/docs/test-webserver).

### Browser Versions[​](#browser-versions-39 "Direct link to Browser Versions")

*   Chromium 94.0.4595.0
*   Mozilla Firefox 91.0
*   WebKit 15.0

Version 1.13[​](#version-113 "Direct link to Version 1.13")
-----------------------------------------------------------

#### Playwright Test[​](#playwright-test "Direct link to Playwright Test")

*   **⚡️ Introducing [Reporter API](https://github.com/microsoft/playwright/blob/65a9037461ffc15d70cdc2055832a0c5512b227c/packages/playwright-test/types/testReporter.d.ts)** which is already used to create an [Allure Playwright reporter](https://github.com/allure-framework/allure-js/pull/297).
*   **⛺️ New [`baseURL` fixture](/docs/test-configuration#basic-configuration)** to support relative paths in tests.

#### Playwright[​](#playwright "Direct link to Playwright")

*   **🖖 Programmatic drag-and-drop support** via the [page.dragAndDrop()](/docs/api/class-page#page-drag-and-drop) API.
*   **🔎 Enhanced HAR** with body sizes for requests and responses. Use via `recordHar` option in [browser.newContext()](/docs/api/class-browser#browser-new-context).

#### Tools[​](#tools "Direct link to Tools")

*   Playwright Trace Viewer now shows parameters, returned values and `console.log()` calls.
*   Playwright Inspector can generate Playwright Test tests.

#### New and Overhauled Guides[​](#new-and-overhauled-guides "Direct link to New and Overhauled Guides")

*   [Intro](/docs/intro)
*   [Authentication](/docs/auth)
*   [Chrome Extensions](/docs/chrome-extensions)
*   [Playwright Test Annotations](/docs/test-annotations)
*   [Playwright Test Configuration](/docs/test-configuration)
*   [Playwright Test Fixtures](/docs/test-fixtures)

#### Browser Versions[​](#browser-versions-40 "Direct link to Browser Versions")

*   Chromium 93.0.4576.0
*   Mozilla Firefox 90.0
*   WebKit 14.2

#### New Playwright APIs[​](#new-playwright-apis "Direct link to New Playwright APIs")

*   new `baseURL` option in [browser.newContext()](/docs/api/class-browser#browser-new-context) and [browser.newPage()](/docs/api/class-browser#browser-new-page)
*   [response.securityDetails()](/docs/api/class-response#response-security-details) and [response.serverAddr()](/docs/api/class-response#response-server-addr)
*   [page.dragAndDrop()](/docs/api/class-page#page-drag-and-drop) and [frame.dragAndDrop()](/docs/api/class-frame#frame-drag-and-drop)
*   [download.cancel()](/docs/api/class-download#download-cancel)
*   [page.inputValue()](/docs/api/class-page#page-input-value), [frame.inputValue()](/docs/api/class-frame#frame-input-value) and [elementHandle.inputValue()](/docs/api/class-elementhandle#element-handle-input-value)
*   new `force` option in [page.fill()](/docs/api/class-page#page-fill), [frame.fill()](/docs/api/class-frame#frame-fill), and [elementHandle.fill()](/docs/api/class-elementhandle#element-handle-fill)
*   new `force` option in [page.selectOption()](/docs/api/class-page#page-select-option), [frame.selectOption()](/docs/api/class-frame#frame-select-option), and [elementHandle.selectOption()](/docs/api/class-elementhandle#element-handle-select-option)

Version 1.12[​](#version-112 "Direct link to Version 1.12")
-----------------------------------------------------------

#### ⚡️ Introducing Playwright Test[​](#️-introducing-playwright-test "Direct link to ⚡️ Introducing Playwright Test")

[Playwright Test](/docs/intro) is a **new test runner** built from scratch by Playwright team specifically to accommodate end-to-end testing needs:

*   Run tests across all browsers.
*   Execute tests in parallel.
*   Enjoy context isolation and sensible defaults out of the box.
*   Capture videos, screenshots and other artifacts on failure.
*   Integrate your POMs as extensible fixtures.

Installation:

    npm i -D @playwright/test

Simple test `tests/foo.spec.ts`:

    import { test, expect } from '@playwright/test';test('basic test', async ({ page }) => {  await page.goto('https://playwright.dev/');  const name = await page.innerText('.navbar__title');  expect(name).toBe('Playwright');});

Running:

    npx playwright test

👉 Read more in [Playwright Test documentation](/docs/intro).

#### 🧟‍♂️ Introducing Playwright Trace Viewer[​](#️-introducing-playwright-trace-viewer "Direct link to 🧟‍♂️ Introducing Playwright Trace Viewer")

[Playwright Trace Viewer](/docs/trace-viewer) is a new GUI tool that helps exploring recorded Playwright traces after the script ran. Playwright traces let you examine:

*   page DOM before and after each Playwright action
*   page rendering before and after each Playwright action
*   browser network during script execution

Traces are recorded using the new [browserContext.tracing](/docs/api/class-browsercontext#browser-context-tracing) API:

    const browser = await chromium.launch();const context = await browser.newContext();// Start tracing before creating / navigating a page.await context.tracing.start({ screenshots: true, snapshots: true });const page = await context.newPage();await page.goto('https://playwright.dev');// Stop tracing and export it into a zip archive.await context.tracing.stop({ path: 'trace.zip' });

Traces are examined later with the Playwright CLI:

    npx playwright show-trace trace.zip

That will open the following GUI:

![image](https://user-images.githubusercontent.com/746130/121109654-d66c4480-c7c0-11eb-8d4d-eb70d2b03811.png)

👉 Read more in [trace viewer documentation](/docs/trace-viewer).

#### Browser Versions[​](#browser-versions-41 "Direct link to Browser Versions")

*   Chromium 93.0.4530.0
*   Mozilla Firefox 89.0
*   WebKit 14.2

This version of Playwright was also tested against the following stable channels:

*   Google Chrome 91
*   Microsoft Edge 91

#### New APIs[​](#new-apis-17 "Direct link to New APIs")

*   `reducedMotion` option in [page.emulateMedia()](/docs/api/class-page#page-emulate-media), [browserType.launchPersistentContext()](/docs/api/class-browsertype#browser-type-launch-persistent-context), [browser.newContext()](/docs/api/class-browser#browser-new-context) and [browser.newPage()](/docs/api/class-browser#browser-new-page)
*   [browserContext.on('request')](/docs/api/class-browsercontext#browser-context-event-request)
*   [browserContext.on('requestfailed')](/docs/api/class-browsercontext#browser-context-event-request-failed)
*   [browserContext.on('requestfinished')](/docs/api/class-browsercontext#browser-context-event-request-finished)
*   [browserContext.on('response')](/docs/api/class-browsercontext#browser-context-event-response)
*   `tracesDir` option in [browserType.launch()](/docs/api/class-browsertype#browser-type-launch) and [browserType.launchPersistentContext()](/docs/api/class-browsertype#browser-type-launch-persistent-context)
*   new [browserContext.tracing](/docs/api/class-browsercontext#browser-context-tracing) API namespace
*   new [download.page()](/docs/api/class-download#download-page) method

Version 1.11[​](#version-111 "Direct link to Version 1.11")
-----------------------------------------------------------

🎥 New video: [Playwright: A New Test Automation Framework for the Modern Web](https://youtu.be/_Jla6DyuEu4) ([slides](https://docs.google.com/presentation/d/1xFhZIJrdHkVe2CuMKOrni92HoG2SWslo0DhJJQMR1DI/edit?usp=sharing))

*   We talked about Playwright
*   Showed engineering work behind the scenes
*   Did live demos with new features ✨
*   **Special thanks** to [applitools](http://applitools.com/) for hosting the event and inviting us!

#### Browser Versions[​](#browser-versions-42 "Direct link to Browser Versions")

*   Chromium 92.0.4498.0
*   Mozilla Firefox 89.0b6
*   WebKit 14.2

#### New APIs[​](#new-apis-18 "Direct link to New APIs")

*   support for **async predicates** across the API in methods such as [page.waitForRequest()](/docs/api/class-page#page-wait-for-request) and others
*   new **emulation devices**: Galaxy S8, Galaxy S9+, Galaxy Tab S4, Pixel 3, Pixel 4
*   new methods:
    *   [page.waitForURL()](/docs/api/class-page#page-wait-for-url) to await navigations to URL
    *   [video.delete()](/docs/api/class-video#video-delete) and [video.saveAs()](/docs/api/class-video#video-save-as) to manage screen recording
*   new options:
    *   `screen` option in the [browser.newContext()](/docs/api/class-browser#browser-new-context) method to emulate `window.screen` dimensions
    *   `position` option in [page.check()](/docs/api/class-page#page-check) and [page.uncheck()](/docs/api/class-page#page-uncheck) methods
    *   `trial` option to dry-run actions in [page.check()](/docs/api/class-page#page-check), [page.uncheck()](/docs/api/class-page#page-uncheck), [page.click()](/docs/api/class-page#page-click), [page.dblclick()](/docs/api/class-page#page-dblclick), [page.hover()](/docs/api/class-page#page-hover) and [page.tap()](/docs/api/class-page#page-tap)

Version 1.10[​](#version-110 "Direct link to Version 1.10")
-----------------------------------------------------------

*   [Playwright for Java v1.10](https://github.com/microsoft/playwright-java) is **now stable**!
*   Run Playwright against **Google Chrome** and **Microsoft Edge** stable channels with the [new channels API](/docs/browsers).
*   Chromium screenshots are **fast** on Mac & Windows.

#### Bundled Browser Versions[​](#bundled-browser-versions "Direct link to Bundled Browser Versions")

*   Chromium 90.0.4430.0
*   Mozilla Firefox 87.0b10
*   WebKit 14.2

This version of Playwright was also tested against the following stable channels:

*   Google Chrome 89
*   Microsoft Edge 89

#### New APIs[​](#new-apis-19 "Direct link to New APIs")

*   [browserType.launch()](/docs/api/class-browsertype#browser-type-launch) now accepts the new `'channel'` option. Read more in [our documentation](/docs/browsers).

Version 1.9[​](#version-19 "Direct link to Version 1.9")
--------------------------------------------------------

*   [Playwright Inspector](/docs/debug) is a **new GUI tool** to author and debug your tests.
    *   **Line-by-line debugging** of your Playwright scripts, with play, pause and step-through.
    *   Author new scripts by **recording user actions**.
    *   **Generate element selectors** for your script by hovering over elements.
    *   Set the `PWDEBUG=1` environment variable to launch the Inspector
*   **Pause script execution** with [page.pause()](/docs/api/class-page#page-pause) in headed mode. Pausing the page launches [Playwright Inspector](/docs/debug) for debugging.
*   **New has-text pseudo-class** for CSS selectors. `:has-text("example")` matches any element containing `"example"` somewhere inside, possibly in a child or a descendant element. See [more examples](/docs/other-locators#css-matching-by-text).
*   **Page dialogs are now auto-dismissed** during execution, unless a listener for `dialog` event is configured. [Learn more](/docs/dialogs) about this.
*   [Playwright for Python](https://github.com/microsoft/playwright-python) is **now stable** with an idiomatic snake case API and pre-built [Docker image](/docs/docker) to run tests in CI/CD.

#### Browser Versions[​](#browser-versions-43 "Direct link to Browser Versions")

*   Chromium 90.0.4421.0
*   Mozilla Firefox 86.0b10
*   WebKit 14.1

#### New APIs[​](#new-apis-20 "Direct link to New APIs")

*   [page.pause()](/docs/api/class-page#page-pause).

Version 1.8[​](#version-18 "Direct link to Version 1.8")
--------------------------------------------------------

*   [Selecting elements based on layout](/docs/other-locators#css-matching-elements-based-on-layout) with `:left-of()`, `:right-of()`, `:above()` and `:below()`.
    
*   Playwright now includes [command line interface](/docs/test-cli), former playwright-cli.
    
        npx playwright --help
    
*   [page.selectOption()](/docs/api/class-page#page-select-option) now waits for the options to be present.
    
*   New methods to [assert element state](/docs/actionability#assertions) like [page.isEditable()](/docs/api/class-page#page-is-editable).
    

#### New APIs[​](#new-apis-21 "Direct link to New APIs")

*   [elementHandle.isChecked()](/docs/api/class-elementhandle#element-handle-is-checked).
*   [elementHandle.isDisabled()](/docs/api/class-elementhandle#element-handle-is-disabled).
*   [elementHandle.isEditable()](/docs/api/class-elementhandle#element-handle-is-editable).
*   [elementHandle.isEnabled()](/docs/api/class-elementhandle#element-handle-is-enabled).
*   [elementHandle.isHidden()](/docs/api/class-elementhandle#element-handle-is-hidden).
*   [elementHandle.isVisible()](/docs/api/class-elementhandle#element-handle-is-visible).
*   [page.isChecked()](/docs/api/class-page#page-is-checked).
*   [page.isDisabled()](/docs/api/class-page#page-is-disabled).
*   [page.isEditable()](/docs/api/class-page#page-is-editable).
*   [page.isEnabled()](/docs/api/class-page#page-is-enabled).
*   [page.isHidden()](/docs/api/class-page#page-is-hidden).
*   [page.isVisible()](/docs/api/class-page#page-is-visible).
*   New option `'editable'` in [elementHandle.waitForElementState()](/docs/api/class-elementhandle#element-handle-wait-for-element-state).

#### Browser Versions[​](#browser-versions-44 "Direct link to Browser Versions")

*   Chromium 90.0.4392.0
*   Mozilla Firefox 85.0b5
*   WebKit 14.1

Version 1.7[​](#version-17 "Direct link to Version 1.7")
--------------------------------------------------------

*   **New Java SDK**: [Playwright for Java](https://github.com/microsoft/playwright-java) is now on par with [JavaScript](https://github.com/microsoft/playwright), [Python](https://github.com/microsoft/playwright-python) and [.NET bindings](https://github.com/microsoft/playwright-dotnet).
*   **Browser storage API**: New convenience APIs to save and load browser storage state (cookies, local storage) to simplify automation scenarios with authentication.
*   **New CSS selectors**: We heard your feedback for more flexible selectors and have revamped the selectors implementation. Playwright 1.7 introduces [new CSS extensions](/docs/other-locators#css-locator) and there's more coming soon.
*   **New website**: The docs website at [playwright.dev](https://playwright.dev/) has been updated and is now built with [Docusaurus](https://v2.docusaurus.io/).
*   **Support for Apple Silicon**: Playwright browser binaries for WebKit and Chromium are now built for Apple Silicon.

#### New APIs[​](#new-apis-22 "Direct link to New APIs")

*   [browserContext.storageState()](/docs/api/class-browsercontext#browser-context-storage-state) to get current state for later reuse.
*   `storageState` option in [browser.newContext()](/docs/api/class-browser#browser-new-context) and [browser.newPage()](/docs/api/class-browser#browser-new-page) to setup browser context state.

#### Browser Versions[​](#browser-versions-45 "Direct link to Browser Versions")

*   Chromium 89.0.4344.0
*   Mozilla Firefox 84.0b9
*   WebKit 14.1

# Canary releases

Canary releases
===============

Introduction[​](#introduction "Direct link to Introduction")
------------------------------------------------------------

Playwright for Node.js has a canary releases system.

It permits you to **test new unreleased features** instead of waiting for a full release. They get released daily on the `next` NPM tag of Playwright.

It is a good way to **give feedback to maintainers**, ensuring the newly implemented feature works as intended.

note

Using a canary release in production might seem risky, but in practice, it's not.

A canary release passes all automated tests and is used to test e.g. the HTML report, Trace Viewer, or Playwright Inspector with end-to-end tests.

Next npm Dist Tag[​](#next-npm-dist-tag "Direct link to Next npm Dist Tag")
---------------------------------------------------------------------------

For any code-related commit on `main`, the continuous integration will publish a daily canary release under the `@next` npm dist tag.

You can see on [npm](https://www.npmjs.com/package/@playwright/test?activeTab=versions) the current dist tags:

*   `latest`: stable releases
*   `next`: next releases, published daily
*   `beta`: after a release-branch was cut, usually a week before a stable release each commit gets published under this tag

Using a Canary Release[​](#using-a-canary-release "Direct link to Using a Canary Release")
------------------------------------------------------------------------------------------

    npm install -D @playwright/test@next

Documentation[​](#documentation "Direct link to Documentation")
---------------------------------------------------------------

The stable and the `next` documentation is published on [playwright.dev](https://playwright.dev). To see the `next` documentation, press Shift on the keyboard `5` times.

# Supported languages

Supported languages
===================

Introduction[​](#introduction "Direct link to Introduction")
------------------------------------------------------------

Playwright is available in multiple languages that share the same underlying implementation. All core features for automating the browser are supported in all languages, while testing ecosystem integration is different. Pick the language based on your experience, familiarity with its testing ecosystem and your project constraints. For the best experience pick the test runner that we recommend for each language.

JavaScript and TypeScript[​](#javascript-and-typescript "Direct link to JavaScript and TypeScript")
---------------------------------------------------------------------------------------------------

Playwright for Node.js comes with its own [test runner](https://playwright.dev/docs/running-tests) that provides great parallelization mechanism, screenshot assertions, html reporter, automatic tracing etc.

*   [Documentation](https://playwright.dev/docs/intro)
*   [GitHub repo](https://github.com/microsoft/playwright)

Python[​](#python "Direct link to Python")
------------------------------------------

Playwright [Pytest plugin](https://playwright.dev/python/docs/test-runners) is the recommended way to run end-to-end tests. It provides context isolation, running it on multiple browser configurations and more out of the box.

*   [Documentation](https://playwright.dev/python/docs/intro)
*   [GitHub repo](https://github.com/microsoft/playwright-python)

Java[​](#java "Direct link to Java")
------------------------------------

You can choose any testing framework such as JUnit or TestNG based on your project requirements.

*   [Documentation](https://playwright.dev/java/docs/intro)
*   [GitHub repo](https://github.com/microsoft/playwright-java)

.NET[​](#net "Direct link to .NET")
-----------------------------------

Playwright for .NET comes with MSTest, NUnit, xUnit, and xUnit v3 [base classes](https://playwright.dev/dotnet/docs/test-runners) for writing end-to-end tests.

*   [Documentation](https://playwright.dev/dotnet/docs/intro)
*   [GitHub repo](https://github.com/microsoft/playwright-dotnet)

# Installation

Installation
============

Introduction[​](#introduction "Direct link to Introduction")
------------------------------------------------------------

Playwright Test is an end-to-end test framework for modern web apps. It bundles test runner, assertions, isolation, parallelization and rich tooling. Playwright supports Chromium, WebKit and Firefox on Windows, Linux and macOS, locally or in CI, headless or headed, with native mobile emulation for Chrome (Android) and Mobile Safari.

**You will learn**

*   [How to install Playwright](/docs/intro#installing-playwright)
*   [What's installed](/docs/intro#whats-installed)
*   [How to run the example test](/docs/intro#running-the-example-test)
*   [How to open the HTML test report](/docs/intro#html-test-reports)

Installing Playwright[​](#installing-playwright "Direct link to Installing Playwright")
---------------------------------------------------------------------------------------

Get started by installing Playwright using one of the following methods.

### Using npm, yarn or pnpm[​](#using-npm-yarn-or-pnpm "Direct link to Using npm, yarn or pnpm")

The command below either initializes a new project or adds Playwright to an existing one.

*   npm
*   yarn
*   pnpm

    npm init playwright@latest

    yarn create playwright

    pnpm create playwright

When prompted, choose / confirm:

*   TypeScript or JavaScript (default: TypeScript)
*   Tests folder name (default: `tests`, or `e2e` if `tests` already exists)
*   Add a GitHub Actions workflow (recommended for CI)
*   Install Playwright browsers (default: yes)

You can re-run the command later; it does not overwrite existing tests.

### Using the VS Code Extension[​](#using-the-vs-code-extension "Direct link to Using the VS Code Extension")

You can also create and run tests with the [VS Code Extension](/docs/getting-started-vscode).

What's Installed[​](#whats-installed "Direct link to What's Installed")
-----------------------------------------------------------------------

Playwright downloads required browser binaries and creates the scaffold below.

    playwright.config.ts         # Test configurationpackage.jsonpackage-lock.json            # Or yarn.lock / pnpm-lock.yamltests/  example.spec.ts            # Minimal example test

The [playwright.config](/docs/test-configuration) centralizes configuration: target browsers, timeouts, retries, projects, reporters and more. In existing projects dependencies are added to your current `package.json`.

`tests/` contains a minimal starter test.

Running the Example Test[​](#running-the-example-test "Direct link to Running the Example Test")
------------------------------------------------------------------------------------------------

By default tests run headless in parallel across Chromium, Firefox and WebKit (configurable in [playwright.config](/docs/test-configuration)). Output and aggregated results display in the terminal.

*   npm
*   yarn
*   pnpm

    npx playwright test

    yarn playwright test

    pnpm exec playwright test

![tests running in command line](/assets/images/run-tests-cli-6e7e3119a14239c9021b406d7109dc44.png)

Tips:

*   See the browser window: add `--headed`.
*   Run a single project/browser: `--project=chromium`.
*   Run one file: `npx playwright test tests/example.spec.ts`.
*   Open testing UI: `--ui`.

See [Running Tests](/docs/running-tests) for details on filtering, headed mode, sharding and retries.

HTML Test Reports[​](#html-test-reports "Direct link to HTML Test Reports")
---------------------------------------------------------------------------

After a test run, the [HTML Reporter](/docs/test-reporters#html-reporter) provides a dashboard filterable by the browser, passed, failed, skipped, flaky and more. Click a test to inspect errors, attachments and steps. It auto-opens only when failures occur; open manually with the command below.

*   npm
*   yarn
*   pnpm

    npx playwright show-report

    yarn playwright show-report

    pnpm exec playwright show-report

![HTML Report](/assets/images/html-report-basic-8a88e44830660bfd1da1d17a7241f035.png)

Running the Example Test in UI Mode[​](#running-the-example-test-in-ui-mode "Direct link to Running the Example Test in UI Mode")
---------------------------------------------------------------------------------------------------------------------------------

Run tests with [UI Mode](/docs/test-ui-mode) for watch mode, live step view, time travel debugging and more.

*   npm
*   yarn
*   pnpm

    npx playwright test --ui

    yarn playwright test --ui

    pnpm exec playwright test --ui

![UI Mode](/assets/images/ui-mode-1958baf0398aef5e9c9b5c68c5d56f2d.png)

See the [detailed guide on UI Mode](/docs/test-ui-mode) for watch filters, step details and trace integration.

Updating Playwright[​](#updating-playwright "Direct link to Updating Playwright")
---------------------------------------------------------------------------------

Update Playwright and download new browser binaries and their dependencies:

*   npm
*   yarn
*   pnpm

    npm install -D @playwright/test@latestnpx playwright install --with-deps

    yarn add --dev @playwright/test@latestyarn playwright install --with-deps

    pnpm install --save-dev @playwright/test@latestpnpm exec playwright install --with-deps

Check your installed version:

*   npm
*   yarn
*   pnpm

    npx playwright --version

    yarn playwright --version

    pnpm exec playwright --version

System requirements[​](#system-requirements "Direct link to System requirements")
---------------------------------------------------------------------------------

*   Node.js: latest 20.x, 22.x or 24.x.
*   Windows 11+, Windows Server 2019+ or Windows Subsystem for Linux (WSL).
*   macOS 14 (Ventura) or later.
*   Debian 12 / 13, Ubuntu 22.04 / 24.04 (x86-64 or arm64).

What's next[​](#whats-next "Direct link to What's next")
--------------------------------------------------------

*   [Write tests using web-first assertions, fixtures and locators](/docs/writing-tests)
*   [Run single or multiple tests; headed mode](/docs/running-tests)
*   [Generate tests with Codegen](/docs/codegen-intro)
*   [View a trace of your tests](/docs/trace-viewer-intro)

# Writing tests

Writing tests
=============

Introduction[​](#introduction "Direct link to Introduction")
------------------------------------------------------------

Playwright tests are simple: they **perform actions** and **assert the state** against expectations.

Playwright automatically waits for [actionability](/docs/actionability) checks to pass before performing each action. You don't need to add manual waits or deal with race conditions. Playwright assertions are designed to describe expectations that will eventually be met, eliminating flaky timeouts and racy checks.

**You will learn**

*   [How to write the first test](/docs/writing-tests#first-test)
*   [How to perform actions](/docs/writing-tests#actions)
*   [How to use assertions](/docs/writing-tests#assertions)
*   [How tests run in isolation](/docs/writing-tests#test-isolation)
*   [How to use test hooks](/docs/writing-tests#using-test-hooks)

First test[​](#first-test "Direct link to First test")
------------------------------------------------------

Take a look at the following example to see how to write a test.

tests/example.spec.ts

    import { test, expect } from '@playwright/test';test('has title', async ({ page }) => {  await page.goto('https://playwright.dev/');  // Expect a title "to contain" a substring.  await expect(page).toHaveTitle(/Playwright/);});test('get started link', async ({ page }) => {  await page.goto('https://playwright.dev/');  // Click the get started link.  await page.getByRole('link', { name: 'Get started' }).click();  // Expects page to have a heading with the name of Installation.  await expect(page.getByRole('heading', { name: 'Installation' })).toBeVisible();});

note

Add `// @ts-check` at the start of each test file when using JavaScript in VS Code to get automatic type checking.

Actions[​](#actions "Direct link to Actions")
---------------------------------------------

### Navigation[​](#navigation "Direct link to Navigation")

Most tests start by navigating to a URL. After that, the test interacts with page elements.

    await page.goto('https://playwright.dev/');

Playwright waits for the page to reach the load state before continuing. Learn more about [page.goto()](/docs/api/class-page#page-goto) options.

### Interactions[​](#interactions "Direct link to Interactions")

Performing actions starts with locating elements. Playwright uses [Locators API](/docs/locators) for that. Locators represent a way to find element(s) on the page at any moment. Learn more about the [different types](/docs/locators) of locators available.

Playwright waits for the element to be [actionable](/docs/actionability) before performing the action, so you don't need to wait for it to become available.

    // Create a locator.const getStarted = page.getByRole('link', { name: 'Get started' });// Click it.await getStarted.click();

In most cases, it'll be written in one line:

    await page.getByRole('link', { name: 'Get started' }).click();

### Basic actions[​](#basic-actions "Direct link to Basic actions")

Here are the most popular Playwright actions. For the complete list, check the [Locator API](/docs/api/class-locator) section.

Action

Description

[locator.check()](/docs/api/class-locator#locator-check)

Check the input checkbox

[locator.click()](/docs/api/class-locator#locator-click)

Click the element

[locator.uncheck()](/docs/api/class-locator#locator-uncheck)

Uncheck the input checkbox

[locator.hover()](/docs/api/class-locator#locator-hover)

Hover mouse over the element

[locator.fill()](/docs/api/class-locator#locator-fill)

Fill the form field, input text

[locator.focus()](/docs/api/class-locator#locator-focus)

Focus the element

[locator.press()](/docs/api/class-locator#locator-press)

Press single key

[locator.setInputFiles()](/docs/api/class-locator#locator-set-input-files)

Pick files to upload

[locator.selectOption()](/docs/api/class-locator#locator-select-option)

Select option in the drop down

Assertions[​](#assertions "Direct link to Assertions")
------------------------------------------------------

Playwright includes [test assertions](/docs/test-assertions) in the form of `expect` function. To make an assertion, call `expect(value)` and choose a matcher that reflects the expectation.

Playwright includes async matchers that wait until the expected condition is met. Using these matchers makes tests non-flaky and resilient. For example, this code waits until the page gets the title containing "Playwright":

    await expect(page).toHaveTitle(/Playwright/);

Here are the most popular async assertions. For the complete list, see [assertions guide](/docs/test-assertions):

Assertion

Description

[expect(locator).toBeChecked()](/docs/api/class-locatorassertions#locator-assertions-to-be-checked)

Checkbox is checked

[expect(locator).toBeEnabled()](/docs/api/class-locatorassertions#locator-assertions-to-be-enabled)

Control is enabled

[expect(locator).toBeVisible()](/docs/api/class-locatorassertions#locator-assertions-to-be-visible)

Element is visible

[expect(locator).toContainText()](/docs/api/class-locatorassertions#locator-assertions-to-contain-text)

Element contains text

[expect(locator).toHaveAttribute()](/docs/api/class-locatorassertions#locator-assertions-to-have-attribute)

Element has attribute

[expect(locator).toHaveCount()](/docs/api/class-locatorassertions#locator-assertions-to-have-count)

List of elements has given length

[expect(locator).toHaveText()](/docs/api/class-locatorassertions#locator-assertions-to-have-text)

Element matches text

[expect(locator).toHaveValue()](/docs/api/class-locatorassertions#locator-assertions-to-have-value)

Input element has value

[expect(page).toHaveTitle()](/docs/api/class-pageassertions#page-assertions-to-have-title)

Page has title

[expect(page).toHaveURL()](/docs/api/class-pageassertions#page-assertions-to-have-url)

Page has URL

Playwright also includes generic matchers like `toEqual`, `toContain`, `toBeTruthy` that can be used to assert any conditions. These assertions do not use the `await` keyword as they perform immediate synchronous checks on already available values.

    expect(success).toBeTruthy();

### Test Isolation[​](#test-isolation "Direct link to Test Isolation")

Playwright Test is based on the concept of [test fixtures](/docs/test-fixtures) such as the [built in page fixture](/docs/test-fixtures#built-in-fixtures), which is passed into your test. Pages are [isolated between tests due to the Browser Context](/docs/browser-contexts), which is equivalent to a brand new browser profile. Every test gets a fresh environment, even when multiple tests run in a single browser.

tests/example.spec.ts

    import { test } from '@playwright/test';test('example test', async ({ page }) => {  // "page" belongs to an isolated BrowserContext, created for this specific test.});test('another test', async ({ page }) => {  // "page" in this second test is completely isolated from the first test.});

### Using Test Hooks[​](#using-test-hooks "Direct link to Using Test Hooks")

You can use various [test hooks](/docs/api/class-test) such as `test.describe` to declare a group of tests and `test.beforeEach` and `test.afterEach` which are executed before/after each test. Other hooks include the `test.beforeAll` and `test.afterAll` which are executed once per worker before/after all tests.

tests/example.spec.ts

    import { test, expect } from '@playwright/test';test.describe('navigation', () => {  test.beforeEach(async ({ page }) => {    // Go to the starting url before each test.    await page.goto('https://playwright.dev/');  });  test('main navigation', async ({ page }) => {    // Assertions use the expect API.    await expect(page).toHaveURL('https://playwright.dev/');  });});

What's Next[​](#whats-next "Direct link to What's Next")
--------------------------------------------------------

*   [Run single test, multiple tests, headed mode](/docs/running-tests)
*   [Generate tests with Codegen](/docs/codegen-intro)
*   [See a trace of your tests](/docs/trace-viewer-intro)
*   [Explore UI Mode](/docs/test-ui-mode)
*   [Run tests on CI with GitHub Actions](/docs/ci-intro)

# Generating tests

Generating tests
================

Introduction[​](#introduction "Direct link to Introduction")
------------------------------------------------------------

Playwright can generate tests automatically, providing a quick way to get started with testing. Codegen opens a browser window for interaction and the Playwright Inspector for recording, copying, and managing your generated tests.

**You will learn**

*   [How to record a test](/docs/codegen#recording-a-test)
*   [How to generate locators](/docs/codegen#generating-locators)

Running Codegen[​](#running-codegen "Direct link to Running Codegen")
---------------------------------------------------------------------

Use the `codegen` command to run the test generator followed by the URL of the website you want to generate tests for. The URL is optional and can be added directly in the browser window if omitted.

    npx playwright codegen demo.playwright.dev/todomvc

### Recording a test[​](#recording-a-test "Direct link to Recording a test")

Run `codegen` and perform actions in the browser. Playwright generates code for your interactions automatically. Codegen analyzes the rendered page and recommends the best locator, prioritizing role, text, and test id locators. When multiple elements match a locator, the generator improves it to uniquely identify the target element, reducing test failures and flakiness.

With the test generator you can record:

*   Actions like click or fill by interacting with the page
*   Assertions by clicking a toolbar icon, then clicking a page element to assert against. You can choose:
    *   `'assert visibility'` to assert that an element is visible
    *   `'assert text'` to assert that an element contains specific text
    *   `'assert value'` to assert that an element has a specific value

![Recording a test](/assets/images/record-test-js-648272d0798f11b3f4b97eb2b9ff5dd6.png)

###### [​](#-1 "Direct link to -1")

When you finish interacting with the page, press the `'record'` button to stop recording and use the `'copy'` button to copy the generated code to your editor.

Use the `'clear'` button to clear the code and start recording again. Once finished, close the Playwright Inspector window or stop the terminal command.

To learn more about generating tests, check out our detailed guide on [Codegen](/docs/codegen).

### Generating locators[​](#generating-locators "Direct link to Generating locators")

You can generate [locators](/docs/locators) with the test generator.

*   Press the `'Record'` button to stop recording and the `'Pick Locator'` button will appear
*   Click the `'Pick Locator'` button and hover over elements in the browser window to see the locator highlighted underneath each element
*   Click the element you want to locate and the code for that locator will appear in the locator playground next to the Pick Locator button
*   Edit the locator in the locator playground to fine-tune it and see the matching element highlighted in the browser window
*   Use the copy button to copy the locator and paste it into your code

###### [​](#-2 "Direct link to -2")

![picking a locator](/assets/images/pick-locator-js-7a89c3d033ccf3f1cf20d9548ad7b475.png)

### Emulation[​](#emulation "Direct link to Emulation")

You can generate tests using emulation for specific viewports, devices, color schemes, geolocation, language, or timezone. The test generator can also preserve authenticated state. Check out the [Test Generator](/docs/codegen#emulation) guide to learn more.

What's Next[​](#whats-next "Direct link to What's Next")
--------------------------------------------------------

*   [See a trace of your tests](/docs/trace-viewer-intro)

# Running and debugging tests

Running and debugging tests
===========================

Introduction[​](#introduction "Direct link to Introduction")
------------------------------------------------------------

With Playwright you can run a single test, a set of tests, or all tests. Tests can be run on one browser or multiple browsers using the `--project` flag. Tests run in parallel by default and in headless mode, meaning no browser window opens while running the tests and results appear in the terminal. You can run tests in headed mode using the `--headed` CLI argument, or run your tests in [UI mode](/docs/test-ui-mode) using the `--ui` flag to see a full trace of your tests.

**You will learn**

*   [How to run tests from the command line](/docs/running-tests#command-line)
*   [How to debug tests](/docs/running-tests#debugging-tests)
*   [How to open the HTML test reporter](/docs/running-tests#test-reports)

Running tests[​](#running-tests "Direct link to Running tests")
---------------------------------------------------------------

### Command line[​](#command-line "Direct link to Command line")

You can run your tests with the `playwright test` command. This runs your tests on all browsers as configured in the `playwright.config` file, and results appear in the terminal. Tests run in headless mode by default, meaning no browser window opens while running the tests.

    npx playwright test

![tests running in command line](/assets/images/run-tests-cli-6e7e3119a14239c9021b406d7109dc44.png)

### Run tests in UI mode[​](#run-tests-in-ui-mode "Direct link to Run tests in UI mode")

We highly recommend running your tests with [UI Mode](/docs/test-ui-mode) for a better developer experience where you can easily walk through each step of the test and visually see what was happening before, during and after each step. UI mode also comes with many other features such as the locator picker, watch mode and more.

    npx playwright test --ui

![UI Mode](/assets/images/ui-mode-1958baf0398aef5e9c9b5c68c5d56f2d.png)

Check out our [detailed guide on UI Mode](/docs/test-ui-mode) to learn more about its features.

### Run tests in headed mode[​](#run-tests-in-headed-mode "Direct link to Run tests in headed mode")

To run your tests in headed mode, use the `--headed` flag. This gives you the ability to visually see how Playwright interacts with the website.

    npx playwright test --headed

### Run tests on different browsers[​](#run-tests-on-different-browsers "Direct link to Run tests on different browsers")

To specify which browser you would like to run your tests on, use the `--project` flag followed by the browser name.

    npx playwright test --project webkit

To specify multiple browsers to run your tests on, use the `--project` flag multiple times followed by each browser name.

    npx playwright test --project webkit --project firefox

### Run specific tests[​](#run-specific-tests "Direct link to Run specific tests")

To run a single test file, pass in the test file name that you want to run.

    npx playwright test landing-page.spec.ts

To run a set of test files from different directories, pass in the directory names that you want to run the tests in.

    npx playwright test tests/todo-page/ tests/landing-page/

To run files that have `landing` or `login` in the file name, simply pass in these keywords to the CLI.

    npx playwright test landing login

To run a test with a specific title, use the `-g` flag followed by the title of the test.

    npx playwright test -g "add a todo item"

### Run last failed tests[​](#run-last-failed-tests "Direct link to Run last failed tests")

To run only the tests that failed in the last test run, first run your tests and then run them again with the `--last-failed` flag.

    npx playwright test --last-failed

### Run tests in VS Code[​](#run-tests-in-vs-code "Direct link to Run tests in VS Code")

Tests can be run right from VS Code using the [VS Code extension](https://marketplace.visualstudio.com/items?itemName=ms-playwright.playwright). Once installed you can simply click the green triangle next to the test you want to run or run all tests from the testing sidebar. Check out our [Getting Started with VS Code](/docs/getting-started-vscode) guide for more details.

![install playwright extension](/assets/images/vscode-extension-ce873e1c0d856b8c255e9de0781eb8d9.png)

Debugging tests[​](#debugging-tests "Direct link to Debugging tests")
---------------------------------------------------------------------

Since Playwright runs in Node.js, you can debug it with your debugger of choice, e.g. using `console.log`, inside your IDE, or directly in VS Code with the [VS Code Extension](/docs/getting-started-vscode). Playwright comes with [UI Mode](/docs/test-ui-mode), where you can easily walk through each step of the test, see logs, errors, network requests, inspect the DOM snapshot, and more. You can also use the [Playwright Inspector](/docs/debug#playwright-inspector), which allows you to step through Playwright API calls, see their debug logs, and explore [locators](/docs/locators).

### Debug tests in UI mode[​](#debug-tests-in-ui-mode "Direct link to Debug tests in UI mode")

We highly recommend debugging your tests with [UI Mode](/docs/test-ui-mode) for a better developer experience where you can easily walk through each step of the test and visually see what was happening before, during, and after each step. UI mode also comes with many other features such as the locator picker, watch mode, and more.

    npx playwright test --ui

![showing errors in ui mode](/assets/images/ui-mode-error-ccd897a716874f5a9879220df24f1168.png)

While debugging you can use the Pick Locator button to select an element on the page and see the locator that Playwright would use to find that element. You can also edit the locator in the locator playground and see it highlighting live in the browser window. Use the Copy Locator button to copy the locator to your clipboard and then paste it into your test.

![pick locator in ui mode](/assets/images/ui-mode-pick-locator-91b71dca4af49fdfad305a57b9d657b8.png)

Check out our [detailed guide on UI Mode](/docs/test-ui-mode) to learn more about its features.

### Debug tests with the Playwright Inspector[​](#debug-tests-with-the-playwright-inspector "Direct link to Debug tests with the Playwright Inspector")

To debug all tests, run the Playwright test command followed by the `--debug` flag.

    npx playwright test --debug

![Debugging Tests with the Playwright inspector](/assets/images/run-tests-debug-04d9391d458299856c76dee6394874e0.png)

This command opens a browser window as well as the Playwright Inspector. You can use the step over button at the top of the inspector to step through your test. Or, press the play button to run your test from start to finish. Once the test finishes, the browser window closes.

To debug one test file, run the Playwright test command with the test file name that you want to debug followed by the `--debug` flag.

    npx playwright test example.spec.ts --debug

To debug a specific test from the line number where the `test(..` is defined, add a colon followed by the line number at the end of the test file name, followed by the `--debug` flag.

    npx playwright test example.spec.ts:10 --debug

While debugging you can use the Pick Locator button to select an element on the page and see the locator that Playwright would use to find that element. You can also edit the locator and see it highlighting live in the browser window. Use the Copy Locator button to copy the locator to your clipboard and then paste it into your test.

![Locator picker in the Playwright Inspector](/assets/images/run-tests-pick-locator-e13f89473c64d6c7764de5cf97f7413a.png)

Check out our [debugging guide](/docs/debug) to learn more about debugging with the [VS Code debugger](/docs/debug#vs-code-debugger), UI Mode, and the [Playwright Inspector](/docs/debug#playwright-inspector) as well as debugging with [Browser Developer tools](/docs/debug#browser-developer-tools).

Test reports[​](#test-reports "Direct link to Test reports")
------------------------------------------------------------

The [HTML Reporter](/docs/test-reporters#html-reporter) shows you a full report of your tests allowing you to filter the report by browsers, passed tests, failed tests, skipped tests, and flaky tests. By default, the HTML report opens automatically if some tests failed, otherwise you can open it with the following command.

    npx playwright show-report

![HTML Report](/assets/images/html-report-951cba1d9da23ab59e46459fe2e73036.png)

You can filter and search for tests as well as click on each test to see the test errors and explore each step of the test.

![HTML Reporter detail view](/assets/images/html-report-detail-2690519290492b327d5711d2eecddbb4.png)

What's next[​](#whats-next "Direct link to What's next")
--------------------------------------------------------

*   [Generate tests with Codegen](/docs/codegen-intro)
*   [See a trace of your tests](/docs/trace-viewer-intro)
*   [Explore all the features of UI Mode](/docs/test-ui-mode)
*   [Run your tests on CI with GitHub Actions](/docs/ci-intro)

# Trace viewer

Trace viewer
============

Introduction[​](#introduction "Direct link to Introduction")
------------------------------------------------------------

Playwright Trace Viewer is a GUI tool that lets you explore recorded Playwright traces of your tests, meaning you can go back and forward through each action of your test and visually see what was happening during each action.

**You will learn**

*   [How to record a trace](/docs/trace-viewer-intro#recording-a-trace)
*   [How to open the HTML report](/docs/trace-viewer-intro#opening-the-html-report)
*   [How to open and view the trace](/docs/trace-viewer-intro#opening-the-trace)

Recording a Trace[​](#recording-a-trace "Direct link to Recording a Trace")
---------------------------------------------------------------------------

By default the [playwright.config](/docs/trace-viewer#tracing-on-ci) file contains the configuration needed to create a `trace.zip` file for each test. Traces are setup to run `on-first-retry`, meaning they run on the first retry of a failed test. Also `retries` are set to 2 when running on CI and 0 locally. This means the traces are recorded on the first retry of a failed test but not on the first run and not on the second retry.

playwright.config.ts

    import { defineConfig } from '@playwright/test';export default defineConfig({  retries: process.env.CI ? 2 : 0, // set to 2 when running on CI  // ...  use: {    trace: 'on-first-retry', // record traces on first retry of each test  },});

To learn more about available options to record a trace check out our detailed guide on [Trace Viewer](/docs/trace-viewer).

Traces are normally run in a Continuous Integration (CI) environment, because locally you can use [UI Mode](/docs/test-ui-mode) for developing and debugging tests. However, if you want to run traces locally without using [UI Mode](/docs/test-ui-mode), you can force tracing to be on with `--trace on`.

    npx playwright test --trace on

Opening the HTML report[​](#opening-the-html-report "Direct link to Opening the HTML report")
---------------------------------------------------------------------------------------------

The HTML report shows you a report of all your tests that have been run and on which browsers as well as how long they took. Tests can be filtered by passed tests, failed, flaky, or skipped tests. You can also search for a particular test. Clicking on a test opens the detailed view where you can see more information on your tests such as the errors, the test steps, and the trace.

    npx playwright show-report

Opening the trace[​](#opening-the-trace "Direct link to Opening the trace")
---------------------------------------------------------------------------

In the HTML report, click on the trace icon next to the test file name to directly open the trace for the required test.

![playwright html report](/assets/images/html-report-failed-tests-465ab63abc3dcd0728f6449628ffa906.png)

You can also click to open the detailed view of the test and scroll down to the `'Traces'` tab and open the trace by clicking on the trace screenshot.

![playwright html report detailed view](/assets/images/html-report-trace-8b2941b2d73aa86b10f964e227e9e541.png)

To learn more about reporters, check out our detailed guide on reporters including the [HTML Reporter](/docs/test-reporters#html-reporter).

Viewing the trace[​](#viewing-the-trace "Direct link to Viewing the trace")
---------------------------------------------------------------------------

View traces of your test by clicking through each action or hovering using the timeline and see the state of the page before and after the action. Inspect the log, source and network, errors, and console during each step of the test. The trace viewer creates a DOM snapshot so you can fully interact with it and open the browser DevTools to inspect the HTML, CSS, etc.

![playwright trace viewer](/assets/images/trace-viewer-failed-test-5ec04c65e0f0c1ffca58529f6789c752.png)

To learn more about traces, check out our detailed guide on [Trace Viewer](/docs/trace-viewer).

What's next[​](#whats-next "Direct link to What's next")
--------------------------------------------------------

*   [Run tests on CI with GitHub Actions](/docs/ci-intro)
*   [Learn more about Trace Viewer](/docs/trace-viewer)

# Setting up CI

Setting up CI
=============

Introduction[​](#introduction "Direct link to Introduction")
------------------------------------------------------------

Playwright tests can be run on any CI provider. This guide covers one way of running tests on GitHub using GitHub Actions. If you would like to learn more, or how to configure other CI providers, check out our detailed [doc on Continuous Integration](/docs/ci).

#### You will learn[​](#you-will-learn "Direct link to You will learn")

*   [How to set up GitHub Actions](/docs/ci-intro#setting-up-github-actions)
*   [How to view test logs](/docs/ci-intro#viewing-test-logs)
*   [How to view the HTML report](/docs/ci-intro#viewing-the-html-report)
*   [How to view the trace](/docs/ci-intro#viewing-the-trace)
*   [How to publish report on the web](/docs/ci-intro#publishing-report-on-the-web)

Setting up GitHub Actions[​](#setting-up-github-actions "Direct link to Setting up GitHub Actions")
---------------------------------------------------------------------------------------------------

When [installing Playwright](/docs/intro) using the [VS Code extension](/docs/getting-started-vscode) or with `npm init playwright@latest`, you are given the option to add a [GitHub Actions](https://docs.github.com/en/actions) workflow. This creates a `playwright.yml` file inside a `.github/workflows` folder containing everything you need so that your tests run on each push and pull request into the main/master branch. Here's how that file looks:

.github/workflows/playwright.yml

    name: Playwright Testson:  push:    branches: [ main, master ]  pull_request:    branches: [ main, master ]jobs:  test:    timeout-minutes: 60    runs-on: ubuntu-latest    steps:    - uses: actions/checkout@v5    - uses: actions/setup-node@v5      with:        node-version: lts/*    - name: Install dependencies      run: npm ci    - name: Install Playwright Browsers      run: npx playwright install --with-deps    - name: Run Playwright tests      run: npx playwright test    - uses: actions/upload-artifact@v4      if: ${{ !cancelled() }}      with:        name: playwright-report        path: playwright-report/        retention-days: 30

The workflow performs these steps:

1.  Clone your repository
2.  Install Node.js
3.  Install NPM Dependencies
4.  Install Playwright Browsers
5.  Run Playwright tests
6.  Upload HTML report to the GitHub UI

To learn more about this, see ["Understanding GitHub Actions"](https://docs.github.com/en/actions/learn-github-actions/understanding-github-actions).

Create a Repo and Push to GitHub[​](#create-a-repo-and-push-to-github "Direct link to Create a Repo and Push to GitHub")
------------------------------------------------------------------------------------------------------------------------

Once you have your [GitHub Actions workflow](#setting-up-github-actions) setup, then all you need to do is [Create a repo on GitHub](https://docs.github.com/en/get-started/quickstart/create-a-repo) or push your code to an existing repository. Follow the instructions on GitHub and don't forget to [initialize a git repository](https://github.com/git-guides/git-init) using the `git init` command so you can [add](https://github.com/git-guides/git-add), [commit](https://github.com/git-guides/git-commit), and [push](https://github.com/git-guides/git-push) your code.

![Create a Repo and Push to GitHub](https://user-images.githubusercontent.com/13063165/183423254-d2735278-a2ab-4d63-bb99-48d8e5e447bc.png)

Opening the Workflows[​](#opening-the-workflows "Direct link to Opening the Workflows")
---------------------------------------------------------------------------------------

Click on the **Actions** tab to see the workflows. Here you see if your tests have passed or failed.

###### [​](#-1 "Direct link to -1")

![opening the workflow](https://user-images.githubusercontent.com/13063165/183423783-58bf2008-514e-4f96-9c12-c9a55703960c.png)

Viewing Test Logs[​](#viewing-test-logs "Direct link to Viewing Test Logs")
---------------------------------------------------------------------------

Clicking on the workflow run shows you all the actions that GitHub performed and clicking on **Run Playwright tests** shows the error messages, what was expected and what was received as well as the call log.

###### [​](#-2 "Direct link to -2")

![Viewing Test Logs](https://user-images.githubusercontent.com/13063165/183423783-58bf2008-514e-4f96-9c12-c9a55703960c.png)

HTML Report[​](#html-report "Direct link to HTML Report")
---------------------------------------------------------

The HTML Report shows you a full report of your tests. You can filter the report by browsers, passed tests, failed tests, skipped tests, and flaky tests.

### Downloading the HTML Report[​](#downloading-the-html-report "Direct link to Downloading the HTML Report")

In the Artifacts section, click on the **playwright-report** to download your report in the format of a zip file.

![Downloading the HTML Report](https://user-images.githubusercontent.com/13063165/183437023-524f1803-84e4-4862-9ce3-1d55af0e023e.png)

### Viewing the HTML Report[​](#viewing-the-html-report "Direct link to Viewing the HTML Report")

Locally opening the report does not work as expected as you need a web server for everything to work correctly. First, extract the zip, preferably in a folder that already has Playwright installed. Using the command line, change into the directory where the report is and use `npx playwright show-report` followed by the name of the extracted folder. This serves up the report and enables you to view it in your browser.

    npx playwright show-report name-of-my-extracted-playwright-report

![viewing the HTML report](https://github.com/microsoft/playwright/assets/13063165/c5f60e56-fb75-4a2d-a4b6-054b8c5d69c1)

To learn more about reports, check out our detailed guide on [HTML Reporter](/docs/test-reporters#html-reporter)

Viewing the Trace[​](#viewing-the-trace "Direct link to Viewing the Trace")
---------------------------------------------------------------------------

Once you have served the report using `npx playwright show-report`, click on the trace icon next to the test's file name as seen in the image above. You can then view the trace of your tests and inspect each action to try to find out why the tests are failing.

![playwright trace viewer](https://github.com/microsoft/playwright/assets/13063165/10fe3585-8401-4051-b1c2-b2e92ac4c274)

Publishing report on the web[​](#publishing-report-on-the-web "Direct link to Publishing report on the web")
------------------------------------------------------------------------------------------------------------

Downloading the HTML report as a zip file is not very convenient. However, we can utilize Azure Storage's static websites hosting capabilities to easily and efficiently serve HTML reports on the Internet, requiring minimal configuration.

1.  Create an [Azure Storage account](https://learn.microsoft.com/en-us/azure/storage/common/storage-account-create).
    
2.  Enable [Static website hosting](https://learn.microsoft.com/en-us/azure/storage/blobs/storage-blob-static-website-how-to#enable-static-website-hosting) for the storage account.
    
3.  Create a Service Principal in Azure and grant it access to Azure Blob storage. Upon successful execution, the command will display the credentials which will be used in the next step.
    
        az ad sp create-for-rbac --name "github-actions" --role "Storage Blob Data Contributor" --scopes /subscriptions/<SUBSCRIPTION_ID>/resourceGroups/<RESOURCE_GROUP_NAME>/providers/Microsoft.Storage/storageAccounts/<STORAGE_ACCOUNT_NAME>
    
4.  Use the credentials from the previous step to set up encrypted secrets in your GitHub repository. Go to your repository's settings, under [GitHub Actions secrets](https://docs.github.com/en/actions/security-guides/encrypted-secrets#creating-encrypted-secrets-for-a-repository), and add the following secrets:
    
    *   `AZCOPY_SPA_APPLICATION_ID`
    *   `AZCOPY_SPA_CLIENT_SECRET`
    *   `AZCOPY_TENANT_ID`
    
    For a detailed guide on how to authorize a service principal using a client secret, refer to [this Microsoft documentation](https://learn.microsoft.com/en-us/azure/storage/common/storage-use-azcopy-authorize-azure-active-directory#authorize-a-service-principal-by-using-a-client-secret).
    
5.  Add a step that uploads the HTML report to Azure Storage.
    
    .github/workflows/playwright.yml
    
        ...    - name: Upload HTML report to Azure      shell: bash      run: |        REPORT_DIR='run-${{ github.run_id }}-${{ github.run_attempt }}'        azcopy cp --recursive "./playwright-report/*" "https://<STORAGE_ACCOUNT_NAME>.blob.core.windows.net/\$web/$REPORT_DIR"        echo "::notice title=HTML report url::https://<STORAGE_ACCOUNT_NAME>.z1.web.core.windows.net/$REPORT_DIR/index.html"      env:        AZCOPY_AUTO_LOGIN_TYPE: SPN        AZCOPY_SPA_APPLICATION_ID: '${{ secrets.AZCOPY_SPA_APPLICATION_ID }}'        AZCOPY_SPA_CLIENT_SECRET: '${{ secrets.AZCOPY_SPA_CLIENT_SECRET }}'        AZCOPY_TENANT_ID: '${{ secrets.AZCOPY_TENANT_ID }}'
    

The contents of the `$web` storage container can be accessed from a browser by using the [public URL](https://learn.microsoft.com/en-us/azure/storage/blobs/storage-blob-static-website-how-to?tabs=azure-portal#portal-find-url) of the website.

note

This step will not work for pull requests created from a forked repository because such workflow [doesn't have access to the secrets](https://docs.github.com/en/actions/security-for-github-actions/security-guides/using-secrets-in-github-actions#using-secrets-in-a-workflow).

Properly handling Secrets[​](#properly-handling-secrets "Direct link to Properly handling Secrets")
---------------------------------------------------------------------------------------------------

Artifacts like trace files, HTML reports or even the console logs contain information about your test execution. They can contain sensitive data like user credentials for a test user, access tokens to a staging backend, testing source code, or sometimes even your application source code. Treat these files just as carefully as you treat that sensitive data. If you upload reports and traces as part of your CI workflow, make sure that you only upload them to trusted artifact stores, or that you encrypt the files before upload. The same is true for sharing artifacts with team members: Use a trusted file share or encrypt the files before sharing.

What's Next[​](#whats-next "Direct link to What's Next")
--------------------------------------------------------

*   [Learn how to use Locators](/docs/locators)
*   [Learn how to perform Actions](/docs/input)
*   [Learn how to write Assertions](/docs/test-assertions)
*   [Learn more about the Trace Viewer](/docs/trace-viewer)
*   [Learn more ways of running tests on GitHub Actions](/docs/ci#github-actions)
*   [Learn more about running tests on other CI providers](/docs/ci)

# Playwright Test Agents

Playwright Test Agents
======================

Introduction[​](#introduction "Direct link to Introduction")
------------------------------------------------------------

Playwright comes with three Playwright Test Agents out of the box: **🎭 planner**, **🎭 generator** and **🎭 healer**.

These agents can be used independently, sequentially, or as the chained calls in the agentic loop. Using them sequentially will produce test coverage for your product.

*   **🎭 planner** explores the app and produces a Markdown test plan
*   **🎭 generator** transforms the Markdown plan into the Playwright Test files
*   **🎭 healer** executes the test suite and automatically repairs failing tests

### Getting Started[​](#getting-started "Direct link to Getting Started")

Start with adding Playwright Test Agent definitions to your project using the `init-agents` command. These definitions should be regenerated whenever Playwright is updated to pick up new tools and instructions.

*   VS Code
*   Claude Code
*   OpenCode

    npx playwright init-agents --loop=vscode

    npx playwright init-agents --loop=claude

    npx playwright init-agents --loop=opencode

note

VS Code v1.105 (released October 9, 2025) is needed for the agentic experience to function properly in VS Code.

Once the agents have been generated, you can use your AI tool of choice to command these agents to build Playwright Tests.

🎭 Planner[​](#-planner "Direct link to 🎭 Planner")
----------------------------------------------------

Planner agent explores your app and produces a test plan for one or many scenarios and user flows.

**Input**

*   A clear request to the planner (e.g., “Generate a plan for guest checkout.”)
*   A `seed test` that sets up the environment necessary to interact with your app
*   _(optional)_ A Product Requirement Document (PRD) for context

**Prompt**

![planner prompt](/assets/ideal-img/planner-prompt.3e77e0f.640.png)

> *   Notice how the `seed.spec.ts` is included in the context of the planner.
> *   Planner will run this test to execute all the initialization necessary for your test including the global setup, project dependencies and all the necessary fixtures and hooks.
> *   Planner will also use this seed test as an example of all the generated tests. Alternatively, you can mention the file name in the prompt.

Example: seed.spec.ts

    import { test, expect } from './fixtures';test('seed', async ({ page }) => {  // this test uses custom fixtures from ./fixtures});

**Output**

*   A Markdown test plan saved as `specs/basic-operations.md`.
*   The plan is human-readable but precise enough for test generation.

Example: **specs/basic-operations.md**

    # TodoMVC Application - Basic Operations Test Plan## Application OverviewThe TodoMVC application is a React-based todo list manager that demonstrates standard todo application functionality. The application provides comprehensive task management capabilities with a clean, intuitive interface. Key features include:- **Task Management**: Add, edit, complete, and delete individual todos- **Bulk Operations**: Mark all todos as complete/incomplete and clear all completed todos  - **Filtering System**: View todos by All, Active, or Completed status with URL routing support- **Real-time Counter**: Display of active (incomplete) todo count- **Interactive UI**: Hover states, edit-in-place functionality, and responsive design- **State Persistence**: Maintains state during session navigation## Test Scenarios### 1. Adding New Todos**Seed:** `tests/seed.spec.ts`#### 1.1 Add Valid Todo**Steps:**1. Click in the "What needs to be done?" input field2. Type "Buy groceries"3. Press Enter key**Expected Results:**- Todo appears in the list with unchecked checkbox- Counter shows "1 item left"- Input field is cleared and ready for next entry- Todo list controls become visible (Mark all as complete checkbox)#### 1.2 Add Multiple Todos...

🎭 Generator[​](#-generator "Direct link to 🎭 Generator")
----------------------------------------------------------

Generator agent uses the Markdown plan to produce executable Playwright Tests. It verifies selectors and assertions live as it performs the scenarios. Playwright supports generation hints and provides a catalog of assertions for efficient structural and behavioral validation.

**Input**

*   Markdown plan from `specs/`

**Prompt**

![generator prompt](/assets/ideal-img/generator-prompt.d16aa4b.640.png)

> *   Notice how the `basic-operations.md` is included in the context of the generator.
> *   This is how generator knows where to get the test plan from. Alternatively, you can mention the file name in the prompt.

**Output**

*   A test suite under `tests/`
*   Generated tests may include initial errors that can be healed automatically by the healer agent

Example: **tests/add-valid-todo.spec.ts**

    // spec: specs/basic-operations.md// seed: tests/seed.spec.tsimport { test, expect } from '../fixtures';test.describe('Adding New Todos', () => {  test('Add Valid Todo', async ({ page }) => {    // 1. Click in the "What needs to be done?" input field    const todoInput = page.getByRole('textbox', { name: 'What needs to be done?' });    await todoInput.click();    // 2. Type "Buy groceries"    await todoInput.fill('Buy groceries');    // 3. Press Enter key    await todoInput.press('Enter');    // Expected Results:    // - Todo appears in the list with unchecked checkbox    await expect(page.getByText('Buy groceries')).toBeVisible();    const todoCheckbox = page.getByRole('checkbox', { name: 'Toggle Todo' });    await expect(todoCheckbox).toBeVisible();    await expect(todoCheckbox).not.toBeChecked();    // - Counter shows "1 item left"    await expect(page.getByText('1 item left')).toBeVisible();    // - Input field is cleared and ready for next entry    await expect(todoInput).toHaveValue('');    await expect(todoInput).toBeFocused();    // - Todo list controls become visible (Mark all as complete checkbox)    await expect(page.getByRole('checkbox', { name: '❯Mark all as complete' })).toBeVisible();  });});

🎭 Healer[​](#-healer "Direct link to 🎭 Healer")
-------------------------------------------------

When the test fails, the healer agent:

*   Replays the failing steps
*   Inspects the current UI to locate equivalent elements or flows
*   Suggests a patch (e.g., locator update, wait adjustment, data fix)
*   Re-runs the test until it passes or until guardrails stop the loop

**Input**

*   Failing test name

**Prompt**

![healer prompt](/assets/ideal-img/healer-prompt.5677507.640.png)

**Output**

*   A passing test, or a skipped test if the healer believes the that functionality is broken.

Artifacts and Conventions[​](#artifacts-and-conventions "Direct link to Artifacts and Conventions")
---------------------------------------------------------------------------------------------------

The static agent definitions and generated files follow a simple, auditable structure:

    repo/  .github/                    # agent definitions  specs/                      # human-readable test plans    basic-operations.md  tests/                      # generated Playwright tests    seed.spec.ts              # seed test for environment    tests/create/add-valid-todo.spec.ts  playwright.config.ts

### Agent Definitions[​](#agent-definitions "Direct link to Agent Definitions")

Under the hood, agent definitions are collections of instructions and MCP tools. They are provided by Playwright and should be regenerated whenever Playwright is updated.

Example for Claude Code subagents:

    npx playwright init-agents --loop=vscode

### Specs in `specs/`[​](#specs-in-specs "Direct link to specs-in-specs")

Specs are structured plans describing scenarios in human-readable terms. They include steps, expected outcomes, and data. Specs can start from scratch or extend a seed test.

### Tests in `tests/`[​](#tests-in-tests "Direct link to tests-in-tests")

Generated Playwright tests, aligned one-to-one with specs wherever feasible.

### Seed tests `seed.spec.ts`[​](#seed-tests-seedspects "Direct link to seed-tests-seedspects")

Seed tests provide a ready-to-use `page` context to bootstrap execution.

# Annotations

Annotations
===========

Introduction[​](#introduction "Direct link to Introduction")
------------------------------------------------------------

Playwright supports tags and annotations that are displayed in the test report.

You can add your own tags and annotations at any moment, but Playwright comes with a few built-in ones:

*   [test.skip()](/docs/api/class-test#test-skip) marks the test as irrelevant. Playwright does not run such a test. Use this annotation when the test is not applicable in some configuration.
*   [test.fail()](/docs/api/class-test#test-fail) marks the test as failing. Playwright will run this test and ensure it does indeed fail. If the test does not fail, Playwright will complain.
*   [test.fixme()](/docs/api/class-test#test-fixme) marks the test as failing. Playwright will not run this test, as opposed to the `fail` annotation. Use `fixme` when running the test is slow or crashes.
*   [test.slow()](/docs/api/class-test#test-slow) marks the test as slow and triples the test timeout.

Annotations can be added to a single test or a group of tests.

Built-in annotations can be conditional, in which case they apply when the condition is truthy, and may depend on test fixtures. There could be multiple annotations on the same test, possibly in different configurations.

Focus a test[​](#focus-a-test "Direct link to Focus a test")
------------------------------------------------------------

You can focus some tests. When there are focused tests, only these tests run.

    test.only('focus this test', async ({ page }) => {  // Run only focused tests in the entire project.});

Skip a test[​](#skip-a-test "Direct link to Skip a test")
---------------------------------------------------------

Mark a test as skipped.

    test.skip('skip this test', async ({ page }) => {  // This test is not run});

Conditionally skip a test[​](#conditionally-skip-a-test "Direct link to Conditionally skip a test")
---------------------------------------------------------------------------------------------------

You can skip certain test based on the condition.

    test('skip this test', async ({ page, browserName }) => {  test.skip(browserName === 'firefox', 'Still working on it');});

Group tests[​](#group-tests "Direct link to Group tests")
---------------------------------------------------------

You can group tests to give them a logical name or to scope before/after hooks to the group.

    import { test, expect } from '@playwright/test';test.describe('two tests', () => {  test('one', async ({ page }) => {    // ...  });  test('two', async ({ page }) => {    // ...  });});

Tag tests[​](#tag-tests "Direct link to Tag tests")
---------------------------------------------------

Sometimes you want to tag your tests as `@fast` or `@slow`, and then filter by tag in the test report. Or you might want to only run tests that have a certain tag.

To tag a test, either provide an additional details object when declaring a test, or add `@`\-token to the test title. Note that tags must start with `@` symbol.

    import { test, expect } from '@playwright/test';test('test login page', {  tag: '@fast',}, async ({ page }) => {  // ...});test('test full report @slow', async ({ page }) => {  // ...});

You can also tag all tests in a group or provide multiple tags:

    import { test, expect } from '@playwright/test';test.describe('group', {  tag: '@report',}, () => {  test('test report header', async ({ page }) => {    // ...  });  test('test full report', {    tag: ['@slow', '@vrt'],  }, async ({ page }) => {    // ...  });});

You can now run tests that have a particular tag with [`--grep`](/docs/test-cli#all-options) command line option.

*   Bash
*   PowerShell
*   Batch

    npx playwright test --grep @fast

    npx playwright test --grep "@fast"

    npx playwright test --grep @fast

Or if you want the opposite, you can skip the tests with a certain tag:

*   Bash
*   PowerShell
*   Batch

    npx playwright test --grep-invert @fast

    npx playwright test --grep-invert "@fast"

    npx playwright test --grep-invert @fast

To run tests containing either tag (logical `OR` operator):

*   Bash
*   PowerShell
*   Batch

    npx playwright test --grep "@fast|@slow"

    npx playwright test --grep --% "@fast^|@slow"

    npx playwright test --grep "@fast^|@slow"

Or run tests containing both tags (logical `AND` operator) using regex lookaheads:

    npx playwright test --grep "(?=.*@fast)(?=.*@slow)"

You can also filter tests in the configuration file via [testConfig.grep](/docs/api/class-testconfig#test-config-grep) and [testProject.grep](/docs/api/class-testproject#test-project-grep).

Annotate tests[​](#annotate-tests "Direct link to Annotate tests")
------------------------------------------------------------------

If you would like to annotate your tests with something more substantial than a tag, you can do that when declaring a test. Annotations have a `type` and a `description` for more context and available in reporter API. Playwright's built-in HTML reporter shows all annotations, except those where `type` starts with `_` symbol.

For example, to annotate a test with an issue url:

    import { test, expect } from '@playwright/test';test('test login page', {  annotation: {    type: 'issue',    description: 'https://github.com/microsoft/playwright/issues/23180',  },}, async ({ page }) => {  // ...});

You can also annotate all tests in a group or provide multiple annotations:

    import { test, expect } from '@playwright/test';test.describe('report tests', {  annotation: { type: 'category', description: 'report' },}, () => {  test('test report header', async ({ page }) => {    // ...  });  test('test full report', {    annotation: [      { type: 'issue', description: 'https://github.com/microsoft/playwright/issues/23180' },      { type: 'performance', description: 'very slow test!' },    ],  }, async ({ page }) => {    // ...  });});

Conditionally skip a group of tests[​](#conditionally-skip-a-group-of-tests "Direct link to Conditionally skip a group of tests")
---------------------------------------------------------------------------------------------------------------------------------

For example, you can run a group of tests just in Chromium by passing a callback.

example.spec.ts

    test.describe('chromium only', () => {  test.skip(({ browserName }) => browserName !== 'chromium', 'Chromium only!');  test.beforeAll(async () => {    // This hook is only run in Chromium.  });  test('test 1', async ({ page }) => {    // This test is only run in Chromium.  });  test('test 2', async ({ page }) => {    // This test is only run in Chromium.  });});

Use fixme in `beforeEach` hook[​](#use-fixme-in-beforeeach-hook "Direct link to use-fixme-in-beforeeach-hook")
--------------------------------------------------------------------------------------------------------------

To avoid running `beforeEach` hooks, you can put annotations in the hook itself.

example.spec.ts

    test.beforeEach(async ({ page, isMobile }) => {  test.fixme(isMobile, 'Settings page does not work in mobile yet');  await page.goto('http://localhost:3000/settings');});test('user profile', async ({ page }) => {  await page.getByText('My Profile').click();  // ...});

Runtime annotations[​](#runtime-annotations "Direct link to Runtime annotations")
---------------------------------------------------------------------------------

While the test is already running, you can add annotations to [`test.info().annotations`](/docs/api/class-testinfo#test-info-annotations).

example.spec.ts

    test('example test', async ({ page, browser }) => {  test.info().annotations.push({    type: 'browser version',    description: browser.version(),  });  // ...});

# Command line

Command line
============

Playwright provides a powerful command line interface for running tests, generating code, debugging, and more. The most up to date list of commands and arguments available on the CLI can always be retrieved via `npx playwright --help`.

Essential Commands[​](#essential-commands "Direct link to Essential Commands")
------------------------------------------------------------------------------

### Run Tests[​](#run-tests "Direct link to Run Tests")

Run your Playwright tests. [Read more about running tests](/docs/running-tests).

#### Syntax[​](#syntax "Direct link to Syntax")

    npx playwright test [options] [test-filter...]

#### Examples[​](#examples "Direct link to Examples")

    # Run all testsnpx playwright test# Run a single test filenpx playwright test tests/todo-page.spec.ts# Run a set of test filesnpx playwright test tests/todo-page/ tests/landing-page/# Run tests at a specific linenpx playwright test my-spec.ts:42# Run tests by titlenpx playwright test -g "add a todo item"# Run tests in headed browsersnpx playwright test --headed# Run tests for a specific projectnpx playwright test --project=chromium# Get helpnpx playwright test --help

**Disable [parallelization](/docs/test-parallel)**

    npx playwright test --workers=1

**Run in debug mode with [Playwright Inspector](/docs/debug)**

    npx playwright test --debug

**Run tests in interactive [UI mode](/docs/test-ui-mode)**

    npx playwright test --ui

#### Common Options[​](#common-options "Direct link to Common Options")

Option

Description

`--debug`

Run tests with Playwright Inspector. Shortcut for `PWDEBUG=1` environment variable and `--timeout=0 --max-failures=1 --headed --workers=1` options.

`--headed`

Run tests in headed browsers (default: headless).

`-g <grep>` or `--grep <grep>`

Only run tests matching this regular expression (default: ".\*").

`--project <project-name...>`

Only run tests from the specified list of projects, supports '\*' wildcard (default: run all projects).

`--ui`

Run tests in interactive UI mode.

`-j <workers>` or `--workers <workers>`

Number of concurrent workers or percentage of logical CPU cores, use 1 to run in a single worker (default: 50%).

#### All Options[​](#all-options "Direct link to All Options")

Option

Description

Non-option arguments

Each argument is treated as a regular expression matched against the full test file path. Only tests from files matching the pattern will be executed. Special symbols like `$` or `*` should be escaped with `\`. In many shells/terminals you may need to quote the arguments.

`-c <file>` or `--config <file>`

Configuration file, or a test directory with optional "playwright.config.{m,c}?{js,ts}". Defaults to `playwright.config.ts` or `playwright.config.js` in the current directory.

`--debug`

Run tests with Playwright Inspector. Shortcut for `PWDEBUG=1` environment variable and `--timeout=0 --max-failures=1 --headed --workers=1` options.

`--fail-on-flaky-tests`

Fail if any test is flagged as flaky (default: false).

`--forbid-only`

Fail if `test.only` is called (default: false). Useful on CI.

`--fully-parallel`

Run all tests in parallel (default: false).

`--global-timeout <timeout>`

Maximum time this test suite can run in milliseconds (default: unlimited).

`-g <grep>` or `--grep <grep>`

Only run tests matching this regular expression (default: ".\*").

`--grep-invert <grep>`

Only run tests that do not match this regular expression.

`--headed`

Run tests in headed browsers (default: headless).

`--ignore-snapshots`

Ignore screenshot and snapshot expectations.

`-j <workers>` or `--workers <workers>`

Number of concurrent workers or percentage of logical CPU cores, use 1 to run in a single worker (default: 50%).

`--last-failed`

Only re-run the failures.

`--list`

Collect all the tests and report them, but do not run.

`--max-failures <N>` or `-x`

Stop after the first `N` failures. Passing `-x` stops after the first failure.

`--no-deps`

Do not run project dependencies.

`--output <dir>`

Folder for output artifacts (default: "test-results").

`--only-changed [ref]`

Only run test files that have been changed between 'HEAD' and 'ref'. Defaults to running all uncommitted changes. Only supports Git.

`--pass-with-no-tests`

Makes test run succeed even if no tests were found.

`--project <project-name...>`

Only run tests from the specified list of projects, supports '\*' wildcard (default: run all projects).

`--quiet`

Suppress stdio.

`--repeat-each <N>`

Run each test `N` times (default: 1).

`--reporter <reporter>`

Reporter to use, comma-separated, can be "dot", "line", "list", or others (default: "list"). You can also pass a path to a custom reporter file.

`--retries <retries>`

Maximum retry count for flaky tests, zero for no retries (default: no retries).

`--shard <shard>`

Shard tests and execute only the selected shard, specified in the form "current/all", 1-based, e.g., "3/5".

`--test-list <file>`

Path to a file containing a list of tests to run. See [test list](#test-list) for details.

`--test-list-invert <file>`

Path to a file containing a list of tests to skip. See [test list](#test-list) for details.

`--timeout <timeout>`

Specify test timeout threshold in milliseconds, zero for unlimited (default: 30 seconds).

`--trace <mode>`

Force tracing mode, can be `on`, `off`, `on-first-retry`, `on-all-retries`, `retain-on-failure`, `retain-on-first-failure`.

`--tsconfig <path>`

Path to a single tsconfig applicable to all imported files (default: look up tsconfig for each imported file separately).

`--ui`

Run tests in interactive UI mode.

`--ui-host <host>`

Host to serve UI on; specifying this option opens UI in a browser tab.

`--ui-port <port>`

Port to serve UI on, 0 for any free port; specifying this option opens UI in a browser tab.

`-u` or `--update-snapshots [mode]`

Update snapshots with actual results. Possible values are "all", "changed", "missing", and "none". Running tests without the flag defaults to "missing"; running tests with the flag but without a value defaults to "changed".

`--update-source-method [mode]`

Update snapshots with actual results. Possible values are "patch" (default), "3way" and "overwrite". "Patch" creates a unified diff file that can be used to update the source code later. "3way" generates merge conflict markers in source code. "Overwrite" overwrites the source code with the new snapshot values.

`-x`

Stop after the first failure.

#### Test list[​](#test-list "Direct link to Test list")

Options `--test-list` and `--test-list-invert` accept a path to a test list file. This file should list tests in the format similar to the output produced in `--list` mode.

    # This is a test list file.# It can include comments and empty lines.# Fully qualified test with a project:[chromium] › path/to/example.spec.ts:3:9 › suite › nested suite › example test# This test is included for all projects:path/to/example.spec.ts:3:9 › example test# Use "›" or ">" as a separator:[firefox] > example.spec.ts > suite > nested suite > example test# Line/column numbers are completely ignored, you can omit them.# Three entries below refer to the same test:example.spec.ts › example testexample.spec.ts:15 › example testexample.spec.ts:42:42 › example test

### Show Report[​](#show-report "Direct link to Show Report")

Display HTML report from previous test run. [Read more about the HTML reporter](/docs/test-reporters#html-reporter).

#### Syntax[​](#syntax-1 "Direct link to Syntax")

    npx playwright show-report [report] [options]

#### Examples[​](#examples-1 "Direct link to Examples")

    # Show latest test reportnpx playwright show-report# Show a specific reportnpx playwright show-report playwright-report/# Show report on custom portnpx playwright show-report --port 8080

#### Options[​](#options "Direct link to Options")

Option

Description

`--host <host>`

Host to serve report on (default: localhost)

`--port <port>`

Port to serve report on (default: 9323)

### Install Browsers[​](#install-browsers "Direct link to Install Browsers")

Install browsers required by Playwright. [Read more about Playwright's browser support](/docs/browsers).

#### Syntax[​](#syntax-2 "Direct link to Syntax")

    npx playwright install [options] [browser...]npx playwright install-deps [options] [browser...]npx playwright uninstall

#### Examples[​](#examples-2 "Direct link to Examples")

    # Install all browsersnpx playwright install# Install only Chromiumnpx playwright install chromium# Install specific browsersnpx playwright install chromium webkit# Install browsers with dependenciesnpx playwright install --with-deps

#### Install Options[​](#install-options "Direct link to Install Options")

Option

Description

`--force`

Force reinstall of stable browser channels

`--with-deps`

Install browser system dependencies

`--dry-run`

Don't perform installation, just print information

`--only-shell`

Only install chromium-headless-shell instead of full Chromium

`--no-shell`

Don't install chromium-headless-shell

#### Install Deps Options[​](#install-deps-options "Direct link to Install Deps Options")

Option

Description

`--dry-run`

Don't perform installation, just print information

Generation & Debugging Tools[​](#generation--debugging-tools "Direct link to Generation & Debugging Tools")
-----------------------------------------------------------------------------------------------------------

### Code Generation[​](#code-generation "Direct link to Code Generation")

Record actions and generate tests for multiple languages. [Read more about Codegen](/docs/codegen-intro).

#### Syntax[​](#syntax-3 "Direct link to Syntax")

    npx playwright codegen [options] [url]

#### Examples[​](#examples-3 "Direct link to Examples")

    # Start recording with interactive UInpx playwright codegen# Record on specific sitenpx playwright codegen https://playwright.dev# Generate Python codenpx playwright codegen --target=python

#### Options[​](#options-1 "Direct link to Options")

Option

Description

`-b, --browser <name>`

Browser to use: chromium, firefox, or webkit (default: chromium)

`-o, --output <file>`

Output file for the generated script

`--target <language>`

Language to use: javascript, playwright-test, python, etc.

`--test-id-attribute <attr>`

Attribute to use for test IDs

### Trace Viewer[​](#trace-viewer "Direct link to Trace Viewer")

Analyze and view test traces for debugging. [Read more about Trace Viewer](/docs/trace-viewer).

#### Syntax[​](#syntax-4 "Direct link to Syntax")

    npx playwright show-trace [options] [trace]

#### Examples[​](#examples-4 "Direct link to Examples")

    # Open trace viewer without a specific trace (can load traces via UI)npx playwright show-trace# View a trace filenpx playwright show-trace trace.zip# View trace from directorynpx playwright show-trace trace/

#### Options[​](#options-2 "Direct link to Options")

Option

Description

`-b, --browser <name>`

Browser to use: chromium, firefox, or webkit (default: chromium)

`-h, --host <host>`

Host to serve trace on

`-p, --port <port>`

Port to serve trace on

Specialized Commands[​](#specialized-commands "Direct link to Specialized Commands")
------------------------------------------------------------------------------------

### Merge Reports[​](#merge-reports "Direct link to Merge Reports")

Read [blob](/docs/test-reporters#blob-reporter) reports and combine them. [Read more about merge-reports](/docs/test-sharding).

#### Syntax[​](#syntax-5 "Direct link to Syntax")

    npx playwright merge-reports [options] <blob dir>

#### Examples[​](#examples-5 "Direct link to Examples")

    # Combine test reportsnpx playwright merge-reports ./reports

#### Options[​](#options-3 "Direct link to Options")

Option

Description

`-c, --config <file>`

Configuration file. Can be used to specify additional configuration for the output report

`--reporter <reporter>`

Reporter to use, comma-separated, can be "list", "line", "dot", "json", "junit", "null", "github", "html", "blob" (default: "list")

### Clear Cache[​](#clear-cache "Direct link to Clear Cache")

Clear all Playwright caches.

#### Syntax[​](#syntax-6 "Direct link to Syntax")

    npx playwright clear-cache

# Configuration

Configuration
=============

Introduction[​](#introduction "Direct link to Introduction")
------------------------------------------------------------

Playwright has many options to configure how your tests are run. You can specify these options in the configuration file. Note that test runner options are **top-level**, do not put them into the `use` section.

Basic Configuration[​](#basic-configuration "Direct link to Basic Configuration")
---------------------------------------------------------------------------------

Here are some of the most common configuration options.

    import { defineConfig, devices } from '@playwright/test';export default defineConfig({  // Look for test files in the "tests" directory, relative to this configuration file.  testDir: 'tests',  // Run all tests in parallel.  fullyParallel: true,  // Fail the build on CI if you accidentally left test.only in the source code.  forbidOnly: !!process.env.CI,  // Retry on CI only.  retries: process.env.CI ? 2 : 0,  // Opt out of parallel tests on CI.  workers: process.env.CI ? 1 : undefined,  // Reporter to use  reporter: 'html',  use: {    // Base URL to use in actions like `await page.goto('/')`.    baseURL: 'http://localhost:3000',    // Collect trace when retrying the failed test.    trace: 'on-first-retry',  },  // Configure projects for major browsers.  projects: [    {      name: 'chromium',      use: { ...devices['Desktop Chrome'] },    },  ],  // Run your local dev server before starting the tests.  webServer: {    command: 'npm run start',    url: 'http://localhost:3000',    reuseExistingServer: !process.env.CI,  },});

Option

Description

[testConfig.forbidOnly](/docs/api/class-testconfig#test-config-forbid-only)

Whether to exit with an error if any tests are marked as `test.only`. Useful on CI.

[testConfig.fullyParallel](/docs/api/class-testconfig#test-config-fully-parallel)

have all tests in all files to run in parallel. See [Parallelism](/docs/test-parallel) and [Sharding](/docs/test-sharding) for more details.

[testConfig.projects](/docs/api/class-testconfig#test-config-projects)

Run tests in multiple configurations or on multiple browsers

[testConfig.reporter](/docs/api/class-testconfig#test-config-reporter)

Reporter to use. See [Test Reporters](/docs/test-reporters) to learn more about which reporters are available.

[testConfig.retries](/docs/api/class-testconfig#test-config-retries)

The maximum number of retry attempts per test. See [Test Retries](/docs/test-retries) to learn more about retries.

[testConfig.testDir](/docs/api/class-testconfig#test-config-test-dir)

Directory with the test files.

[testConfig.use](/docs/api/class-testconfig#test-config-use)

Options with `use{}`

[testConfig.webServer](/docs/api/class-testconfig#test-config-web-server)

To launch a server during the tests, use the `webServer` option

[testConfig.workers](/docs/api/class-testconfig#test-config-workers)

The maximum number of concurrent worker processes to use for parallelizing tests. Can also be set as percentage of logical CPU cores, e.g. `'50%'.`. See [Parallelism](/docs/test-parallel) and [Sharding](/docs/test-sharding) for more details.

Filtering Tests[​](#filtering-tests "Direct link to Filtering Tests")
---------------------------------------------------------------------

Filter tests by glob patterns or regular expressions.

playwright.config.ts

    import { defineConfig } from '@playwright/test';export default defineConfig({  // Glob patterns or regular expressions to ignore test files.  testIgnore: '*test-assets',  // Glob patterns or regular expressions that match test files.  testMatch: '*todo-tests/*.spec.ts',});

Option

Description

[testConfig.testIgnore](/docs/api/class-testconfig#test-config-test-ignore)

Glob patterns or regular expressions that should be ignored when looking for the test files. For example, `'*test-assets'`

[testConfig.testMatch](/docs/api/class-testconfig#test-config-test-match)

Glob patterns or regular expressions that match test files. For example, `'*todo-tests/*.spec.ts'`. By default, Playwright runs `.*(test|spec).(js|ts|mjs)` files.

Advanced Configuration[​](#advanced-configuration "Direct link to Advanced Configuration")
------------------------------------------------------------------------------------------

playwright.config.ts

    import { defineConfig } from '@playwright/test';export default defineConfig({  // Folder for test artifacts such as screenshots, videos, traces, etc.  outputDir: 'test-results',  // path to the global setup files.  globalSetup: require.resolve('./global-setup'),  // path to the global teardown files.  globalTeardown: require.resolve('./global-teardown'),  // Each test is given 30 seconds.  timeout: 30000,});

Option

Description

[testConfig.globalSetup](/docs/api/class-testconfig#test-config-global-setup)

Path to the global setup file. This file will be required and run before all the tests. It must export a single function.

[testConfig.globalTeardown](/docs/api/class-testconfig#test-config-global-teardown)

Path to the global teardown file. This file will be required and run after all the tests. It must export a single function.

[testConfig.outputDir](/docs/api/class-testconfig#test-config-output-dir)

Folder for test artifacts such as screenshots, videos, traces, etc.

[testConfig.timeout](/docs/api/class-testconfig#test-config-timeout)

Playwright enforces a [timeout](/docs/test-timeouts) for each test, 30 seconds by default. Time spent by the test function, test fixtures and beforeEach hooks is included in the test timeout.

Expect Options[​](#expect-options "Direct link to Expect Options")
------------------------------------------------------------------

Configuration for the expect assertion library.

playwright.config.ts

    import { defineConfig } from '@playwright/test';export default defineConfig({  expect: {    // Maximum time expect() should wait for the condition to be met.    timeout: 5000,    toHaveScreenshot: {      // An acceptable amount of pixels that could be different, unset by default.      maxDiffPixels: 10,    },    toMatchSnapshot: {      // An acceptable ratio of pixels that are different to the      // total amount of pixels, between 0 and 1.      maxDiffPixelRatio: 0.1,    },  },});

Option

Description

[testConfig.expect](/docs/api/class-testconfig#test-config-expect)

[Web first assertions](/docs/test-assertions) like `expect(locator).toHaveText()` have a separate timeout of 5 seconds by default. This is the maximum time the `expect()` should wait for the condition to be met. Learn more about [test and expect timeouts](/docs/test-timeouts) and how to set them for a single test.

[expect(page).toHaveScreenshot()](/docs/api/class-pageassertions#page-assertions-to-have-screenshot-1)

Configuration for the `expect(locator).toHaveScreenshot()` method.

[expect(value).toMatchSnapshot()](/docs/api/class-snapshotassertions#snapshot-assertions-to-match-snapshot-1)

Configuration for the `expect(locator).toMatchSnapshot()` method.

# Configuration (use)

Configuration (use)
===================

Introduction[​](#introduction "Direct link to Introduction")
------------------------------------------------------------

In addition to configuring the test runner you can also configure [Emulation](#emulation-options), [Network](#network-options) and [Recording](#recording-options) for the [Browser](/docs/api/class-browser "Browser") or [BrowserContext](/docs/api/class-browsercontext "BrowserContext"). These options are passed to the `use: {}` object in the Playwright config.

### Basic Options[​](#basic-options "Direct link to Basic Options")

Set the base URL and storage state for all tests:

playwright.config.ts

    import { defineConfig } from '@playwright/test';export default defineConfig({  use: {    // Base URL to use in actions like `await page.goto('/')`.    baseURL: 'http://localhost:3000',    // Populates context with given storage state.    storageState: 'state.json',  },});

Option

Description

[testOptions.baseURL](/docs/api/class-testoptions#test-options-base-url)

Base URL used for all pages in the context. Allows navigating by using just the path, for example `page.goto('/settings')`.

[testOptions.storageState](/docs/api/class-testoptions#test-options-storage-state)

Populates context with given storage state. Useful for easy authentication, [learn more](/docs/auth).

### Emulation Options[​](#emulation-options "Direct link to Emulation Options")

With Playwright you can emulate a real device such as a mobile phone or tablet. See our [guide on projects](/docs/test-projects) for more info on emulating devices. You can also emulate the `"geolocation"`, `"locale"` and `"timezone"` for all tests or for a specific test as well as set the `"permissions"` to show notifications or change the `"colorScheme"`. See our [Emulation](/docs/emulation) guide to learn more.

playwright.config.ts

    import { defineConfig } from '@playwright/test';export default defineConfig({  use: {    // Emulates `'prefers-colors-scheme'` media feature.    colorScheme: 'dark',    // Context geolocation.    geolocation: { longitude: 12.492507, latitude: 41.889938 },    // Emulates the user locale.    locale: 'en-GB',    // Grants specified permissions to the browser context.    permissions: ['geolocation'],    // Emulates the user timezone.    timezoneId: 'Europe/Paris',    // Viewport used for all pages in the context.    viewport: { width: 1280, height: 720 },  },});

Option

Description

[testOptions.colorScheme](/docs/api/class-testoptions#test-options-color-scheme)

[Emulates](/docs/emulation#color-scheme-and-media) `'prefers-colors-scheme'` media feature, supported values are `'light'` and `'dark'`

[testOptions.geolocation](/docs/api/class-testoptions#test-options-geolocation)

Context [geolocation](/docs/emulation#geolocation).

[testOptions.locale](/docs/api/class-testoptions#test-options-locale)

[Emulates](/docs/emulation#locale--timezone) the user locale, for example `en-GB`, `de-DE`, etc.

[testOptions.permissions](/docs/api/class-testoptions#test-options-permissions)

A list of [permissions](/docs/emulation#permissions) to grant to all pages in the context.

[testOptions.timezoneId](/docs/api/class-testoptions#test-options-timezone-id)

Changes the [timezone](/docs/emulation#locale--timezone) of the context.

[testOptions.viewport](/docs/api/class-testoptions#test-options-viewport)

[Viewport](/docs/emulation#viewport) used for all pages in the context.

### Network Options[​](#network-options "Direct link to Network Options")

Available options to configure networking:

playwright.config.ts

    import { defineConfig } from '@playwright/test';export default defineConfig({  use: {    // Whether to automatically download all the attachments.    acceptDownloads: false,    // An object containing additional HTTP headers to be sent with every request.    extraHTTPHeaders: {      'X-My-Header': 'value',    },    // Credentials for HTTP authentication.    httpCredentials: {      username: 'user',      password: 'pass',    },    // Whether to ignore HTTPS errors during navigation.    ignoreHTTPSErrors: true,    // Whether to emulate network being offline.    offline: true,    // Proxy settings used for all pages in the test.    proxy: {      server: 'http://myproxy.com:3128',      bypass: 'localhost',    },  },});

Option

Description

[testOptions.acceptDownloads](/docs/api/class-testoptions#test-options-accept-downloads)

Whether to automatically download all the attachments, defaults to `true`. [Learn more](/docs/downloads) about working with downloads.

[testOptions.extraHTTPHeaders](/docs/api/class-testoptions#test-options-extra-http-headers)

An object containing additional HTTP headers to be sent with every request. All header values must be strings.

[testOptions.httpCredentials](/docs/api/class-testoptions#test-options-http-credentials)

Credentials for [HTTP authentication](/docs/network#http-authentication).

[testOptions.ignoreHTTPSErrors](/docs/api/class-testoptions#test-options-ignore-https-errors)

Whether to ignore HTTPS errors during navigation.

[testOptions.offline](/docs/api/class-testoptions#test-options-offline)

Whether to emulate network being offline.

[testOptions.proxy](/docs/api/class-testoptions#test-options-proxy)

[Proxy settings](/docs/network#http-proxy) used for all pages in the test.

note

You don't have to configure anything to mock network requests. Just define a custom [Route](/docs/api/class-route "Route") that mocks the network for a browser context. See our [network mocking guide](/docs/network) to learn more.

### Recording Options[​](#recording-options "Direct link to Recording Options")

With Playwright you can capture screenshots, record videos as well as traces of your test. By default these are turned off but you can enable them by setting the `screenshot`, `video` and `trace` options in your `playwright.config.js` file.

Trace files, screenshots and videos will appear in the test output directory, typically `test-results`.

playwright.config.ts

    import { defineConfig } from '@playwright/test';export default defineConfig({  use: {    // Capture screenshot after each test failure.    screenshot: 'only-on-failure',    // Record trace only when retrying a test for the first time.    trace: 'on-first-retry',    // Record video only when retrying a test for the first time.    video: 'on-first-retry'  },});

Option

Description

[testOptions.screenshot](/docs/api/class-testoptions#test-options-screenshot)

Capture [screenshots](/docs/screenshots) of your test. Options include `'off'`, `'on'` and `'only-on-failure'`

[testOptions.trace](/docs/api/class-testoptions#test-options-trace)

Playwright can produce test traces while running the tests. Later on, you can view the trace and get detailed information about Playwright execution by opening [Trace Viewer](/docs/trace-viewer). Options include: `'off'`, `'on'`, `'retain-on-failure'` and `'on-first-retry'`

[testOptions.video](/docs/api/class-testoptions#test-options-video)

Playwright can record [videos](/docs/videos) for your tests. Options include: `'off'`, `'on'`, `'retain-on-failure'` and `'on-first-retry'`

### Other Options[​](#other-options "Direct link to Other Options")

playwright.config.ts

    import { defineConfig } from '@playwright/test';export default defineConfig({  use: {    // Maximum time each action such as `click()` can take. Defaults to 0 (no limit).    actionTimeout: 0,    // Name of the browser that runs tests. For example `chromium`, `firefox`, `webkit`.    browserName: 'chromium',    // Toggles bypassing Content-Security-Policy.    bypassCSP: true,    // Channel to use, for example "chrome", "chrome-beta", "msedge", "msedge-beta".    channel: 'chrome',    // Run browser in headless mode.    headless: false,    // Change the default data-testid attribute.    testIdAttribute: 'pw-test-id',  },});

Option

Description

[testOptions.actionTimeout](/docs/api/class-testoptions#test-options-action-timeout)

Timeout for each Playwright action in milliseconds. Defaults to `0` (no timeout). Learn more about [timeouts](/docs/test-timeouts) and how to set them for a single test.

[testOptions.browserName](/docs/api/class-testoptions#test-options-browser-name)

Name of the browser that runs tests. Defaults to 'chromium'. Options include `chromium`, `firefox`, or `webkit`.

[testOptions.bypassCSP](/docs/api/class-testoptions#test-options-bypass-csp)

Toggles bypassing Content-Security-Policy. Useful when CSP includes the production origin. Defaults to `false`.

[testOptions.channel](/docs/api/class-testoptions#test-options-channel)

Browser channel to use. [Learn more](/docs/browsers) about different browsers and channels.

[testOptions.headless](/docs/api/class-testoptions#test-options-headless)

Whether to run the browser in headless mode meaning no browser is shown when running tests. Defaults to `true`.

[testOptions.testIdAttribute](/docs/api/class-testoptions#test-options-test-id-attribute)

Changes the default [`data-testid` attribute](/docs/locators#locate-by-test-id) used by Playwright locators.

### More browser and context options[​](#more-browser-and-context-options "Direct link to More browser and context options")

Any options accepted by [browserType.launch()](/docs/api/class-browsertype#browser-type-launch), [browser.newContext()](/docs/api/class-browser#browser-new-context) or [browserType.connect()](/docs/api/class-browsertype#browser-type-connect) can be put into `launchOptions`, `contextOptions` or `connectOptions` respectively in the `use` section.

playwright.config.ts

    import { defineConfig } from '@playwright/test';export default defineConfig({  use: {    launchOptions: {      slowMo: 50,    },  },});

However, most common ones like `headless` or `viewport` are available directly in the `use` section - see [basic options](#basic-options), [emulation](#emulation-options) or [network](#network-options).

### Explicit Context Creation and Option Inheritance[​](#explicit-context-creation-and-option-inheritance "Direct link to Explicit Context Creation and Option Inheritance")

If using the built-in `browser` fixture, calling [browser.newContext()](/docs/api/class-browser#browser-new-context) will create a context with options inherited from the config:

playwright.config.ts

    import { defineConfig } from '@playwright/test';export default defineConfig({  use: {    userAgent: 'some custom ua',    viewport: { width: 100, height: 100 },  },});

An example test illustrating the initial context options are set:

    test('should inherit use options on context when using built-in browser fixture', async ({  browser,}) => {  const context = await browser.newContext();  const page = await context.newPage();  expect(await page.evaluate(() => navigator.userAgent)).toBe('some custom ua');  expect(await page.evaluate(() => window.innerWidth)).toBe(100);  await context.close();});

### Configuration Scopes[​](#configuration-scopes "Direct link to Configuration Scopes")

You can configure Playwright globally, per project, or per test. For example, you can set the locale to be used globally by adding `locale` to the `use` option of the Playwright config, and then override it for a specific project using the `project` option in the config. You can also override it for a specific test by adding `test.use({})` in the test file and passing in the options.

playwright.config.ts

    import { defineConfig } from '@playwright/test';export default defineConfig({  use: {    locale: 'en-GB'  },});

You can override options for a specific project using the `project` option in the Playwright config.

    import { defineConfig, devices } from '@playwright/test';export default defineConfig({  projects: [    {      name: 'chromium',      use: {        ...devices['Desktop Chrome'],        locale: 'de-DE',      },    },  ],});

You can override options for a specific test file by using the `test.use()` method and passing in the options. For example to run tests with the French locale for a specific test:

    import { test, expect } from '@playwright/test';test.use({ locale: 'fr-FR' });test('example', async ({ page }) => {  // ...});

The same works inside a describe block. For example to run tests in a describe block with the French locale:

    import { test, expect } from '@playwright/test';test.describe('french language block', () => {  test.use({ locale: 'fr-FR' });  test('example', async ({ page }) => {    // ...  });});

### Reset an option[​](#reset-an-option "Direct link to Reset an option")

You can reset an option to the value defined in the config file. Consider the following config that sets a `baseURL`:

playwright.config.ts

    import { defineConfig } from '@playwright/test';export default defineConfig({  use: {    baseURL: 'https://playwright.dev',  },});

You can now configure `baseURL` for a file, and also opt-out for a single test.

intro.spec.ts

    import { test } from '@playwright/test';// Configure baseURL for this file.test.use({ baseURL: 'https://playwright.dev/docs/intro' });test('check intro contents', async ({ page }) => {  // This test will use "https://playwright.dev/docs/intro" base url as defined above.});test.describe(() => {  // Reset the value to a config-defined one.  test.use({ baseURL: undefined });  test('can navigate to intro from the home page', async ({ page }) => {    // This test will use "https://playwright.dev" base url as defined in the config.  });});

If you would like to completely reset the value to `undefined`, use a long-form fixture notation.

intro.spec.ts

    import { test } from '@playwright/test';// Completely unset baseURL for this file.test.use({  baseURL: [async ({}, use) => use(undefined), { scope: 'test' }],});test('no base url', async ({ page }) => {  // This test will not have a base url.});

# Emulation

Emulation
=========

Introduction[​](#introduction "Direct link to Introduction")
------------------------------------------------------------

With Playwright you can test your app on any browser as well as emulate a real device such as a mobile phone or tablet. Simply configure the devices you would like to emulate and Playwright will simulate the browser behavior such as `"userAgent"`, `"screenSize"`, `"viewport"` and if it `"hasTouch"` enabled. You can also emulate the `"geolocation"`, `"locale"` and `"timezone"` for all tests or for a specific test as well as set the `"permissions"` to show notifications or change the `"colorScheme"`.

Devices[​](#devices "Direct link to Devices")
---------------------------------------------

Playwright comes with a [registry of device parameters](https://github.com/microsoft/playwright/blob/main/packages/playwright-core/src/server/deviceDescriptorsSource.json) using [playwright.devices](/docs/api/class-playwright#playwright-devices) for selected desktop, tablet and mobile devices. It can be used to simulate browser behavior for a specific device such as user agent, screen size, viewport and if it has touch enabled. All tests will run with the specified device parameters.

*   Test
*   Library

playwright.config.ts

    import { defineConfig, devices } from '@playwright/test'; // import devicesexport default defineConfig({  projects: [    {      name: 'chromium',      use: {        ...devices['Desktop Chrome'],      },    },    {      name: 'Mobile Safari',      use: {        ...devices['iPhone 13'],      },    },  ],});

    const { chromium, devices } = require('playwright');const browser = await chromium.launch();const iphone13 = devices['iPhone 13'];const context = await browser.newContext({  ...iphone13,});

![playwright.dev website emulated for iPhone 13](https://user-images.githubusercontent.com/13063165/220411073-76fe59f9-9a2d-463d-8e30-c19a7deca133.png)

Viewport[​](#viewport "Direct link to Viewport")
------------------------------------------------

The viewport is included in the device but you can override it for some tests with [page.setViewportSize()](/docs/api/class-page#page-set-viewport-size).

*   Test
*   Library

playwright.config.ts

    import { defineConfig, devices } from '@playwright/test';export default defineConfig({  projects: [    {      name: 'chromium',      use: {        ...devices['Desktop Chrome'],        // It is important to define the `viewport` property after destructuring `devices`,        // since devices also define the `viewport` for that device.        viewport: { width: 1280, height: 720 },      },    },  ]});

    // Create context with given viewportconst context = await browser.newContext({  viewport: { width: 1280, height: 1024 }});

Test file:

*   Test
*   Library

tests/example.spec.ts

    import { test, expect } from '@playwright/test';test.use({  viewport: { width: 1600, height: 1200 },});test('my test', async ({ page }) => {  // ...});

    // Create context with given viewportconst context = await browser.newContext({  viewport: { width: 1280, height: 1024 }});// Resize viewport for individual pageawait page.setViewportSize({ width: 1600, height: 1200 });// Emulate high-DPIconst context = await browser.newContext({  viewport: { width: 2560, height: 1440 },  deviceScaleFactor: 2,});

The same works inside a test file.

*   Test
*   Library

tests/example.spec.ts

    import { test, expect } from '@playwright/test';test.describe('specific viewport block', () => {  test.use({ viewport: { width: 1600, height: 1200 } });  test('my test', async ({ page }) => {    // ...  });});

    // Create context with given viewportconst context = await browser.newContext({  viewport: { width: 1600, height: 1200 }});const page = await context.newPage();

isMobile[​](#ismobile "Direct link to isMobile")
------------------------------------------------

Whether the meta viewport tag is taken into account and touch events are enabled.

playwright.config.ts

    import { defineConfig, devices } from '@playwright/test';export default defineConfig({  projects: [    {      name: 'chromium',      use: {        ...devices['Desktop Chrome'],        // It is important to define the `isMobile` property after destructuring `devices`,        // since devices also define the `isMobile` for that device.        isMobile: false,      },    },  ]});

Locale & Timezone[​](#locale--timezone "Direct link to Locale & Timezone")
--------------------------------------------------------------------------

Emulate the browser Locale and Timezone which can be set globally for all tests in the config and then overridden for particular tests.

playwright.config.ts

    import { defineConfig } from '@playwright/test';export default defineConfig({  use: {    // Emulates the browser locale.    locale: 'en-GB',    // Emulates the browser timezone.    timezoneId: 'Europe/Paris',  },});

*   Test
*   Library

tests/example.spec.ts

    import { test, expect } from '@playwright/test';test.use({  locale: 'de-DE',  timezoneId: 'Europe/Berlin',});test('my test for de lang in Berlin timezone', async ({ page }) => {  await page.goto('https://www.bing.com');  // ...});

    const context = await browser.newContext({  locale: 'de-DE',  timezoneId: 'Europe/Berlin',});

![Bing in german lang and timezone](https://user-images.githubusercontent.com/13063165/220416571-ccc96ab1-44bb-4579-8430-64502fc24a15.png)

Note that this only affects the browser timezone and locale, not the test runner timezone. To set the test runner timezone, you can use the [`TZ` environment variable](https://nodejs.org/api/cli.html#tz).

Permissions[​](#permissions "Direct link to Permissions")
---------------------------------------------------------

Allow app to show system notifications.

*   Test
*   Library

playwright.config.ts

    import { defineConfig } from '@playwright/test';export default defineConfig({  use: {    // Grants specified permissions to the browser context.    permissions: ['notifications'],  },});

    const context = await browser.newContext({  permissions: ['notifications'],});

Allow notifications for a specific domain.

*   Test
*   Library

tests/example.spec.ts

    import { test } from '@playwright/test';test.beforeEach(async ({ context }) => {  // Runs before each test and signs in each page.  await context.grantPermissions(['notifications'], { origin: 'https://skype.com' });});test('first', async ({ page }) => {  // page has notifications permission for https://skype.com.});

    await context.grantPermissions(['notifications'], { origin: 'https://skype.com' });

Revoke all permissions with [browserContext.clearPermissions()](/docs/api/class-browsercontext#browser-context-clear-permissions).

    // Libraryawait context.clearPermissions();

Geolocation[​](#geolocation "Direct link to Geolocation")
---------------------------------------------------------

Grant `"geolocation"` permissions and set geolocation to a specific area.

playwright.config.ts

    import { defineConfig } from '@playwright/test';export default defineConfig({  use: {    // Context geolocation    geolocation: { longitude: 12.492507, latitude: 41.889938 },    permissions: ['geolocation'],  },});

*   Test
*   Library

tests/example.spec.ts

    import { test, expect } from '@playwright/test';test.use({  geolocation: { longitude: 41.890221, latitude: 12.492348 },  permissions: ['geolocation'],});test('my test with geolocation', async ({ page }) => {  // ...});

    const context = await browser.newContext({  geolocation: { longitude: 41.890221, latitude: 12.492348 },  permissions: ['geolocation']});

![geolocation for italy on bing maps](https://user-images.githubusercontent.com/13063165/220417670-bb22d815-f5cd-47c4-8562-0b88165eac27.png)

Change the location later:

*   Test
*   Library

tests/example.spec.ts

    import { test, expect } from '@playwright/test';test.use({  geolocation: { longitude: 41.890221, latitude: 12.492348 },  permissions: ['geolocation'],});test('my test with geolocation', async ({ page, context }) => {  // overwrite the location for this test  await context.setGeolocation({ longitude: 48.858455, latitude: 2.294474 });});

    await context.setGeolocation({ longitude: 48.858455, latitude: 2.294474 });

**Note** you can only change geolocation for all pages in the context.

Color Scheme and Media[​](#color-scheme-and-media "Direct link to Color Scheme and Media")
------------------------------------------------------------------------------------------

Emulate the users `"colorScheme"`. Supported values are 'light' and 'dark'. You can also emulate the media type with [page.emulateMedia()](/docs/api/class-page#page-emulate-media).

playwright.config.ts

    import { defineConfig } from '@playwright/test';export default defineConfig({  use: {    colorScheme: 'dark',  },});

*   Test
*   Library

tests/example.spec.ts

    import { test, expect } from '@playwright/test';test.use({  colorScheme: 'dark' // or 'light'});test('my test with dark mode', async ({ page }) => {  // ...});

    // Create context with dark modeconst context = await browser.newContext({  colorScheme: 'dark' // or 'light'});// Create page with dark modeconst page = await browser.newPage({  colorScheme: 'dark' // or 'light'});// Change color scheme for the pageawait page.emulateMedia({ colorScheme: 'dark' });// Change media for pageawait page.emulateMedia({ media: 'print' });

![playwright web in dark mode](https://user-images.githubusercontent.com/13063165/220411638-55d2b051-4678-4da7-9f0b-ed22f5a3c47c.png)

User Agent[​](#user-agent "Direct link to User Agent")
------------------------------------------------------

The User Agent is included in the device and therefore you will rarely need to change it however if you do need to test a different user agent you can override it with the `userAgent` property.

*   Test
*   Library

tests/example.spec.ts

    import { test, expect } from '@playwright/test';test.use({ userAgent: 'My user agent' });test('my user agent test', async ({ page }) => {  // ...});

    const context = await browser.newContext({  userAgent: 'My user agent'});

Offline[​](#offline "Direct link to Offline")
---------------------------------------------

Emulate the network being offline.

playwright.config.ts

    import { defineConfig } from '@playwright/test';export default defineConfig({  use: {    offline: true  },});

JavaScript Enabled[​](#javascript-enabled "Direct link to JavaScript Enabled")
------------------------------------------------------------------------------

Emulate a user scenario where JavaScript is disabled.

*   Test
*   Library

tests/example.spec.ts

    import { test, expect } from '@playwright/test';test.use({ javaScriptEnabled: false });test('test with no JavaScript', async ({ page }) => {  // ...});

    const context = await browser.newContext({  javaScriptEnabled: false});

# Fixtures

Fixtures
========

Introduction[​](#introduction "Direct link to Introduction")
------------------------------------------------------------

Playwright Test is based on the concept of test fixtures. Test fixtures are used to establish the environment for each test, giving the test everything it needs and nothing else. Test fixtures are isolated between tests. With fixtures, you can group tests based on their meaning, instead of their common setup.

### Built-in fixtures[​](#built-in-fixtures "Direct link to Built-in fixtures")

You have already used test fixtures in your first test.

    import { test, expect } from '@playwright/test';test('basic test', async ({ page }) => {  await page.goto('https://playwright.dev/');  await expect(page).toHaveTitle(/Playwright/);});

The `{ page }` argument tells Playwright Test to set up the `page` fixture and provide it to your test function.

Here is a list of the pre-defined fixtures that you are likely to use most of the time:

Fixture

Type

Description

page

[Page](/docs/api/class-page "Page")

Isolated page for this test run.

context

[BrowserContext](/docs/api/class-browsercontext "BrowserContext")

Isolated context for this test run. The `page` fixture belongs to this context as well. Learn how to [configure context](/docs/test-configuration).

browser

[Browser](/docs/api/class-browser "Browser")

Browsers are shared across tests to optimize resources. Learn how to [configure browsers](/docs/test-configuration).

browserName

[string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type "string")

The name of the browser currently running the test. Either `chromium`, `firefox` or `webkit`.

request

[APIRequestContext](/docs/api/class-apirequestcontext "APIRequestContext")

Isolated [APIRequestContext](/docs/api/class-apirequestcontext) instance for this test run.

### Without fixtures[​](#without-fixtures "Direct link to Without fixtures")

Here is how a typical test environment setup differs between the traditional test style and the fixture-based one.

`TodoPage` is a class that helps us interact with a "todo list" page of the web app, following the [Page Object Model](/docs/pom) pattern. It uses Playwright's `page` internally.

Click to expand the code for the `TodoPage`

todo-page.ts

    import type { Page, Locator } from '@playwright/test';export class TodoPage {  private readonly inputBox: Locator;  private readonly todoItems: Locator;  constructor(public readonly page: Page) {    this.inputBox = this.page.locator('input.new-todo');    this.todoItems = this.page.getByTestId('todo-item');  }  async goto() {    await this.page.goto('https://demo.playwright.dev/todomvc/');  }  async addToDo(text: string) {    await this.inputBox.fill(text);    await this.inputBox.press('Enter');  }  async remove(text: string) {    const todo = this.todoItems.filter({ hasText: text });    await todo.hover();    await todo.getByLabel('Delete').click();  }  async removeAll() {    while ((await this.todoItems.count()) > 0) {      await this.todoItems.first().hover();      await this.todoItems.getByLabel('Delete').first().click();    }  }}

todo.spec.ts

    const { test } = require('@playwright/test');const { TodoPage } = require('./todo-page');test.describe('todo tests', () => {  let todoPage;  test.beforeEach(async ({ page }) => {    todoPage = new TodoPage(page);    await todoPage.goto();    await todoPage.addToDo('item1');    await todoPage.addToDo('item2');  });  test.afterEach(async () => {    await todoPage.removeAll();  });  test('should add an item', async () => {    await todoPage.addToDo('my item');    // ...  });  test('should remove an item', async () => {    await todoPage.remove('item1');    // ...  });});

### With fixtures[​](#with-fixtures "Direct link to With fixtures")

Fixtures have a number of advantages over before/after hooks:

*   Fixtures **encapsulate** setup and teardown in the same place so it is easier to write. So if you have an after hook that tears down what was created in a before hook, consider turning them into a fixture.
*   Fixtures are **reusable** between test files - you can define them once and use them in all your tests. That's how Playwright's built-in `page` fixture works. So if you have a helper function that is used in multiple tests, consider turning it into a fixture.
*   Fixtures are **on-demand** - you can define as many fixtures as you'd like, and Playwright Test will setup only the ones needed by your test and nothing else.
*   Fixtures are **composable** - they can depend on each other to provide complex behaviors.
*   Fixtures are **flexible**. Tests can use any combination of fixtures to precisely tailor the environment to their needs, without affecting other tests.
*   Fixtures simplify **grouping**. You no longer need to wrap tests in `describe`s that set up their environment, and are free to group your tests by their meaning instead.

Click to expand the code for the `TodoPage`

todo-page.ts

    import type { Page, Locator } from '@playwright/test';export class TodoPage {  private readonly inputBox: Locator;  private readonly todoItems: Locator;  constructor(public readonly page: Page) {    this.inputBox = this.page.locator('input.new-todo');    this.todoItems = this.page.getByTestId('todo-item');  }  async goto() {    await this.page.goto('https://demo.playwright.dev/todomvc/');  }  async addToDo(text: string) {    await this.inputBox.fill(text);    await this.inputBox.press('Enter');  }  async remove(text: string) {    const todo = this.todoItems.filter({ hasText: text });    await todo.hover();    await todo.getByLabel('Delete').click();  }  async removeAll() {    while ((await this.todoItems.count()) > 0) {      await this.todoItems.first().hover();      await this.todoItems.getByLabel('Delete').first().click();    }  }}

example.spec.ts

    import { test as base } from '@playwright/test';import { TodoPage } from './todo-page';// Extend basic test by providing a "todoPage" fixture.const test = base.extend<{ todoPage: TodoPage }>({  todoPage: async ({ page }, use) => {    const todoPage = new TodoPage(page);    await todoPage.goto();    await todoPage.addToDo('item1');    await todoPage.addToDo('item2');    await use(todoPage);    await todoPage.removeAll();  },});test('should add an item', async ({ todoPage }) => {  await todoPage.addToDo('my item');  // ...});test('should remove an item', async ({ todoPage }) => {  await todoPage.remove('item1');  // ...});

Creating a fixture[​](#creating-a-fixture "Direct link to Creating a fixture")
------------------------------------------------------------------------------

To create your own fixture, use [test.extend()](/docs/api/class-test#test-extend) to create a new `test` object that will include it.

Below we create two fixtures `todoPage` and `settingsPage` that follow the [Page Object Model](/docs/pom) pattern.

Click to expand the code for the `TodoPage` and `SettingsPage`

todo-page.ts

    import type { Page, Locator } from '@playwright/test';export class TodoPage {  private readonly inputBox: Locator;  private readonly todoItems: Locator;  constructor(public readonly page: Page) {    this.inputBox = this.page.locator('input.new-todo');    this.todoItems = this.page.getByTestId('todo-item');  }  async goto() {    await this.page.goto('https://demo.playwright.dev/todomvc/');  }  async addToDo(text: string) {    await this.inputBox.fill(text);    await this.inputBox.press('Enter');  }  async remove(text: string) {    const todo = this.todoItems.filter({ hasText: text });    await todo.hover();    await todo.getByLabel('Delete').click();  }  async removeAll() {    while ((await this.todoItems.count()) > 0) {      await this.todoItems.first().hover();      await this.todoItems.getByLabel('Delete').first().click();    }  }}

SettingsPage is similar:

settings-page.ts

    import type { Page } from '@playwright/test';export class SettingsPage {  constructor(public readonly page: Page) {  }  async switchToDarkMode() {    // ...  }}

my-test.ts

    import { test as base } from '@playwright/test';import { TodoPage } from './todo-page';import { SettingsPage } from './settings-page';// Declare the types of your fixtures.type MyFixtures = {  todoPage: TodoPage;  settingsPage: SettingsPage;};// Extend base test by providing "todoPage" and "settingsPage".// This new "test" can be used in multiple test files, and each of them will get the fixtures.export const test = base.extend<MyFixtures>({  todoPage: async ({ page }, use) => {    // Set up the fixture.    const todoPage = new TodoPage(page);    await todoPage.goto();    await todoPage.addToDo('item1');    await todoPage.addToDo('item2');    // Use the fixture value in the test.    await use(todoPage);    // Clean up the fixture.    await todoPage.removeAll();  },  settingsPage: async ({ page }, use) => {    await use(new SettingsPage(page));  },});export { expect } from '@playwright/test';

note

Custom fixture names should start with a letter or underscore, and can contain only letters, numbers, and underscores.

Using a fixture[​](#using-a-fixture "Direct link to Using a fixture")
---------------------------------------------------------------------

Just mention a fixture in your test function argument, and the test runner will take care of it. Fixtures are also available in hooks and other fixtures. If you use TypeScript, fixtures will be type safe.

Below we use the `todoPage` and `settingsPage` fixtures that we defined above.

    import { test, expect } from './my-test';test.beforeEach(async ({ settingsPage }) => {  await settingsPage.switchToDarkMode();});test('basic test', async ({ todoPage, page }) => {  await todoPage.addToDo('something nice');  await expect(page.getByTestId('todo-title')).toContainText(['something nice']);});

Overriding fixtures[​](#overriding-fixtures "Direct link to Overriding fixtures")
---------------------------------------------------------------------------------

In addition to creating your own fixtures, you can also override existing fixtures to fit your needs. Consider the following example which overrides the `page` fixture by automatically navigating to the `baseURL`:

    import { test as base } from '@playwright/test';export const test = base.extend({  page: async ({ baseURL, page }, use) => {    await page.goto(baseURL);    await use(page);  },});

Notice that in this example, the `page` fixture is able to depend on other built-in fixtures such as [testOptions.baseURL](/docs/api/class-testoptions#test-options-base-url). We can now configure `baseURL` in the configuration file, or locally in the test file with [test.use()](/docs/api/class-test#test-use).

example.spec.ts

    test.use({ baseURL: 'https://playwright.dev' });

Fixtures can also be overridden, causing the base fixture to be completely replaced with something different. For example, we could override the [testOptions.storageState](/docs/api/class-testoptions#test-options-storage-state) fixture to provide our own data.

    import { test as base } from '@playwright/test';export const test = base.extend({  storageState: async ({}, use) => {    const cookie = await getAuthCookie();    await use({ cookies: [cookie] });  },});

Worker-scoped fixtures[​](#worker-scoped-fixtures "Direct link to Worker-scoped fixtures")
------------------------------------------------------------------------------------------

Playwright Test uses [worker processes](/docs/test-parallel) to run test files. Similar to how test fixtures are set up for individual test runs, worker fixtures are set up for each worker process. That's where you can set up services, run servers, etc. Playwright Test will reuse the worker process for as many test files as it can, provided their worker fixtures match and hence environments are identical.

Below we'll create an `account` fixture that will be shared by all tests in the same worker, and override the `page` fixture to log in to this account for each test. To generate unique accounts, we'll use the [workerInfo.workerIndex](/docs/api/class-workerinfo#worker-info-worker-index) that is available to any test or fixture. Note the tuple-like syntax for the worker fixture - we have to pass `{scope: 'worker'}` so that test runner sets this fixture up once per worker.

my-test.ts

    import { test as base } from '@playwright/test';type Account = {  username: string;  password: string;};// Note that we pass worker fixture types as a second template parameter.export const test = base.extend<{}, { account: Account }>({  account: [async ({ browser }, use, workerInfo) => {    // Unique username.    const username = 'user' + workerInfo.workerIndex;    const password = 'verysecure';    // Create the account with Playwright.    const page = await browser.newPage();    await page.goto('/signup');    await page.getByLabel('User Name').fill(username);    await page.getByLabel('Password').fill(password);    await page.getByText('Sign up').click();    // Make sure everything is ok.    await expect(page.getByTestId('result')).toHaveText('Success');    // Do not forget to cleanup.    await page.close();    // Use the account value.    await use({ username, password });  }, { scope: 'worker' }],  page: async ({ page, account }, use) => {    // Sign in with our account.    const { username, password } = account;    await page.goto('/signin');    await page.getByLabel('User Name').fill(username);    await page.getByLabel('Password').fill(password);    await page.getByText('Sign in').click();    await expect(page.getByTestId('userinfo')).toHaveText(username);    // Use signed-in page in the test.    await use(page);  },});export { expect } from '@playwright/test';

Automatic fixtures[​](#automatic-fixtures "Direct link to Automatic fixtures")
------------------------------------------------------------------------------

Automatic fixtures are set up for each test/worker, even when the test does not list them directly. To create an automatic fixture, use the tuple syntax and pass `{ auto: true }`.

Here is an example fixture that automatically attaches debug logs when the test fails, so we can later review the logs in the reporter. Note how it uses the [TestInfo](/docs/api/class-testinfo "TestInfo") object that is available in each test/fixture to retrieve metadata about the test being run.

my-test.ts

    import debug from 'debug';import fs from 'fs';import { test as base } from '@playwright/test';export const test = base.extend<{ saveLogs: void }>({  saveLogs: [async ({}, use, testInfo) => {    // Collecting logs during the test.    const logs = [];    debug.log = (...args) => logs.push(args.map(String).join(''));    debug.enable('myserver');    await use();    // After the test we can check whether the test passed or failed.    if (testInfo.status !== testInfo.expectedStatus) {      // outputPath() API guarantees a unique file name.      const logFile = testInfo.outputPath('logs.txt');      await fs.promises.writeFile(logFile, logs.join('\n'), 'utf8');      testInfo.attachments.push({ name: 'logs', contentType: 'text/plain', path: logFile });    }  }, { auto: true }],});export { expect } from '@playwright/test';

Fixture timeout[​](#fixture-timeout "Direct link to Fixture timeout")
---------------------------------------------------------------------

By default, the fixture inherits the timeout value of the test. However, for slow fixtures, especially [worker-scoped](#worker-scoped-fixtures) ones, it is convenient to have a separate timeout. This way you can keep the overall test timeout small, and give the slow fixture more time.

    import { test as base, expect } from '@playwright/test';const test = base.extend<{ slowFixture: string }>({  slowFixture: [async ({}, use) => {    // ... perform a slow operation ...    await use('hello');  }, { timeout: 60000 }]});test('example test', async ({ slowFixture }) => {  // ...});

Fixtures-options[​](#fixtures-options "Direct link to Fixtures-options")
------------------------------------------------------------------------

Playwright Test supports running multiple test projects that can be configured separately. You can use "option" fixtures to make your configuration options declarative and type safe. Learn more about [parameterizing tests](/docs/test-parameterize).

Below we'll create a `defaultItem` option in addition to the `todoPage` fixture from other examples. This option will be set in the configuration file. Note the tuple syntax and `{ option: true }` argument.

Click to expand the code for the `TodoPage`

todo-page.ts

    import type { Page, Locator } from '@playwright/test';export class TodoPage {  private readonly inputBox: Locator;  private readonly todoItems: Locator;  constructor(public readonly page: Page) {    this.inputBox = this.page.locator('input.new-todo');    this.todoItems = this.page.getByTestId('todo-item');  }  async goto() {    await this.page.goto('https://demo.playwright.dev/todomvc/');  }  async addToDo(text: string) {    await this.inputBox.fill(text);    await this.inputBox.press('Enter');  }  async remove(text: string) {    const todo = this.todoItems.filter({ hasText: text });    await todo.hover();    await todo.getByLabel('Delete').click();  }  async removeAll() {    while ((await this.todoItems.count()) > 0) {      await this.todoItems.first().hover();      await this.todoItems.getByLabel('Delete').first().click();    }  }}

my-test.ts

    import { test as base } from '@playwright/test';import { TodoPage } from './todo-page';// Declare your options to type-check your configuration.export type MyOptions = {  defaultItem: string;};type MyFixtures = {  todoPage: TodoPage;};// Specify both option and fixture types.export const test = base.extend<MyOptions & MyFixtures>({  // Define an option and provide a default value.  // We can later override it in the config.  defaultItem: ['Something nice', { option: true }],  // Our "todoPage" fixture depends on the option.  todoPage: async ({ page, defaultItem }, use) => {    const todoPage = new TodoPage(page);    await todoPage.goto();    await todoPage.addToDo(defaultItem);    await use(todoPage);    await todoPage.removeAll();  },});export { expect } from '@playwright/test';

We can now use the `todoPage` fixture as usual, and set the `defaultItem` option in the configuration file.

playwright.config.ts

    import { defineConfig } from '@playwright/test';import type { MyOptions } from './my-test';export default defineConfig<MyOptions>({  projects: [    {      name: 'shopping',      use: { defaultItem: 'Buy milk' },    },    {      name: 'wellbeing',      use: { defaultItem: 'Exercise!' },    },  ]});

**Array as an option value**

If the value of your option is an array, for example `[{ name: 'Alice' }, { name: 'Bob' }]`, you'll need to wrap it into an extra array when providing the value. This is best illustrated with an example.

    type Person = { name: string };const test = base.extend<{ persons: Person[] }>({  // Declare the option, default value is an empty array.  persons: [[], { option: true }],});// Option value is an array of persons.const actualPersons = [{ name: 'Alice' }, { name: 'Bob' }];test.use({  // CORRECT: Wrap the value into an array and pass the scope.  persons: [actualPersons, { scope: 'test' }],});test.use({  // WRONG: passing an array value directly will not work.  persons: actualPersons,});

**Reset an option**

You can reset an option to the value defined in the config file by setting it to `undefined`. Consider the following config that sets a `baseURL`:

playwright.config.ts

    import { defineConfig } from '@playwright/test';export default defineConfig({  use: {    baseURL: 'https://playwright.dev',  },});

You can now configure `baseURL` for a file, and also opt-out for a single test.

intro.spec.ts

    import { test } from '@playwright/test';// Configure baseURL for this file.test.use({ baseURL: 'https://playwright.dev/docs/intro' });test('check intro contents', async ({ page }) => {  // This test will use "https://playwright.dev/docs/intro" base url as defined above.});test.describe(() => {  // Reset the value to a config-defined one.  test.use({ baseURL: undefined });  test('can navigate to intro from the home page', async ({ page }) => {    // This test will use "https://playwright.dev" base url as defined in the config.  });});

If you would like to completely reset the value to `undefined`, use a long-form fixture notation.

intro.spec.ts

    import { test } from '@playwright/test';// Completely unset baseURL for this file.test.use({  baseURL: [async ({}, use) => use(undefined), { scope: 'test' }],});test('no base url', async ({ page }) => {  // This test will not have a base url.});

Execution order[​](#execution-order "Direct link to Execution order")
---------------------------------------------------------------------

Each fixture has a setup and teardown phase before and after the `await use()` call in the fixture. Setup is executed before the test/hook requiring it is run, and teardown is executed when the fixture is no longer being used by the test/hook.

Fixtures follow these rules to determine the execution order:

*   When fixture A depends on fixture B: B is always set up before A and torn down after A.
*   Non-automatic fixtures are executed lazily, only when the test/hook needs them.
*   Test-scoped fixtures are torn down after each test, while worker-scoped fixtures are only torn down when the worker process executing tests is torn down.

Consider the following example:

    import { test as base } from '@playwright/test';const test = base.extend<{  testFixture: string,  autoTestFixture: string,  unusedFixture: string,}, {  workerFixture: string,  autoWorkerFixture: string,}>({  workerFixture: [async ({ browser }) => {    // workerFixture setup...    await use('workerFixture');    // workerFixture teardown...  }, { scope: 'worker' }],  autoWorkerFixture: [async ({ browser }) => {    // autoWorkerFixture setup...    await use('autoWorkerFixture');    // autoWorkerFixture teardown...  }, { scope: 'worker', auto: true }],  testFixture: [async ({ page, workerFixture }) => {    // testFixture setup...    await use('testFixture');    // testFixture teardown...  }, { scope: 'test' }],  autoTestFixture: [async () => {    // autoTestFixture setup...    await use('autoTestFixture');    // autoTestFixture teardown...  }, { scope: 'test', auto: true }],  unusedFixture: [async ({ page }) => {    // unusedFixture setup...    await use('unusedFixture');    // unusedFixture teardown...  }, { scope: 'test' }],});test.beforeAll(async () => { /* ... */ });test.beforeEach(async ({ page }) => { /* ... */ });test('first test', async ({ page }) => { /* ... */ });test('second test', async ({ testFixture }) => { /* ... */ });test.afterEach(async () => { /* ... */ });test.afterAll(async () => { /* ... */ });

Normally, if all tests pass and no errors are thrown, the order of execution is as following.

*   worker setup and `beforeAll` section:
    *   `browser` setup because it is required by `autoWorkerFixture`.
    *   `autoWorkerFixture` setup because automatic worker fixtures are always set up before anything else.
    *   `beforeAll` runs.
*   `first test` section:
    *   `autoTestFixture` setup because automatic test fixtures are always set up before test and `beforeEach` hooks.
    *   `page` setup because it is required in `beforeEach` hook.
    *   `beforeEach` runs.
    *   `first test` runs.
    *   `afterEach` runs.
    *   `page` teardown because it is a test-scoped fixture and should be torn down after the test finishes.
    *   `autoTestFixture` teardown because it is a test-scoped fixture and should be torn down after the test finishes.
*   `second test` section:
    *   `autoTestFixture` setup because automatic test fixtures are always set up before test and `beforeEach` hooks.
    *   `page` setup because it is required in `beforeEach` hook.
    *   `beforeEach` runs.
    *   `workerFixture` setup because it is required by `testFixture` that is required by the `second test`.
    *   `testFixture` setup because it is required by the `second test`.
    *   `second test` runs.
    *   `afterEach` runs.
    *   `testFixture` teardown because it is a test-scoped fixture and should be torn down after the test finishes.
    *   `page` teardown because it is a test-scoped fixture and should be torn down after the test finishes.
    *   `autoTestFixture` teardown because it is a test-scoped fixture and should be torn down after the test finishes.
*   `afterAll` and worker teardown section:
    *   `afterAll` runs.
    *   `workerFixture` teardown because it is a workers-scoped fixture and should be torn down once at the end.
    *   `autoWorkerFixture` teardown because it is a workers-scoped fixture and should be torn down once at the end.
    *   `browser` teardown because it is a workers-scoped fixture and should be torn down once at the end.

A few observations:

*   `page` and `autoTestFixture` are set up and torn down for each test, as test-scoped fixtures.
*   `unusedFixture` is never set up because it is not used by any tests/hooks.
*   `testFixture` depends on `workerFixture` and triggers its setup.
*   `workerFixture` is lazily set up before the second test, but torn down once during worker shutdown, as a worker-scoped fixture.
*   `autoWorkerFixture` is set up for `beforeAll` hook, but `autoTestFixture` is not.

Combine custom fixtures from multiple modules[​](#combine-custom-fixtures-from-multiple-modules "Direct link to Combine custom fixtures from multiple modules")
---------------------------------------------------------------------------------------------------------------------------------------------------------------

You can merge test fixtures from multiple files or modules:

fixtures.ts

    import { mergeTests } from '@playwright/test';import { test as dbTest } from 'database-test-utils';import { test as a11yTest } from 'a11y-test-utils';export const test = mergeTests(dbTest, a11yTest);

test.spec.ts

    import { test } from './fixtures';test('passes', async ({ database, page, a11y }) => {  // use database and a11y fixtures.});

Box fixtures[​](#box-fixtures "Direct link to Box fixtures")
------------------------------------------------------------

Usually, custom fixtures are reported as separate steps in the UI mode, Trace Viewer and various test reports. They also appear in error messages from the test runner. For frequently used fixtures, this can mean lots of noise. You can stop the fixtures steps from being shown in the UI by "boxing" it.

    import { test as base } from '@playwright/test';export const test = base.extend({  helperFixture: [async ({}, use, testInfo) => {    // ...  }, { box: true }],});

This is useful for non-interesting helper fixtures. For example, an [automatic](/docs/test-fixtures#automatic-fixtures) fixture that sets up some common data can be safely hidden from a test report.

You can also mark the fixture as `box: 'self'` to only hide that particular fixture, but include all the steps inside the fixture in the test report.

Custom fixture title[​](#custom-fixture-title "Direct link to Custom fixture title")
------------------------------------------------------------------------------------

Instead of the usual fixture name, you can give fixtures a custom title that will be shown in test reports and error messages.

    import { test as base } from '@playwright/test';export const test = base.extend({  innerFixture: [async ({}, use, testInfo) => {    // ...  }, { title: 'my fixture' }],});

Adding global beforeEach/afterEach hooks[​](#adding-global-beforeeachaftereach-hooks "Direct link to Adding global beforeEach/afterEach hooks")
-----------------------------------------------------------------------------------------------------------------------------------------------

[test.beforeEach()](/docs/api/class-test#test-before-each) and [test.afterEach()](/docs/api/class-test#test-after-each) hooks run before/after each test declared in the same file and same [test.describe()](/docs/api/class-test#test-describe) block (if any). If you want to declare hooks that run before/after each test globally, you can declare them as auto fixtures like this:

fixtures.ts

    import { test as base } from '@playwright/test';export const test = base.extend<{ forEachTest: void }>({  forEachTest: [async ({ page }, use) => {    // This code runs before every test.    await page.goto('http://localhost:8000');    await use();    // This code runs after every test.    console.log('Last URL:', page.url());  }, { auto: true }],  // automatically starts for every test.});

And then import the fixtures in all your tests:

mytest.spec.ts

    import { test } from './fixtures';import { expect } from '@playwright/test';test('basic', async ({ page }) => {  expect(page).toHaveURL('http://localhost:8000');  await page.goto('https://playwright.dev');});

Adding global beforeAll/afterAll hooks[​](#adding-global-beforeallafterall-hooks "Direct link to Adding global beforeAll/afterAll hooks")
-----------------------------------------------------------------------------------------------------------------------------------------

[test.beforeAll()](/docs/api/class-test#test-before-all) and [test.afterAll()](/docs/api/class-test#test-after-all) hooks run before/after all tests declared in the same file and same [test.describe()](/docs/api/class-test#test-describe) block (if any), once per worker process. If you want to declare hooks that run before/after all tests in every file, you can declare them as auto fixtures with `scope: 'worker'` as follows:

fixtures.ts

    import { test as base } from '@playwright/test';export const test = base.extend<{}, { forEachWorker: void }>({  forEachWorker: [async ({}, use) => {    // This code runs before all the tests in the worker process.    console.log(`Starting test worker ${test.info().workerIndex}`);    await use();    // This code runs after all the tests in the worker process.    console.log(`Stopping test worker ${test.info().workerIndex}`);  }, { scope: 'worker', auto: true }],  // automatically starts for every worker.});

And then import the fixtures in all your tests:

mytest.spec.ts

    import { test } from './fixtures';import { expect } from '@playwright/test';test('basic', async ({ }) => {  // ...});

Note that the fixtures will still run once per [worker process](/docs/test-parallel#worker-processes), but you don't need to redeclare them in every file.

# Global setup and teardown

Global setup and teardown
=========================

Introduction[​](#introduction "Direct link to Introduction")
------------------------------------------------------------

There are two ways to configure global setup and teardown: using a global setup file and setting it in the config under [`globalSetup`](#option-2-configure-globalsetup-and-globalteardown) or using [project dependencies](#option-1-project-dependencies). With project dependencies, you define a project that runs before all other projects. This is the recommended approach, as it integrates better with the Playwright test runner: your HTML report will include the global setup, traces will be recorded, and fixtures can be used. For a detailed comparison of the two approaches, see the table below.

Feature

Project Dependencies (recommended)

`globalSetup` (config option)

Runs before all tests

✅ Yes

✅ Yes

HTML report visibility

✅ Shown as a separate project

❌ Not shown

Trace recording

✅ Full trace available

❌ Not supported

Playwright fixtures

✅ Fully supported

❌ Not supported

Browser management

✅ Via `browser` fixture

❌ Fully manual via `browserType.launch()`

Parallelism and retries

✅ Supported via standard config

❌ Not applicable

Config options like `headless` or `testIdAttribute`

✅ Automatically applied

❌ Ignored

Option 1: Project Dependencies[​](#option-1-project-dependencies "Direct link to Option 1: Project Dependencies")
-----------------------------------------------------------------------------------------------------------------

[Project dependencies](/docs/api/class-testproject#test-project-dependencies) are a list of projects that need to run before the tests in another project run. They can be useful for configuring the global setup actions so that one project depends on this running first. Using dependencies allows global setup to produce traces and other artifacts.

### Setup[​](#setup "Direct link to Setup")

First we add a new project with the name 'setup db'. We then give it a [testProject.testMatch](/docs/api/class-testproject#test-project-test-match) property in order to match the file called `global.setup.ts`:

playwright.config.ts

    import { defineConfig } from '@playwright/test';export default defineConfig({  testDir: './tests',  // ...  projects: [    {      name: 'setup db',      testMatch: /global\.setup\.ts/,    },    // {    //   other project    // }  ]});

Then we add the [testProject.dependencies](/docs/api/class-testproject#test-project-dependencies) property to our projects that depend on the setup project and pass into the array the name of our dependency project, which we defined in the previous step:

playwright.config.ts

    import { defineConfig, devices } from '@playwright/test';export default defineConfig({  testDir: './tests',  // ...  projects: [    {      name: 'setup db',      testMatch: /global\.setup\.ts/,    },    {      name: 'chromium with db',      use: { ...devices['Desktop Chrome'] },      dependencies: ['setup db'],    },  ]});

In this example the 'chromium with db' project depends on the 'setup db' project. We then create a setup test, stored at root level of your project (note that setup and teardown code must be defined as regular tests by calling [test()](/docs/api/class-test#test-call) function):

tests/global.setup.ts

    import { test as setup } from '@playwright/test';setup('create new database', async ({ }) => {  console.log('creating new database...');  // Initialize the database});

tests/menu.spec.ts

    import { test, expect } from '@playwright/test';test('menu', async ({ page }) => {  // Your test that depends on the database});

### Teardown[​](#teardown "Direct link to Teardown")

You can teardown your setup by adding a [testProject.teardown](/docs/api/class-testproject#test-project-teardown) property to your setup project. This will run after all dependent projects have run.

First we add the [testProject.teardown](/docs/api/class-testproject#test-project-teardown) property to our setup project with the name 'cleanup db' which is the name we gave to our teardown project in the previous step:

playwright.config.ts

    import { defineConfig } from '@playwright/test';export default defineConfig({  testDir: './tests',  // ...  projects: [    {      name: 'setup db',      testMatch: /global\.setup\.ts/,      teardown: 'cleanup db',    },    {      name: 'cleanup db',      testMatch: /global\.teardown\.ts/,    },    {      name: 'chromium',      use: { ...devices['Desktop Chrome'] },      dependencies: ['setup db'],    },  ]});

Then we create a `global.teardown.ts` file in the tests directory of your project. This will be used to delete the data from the database after all tests have run.

tests/global.teardown.ts

    import { test as teardown } from '@playwright/test';teardown('delete database', async ({ }) => {  console.log('deleting test database...');  // Delete the database});

### Test filtering[​](#test-filtering "Direct link to Test filtering")

All test filtering options, such as `--grep`/`--grep-invert`, `--shard`, filtering directly by location in the command line, or using [`test.only()`](/docs/api/class-test#test-only), directly select the primary tests to be run. If those tests belong to a project with dependencies, all tests from those dependencies will also run.

You can pass `--no-deps` command line option to ignore all dependencies and teardowns. Only your directly selected projects will run.

### More examples[​](#more-examples "Direct link to More examples")

For more detailed examples check out:

*   our [authentication](/docs/auth) guide
*   our blog post [A better global setup in Playwright reusing login with project dependencies](https://dev.to/playwright/a-better-global-setup-in-playwright-reusing-login-with-project-dependencies-14)
*   [v1.31 release video](https://youtu.be/PI50YAPTAs4) to see the demo

Option 2: Configure globalSetup and globalTeardown[​](#option-2-configure-globalsetup-and-globalteardown "Direct link to Option 2: Configure globalSetup and globalTeardown")
-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------

You can use the `globalSetup` option in the [configuration file](/docs/test-configuration#advanced-configuration) to set something up once before running all tests. The global setup file must export a single function that takes a config object. This function will be run once before all the tests.

Similarly, use `globalTeardown` to run something once after all the tests. Alternatively, let `globalSetup` return a function that will be used as a global teardown. You can pass data such as port number, authentication tokens, etc. from your global setup to your tests using environment variables.

note

Beware that `globalSetup` and `globalTeardown` lack some features — see the [intro](#introduction) section for a detailed comparison. Consider using [project dependencies](#option-1-project-dependencies) instead to get full feature support.

playwright.config.ts

    import { defineConfig } from '@playwright/test';export default defineConfig({  globalSetup: require.resolve('./global-setup'),  globalTeardown: require.resolve('./global-teardown'),});

### Example[​](#example "Direct link to Example")

Here is a global setup example that authenticates once and reuses authentication state in tests. It uses the `baseURL` and `storageState` options from the configuration file.

global-setup.ts

    import { chromium, type FullConfig } from '@playwright/test';async function globalSetup(config: FullConfig) {  const { baseURL, storageState } = config.projects[0].use;  const browser = await chromium.launch();  const page = await browser.newPage();  await page.goto(baseURL!);  await page.getByLabel('User Name').fill('user');  await page.getByLabel('Password').fill('password');  await page.getByText('Sign in').click();  await page.context().storageState({ path: storageState as string });  await browser.close();}export default globalSetup;

Specify `globalSetup`, `baseURL` and `storageState` in the configuration file.

playwright.config.ts

    import { defineConfig } from '@playwright/test';export default defineConfig({  globalSetup: require.resolve('./global-setup'),  use: {    baseURL: 'http://localhost:3000/',    storageState: 'state.json',  },});

Tests start already authenticated because we specify `storageState` that was populated by global setup.

    import { test } from '@playwright/test';test('test', async ({ page }) => {  await page.goto('/');  // You are signed in!});

You can make arbitrary data available in your tests from your global setup file by setting them as environment variables via `process.env`.

global-setup.ts

    import type { FullConfig } from '@playwright/test';async function globalSetup(config: FullConfig) {  process.env.FOO = 'some data';  // Or a more complicated data structure as JSON:  process.env.BAR = JSON.stringify({ some: 'data' });}export default globalSetup;

Tests have access to the `process.env` properties set in the global setup.

    import { test } from '@playwright/test';test('test', async ({ page }) => {  // environment variables which are set in globalSetup are only available inside test().  const { FOO, BAR } = process.env;  // FOO and BAR properties are populated.  expect(FOO).toEqual('some data');  const complexData = JSON.parse(BAR);  expect(BAR).toEqual({ some: 'data' });});

### Capturing trace of failures during global setup[​](#capturing-trace-of-failures-during-global-setup "Direct link to Capturing trace of failures during global setup")

In some instances, it may be useful to capture a trace of failures encountered during the global setup. In order to do this, you must [start tracing](/docs/api/class-tracing#tracing-start) in your setup, and you must ensure that you [stop tracing](/docs/api/class-tracing#tracing-stop) if an error occurs before that error is thrown. This can be achieved by wrapping your setup in a `try...catch` block. Here is an example that expands the global setup example to capture a trace.

global-setup.ts

    import { chromium, type FullConfig } from '@playwright/test';async function globalSetup(config: FullConfig) {  const { baseURL, storageState } = config.projects[0].use;  const browser = await chromium.launch();  const context = await browser.newContext();  const page = await context.newPage();  try {    await context.tracing.start({ screenshots: true, snapshots: true });    await page.goto(baseURL!);    await page.getByLabel('User Name').fill('user');    await page.getByLabel('Password').fill('password');    await page.getByText('Sign in').click();    await context.storageState({ path: storageState as string });    await context.tracing.stop({      path: './test-results/setup-trace.zip',    });    await browser.close();  } catch (error) {    await context.tracing.stop({      path: './test-results/failed-setup-trace.zip',    });    await browser.close();    throw error;  }}export default globalSetup;

# Parallelism

Parallelism
===========

Introduction[​](#introduction "Direct link to Introduction")
------------------------------------------------------------

Playwright Test runs tests in parallel. In order to achieve that, it runs several worker processes that run at the same time. By default, **test files** are run in parallel. Tests in a single file are run in order, in the same worker process.

*   You can configure tests using [`test.describe.configure`](#parallelize-tests-in-a-single-file) to run **tests in a single file** in parallel.
*   You can configure **entire project** to have all tests in all files to run in parallel using [testProject.fullyParallel](/docs/api/class-testproject#test-project-fully-parallel) or [testConfig.fullyParallel](/docs/api/class-testconfig#test-config-fully-parallel).
*   To **disable** parallelism limit the number of [workers to one](#disable-parallelism).

You can control the number of [parallel worker processes](#limit-workers) and [limit the number of failures](#limit-failures-and-fail-fast) in the whole test suite for efficiency.

Worker processes[​](#worker-processes "Direct link to Worker processes")
------------------------------------------------------------------------

All tests run in worker processes. These processes are OS processes, running independently, orchestrated by the test runner. All workers have identical environments and each starts its own browser.

You can't communicate between the workers. Playwright Test reuses a single worker as much as it can to make testing faster, so multiple test files are usually run in a single worker one after another.

Workers are always shutdown after a [test failure](/docs/test-retries#failures) to guarantee pristine environment for following tests.

Limit workers[​](#limit-workers "Direct link to Limit workers")
---------------------------------------------------------------

You can control the maximum number of parallel worker processes via [command line](/docs/test-cli) or in the [configuration file](/docs/test-configuration).

From the command line:

    npx playwright test --workers 4

In the configuration file:

playwright.config.ts

    import { defineConfig } from '@playwright/test';export default defineConfig({  // Limit the number of workers on CI, use default locally  workers: process.env.CI ? 2 : undefined,});

Disable parallelism[​](#disable-parallelism "Direct link to Disable parallelism")
---------------------------------------------------------------------------------

You can disable any parallelism by allowing just a single worker at any time. Either set `workers: 1` option in the configuration file or pass `--workers=1` to the command line.

    npx playwright test --workers=1

Parallelize tests in a single file[​](#parallelize-tests-in-a-single-file "Direct link to Parallelize tests in a single file")
------------------------------------------------------------------------------------------------------------------------------

By default, tests in a single file are run in order. If you have many independent tests in a single file, you might want to run them in parallel with [test.describe.configure()](/docs/api/class-test#test-describe-configure).

Note that parallel tests are executed in separate worker processes and cannot share any state or global variables. Each test executes all relevant hooks just for itself, including `beforeAll` and `afterAll`.

    import { test } from '@playwright/test';test.describe.configure({ mode: 'parallel' });test('runs in parallel 1', async ({ page }) => { /* ... */ });test('runs in parallel 2', async ({ page }) => { /* ... */ });

Alternatively, you can opt-in all tests into this fully-parallel mode in the configuration file:

playwright.config.ts

    import { defineConfig } from '@playwright/test';export default defineConfig({  fullyParallel: true,});

You can also opt in for fully-parallel mode for just a few projects:

playwright.config.ts

    import { defineConfig } from '@playwright/test';export default defineConfig({  // runs all tests in all files of a specific project in parallel  projects: [    {      name: 'chromium',      use: { ...devices['Desktop Chrome'] },      fullyParallel: true,    },  ]});

Serial mode[​](#serial-mode "Direct link to Serial mode")
---------------------------------------------------------

You can annotate inter-dependent tests as serial. If one of the serial tests fails, all subsequent tests are skipped. All tests in a group are retried together.

note

Using serial is not recommended. It is usually better to make your tests isolated, so they can be run independently.

    import { test, type Page } from '@playwright/test';// Annotate entire file as serial.test.describe.configure({ mode: 'serial' });let page: Page;test.beforeAll(async ({ browser }) => {  page = await browser.newPage();});test.afterAll(async () => {  await page.close();});test('runs first', async () => {  await page.goto('https://playwright.dev/');});test('runs second', async () => {  await page.getByText('Get Started').click();});

Opt out of fully parallel mode[​](#opt-out-of-fully-parallel-mode "Direct link to Opt out of fully parallel mode")
------------------------------------------------------------------------------------------------------------------

If your configuration applies parallel mode to all tests using [testConfig.fullyParallel](/docs/api/class-testconfig#test-config-fully-parallel), you might still want to run some tests with default settings. You can override the mode per describe:

    test.describe('runs in parallel with other describes', () => {  test.describe.configure({ mode: 'default' });  test('in order 1', async ({ page }) => {});  test('in order 2', async ({ page }) => {});});

Shard tests between multiple machines[​](#shard-tests-between-multiple-machines "Direct link to Shard tests between multiple machines")
---------------------------------------------------------------------------------------------------------------------------------------

Playwright Test can shard a test suite, so that it can be executed on multiple machines. See [sharding guide](/docs/test-sharding) for more details.

    npx playwright test --shard=2/3

Limit failures and fail fast[​](#limit-failures-and-fail-fast "Direct link to Limit failures and fail fast")
------------------------------------------------------------------------------------------------------------

You can limit the number of failed tests in the whole test suite by setting `maxFailures` config option or passing `--max-failures` command line flag.

When running with "max failures" set, Playwright Test will stop after reaching this number of failed tests and skip any tests that were not executed yet. This is useful to avoid wasting resources on broken test suites.

Passing command line option:

    npx playwright test --max-failures=10

Setting in the configuration file:

playwright.config.ts

    import { defineConfig } from '@playwright/test';export default defineConfig({  // Limit the number of failures on CI to save resources  maxFailures: process.env.CI ? 10 : undefined,});

Worker index and parallel index[​](#worker-index-and-parallel-index "Direct link to Worker index and parallel index")
---------------------------------------------------------------------------------------------------------------------

Each worker process is assigned two ids: a unique worker index that starts with 1, and a parallel index that is between `0` and `workers - 1`. When a worker is restarted, for example after a failure, the new worker process has the same `parallelIndex` and a new `workerIndex`.

You can read an index from environment variables `process.env.TEST_WORKER_INDEX` and `process.env.TEST_PARALLEL_INDEX`, or access them through [testInfo.workerIndex](/docs/api/class-testinfo#test-info-worker-index) and [testInfo.parallelIndex](/docs/api/class-testinfo#test-info-parallel-index).

### Isolate test data between parallel workers[​](#isolate-test-data-between-parallel-workers "Direct link to Isolate test data between parallel workers")

You can leverage `process.env.TEST_WORKER_INDEX` or [testInfo.workerIndex](/docs/api/class-testinfo#test-info-worker-index) mentioned above to isolate user data in the database between tests running on different workers. All tests run by the worker reuse the same user.

Create `playwright/fixtures.ts` file that will [create `dbUserName` fixture](/docs/test-fixtures#creating-a-fixture) and initialize a new user in the test database. Use [testInfo.workerIndex](/docs/api/class-testinfo#test-info-worker-index) to differentiate between workers.

playwright/fixtures.ts

    import { test as baseTest, expect } from '@playwright/test';// Import project utils for managing users in the test database.import { createUserInTestDatabase, deleteUserFromTestDatabase } from './my-db-utils';export * from '@playwright/test';export const test = baseTest.extend<{}, { dbUserName: string }>({  // Returns db user name unique for the worker.  dbUserName: [async ({ }, use) => {    // Use workerIndex as a unique identifier for each worker.    const userName = `user-${test.info().workerIndex}`;    // Initialize user in the database.    await createUserInTestDatabase(userName);    await use(userName);    // Clean up after the tests are done.    await deleteUserFromTestDatabase(userName);  }, { scope: 'worker' }],});

Now, each test file should import `test` from our fixtures file instead of `@playwright/test`.

tests/example.spec.ts

    // Important: import our fixtures.import { test, expect } from '../playwright/fixtures';test('test', async ({ dbUserName }) => {  // Use the user name in the test.});

Control test order[​](#control-test-order "Direct link to Control test order")
------------------------------------------------------------------------------

Playwright Test runs tests from a single file in the order of declaration, unless you [parallelize tests in a single file](#parallelize-tests-in-a-single-file).

There is no guarantee about the order of test execution across the files, because Playwright Test runs test files in parallel by default. However, if you [disable parallelism](#disable-parallelism), you can control test order by either naming your files in alphabetical order or using a "test list" file.

### Sort test files alphabetically[​](#sort-test-files-alphabetically "Direct link to Sort test files alphabetically")

When you **disable parallel test execution**, Playwright Test runs test files in alphabetical order. You can use some naming convention to control the test order, for example `001-user-signin-flow.spec.ts`, `002-create-new-document.spec.ts` and so on.

### Use a "test list" file[​](#use-a-test-list-file "Direct link to Use a \"test list\" file")

warning

Tests lists are discouraged and supported as a best-effort only. Some features such as VS Code Extension and tracing may not work properly with test lists.

You can put your tests in helper functions in multiple files. Consider the following example where tests are not defined directly in the file, but rather in a wrapper function.

feature-a.spec.ts

    import { test, expect } from '@playwright/test';export default function createTests() {  test('feature-a example test', async ({ page }) => {    // ... test goes here  });}

feature-b.spec.ts

    import { test, expect } from '@playwright/test';export default function createTests() {  test.use({ viewport: { width: 500, height: 500 } });  test('feature-b example test', async ({ page }) => {    // ... test goes here  });}

You can create a test list file that will control the order of tests - first run `feature-b` tests, then `feature-a` tests. Note how each test file is wrapped in a `test.describe()` block that calls the function where tests are defined. This way `test.use()` calls only affect tests from a single file.

test.list.ts

    import { test } from '@playwright/test';import featureBTests from './feature-b.spec.ts';import featureATests from './feature-a.spec.ts';test.describe(featureBTests);test.describe(featureATests);

Now **disable parallel execution** by setting workers to one, and specify your test list file.

playwright.config.ts

    import { defineConfig } from '@playwright/test';export default defineConfig({  workers: 1,  testMatch: 'test.list.ts',});

note

Do not define your tests directly in a helper file. This could lead to unexpected results because your tests are now dependent on the order of `import`/`require` statements. Instead, wrap tests in a function that will be explicitly called by a test list file, as in the example above.

# Parameterize tests

Parameterize tests
==================

Introduction[​](#introduction "Direct link to Introduction")
------------------------------------------------------------

You can either parameterize tests on a test level or on a project level.

Parameterized Tests[​](#parameterized-tests "Direct link to Parameterized Tests")
---------------------------------------------------------------------------------

example.spec.ts

    [  { name: 'Alice', expected: 'Hello, Alice!' },  { name: 'Bob', expected: 'Hello, Bob!' },  { name: 'Charlie', expected: 'Hello, Charlie!' },].forEach(({ name, expected }) => {  // You can also do it with test.describe() or with multiple tests as long the test name is unique.  test(`testing with ${name}`, async ({ page }) => {    await page.goto(`https://example.com/greet?name=${name}`);    await expect(page.getByRole('heading')).toHaveText(expected);  });});

### Before and after hooks[​](#before-and-after-hooks "Direct link to Before and after hooks")

Most of the time you should put `beforeEach`, `beforeAll`, `afterEach` and `afterAll` hooks outside of `forEach`, so that hooks are executed just once:

example.spec.ts

    test.beforeEach(async ({ page }) => {  // ...});test.afterEach(async ({ page }) => {  // ...});[  { name: 'Alice', expected: 'Hello, Alice!' },  { name: 'Bob', expected: 'Hello, Bob!' },  { name: 'Charlie', expected: 'Hello, Charlie!' },].forEach(({ name, expected }) => {  test(`testing with ${name}`, async ({ page }) => {    await page.goto(`https://example.com/greet?name=${name}`);    await expect(page.getByRole('heading')).toHaveText(expected);  });});

If you want to have hooks for each test, you can put them inside a `describe()` - so they are executed for each iteration / each individual test:

example.spec.ts

    [  { name: 'Alice', expected: 'Hello, Alice!' },  { name: 'Bob', expected: 'Hello, Bob!' },  { name: 'Charlie', expected: 'Hello, Charlie!' },].forEach(({ name, expected }) => {  test.describe(() => {    test.beforeEach(async ({ page }) => {      await page.goto(`https://example.com/greet?name=${name}`);    });    test(`testing with ${expected}`, async ({ page }) => {      await expect(page.getByRole('heading')).toHaveText(expected);    });  });});

Parameterized Projects[​](#parameterized-projects "Direct link to Parameterized Projects")
------------------------------------------------------------------------------------------

Playwright Test supports running multiple test projects at the same time. In the following example, we'll run two projects with different options.

We declare the option `person` and set the value in the config. The first project runs with the value `Alice` and the second with the value `Bob`.

*   TypeScript
*   JavaScript

my-test.ts

    import { test as base } from '@playwright/test';export type TestOptions = {  person: string;};export const test = base.extend<TestOptions>({  // Define an option and provide a default value.  // We can later override it in the config.  person: ['John', { option: true }],});

my-test.js

    const base = require('@playwright/test');exports.test = base.test.extend({  // Define an option and provide a default value.  // We can later override it in the config.  person: ['John', { option: true }],});

We can use this option in the test, similarly to [fixtures](/docs/test-fixtures).

example.spec.ts

    import { test } from './my-test';test('test 1', async ({ page, person }) => {  await page.goto(`/index.html`);  await expect(page.locator('#node')).toContainText(person);  // ...});

Now, we can run tests in multiple configurations by using projects.

*   TypeScript
*   JavaScript

playwright.config.ts

    import { defineConfig } from '@playwright/test';import type { TestOptions } from './my-test';export default defineConfig<TestOptions>({  projects: [    {      name: 'alice',      use: { person: 'Alice' },    },    {      name: 'bob',      use: { person: 'Bob' },    },  ]});

playwright.config.ts

    // @ts-checkmodule.exports = defineConfig({  projects: [    {      name: 'alice',      use: { person: 'Alice' },    },    {      name: 'bob',      use: { person: 'Bob' },    },  ]});

We can also use the option in a fixture. Learn more about [fixtures](/docs/test-fixtures).

*   TypeScript
*   JavaScript

my-test.ts

    import { test as base } from '@playwright/test';export type TestOptions = {  person: string;};export const test = base.extend<TestOptions>({  // Define an option and provide a default value.  // We can later override it in the config.  person: ['John', { option: true }],  // Override default "page" fixture.  page: async ({ page, person }, use) => {    await page.goto('/chat');    // We use "person" parameter as a "name" for the chat room.    await page.getByLabel('User Name').fill(person);    await page.getByText('Enter chat room').click();    // Each test will get a "page" that already has the person name.    await use(page);  },});

my-test.js

    const base = require('@playwright/test');exports.test = base.test.extend({  // Define an option and provide a default value.  // We can later override it in the config.  person: ['John', { option: true }],  // Override default "page" fixture.  page: async ({ page, person }, use) => {    await page.goto('/chat');    // We use "person" parameter as a "name" for the chat room.    await page.getByLabel('User Name').fill(person);    await page.getByText('Enter chat room').click();    // Each test will get a "page" that already has the person name.    await use(page);  },});

note

Parameterized projects behavior has changed in version 1.18. [Learn more](/docs/release-notes#breaking-change-custom-config-options).

Passing Environment Variables[​](#passing-environment-variables "Direct link to Passing Environment Variables")
---------------------------------------------------------------------------------------------------------------

You can use environment variables to configure tests from the command line.

For example, consider the following test file that needs a username and a password. It is usually a good idea not to store your secrets in the source code, so we'll need a way to pass secrets from outside.

example.spec.ts

    test(`example test`, async ({ page }) => {  // ...  await page.getByLabel('User Name').fill(process.env.USER_NAME);  await page.getByLabel('Password').fill(process.env.PASSWORD);});

You can run this test with your secret username and password set in the command line.

*   Bash
*   PowerShell
*   Batch

    USER_NAME=me PASSWORD=secret npx playwright test

    $env:USER_NAME=me$env:PASSWORD=secretnpx playwright test

    set USER_NAME=meset PASSWORD=secretnpx playwright test

Similarly, configuration file can also read environment variables passed through the command line.

playwright.config.ts

    import { defineConfig } from '@playwright/test';export default defineConfig({  use: {    baseURL: process.env.STAGING === '1' ? 'http://staging.example.test/' : 'http://example.test/',  }});

Now, you can run tests against a staging or a production environment:

*   Bash
*   PowerShell
*   Batch

    STAGING=1 npx playwright test

    $env:STAGING=1npx playwright test

    set STAGING=1npx playwright test

### .env files[​](#env-files "Direct link to .env files")

To make environment variables easier to manage, consider something like `.env` files. Here is an example that uses [`dotenv`](https://www.npmjs.com/package/dotenv) package to read environment variables directly in the configuration file.

playwright.config.ts

    import { defineConfig } from '@playwright/test';import dotenv from 'dotenv';import path from 'path';// Read from ".env" file.dotenv.config({ path: path.resolve(__dirname, '.env') });// Alternatively, read from "../my.env" file.dotenv.config({ path: path.resolve(__dirname, '..', 'my.env') });export default defineConfig({  use: {    baseURL: process.env.STAGING === '1' ? 'http://staging.example.test/' : 'http://example.test/',  }});

Now, you can just edit `.env` file to set any variables you'd like.

    # .env fileSTAGING=0USER_NAME=mePASSWORD=secret

Run tests as usual, your environment variables should be picked up.

    npx playwright test

Create tests via a CSV file[​](#create-tests-via-a-csv-file "Direct link to Create tests via a CSV file")
---------------------------------------------------------------------------------------------------------

The Playwright test-runner runs in Node.js, this means you can directly read files from the file system and parse them with your preferred CSV library.

See for example this CSV file, in our example `input.csv`:

    "test_case","some_value","some_other_value""value 1","value 11","foobar1""value 2","value 22","foobar21""value 3","value 33","foobar321""value 4","value 44","foobar4321"

Based on this we'll generate some tests by using the [csv-parse](https://www.npmjs.com/package/csv-parse) library from NPM:

test.spec.ts

    import fs from 'fs';import path from 'path';import { test } from '@playwright/test';import { parse } from 'csv-parse/sync';const records = parse(fs.readFileSync(path.join(__dirname, 'input.csv')), {  columns: true,  skip_empty_lines: true});for (const record of records) {  test(`foo: ${record.test_case}`, async ({ page }) => {    console.log(record.test_case, record.some_value, record.some_other_value);  });}

# Projects

Projects
========

Introduction[​](#introduction "Direct link to Introduction")
------------------------------------------------------------

A project is logical group of tests running with the same configuration. We use projects so we can run tests on different browsers and devices. Projects are configured in the `playwright.config.ts` file and once configured you can then run your tests on all projects or only on a specific project. You can also use projects to run the same tests in different configurations. For example, you can run the same tests in a logged-in and logged-out state.

By setting up projects you can also run a group of tests with different timeouts or retries or a group of tests against different environments such as staging and production, splitting tests per package/functionality and more.

Configure projects for multiple browsers[​](#configure-projects-for-multiple-browsers "Direct link to Configure projects for multiple browsers")
------------------------------------------------------------------------------------------------------------------------------------------------

By using **projects** you can run your tests in multiple browsers such as chromium, webkit and firefox as well as branded browsers such as Google Chrome and Microsoft Edge. Playwright can also run on emulated tablet and mobile devices. See the [registry of device parameters](https://github.com/microsoft/playwright/blob/main/packages/playwright-core/src/server/deviceDescriptorsSource.json) for a complete list of selected desktop, tablet and mobile devices.

    import { defineConfig, devices } from '@playwright/test';export default defineConfig({  projects: [    {      name: 'chromium',      use: { ...devices['Desktop Chrome'] },    },    {      name: 'firefox',      use: { ...devices['Desktop Firefox'] },    },    {      name: 'webkit',      use: { ...devices['Desktop Safari'] },    },    /* Test against mobile viewports. */    {      name: 'Mobile Chrome',      use: { ...devices['Pixel 5'] },    },    {      name: 'Mobile Safari',      use: { ...devices['iPhone 12'] },    },    /* Test against branded browsers. */    {      name: 'Microsoft Edge',      use: {        ...devices['Desktop Edge'],        channel: 'msedge'      },    },    {      name: 'Google Chrome',      use: {        ...devices['Desktop Chrome'],        channel: 'chrome'      },    },  ],});

Run projects[​](#run-projects "Direct link to Run projects")
------------------------------------------------------------

Playwright will run all projects by default.

    npx playwright testRunning 7 tests using 5 workers  ✓ [chromium] › example.spec.ts:3:1 › basic test (2s)  ✓ [firefox] › example.spec.ts:3:1 › basic test (2s)  ✓ [webkit] › example.spec.ts:3:1 › basic test (2s)  ✓ [Mobile Chrome] › example.spec.ts:3:1 › basic test (2s)  ✓ [Mobile Safari] › example.spec.ts:3:1 › basic test (2s)  ✓ [Microsoft Edge] › example.spec.ts:3:1 › basic test (2s)  ✓ [Google Chrome] › example.spec.ts:3:1 › basic test (2s)

Use the `--project` command line option to run a single project.

    npx playwright test --project=firefoxRunning 1 test using 1 worker  ✓ [firefox] › example.spec.ts:3:1 › basic test (2s)

The VS Code test runner runs your tests on the default browser of Chrome. To run on other/multiple browsers click the play button's dropdown from the testing sidebar and choose another profile or modify the default profile by clicking **Select Default Profile** and select the browsers you wish to run your tests on.

![selecting browsers](https://user-images.githubusercontent.com/13063165/221136731-9d4bc18f-38a4-4adb-997b-5b98c98aec7f.png)

Choose a specific profile, various profiles or all profiles to run tests on.

![choosing default profiles](https://user-images.githubusercontent.com/13063165/221669537-e5df8672-f50d-4ff1-96f9-141cd67e12f8.png)

Configure projects for multiple environments[​](#configure-projects-for-multiple-environments "Direct link to Configure projects for multiple environments")
------------------------------------------------------------------------------------------------------------------------------------------------------------

By setting up projects we can also run a group of tests with different timeouts or retries or run a group of tests against different environments. For example we can run our tests against a staging environment with 2 retries as well as against a production environment with 0 retries.

playwright.config.ts

    import { defineConfig } from '@playwright/test';export default defineConfig({  timeout: 60000, // Timeout is shared between all tests.  projects: [    {      name: 'staging',      use: {        baseURL: 'staging.example.com',      },      retries: 2,    },    {      name: 'production',      use: {        baseURL: 'production.example.com',      },      retries: 0,    },  ],});

Splitting tests into projects[​](#splitting-tests-into-projects "Direct link to Splitting tests into projects")
---------------------------------------------------------------------------------------------------------------

We can split tests into projects and use filters to run a subset of tests. For example, we can create a project that runs tests using a filter matching all tests with a specific file name. We can then have another group of tests that ignore specific test files.

Here is an example that defines a common timeout and two projects. The "Smoke" project runs a small subset of tests without retries, and "Default" project runs all other tests with retries.

playwright.config.ts

    import { defineConfig } from '@playwright/test';export default defineConfig({  timeout: 60000, // Timeout is shared between all tests.  projects: [    {      name: 'Smoke',      testMatch: /.*smoke.spec.ts/,      retries: 0,    },    {      name: 'Default',      testIgnore: /.*smoke.spec.ts/,      retries: 2,    },  ],});

Dependencies[​](#dependencies "Direct link to Dependencies")
------------------------------------------------------------

Dependencies are a list of projects that need to run before the tests in another project run. They can be useful for configuring the global setup actions so that one project depends on this running first. When using project dependencies, [test reporters](/docs/test-reporters) will show the setup tests and the [trace viewer](/docs/trace-viewer) will record traces of the setup. You can use the inspector to inspect the DOM snapshot of the trace of your setup tests and you can also use [fixtures](/docs/test-fixtures) inside your setup.

In this example the chromium, firefox and webkit projects depend on the setup project.

playwright.config.ts

    import { defineConfig, devices } from '@playwright/test';export default defineConfig({  projects: [    {      name: 'setup',      testMatch: '**/*.setup.ts',    },    {      name: 'chromium',      use: { ...devices['Desktop Chrome'] },      dependencies: ['setup'],    },    {      name: 'firefox',      use: { ...devices['Desktop Firefox'] },      dependencies: ['setup'],    },    {      name: 'webkit',      use: { ...devices['Desktop Safari'] },      dependencies: ['setup'],    },  ],});

### Running Sequence[​](#running-sequence "Direct link to Running Sequence")

When working with tests that have a dependency, the dependency will always run first and once all tests from this project have passed, then the other projects will run in parallel.

Running order:

1.  Tests in the 'setup' project run. Once all tests from this project have passed, then the tests from the dependent projects will start running.
    
2.  Tests in the 'chromium', 'webkit' and 'firefox' projects run together. By default, these projects will [run in parallel](/docs/test-parallel), subject to the maximum workers limit.
    

![chromium, webkit and firefox projects depend on setup project](https://user-images.githubusercontent.com/13063165/225937080-327b1e63-431f-40e0-90d7-35f21d7a92cb.jpg)

If there are more than one dependency then these project dependencies will be run first and in parallel. If the tests from a dependency fails then the tests that rely on this project will not be run.

Running order:

1.  Tests in the 'Browser Login' and 'DataBase' projects run in parallel:
    *   'Browser Login' passes
    *   ❌ 'DataBase' fails!
2.  The 'e2e tests' project is not run!

![Browser login project is blue, database is red and e2e tests relies on both](https://user-images.githubusercontent.com/13063165/225938262-33c1b78f-f092-4762-a478-7f8cbc1e3b21.jpg)

### Teardown[​](#teardown "Direct link to Teardown")

You can also teardown your setup by adding a [testProject.teardown](/docs/api/class-testproject#test-project-teardown) property to your setup project. Teardown will run after all dependent projects have run. See the [teardown guide](/docs/test-global-setup-teardown#teardown) for more information.

![global setup and teardown](https://github.com/microsoft/playwright/assets/13063165/dfcf10a9-f601-4d0c-bd8d-9490e6efbf7a)

### Test filtering[​](#test-filtering "Direct link to Test filtering")

All test filtering options, such as `--grep`/`--grep-invert`, `--shard`, filtering directly by location in the command line, or using [`test.only()`](/docs/api/class-test#test-only), directly select the primary tests to be run. If those tests belong to a project with dependencies, all tests from those dependencies will also run.

You can pass `--no-deps` command line option to ignore all dependencies and teardowns. Only your directly selected projects will run.

Custom project parameters[​](#custom-project-parameters "Direct link to Custom project parameters")
---------------------------------------------------------------------------------------------------

Projects can be also used to parametrize tests with your custom configuration - take a look at [this separate guide](/docs/test-parameterize#parameterized-projects).

# Reporters

Reporters
=========

Introduction[​](#introduction "Direct link to Introduction")
------------------------------------------------------------

Playwright Test comes with a few built-in reporters for different needs and ability to provide custom reporters. The easiest way to try out built-in reporters is to pass `--reporter` [command line option](/docs/test-cli).

    npx playwright test --reporter=line

For more control, you can specify reporters programmatically in the [configuration file](/docs/test-configuration).

playwright.config.ts

    import { defineConfig } from '@playwright/test';export default defineConfig({  reporter: 'line',});

### Multiple reporters[​](#multiple-reporters "Direct link to Multiple reporters")

You can use multiple reporters at the same time. For example you can use `'list'` for nice terminal output and `'json'` to get a comprehensive json file with the test results.

playwright.config.ts

    import { defineConfig } from '@playwright/test';export default defineConfig({  reporter: [    ['list'],    ['json', {  outputFile: 'test-results.json' }]  ],});

### Reporters on CI[​](#reporters-on-ci "Direct link to Reporters on CI")

You can use different reporters locally and on CI. For example, using concise `'dot'` reporter avoids too much output. This is the default on CI.

playwright.config.ts

    import { defineConfig } from '@playwright/test';export default defineConfig({  // Concise 'dot' for CI, default 'list' when running locally  reporter: process.env.CI ? 'dot' : 'list',});

Built-in reporters[​](#built-in-reporters "Direct link to Built-in reporters")
------------------------------------------------------------------------------

All built-in reporters show detailed information about failures, and mostly differ in verbosity for successful runs.

### List reporter[​](#list-reporter "Direct link to List reporter")

List reporter is default (except on CI where the `dot` reporter is default). It prints a line for each test being run.

    npx playwright test --reporter=list

playwright.config.ts

    import { defineConfig } from '@playwright/test';export default defineConfig({  reporter: 'list',});

Here is an example output in the middle of a test run. Failures will be listed at the end.

    npx playwright test --reporter=listRunning 124 tests using 6 workers 1  ✓ should access error in env (438ms) 2  ✓ handle long test names (515ms) 3  x 1) render expected (691ms) 4  ✓ should timeout (932ms) 5    should repeat each: 6  ✓ should respect enclosing .gitignore (569ms) 7    should teardown env after timeout: 8    should respect excluded tests: 9  ✓ should handle env beforeEach error (638ms)10    should respect enclosing .gitignore:

You can opt into the step rendering via passing the following config option:

playwright.config.ts

    import { defineConfig } from '@playwright/test';export default defineConfig({  reporter: [['list', { printSteps: true }]],});

List report supports the following configuration options and environment variables:

Environment Variable Name

Reporter Config Option

Description

Default

`PLAYWRIGHT_LIST_PRINT_STEPS`

`printSteps`

Whether to print each step on its own line.

`false`

`PLAYWRIGHT_FORCE_TTY`

Whether to produce output suitable for a live terminal. Supports `true`, `1`, `false`, `0`, `[WIDTH]`, and `[WIDTH]x[HEIGHT]`. `[WIDTH]` and `[WIDTH]x[HEIGHT]` specifies the TTY dimensions.

`true` when terminal is in TTY mode, `false` otherwise.

`FORCE_COLOR`

Whether to produce colored output.

`true` when terminal is in TTY mode, `false` otherwise.

### Line reporter[​](#line-reporter "Direct link to Line reporter")

Line reporter is more concise than the list reporter. It uses a single line to report last finished test, and prints failures when they occur. Line reporter is useful for large test suites where it shows the progress but does not spam the output by listing all the tests.

    npx playwright test --reporter=line

playwright.config.ts

    import { defineConfig } from '@playwright/test';export default defineConfig({  reporter: 'line',});

Here is an example output in the middle of a test run. Failures are reported inline.

    npx playwright test --reporter=lineRunning 124 tests using 6 workers  1) dot-reporter.spec.ts:20:1 › render expected ===================================================    Error: expect(received).toBe(expected) // Object.is equality    Expected: 1    Received: 0[23/124] gitignore.spec.ts - should respect nested .gitignore

Line report supports the following configuration options and environment variables:

Environment Variable Name

Reporter Config Option

Description

Default

`PLAYWRIGHT_FORCE_TTY`

Whether to produce output suitable for a live terminal. Supports `true`, `1`, `false`, `0`, `[WIDTH]`, and `[WIDTH]x[HEIGHT]`. `[WIDTH]` and `[WIDTH]x[HEIGHT]` specifies the TTY dimensions.

`true` when terminal is in TTY mode, `false` otherwise.

`FORCE_COLOR`

Whether to produce colored output.

`true` when terminal is in TTY mode, `false` otherwise.

### Dot reporter[​](#dot-reporter "Direct link to Dot reporter")

Dot reporter is very concise - it only produces a single character per successful test run. It is the default on CI and useful where you don't want a lot of output.

    npx playwright test --reporter=dot

playwright.config.ts

    import { defineConfig } from '@playwright/test';export default defineConfig({  reporter: 'dot',});

Here is an example output in the middle of a test run. Failures will be listed at the end.

    npx playwright test --reporter=dotRunning 124 tests using 6 workers······F·············································

One character is displayed for each test that has run, indicating its status:

Character

Description

`·`

Passed

`F`

Failed

`×`

Failed or timed out - and will be retried

`±`

Passed on retry (flaky)

`T`

Timed out

`°`

Skipped

Dot report supports the following configuration options and environment variables:

Environment Variable Name

Reporter Config Option

Description

Default

`PLAYWRIGHT_FORCE_TTY`

Whether to produce output suitable for a live terminal. Supports `true`, `1`, `false`, `0`, `[WIDTH]`, and `[WIDTH]x[HEIGHT]`. `[WIDTH]` and `[WIDTH]x[HEIGHT]` specifies the TTY dimensions.

`true` when terminal is in TTY mode, `false` otherwise.

`FORCE_COLOR`

Whether to produce colored output.

`true` when terminal is in TTY mode, `false` otherwise.

### HTML reporter[​](#html-reporter "Direct link to HTML reporter")

HTML reporter produces a self-contained folder that contains report for the test run that can be served as a web page.

    npx playwright test --reporter=html

By default, HTML report is opened automatically if some of the tests failed. You can control this behavior via the `open` property in the Playwright config or the `PLAYWRIGHT_HTML_OPEN` environmental variable. The possible values for that property are `always`, `never` and `on-failure` (default).

You can also configure `host` and `port` that are used to serve the HTML report.

playwright.config.ts

    import { defineConfig } from '@playwright/test';export default defineConfig({  reporter: [['html', { open: 'never' }]],});

By default, report is written into the `playwright-report` folder in the current working directory. One can override that location using the `PLAYWRIGHT_HTML_OUTPUT_DIR` environment variable or a reporter configuration.

In configuration file, pass options directly:

playwright.config.ts

    import { defineConfig } from '@playwright/test';export default defineConfig({  reporter: [['html', { outputFolder: 'my-report' }]],});

If you are uploading attachments from a data folder to another location, you can use `attachmentsBaseURL` option to let html report know where to look for them.

playwright.config.ts

    import { defineConfig } from '@playwright/test';export default defineConfig({  reporter: [['html', { attachmentsBaseURL: 'https://external-storage.com/' }]],});

A quick way of opening the last test run report is:

    npx playwright show-report

Or if there is a custom folder name:

    npx playwright show-report my-report

HTML report supports the following configuration options and environment variables:

Environment Variable Name

Reporter Config Option

Description

Default

`PLAYWRIGHT_HTML_TITLE`

`title`

A title to display in the generated report.

No title is displayed by default

`PLAYWRIGHT_HTML_OUTPUT_DIR`

`outputFolder`

Directory to save the report to.

`playwright-report`

`PLAYWRIGHT_HTML_OPEN`

`open`

When to open the html report in the browser, one of `'always'`, `'never'` or `'on-failure'`

`'on-failure'`

`PLAYWRIGHT_HTML_HOST`

`host`

When report opens in the browser, it will be served bound to this hostname.

`localhost`

`PLAYWRIGHT_HTML_PORT`

`port`

When report opens in the browser, it will be served on this port.

`9323` or any available port when `9323` is not available.

`PLAYWRIGHT_HTML_ATTACHMENTS_BASE_URL`

`attachmentsBaseURL`

A separate location where attachments from the `data` subdirectory are uploaded. Only needed when you upload report and `data` separately to different locations.

`data/`

`PLAYWRIGHT_HTML_NO_COPY_PROMPT`

`noCopyPrompt`

If true, disable rendering of the Copy prompt for errors. Supports `true`, `1`, `false`, and `0`.

`false`

`PLAYWRIGHT_HTML_NO_SNIPPETS`

`noSnippets`

If true, disable rendering code snippets in the action log. If there is a top level error, that report section with code snippet will still render. Supports `true`, `1`, `false`, and `0`.

`false`

### Blob reporter[​](#blob-reporter "Direct link to Blob reporter")

Blob reports contain all the details about the test run and can be used later to produce any other report. Their primary function is to facilitate the merging of reports from [sharded tests](/docs/test-sharding).

    npx playwright test --reporter=blob

By default, the report is written into the `blob-report` directory in the package.json directory or current working directory (if no package.json is found).

The report file name looks like `report-<hash>.zip` or `report-<hash>-<shard_number>.zip` when [sharding](/docs/test-sharding) is used. The hash is an optional value computed from `--grep`, `--grepInverted`, `--project`, [testConfig.tag](/docs/api/class-testconfig#test-config-tag) and file filters passed as command line arguments. The hash guarantees that running Playwright with different command line options will produce different but stable between runs report names. The output file name can be overridden in the configuration file or passed as `'PLAYWRIGHT_BLOB_OUTPUT_FILE'` environment variable.

*   Shards
*   Environments

When using blob report to merge multiple shards, you don't have to pass any options.

playwright.config.ts

    import { defineConfig } from '@playwright/test';export default defineConfig({  reporter: 'blob',});

When running tests in different environments, you might want to use [testConfig.tag](/docs/api/class-testconfig#test-config-tag) to add a global tag corresponding to the environment. This tag will bring clarity to the merged report, and it will be used to produce a unique blob report name.

playwright.config.ts

    import { defineConfig } from '@playwright/test';export default defineConfig({  reporter: 'blob',  tag: process.env.CI_ENVIRONMENT_NAME,  // for example "@APIv2" or "@linux"});

Blob report supports following configuration options and environment variables:

Environment Variable Name

Reporter Config Option

Description

Default

`PLAYWRIGHT_BLOB_OUTPUT_DIR`

`outputDir`

Directory to save the output. Existing content is deleted before writing the new report.

`blob-report`

`PLAYWRIGHT_BLOB_OUTPUT_NAME`

`fileName`

Report file name.

`report-<project>-<hash>-<shard_number>.zip`

`PLAYWRIGHT_BLOB_OUTPUT_FILE`

`outputFile`

Full path to the output file. If defined, `outputDir` and `fileName` will be ignored.

`undefined`

### JSON reporter[​](#json-reporter "Direct link to JSON reporter")

JSON reporter produces an object with all information about the test run.

Most likely you want to write the JSON to a file. When running with `--reporter=json`, use `PLAYWRIGHT_JSON_OUTPUT_NAME` environment variable:

*   Bash
*   PowerShell
*   Batch

    PLAYWRIGHT_JSON_OUTPUT_NAME=results.json npx playwright test --reporter=json

    $env:PLAYWRIGHT_JSON_OUTPUT_NAME="results.json"npx playwright test --reporter=json

    set PLAYWRIGHT_JSON_OUTPUT_NAME=results.jsonnpx playwright test --reporter=json

In configuration file, pass options directly:

playwright.config.ts

    import { defineConfig } from '@playwright/test';export default defineConfig({  reporter: [['json', { outputFile: 'results.json' }]],});

JSON report supports following configuration options and environment variables:

Environment Variable Name

Reporter Config Option

Description

Default

`PLAYWRIGHT_JSON_OUTPUT_DIR`

Directory to save the output file. Ignored if output file is specified.

`cwd` or config directory.

`PLAYWRIGHT_JSON_OUTPUT_NAME`

`outputFile`

Base file name for the output, relative to the output dir.

JSON report is printed to the stdout.

`PLAYWRIGHT_JSON_OUTPUT_FILE`

`outputFile`

Full path to the output file. If defined, `PLAYWRIGHT_JSON_OUTPUT_DIR` and `PLAYWRIGHT_JSON_OUTPUT_NAME` will be ignored.

JSON report is printed to the stdout.

### JUnit reporter[​](#junit-reporter "Direct link to JUnit reporter")

JUnit reporter produces a JUnit-style xml report.

Most likely you want to write the report to an xml file. When running with `--reporter=junit`, use `PLAYWRIGHT_JUNIT_OUTPUT_NAME` environment variable:

*   Bash
*   PowerShell
*   Batch

    PLAYWRIGHT_JUNIT_OUTPUT_NAME=results.xml npx playwright test --reporter=junit

    $env:PLAYWRIGHT_JUNIT_OUTPUT_NAME="results.xml"npx playwright test --reporter=junit

    set PLAYWRIGHT_JUNIT_OUTPUT_NAME=results.xmlnpx playwright test --reporter=junit

In configuration file, pass options directly:

playwright.config.ts

    import { defineConfig } from '@playwright/test';export default defineConfig({  reporter: [['junit', { outputFile: 'results.xml' }]],});

JUnit report supports following configuration options and environment variables:

Environment Variable Name

Reporter Config Option

Description

Default

`PLAYWRIGHT_JUNIT_OUTPUT_DIR`

Directory to save the output file. Ignored if output file is not specified.

`cwd` or config directory.

`PLAYWRIGHT_JUNIT_OUTPUT_NAME`

`outputFile`

Base file name for the output, relative to the output dir.

JUnit report is printed to the stdout.

`PLAYWRIGHT_JUNIT_OUTPUT_FILE`

`outputFile`

Full path to the output file. If defined, `PLAYWRIGHT_JUNIT_OUTPUT_DIR` and `PLAYWRIGHT_JUNIT_OUTPUT_NAME` will be ignored.

JUnit report is printed to the stdout.

`PLAYWRIGHT_JUNIT_STRIP_ANSI`

`stripANSIControlSequences`

Whether to remove ANSI control sequences from the text before writing it in the report.

By default output text is added as is.

`PLAYWRIGHT_JUNIT_INCLUDE_PROJECT_IN_TEST_NAME`

`includeProjectInTestName`

Whether to include Playwright project name in every test case as a name prefix.

By default not included.

`PLAYWRIGHT_JUNIT_SUITE_ID`

Value of the `id` attribute on the root `<testsuites/>` report entry.

Empty string.

`PLAYWRIGHT_JUNIT_SUITE_NAME`

Value of the `name` attribute on the root `<testsuites/>` report entry.

Empty string.

### GitHub Actions annotations[​](#github-actions-annotations "Direct link to GitHub Actions annotations")

You can use the built in `github` reporter to get automatic failure annotations when running in GitHub actions.

Note that all other reporters work on GitHub Actions as well, but do not provide annotations. Also, it is not recommended to use this annotation type if running your tests with a matrix strategy as the stack trace failures will multiply and obscure the GitHub file view.

playwright.config.ts

    import { defineConfig } from '@playwright/test';export default defineConfig({  // 'github' for GitHub Actions CI to generate annotations, plus a concise 'dot'  // default 'list' when running locally  reporter: process.env.CI ? 'github' : 'list',});

Custom reporters[​](#custom-reporters "Direct link to Custom reporters")
------------------------------------------------------------------------

You can create a custom reporter by implementing a class with some of the reporter methods. Learn more about the [Reporter](/docs/api/class-reporter "Reporter") API.

my-awesome-reporter.ts

    import type {  FullConfig, FullResult, Reporter, Suite, TestCase, TestResult} from '@playwright/test/reporter';class MyReporter implements Reporter {  onBegin(config: FullConfig, suite: Suite) {    console.log(`Starting the run with ${suite.allTests().length} tests`);  }  onTestBegin(test: TestCase, result: TestResult) {    console.log(`Starting test ${test.title}`);  }  onTestEnd(test: TestCase, result: TestResult) {    console.log(`Finished test ${test.title}: ${result.status}`);  }  onEnd(result: FullResult) {    console.log(`Finished the run: ${result.status}`);  }}export default MyReporter;

Now use this reporter with [testConfig.reporter](/docs/api/class-testconfig#test-config-reporter).

playwright.config.ts

    import { defineConfig } from '@playwright/test';export default defineConfig({  reporter: './my-awesome-reporter.ts',});

Or just pass the reporter file path as `--reporter` command line option:

    npx playwright test --reporter="./myreporter/my-awesome-reporter.ts"

Here's a short list of open source reporter implementations that you can take a look at when writing your own reporter:

*   [Allure Reporter](https://github.com/allure-framework/allure-js/tree/main/packages/allure-playwright)
*   [Github Actions Reporter](https://github.com/estruyf/playwright-github-actions-reporter)
*   [Mail Reporter](https://github.com/estruyf/playwright-mail-reporter)
*   [ReportPortal](https://github.com/reportportal/agent-js-playwright)
*   [Monocart](https://github.com/cenfun/monocart-reporter)

# Retries

Retries
=======

Introduction[​](#introduction "Direct link to Introduction")
------------------------------------------------------------

Test retries are a way to automatically re-run a test when it fails. This is useful when a test is flaky and fails intermittently. Test retries are configured in the [configuration file](/docs/test-configuration).

Failures[​](#failures "Direct link to Failures")
------------------------------------------------

Playwright Test runs tests in worker processes. These processes are OS processes, running independently, orchestrated by the test runner. All workers have identical environments and each starts its own browser.

Consider the following snippet:

    import { test } from '@playwright/test';test.describe('suite', () => {  test.beforeAll(async () => { /* ... */ });  test('first good', async ({ page }) => { /* ... */ });  test('second flaky', async ({ page }) => { /* ... */ });  test('third good', async ({ page }) => { /* ... */ });  test.afterAll(async () => { /* ... */ });});

When **all tests pass**, they will run in order in the same worker process.

*   Worker process starts
    *   `beforeAll` hook runs
    *   `first good` passes
    *   `second flaky` passes
    *   `third good` passes
    *   `afterAll` hook runs

Should **any test fail**, Playwright Test will discard the entire worker process along with the browser and will start a new one. Testing will continue in the new worker process starting with the next test.

*   Worker process #1 starts
    *   `beforeAll` hook runs
    *   `first good` passes
    *   `second flaky` fails
    *   `afterAll` hook runs
*   Worker process #2 starts
    *   `beforeAll` hook runs again
    *   `third good` passes
    *   `afterAll` hook runs

If you **enable [retries](#retries)**, second worker process will start by retrying the failed test and continue from there.

*   Worker process #1 starts
    *   `beforeAll` hook runs
    *   `first good` passes
    *   `second flaky` fails
    *   `afterAll` hook runs
*   Worker process #2 starts
    *   `beforeAll` hook runs again
    *   `second flaky` is retried and passes
    *   `third good` passes
    *   `afterAll` hook runs

This scheme works perfectly for independent tests and guarantees that failing tests can't affect healthy ones.

Retries[​](#retries "Direct link to Retries")
---------------------------------------------

Playwright supports **test retries**. When enabled, failing tests will be retried multiple times until they pass, or until the maximum number of retries is reached. By default failing tests are not retried.

    # Give failing tests 3 retry attemptsnpx playwright test --retries=3

You can configure retries in the configuration file:

playwright.config.ts

    import { defineConfig } from '@playwright/test';export default defineConfig({  // Give failing tests 3 retry attempts  retries: 3,});

Playwright Test will categorize tests as follows:

*   "passed" - tests that passed on the first run;
*   "flaky" - tests that failed on the first run, but passed when retried;
*   "failed" - tests that failed on the first run and failed all retries.

    Running 3 tests using 1 worker  ✓ example.spec.ts:4:2 › first passes (438ms)  x example.spec.ts:5:2 › second flaky (691ms)  ✓ example.spec.ts:5:2 › second flaky (522ms)  ✓ example.spec.ts:6:2 › third passes (932ms)  1 flaky    example.spec.ts:5:2 › second flaky  2 passed (4s)

You can detect retries at runtime with [testInfo.retry](/docs/api/class-testinfo#test-info-retry), which is accessible to any test, hook or fixture. Here is an example that clears some server-side state before a retry.

    import { test, expect } from '@playwright/test';test('my test', async ({ page }, testInfo) => {  if (testInfo.retry)    await cleanSomeCachesOnTheServer();  // ...});

You can specify retries for a specific group of tests or a single file with [test.describe.configure()](/docs/api/class-test#test-describe-configure).

    import { test, expect } from '@playwright/test';test.describe(() => {  // All tests in this describe group will get 2 retry attempts.  test.describe.configure({ retries: 2 });  test('test 1', async ({ page }) => {    // ...  });  test('test 2', async ({ page }) => {    // ...  });});

Serial mode[​](#serial-mode "Direct link to Serial mode")
---------------------------------------------------------

Use [test.describe.serial()](/docs/api/class-test#test-describe-serial) to group dependent tests to ensure they will always run together and in order. If one of the tests fails, all subsequent tests are skipped. All tests in the group are retried together.

Consider the following snippet that uses `test.describe.serial`:

    import { test } from '@playwright/test';test.describe.configure({ mode: 'serial' });test.beforeAll(async () => { /* ... */ });test('first good', async ({ page }) => { /* ... */ });test('second flaky', async ({ page }) => { /* ... */ });test('third good', async ({ page }) => { /* ... */ });

When running without [retries](#retries), all tests after the failure are skipped:

*   Worker process #1:
    *   `beforeAll` hook runs
    *   `first good` passes
    *   `second flaky` fails
    *   `third good` is skipped entirely

When running with [retries](#retries), all tests are retried together:

*   Worker process #1:
    *   `beforeAll` hook runs
    *   `first good` passes
    *   `second flaky` fails
    *   `third good` is skipped
*   Worker process #2:
    *   `beforeAll` hook runs again
    *   `first good` passes again
    *   `second flaky` passes
    *   `third good` passes

note

It is usually better to make your tests isolated, so they can be efficiently run and retried independently.

Reuse single page between tests[​](#reuse-single-page-between-tests "Direct link to Reuse single page between tests")
---------------------------------------------------------------------------------------------------------------------

Playwright Test creates an isolated [Page](/docs/api/class-page "Page") object for each test. However, if you'd like to reuse a single [Page](/docs/api/class-page "Page") object between multiple tests, you can create your own in [test.beforeAll()](/docs/api/class-test#test-before-all) and close it in [test.afterAll()](/docs/api/class-test#test-after-all).

*   TypeScript
*   JavaScript

example.spec.ts

    import { test, type Page } from '@playwright/test';test.describe.configure({ mode: 'serial' });let page: Page;test.beforeAll(async ({ browser }) => {  page = await browser.newPage();});test.afterAll(async () => {  await page.close();});test('runs first', async () => {  await page.goto('https://playwright.dev/');});test('runs second', async () => {  await page.getByText('Get Started').click();});

example.spec.js

    // @ts-checkconst { test } = require('@playwright/test');test.describe.configure({ mode: 'serial' });/** @type {import('@playwright/test').Page} */let page;test.beforeAll(async ({ browser }) => {  page = await browser.newPage();});test.afterAll(async () => {  await page.close();});test('runs first', async () => {  await page.goto('https://playwright.dev/');});test('runs second', async () => {  await page.getByText('Get Started').click();});

# Sharding

Sharding
========

Introduction[​](#introduction "Direct link to Introduction")
------------------------------------------------------------

By default, Playwright runs test files in [parallel](/docs/test-parallel) and strives for optimal utilization of CPU cores on your machine. In order to achieve even greater parallelisation, you can further scale Playwright test execution by running tests on multiple machines simultaneously. We call this mode of operation "sharding". Sharding in Playwright means splitting your tests into smaller parts called "shards". Each shard is like a separate job that can run independently. The whole purpose is to divide your tests to speed up test runtime.

When you shard your tests, each shard can run on its own, utilizing the available CPU cores. This helps speed up the testing process by doing tasks simultaneously.

In a CI pipeline, each shard can run as a separate job, making use of the hardware resources available in your CI pipeline, like CPU cores, to run tests faster.

Sharding tests between multiple machines[​](#sharding-tests-between-multiple-machines "Direct link to Sharding tests between multiple machines")
------------------------------------------------------------------------------------------------------------------------------------------------

To shard the test suite, pass `--shard=x/y` to the command line. For example, to split the suite into four shards, each running one fourth of the tests:

    npx playwright test --shard=1/4npx playwright test --shard=2/4npx playwright test --shard=3/4npx playwright test --shard=4/4

Now, if you run these shards in parallel on different jobs, your test suite completes four times faster.

Note that Playwright can only shard tests that can be run in parallel. By default, this means Playwright will shard test files. Learn about other options in the [parallelism guide](/docs/test-parallel).

Balancing Shards[​](#balancing-shards "Direct link to Balancing Shards")
------------------------------------------------------------------------

Sharding can be done at two levels of granularity depending on whether you use the [testProject.fullyParallel](/docs/api/class-testproject#test-project-fully-parallel) option or not. This affects how the tests are balanced across the shards.

**Sharding with fullyParallel**

When `fullyParallel: true` is enabled, Playwright Test runs individual tests in parallel across multiple shards, ensuring each shard receives an even distribution of tests. This allows for test-level granularity, meaning each shard will attempt to balance the number of individual tests it runs. This is the preferred mode for ensuring even load distribution when sharding, as Playwright can optimize shard execution based on the total number of tests.

**Sharding without fullyParallel**

Without the fullyParallel setting, Playwright Test defaults to file-level granularity, meaning entire test files are assigned to shards (note that the same file may be assigned to different shards across different projects). In this case, the number of tests per file can greatly influence shard distribution. If your test files are not evenly sized (i.e., some files contain many more tests than others), certain shards may end up running significantly more tests, while others may run fewer or even none.

**Key Takeaways:**

*   **With** `fullyParallel: true`: Tests are split at the individual test level, leading to more balanced shard execution.
*   **Without** `fullyParallel`: Tests are split at the file level, so to balance the shards, it's important to keep your test files small and evenly sized.
*   To ensure the most effective use of sharding, especially in CI environments, it is recommended to use `fullyParallel: true` when aiming for balanced distribution across shards. Otherwise, you may need to manually organize your test files to avoid imbalances.

Merging reports from multiple shards[​](#merging-reports-from-multiple-shards "Direct link to Merging reports from multiple shards")
------------------------------------------------------------------------------------------------------------------------------------

In the previous example, each test shard has its own test report. If you want to have a combined report showing all the test results from all the shards, you can merge them.

Start with adding `blob` reporter to the config when running on CI:

playwright.config.ts

    export default defineConfig({  testDir: './tests',  reporter: process.env.CI ? 'blob' : 'html',});

Blob report contains information about all the tests that were run and their results as well as all test attachments such as traces and screenshot diffs. Blob reports can be merged and converted to any other Playwright report. By default, blob report will be generated into `blob-report` directory. You can learn about [blob report options here](/docs/test-reporters#blob-reporter).

To merge reports from multiple shards, put the blob report files into a single directory, for example `all-blob-reports`. Blob report names contain shard number, so they will not clash.

Afterwards, run `npx playwright merge-reports` command:

    npx playwright merge-reports --reporter html ./all-blob-reports

This will produce a standard HTML report into `playwright-report` directory.

GitHub Actions example[​](#github-actions-example "Direct link to GitHub Actions example")
------------------------------------------------------------------------------------------

GitHub Actions supports [sharding tests between multiple jobs](https://docs.github.com/en/actions/using-jobs/using-a-matrix-for-your-jobs) using the [`jobs.<job_id>.strategy.matrix`](https://docs.github.com/en/actions/using-workflows/workflow-syntax-for-github-actions#jobsjob_idstrategymatrix) option. The `matrix` option will run a separate job for every possible combination of the provided options.

The following example shows you how to configure a job to run your tests on four machines in parallel and then merge the reports into a single report. Don't forget to add `reporter: process.env.CI ? 'blob' : 'html',` to your `playwright.config.ts` file as in the example above.

1.  First we add a `matrix` option to our job configuration with the `shardTotal: [4]` option containing the total number of shards we want to create and `shardIndex: [1, 2, 3, 4]` with an array of the shard numbers.
2.  Then we run our Playwright tests with the `--shard=${{ matrix.shardIndex }}/${{ matrix.shardTotal }}` option. This will run our test command for each shard.
3.  Finally we upload our blob report to the GitHub Actions Artifacts. This will make the blob report available to other jobs in the workflow.

.github/workflows/playwright.yml

    name: Playwright Testson:  push:    branches: [ main, master ]  pull_request:    branches: [ main, master ]jobs:  playwright-tests:    timeout-minutes: 60    runs-on: ubuntu-latest    strategy:      fail-fast: false      matrix:        shardIndex: [1, 2, 3, 4]        shardTotal: [4]    steps:    - uses: actions/checkout@v5    - uses: actions/setup-node@v5      with:        node-version: lts/*    - name: Install dependencies      run: npm ci    - name: Install Playwright browsers      run: npx playwright install --with-deps    - name: Run Playwright tests      run: npx playwright test --shard=${{ matrix.shardIndex }}/${{ matrix.shardTotal }}    - name: Upload blob report to GitHub Actions Artifacts      if: ${{ !cancelled() }}      uses: actions/upload-artifact@v4      with:        name: blob-report-${{ matrix.shardIndex }}        path: blob-report        retention-days: 1

1.  After all shards have completed, you can run a separate job that will merge the reports and produce a combined [HTML report](/docs/test-reporters#html-reporter). To ensure the execution order, we make the `merge-reports` job [depend](https://docs.github.com/en/actions/using-jobs/using-jobs-in-a-workflow#defining-prerequisite-jobs) on our sharded `playwright-tests` job by adding `needs: [playwright-tests]`.

.github/workflows/playwright.yml

    jobs:...  merge-reports:    # Merge reports after playwright-tests, even if some shards have failed    if: ${{ !cancelled() }}    needs: [playwright-tests]    runs-on: ubuntu-latest    steps:    - uses: actions/checkout@v5    - uses: actions/setup-node@v5      with:        node-version: lts/*    - name: Install dependencies      run: npm ci    - name: Download blob reports from GitHub Actions Artifacts      uses: actions/download-artifact@v5      with:        path: all-blob-reports        pattern: blob-report-*        merge-multiple: true    - name: Merge into HTML Report      run: npx playwright merge-reports --reporter html ./all-blob-reports    - name: Upload HTML report      uses: actions/upload-artifact@v4      with:        name: html-report--attempt-${{ github.run_attempt }}        path: playwright-report        retention-days: 14

You can now see the reports have been merged and a combined HTML report is available in the GitHub Actions Artifacts tab.

![image](https://github.com/microsoft/playwright/assets/9798949/b69dac59-fc19-4b98-8f49-814b1c29ca02)

Merging reports from multiple environments[​](#merging-reports-from-multiple-environments "Direct link to Merging reports from multiple environments")
------------------------------------------------------------------------------------------------------------------------------------------------------

If you want to run the same tests in multiple environments, as opposed to shard your tests onto multiple machines, you need to differentiate these enviroments.

In this case, it is useful to specify the [testConfig.tag](/docs/api/class-testconfig#test-config-tag) property, to tag all tests with the environment name. This tag will be automatically picked up by the blob report and later on by the merge tool.

playwright.config.ts

    import { defineConfig } from '@playwright/test';export default defineConfig({  reporter: process.env.CI ? 'blob' : 'html',  tag: process.env.CI_ENVIRONMENT_NAME,  // for example "@APIv2"});

Merge-reports CLI[​](#merge-reports-cli "Direct link to Merge-reports CLI")
---------------------------------------------------------------------------

`npx playwright merge-reports path/to/blob-reports-dir` reads all blob reports from the passed directory and merges them into a single report.

When merging reports from different OS'es you'll have to provide an explicit merge config to disambiguate which directory should be used as tests root.

Supported options:

*   `--reporter reporter-to-use`
    
    Which report to produce. Can be multiple reporters separated by comma.
    
    Example:
    
        npx playwright merge-reports --reporter=html,github ./blob-reports
    
*   `--config path/to/config/file`
    
    Specifies the Playwright configuration file with output reporters. Use this option to pass additional configuration to the output reporter. This configuration file can differ from the one used during the creation of blob reports.
    
    Example:
    
        npx playwright merge-reports --config=merge.config.ts ./blob-reports
    
    merge.config.ts
    
        export default {  testDir: 'e2e',  reporter: [['html', { open: 'never' }]],};

# Timeouts

Timeouts
========

Playwright Test has multiple configurable timeouts for various tasks.

Timeout

Default

Description

Test timeout

30\_000 ms

Timeout for each test  
Set in config  
`{ timeout: 60_000 }`  
Override in test  
`test.setTimeout(120_000)`

Expect timeout

5\_000 ms

Timeout for each assertion  
Set in config  
`{ expect: { timeout: 10_000 } }`  
Override in test  
`expect(locator).toBeVisible({ timeout: 10_000 })`

Test timeout[​](#test-timeout "Direct link to Test timeout")
------------------------------------------------------------

Playwright Test enforces a timeout for each test, 30 seconds by default. Time spent by the test function, fixture setups, and `beforeEach` hooks is included in the test timeout.

Timed out test produces the following error:

    example.spec.ts:3:1 › basic test ===========================Timeout of 30000ms exceeded.

Additional separate timeout, of the same value, is shared between fixture teardowns and `afterEach` hooks, after the test function has finished.

The same timeout value also applies to `beforeAll` and `afterAll` hooks, but they do not share time with any test.

### Set test timeout in the config[​](#set-test-timeout-in-the-config "Direct link to Set test timeout in the config")

playwright.config.ts

    import { defineConfig } from '@playwright/test';export default defineConfig({  timeout: 120_000,});

API reference: [testConfig.timeout](/docs/api/class-testconfig#test-config-timeout).

### Set timeout for a single test[​](#set-timeout-for-a-single-test "Direct link to Set timeout for a single test")

example.spec.ts

    import { test, expect } from '@playwright/test';test('slow test', async ({ page }) => {  test.slow(); // Easy way to triple the default timeout  // ...});test('very slow test', async ({ page }) => {  test.setTimeout(120_000);  // ...});

API reference: [test.setTimeout()](/docs/api/class-test#test-set-timeout) and [test.slow()](/docs/api/class-test#test-slow).

### Change timeout from a `beforeEach` hook[​](#change-timeout-from-a-beforeeach-hook "Direct link to change-timeout-from-a-beforeeach-hook")

example.spec.ts

    import { test, expect } from '@playwright/test';test.beforeEach(async ({ page }, testInfo) => {  // Extend timeout for all tests running this hook by 30 seconds.  testInfo.setTimeout(testInfo.timeout + 30_000);});

API reference: [testInfo.setTimeout()](/docs/api/class-testinfo#test-info-set-timeout).

### Change timeout for `beforeAll`/`afterAll` hook[​](#change-timeout-for-beforeallafterall-hook "Direct link to change-timeout-for-beforeallafterall-hook")

`beforeAll` and `afterAll` hooks have a separate timeout, by default equal to test timeout. You can change it separately for each hook by calling [testInfo.setTimeout()](/docs/api/class-testinfo#test-info-set-timeout) inside the hook.

example.spec.ts

    import { test, expect } from '@playwright/test';test.beforeAll(async () => {  // Set timeout for this hook.  test.setTimeout(60000);});

API reference: [testInfo.setTimeout()](/docs/api/class-testinfo#test-info-set-timeout).

Expect timeout[​](#expect-timeout "Direct link to Expect timeout")
------------------------------------------------------------------

Auto-retrying assertions like [expect(locator).toHaveText()](/docs/api/class-locatorassertions#locator-assertions-to-have-text) have a separate timeout, 5 seconds by default. Assertion timeout is unrelated to the test timeout. It produces the following error:

    example.spec.ts:3:1 › basic test ===========================Error: expect(received).toHaveText(expected)Expected string: "my text"Received string: ""Call log:  - expect.toHaveText with timeout 5000ms  - waiting for "locator('button')"

### Set expect timeout in the config[​](#set-expect-timeout-in-the-config "Direct link to Set expect timeout in the config")

playwright.config.ts

    import { defineConfig } from '@playwright/test';export default defineConfig({  expect: {    timeout: 10_000,  },});

API reference: [testConfig.expect](/docs/api/class-testconfig#test-config-expect).

### Specify expect timeout for a single assertion[​](#specify-expect-timeout-for-a-single-assertion "Direct link to Specify expect timeout for a single assertion")

example.spec.ts

    import { test, expect } from '@playwright/test';test('example', async ({ page }) => {  await expect(locator).toHaveText('hello', { timeout: 10_000 });});

Global timeout[​](#global-timeout "Direct link to Global timeout")
------------------------------------------------------------------

Playwright Test supports a timeout for the whole test run. This prevents excess resource usage when everything went wrong. There is no default global timeout, but you can set a reasonable one in the config, for example one hour. Global timeout produces the following error:

    Running 1000 tests using 10 workers  514 skipped  486 passed  Timed out waiting 3600s for the entire test run

You can set global timeout in the config.

playwright.config.ts

    import { defineConfig } from '@playwright/test';export default defineConfig({  globalTimeout: 3_600_000,});

API reference: [testConfig.globalTimeout](/docs/api/class-testconfig#test-config-global-timeout).

Advanced: low level timeouts[​](#advanced-low-level-timeouts "Direct link to Advanced: low level timeouts")
-----------------------------------------------------------------------------------------------------------

These are the low-level timeouts that are pre-configured by the test runner, you should not need to change these. If you happen to be in this section because your test are flaky, it is very likely that you should be looking for the solution elsewhere.

Timeout

Default

Description

Action timeout

no timeout

Timeout for each action  
Set in config  
`{ use: { actionTimeout: 10_000 } }`  
Override in test  
`locator.click({ timeout: 10_000 })`

Navigation timeout

no timeout

Timeout for each navigation action  
Set in config  
`{ use: { navigationTimeout: 30_000 } }`  
Override in test  
`page.goto('/', { timeout: 30_000 })`

Global timeout

no timeout

Global timeout for the whole test run  
Set in config  
`{ globalTimeout: 3_600_000 }`  

`beforeAll`/`afterAll` timeout

30\_000 ms

Timeout for the hook  
Set in hook  
`test.setTimeout(60_000)`  

Fixture timeout

no timeout

Timeout for an individual fixture  
Set in fixture  
`{ scope: 'test', timeout: 30_000 }`  

### Set action and navigation timeouts in the config[​](#set-action-and-navigation-timeouts-in-the-config "Direct link to Set action and navigation timeouts in the config")

playwright.config.ts

    import { defineConfig } from '@playwright/test';export default defineConfig({  use: {    actionTimeout: 10 * 1000,    navigationTimeout: 30 * 1000,  },});

API reference: [testOptions.actionTimeout](/docs/api/class-testoptions#test-options-action-timeout) and [testOptions.navigationTimeout](/docs/api/class-testoptions#test-options-navigation-timeout).

### Set timeout for a single action[​](#set-timeout-for-a-single-action "Direct link to Set timeout for a single action")

example.spec.ts

    import { test, expect } from '@playwright/test';test('basic test', async ({ page }) => {  await page.goto('https://playwright.dev', { timeout: 30000 });  await page.getByText('Get Started').click({ timeout: 10000 });});

Fixture timeout[​](#fixture-timeout "Direct link to Fixture timeout")
---------------------------------------------------------------------

By default, [fixture](/docs/test-fixtures) shares timeout with the test. However, for slow fixtures, especially [worker-scoped](/docs/test-fixtures#worker-scoped-fixtures) ones, it is convenient to have a separate timeout. This way you can keep the overall test timeout small, and give the slow fixture more time.

example.spec.ts

    import { test as base, expect } from '@playwright/test';const test = base.extend<{ slowFixture: string }>({  slowFixture: [async ({}, use) => {    // ... perform a slow operation ...    await use('hello');  }, { timeout: 60_000 }]});test('example test', async ({ slowFixture }) => {  // ...});

API reference: [test.extend()](/docs/api/class-test#test-extend).

# TypeScript

TypeScript
==========

Introduction[​](#introduction "Direct link to Introduction")
------------------------------------------------------------

Playwright supports TypeScript out of the box. You just write tests in TypeScript, and Playwright will read them, transform to JavaScript and run.

Note that Playwright does not check the types and will run tests even if there are non-critical TypeScript compilation errors. We recommend you run TypeScript compiler alongside Playwright. For example on GitHub actions:

    jobs:  test:    runs-on: ubuntu-latest    steps:    ...    - name: Run type checks      run: npx tsc -p tsconfig.json --noEmit    - name: Run Playwright tests      run: npx playwright test

For local development, you can run `tsc` in [watch](https://www.typescriptlang.org/docs/handbook/configuring-watch.html) mode like this:

    npx tsc -p tsconfig.json --noEmit -w

tsconfig.json[​](#tsconfigjson "Direct link to tsconfig.json")
--------------------------------------------------------------

Playwright will pick up `tsconfig.json` for each source file it loads. Note that Playwright **only supports** the following tsconfig options: `allowJs`, `baseUrl`, `paths` and `references`.

We recommend setting up a separate `tsconfig.json` in the tests directory so that you can change some preferences specifically for the tests. Here is an example directory structure.

    src/    source.tstests/    tsconfig.json  # test-specific tsconfig    example.spec.tstsconfig.json  # generic tsconfig for all typescript sourcesplaywright.config.ts

### tsconfig path mapping[​](#tsconfig-path-mapping "Direct link to tsconfig path mapping")

Playwright supports [path mapping](https://www.typescriptlang.org/docs/handbook/module-resolution.html#path-mapping) declared in the `tsconfig.json`. Make sure that `baseUrl` is also set.

Here is an example `tsconfig.json` that works with Playwright:

tsconfig.json

    {  "compilerOptions": {    "baseUrl": ".",    "paths": {      "@myhelper/*": ["packages/myhelper/*"] // This mapping is relative to "baseUrl".    }  }}

You can now import using the mapped paths:

example.spec.ts

    import { test, expect } from '@playwright/test';import { username, password } from '@myhelper/credentials';test('example', async ({ page }) => {  await page.getByLabel('User Name').fill(username);  await page.getByLabel('Password').fill(password);});

### tsconfig resolution[​](#tsconfig-resolution "Direct link to tsconfig resolution")

By default, Playwright will look up a closest tsconfig for each imported file by going up the directory structure and looking for `tsconfig.json` or `jsconfig.json`. This way, you can create a `tests/tsconfig.json` file that will be used only for your tests and Playwright will pick it up automatically.

    # Playwright will choose tsconfig automaticallynpx playwright test

Alternatively, you can specify a single tsconfig file to use in the command line, and Playwright will use it for all imported files, not only test files.

    # Pass a specific tsconfignpx playwright test --tsconfig=tsconfig.test.json

You can specify a single tsconfig file in the config file, that will be used for loading test files, reporters, etc. However, it will not be used while loading the playwright config itself or any files imported from it.

playwright.config.ts

    import { defineConfig } from '@playwright/test';export default defineConfig({  tsconfig: './tsconfig.test.json',});

Manually compile tests with TypeScript[​](#manually-compile-tests-with-typescript "Direct link to Manually compile tests with TypeScript")
------------------------------------------------------------------------------------------------------------------------------------------

Sometimes, Playwright Test will not be able to transform your TypeScript code correctly, for example when you are using experimental or very recent features of TypeScript, usually configured in `tsconfig.json`.

In this case, you can perform your own TypeScript compilation before sending the tests to Playwright.

First add a `tsconfig.json` file inside the tests directory:

    {    "compilerOptions": {        "target": "ESNext",        "module": "commonjs",        "moduleResolution": "Node",        "sourceMap": true,        "outDir": "../tests-out",    }}

In `package.json`, add two scripts:

    {  "scripts": {    "pretest": "tsc --incremental -p tests/tsconfig.json",    "test": "playwright test -c tests-out"  }}

The `pretest` script runs typescript on the tests. `test` will run the tests that have been generated to the `tests-out` directory. The `-c` argument configures the test runner to look for tests inside the `tests-out` directory.

Then `npm run test` will build the tests and run them.

# UI Mode

UI Mode
=======

Introduction[​](#introduction "Direct link to Introduction")
------------------------------------------------------------

UI Mode lets you explore, run, and debug tests with a time travel experience complete with a watch mode. All test files are displayed in the testing sidebar, allowing you to expand each file and describe block to individually run, view, watch, and debug each test. Filter tests by **name**, [**projects**](/docs/test-projects) (set in your `playwright.config` file), **@tag**, or by the execution status of **passed**, **failed**, and **skipped**. See a full trace of your tests and hover back and forward over each action to see what was happening during each step. You can also pop out the DOM snapshot of a given moment into a separate window for a better debugging experience.

Opening UI Mode[​](#opening-ui-mode "Direct link to Opening UI Mode")
---------------------------------------------------------------------

To open UI mode, run the following command in your terminal:

    npx playwright test --ui

Running your tests[​](#running-your-tests "Direct link to Running your tests")
------------------------------------------------------------------------------

Once you launch UI Mode you will see a list of all your test files. You can run all your tests by clicking the triangle icon in the sidebar. You can also run a single test file, a block of tests or a single test by hovering over the name and clicking on the triangle next to it.

![running tests in ui mode](https://github.com/microsoft/playwright/assets/13063165/6b87712f-64a5-4d73-a91d-6562b864712c)

Filtering tests[​](#filtering-tests "Direct link to Filtering tests")
---------------------------------------------------------------------

Filter tests by text or `@tag` or by passed, failed or skipped tests. You can also filter by [projects](/docs/test-projects) as set in your `playwright.config` file. If you are using project dependencies make sure to run your setup tests first before running the tests that depend on them. The UI mode will not take into consideration the setup tests and therefore you will have to manually run them first.

![filtering tests in ui mode](https://github.com/microsoft/playwright/assets/13063165/6f05e589-036d-45d5-9078-38134e1261e4)

Timeline view[​](#timeline-view "Direct link to Timeline view")
---------------------------------------------------------------

At the top of the trace you can see a timeline view of your test with different colors to highlight navigation and actions. Hover back and forth to see an image snapshot for each action. Double click on an action to see the time range for that action. You can use the slider in the timeline to increase the actions selected and these will be shown in the Actions tab and all console logs and network logs will be filtered to only show the logs for the actions selected.

![timeline view in ui mode](https://github.com/microsoft/playwright/assets/13063165/811a9985-32aa-4a3e-9869-de32053cf468)

Actions[​](#actions "Direct link to Actions")
---------------------------------------------

In the Actions tab you can see what locator was used for every action and how long each one took to run. Hover over each action of your test and visually see the change in the DOM snapshot. Go back and forward in time and click an action to inspect and debug. Use the Before and After tabs to visually see what happened before and after the action. ![use before and after actions in ui mode](https://github.com/microsoft/playwright/assets/13063165/7b22fab5-7346-4b98-8fdd-a78ed280647f)

Pop out and inspect the DOM[​](#pop-out-and-inspect-the-dom "Direct link to Pop out and inspect the DOM")
---------------------------------------------------------------------------------------------------------

Pop out the DOM snapshot into its own window for a better debugging experience by clicking on the pop out icon above the DOM snapshot. From there you can open the browser DevTools and inspect the HTML, CSS, Console etc. Go back to UI Mode and click on another action and pop that one out to easily compare the two side by side or debug each individually.

![pop out dom snapshot in ui mode](https://github.com/microsoft/playwright/assets/13063165/f9f43a0c-78d7-4574-9a58-c69d2ec53c8f)

Pick locator[​](#pick-locator "Direct link to Pick locator")
------------------------------------------------------------

Click on the pick locator button and hover over the DOM snapshot to see the locator for each element highlighted as you hover. Click on an element to add the locator playground. You can modify the locator in the playground and see if your modified locator matches any locators in the DOM snapshot. Once you are satisfied with the locator you can use the copy button to copy the locator and paste it into your test.

![pick locator in ui mode](https://github.com/microsoft/playwright/assets/13063165/9e7eeb84-bd26-4010-8614-75e24b56c716)

Source[​](#source "Direct link to Source")
------------------------------------------

As you hover over each action of your test the line of code for that action is highlighted in the source panel. The button "Open in VSCode" is at the top-right of this section. Upon clicking the button, it will open your test in VS Code right at the line of code that you clicked on.

![showing source code of tests in ui mode](https://github.com/microsoft/playwright/assets/13063165/49b9fa2a-8a57-4044-acaa-0a2ea4784c5c)

Call[​](#call "Direct link to Call")
------------------------------------

The call tab shows you information about the action such as the time it took, what locator was used, if in strict mode and what key was used.

![showing call tab in ui mode](https://github.com/microsoft/playwright/assets/13063165/442314c3-0b16-4400-bf25-c198f8654849)

Log[​](#log "Direct link to Log")
---------------------------------

See a full log of your test to better understand what Playwright is doing behind the scenes such as scrolling into view, waiting for element to be visible, enabled and stable and performing actions such as click, fill, press etc.

![showing log of tests in ui mode](https://github.com/microsoft/playwright/assets/13063165/1d214ee5-2c07-414d-a342-f88d0864ac89)

Errors[​](#errors "Direct link to Errors")
------------------------------------------

If your test fails you will see the error messages for each test in the Errors tab. The timeline will also show a red line highlighting where the error occurred. You can also click on the source tab to see on which line of the source code the error is.

![showing errors in ui mode](https://github.com/microsoft/playwright/assets/13063165/ffca2fd1-5349-41fb-ade9-ace143bb2c58)

Console[​](#console "Direct link to Console")
---------------------------------------------

See console logs from the browser as well as from your test. Different icons are displayed to show you if the console log came from the browser or from the test file.

![showing console logs from tests in ui mode](https://github.com/microsoft/playwright/assets/13063165/b6a44763-da04-4152-bbac-3369ca4a60ac)

Network[​](#network "Direct link to Network")
---------------------------------------------

The Network tab shows you all the network requests that were made during your test. You can sort by different types of requests, status code, method, request, content type, duration and size. Click on a request to see more information about it such as the request headers, response headers, request body and response body.

![showing network requests from tests in ui mode](https://github.com/microsoft/playwright/assets/13063165/946c2722-447a-4005-9518-b4e9b73a8240)

Attachments[​](#attachments "Direct link to Attachments")
---------------------------------------------------------

The "Attachments" tab allows you to explore attachments. If you're doing [visual regression testing](/docs/test-snapshots), you'll be able to compare screenshots by examining the image diff, the actual image and the expected image. When you click on the expected image you can use the slider to slide one image over the other so you can easily see the differences in your screenshots.

![ui mode with attachments](https://github.com/microsoft/playwright/assets/13063165/bb83b406-84ed-4380-a96c-0e62d1388093)

Metadata[​](#metadata "Direct link to Metadata")
------------------------------------------------

Next to the Actions tab you will find the Metadata tab which will show you more information on your test such as the Browser, viewport size, test duration and more.

![metadata tab in ui mode](https://github.com/microsoft/playwright/assets/13063165/befff46e-381a-41c2-8259-e47442add425)

Watch mode[​](#watch-mode "Direct link to Watch mode")
------------------------------------------------------

Next to the name of each test in the sidebar you will find an eye icon. Clicking on the icon will activate watch mode which will re-run the test when you make changes to it. You can watch a number of tests at the same time be clicking the eye icon next to each one or all tests by clicking the eye icon at the top of the sidebar.

![watch mode in ui mode](https://github.com/microsoft/playwright/assets/13063165/20d7d44c-b52d-43ff-8871-8b828671f3da)

Docker & GitHub Codespaces[​](#docker--github-codespaces "Direct link to Docker & GitHub Codespaces")
-----------------------------------------------------------------------------------------------------

For Docker and GitHub Codespaces environments, you can run UI mode in the browser. In order for an endpoint to be accessible outside of the container, it needs to be bound to the `0.0.0.0` interface:

    npx playwright test --ui-host=0.0.0.0

In the case of GitHub Codespaces, the port gets [forwarded automatically](https://docs.github.com/en/codespaces/developing-in-codespaces/forwarding-ports-in-your-codespace#about-forwarded-ports), so you can open UI mode in the browser by clicking on the link in the terminal.

To have a static port, you can pass the `--ui-port` flag:

    npx playwright test --ui-port=8080 --ui-host=0.0.0.0

note

Be aware that when specifying the `--ui-host=0.0.0.0` flag, UI Mode with your traces, the passwords and secrets is accessible from other machines inside your network. In the case of GitHub Codespaces, the ports are only accessible from your account by default.

# Web server

Web server
==========

Introduction[​](#introduction "Direct link to Introduction")
------------------------------------------------------------

Playwright comes with a `webServer` option in the config file which gives you the ability to launch a local dev server before running your tests. This is ideal for when writing your tests during development and when you don't have a staging or production url to test against.

Configuring a web server[​](#configuring-a-web-server "Direct link to Configuring a web server")
------------------------------------------------------------------------------------------------

Use the `webServer` property in your Playwright config to launch a development web server during the tests.

playwright.config.ts

    import { defineConfig } from '@playwright/test';export default defineConfig({  // Run your local dev server before starting the tests  webServer: {    command: 'npm run start',    url: 'http://localhost:3000',    reuseExistingServer: !process.env.CI,    stdout: 'ignore',    stderr: 'pipe',  },});

Property

Description

[testConfig.webServer](/docs/api/class-testconfig#test-config-web-server)

Launch a development web server (or multiple) during the tests.

`command`

Shell command to start the local dev server of your app.

`cwd`

Current working directory of the spawned process, defaults to the directory of the configuration file.

`env`

Environment variables for the command. Defaults to inheriting `process.env` with `PLAYWRIGHT_TEST=1` added.

`gracefulShutdown`

How to shut down the process. If unspecified, the process group is forcefully `SIGKILL`ed. If set to `{ signal: 'SIGTERM', timeout: 500 }`, the process group is sent a `SIGTERM` signal, followed by `SIGKILL` if it doesn't exit within 500ms. You can also use `SIGINT` as the signal instead. A `0` timeout means no `SIGKILL` will be sent. Windows doesn't support `SIGTERM` and `SIGINT` signals, so this option is ignored on Windows. Note that shutting down a Docker container requires `SIGTERM`.

`ignoreHTTPSErrors`

Whether to ignore HTTPS errors when fetching the `url`. Defaults to `false`.

`name`

Specifies a custom name for the web server. This name will be prefixed to log messages. Defaults to `[WebServer]`.

`port`

**Deprecated**. User `url` instead. The port that your http server is expected to appear on. It does wait until it accepts connections. Either `port` or `url` should be specified.

`reuseExistingServer`

If `true`, it will re-use an existing server on the `port` or `url` when available. If no server is running on that `port` or `url`, it will run the command to start a new server. If `false`, it will throw if an existing process is listening on the `port` or `url`. This should be commonly set to `!process.env.CI` to allow the local dev server when running tests locally.

`stderr`

Whether to pipe the stderr of the command to the process stderr or ignore it. Defaults to `"pipe"`.

`stdout`

If `"pipe"`, it will pipe the stdout of the command to the process stdout. If `"ignore"`, it will ignore the stdout of the command. Default to `"ignore"`.

`timeout`

How long to wait for the process to start up and be available in milliseconds. Defaults to 60000.

`url`

URL of your http server that is expected to return a 2xx, 3xx, 400, 401, 402, or 403 status code when the server is ready to accept connections. Either `port` or `url` should be specified.

`wait`

Consider command started only when given output has been produced. Takes an object with optional `stdout` and/or `stderr` regular expressions. Named capture groups in the regex are stored in the environment, for example `/Listening on port (?<my_server_port>\\d+)/` will store the port number in `process.env['MY_SERVER_PORT']`.

Adding a server timeout[​](#adding-a-server-timeout "Direct link to Adding a server timeout")
---------------------------------------------------------------------------------------------

Webservers can sometimes take longer to boot up. In this case, you can increase the timeout to wait for the server to start.

playwright.config.ts

    import { defineConfig } from '@playwright/test';export default defineConfig({  // Rest of your config...  // Run your local dev server before starting the tests  webServer: {    command: 'npm run start',    url: 'http://localhost:3000',    reuseExistingServer: !process.env.CI,    timeout: 120 * 1000,  },});

Adding a baseURL[​](#adding-a-baseurl "Direct link to Adding a baseURL")
------------------------------------------------------------------------

It is also recommended to specify the `baseURL` in the `use: {}` section of your config, so that tests can use relative urls and you don't have to specify the full URL over and over again.

When using [page.goto()](/docs/api/class-page#page-goto), [page.route()](/docs/api/class-page#page-route), [page.waitForURL()](/docs/api/class-page#page-wait-for-url), [page.waitForRequest()](/docs/api/class-page#page-wait-for-request), or [page.waitForResponse()](/docs/api/class-page#page-wait-for-response) it takes the base URL in consideration by using the [`URL()`](https://developer.mozilla.org/en-US/docs/Web/API/URL/URL) constructor for building the corresponding URL. For Example, by setting the baseURL to `http://localhost:3000` and navigating to `/login` in your tests, Playwright will run the test using `http://localhost:3000/login`.

playwright.config.ts

    import { defineConfig } from '@playwright/test';export default defineConfig({  // Rest of your config...  // Run your local dev server before starting the tests  webServer: {    command: 'npm run start',    url: 'http://localhost:3000',    reuseExistingServer: !process.env.CI,  },  use: {    baseURL: 'http://localhost:3000',  },});

Now you can use a relative path when navigating the page:

test.spec.ts

    import { test } from '@playwright/test';test('test', async ({ page }) => {  // This will navigate to http://localhost:3000/login  await page.goto('./login');});

Multiple web servers[​](#multiple-web-servers "Direct link to Multiple web servers")
------------------------------------------------------------------------------------

Multiple web servers (or background processes) can be launched simultaneously by providing an array of `webServer` configurations. See [testConfig.webServer](/docs/api/class-testconfig#test-config-web-server) for more info.

playwright.config.ts

    import { defineConfig } from '@playwright/test';export default defineConfig({  webServer: [    {      command: 'npm run start',      url: 'http://localhost:3000',      name: 'Frontend',      timeout: 120 * 1000,      reuseExistingServer: !process.env.CI,    },    {      command: 'npm run backend',      url: 'http://localhost:3333',      name: 'Backend',      timeout: 120 * 1000,      reuseExistingServer: !process.env.CI,    }  ],  use: {    baseURL: 'http://localhost:3000',  },});

# Library

Library
=======

Introduction[​](#introduction "Direct link to Introduction")
------------------------------------------------------------

Playwright Library provides unified APIs for launching and interacting with browsers, while Playwright Test provides all this plus a fully managed end-to-end Test Runner and experience.

Under most circumstances, for end-to-end testing, you'll want to use `@playwright/test` (Playwright Test), and not `playwright` (Playwright Library) directly. To get started with Playwright Test, follow the [Getting Started Guide](/docs/intro).

Differences when using library[​](#differences-when-using-library "Direct link to Differences when using library")
------------------------------------------------------------------------------------------------------------------

### Library Example[​](#library-example "Direct link to Library Example")

The following is an example of using the Playwright Library directly to launch Chromium, go to a page, and check its title:

*   TypeScript
*   JavaScript

    import { chromium, devices } from 'playwright';import assert from 'node:assert';(async () => {  // Setup  const browser = await chromium.launch();  const context = await browser.newContext(devices['iPhone 11']);  const page = await context.newPage();  // The actual interesting bit  await context.route('**.jpg', route => route.abort());  await page.goto('https://example.com/');  assert(await page.title() === 'Example Domain'); // 👎 not a Web First assertion  // Teardown  await context.close();  await browser.close();})();

    const assert = require('node:assert');const { chromium, devices } = require('playwright');(async () => {  // Setup  const browser = await chromium.launch();  const context = await browser.newContext(devices['iPhone 11']);  const page = await context.newPage();  // The actual interesting bit  await context.route('**.jpg', route => route.abort());  await page.goto('https://example.com/');  assert(await page.title() === 'Example Domain'); // 👎 not a Web First assertion  // Teardown  await context.close();  await browser.close();})();

Run it with `node my-script.js`.

### Test Example[​](#test-example "Direct link to Test Example")

A test to achieve similar behavior, would look like:

*   TypeScript
*   JavaScript

    import { expect, test, devices } from '@playwright/test';test.use(devices['iPhone 11']);test('should be titled', async ({ page, context }) => {  await context.route('**.jpg', route => route.abort());  await page.goto('https://example.com/');  await expect(page).toHaveTitle('Example');});

    const { expect, test, devices } = require('@playwright/test');test.use(devices['iPhone 11']);test('should be titled', async ({ page, context }) => {  await context.route('**.jpg', route => route.abort());  await page.goto('https://example.com/');  await expect(page).toHaveTitle('Example');});

Run it with `npx playwright test`.

### Key Differences[​](#key-differences "Direct link to Key Differences")

The key differences to note are as follows:

Library

Test

Installation

`npm install playwright`

`npm init playwright@latest` - note `install` vs. `init`

Install browsers

Install `@playwright/browser-chromium`, `@playwright/browser-firefox` and/or `@playwright/browser-webkit`

`npx playwright install` or `npx playwright install chromium` for a single one

`import` from

`playwright`

`@playwright/test`

Initialization

Explicitly need to:

1.  Pick a browser to use, e.g. `chromium`
2.  Launch browser with [browserType.launch()](/docs/api/class-browsertype#browser-type-launch)
3.  Create a context with [browser.newContext()](/docs/api/class-browser#browser-new-context), _and_ pass any context options explicitly, e.g. `devices['iPhone 11']`
4.  Create a page with [browserContext.newPage()](/docs/api/class-browsercontext#browser-context-new-page)

An isolated `page` and `context` are provided to each test out-of the box, along with other [built-in fixtures](/docs/test-fixtures#built-in-fixtures). No explicit creation. If referenced by the test in its arguments, the Test Runner will create them for the test. (i.e. lazy-initialization)

Assertions

No built-in Web-First Assertions

[Web-First assertions](/docs/test-assertions) like:

*   [expect(page).toHaveTitle()](/docs/api/class-pageassertions#page-assertions-to-have-title)
*   [expect(page).toHaveScreenshot()](/docs/api/class-pageassertions#page-assertions-to-have-screenshot-1)

which auto-wait and retry for the condition to be met.

Timeouts

Defaults to 30s for most operations.

Most operations don't time out, but every test has a timeout that makes it fail (30s by default).

Cleanup

Explicitly need to:

1.  Close context with [browserContext.close()](/docs/api/class-browsercontext#browser-context-close)
2.  Close browser with [browser.close()](/docs/api/class-browser#browser-close)

No explicit close of [built-in fixtures](/docs/test-fixtures#built-in-fixtures); the Test Runner will take care of it.

Running

When using the Library, you run the code as a node script, possibly with some compilation first.

When using the Test Runner, you use the `npx playwright test` command. Along with your [config](/docs/test-configuration), the Test Runner handles any compilation and choosing what to run and how to run it.

In addition to the above, Playwright Test, as a full-featured Test Runner, includes:

*   [Configuration Matrix and Projects](/docs/test-configuration): In the above example, in the Playwright Library version, if we wanted to run with a different device or browser, we'd have to modify the script and plumb the information through. With Playwright Test, we can just specify the [matrix of configurations](/docs/test-configuration) in one place, and it will create run the one test under each of these configurations.
*   [Parallelization](/docs/test-parallel)
*   [Web-First Assertions](/docs/test-assertions)
*   [Reporting](/docs/test-reporters)
*   [Retries](/docs/test-retries)
*   [Easily Enabled Tracing](/docs/trace-viewer-intro)
*   and more…

Usage[​](#usage "Direct link to Usage")
---------------------------------------

Use npm or Yarn to install Playwright library in your Node.js project. See [system requirements](/docs/intro#system-requirements).

    npm i -D playwright

You will also need to install browsers - either manually or by adding a package that will do it for you automatically.

    # Download the Chromium, Firefox and WebKit browsernpx playwright install chromium firefox webkit# Alternatively, add packages that will download a browser upon npm installnpm i -D @playwright/browser-chromium @playwright/browser-firefox @playwright/browser-webkit

See [managing browsers](/docs/browsers#managing-browser-binaries) for more options.

Once installed, you can import Playwright in a Node.js script, and launch any of the 3 browsers (`chromium`, `firefox` and `webkit`).

    const { chromium } = require('playwright');(async () => {  const browser = await chromium.launch();  // Create pages, interact with UI elements, assert values  await browser.close();})();

Playwright APIs are asynchronous and return Promise objects. Our code examples use [the async/await pattern](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Asynchronous/Async_await) to ease readability. The code is wrapped in an unnamed async arrow function which is invoking itself.

    (async () => { // Start of async arrow function  // Function code  // ...})(); // End of the function and () to invoke itself

First script[​](#first-script "Direct link to First script")
------------------------------------------------------------

In our first script, we will navigate to `https://playwright.dev/` and take a screenshot in WebKit.

    const { webkit } = require('playwright');(async () => {  const browser = await webkit.launch();  const page = await browser.newPage();  await page.goto('https://playwright.dev/');  await page.screenshot({ path: `example.png` });  await browser.close();})();

By default, Playwright runs the browsers in headless mode. To see the browser UI, pass the `headless: false` flag while launching the browser. You can also use `slowMo` to slow down execution. Learn more in the debugging tools [section](/docs/debug).

    firefox.launch({ headless: false, slowMo: 50 });

Record scripts[​](#record-scripts "Direct link to Record scripts")
------------------------------------------------------------------

[Command line tools](/docs/test-cli) can be used to record user interactions and generate JavaScript code.

    npx playwright codegen wikipedia.org

Browser downloads[​](#browser-downloads "Direct link to Browser downloads")
---------------------------------------------------------------------------

To download Playwright browsers run:

    # Explicitly download browsersnpx playwright install

Alternatively, you can add `@playwright/browser-chromium`, `@playwright/browser-firefox` and `@playwright/browser-webkit` packages to automatically download the respective browser during the package installation.

    # Use a helper package that downloads a browser on npm installnpm install @playwright/browser-chromium

**Download behind a firewall or a proxy**

Pass `HTTPS_PROXY` environment variable to download through a proxy.

*   Bash
*   PowerShell
*   Batch

    # ManualHTTPS_PROXY=https://192.0.2.1 npx playwright install# Through @playwright/browser-chromium, @playwright/browser-firefox# and @playwright/browser-webkit helper packagesHTTPS_PROXY=https://192.0.2.1 npm install

    # Manual$Env:HTTPS_PROXY=https://192.0.2.1npx playwright install# Through @playwright/browser-chromium, @playwright/browser-firefox# and @playwright/browser-webkit helper packages$Env:HTTPS_PROXY=https://192.0.2.1npm install

    # Manualset HTTPS_PROXY=https://192.0.2.1npx playwright install# Through @playwright/browser-chromium, @playwright/browser-firefox# and @playwright/browser-webkit helper packagesset HTTPS_PROXY=https://192.0.2.1npm install

**Download from artifact repository**

By default, Playwright downloads browsers from Microsoft's CDN. Pass `PLAYWRIGHT_DOWNLOAD_HOST` environment variable to download from an internal artifacts repository instead.

*   Bash
*   PowerShell
*   Batch

    # ManualPLAYWRIGHT_DOWNLOAD_HOST=192.0.2.1 npx playwright install# Through @playwright/browser-chromium, @playwright/browser-firefox# and @playwright/browser-webkit helper packagesPLAYWRIGHT_DOWNLOAD_HOST=192.0.2.1 npm install

    # Manual$Env:PLAYWRIGHT_DOWNLOAD_HOST=192.0.2.1npx playwright install# Through @playwright/browser-chromium, @playwright/browser-firefox# and @playwright/browser-webkit helper packages$Env:PLAYWRIGHT_DOWNLOAD_HOST=192.0.2.1npm install

    # Manualset PLAYWRIGHT_DOWNLOAD_HOST=192.0.2.1npx playwright install# Through @playwright/browser-chromium, @playwright/browser-firefox# and @playwright/browser-webkit helper packagesset PLAYWRIGHT_DOWNLOAD_HOST=192.0.2.1npm install

**Skip browser download**

In certain cases, it is desired to avoid browser downloads altogether because browser binaries are managed separately. This can be done by setting `PLAYWRIGHT_SKIP_BROWSER_DOWNLOAD` variable before installing packages.

*   Bash
*   PowerShell
*   Batch

    # When using @playwright/browser-chromium, @playwright/browser-firefox# and @playwright/browser-webkit helper packagesPLAYWRIGHT_SKIP_BROWSER_DOWNLOAD=1 npm install

    # When using @playwright/browser-chromium, @playwright/browser-firefox# and @playwright/browser-webkit helper packages$Env:PLAYWRIGHT_SKIP_BROWSER_DOWNLOAD=1npm install

    # When using @playwright/browser-chromium, @playwright/browser-firefox# and @playwright/browser-webkit helper packagesset PLAYWRIGHT_SKIP_BROWSER_DOWNLOAD=1npm install

TypeScript support[​](#typescript-support "Direct link to TypeScript support")
------------------------------------------------------------------------------

Playwright includes built-in support for TypeScript. Type definitions will be imported automatically. It is recommended to use type-checking to improve the IDE experience.

### In JavaScript[​](#in-javascript "Direct link to In JavaScript")

Add the following to the top of your JavaScript file to get type-checking in VS Code or WebStorm.

    // @ts-check// ...

Alternatively, you can use JSDoc to set types for variables.

    /** @type {import('playwright').Page} */let page;

### In TypeScript[​](#in-typescript "Direct link to In TypeScript")

TypeScript support will work out-of-the-box. Types can also be imported explicitly.

    let page: import('playwright').Page;

# Accessibility testing

Accessibility testing
=====================

Introduction[​](#introduction "Direct link to Introduction")
------------------------------------------------------------

Playwright can be used to test your application for many types of accessibility issues.

A few examples of problems this can catch include:

*   Text that would be hard to read for users with vision impairments due to poor color contrast with the background behind it
*   UI controls and form elements without labels that a screen reader could identify
*   Interactive elements with duplicate IDs which can confuse assistive technologies

The following examples rely on the [`@axe-core/playwright`](https://npmjs.org/@axe-core/playwright) package which adds support for running the [axe accessibility testing engine](https://www.deque.com/axe/) as part of your Playwright tests.

Disclaimer

Automated accessibility tests can detect some common accessibility problems such as missing or invalid properties. But many accessibility problems can only be discovered through manual testing. We recommend using a combination of automated testing, manual accessibility assessments, and inclusive user testing.

For manual assessments, we recommend [Accessibility Insights for Web](https://accessibilityinsights.io/docs/web/overview/?referrer=playwright-accessibility-testing-js), a free and open source dev tool that walks you through assessing a website for [WCAG 2.1 AA](https://www.w3.org/WAI/WCAG21/quickref/?currentsidebar=%23col_customize&levels=aaa) coverage.

Example accessibility tests[​](#example-accessibility-tests "Direct link to Example accessibility tests")
---------------------------------------------------------------------------------------------------------

Accessibility tests work just like any other Playwright test. You can either create separate test cases for them, or integrate accessibility scans and assertions into your existing test cases.

The following examples demonstrate a few basic accessibility testing scenarios.

### Scanning an entire page[​](#scanning-an-entire-page "Direct link to Scanning an entire page")

This example demonstrates how to test an entire page for automatically detectable accessibility violations. The test:

1.  Imports the `@axe-core/playwright` package
2.  Uses normal Playwright Test syntax to define a test case
3.  Uses normal Playwright syntax to navigate to the page under test
4.  Awaits `AxeBuilder.analyze()` to run the accessibility scan against the page
5.  Uses normal Playwright Test [assertions](/docs/test-assertions) to verify that there are no violations in the returned scan results

*   TypeScript
*   JavaScript

    import { test, expect } from '@playwright/test';import AxeBuilder from '@axe-core/playwright'; // 1test.describe('homepage', () => { // 2  test('should not have any automatically detectable accessibility issues', async ({ page }) => {    await page.goto('https://your-site.com/'); // 3    const accessibilityScanResults = await new AxeBuilder({ page }).analyze(); // 4    expect(accessibilityScanResults.violations).toEqual([]); // 5  });});

    const { test, expect } = require('@playwright/test');const AxeBuilder = require('@axe-core/playwright').default; // 1test.describe('homepage', () => { // 2  test('should not have any automatically detectable accessibility issues', async ({ page }) => {    await page.goto('https://your-site.com/'); // 3    const accessibilityScanResults = await new AxeBuilder({ page }).analyze(); // 4    expect(accessibilityScanResults.violations).toEqual([]); // 5  });});

### Configuring axe to scan a specific part of a page[​](#configuring-axe-to-scan-a-specific-part-of-a-page "Direct link to Configuring axe to scan a specific part of a page")

`@axe-core/playwright` supports many configuration options for axe. You can specify these options by using a Builder pattern with the `AxeBuilder` class.

For example, you can use [`AxeBuilder.include()`](https://github.com/dequelabs/axe-core-npm/blob/develop/packages/playwright/README.md#axebuilderincludeselector-string--string) to constrain an accessibility scan to only run against one specific part of a page.

`AxeBuilder.analyze()` will scan the page _in its current state_ when you call it. To scan parts of a page that are revealed based on UI interactions, use [Locators](/docs/locators) to interact with the page before invoking `analyze()`:

    test('navigation menu should not have automatically detectable accessibility violations', async ({  page,}) => {  await page.goto('https://your-site.com/');  await page.getByRole('button', { name: 'Navigation Menu' }).click();  // It is important to waitFor() the page to be in the desired  // state *before* running analyze(). Otherwise, axe might not  // find all the elements your test expects it to scan.  await page.locator('#navigation-menu-flyout').waitFor();  const accessibilityScanResults = await new AxeBuilder({ page })      .include('#navigation-menu-flyout')      .analyze();  expect(accessibilityScanResults.violations).toEqual([]);});

### Scanning for WCAG violations[​](#scanning-for-wcag-violations "Direct link to Scanning for WCAG violations")

By default, axe checks against a wide variety of accessibility rules. Some of these rules correspond to specific success criteria from the [Web Content Accessibility Guidelines (WCAG)](https://www.w3.org/TR/WCAG21/), and others are "best practice" rules that are not specifically required by any WCAG criterion.

You can constrain an accessibility scan to only run those rules which are "tagged" as corresponding to specific WCAG success criteria by using [`AxeBuilder.withTags()`](https://github.com/dequelabs/axe-core-npm/blob/develop/packages/playwright/README.md#axebuilderwithtagstags-stringarray). For example, [Accessibility Insights for Web's Automated Checks](https://accessibilityinsights.io/docs/web/getstarted/fastpass/?referrer=playwright-accessibility-testing-js) only include axe rules that test for violations of WCAG A and AA success criteria; to match that behavior, you would use the tags `wcag2a`, `wcag2aa`, `wcag21a`, and `wcag21aa`.

Note that automated testing cannot detect all types of WCAG violations.

    test('should not have any automatically detectable WCAG A or AA violations', async ({ page }) => {  await page.goto('https://your-site.com/');  const accessibilityScanResults = await new AxeBuilder({ page })      .withTags(['wcag2a', 'wcag2aa', 'wcag21a', 'wcag21aa'])      .analyze();  expect(accessibilityScanResults.violations).toEqual([]);});

You can find a complete listing of the rule tags axe-core supports in [the "Axe-core Tags" section of the axe API documentation](https://www.deque.com/axe/core-documentation/api-documentation/#axecore-tags).

Handling known issues[​](#handling-known-issues "Direct link to Handling known issues")
---------------------------------------------------------------------------------------

A common question when adding accessibility tests to an application is "how do I suppress known violations?" The following examples demonstrate a few techniques you can use.

### Excluding individual elements from a scan[​](#excluding-individual-elements-from-a-scan "Direct link to Excluding individual elements from a scan")

If your application contains a few specific elements with known issues, you can use [`AxeBuilder.exclude()`](https://github.com/dequelabs/axe-core-npm/blob/develop/packages/playwright/README.md#axebuilderexcludeselector-string--string) to exclude them from being scanned until you're able to fix the issues.

This is usually the simplest option, but it has some important downsides:

*   `exclude()` will exclude the specified elements _and all of their descendants_. Avoid using it with components that contain many children.
*   `exclude()` will prevent _all_ rules from running against the specified elements, not just the rules corresponding to known issues.

Here is an example of excluding one element from being scanned in one specific test:

    test('should not have any accessibility violations outside of elements with known issues', async ({  page,}) => {  await page.goto('https://your-site.com/page-with-known-issues');  const accessibilityScanResults = await new AxeBuilder({ page })      .exclude('#element-with-known-issue')      .analyze();  expect(accessibilityScanResults.violations).toEqual([]);});

If the element in question is used repeatedly in many pages, consider [using a test fixture](#using-a-test-fixture-for-common-axe-configuration) to reuse the same `AxeBuilder` configuration across multiple tests.

### Disabling individual scan rules[​](#disabling-individual-scan-rules "Direct link to Disabling individual scan rules")

If your application contains many different preexisting violations of a specific rule, you can use [`AxeBuilder.disableRules()`](https://github.com/dequelabs/axe-core-npm/blob/develop/packages/playwright/README.md#axebuilderdisablerulesrules-stringarray) to temporarily disable individual rules until you're able to fix the issues.

You can find the rule IDs to pass to `disableRules()` in the `id` property of the violations you want to suppress. A [complete list of axe's rules](https://github.com/dequelabs/axe-core/blob/master/doc/rule-descriptions.md) can be found in `axe-core`'s documentation.

    test('should not have any accessibility violations outside of rules with known issues', async ({  page,}) => {  await page.goto('https://your-site.com/page-with-known-issues');  const accessibilityScanResults = await new AxeBuilder({ page })      .disableRules(['duplicate-id'])      .analyze();  expect(accessibilityScanResults.violations).toEqual([]);});

### Using snapshots to allow specific known issues[​](#using-snapshots-to-allow-specific-known-issues "Direct link to Using snapshots to allow specific known issues")

If you would like to allow for a more granular set of known issues, you can use [Snapshots](/docs/test-snapshots) to verify that a set of preexisting violations has not changed. This approach avoids the downsides of using `AxeBuilder.exclude()` at the cost of slightly more complexity and fragility.

Do not use a snapshot of the entire `accessibilityScanResults.violations` array. It contains implementation details of the elements in question, such as a snippet of their rendered HTML; if you include these in your snapshots, it will make your tests prone to breaking every time one of the components in question changes for an unrelated reason:

    // Don't do this! This is fragile.expect(accessibilityScanResults.violations).toMatchSnapshot();

Instead, create a _fingerprint_ of the violation(s) in question that contains only enough information to uniquely identify the issue, and use a snapshot of the fingerprint:

    // This is less fragile than snapshotting the entire violations array.expect(violationFingerprints(accessibilityScanResults)).toMatchSnapshot();// my-test-utils.jsfunction violationFingerprints(accessibilityScanResults) {  const violationFingerprints = accessibilityScanResults.violations.map(violation => ({    rule: violation.id,    // These are CSS selectors which uniquely identify each element with    // a violation of the rule in question.    targets: violation.nodes.map(node => node.target),  }));  return JSON.stringify(violationFingerprints, null, 2);}

Exporting scan results as a test attachment[​](#exporting-scan-results-as-a-test-attachment "Direct link to Exporting scan results as a test attachment")
---------------------------------------------------------------------------------------------------------------------------------------------------------

Most accessibility tests are primarily concerned with the `violations` property of the axe scan results. However, the scan results contain more than just `violations`. For example, the results also contain information about rules which passed and about elements which axe found to have inconclusive results for some rules. This information can be useful for debugging tests that aren't detecting all the violations you expect them to.

To include _all_ of the scan results as part of your test results for debugging purposes, you can add the scan results as a test attachment with [`testInfo.attach()`](/docs/api/class-testinfo#test-info-attach). [Reporters](/docs/test-reporters) can then embed or link the full results as part of your test output.

The following example demonstrates attaching scan results to a test:

    test('example with attachment', async ({ page }, testInfo) => {  await page.goto('https://your-site.com/');  const accessibilityScanResults = await new AxeBuilder({ page }).analyze();  await testInfo.attach('accessibility-scan-results', {    body: JSON.stringify(accessibilityScanResults, null, 2),    contentType: 'application/json'  });  expect(accessibilityScanResults.violations).toEqual([]);});

Using a test fixture for common axe configuration[​](#using-a-test-fixture-for-common-axe-configuration "Direct link to Using a test fixture for common axe configuration")
---------------------------------------------------------------------------------------------------------------------------------------------------------------------------

[Test fixtures](/docs/test-fixtures) are a good way to share common `AxeBuilder` configuration across many tests. Some scenarios where this might be useful include:

*   Using a common set of rules among all of your tests
*   Suppressing a known violation in a common element which appears in many different pages
*   Attaching standalone accessibility reports consistently for many scans

The following example demonstrates creating and using a test fixture that covers each of those scenarios.

### Creating a fixture[​](#creating-a-fixture "Direct link to Creating a fixture")

This example fixture creates an `AxeBuilder` object which is pre-configured with shared `withTags()` and `exclude()` configuration.

*   TypeScript
*   JavaScript

axe-test.ts

    import { test as base } from '@playwright/test';import AxeBuilder from '@axe-core/playwright';type AxeFixture = {  makeAxeBuilder: () => AxeBuilder;};// Extend base test by providing "makeAxeBuilder"//// This new "test" can be used in multiple test files, and each of them will get// a consistently configured AxeBuilder instance.export const test = base.extend<AxeFixture>({  makeAxeBuilder: async ({ page }, use) => {    const makeAxeBuilder = () => new AxeBuilder({ page })        .withTags(['wcag2a', 'wcag2aa', 'wcag21a', 'wcag21aa'])        .exclude('#commonly-reused-element-with-known-issue');    await use(makeAxeBuilder);  }});export { expect } from '@playwright/test';

axe-test.js

    const base = require('@playwright/test');const AxeBuilder = require('@axe-core/playwright').default;// Extend base test by providing "makeAxeBuilder"//// This new "test" can be used in multiple test files, and each of them will get// a consistently configured AxeBuilder instance.exports.test = base.test.extend({  makeAxeBuilder: async ({ page }, use) => {    const makeAxeBuilder = () => new AxeBuilder({ page })        .withTags(['wcag2a', 'wcag2aa', 'wcag21a', 'wcag21aa'])        .exclude('#commonly-reused-element-with-known-issue');    await use(makeAxeBuilder);  }});exports.expect = base.expect;

### Using a fixture[​](#using-a-fixture "Direct link to Using a fixture")

To use the fixture, replace the earlier examples' `new AxeBuilder({ page })` with the newly defined `makeAxeBuilder` fixture:

    const { test, expect } = require('./axe-test');test('example using custom fixture', async ({ page, makeAxeBuilder }) => {  await page.goto('https://your-site.com/');  const accessibilityScanResults = await makeAxeBuilder()      // Automatically uses the shared AxeBuilder configuration,      // but supports additional test-specific configuration too      .include('#specific-element-under-test')      .analyze();  expect(accessibilityScanResults.violations).toEqual([]);});

# Actions

Actions
=======

Introduction[​](#introduction "Direct link to Introduction")
------------------------------------------------------------

Playwright can interact with HTML Input elements such as text inputs, checkboxes, radio buttons, select options, mouse clicks, type characters, keys and shortcuts as well as upload files and focus elements.

Text input[​](#text-input "Direct link to Text input")
------------------------------------------------------

Using [locator.fill()](/docs/api/class-locator#locator-fill) is the easiest way to fill out the form fields. It focuses the element and triggers an `input` event with the entered text. It works for `<input>`, `<textarea>` and `[contenteditable]` elements.

    // Text inputawait page.getByRole('textbox').fill('Peter');// Date inputawait page.getByLabel('Birth date').fill('2020-02-02');// Time inputawait page.getByLabel('Appointment time').fill('13:15');// Local datetime inputawait page.getByLabel('Local time').fill('2020-03-02T05:15');

Checkboxes and radio buttons[​](#checkboxes-and-radio-buttons "Direct link to Checkboxes and radio buttons")
------------------------------------------------------------------------------------------------------------

Using [locator.setChecked()](/docs/api/class-locator#locator-set-checked) is the easiest way to check and uncheck a checkbox or a radio button. This method can be used with `input[type=checkbox]`, `input[type=radio]` and `[role=checkbox]` elements.

    // Check the checkboxawait page.getByLabel('I agree to the terms above').check();// Assert the checked stateexpect(page.getByLabel('Subscribe to newsletter')).toBeChecked();// Select the radio buttonawait page.getByLabel('XL').check();

Select options[​](#select-options "Direct link to Select options")
------------------------------------------------------------------

Selects one or multiple options in the `<select>` element with [locator.selectOption()](/docs/api/class-locator#locator-select-option). You can specify option `value`, or `label` to select. Multiple options can be selected.

    // Single selection matching the value or labelawait page.getByLabel('Choose a color').selectOption('blue');// Single selection matching the labelawait page.getByLabel('Choose a color').selectOption({ label: 'Blue' });// Multiple selected itemsawait page.getByLabel('Choose multiple colors').selectOption(['red', 'green', 'blue']);

Mouse click[​](#mouse-click "Direct link to Mouse click")
---------------------------------------------------------

Performs a simple human click.

    // Generic clickawait page.getByRole('button').click();// Double clickawait page.getByText('Item').dblclick();// Right clickawait page.getByText('Item').click({ button: 'right' });// Shift + clickawait page.getByText('Item').click({ modifiers: ['Shift'] });// Ctrl + click on Windows and Linux// Meta + click on macOSawait page.getByText('Item').click({ modifiers: ['ControlOrMeta'] });// Hover over elementawait page.getByText('Item').hover();// Click the top left cornerawait page.getByText('Item').click({ position: { x: 0, y: 0 } });

Under the hood, this and other pointer-related methods:

*   wait for element with given selector to be in DOM
*   wait for it to become displayed, i.e. not empty, no `display:none`, no `visibility:hidden`
*   wait for it to stop moving, for example, until css transition finishes
*   scroll the element into view
*   wait for it to receive pointer events at the action point, for example, waits until element becomes non-obscured by other elements
*   retry if the element is detached during any of the above checks

#### Forcing the click[​](#forcing-the-click "Direct link to Forcing the click")

Sometimes, apps use non-trivial logic where hovering the element overlays it with another element that intercepts the click. This behavior is indistinguishable from a bug where element gets covered and the click is dispatched elsewhere. If you know this is taking place, you can bypass the [actionability](/docs/actionability) checks and force the click:

    await page.getByRole('button').click({ force: true });

#### Programmatic click[​](#programmatic-click "Direct link to Programmatic click")

If you are not interested in testing your app under the real conditions and want to simulate the click by any means possible, you can trigger the [`HTMLElement.click()`](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/click) behavior via simply dispatching a click event on the element with [locator.dispatchEvent()](/docs/api/class-locator#locator-dispatch-event):

    await page.getByRole('button').dispatchEvent('click');

Type characters[​](#type-characters "Direct link to Type characters")
---------------------------------------------------------------------

caution

Most of the time, you should input text with [locator.fill()](/docs/api/class-locator#locator-fill). See the [Text input](#text-input) section above. You only need to type characters if there is special keyboard handling on the page.

Type into the field character by character, as if it was a user with a real keyboard with [locator.pressSequentially()](/docs/api/class-locator#locator-press-sequentially).

    // Press keys one by oneawait page.locator('#area').pressSequentially('Hello World!');

This method will emit all the necessary keyboard events, with all the `keydown`, `keyup`, `keypress` events in place. You can even specify the optional `delay` between the key presses to simulate real user behavior.

Keys and shortcuts[​](#keys-and-shortcuts "Direct link to Keys and shortcuts")
------------------------------------------------------------------------------

    // Hit Enterawait page.getByText('Submit').press('Enter');// Dispatch Control+Rightawait page.getByRole('textbox').press('Control+ArrowRight');// Press $ sign on keyboardawait page.getByRole('textbox').press('$');

The [locator.press()](/docs/api/class-locator#locator-press) method focuses the selected element and produces a single keystroke. It accepts the logical key names that are emitted in the [keyboardEvent.key](https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent/key) property of the keyboard events:

    Backquote, Minus, Equal, Backslash, Backspace, Tab, Delete, Escape,ArrowDown, End, Enter, Home, Insert, PageDown, PageUp, ArrowRight,ArrowUp, F1 - F12, Digit0 - Digit9, KeyA - KeyZ, etc.

*   You can alternatively specify a single character you'd like to produce such as `"a"` or `"#"`.
*   Following modification shortcuts are also supported: `Shift, Control, Alt, Meta`.

Simple version produces a single character. This character is case-sensitive, so `"a"` and `"A"` will produce different results.

    // <input id=name>await page.locator('#name').press('Shift+A');// <input id=name>await page.locator('#name').press('Shift+ArrowLeft');

Shortcuts such as `"Control+o"` or `"Control+Shift+T"` are supported as well. When specified with the modifier, modifier is pressed and being held while the subsequent key is being pressed.

Note that you still need to specify the capital `A` in `Shift-A` to produce the capital character. `Shift-a` produces a lower-case one as if you had the `CapsLock` toggled.

Upload files[​](#upload-files "Direct link to Upload files")
------------------------------------------------------------

You can select input files for upload using the [locator.setInputFiles()](/docs/api/class-locator#locator-set-input-files) method. It expects first argument to point to an [input element](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input) with the type `"file"`. Multiple files can be passed in the array. If some of the file paths are relative, they are resolved relative to the current working directory. Empty array clears the selected files.

    // Select one fileawait page.getByLabel('Upload file').setInputFiles(path.join(__dirname, 'myfile.pdf'));// Select multiple filesawait page.getByLabel('Upload files').setInputFiles([  path.join(__dirname, 'file1.txt'),  path.join(__dirname, 'file2.txt'),]);// Select a directoryawait page.getByLabel('Upload directory').setInputFiles(path.join(__dirname, 'mydir'));// Remove all the selected filesawait page.getByLabel('Upload file').setInputFiles([]);// Upload buffer from memoryawait page.getByLabel('Upload file').setInputFiles({  name: 'file.txt',  mimeType: 'text/plain',  buffer: Buffer.from('this is test')});

If you don't have input element in hand (it is created dynamically), you can handle the [page.on('filechooser')](/docs/api/class-page#page-event-file-chooser) event or use a corresponding waiting method upon your action:

    // Start waiting for file chooser before clicking. Note no await.const fileChooserPromise = page.waitForEvent('filechooser');await page.getByLabel('Upload file').click();const fileChooser = await fileChooserPromise;await fileChooser.setFiles(path.join(__dirname, 'myfile.pdf'));

Focus element[​](#focus-element "Direct link to Focus element")
---------------------------------------------------------------

For the dynamic pages that handle focus events, you can focus the given element with [locator.focus()](/docs/api/class-locator#locator-focus).

    await page.getByLabel('Password').focus();

Drag and Drop[​](#drag-and-drop "Direct link to Drag and Drop")
---------------------------------------------------------------

You can perform drag&drop operation with [locator.dragTo()](/docs/api/class-locator#locator-drag-to). This method will:

*   Hover the element that will be dragged.
*   Press left mouse button.
*   Move mouse to the element that will receive the drop.
*   Release left mouse button.

    await page.locator('#item-to-be-dragged').dragTo(page.locator('#item-to-drop-at'));

### Dragging manually[​](#dragging-manually "Direct link to Dragging manually")

If you want precise control over the drag operation, use lower-level methods like [locator.hover()](/docs/api/class-locator#locator-hover), [mouse.down()](/docs/api/class-mouse#mouse-down), [mouse.move()](/docs/api/class-mouse#mouse-move) and [mouse.up()](/docs/api/class-mouse#mouse-up).

    await page.locator('#item-to-be-dragged').hover();await page.mouse.down();await page.locator('#item-to-drop-at').hover();await page.mouse.up();

note

If your page relies on the `dragover` event being dispatched, you need at least two mouse moves to trigger it in all browsers. To reliably issue the second mouse move, repeat your [mouse.move()](/docs/api/class-mouse#mouse-move) or [locator.hover()](/docs/api/class-locator#locator-hover) twice. The sequence of operations would be: hover the drag element, mouse down, hover the drop element, hover the drop element second time, mouse up.

Scrolling[​](#scrolling "Direct link to Scrolling")
---------------------------------------------------

Most of the time, Playwright will automatically scroll for you before doing any actions. Therefore, you do not need to scroll explicitly.

    // Scrolls automatically so that button is visibleawait page.getByRole('button').click();

However, in rare cases you might need to manually scroll. For example, you might want to force an "infinite list" to load more elements, or position the page for a specific screenshot. In such a case, the most reliable way is to find an element that you want to make visible at the bottom, and scroll it into view.

    // Scroll the footer into view, forcing an "infinite list" to load more contentawait page.getByText('Footer text').scrollIntoViewIfNeeded();

If you would like to control the scrolling more precisely, use [mouse.wheel()](/docs/api/class-mouse#mouse-wheel) or [locator.evaluate()](/docs/api/class-locator#locator-evaluate):

    // Position the mouse and scroll with the mouse wheelawait page.getByTestId('scrolling-container').hover();await page.mouse.wheel(0, 10);// Alternatively, programmatically scroll a specific elementawait page.getByTestId('scrolling-container').evaluate(e => e.scrollTop += 100);

# Assertions

Assertions
==========

Introduction[​](#introduction "Direct link to Introduction")
------------------------------------------------------------

Playwright includes test assertions in the form of `expect` function. To make an assertion, call `expect(value)` and choose a matcher that reflects the expectation. There are many [generic matchers](/docs/api/class-genericassertions) like `toEqual`, `toContain`, `toBeTruthy` that can be used to assert any conditions.

    expect(success).toBeTruthy();

Playwright also includes web-specific [async matchers](/docs/api/class-locatorassertions) that will wait until the expected condition is met. Consider the following example:

    await expect(page.getByTestId('status')).toHaveText('Submitted');

Playwright will be re-testing the element with the test id of `status` until the fetched element has the `"Submitted"` text. It will re-fetch the element and check it over and over, until the condition is met or until the timeout is reached. You can either pass this timeout or configure it once via the [testConfig.expect](/docs/api/class-testconfig#test-config-expect) value in the test config.

By default, the timeout for assertions is set to 5 seconds. Learn more about [various timeouts](/docs/test-timeouts).

Auto-retrying assertions[​](#auto-retrying-assertions "Direct link to Auto-retrying assertions")
------------------------------------------------------------------------------------------------

The following assertions will retry until the assertion passes, or the assertion timeout is reached. Note that retrying assertions are async, so you must `await` them.

Assertion

Description

[await expect(locator).toBeAttached()](/docs/api/class-locatorassertions#locator-assertions-to-be-attached)

Element is attached

[await expect(locator).toBeChecked()](/docs/api/class-locatorassertions#locator-assertions-to-be-checked)

Checkbox is checked

[await expect(locator).toBeDisabled()](/docs/api/class-locatorassertions#locator-assertions-to-be-disabled)

Element is disabled

[await expect(locator).toBeEditable()](/docs/api/class-locatorassertions#locator-assertions-to-be-editable)

Element is editable

[await expect(locator).toBeEmpty()](/docs/api/class-locatorassertions#locator-assertions-to-be-empty)

Container is empty

[await expect(locator).toBeEnabled()](/docs/api/class-locatorassertions#locator-assertions-to-be-enabled)

Element is enabled

[await expect(locator).toBeFocused()](/docs/api/class-locatorassertions#locator-assertions-to-be-focused)

Element is focused

[await expect(locator).toBeHidden()](/docs/api/class-locatorassertions#locator-assertions-to-be-hidden)

Element is not visible

[await expect(locator).toBeInViewport()](/docs/api/class-locatorassertions#locator-assertions-to-be-in-viewport)

Element intersects viewport

[await expect(locator).toBeVisible()](/docs/api/class-locatorassertions#locator-assertions-to-be-visible)

Element is visible

[await expect(locator).toContainText()](/docs/api/class-locatorassertions#locator-assertions-to-contain-text)

Element contains text

[await expect(locator).toContainClass()](/docs/api/class-locatorassertions#locator-assertions-to-contain-class)

Element has specified CSS classes

[await expect(locator).toHaveAccessibleDescription()](/docs/api/class-locatorassertions#locator-assertions-to-have-accessible-description)

Element has a matching [accessible description](https://w3c.github.io/accname/#dfn-accessible-description)

[await expect(locator).toHaveAccessibleName()](/docs/api/class-locatorassertions#locator-assertions-to-have-accessible-name)

Element has a matching [accessible name](https://w3c.github.io/accname/#dfn-accessible-name)

[await expect(locator).toHaveAttribute()](/docs/api/class-locatorassertions#locator-assertions-to-have-attribute)

Element has a DOM attribute

[await expect(locator).toHaveClass()](/docs/api/class-locatorassertions#locator-assertions-to-have-class)

Element has specified CSS class property

[await expect(locator).toHaveCount()](/docs/api/class-locatorassertions#locator-assertions-to-have-count)

List has exact number of children

[await expect(locator).toHaveCSS()](/docs/api/class-locatorassertions#locator-assertions-to-have-css)

Element has CSS property

[await expect(locator).toHaveId()](/docs/api/class-locatorassertions#locator-assertions-to-have-id)

Element has an ID

[await expect(locator).toHaveJSProperty()](/docs/api/class-locatorassertions#locator-assertions-to-have-js-property)

Element has a JavaScript property

[await expect(locator).toHaveRole()](/docs/api/class-locatorassertions#locator-assertions-to-have-role)

Element has a specific [ARIA role](https://www.w3.org/TR/wai-aria-1.2/#roles)

[await expect(locator).toHaveScreenshot()](/docs/api/class-locatorassertions#locator-assertions-to-have-screenshot-1)

Element has a screenshot

[await expect(locator).toHaveText()](/docs/api/class-locatorassertions#locator-assertions-to-have-text)

Element matches text

[await expect(locator).toHaveValue()](/docs/api/class-locatorassertions#locator-assertions-to-have-value)

Input has a value

[await expect(locator).toHaveValues()](/docs/api/class-locatorassertions#locator-assertions-to-have-values)

Select has options selected

[await expect(locator).toMatchAriaSnapshot()](/docs/api/class-locatorassertions#locator-assertions-to-match-aria-snapshot)

Element matches the Aria snapshot

[await expect(page).toHaveScreenshot()](/docs/api/class-pageassertions#page-assertions-to-have-screenshot-1)

Page has a screenshot

[await expect(page).toHaveTitle()](/docs/api/class-pageassertions#page-assertions-to-have-title)

Page has a title

[await expect(page).toHaveURL()](/docs/api/class-pageassertions#page-assertions-to-have-url)

Page has a URL

[await expect(response).toBeOK()](/docs/api/class-apiresponseassertions#api-response-assertions-to-be-ok)

Response has an OK status

Non-retrying assertions[​](#non-retrying-assertions "Direct link to Non-retrying assertions")
---------------------------------------------------------------------------------------------

These assertions allow to test any conditions, but do not auto-retry. Most of the time, web pages show information asynchronously, and using non-retrying assertions can lead to a flaky test.

Prefer [auto-retrying](#auto-retrying-assertions) assertions whenever possible. For more complex assertions that need to be retried, use [`expect.poll`](#expectpoll) or [`expect.toPass`](#expecttopass).

Assertion

Description

[expect(value).toBe()](/docs/api/class-genericassertions#generic-assertions-to-be)

Value is the same

[expect(value).toBeCloseTo()](/docs/api/class-genericassertions#generic-assertions-to-be-close-to)

Number is approximately equal

[expect(value).toBeDefined()](/docs/api/class-genericassertions#generic-assertions-to-be-defined)

Value is not `undefined`

[expect(value).toBeFalsy()](/docs/api/class-genericassertions#generic-assertions-to-be-falsy)

Value is falsy, e.g. `false`, `0`, `null`, etc.

[expect(value).toBeGreaterThan()](/docs/api/class-genericassertions#generic-assertions-to-be-greater-than)

Number is more than

[expect(value).toBeGreaterThanOrEqual()](/docs/api/class-genericassertions#generic-assertions-to-be-greater-than-or-equal)

Number is more than or equal

[expect(value).toBeInstanceOf()](/docs/api/class-genericassertions#generic-assertions-to-be-instance-of)

Object is an instance of a class

[expect(value).toBeLessThan()](/docs/api/class-genericassertions#generic-assertions-to-be-less-than)

Number is less than

[expect(value).toBeLessThanOrEqual()](/docs/api/class-genericassertions#generic-assertions-to-be-less-than-or-equal)

Number is less than or equal

[expect(value).toBeNaN()](/docs/api/class-genericassertions#generic-assertions-to-be-na-n)

Value is `NaN`

[expect(value).toBeNull()](/docs/api/class-genericassertions#generic-assertions-to-be-null)

Value is `null`

[expect(value).toBeTruthy()](/docs/api/class-genericassertions#generic-assertions-to-be-truthy)

Value is truthy, i.e. not `false`, `0`, `null`, etc.

[expect(value).toBeUndefined()](/docs/api/class-genericassertions#generic-assertions-to-be-undefined)

Value is `undefined`

[expect(value).toContain()](/docs/api/class-genericassertions#generic-assertions-to-contain-1)

String contains a substring

[expect(value).toContain()](/docs/api/class-genericassertions#generic-assertions-to-contain-2)

Array or set contains an element

[expect(value).toContainEqual()](/docs/api/class-genericassertions#generic-assertions-to-contain-equal)

Array or set contains a similar element

[expect(value).toEqual()](/docs/api/class-genericassertions#generic-assertions-to-equal)

Value is similar - deep equality and pattern matching

[expect(value).toHaveLength()](/docs/api/class-genericassertions#generic-assertions-to-have-length)

Array or string has length

[expect(value).toHaveProperty()](/docs/api/class-genericassertions#generic-assertions-to-have-property)

Object has a property

[expect(value).toMatch()](/docs/api/class-genericassertions#generic-assertions-to-match)

String matches a regular expression

[expect(value).toMatchObject()](/docs/api/class-genericassertions#generic-assertions-to-match-object)

Object contains specified properties

[expect(value).toStrictEqual()](/docs/api/class-genericassertions#generic-assertions-to-strict-equal)

Value is similar, including property types

[expect(value).toThrow()](/docs/api/class-genericassertions#generic-assertions-to-throw)

Function throws an error

Asymmetric matchers[​](#asymmetric-matchers "Direct link to Asymmetric matchers")
---------------------------------------------------------------------------------

These expressions can be nested in other assertions to allow more relaxed matching against a given condition.

Matcher

Description

[expect.any()](/docs/api/class-genericassertions#generic-assertions-any)

Matches any instance of a class/primitive

[expect.anything()](/docs/api/class-genericassertions#generic-assertions-anything)

Matches anything

[expect.arrayContaining()](/docs/api/class-genericassertions#generic-assertions-array-containing)

Array contains specific elements

[expect.arrayOf()](/docs/api/class-genericassertions#generic-assertions-array-of)

Array contains elements of specific type

[expect.closeTo()](/docs/api/class-genericassertions#generic-assertions-close-to)

Number is approximately equal

[expect.objectContaining()](/docs/api/class-genericassertions#generic-assertions-object-containing)

Object contains specific properties

[expect.stringContaining()](/docs/api/class-genericassertions#generic-assertions-string-containing)

String contains a substring

[expect.stringMatching()](/docs/api/class-genericassertions#generic-assertions-string-matching)

String matches a regular expression

Negating matchers[​](#negating-matchers "Direct link to Negating matchers")
---------------------------------------------------------------------------

In general, we can expect the opposite to be true by adding a `.not` to the front of the matchers:

    expect(value).not.toEqual(0);await expect(locator).not.toContainText('some text');

Soft assertions[​](#soft-assertions "Direct link to Soft assertions")
---------------------------------------------------------------------

By default, failed assertion will terminate test execution. Playwright also supports _soft assertions_: failed soft assertions **do not** terminate test execution, but mark the test as failed.

    // Make a few checks that will not stop the test when failed...await expect.soft(page.getByTestId('status')).toHaveText('Success');await expect.soft(page.getByTestId('eta')).toHaveText('1 day');// ... and continue the test to check more things.await page.getByRole('link', { name: 'next page' }).click();await expect.soft(page.getByRole('heading', { name: 'Make another order' })).toBeVisible();

At any point during test execution, you can check whether there were any soft assertion failures:

    // Make a few checks that will not stop the test when failed...await expect.soft(page.getByTestId('status')).toHaveText('Success');await expect.soft(page.getByTestId('eta')).toHaveText('1 day');// Avoid running further if there were soft assertion failures.expect(test.info().errors).toHaveLength(0);

Note that soft assertions only work with Playwright test runner.

Custom expect message[​](#custom-expect-message "Direct link to Custom expect message")
---------------------------------------------------------------------------------------

You can specify a custom expect message as a second argument to the `expect` function, for example:

    await expect(page.getByText('Name'), 'should be logged in').toBeVisible();

This message will be shown in reporters, both for passing and failing expects, providing more context about the assertion.

When expect passes, you might see a successful step like this:

    ✅ should be logged in    @example.spec.ts:18

When expect fails, the error would look like this:

        Error: should be logged in    Call log:      - expect.toBeVisible with timeout 5000ms      - waiting for "getByText('Name')"      2 |      3 | test('example test', async({ page }) => {    > 4 |   await expect(page.getByText('Name'), 'should be logged in').toBeVisible();        |                                                                  ^      5 | });      6 |

Soft assertions also support custom message:

    expect.soft(value, 'my soft assertion').toBe(56);

expect.configure[​](#expectconfigure "Direct link to expect.configure")
-----------------------------------------------------------------------

You can create your own pre-configured `expect` instance to have its own defaults such as `timeout` and `soft`.

    const slowExpect = expect.configure({ timeout: 10000 });await slowExpect(locator).toHaveText('Submit');// Always do soft assertions.const softExpect = expect.configure({ soft: true });await softExpect(locator).toHaveText('Submit');

expect.poll[​](#expectpoll "Direct link to expect.poll")
--------------------------------------------------------

You can convert any synchronous `expect` to an asynchronous polling one using `expect.poll`.

The following method will poll given function until it returns HTTP status 200:

    await expect.poll(async () => {  const response = await page.request.get('https://api.example.com');  return response.status();}, {  // Custom expect message for reporting, optional.  message: 'make sure API eventually succeeds',  // Poll for 10 seconds; defaults to 5 seconds. Pass 0 to disable timeout.  timeout: 10000,}).toBe(200);

You can also specify custom polling intervals:

    await expect.poll(async () => {  const response = await page.request.get('https://api.example.com');  return response.status();}, {  // Probe, wait 1s, probe, wait 2s, probe, wait 10s, probe, wait 10s, probe  // ... Defaults to [100, 250, 500, 1000].  intervals: [1_000, 2_000, 10_000],  timeout: 60_000}).toBe(200);

You can combine `expect.configure({ soft: true })` with expect.poll to perform soft assertions in polling logic.

    const softExpect = expect.configure({ soft: true });await softExpect.poll(async () => {  const response = await page.request.get('https://api.example.com');  return response.status();}, {}).toBe(200);

This allows the test to continue even if the assertion inside poll fails.

expect.toPass[​](#expecttopass "Direct link to expect.toPass")
--------------------------------------------------------------

You can retry blocks of code until they are passing successfully.

    await expect(async () => {  const response = await page.request.get('https://api.example.com');  expect(response.status()).toBe(200);}).toPass();

You can also specify custom timeout and retry intervals:

    await expect(async () => {  const response = await page.request.get('https://api.example.com');  expect(response.status()).toBe(200);}).toPass({  // Probe, wait 1s, probe, wait 2s, probe, wait 10s, probe, wait 10s, probe  // ... Defaults to [100, 250, 500, 1000].  intervals: [1_000, 2_000, 10_000],  timeout: 60_000});

Note that by default `toPass` has timeout 0 and does not respect custom [expect timeout](/docs/test-timeouts#expect-timeout).

Add custom matchers using expect.extend[​](#add-custom-matchers-using-expectextend "Direct link to Add custom matchers using expect.extend")
--------------------------------------------------------------------------------------------------------------------------------------------

You can extend Playwright assertions by providing custom matchers. These matchers will be available on the `expect` object.

In this example we add a custom `toHaveAmount` function. Custom matcher should return a `pass` flag indicating whether the assertion passed, and a `message` callback that's used when the assertion fails.

fixtures.ts

    import { expect as baseExpect } from '@playwright/test';import type { Locator } from '@playwright/test';export { test } from '@playwright/test';export const expect = baseExpect.extend({  async toHaveAmount(locator: Locator, expected: number, options?: { timeout?: number }) {    const assertionName = 'toHaveAmount';    let pass: boolean;    let matcherResult: any;    try {      const expectation = this.isNot ? baseExpect(locator).not : baseExpect(locator);      await expectation.toHaveAttribute('data-amount', String(expected), options);      pass = true;    } catch (e: any) {      matcherResult = e.matcherResult;      pass = false;    }    if (this.isNot) {      pass =!pass;    }    const message = pass      ? () => this.utils.matcherHint(assertionName, undefined, undefined, { isNot: this.isNot }) +          '\n\n' +          `Locator: ${locator}\n` +          `Expected: not ${this.utils.printExpected(expected)}\n` +          (matcherResult ? `Received: ${this.utils.printReceived(matcherResult.actual)}` : '')      : () =>  this.utils.matcherHint(assertionName, undefined, undefined, { isNot: this.isNot }) +          '\n\n' +          `Locator: ${locator}\n` +          `Expected: ${this.utils.printExpected(expected)}\n` +          (matcherResult ? `Received: ${this.utils.printReceived(matcherResult.actual)}` : '');    return {      message,      pass,      name: assertionName,      expected,      actual: matcherResult?.actual,    };  },});

Now we can use `toHaveAmount` in the test.

example.spec.ts

    import { test, expect } from './fixtures';test('amount', async () => {  await expect(page.locator('.cart')).toHaveAmount(4);});

### Compatibility with expect library[​](#compatibility-with-expect-library "Direct link to Compatibility with expect library")

note

Do not confuse Playwright's `expect` with the [`expect` library](https://jestjs.io/docs/expect). The latter is not fully integrated with Playwright test runner, so make sure to use Playwright's own `expect`.

### Combine custom matchers from multiple modules[​](#combine-custom-matchers-from-multiple-modules "Direct link to Combine custom matchers from multiple modules")

You can combine custom matchers from multiple files or modules.

fixtures.ts

    import { mergeTests, mergeExpects } from '@playwright/test';import { test as dbTest, expect as dbExpect } from 'database-test-utils';import { test as a11yTest, expect as a11yExpect } from 'a11y-test-utils';export const expect = mergeExpects(dbExpect, a11yExpect);export const test = mergeTests(dbTest, a11yTest);

test.spec.ts

    import { test, expect } from './fixtures';test('passes', async ({ database }) => {  await expect(database).toHaveDatabaseUser('admin');});

# API testing

API testing
===========

Introduction[​](#introduction "Direct link to Introduction")
------------------------------------------------------------

Playwright can be used to get access to the [REST](https://en.wikipedia.org/wiki/Representational_state_transfer) API of your application.

Sometimes you may want to send requests to the server directly from Node.js without loading a page and running js code in it. A few examples where it may come in handy:

*   Test your server API.
*   Prepare server side state before visiting the web application in a test.
*   Validate server side post-conditions after running some actions in the browser.

All of that could be achieved via [APIRequestContext](/docs/api/class-apirequestcontext "APIRequestContext") methods.

Writing API Test[​](#writing-api-test "Direct link to Writing API Test")
------------------------------------------------------------------------

[APIRequestContext](/docs/api/class-apirequestcontext "APIRequestContext") can send all kinds of HTTP(S) requests over network.

The following example demonstrates how to use Playwright to test issues creation via [GitHub API](https://docs.github.com/en/rest). The test suite will do the following:

*   Create a new repository before running tests.
*   Create a few issues and validate server state.
*   Delete the repository after running tests.

### Configuration[​](#configuration "Direct link to Configuration")

GitHub API requires authorization, so we'll configure the token once for all tests. While at it, we'll also set the `baseURL` to simplify the tests. You can either put them in the configuration file, or in the test file with `test.use()`.

playwright.config.ts

    import { defineConfig } from '@playwright/test';export default defineConfig({  use: {    // All requests we send go to this API endpoint.    baseURL: 'https://api.github.com',    extraHTTPHeaders: {      // We set this header per GitHub guidelines.      'Accept': 'application/vnd.github.v3+json',      // Add authorization token to all requests.      // Assuming personal access token available in the environment.      'Authorization': `token ${process.env.API_TOKEN}`,    },  }});

**Proxy configuration**

If your tests need to run behind a proxy, you can specify this in the config and the `request` fixture will pick it up automatically:

playwright.config.ts

    import { defineConfig } from '@playwright/test';export default defineConfig({  use: {    proxy: {      server: 'http://my-proxy:8080',      username: 'user',      password: 'secret'    },  }});

### Writing tests[​](#writing-tests "Direct link to Writing tests")

Playwright Test comes with the built-in `request` fixture that respects configuration options like `baseURL` or `extraHTTPHeaders` we specified and is ready to send some requests.

Now we can add a few tests that will create new issues in the repository.

    const REPO = 'test-repo-1';const USER = 'github-username';test('should create a bug report', async ({ request }) => {  const newIssue = await request.post(`/repos/${USER}/${REPO}/issues`, {    data: {      title: '[Bug] report 1',      body: 'Bug description',    }  });  expect(newIssue.ok()).toBeTruthy();  const issues = await request.get(`/repos/${USER}/${REPO}/issues`);  expect(issues.ok()).toBeTruthy();  expect(await issues.json()).toContainEqual(expect.objectContaining({    title: '[Bug] report 1',    body: 'Bug description'  }));});test('should create a feature request', async ({ request }) => {  const newIssue = await request.post(`/repos/${USER}/${REPO}/issues`, {    data: {      title: '[Feature] request 1',      body: 'Feature description',    }  });  expect(newIssue.ok()).toBeTruthy();  const issues = await request.get(`/repos/${USER}/${REPO}/issues`);  expect(issues.ok()).toBeTruthy();  expect(await issues.json()).toContainEqual(expect.objectContaining({    title: '[Feature] request 1',    body: 'Feature description'  }));});

### Setup and teardown[​](#setup-and-teardown "Direct link to Setup and teardown")

These tests assume that repository exists. You probably want to create a new one before running tests and delete it afterwards. Use `beforeAll` and `afterAll` hooks for that.

    test.beforeAll(async ({ request }) => {  // Create a new repository  const response = await request.post('/user/repos', {    data: {      name: REPO    }  });  expect(response.ok()).toBeTruthy();});test.afterAll(async ({ request }) => {  // Delete the repository  const response = await request.delete(`/repos/${USER}/${REPO}`);  expect(response.ok()).toBeTruthy();});

Using request context[​](#using-request-context "Direct link to Using request context")
---------------------------------------------------------------------------------------

Behind the scenes, [`request` fixture](/docs/api/class-fixtures#fixtures-request) will actually call [apiRequest.newContext()](/docs/api/class-apirequest#api-request-new-context). You can always do that manually if you'd like more control. Below is a standalone script that does the same as `beforeAll` and `afterAll` from above.

    import { request } from '@playwright/test';const REPO = 'test-repo-1';const USER = 'github-username';(async () => {  // Create a context that will issue http requests.  const context = await request.newContext({    baseURL: 'https://api.github.com',  });  // Create a repository.  await context.post('/user/repos', {    headers: {      'Accept': 'application/vnd.github.v3+json',      // Add GitHub personal access token.      'Authorization': `token ${process.env.API_TOKEN}`,    },    data: {      name: REPO    }  });  // Delete a repository.  await context.delete(`/repos/${USER}/${REPO}`, {    headers: {      'Accept': 'application/vnd.github.v3+json',      // Add GitHub personal access token.      'Authorization': `token ${process.env.API_TOKEN}`,    }  });})();

Sending API requests from UI tests[​](#sending-api-requests-from-ui-tests "Direct link to Sending API requests from UI tests")
------------------------------------------------------------------------------------------------------------------------------

While running tests inside browsers you may want to make calls to the HTTP API of your application. It may be helpful if you need to prepare server state before running a test or to check some postconditions on the server after performing some actions in the browser. All of that could be achieved via [APIRequestContext](/docs/api/class-apirequestcontext "APIRequestContext") methods.

### Establishing preconditions[​](#establishing-preconditions "Direct link to Establishing preconditions")

The following test creates a new issue via API and then navigates to the list of all issues in the project to check that it appears at the top of the list.

    import { test, expect } from '@playwright/test';const REPO = 'test-repo-1';const USER = 'github-username';// Request context is reused by all tests in the file.let apiContext;test.beforeAll(async ({ playwright }) => {  apiContext = await playwright.request.newContext({    // All requests we send go to this API endpoint.    baseURL: 'https://api.github.com',    extraHTTPHeaders: {      // We set this header per GitHub guidelines.      'Accept': 'application/vnd.github.v3+json',      // Add authorization token to all requests.      // Assuming personal access token available in the environment.      'Authorization': `token ${process.env.API_TOKEN}`,    },  });});test.afterAll(async ({ }) => {  // Dispose all responses.  await apiContext.dispose();});test('last created issue should be first in the list', async ({ page }) => {  const newIssue = await apiContext.post(`/repos/${USER}/${REPO}/issues`, {    data: {      title: '[Feature] request 1',    }  });  expect(newIssue.ok()).toBeTruthy();  await page.goto(`https://github.com/${USER}/${REPO}/issues`);  const firstIssue = page.locator(`a[data-hovercard-type='issue']`).first();  await expect(firstIssue).toHaveText('[Feature] request 1');});

### Validating postconditions[​](#validating-postconditions "Direct link to Validating postconditions")

The following test creates a new issue via user interface in the browser and then uses checks if it was created via API:

    import { test, expect } from '@playwright/test';const REPO = 'test-repo-1';const USER = 'github-username';// Request context is reused by all tests in the file.let apiContext;test.beforeAll(async ({ playwright }) => {  apiContext = await playwright.request.newContext({    // All requests we send go to this API endpoint.    baseURL: 'https://api.github.com',    extraHTTPHeaders: {      // We set this header per GitHub guidelines.      'Accept': 'application/vnd.github.v3+json',      // Add authorization token to all requests.      // Assuming personal access token available in the environment.      'Authorization': `token ${process.env.API_TOKEN}`,    },  });});test.afterAll(async ({ }) => {  // Dispose all responses.  await apiContext.dispose();});test('last created issue should be on the server', async ({ page }) => {  await page.goto(`https://github.com/${USER}/${REPO}/issues`);  await page.getByText('New Issue').click();  await page.getByRole('textbox', { name: 'Title' }).fill('Bug report 1');  await page.getByRole('textbox', { name: 'Comment body' }).fill('Bug description');  await page.getByText('Submit new issue').click();  const issueId = new URL(page.url()).pathname.split('/').pop();  const newIssue = await apiContext.get(      `https://api.github.com/repos/${USER}/${REPO}/issues/${issueId}`  );  expect(newIssue.ok()).toBeTruthy();  expect(newIssue.json()).toEqual(expect.objectContaining({    title: 'Bug report 1'  }));});

Reusing authentication state[​](#reusing-authentication-state "Direct link to Reusing authentication state")
------------------------------------------------------------------------------------------------------------

Web apps use cookie-based or token-based authentication, where authenticated state is stored as [cookies](https://developer.mozilla.org/en-US/docs/Web/HTTP/Cookies). Playwright provides [apiRequestContext.storageState()](/docs/api/class-apirequestcontext#api-request-context-storage-state) method that can be used to retrieve storage state from an authenticated context and then create new contexts with that state.

Storage state is interchangeable between [BrowserContext](/docs/api/class-browsercontext "BrowserContext") and [APIRequestContext](/docs/api/class-apirequestcontext "APIRequestContext"). You can use it to log in via API calls and then create a new context with cookies already there. The following code snippet retrieves state from an authenticated [APIRequestContext](/docs/api/class-apirequestcontext "APIRequestContext") and creates a new [BrowserContext](/docs/api/class-browsercontext "BrowserContext") with that state.

    const requestContext = await request.newContext({  httpCredentials: {    username: 'user',    password: 'passwd'  }});await requestContext.get(`https://api.example.com/login`);// Save storage state into the file.await requestContext.storageState({ path: 'state.json' });// Create a new context with the saved storage state.const context = await browser.newContext({ storageState: 'state.json' });

Context request vs global request[​](#context-request-vs-global-request "Direct link to Context request vs global request")
---------------------------------------------------------------------------------------------------------------------------

There are two types of [APIRequestContext](/docs/api/class-apirequestcontext "APIRequestContext"):

*   associated with a [BrowserContext](/docs/api/class-browsercontext "BrowserContext")
*   isolated instance, created via [apiRequest.newContext()](/docs/api/class-apirequest#api-request-new-context)

The main difference is that [APIRequestContext](/docs/api/class-apirequestcontext "APIRequestContext") accessible via [browserContext.request](/docs/api/class-browsercontext#browser-context-request) and [page.request](/docs/api/class-page#page-request) will populate request's `Cookie` header from the browser context and will automatically update browser cookies if [APIResponse](/docs/api/class-apiresponse "APIResponse") has `Set-Cookie` header:

    test('context request will share cookie storage with its browser context', async ({  page,  context,}) => {  await context.route('https://www.github.com/', async route => {    // Send an API request that shares cookie storage with the browser context.    const response = await context.request.fetch(route.request());    const responseHeaders = response.headers();    // The response will have 'Set-Cookie' header.    const responseCookies = new Map(responseHeaders['set-cookie']        .split('\n')        .map(c => c.split(';', 2)[0].split('=')));    // The response will have 3 cookies in 'Set-Cookie' header.    expect(responseCookies.size).toBe(3);    const contextCookies = await context.cookies();    // The browser context will already contain all the cookies from the API response.    expect(new Map(contextCookies.map(({ name, value }) =>      [name, value])    )).toEqual(responseCookies);    await route.fulfill({      response,      headers: { ...responseHeaders, foo: 'bar' },    });  });  await page.goto('https://www.github.com/');});

If you don't want [APIRequestContext](/docs/api/class-apirequestcontext "APIRequestContext") to use and update cookies from the browser context, you can manually create a new instance of [APIRequestContext](/docs/api/class-apirequestcontext "APIRequestContext") which will have its own isolated cookies:

    test('global context request has isolated cookie storage', async ({  page,  context,  browser,  playwright}) => {  // Create a new instance of APIRequestContext with isolated cookie storage.  const request = await playwright.request.newContext();  await context.route('https://www.github.com/', async route => {    const response = await request.fetch(route.request());    const responseHeaders = response.headers();    const responseCookies = new Map(responseHeaders['set-cookie']        .split('\n')        .map(c => c.split(';', 2)[0].split('=')));    // The response will have 3 cookies in 'Set-Cookie' header.    expect(responseCookies.size).toBe(3);    const contextCookies = await context.cookies();    // The browser context will not have any cookies from the isolated API request.    expect(contextCookies.length).toBe(0);    // Manually export cookie storage.    const storageState = await request.storageState();    // Create a new context and initialize it with the cookies from the global request.    const browserContext2 = await browser.newContext({ storageState });    const contextCookies2 = await browserContext2.cookies();    // The new browser context will already contain all the cookies from the API response.    expect(        new Map(contextCookies2.map(({ name, value }) => [name, value]))    ).toEqual(responseCookies);    await route.fulfill({      response,      headers: { ...responseHeaders, foo: 'bar' },    });  });  await page.goto('https://www.github.com/');  await request.dispose();});

# Authentication

Authentication
==============

Introduction[​](#introduction "Direct link to Introduction")
------------------------------------------------------------

Playwright executes tests in isolated environments called [browser contexts](/docs/browser-contexts). This isolation model improves reproducibility and prevents cascading test failures. Tests can load existing authenticated state. This eliminates the need to authenticate in every test and speeds up test execution.

Core concepts[​](#core-concepts "Direct link to Core concepts")
---------------------------------------------------------------

Regardless of the authentication strategy you choose, you are likely to store authenticated browser state on the file system.

We recommend to create `playwright/.auth` directory and add it to your `.gitignore`. Your authentication routine will produce authenticated browser state and save it to a file in this `playwright/.auth` directory. Later on, tests will reuse this state and start already authenticated.

danger

The browser state file may contain sensitive cookies and headers that could be used to impersonate you or your test account. We strongly discourage checking them into private or public repositories.

*   Bash
*   PowerShell
*   Batch

    mkdir -p playwright/.authecho $'\nplaywright/.auth' >> .gitignore

    New-Item -ItemType Directory -Force -Path playwright\.authAdd-Content -path .gitignore "`r`nplaywright/.auth"

    md playwright\.authecho. >> .gitignoreecho "playwright/.auth" >> .gitignore

Basic: shared account in all tests[​](#basic-shared-account-in-all-tests "Direct link to Basic: shared account in all tests")
-----------------------------------------------------------------------------------------------------------------------------

This is the **recommended** approach for tests **without server-side state**. Authenticate once in the **setup project**, save the authentication state, and then reuse it to bootstrap each test already authenticated.

**When to use**

*   When you can imagine all your tests running at the same time with the same account, without affecting each other.

**When not to use**

*   Your tests modify server-side state. For example, one test checks the rendering of the settings page, while the other test is changing the setting, and you run tests in parallel. In this case, tests must use different accounts.
*   Your authentication is browser-specific.

**Details**

Create `tests/auth.setup.ts` that will prepare authenticated browser state for all other tests.

tests/auth.setup.ts

    import { test as setup, expect } from '@playwright/test';import path from 'path';const authFile = path.join(__dirname, '../playwright/.auth/user.json');setup('authenticate', async ({ page }) => {  // Perform authentication steps. Replace these actions with your own.  await page.goto('https://github.com/login');  await page.getByLabel('Username or email address').fill('username');  await page.getByLabel('Password').fill('password');  await page.getByRole('button', { name: 'Sign in' }).click();  // Wait until the page receives the cookies.  //  // Sometimes login flow sets cookies in the process of several redirects.  // Wait for the final URL to ensure that the cookies are actually set.  await page.waitForURL('https://github.com/');  // Alternatively, you can wait until the page reaches a state where all cookies are set.  await expect(page.getByRole('button', { name: 'View profile and more' })).toBeVisible();  // End of authentication steps.  await page.context().storageState({ path: authFile });});

Create a new `setup` project in the config and declare it as a [dependency](/docs/test-projects#dependencies) for all your testing projects. This project will always run and authenticate before all the tests. All testing projects should use the authenticated state as `storageState`.

playwright.config.ts

    import { defineConfig, devices } from '@playwright/test';export default defineConfig({  projects: [    // Setup project    { name: 'setup', testMatch: /.*\.setup\.ts/ },    {      name: 'chromium',      use: {        ...devices['Desktop Chrome'],        // Use prepared auth state.        storageState: 'playwright/.auth/user.json',      },      dependencies: ['setup'],    },    {      name: 'firefox',      use: {        ...devices['Desktop Firefox'],        // Use prepared auth state.        storageState: 'playwright/.auth/user.json',      },      dependencies: ['setup'],    },  ],});

Tests start already authenticated because we specified `storageState` in the config.

tests/example.spec.ts

    import { test } from '@playwright/test';test('test', async ({ page }) => {  // page is authenticated});

Note that you need to delete the stored state when it expires. If you don't need to keep the state between test runs, write the browser state under [testProject.outputDir](/docs/api/class-testproject#test-project-output-dir), which is automatically cleaned up before every test run.

### Authenticating in UI mode[​](#authenticating-in-ui-mode "Direct link to Authenticating in UI mode")

UI mode will not run the `setup` project by default to improve testing speed. We recommend to authenticate by manually running the `auth.setup.ts` from time to time, whenever existing authentication expires.

First [enable the `setup` project in the filters](/docs/test-ui-mode#filtering-tests), then click the triangle button next to `auth.setup.ts` file, and then disable the `setup` project in the filters again.

Moderate: one account per parallel worker[​](#moderate-one-account-per-parallel-worker "Direct link to Moderate: one account per parallel worker")
--------------------------------------------------------------------------------------------------------------------------------------------------

This is the **recommended** approach for tests that **modify server-side state**. In Playwright, worker processes run in parallel. In this approach, each parallel worker is authenticated once. All tests ran by worker are reusing the same authentication state. We will need multiple testing accounts, one per each parallel worker.

**When to use**

*   Your tests modify shared server-side state. For example, one test checks the rendering of the settings page, while the other test is changing the setting.

**When not to use**

*   Your tests do not modify any shared server-side state. In this case, all tests can use a single shared account.

**Details**

We will authenticate once per [worker process](/docs/test-parallel#worker-processes), each with a unique account.

Create `playwright/fixtures.ts` file that will [override `storageState` fixture](/docs/test-fixtures#overriding-fixtures) to authenticate once per worker. Use [testInfo.parallelIndex](/docs/api/class-testinfo#test-info-parallel-index) to differentiate between workers.

playwright/fixtures.ts

    import { test as baseTest, expect } from '@playwright/test';import fs from 'fs';import path from 'path';export * from '@playwright/test';export const test = baseTest.extend<{}, { workerStorageState: string }>({  // Use the same storage state for all tests in this worker.  storageState: ({ workerStorageState }, use) => use(workerStorageState),  // Authenticate once per worker with a worker-scoped fixture.  workerStorageState: [async ({ browser }, use) => {    // Use parallelIndex as a unique identifier for each worker.    const id = test.info().parallelIndex;    const fileName = path.resolve(test.info().project.outputDir, `.auth/${id}.json`);    if (fs.existsSync(fileName)) {      // Reuse existing authentication state if any.      await use(fileName);      return;    }    // Important: make sure we authenticate in a clean environment by unsetting storage state.    const page = await browser.newPage({ storageState: undefined });    // Acquire a unique account, for example create a new one.    // Alternatively, you can have a list of precreated accounts for testing.    // Make sure that accounts are unique, so that multiple team members    // can run tests at the same time without interference.    const account = await acquireAccount(id);    // Perform authentication steps. Replace these actions with your own.    await page.goto('https://github.com/login');    await page.getByLabel('Username or email address').fill(account.username);    await page.getByLabel('Password').fill(account.password);    await page.getByRole('button', { name: 'Sign in' }).click();    // Wait until the page receives the cookies.    //    // Sometimes login flow sets cookies in the process of several redirects.    // Wait for the final URL to ensure that the cookies are actually set.    await page.waitForURL('https://github.com/');    // Alternatively, you can wait until the page reaches a state where all cookies are set.    await expect(page.getByRole('button', { name: 'View profile and more' })).toBeVisible();    // End of authentication steps.    await page.context().storageState({ path: fileName });    await page.close();    await use(fileName);  }, { scope: 'worker' }],});

Now, each test file should import `test` from our fixtures file instead of `@playwright/test`. No changes are needed in the config.

tests/example.spec.ts

    // Important: import our fixtures.import { test, expect } from '../playwright/fixtures';test('test', async ({ page }) => {  // page is authenticated});

Advanced scenarios[​](#advanced-scenarios "Direct link to Advanced scenarios")
------------------------------------------------------------------------------

### Authenticate with API request[​](#authenticate-with-api-request "Direct link to Authenticate with API request")

**When to use**

*   Your web application supports authenticating via API that is easier/faster than interacting with the app UI.

**Details**

We will send the API request with [APIRequestContext](/docs/api/class-apirequestcontext "APIRequestContext") and then save authenticated state as usual.

In the [setup project](#basic-shared-account-in-all-tests):

tests/auth.setup.ts

    import { test as setup } from '@playwright/test';const authFile = 'playwright/.auth/user.json';setup('authenticate', async ({ request }) => {  // Send authentication request. Replace with your own.  await request.post('https://github.com/login', {    form: {      'user': 'user',      'password': 'password'    }  });  await request.storageState({ path: authFile });});

Alternatively, in a [worker fixture](#moderate-one-account-per-parallel-worker):

playwright/fixtures.ts

    import { test as baseTest, request } from '@playwright/test';import fs from 'fs';import path from 'path';export * from '@playwright/test';export const test = baseTest.extend<{}, { workerStorageState: string }>({  // Use the same storage state for all tests in this worker.  storageState: ({ workerStorageState }, use) => use(workerStorageState),  // Authenticate once per worker with a worker-scoped fixture.  workerStorageState: [async ({}, use) => {    // Use parallelIndex as a unique identifier for each worker.    const id = test.info().parallelIndex;    const fileName = path.resolve(test.info().project.outputDir, `.auth/${id}.json`);    if (fs.existsSync(fileName)) {      // Reuse existing authentication state if any.      await use(fileName);      return;    }    // Important: make sure we authenticate in a clean environment by unsetting storage state.    const context = await request.newContext({ storageState: undefined });    // Acquire a unique account, for example create a new one.    // Alternatively, you can have a list of precreated accounts for testing.    // Make sure that accounts are unique, so that multiple team members    // can run tests at the same time without interference.    const account = await acquireAccount(id);    // Send authentication request. Replace with your own.    await context.post('https://github.com/login', {      form: {        'user': 'user',        'password': 'password'      }    });    await context.storageState({ path: fileName });    await context.dispose();    await use(fileName);  }, { scope: 'worker' }],});

### Multiple signed in roles[​](#multiple-signed-in-roles "Direct link to Multiple signed in roles")

**When to use**

*   You have more than one role in your end to end tests, but you can reuse accounts across all tests.

**Details**

We will authenticate multiple times in the setup project.

tests/auth.setup.ts

    import { test as setup, expect } from '@playwright/test';const adminFile = 'playwright/.auth/admin.json';setup('authenticate as admin', async ({ page }) => {  // Perform authentication steps. Replace these actions with your own.  await page.goto('https://github.com/login');  await page.getByLabel('Username or email address').fill('admin');  await page.getByLabel('Password').fill('password');  await page.getByRole('button', { name: 'Sign in' }).click();  // Wait until the page receives the cookies.  //  // Sometimes login flow sets cookies in the process of several redirects.  // Wait for the final URL to ensure that the cookies are actually set.  await page.waitForURL('https://github.com/');  // Alternatively, you can wait until the page reaches a state where all cookies are set.  await expect(page.getByRole('button', { name: 'View profile and more' })).toBeVisible();  // End of authentication steps.  await page.context().storageState({ path: adminFile });});const userFile = 'playwright/.auth/user.json';setup('authenticate as user', async ({ page }) => {  // Perform authentication steps. Replace these actions with your own.  await page.goto('https://github.com/login');  await page.getByLabel('Username or email address').fill('user');  await page.getByLabel('Password').fill('password');  await page.getByRole('button', { name: 'Sign in' }).click();  // Wait until the page receives the cookies.  //  // Sometimes login flow sets cookies in the process of several redirects.  // Wait for the final URL to ensure that the cookies are actually set.  await page.waitForURL('https://github.com/');  // Alternatively, you can wait until the page reaches a state where all cookies are set.  await expect(page.getByRole('button', { name: 'View profile and more' })).toBeVisible();  // End of authentication steps.  await page.context().storageState({ path: userFile });});

After that, specify `storageState` for each test file or test group, **instead of** setting it in the config.

tests/example.spec.ts

    import { test } from '@playwright/test';test.use({ storageState: 'playwright/.auth/admin.json' });test('admin test', async ({ page }) => {  // page is authenticated as admin});test.describe(() => {  test.use({ storageState: 'playwright/.auth/user.json' });  test('user test', async ({ page }) => {    // page is authenticated as a user  });});

See also about [authenticating in the UI mode](#authenticating-in-ui-mode).

### Testing multiple roles together[​](#testing-multiple-roles-together "Direct link to Testing multiple roles together")

**When to use**

*   You need to test how multiple authenticated roles interact together, in a single test.

**Details**

Use multiple [BrowserContext](/docs/api/class-browsercontext "BrowserContext")s and [Page](/docs/api/class-page "Page")s with different storage states in the same test.

tests/example.spec.ts

    import { test } from '@playwright/test';test('admin and user', async ({ browser }) => {  // adminContext and all pages inside, including adminPage, are signed in as "admin".  const adminContext = await browser.newContext({ storageState: 'playwright/.auth/admin.json' });  const adminPage = await adminContext.newPage();  // userContext and all pages inside, including userPage, are signed in as "user".  const userContext = await browser.newContext({ storageState: 'playwright/.auth/user.json' });  const userPage = await userContext.newPage();  // ... interact with both adminPage and userPage ...  await adminContext.close();  await userContext.close();});

### Testing multiple roles with POM fixtures[​](#testing-multiple-roles-with-pom-fixtures "Direct link to Testing multiple roles with POM fixtures")

**When to use**

*   You need to test how multiple authenticated roles interact together, in a single test.

**Details**

You can introduce fixtures that will provide a page authenticated as each role.

Below is an example that [creates fixtures](/docs/test-fixtures#creating-a-fixture) for two [Page Object Models](/docs/pom) - admin POM and user POM. It assumes `adminStorageState.json` and `userStorageState.json` files were created in the global setup.

playwright/fixtures.ts

    import { test as base, type Page, type Locator } from '@playwright/test';// Page Object Model for the "admin" page.// Here you can add locators and helper methods specific to the admin page.class AdminPage {  // Page signed in as "admin".  page: Page;  // Example locator pointing to "Welcome, Admin" greeting.  greeting: Locator;  constructor(page: Page) {    this.page = page;    this.greeting = page.locator('#greeting');  }}// Page Object Model for the "user" page.// Here you can add locators and helper methods specific to the user page.class UserPage {  // Page signed in as "user".  page: Page;  // Example locator pointing to "Welcome, User" greeting.  greeting: Locator;  constructor(page: Page) {    this.page = page;    this.greeting = page.locator('#greeting');  }}// Declare the types of your fixtures.type MyFixtures = {  adminPage: AdminPage;  userPage: UserPage;};export * from '@playwright/test';export const test = base.extend<MyFixtures>({  adminPage: async ({ browser }, use) => {    const context = await browser.newContext({ storageState: 'playwright/.auth/admin.json' });    const adminPage = new AdminPage(await context.newPage());    await use(adminPage);    await context.close();  },  userPage: async ({ browser }, use) => {    const context = await browser.newContext({ storageState: 'playwright/.auth/user.json' });    const userPage = new UserPage(await context.newPage());    await use(userPage);    await context.close();  },});

tests/example.spec.ts

    // Import test with our new fixtures.import { test, expect } from '../playwright/fixtures';// Use adminPage and userPage fixtures in the test.test('admin and user', async ({ adminPage, userPage }) => {  // ... interact with both adminPage and userPage ...  await expect(adminPage.greeting).toHaveText('Welcome, Admin');  await expect(userPage.greeting).toHaveText('Welcome, User');});

### Session storage[​](#session-storage "Direct link to Session storage")

Reusing authenticated state covers [cookies](https://developer.mozilla.org/en-US/docs/Web/HTTP/Cookies), [local storage](https://developer.mozilla.org/en-US/docs/Web/API/Storage) and [IndexedDB](https://developer.mozilla.org/en-US/docs/Web/API/IndexedDB_API) based authentication. Rarely, [session storage](https://developer.mozilla.org/en-US/docs/Web/API/Window/sessionStorage) is used for storing information associated with the signed-in state. Session storage is specific to a particular domain and is not persisted across page loads. Playwright does not provide API to persist session storage, but the following snippet can be used to save/load session storage.

    // Get session storage and store as env variableconst sessionStorage = await page.evaluate(() => JSON.stringify(sessionStorage));fs.writeFileSync('playwright/.auth/session.json', sessionStorage, 'utf-8');// Set session storage in a new contextconst sessionStorage = JSON.parse(fs.readFileSync('playwright/.auth/session.json', 'utf-8'));await context.addInitScript(storage => {  if (window.location.hostname === 'example.com') {    for (const [key, value] of Object.entries(storage))      window.sessionStorage.setItem(key, value);  }}, sessionStorage);

### Avoid authentication in some tests[​](#avoid-authentication-in-some-tests "Direct link to Avoid authentication in some tests")

You can reset storage state in a test file to avoid authentication that was set up for the whole project.

not-signed-in.spec.ts

    import { test } from '@playwright/test';// Reset storage state for this file to avoid being authenticatedtest.use({ storageState: { cookies: [], origins: [] } });test('not signed in test', async ({ page }) => {  // ...});

# Auto-waiting

Auto-waiting
============

Introduction[​](#introduction "Direct link to Introduction")
------------------------------------------------------------

Playwright performs a range of actionability checks on the elements before making actions to ensure these actions behave as expected. It auto-waits for all the relevant checks to pass and only then performs the requested action. If the required checks do not pass within the given `timeout`, action fails with the `TimeoutError`.

For example, for [locator.click()](/docs/api/class-locator#locator-click), Playwright will ensure that:

*   locator resolves to exactly one element
*   element is [Visible](#visible "Visible")
*   element is [Stable](#stable "Stable"), as in not animating or completed animation
*   element [Receives Events](#receives-events "Receives Events"), as in not obscured by other elements
*   element is [Enabled](#enabled "Enabled")

Here is the complete list of actionability checks performed for each action:

Action

[Visible](#visible "Visible")

[Stable](#stable "Stable")

[Receives Events](#receives-events "Receives Events")

[Enabled](#enabled "Enabled")

[Editable](#editable "Editable")

[locator.check()](/docs/api/class-locator#locator-check)

Yes

Yes

Yes

Yes

\-

[locator.click()](/docs/api/class-locator#locator-click)

Yes

Yes

Yes

Yes

\-

[locator.dblclick()](/docs/api/class-locator#locator-dblclick)

Yes

Yes

Yes

Yes

\-

[locator.setChecked()](/docs/api/class-locator#locator-set-checked)

Yes

Yes

Yes

Yes

\-

[locator.tap()](/docs/api/class-locator#locator-tap)

Yes

Yes

Yes

Yes

\-

[locator.uncheck()](/docs/api/class-locator#locator-uncheck)

Yes

Yes

Yes

Yes

\-

[locator.hover()](/docs/api/class-locator#locator-hover)

Yes

Yes

Yes

\-

\-

[locator.dragTo()](/docs/api/class-locator#locator-drag-to)

Yes

Yes

Yes

\-

\-

[locator.screenshot()](/docs/api/class-locator#locator-screenshot)

Yes

Yes

\-

\-

\-

[locator.fill()](/docs/api/class-locator#locator-fill)

Yes

\-

\-

Yes

Yes

[locator.clear()](/docs/api/class-locator#locator-clear)

Yes

\-

\-

Yes

Yes

[locator.selectOption()](/docs/api/class-locator#locator-select-option)

Yes

\-

\-

Yes

\-

[locator.selectText()](/docs/api/class-locator#locator-select-text)

Yes

\-

\-

\-

\-

[locator.scrollIntoViewIfNeeded()](/docs/api/class-locator#locator-scroll-into-view-if-needed)

\-

Yes

\-

\-

\-

[locator.blur()](/docs/api/class-locator#locator-blur)

\-

\-

\-

\-

\-

[locator.dispatchEvent()](/docs/api/class-locator#locator-dispatch-event)

\-

\-

\-

\-

\-

[locator.focus()](/docs/api/class-locator#locator-focus)

\-

\-

\-

\-

\-

[locator.press()](/docs/api/class-locator#locator-press)

\-

\-

\-

\-

\-

[locator.pressSequentially()](/docs/api/class-locator#locator-press-sequentially)

\-

\-

\-

\-

\-

[locator.setInputFiles()](/docs/api/class-locator#locator-set-input-files)

\-

\-

\-

\-

\-

Forcing actions[​](#forcing-actions "Direct link to Forcing actions")
---------------------------------------------------------------------

Some actions like [locator.click()](/docs/api/class-locator#locator-click) support `force` option that disables non-essential actionability checks, for example passing truthy `force` to [locator.click()](/docs/api/class-locator#locator-click) method will not check that the target element actually receives click events.

Assertions[​](#assertions "Direct link to Assertions")
------------------------------------------------------

Playwright includes auto-retrying assertions that remove flakiness by waiting until the condition is met, similarly to auto-waiting before actions.

Assertion

Description

[expect(locator).toBeAttached()](/docs/api/class-locatorassertions#locator-assertions-to-be-attached)

Element is attached

[expect(locator).toBeChecked()](/docs/api/class-locatorassertions#locator-assertions-to-be-checked)

Checkbox is checked

[expect(locator).toBeDisabled()](/docs/api/class-locatorassertions#locator-assertions-to-be-disabled)

Element is disabled

[expect(locator).toBeEditable()](/docs/api/class-locatorassertions#locator-assertions-to-be-editable)

Element is editable

[expect(locator).toBeEmpty()](/docs/api/class-locatorassertions#locator-assertions-to-be-empty)

Container is empty

[expect(locator).toBeEnabled()](/docs/api/class-locatorassertions#locator-assertions-to-be-enabled)

Element is enabled

[expect(locator).toBeFocused()](/docs/api/class-locatorassertions#locator-assertions-to-be-focused)

Element is focused

[expect(locator).toBeHidden()](/docs/api/class-locatorassertions#locator-assertions-to-be-hidden)

Element is not visible

[expect(locator).toBeInViewport()](/docs/api/class-locatorassertions#locator-assertions-to-be-in-viewport)

Element intersects viewport

[expect(locator).toBeVisible()](/docs/api/class-locatorassertions#locator-assertions-to-be-visible)

Element is visible

[expect(locator).toContainText()](/docs/api/class-locatorassertions#locator-assertions-to-contain-text)

Element contains text

[expect(locator).toHaveAttribute()](/docs/api/class-locatorassertions#locator-assertions-to-have-attribute)

Element has a DOM attribute

[expect(locator).toHaveClass()](/docs/api/class-locatorassertions#locator-assertions-to-have-class)

Element has a class property

[expect(locator).toHaveCount()](/docs/api/class-locatorassertions#locator-assertions-to-have-count)

List has exact number of children

[expect(locator).toHaveCSS()](/docs/api/class-locatorassertions#locator-assertions-to-have-css)

Element has CSS property

[expect(locator).toHaveId()](/docs/api/class-locatorassertions#locator-assertions-to-have-id)

Element has an ID

[expect(locator).toHaveJSProperty()](/docs/api/class-locatorassertions#locator-assertions-to-have-js-property)

Element has a JavaScript property

[expect(locator).toHaveText()](/docs/api/class-locatorassertions#locator-assertions-to-have-text)

Element matches text

[expect(locator).toHaveValue()](/docs/api/class-locatorassertions#locator-assertions-to-have-value)

Input has a value

[expect(locator).toHaveValues()](/docs/api/class-locatorassertions#locator-assertions-to-have-values)

Select has options selected

[expect(page).toHaveTitle()](/docs/api/class-pageassertions#page-assertions-to-have-title)

Page has a title

[expect(page).toHaveURL()](/docs/api/class-pageassertions#page-assertions-to-have-url)

Page has a URL

[expect(response).toBeOK()](/docs/api/class-apiresponseassertions#api-response-assertions-to-be-ok)

Response has an OK status

Learn more in the [assertions guide](/docs/test-assertions).

Visible[​](#visible "Direct link to Visible")
---------------------------------------------

Element is considered visible when it has non-empty bounding box and does not have `visibility:hidden` computed style.

Note that according to this definition:

*   Elements of zero size **are not** considered visible.
*   Elements with `display:none` **are not** considered visible.
*   Elements with `opacity:0` **are** considered visible.

Stable[​](#stable "Direct link to Stable")
------------------------------------------

Element is considered stable when it has maintained the same bounding box for at least two consecutive animation frames.

Enabled[​](#enabled "Direct link to Enabled")
---------------------------------------------

Element is considered enabled when it is **not disabled**.

Element is **disabled** when:

*   it is a `<button>`, `<select>`, `<input>`, `<textarea>`, `<option>` or `<optgroup>` with a `[disabled]` attribute;
*   it is a `<button>`, `<select>`, `<input>`, `<textarea>`, `<option>` or `<optgroup>` that is a part of a `<fieldset>` with a `[disabled]` attribute;
*   it is a descendant of an element with `[aria-disabled=true]` attribute.

Editable[​](#editable "Direct link to Editable")
------------------------------------------------

Element is considered editable when it is [enabled](#enabled "Enabled") and is **not readonly**.

Element is **readonly** when:

*   it is a `<select>`, `<input>` or `<textarea>` with a `[readonly]` attribute;
*   it has an `[aria-readonly=true]` attribute and an aria role that [supports it](https://w3c.github.io/aria/#aria-readonly).

Receives Events[​](#receives-events "Direct link to Receives Events")
---------------------------------------------------------------------

Element is considered receiving pointer events when it is the hit target of the pointer event at the action point. For example, when clicking at the point `(10;10)`, Playwright checks whether some other element (usually an overlay) will instead capture the click at `(10;10)`.

For example, consider a scenario where Playwright will click `Sign Up` button regardless of when the [locator.click()](/docs/api/class-locator#locator-click) call was made:

*   page is checking that user name is unique and `Sign Up` button is disabled;
*   after checking with the server, the disabled `Sign Up` button is replaced with another one that is now enabled.

# Best Practices

Best Practices
==============

Introduction[​](#introduction "Direct link to Introduction")
------------------------------------------------------------

This guide should help you to make sure you are following our best practices and writing tests that are more resilient.

Testing philosophy[​](#testing-philosophy "Direct link to Testing philosophy")
------------------------------------------------------------------------------

### Test user-visible behavior[​](#test-user-visible-behavior "Direct link to Test user-visible behavior")

Automated tests should verify that the application code works for the end users, and avoid relying on implementation details such as things which users will not typically use, see, or even know about such as the name of a function, whether something is an array, or the CSS class of some element. The end user will see or interact with what is rendered on the page, so your test should typically only see/interact with the same rendered output.

### Make tests as isolated as possible[​](#make-tests-as-isolated-as-possible "Direct link to Make tests as isolated as possible")

Each test should be completely isolated from another test and should run independently with its own local storage, session storage, data, cookies etc. [Test isolation](/docs/browser-contexts) improves reproducibility, makes debugging easier and prevents cascading test failures.

In order to avoid repetition for a particular part of your test you can use [before and after hooks](/docs/api/class-test). Within your test file add a before hook to run a part of your test before each test such as going to a particular URL or logging in to a part of your app. This keeps your tests isolated as no test relies on another. However it is also ok to have a little duplication when tests are simple enough especially if it keeps your tests clearer and easier to read and maintain.

    import { test } from '@playwright/test';test.beforeEach(async ({ page }) => {  // Runs before each test and signs in each page.  await page.goto('https://github.com/login');  await page.getByLabel('Username or email address').fill('username');  await page.getByLabel('Password').fill('password');  await page.getByRole('button', { name: 'Sign in' }).click();});test('first', async ({ page }) => {  // page is signed in.});test('second', async ({ page }) => {  // page is signed in.});

You can also reuse the signed-in state in the tests with [setup project](/docs/auth#basic-shared-account-in-all-tests). That way you can log in only once and then skip the log in step for all of the tests.

### Avoid testing third-party dependencies[​](#avoid-testing-third-party-dependencies "Direct link to Avoid testing third-party dependencies")

Only test what you control. Don't try to test links to external sites or third party servers that you do not control. Not only is it time consuming and can slow down your tests but also you cannot control the content of the page you are linking to, or if there are cookie banners or overlay pages or anything else that might cause your test to fail.

Instead, use the [Playwright Network API](/docs/network#handle-requests) and guarantee the response needed.

    await page.route('**/api/fetch_data_third_party_dependency', route => route.fulfill({  status: 200,  body: testData,}));await page.goto('https://example.com');

### Testing with a database[​](#testing-with-a-database "Direct link to Testing with a database")

If working with a database then make sure you control the data. Test against a staging environment and make sure it doesn't change. For visual regression tests make sure the operating system and browser versions are the same.

Best Practices[​](#best-practices "Direct link to Best Practices")
------------------------------------------------------------------

### Use locators[​](#use-locators "Direct link to Use locators")

In order to write end to end tests we need to first find elements on the webpage. We can do this by using Playwright's built in [locators](/docs/locators). Locators come with auto waiting and retry-ability. Auto waiting means that Playwright performs a range of actionability checks on the elements, such as ensuring the element is visible and enabled before it performs the click. To make tests resilient, we recommend prioritizing user-facing attributes and explicit contracts.

    // 👍page.getByRole('button', { name: 'submit' });

#### Use chaining and filtering[​](#use-chaining-and-filtering "Direct link to Use chaining and filtering")

Locators can be [chained](/docs/locators#matching-inside-a-locator) to narrow down the search to a particular part of the page.

    const product = page.getByRole('listitem').filter({ hasText: 'Product 2' });

You can also [filter locators](/docs/locators#filtering-locators) by text or by another locator.

    await page    .getByRole('listitem')    .filter({ hasText: 'Product 2' })    .getByRole('button', { name: 'Add to cart' })    .click();

#### Prefer user-facing attributes to XPath or CSS selectors[​](#prefer-user-facing-attributes-to-xpath-or-css-selectors "Direct link to Prefer user-facing attributes to XPath or CSS selectors")

Your DOM can easily change so having your tests depend on your DOM structure can lead to failing tests. For example consider selecting this button by its CSS classes. Should the designer change something then the class might change, thus breaking your test.

    // 👎page.locator('button.buttonIcon.episode-actions-later');

Use locators that are resilient to changes in the DOM.

    // 👍page.getByRole('button', { name: 'submit' });

### Generate locators[​](#generate-locators "Direct link to Generate locators")

Playwright has a [test generator](/docs/codegen) that can generate tests and pick locators for you. It will look at your page and figure out the best locator, prioritizing role, text and test id locators. If the generator finds multiple elements matching the locator, it will improve the locator to make it resilient and uniquely identify the target element, so you don't have to worry about failing tests due to locators.

#### Use `codegen` to generate locators[​](#use-codegen-to-generate-locators "Direct link to use-codegen-to-generate-locators")

To pick a locator run the `codegen` command followed by the URL that you would like to pick a locator from.

*   npm
*   yarn
*   pnpm

    npx playwright codegen playwright.dev

    yarn playwright codegen playwright.dev

    pnpm exec playwright codegen playwright.dev

This will open a new browser window as well as the Playwright inspector. To pick a locator first click on the 'Record' button to stop the recording. By default when you run the `codegen` command it will start a new recording. Once you stop the recording the 'Pick Locator' button will be available to click.

You can then hover over any element on your page in the browser window and see the locator highlighted below your cursor. Clicking on an element will add the locator into the Playwright inspector. You can either copy the locator and paste into your test file or continue to explore the locator by editing it in the Playwright Inspector, for example by modifying the text, and seeing the results in the browser window.

![generating locators with codegen](https://user-images.githubusercontent.com/13063165/212103268-e7d8ee8b-d307-4cba-be13-831f3fbb1f40.png)

#### Use the VS Code extension to generate locators[​](#use-the-vs-code-extension-to-generate-locators "Direct link to Use the VS Code extension to generate locators")

You can also use the [VS Code Extension](/docs/getting-started-vscode) to generate locators as well as record a test. The VS Code extension also gives you a great developer experience when writing, running, and debugging tests.

![generating locators in vs code with codegen](https://user-images.githubusercontent.com/13063165/212269873-aca04043-16ce-4627-906f-7351d09740ab.png)

### Use web first assertions[​](#use-web-first-assertions "Direct link to Use web first assertions")

Assertions are a way to verify that the expected result and the actual result matched or not. By using [web first assertions](/docs/test-assertions) Playwright will wait until the expected condition is met. For example, when testing an alert message, a test would click a button that makes a message appear and check that the alert message is there. If the alert message takes half a second to appear, assertions such as `toBeVisible()` will wait and retry if needed.

    // 👍await expect(page.getByText('welcome')).toBeVisible();// 👎expect(await page.getByText('welcome').isVisible()).toBe(true);

#### Don't use manual assertions[​](#dont-use-manual-assertions "Direct link to Don't use manual assertions")

Don't use manual assertions that are not awaiting the expect. In the code below the await is inside the expect rather than before it. When using assertions such as `isVisible()` the test won't wait a single second, it will just check the locator is there and return immediately.

    // 👎expect(await page.getByText('welcome').isVisible()).toBe(true);

Use web first assertions such as `toBeVisible()` instead.

    // 👍await expect(page.getByText('welcome')).toBeVisible();

### Configure debugging[​](#configure-debugging "Direct link to Configure debugging")

#### Local debugging[​](#local-debugging "Direct link to Local debugging")

For local debugging we recommend you [debug your tests live in VSCode.](/docs/getting-started-vscode#live-debugging) by installing the [VS Code extension](/docs/getting-started-vscode). You can run tests in debug mode by right clicking on the line next to the test you want to run which will open a browser window and pause at where the breakpoint is set.

![debugging tests in vscode](https://user-images.githubusercontent.com/13063165/212274675-5c6e1647-2aab-40fd-9804-8680c1ac2d16.png)

You can live debug your test by clicking or editing the locators in your test in VS Code which will highlight this locator in the browser window as well as show you any other matching locators found on the page.

![live debugging locators in vscode](https://user-images.githubusercontent.com/13063165/212273189-da271dc4-0f59-4138-92a8-10e719066cbe.png)

You can also debug your tests with the Playwright inspector by running your tests with the `--debug` flag.

*   npm
*   yarn
*   pnpm

    npx playwright test --debug

    yarn playwright test --debug

    pnpm exec playwright test --debug

You can then step through your test, view actionability logs and edit the locator live and see it highlighted in the browser window. This will show you which locators match, how many of them there are.

![debugging with the playwright inspector](https://user-images.githubusercontent.com/13063165/212276296-4f5b18e7-2bd7-4766-9aa5-783517bd4aa2.png)

To debug a specific test add the name of the test file and the line number of the test followed by the `--debug` flag.

*   npm
*   yarn
*   pnpm

    npx playwright test example.spec.ts:9 --debug

    yarn playwright test example.spec.ts:9 --debug

    pnpm exec playwright test example.spec.ts:9 --debug

#### Debugging on CI[​](#debugging-on-ci "Direct link to Debugging on CI")

For CI failures, use the Playwright [trace viewer](/docs/trace-viewer) instead of videos and screenshots. The trace viewer gives you a full trace of your tests as a local Progressive Web App (PWA) that can easily be shared. With the trace viewer you can view the timeline, inspect DOM snapshots for each action using dev tools, view network requests and more.

![playwrights trace viewer](https://user-images.githubusercontent.com/13063165/212277895-c63d94c2-bd06-4881-864e-62790a072ca3.png)

Traces are configured in the Playwright config file and are set to run on CI on the first retry of a failed test. We don't recommend setting this to `on` so that traces are run on every test as it's very performance heavy. However you can run a trace locally when developing with the `--trace` flag.

*   npm
*   yarn
*   pnpm

    npx playwright test --trace on

    yarn playwright test --trace on

    pnpm exec playwright test --trace on

Once you run this command your traces will be recorded for each test and can be viewed directly from the HTML report.

*   npm
*   yarn
*   pnpm

    npx playwright show-report

    yarn playwright show-report

    pnpm exec playwright show-report

![Playwrights HTML report](https://user-images.githubusercontent.com/13063165/212279022-d929d4c0-2271-486a-a75f-166ac231d25f.png)

Traces can be opened by clicking on the icon next to the test file name or by opening each of the test reports and scrolling down to the traces section.

![Screenshot 2023-01-13 at 09 58 34](https://user-images.githubusercontent.com/13063165/212279699-c9eb134f-4f4e-4f19-805c-37596d3272a6.png)

### Use Playwright's Tooling[​](#use-playwrights-tooling "Direct link to Use Playwright's Tooling")

Playwright comes with a range of tooling to help you write tests.

*   The [VS Code extension](/docs/getting-started-vscode) gives you a great developer experience when writing, running, and debugging tests.
*   The [test generator](/docs/codegen) can generate tests and pick locators for you.
*   The [trace viewer](/docs/trace-viewer) gives you a full trace of your tests as a local PWA that can easily be shared. With the trace viewer you can view the timeline, inspect DOM snapshots for each action, view network requests and more.
*   The [UI Mode](/docs/test-ui-mode) lets you explore, run and debug tests with a time travel experience complete with watch mode. All test files are loaded into the testing sidebar where you can expand each file and describe block to individually run, view, watch and debug each test.
*   [TypeScript](/docs/test-typescript) in Playwright works out of the box and gives you better IDE integrations. Your IDE will show you everything you can do and highlight when you do something wrong. No TypeScript experience is needed and it is not necessary for your code to be in TypeScript, all you need to do is create your tests with a `.ts` extension.

### Test across all browsers[​](#test-across-all-browsers "Direct link to Test across all browsers")

Playwright makes it easy to test your site across all [browsers](/docs/test-projects#configure-projects-for-multiple-browsers) no matter what platform you are on. Testing across all browsers ensures your app works for all users. In your config file you can set up projects adding the name and which browser or device to use.

playwright.config.ts

    import { defineConfig, devices } from '@playwright/test';export default defineConfig({  projects: [    {      name: 'chromium',      use: { ...devices['Desktop Chrome'] },    },    {      name: 'firefox',      use: { ...devices['Desktop Firefox'] },    },    {      name: 'webkit',      use: { ...devices['Desktop Safari'] },    },  ],});

### Keep your Playwright dependency up to date[​](#keep-your-playwright-dependency-up-to-date "Direct link to Keep your Playwright dependency up to date")

By keeping your Playwright version up to date you will be able to test your app on the latest browser versions and catch failures before the latest browser version is released to the public.

*   npm
*   yarn
*   pnpm

    npm install -D @playwright/test@latest

    yarn add --dev @playwright/test@latest

    pnpm install --save-dev @playwright/test@latest

Check the [release notes](/docs/release-notes) to see what the latest version is and what changes have been released.

You can see what version of Playwright you have by running the following command.

*   npm
*   yarn
*   pnpm

    npx playwright --version

    yarn playwright --version

    pnpm exec playwright --version

### Run tests on CI[​](#run-tests-on-ci "Direct link to Run tests on CI")

Setup CI/CD and run your tests frequently. The more often you run your tests the better. Ideally you should run your tests on each commit and pull request. Playwright comes with a [GitHub actions workflow](/docs/ci-intro) so that tests will run on CI for you with no setup required. Playwright can also be setup on the [CI environment](/docs/ci) of your choice.

Use Linux when running your tests on CI as it is cheaper. Developers can use whatever environment when running locally but use linux on CI. Consider setting up [Sharding](/docs/test-sharding) to make CI faster.

#### Optimize browser downloads on CI[​](#optimize-browser-downloads-on-ci "Direct link to Optimize browser downloads on CI")

Only install the browsers that you actually need, especially on CI. For example, if you're only testing with Chromium, install just Chromium.

.github/workflows/playwright.yml

    # Instead of installing all browsersnpx playwright install --with-deps# Install only Chromiumnpx playwright install chromium --with-deps

This saves both download time and disk space on your CI machines.

### Lint your tests[​](#lint-your-tests "Direct link to Lint your tests")

We recommend TypeScript and linting with ESLint for your tests to catch errors early. Use [`@typescript-eslint/no-floating-promises`](https://typescript-eslint.io/rules/no-floating-promises/) [ESLint](https://eslint.org) rule to make sure there are no missing awaits before the asynchronous calls to the Playwright API. On your CI you can run `tsc --noEmit` to ensure that functions are called with the right signature.

### Use parallelism and sharding[​](#use-parallelism-and-sharding "Direct link to Use parallelism and sharding")

Playwright runs tests in [parallel](/docs/test-parallel) by default. Tests in a single file are run in order, in the same worker process. If you have many independent tests in a single file, you might want to run them in parallel

    import { test } from '@playwright/test';test.describe.configure({ mode: 'parallel' });test('runs in parallel 1', async ({ page }) => { /* ... */ });test('runs in parallel 2', async ({ page }) => { /* ... */ });

Playwright can [shard](/docs/test-parallel#shard-tests-between-multiple-machines) a test suite, so that it can be executed on multiple machines.

*   npm
*   yarn
*   pnpm

    npx playwright test --shard=1/3

    yarn playwright test --shard=1/3

    pnpm exec playwright test --shard=1/3

Productivity tips[​](#productivity-tips "Direct link to Productivity tips")
---------------------------------------------------------------------------

### Use Soft assertions[​](#use-soft-assertions "Direct link to Use Soft assertions")

If your test fails, Playwright will give you an error message showing what part of the test failed which you can see either in VS Code, the terminal, the HTML report, or the trace viewer. However, you can also use [soft assertions](/docs/test-assertions#soft-assertions). These do not immediately terminate the test execution, but rather compile and display a list of failed assertions once the test ended.

    // Make a few checks that will not stop the test when failed...await expect.soft(page.getByTestId('status')).toHaveText('Success');// ... and continue the test to check more things.await page.getByRole('link', { name: 'next page' }).click();

# Browsers

Browsers
========

Introduction[​](#introduction "Direct link to Introduction")
------------------------------------------------------------

Each version of Playwright needs specific versions of browser binaries to operate. You will need to use the Playwright CLI to install these browsers.

With every release, Playwright updates the versions of the browsers it supports, so that the latest Playwright would support the latest browsers at any moment. It means that every time you update Playwright, you might need to re-run the `install` CLI command.

Install browsers[​](#install-browsers "Direct link to Install browsers")
------------------------------------------------------------------------

Playwright can install supported browsers. Running the command without arguments will install the default browsers.

    npx playwright install

You can also install specific browsers by providing an argument:

    npx playwright install webkit

See all supported browsers:

    npx playwright install --help

Install system dependencies[​](#install-system-dependencies "Direct link to Install system dependencies")
---------------------------------------------------------------------------------------------------------

System dependencies can get installed automatically. This is useful for CI environments.

    npx playwright install-deps

You can also install the dependencies for a single browser by passing it as an argument:

    npx playwright install-deps chromium

It's also possible to combine `install-deps` with `install` so that the browsers and OS dependencies are installed with a single command.

    npx playwright install --with-deps chromium

See [system requirements](/docs/intro#system-requirements) for officially supported operating systems.

Update Playwright regularly[​](#update-playwright-regularly "Direct link to Update Playwright regularly")
---------------------------------------------------------------------------------------------------------

By keeping your Playwright version up to date you will be able to use new features and test your app on the latest browser versions and catch failures before the latest browser version is released to the public.

    # Update playwrightnpm install -D @playwright/test@latest# Install new browsersnpx playwright install

Check the [release notes](/docs/release-notes) to see what the latest version is and what changes have been released.

    # See what version of Playwright you have by running the following commandnpx playwright --version

Configure Browsers[​](#configure-browsers "Direct link to Configure Browsers")
------------------------------------------------------------------------------

Playwright can run tests on Chromium, WebKit and Firefox browsers as well as branded browsers such as Google Chrome and Microsoft Edge. It can also run on emulated tablet and mobile devices. See the [registry of device parameters](https://github.com/microsoft/playwright/blob/main/packages/playwright-core/src/server/deviceDescriptorsSource.json) for a complete list of selected desktop, tablet and mobile devices.

### Run tests on different browsers[​](#run-tests-on-different-browsers "Direct link to Run tests on different browsers")

Playwright can run your tests in multiple browsers and configurations by setting up **projects** in the config. You can also add [different options](/docs/test-configuration) for each project.

    import { defineConfig, devices } from '@playwright/test';export default defineConfig({  projects: [    /* Test against desktop browsers */    {      name: 'chromium',      use: { ...devices['Desktop Chrome'] },    },    {      name: 'firefox',      use: { ...devices['Desktop Firefox'] },    },    {      name: 'webkit',      use: { ...devices['Desktop Safari'] },    },    /* Test against mobile viewports. */    {      name: 'Mobile Chrome',      use: { ...devices['Pixel 5'] },    },    {      name: 'Mobile Safari',      use: { ...devices['iPhone 12'] },    },    /* Test against branded browsers. */    {      name: 'Google Chrome',      use: { ...devices['Desktop Chrome'], channel: 'chrome' }, // or 'chrome-beta'    },    {      name: 'Microsoft Edge',      use: { ...devices['Desktop Edge'], channel: 'msedge' }, // or 'msedge-dev'    },  ],});

Playwright will run all projects by default.

    npx playwright testRunning 7 tests using 5 workers  ✓ [chromium] › example.spec.ts:3:1 › basic test (2s)  ✓ [firefox] › example.spec.ts:3:1 › basic test (2s)  ✓ [webkit] › example.spec.ts:3:1 › basic test (2s)  ✓ [Mobile Chrome] › example.spec.ts:3:1 › basic test (2s)  ✓ [Mobile Safari] › example.spec.ts:3:1 › basic test (2s)  ✓ [Google Chrome] › example.spec.ts:3:1 › basic test (2s)  ✓ [Microsoft Edge] › example.spec.ts:3:1 › basic test (2s)

Use the `--project` command line option to run a single project.

    npx playwright test --project=firefoxRunning 1 test using 1 worker  ✓ [firefox] › example.spec.ts:3:1 › basic test (2s)

With the VS Code extension you can run your tests on different browsers by checking the checkbox next to the browser name in the Playwright sidebar. These names are defined in your Playwright config file under the projects section. The default config when installing Playwright gives you 3 projects, Chromium, Firefox and WebKit. The first project is selected by default.

![Projects section in VS Code extension](/assets/images/vscode-projects-section-70d5aa3cdca55c2ab82a8fc0c493a87d.png)

To run tests on multiple projects(browsers), select each project by checking the checkboxes next to the project name.

![Selecting projects to run tests on](https://github.com/microsoft/playwright/assets/13063165/6dc86ef4-6097-481c-9cab-b6e053ec7ea6)

### Chromium[​](#chromium "Direct link to Chromium")

For Google Chrome, Microsoft Edge and other Chromium-based browsers, by default, Playwright uses open source Chromium builds. Since the Chromium project is ahead of the branded browsers, when the world is on Google Chrome N, Playwright already supports Chromium N+1 that will be released in Google Chrome and Microsoft Edge a few weeks later.

### Chromium: headless shell[​](#chromium-headless-shell "Direct link to Chromium: headless shell")

Playwright ships a regular Chromium build for headed operations and a separate [chromium headless shell](https://developer.chrome.com/blog/chrome-headless-shell) for headless mode.

If you are only running tests in headless shell (i.e. the `channel` option is **not** specified), for example on CI, you can avoid downloading the full Chromium browser by passing `--only-shell` during installation.

    # only running tests headlesslynpx playwright install --with-deps --only-shell

### Chromium: new headless mode[​](#chromium-new-headless-mode "Direct link to Chromium: new headless mode")

You can opt into the new headless mode by using `'chromium'` channel. As [official Chrome documentation puts it](https://developer.chrome.com/blog/chrome-headless-shell):

> New Headless on the other hand is the real Chrome browser, and is thus more authentic, reliable, and offers more features. This makes it more suitable for high-accuracy end-to-end web app testing or browser extension testing.

See [issue #33566](https://github.com/microsoft/playwright/issues/33566) for details.

    import { defineConfig, devices } from '@playwright/test';export default defineConfig({  projects: [    {      name: 'chromium',      use: { ...devices['Desktop Chrome'], channel: 'chromium' },    },  ],});

With the new headless mode, you can skip downloading the headless shell during browser installation by using the `--no-shell` option:

    # only running tests headlesslynpx playwright install --with-deps --no-shell

### Google Chrome & Microsoft Edge[​](#google-chrome--microsoft-edge "Direct link to Google Chrome & Microsoft Edge")

While Playwright can download and use the recent Chromium build, it can operate against the branded Google Chrome and Microsoft Edge browsers available on the machine (note that Playwright doesn't install them by default). In particular, the current Playwright version will support Stable and Beta channels of these browsers.

Available channels are `chrome`, `msedge`, `chrome-beta`, `msedge-beta`, `chrome-dev`, `msedge-dev`, `chrome-canary`, `msedge-canary`.

warning

Certain Enterprise Browser Policies may impact Playwright's ability to launch and control Google Chrome and Microsoft Edge. Running in an environment with browser policies is outside of the Playwright project's scope.

warning

Google Chrome and Microsoft Edge have switched to a [new headless mode](https://developer.chrome.com/docs/chromium/headless) implementation that is closer to a regular headed mode. This differs from [chromium headless shell](https://developer.chrome.com/blog/chrome-headless-shell) that is used in Playwright by default when running headless, so expect different behavior in some cases. See [issue #33566](https://github.com/microsoft/playwright/issues/33566) for details.

    import { defineConfig, devices } from '@playwright/test';export default defineConfig({  projects: [    /* Test against branded browsers. */    {      name: 'Google Chrome',      use: { ...devices['Desktop Chrome'], channel: 'chrome' }, // or 'chrome-beta'    },    {      name: 'Microsoft Edge',      use: { ...devices['Desktop Edge'], channel: 'msedge' }, // or "msedge-beta" or 'msedge-dev'    },  ],});

#### Installing Google Chrome & Microsoft Edge[​](#installing-google-chrome--microsoft-edge "Direct link to Installing Google Chrome & Microsoft Edge")

If Google Chrome or Microsoft Edge is not available on your machine, you can install them using the Playwright command line tool:

    npx playwright install msedge

warning

Google Chrome or Microsoft Edge installations will be installed at the default global location of your operating system overriding your current browser installation.

Run with the `--help` option to see a full a list of browsers that can be installed.

#### When to use Google Chrome & Microsoft Edge and when not to?[​](#when-to-use-google-chrome--microsoft-edge-and-when-not-to "Direct link to When to use Google Chrome & Microsoft Edge and when not to?")

##### Defaults[​](#defaults "Direct link to Defaults")

Using the default Playwright configuration with the latest Chromium is a good idea most of the time. Since Playwright is ahead of Stable channels for the browsers, it gives peace of mind that the upcoming Google Chrome or Microsoft Edge releases won't break your site. You catch breakage early and have a lot of time to fix it before the official Chrome update.

##### Regression testing[​](#regression-testing "Direct link to Regression testing")

Having said that, testing policies often require regression testing to be performed against the current publicly available browsers. In this case, you can opt into one of the stable channels, `"chrome"` or `"msedge"`.

##### Media codecs[​](#media-codecs "Direct link to Media codecs")

Another reason for testing using official binaries is to test functionality related to media codecs. Chromium does not have all the codecs that Google Chrome or Microsoft Edge are bundling due to various licensing considerations and agreements. If your site relies on this kind of codecs (which is rarely the case), you will also want to use the official channel.

##### Enterprise policy[​](#enterprise-policy "Direct link to Enterprise policy")

Google Chrome and Microsoft Edge respect enterprise policies, which include limitations to the capabilities, network proxy, mandatory extensions that stand in the way of testing. So if you are part of the organization that uses such policies, it is easiest to use bundled Chromium for your local testing, you can still opt into stable channels on the bots that are typically free of such restrictions.

### Firefox[​](#firefox "Direct link to Firefox")

Playwright's Firefox version matches the recent [Firefox Stable](https://www.mozilla.org/en-US/firefox/new/) build. Playwright doesn't work with the branded version of Firefox since it relies on patches.

Note that availability of certain features, which depend heavily on the underlying platform, may vary between operating systems. For example, available media codecs vary substantially between Linux, macOS and Windows.

### WebKit[​](#webkit "Direct link to WebKit")

Playwright's WebKit is derived from the latest WebKit main branch sources, often before these updates are incorporated into Apple Safari and other WebKit-based browsers. This gives a lot of lead time to react on the potential browser update issues. Playwright doesn't work with the branded version of Safari since it relies on patches. Instead, you can test using the most recent WebKit build.

Note that availability of certain features, which depend heavily on the underlying platform, may vary between operating systems. For example, available media codecs vary substantially between Linux, macOS and Windows. While running WebKit on Linux CI is usually the most affordable option, for the closest-to-Safari experience you should run WebKit on mac, for example if you do video playback.

Install behind a firewall or a proxy[​](#install-behind-a-firewall-or-a-proxy "Direct link to Install behind a firewall or a proxy")
------------------------------------------------------------------------------------------------------------------------------------

By default, Playwright downloads browsers from Microsoft's CDN.

Sometimes companies maintain an internal proxy that blocks direct access to the public resources. In this case, Playwright can be configured to download browsers via a proxy server.

*   Bash
*   PowerShell
*   Batch

    HTTPS_PROXY=https://192.0.2.1 npx playwright install

    $Env:HTTPS_PROXY="https://192.0.2.1"npx playwright install

    set HTTPS_PROXY=https://192.0.2.1npx playwright install

If the requests of the proxy get intercepted with a custom untrusted certificate authority (CA) and it yields to `Error: self signed certificate in certificate chain` while downloading the browsers, you must set your custom root certificates via the [`NODE_EXTRA_CA_CERTS`](https://nodejs.org/api/cli.html#node_extra_ca_certsfile) environment variable before installing the browsers:

*   Bash
*   PowerShell
*   Batch

    export NODE_EXTRA_CA_CERTS="/path/to/cert.pem"

    $Env:NODE_EXTRA_CA_CERTS="C:\certs\root.crt"

    set NODE_EXTRA_CA_CERTS="C:\certs\root.crt"

If your network is slow to connect to Playwright browser archive, you can increase the connection timeout in milliseconds with `PLAYWRIGHT_DOWNLOAD_CONNECTION_TIMEOUT` environment variable:

*   Bash
*   PowerShell
*   Batch

    PLAYWRIGHT_DOWNLOAD_CONNECTION_TIMEOUT=120000 npx playwright install

    $Env:PLAYWRIGHT_DOWNLOAD_CONNECTION_TIMEOUT="120000"npx playwright install

    set PLAYWRIGHT_DOWNLOAD_CONNECTION_TIMEOUT=120000npx playwright install

If you are [installing dependencies](#install-system-dependencies) and need to use a proxy on Linux, make sure to run the command as a root user. Otherwise, Playwright will attempt to become a root and will not pass environment variables like `HTTPS_PROXY` to the linux package manager.

    sudo HTTPS_PROXY=https://192.0.2.1 npx playwright install-deps

Download from artifact repository[​](#download-from-artifact-repository "Direct link to Download from artifact repository")
---------------------------------------------------------------------------------------------------------------------------

By default, Playwright downloads browsers from Microsoft's CDN.

Sometimes companies maintain an internal artifact repository to host browser binaries. In this case, Playwright can be configured to download from a custom location using the `PLAYWRIGHT_DOWNLOAD_HOST` env variable.

*   Bash
*   PowerShell
*   Batch

    PLAYWRIGHT_DOWNLOAD_HOST=http://192.0.2.1 npx playwright install

    $Env:PLAYWRIGHT_DOWNLOAD_HOST="http://192.0.2.1"npx playwright install

    set PLAYWRIGHT_DOWNLOAD_HOST=http://192.0.2.1npx playwright install

It is also possible to use a per-browser download hosts using `PLAYWRIGHT_CHROMIUM_DOWNLOAD_HOST`, `PLAYWRIGHT_FIREFOX_DOWNLOAD_HOST` and `PLAYWRIGHT_WEBKIT_DOWNLOAD_HOST` env variables that take precedence over `PLAYWRIGHT_DOWNLOAD_HOST`.

*   Bash
*   PowerShell
*   Batch

    PLAYWRIGHT_FIREFOX_DOWNLOAD_HOST=http://203.0.113.3 PLAYWRIGHT_DOWNLOAD_HOST=http://192.0.2.1 npx playwright install

    $Env:PLAYWRIGHT_FIREFOX_DOWNLOAD_HOST="http://203.0.113.3"$Env:PLAYWRIGHT_DOWNLOAD_HOST="http://192.0.2.1"npx playwright install

    set PLAYWRIGHT_FIREFOX_DOWNLOAD_HOST=http://203.0.113.3set PLAYWRIGHT_DOWNLOAD_HOST=http://192.0.2.1npx playwright install

Managing browser binaries[​](#managing-browser-binaries "Direct link to Managing browser binaries")
---------------------------------------------------------------------------------------------------

Playwright downloads Chromium, WebKit and Firefox browsers into the OS-specific cache folders:

*   `%USERPROFILE%\AppData\Local\ms-playwright` on Windows
*   `~/Library/Caches/ms-playwright` on macOS
*   `~/.cache/ms-playwright` on Linux

These browsers will take a few hundred megabytes of disk space when installed:

    du -hs ~/Library/Caches/ms-playwright/*281M  chromium-XXXXXX187M  firefox-XXXX180M  webkit-XXXX

You can override default behavior using environment variables. When installing Playwright, ask it to download browsers into a specific location:

*   Bash
*   PowerShell
*   Batch

    PLAYWRIGHT_BROWSERS_PATH=$HOME/pw-browsers npx playwright install

    $Env:PLAYWRIGHT_BROWSERS_PATH="$Env:USERPROFILE\pw-browsers"npx playwright install

    set PLAYWRIGHT_BROWSERS_PATH=%USERPROFILE%\pw-browsersnpx playwright install

When running Playwright scripts, ask it to search for browsers in a shared location.

*   Bash
*   PowerShell
*   Batch

    PLAYWRIGHT_BROWSERS_PATH=$HOME/pw-browsers npx playwright test

    $Env:PLAYWRIGHT_BROWSERS_PATH="$Env:USERPROFILE\pw-browsers"npx playwright test

    set PLAYWRIGHT_BROWSERS_PATH=%USERPROFILE%\pw-browsersnpx playwright test

Playwright keeps track of packages that need those browsers and will garbage collect them as you update Playwright to the newer versions.

note

Developers can opt-in in this mode via exporting `PLAYWRIGHT_BROWSERS_PATH=$HOME/pw-browsers` in their `.bashrc`.

### Hermetic install[​](#hermetic-install "Direct link to Hermetic install")

You can opt into the hermetic install and place binaries in the local folder:

*   Bash
*   PowerShell
*   Batch

    # Places binaries to node_modules/playwright-core/.local-browsersPLAYWRIGHT_BROWSERS_PATH=0 npx playwright install

    # Places binaries to node_modules\playwright-core\.local-browsers$Env:PLAYWRIGHT_BROWSERS_PATH=0npx playwright install

    # Places binaries to node_modules\playwright-core\.local-browsersset PLAYWRIGHT_BROWSERS_PATH=0npx playwright install

note

`PLAYWRIGHT_BROWSERS_PATH` does not change installation path for Google Chrome and Microsoft Edge.

### Stale browser removal[​](#stale-browser-removal "Direct link to Stale browser removal")

Playwright keeps track of the clients that use its browsers. When there are no more clients that require a particular version of the browser, that version is deleted from the system. That way you can safely use Playwright instances of different versions and at the same time, you don't waste disk space for the browsers that are no longer in use.

To opt-out from the unused browser removal, you can set the `PLAYWRIGHT_SKIP_BROWSER_GC=1` environment variable.

### List all installed browsers:[​](#list-all-installed-browsers "Direct link to List all installed browsers:")

Prints list of browsers from all playwright installations on the machine.

    npx playwright install --list

### Uninstall browsers[​](#uninstall-browsers "Direct link to Uninstall browsers")

This will remove the browsers (chromium, firefox, webkit) of the current Playwright installation:

    npx playwright uninstall

To remove browsers of other Playwright installations as well, pass `--all` flag:

    npx playwright uninstall --all

# Chrome extensions

Chrome extensions
=================

Introduction[​](#introduction "Direct link to Introduction")
------------------------------------------------------------

note

Extensions only work in Chromium when launched with a persistent context. Use custom browser args at your own risk, as some of them may break Playwright functionality.

Google Chrome and Microsoft Edge [removed the command-line flags needed to side-load extensions](https://groups.google.com/a/chromium.org/g/chromium-extensions/c/FxMU1TvxWWg/m/daZVTYNlBQAJ), so use Chromium that comes bundled with Playwright.

The snippet below retrieves the [service worker](https://developer.chrome.com/docs/extensions/develop/concepts/service-workers) of a [Manifest v3](https://developer.chrome.com/docs/extensions/develop/migrate) extension whose source is located in `./my-extension`.

Note the use of the `chromium` channel that allows to run extensions in headless mode. Alternatively, you can launch the browser in headed mode.

    const { chromium } = require('playwright');(async () => {  const pathToExtension = require('path').join(__dirname, 'my-extension');  const userDataDir = '/tmp/test-user-data-dir';  const browserContext = await chromium.launchPersistentContext(userDataDir, {    channel: 'chromium',    args: [      `--disable-extensions-except=${pathToExtension}`,      `--load-extension=${pathToExtension}`    ]  });  let [serviceWorker] = browserContext.serviceWorkers();  if (!serviceWorker)    serviceWorker = await browserContext.waitForEvent('serviceworker');  // Test the service worker as you would any other worker.  await browserContext.close();})();

Testing[​](#testing "Direct link to Testing")
---------------------------------------------

To have the extension loaded when running tests you can use a test fixture to set the context. You can also dynamically retrieve the extension id and use it to load and test the popup page for example.

Note the use of the `chromium` channel that allows to run extensions in headless mode. Alternatively, you can launch the browser in headed mode.

First, add fixtures that will load the extension:

fixtures.ts

    import { test as base, chromium, type BrowserContext } from '@playwright/test';import path from 'path';export const test = base.extend<{  context: BrowserContext;  extensionId: string;}>({  context: async ({ }, use) => {    const pathToExtension = path.join(__dirname, 'my-extension');    const context = await chromium.launchPersistentContext('', {      channel: 'chromium',      args: [        `--disable-extensions-except=${pathToExtension}`,        `--load-extension=${pathToExtension}`,      ],    });    await use(context);    await context.close();  },  extensionId: async ({ context }, use) => {    // for manifest v3:    let [serviceWorker] = context.serviceWorkers();    if (!serviceWorker)      serviceWorker = await context.waitForEvent('serviceworker');    const extensionId = serviceWorker.url().split('/')[2];    await use(extensionId);  },});export const expect = test.expect;

Then use these fixtures in a test:

    import { test, expect } from './fixtures';test('example test', async ({ page }) => {  await page.goto('https://example.com');  await expect(page.locator('body')).toHaveText('Changed by my-extension');});test('popup page', async ({ page, extensionId }) => {  await page.goto(`chrome-extension://${extensionId}/popup.html`);  await expect(page.locator('body')).toHaveText('my-extension popup');});

# Clock

Clock
=====

Introduction[​](#introduction "Direct link to Introduction")
------------------------------------------------------------

Accurately simulating time-dependent behavior is essential for verifying the correctness of applications. Utilizing [Clock](/docs/api/class-clock "Clock") functionality allows developers to manipulate and control time within tests, enabling the precise validation of features such as rendering time, timeouts, scheduled tasks without the delays and variability of real-time execution.

The [Clock](/docs/api/class-clock "Clock") API provides the following methods to control time:

*   `setFixedTime`: Sets the fixed time for `Date.now()` and `new Date()`.
*   `install`: initializes the clock and allows you to:
    *   `pauseAt`: Pauses the time at a specific time.
    *   `fastForward`: Fast forwards the time.
    *   `runFor`: Runs the time for a specific duration.
    *   `resume`: Resumes the time.
*   `setSystemTime`: Sets the current system time.

The recommended approach is to use `setFixedTime` to set the time to a specific value. If that doesn't work for your use case, you can use `install` which allows you to pause time later on, fast forward it, tick it, etc. `setSystemTime` is only recommended for advanced use cases.

note

[page.clock](/docs/api/class-page#page-clock) overrides native global classes and functions related to time allowing them to be manually controlled:

*   `Date`
*   `setTimeout`
*   `clearTimeout`
*   `setInterval`
*   `clearInterval`
*   `requestAnimationFrame`
*   `cancelAnimationFrame`
*   `requestIdleCallback`
*   `cancelIdleCallback`
*   `performance`
*   `Event.timeStamp`

warning

If you call `install` at any point in your test, the call _MUST_ occur before any other clock related calls (see note above for list). Calling these methods out of order will result in undefined behavior. For example, you cannot call `setInterval`, followed by `install`, then `clearInterval`, as `install` overrides the native definition of the clock functions.

Test with predefined time[​](#test-with-predefined-time "Direct link to Test with predefined time")
---------------------------------------------------------------------------------------------------

Often you only need to fake `Date.now` while keeping the timers going. That way the time flows naturally, but `Date.now` always returns a fixed value.

    <div id="current-time" data-testid="current-time"></div><script>  const renderTime = () => {    document.getElementById('current-time').textContent =        new Date().toLocaleString();  };  setInterval(renderTime, 1000);</script>

    await page.clock.setFixedTime(new Date('2024-02-02T10:00:00'));await page.goto('http://localhost:3333');await expect(page.getByTestId('current-time')).toHaveText('2/2/2024, 10:00:00 AM');await page.clock.setFixedTime(new Date('2024-02-02T10:30:00'));// We know that the page has a timer that updates the time every second.await expect(page.getByTestId('current-time')).toHaveText('2/2/2024, 10:30:00 AM');

Consistent time and timers[​](#consistent-time-and-timers "Direct link to Consistent time and timers")
------------------------------------------------------------------------------------------------------

Sometimes your timers depend on `Date.now` and are confused when the `Date.now` value does not change over time. In this case, you can install the clock and fast forward to the time of interest when testing.

    <div id="current-time" data-testid="current-time"></div><script>  const renderTime = () => {    document.getElementById('current-time').textContent =        new Date().toLocaleString();  };  setInterval(renderTime, 1000);</script>

    // Initialize clock with some time before the test time and let the page load// naturally. `Date.now` will progress as the timers fire.await page.clock.install({ time: new Date('2024-02-02T08:00:00') });await page.goto('http://localhost:3333');// Pretend that the user closed the laptop lid and opened it again at 10am,// Pause the time once reached that point.await page.clock.pauseAt(new Date('2024-02-02T10:00:00'));// Assert the page state.await expect(page.getByTestId('current-time')).toHaveText('2/2/2024, 10:00:00 AM');// Close the laptop lid again and open it at 10:30am.await page.clock.fastForward('30:00');await expect(page.getByTestId('current-time')).toHaveText('2/2/2024, 10:30:00 AM');

Test inactivity monitoring[​](#test-inactivity-monitoring "Direct link to Test inactivity monitoring")
------------------------------------------------------------------------------------------------------

Inactivity monitoring is a common feature in web applications that logs out users after a period of inactivity. Testing this feature can be tricky because you need to wait for a long time to see the effect. With the help of the clock, you can speed up time and test this feature quickly.

    <div id="remaining-time" data-testid="remaining-time"></div><script>  const endTime = Date.now() + 5 * 60_000;  const renderTime = () => {    const diffInSeconds = Math.round((endTime - Date.now()) / 1000);    if (diffInSeconds <= 0) {      document.getElementById('remaining-time').textContent =        'You have been logged out due to inactivity.';    } else {      document.getElementById('remaining-time').textContent =        `You will be logged out in ${diffInSeconds} seconds.`;    }    setTimeout(renderTime, 1000);  };  renderTime();</script><button type="button">Interaction</button>

    // Initial time does not matter for the test, so we can pick current time.await page.clock.install();await page.goto('http://localhost:3333');// Interact with the pageawait page.getByRole('button').click();// Fast forward time 5 minutes as if the user did not do anything.// Fast forward is like closing the laptop lid and opening it after 5 minutes.// All the timers due will fire once immediately, as in the real browser.await page.clock.fastForward('05:00');// Check that the user was logged out automatically.await expect(page.getByText('You have been logged out due to inactivity.')).toBeVisible();

Tick through time manually, firing all the timers consistently[​](#tick-through-time-manually-firing-all-the-timers-consistently "Direct link to Tick through time manually, firing all the timers consistently")
-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

In rare cases, you may want to tick through time manually, firing all timers and animation frames in the process to achieve a fine-grained control over the passage of time.

    <div id="current-time" data-testid="current-time"></div><script>  const renderTime = () => {    document.getElementById('current-time').textContent =        new Date().toLocaleString();  };  setInterval(renderTime, 1000);</script>

    // Initialize clock with a specific time, let the page load naturally.await page.clock.install({ time: new Date('2024-02-02T08:00:00') });await page.goto('http://localhost:3333');// Pause the time flow, stop the timers, you now have manual control// over the page time.await page.clock.pauseAt(new Date('2024-02-02T10:00:00'));await expect(page.getByTestId('current-time')).toHaveText('2/2/2024, 10:00:00 AM');// Tick through time manually, firing all timers in the process.// In this case, time will be updated in the screen 2 times.await page.clock.runFor(2000);await expect(page.getByTestId('current-time')).toHaveText('2/2/2024, 10:00:02 AM');

Related Videos[​](#related-videos "Direct link to Related Videos")
------------------------------------------------------------------

# Components (experimental)

Components (experimental)
=========================

Introduction[​](#introduction "Direct link to Introduction")
------------------------------------------------------------

Playwright Test can now test your components.

Example[​](#example "Direct link to Example")
---------------------------------------------

Here is what a typical component test looks like:

    test('event should work', async ({ mount }) => {  let clicked = false;  // Mount a component. Returns locator pointing to the component.  const component = await mount(    <Button title="Submit" onClick={() => { clicked = true }}></Button>  );  // As with any Playwright test, assert locator text.  await expect(component).toContainText('Submit');  // Perform locator click. This will trigger the event.  await component.click();  // Assert that respective events have been fired.  expect(clicked).toBeTruthy();});

How to get started[​](#how-to-get-started "Direct link to How to get started")
------------------------------------------------------------------------------

Adding Playwright Test to an existing project is easy. Below are the steps to enable Playwright Test for a React, Vue or Svelte project.

### Step 1: Install Playwright Test for components for your respective framework[​](#step-1-install-playwright-test-for-components-for-your-respective-framework "Direct link to Step 1: Install Playwright Test for components for your respective framework")

*   npm
*   yarn
*   pnpm

    npm init playwright@latest -- --ct

    yarn create playwright --ct

    pnpm create playwright --ct

This step creates several files in your workspace:

playwright/index.html

    <html lang="en">  <body>    <div id="root"></div>    <script type="module" src="./index.ts"></script>  </body></html>

This file defines an html file that will be used to render components during testing. It must contain element with `id="root"`, that's where components are mounted. It must also link the script called `playwright/index.{js,ts,jsx,tsx}`.

You can include stylesheets, apply theme and inject code into the page where component is mounted using this script. It can be either a `.js`, `.ts`, `.jsx` or `.tsx` file.

playwright/index.ts

    // Apply theme here, add anything your component needs at runtime here.

### Step 2. Create a test file `src/App.spec.{ts,tsx}`[​](#step-2-create-a-test-file-srcappspectstsx "Direct link to step-2-create-a-test-file-srcappspectstsx")

*   React
*   Svelte
*   Vue

app.spec.tsx

    import { test, expect } from '@playwright/experimental-ct-react';import App from './App';test('should work', async ({ mount }) => {  const component = await mount(<App />);  await expect(component).toContainText('Learn React');});

app.spec.ts

    import { test, expect } from '@playwright/experimental-ct-vue';import App from './App.vue';test('should work', async ({ mount }) => {  const component = await mount(App);  await expect(component).toContainText('Learn Vue');});

app.spec.tsx

    import { test, expect } from '@playwright/experimental-ct-vue';import App from './App.vue';test('should work', async ({ mount }) => {  const component = await mount(<App />);  await expect(component).toContainText('Learn Vue');});

If using TypeScript and Vue make sure to add a `vue.d.ts` file to your project:

    declare module '*.vue';

app.spec.ts

    import { test, expect } from '@playwright/experimental-ct-svelte';import App from './App.svelte';test('should work', async ({ mount }) => {  const component = await mount(App);  await expect(component).toContainText('Learn Svelte');});

### Step 3. Run the tests[​](#step-3-run-the-tests "Direct link to Step 3. Run the tests")

You can run tests using the [VS Code extension](/docs/getting-started-vscode) or the command line.

    npm run test-ct

### Further reading: configure reporting, browsers, tracing[​](#further-reading-configure-reporting-browsers-tracing "Direct link to Further reading: configure reporting, browsers, tracing")

Refer to [Playwright config](/docs/test-configuration) for configuring your project.

Test stories[​](#test-stories "Direct link to Test stories")
------------------------------------------------------------

When Playwright Test is used to test web components, tests run in Node.js, while components run in the real browser. This brings together the best of both worlds: components run in the real browser environment, real clicks are triggered, real layout is executed, visual regression is possible. At the same time, test can use all the powers of Node.js as well as all the Playwright Test features. As a result, the same parallel, parametrized tests with the same post-mortem Tracing story are available during component testing.

This however, is introducing a number of limitations:

*   You can't pass complex live objects to your component. Only plain JavaScript objects and built-in types like strings, numbers, dates etc. can be passed.

    test('this will work', async ({ mount }) => {  const component = await mount(<ProcessViewer process={{ name: 'playwright' }}/>);});test('this will not work', async ({ mount }) => {  // `process` is a Node object, we can't pass it to the browser and expect it to work.  const component = await mount(<ProcessViewer process={process}/>);});

*   You can't pass data to your component synchronously in a callback:

    test('this will not work', async ({ mount }) => {  // () => 'red' callback lives in Node. If `ColorPicker` component in the browser calls the parameter function  // `colorGetter` it won't get result synchronously. It'll be able to get it via await, but that is not how  // components are typically built.  const component = await mount(<ColorPicker colorGetter={() => 'red'}/>);});

Working around these and other limitations is quick and elegant: for every use case of the tested component, create a wrapper of this component designed specifically for test. Not only it will mitigate the limitations, but it will also offer powerful abstractions for testing where you would be able to define environment, theme and other aspects of your component rendering.

Let's say you'd like to test following component:

input-media.tsx

    import React from 'react';type InputMediaProps = {  // Media is a complex browser object we can't send to Node while testing.  onChange(media: Media): void;};export function InputMedia(props: InputMediaProps) {  return <></> as any;}

Create a story file for your component:

input-media.story.tsx

    import React from 'react';import InputMedia from './import-media';type InputMediaForTestProps = {  onMediaChange(mediaName: string): void;};export function InputMediaForTest(props: InputMediaForTestProps) {  // Instead of sending a complex `media` object to the test, send the media name.  return <InputMedia onChange={media => props.onMediaChange(media.name)} />;}// Export more stories here.

Then test the component via testing the story:

input-media.spec.tsx

    import { test, expect } from '@playwright/experimental-ct-react';import { InputMediaForTest } from './input-media.story.tsx';test('changes the image', async ({ mount }) => {  let mediaSelected: string | null = null;  const component = await mount(    <InputMediaForTest      onMediaChange={mediaName => {        mediaSelected = mediaName;      }}    />  );  await component    .getByTestId('imageInput')    .setInputFiles('src/assets/logo.png');  await expect(component.getByAltText(/selected image/i)).toBeVisible();  await expect.poll(() => mediaSelected).toBe('logo.png');});

As a result, for every component you'll have a story file that exports all the stories that are actually tested. These stories live in the browser and "convert" complex object into the simple objects that can be accessed in the test.

Under the hood[​](#under-the-hood "Direct link to Under the hood")
------------------------------------------------------------------

Here is how component testing works:

*   Once the tests are executed, Playwright creates a list of components that the tests need.
*   It then compiles a bundle that includes these components and serves it using a local static web server.
*   Upon the `mount` call within the test, Playwright navigates to the facade page `/playwright/index.html` of this bundle and tells it to render the component.
*   Events are marshalled back to the Node.js environment to allow verification.

Playwright is using [Vite](https://vitejs.dev/) to create the components bundle and serve it.

API reference[​](#api-reference "Direct link to API reference")
---------------------------------------------------------------

### props[​](#props "Direct link to props")

Provide props to a component when mounted.

*   React
*   Svelte
*   Vue

component.spec.tsx

    import { test } from '@playwright/experimental-ct-react';test('props', async ({ mount }) => {  const component = await mount(<Component msg="greetings" />);});

component.spec.ts

    import { test } from '@playwright/experimental-ct-svelte';test('props', async ({ mount }) => {  const component = await mount(Component, { props: { msg: 'greetings' } });});

component.spec.ts

    import { test } from '@playwright/experimental-ct-vue';test('props', async ({ mount }) => {  const component = await mount(Component, { props: { msg: 'greetings' } });});

component.spec.tsx

    // Or alternatively, using the `jsx` styleimport { test } from '@playwright/experimental-ct-vue';test('props', async ({ mount }) => {  const component = await mount(<Component msg="greetings" />);});

### callbacks / events[​](#callbacks--events "Direct link to callbacks / events")

Provide callbacks/events to a component when mounted.

*   React
*   Svelte
*   Vue

component.spec.tsx

    import { test } from '@playwright/experimental-ct-react';test('callback', async ({ mount }) => {  const component = await mount(<Component onClick={() => {}} />);});

component.spec.ts

    import { test } from '@playwright/experimental-ct-svelte';test('event', async ({ mount }) => {  const component = await mount(Component, { on: { click() {} } });});

component.spec.ts

    import { test } from '@playwright/experimental-ct-vue';test('event', async ({ mount }) => {  const component = await mount(Component, { on: { click() {} } });});

component.spec.tsx

    // Or alternatively, using the `jsx` styleimport { test } from '@playwright/experimental-ct-vue';test('event', async ({ mount }) => {  const component = await mount(<Component v-on:click={() => {}} />);});

### children / slots[​](#children--slots "Direct link to children / slots")

Provide children/slots to a component when mounted.

*   React
*   Svelte
*   Vue

component.spec.tsx

    import { test } from '@playwright/experimental-ct-react';test('children', async ({ mount }) => {  const component = await mount(<Component>Child</Component>);});

component.spec.ts

    import { test } from '@playwright/experimental-ct-svelte';test('slot', async ({ mount }) => {  const component = await mount(Component, { slots: { default: 'Slot' } });});

component.spec.ts

    import { test } from '@playwright/experimental-ct-vue';test('slot', async ({ mount }) => {  const component = await mount(Component, { slots: { default: 'Slot' } });});

component.spec.tsx

    // Or alternatively, using the `jsx` styleimport { test } from '@playwright/experimental-ct-vue';test('children', async ({ mount }) => {  const component = await mount(<Component>Child</Component>);});

### hooks[​](#hooks "Direct link to hooks")

You can use `beforeMount` and `afterMount` hooks to configure your app. This lets you set up things like your app router, fake server etc. giving you the flexibility you need. You can also pass custom configuration from the `mount` call from a test, which is accessible from the `hooksConfig` fixture. This includes any config that needs to be run before or after mounting the component. An example of configuring a router is provided below:

*   React
*   Vue

playwright/index.tsx

    import { beforeMount, afterMount } from '@playwright/experimental-ct-react/hooks';import { BrowserRouter } from 'react-router-dom';export type HooksConfig = {  enableRouting?: boolean;}beforeMount<HooksConfig>(async ({ App, hooksConfig }) => {  if (hooksConfig?.enableRouting)    return <BrowserRouter><App /></BrowserRouter>;});

src/pages/ProductsPage.spec.tsx

    import { test, expect } from '@playwright/experimental-ct-react';import type { HooksConfig } from '../playwright';import { ProductsPage } from './pages/ProductsPage';test('configure routing through hooks config', async ({ page, mount }) => {  const component = await mount<HooksConfig>(<ProductsPage />, {    hooksConfig: { enableRouting: true },  });  await expect(component.getByRole('link')).toHaveAttribute('href', '/products/42');});

playwright/index.ts

    import { beforeMount, afterMount } from '@playwright/experimental-ct-vue/hooks';import { router } from '../src/router';export type HooksConfig = {  enableRouting?: boolean;}beforeMount<HooksConfig>(async ({ app, hooksConfig }) => {  if (hooksConfig?.enableRouting)    app.use(router);});

src/pages/ProductsPage.spec.ts

    import { test, expect } from '@playwright/experimental-ct-vue';import type { HooksConfig } from '../playwright';import ProductsPage from './pages/ProductsPage.vue';test('configure routing through hooks config', async ({ page, mount }) => {  const component = await mount<HooksConfig>(ProductsPage, {    hooksConfig: { enableRouting: true },  });  await expect(component.getByRole('link')).toHaveAttribute('href', '/products/42');});

### unmount[​](#unmount "Direct link to unmount")

Unmount the mounted component from the DOM. This is useful for testing the component's behavior upon unmounting. Use cases include testing an "Are you sure you want to leave?" modal or ensuring proper cleanup of event handlers to prevent memory leaks.

*   React
*   Svelte
*   Vue

component.spec.tsx

    import { test } from '@playwright/experimental-ct-react';test('unmount', async ({ mount }) => {  const component = await mount(<Component/>);  await component.unmount();});

component.spec.ts

    import { test } from '@playwright/experimental-ct-svelte';test('unmount', async ({ mount }) => {  const component = await mount(Component);  await component.unmount();});

component.spec.ts

    import { test } from '@playwright/experimental-ct-vue';test('unmount', async ({ mount }) => {  const component = await mount(Component);  await component.unmount();});

component.spec.tsx

    // Or alternatively, using the `jsx` styleimport { test } from '@playwright/experimental-ct-vue';test('unmount', async ({ mount }) => {  const component = await mount(<Component/>);  await component.unmount();});

### update[​](#update "Direct link to update")

Update props, slots/children, and/or events/callbacks of a mounted component. These component inputs can change at any time and are typically provided by the parent component, but sometimes it is necessary to ensure that your components behave appropriately to new inputs.

*   React
*   Svelte
*   Vue

component.spec.tsx

    import { test } from '@playwright/experimental-ct-react';test('update', async ({ mount }) => {  const component = await mount(<Component/>);  await component.update(      <Component msg="greetings" onClick={() => {}}>Child</Component>  );});

component.spec.ts

    import { test } from '@playwright/experimental-ct-svelte';test('update', async ({ mount }) => {  const component = await mount(Component);  await component.update({    props: { msg: 'greetings' },    on: { click() {} },    slots: { default: 'Child' }  });});

component.spec.ts

    import { test } from '@playwright/experimental-ct-vue';test('update', async ({ mount }) => {  const component = await mount(Component);  await component.update({    props: { msg: 'greetings' },    on: { click() {} },    slots: { default: 'Child' }  });});

component.spec.tsx

    // Or alternatively, using the `jsx` styleimport { test } from '@playwright/experimental-ct-vue';test('update', async ({ mount }) => {  const component = await mount(<Component/>);  await component.update(      <Component msg="greetings" v-on:click={() => {}}>Child</Component>  );});

### Handling network requests[​](#handling-network-requests "Direct link to Handling network requests")

Playwright provides an **experimental** `router` fixture to intercept and handle network requests. There are two ways to use the `router` fixture:

*   Call `router.route(url, handler)` that behaves similarly to [page.route()](/docs/api/class-page#page-route). See the [network mocking guide](/docs/mock) for more details.
*   Call `router.use(handlers)` and pass [MSW library](https://mswjs.io/) request handlers to it.

Here is an example of reusing your existing MSW handlers in the test.

    import { handlers } from '@src/mocks/handlers';test.beforeEach(async ({ router }) => {  // install common handlers before each test  await router.use(...handlers);});test('example test', async ({ mount }) => {  // test as usual, your handlers are active  // ...});

You can also introduce a one-off handler for a specific test.

    import { http, HttpResponse } from 'msw';test('example test', async ({ mount, router }) => {  await router.use(http.get('/data', async ({ request }) => {    return HttpResponse.json({ value: 'mocked' });  }));  // test as usual, your handler is active  // ...});

Frequently asked questions[​](#frequently-asked-questions "Direct link to Frequently asked questions")
------------------------------------------------------------------------------------------------------

### What's the difference between `@playwright/test` and `@playwright/experimental-ct-{react,svelte,vue}`?[​](#whats-the-difference-between-playwrighttest-and-playwrightexperimental-ct-reactsveltevue "Direct link to whats-the-difference-between-playwrighttest-and-playwrightexperimental-ct-reactsveltevue")

    test('…', async ({ mount, page, context }) => {  // …});

`@playwright/experimental-ct-{react,svelte,vue}` wrap `@playwright/test` to provide an additional built-in component-testing specific fixture called `mount`:

*   React
*   Svelte
*   Vue

    import { test, expect } from '@playwright/experimental-ct-react';import HelloWorld from './HelloWorld';test.use({ viewport: { width: 500, height: 500 } });test('should work', async ({ mount }) => {  const component = await mount(<HelloWorld msg="greetings" />);  await expect(component).toContainText('Greetings');});

    import { test, expect } from '@playwright/experimental-ct-vue';import HelloWorld from './HelloWorld.vue';test.use({ viewport: { width: 500, height: 500 } });test('should work', async ({ mount }) => {  const component = await mount(HelloWorld, {    props: {      msg: 'Greetings',    },  });  await expect(component).toContainText('Greetings');});

    import { test, expect } from '@playwright/experimental-ct-svelte';import HelloWorld from './HelloWorld.svelte';test.use({ viewport: { width: 500, height: 500 } });test('should work', async ({ mount }) => {  const component = await mount(HelloWorld, {    props: {      msg: 'Greetings',    },  });  await expect(component).toContainText('Greetings');});

Additionally, it adds some config options you can use in your `playwright-ct.config.{ts,js}`.

Finally, under the hood, each test re-uses the `context` and `page` fixture as a speed optimization for Component Testing. It resets them in between each test so it should be functionally equivalent to `@playwright/test`'s guarantee that you get a new, isolated `context` and `page` fixture per-test.

### I have a project that already uses Vite. Can I reuse the config?[​](#i-have-a-project-that-already-uses-vite-can-i-reuse-the-config "Direct link to I have a project that already uses Vite. Can I reuse the config?")

At this point, Playwright is bundler-agnostic, so it is not reusing your existing Vite config. Your config might have a lot of things we won't be able to reuse. So for now, you would copy your path mappings and other high level settings into the `ctViteConfig` property of Playwright config.

    import { defineConfig } from '@playwright/experimental-ct-react';export default defineConfig({  use: {    ctViteConfig: {      // ...    },  },});

You can specify plugins via Vite config for testing settings. Note that once you start specifying plugins, you are responsible for specifying the framework plugin as well, `vue()` in this case:

    import { defineConfig, devices } from '@playwright/experimental-ct-vue';import { resolve } from 'path';import vue from '@vitejs/plugin-vue';import AutoImport from 'unplugin-auto-import/vite';import Components from 'unplugin-vue-components/vite';export default defineConfig({  testDir: './tests/component',  use: {    trace: 'on-first-retry',    ctViteConfig: {      plugins: [        vue(),        AutoImport({          imports: [            'vue',            'vue-router',            '@vueuse/head',            'pinia',            {              '@/store': ['useStore'],            },          ],          dts: 'src/auto-imports.d.ts',          eslintrc: {            enabled: true,          },        }),        Components({          dirs: ['src/components'],          extensions: ['vue'],        }),      ],      resolve: {        alias: {          '@': resolve(__dirname, './src'),        },      },    },  },});

### How do I use CSS imports?[​](#how-do-i-use-css-imports "Direct link to How do I use CSS imports?")

If you have a component that imports CSS, Vite will handle it automatically. You can also use CSS pre-processors such as Sass, Less, or Stylus, and Vite will handle them as well without any additional configuration. However, corresponding CSS pre-processor needs to be installed.

Vite has a hard requirement that all CSS Modules are named `*.module.[css extension]`. If you have a custom build config for your project normally and have imports of the form `import styles from 'styles.css'` you must rename your files to properly indicate they are to be treated as modules. You could also write a Vite plugin to handle this for you.

Check [Vite documentation](https://vite.dev/guide/features#css) for more details.

### How can I test components that uses Pinia?[​](#how-can-i-test-components-that-uses-pinia "Direct link to How can I test components that uses Pinia?")

Pinia needs to be initialized in `playwright/index.{js,ts,jsx,tsx}`. If you do this inside a `beforeMount` hook, the `initialState` can be overwritten on a per-test basis:

playwright/index.ts

    import { beforeMount, afterMount } from '@playwright/experimental-ct-vue/hooks';import { createTestingPinia } from '@pinia/testing';import type { StoreState } from 'pinia';import type { useStore } from '../src/store';export type HooksConfig = {  store?: StoreState<ReturnType<typeof useStore>>;}beforeMount<HooksConfig>(async ({ hooksConfig }) => {  createTestingPinia({    initialState: hooksConfig?.store,    /**     * Use http intercepting to mock api calls instead:     * https://playwright.dev/docs/mock#mock-api-requests     */    stubActions: false,    createSpy(args) {      console.log('spy', args)      return () => console.log('spy-returns')    },  });});

src/pinia.spec.ts

    import { test, expect } from '@playwright/experimental-ct-vue';import type { HooksConfig } from '../playwright';import Store from './Store.vue';test('override initialState ', async ({ mount }) => {  const component = await mount<HooksConfig>(Store, {    hooksConfig: {      store: { name: 'override initialState' }    }  });  await expect(component).toContainText('override initialState');});

### How do I access the component's methods or its instance?[​](#how-do-i-access-the-components-methods-or-its-instance "Direct link to How do I access the component's methods or its instance?")

Accessing a component's internal methods or its instance within test code is neither recommended nor supported. Instead, focus on observing and interacting with the component from a user's perspective, typically by clicking or verifying if something is visible on the page. Tests become less fragile and more valuable when they avoid interacting with internal implementation details, such as the component instance or its methods. Keep in mind that if a test fails when run from a user’s perspective, it likely means the automated test has uncovered a genuine bug in your code.

# Debugging Tests

Debugging Tests
===============

VS Code debugger[​](#vs-code-debugger "Direct link to VS Code debugger")
------------------------------------------------------------------------

We recommend using the [VS Code Extension](/docs/getting-started-vscode) for debugging for a better developer experience. With the VS Code extension you can debug your tests right in VS Code, see error messages, set breakpoints and step through your tests.

![running test in debug mode](https://user-images.githubusercontent.com/13063165/212740233-3f278825-13e7-4a88-a118-dd4478d43a16.png)

### Error Messages[​](#error-messages "Direct link to Error Messages")

If your test fails VS Code will show you error messages right in the editor showing what was expected, what was received as well as a complete call log.

![error messaging in vs code](https://user-images.githubusercontent.com/13063165/212738654-b573b7c9-05be-476f-ab4c-201bf4265bc0.png)

### Live Debugging[​](#live-debugging "Direct link to Live Debugging")

You can debug your test live in VS Code. After running a test with the `Show Browser` option checked, click on any of the locators in VS Code and it will be highlighted in the Browser window. Playwright will also show you if there are multiple matches.

![live debugging in VS Code](https://user-images.githubusercontent.com/13063165/212884329-0755b007-0d69-4987-b084-38fd5bfb577d.png)

You can also edit the locators in VS Code and Playwright will show you the changes live in the browser window.

![live debugging in VS Code](https://user-images.githubusercontent.com/13063165/212884772-5022d4b1-6fab-456f-88e3-506f2354e238.png)

### Picking a Locator[​](#picking-a-locator "Direct link to Picking a Locator")

Pick a [locator](/docs/locators) and copy it into your test file by clicking the **Pick locator** button form the testing sidebar. Then in the browser click the element you require and it will now show up in the **Pick locator** box in VS Code. Press 'enter' on your keyboard to copy the locator into the clipboard and then paste anywhere in your code. Or press 'escape' if you want to cancel.

![Pick locators](https://user-images.githubusercontent.com/13063165/212741666-6479a702-2517-44a3-9eca-e719e13b379c.png)

Playwright will look at your page and figure out the best locator, prioritizing [role, text and test id locators](/docs/locators). If Playwright finds multiple elements matching the locator, it will improve the locator to make it resilient and uniquely identify the target element, so you don't have to worry about failing tests due to locators.

### Run in Debug Mode[​](#run-in-debug-mode "Direct link to Run in Debug Mode")

To set a breakpoint click next to the line number where you want the breakpoint to be until a red dot appears. Run the tests in debug mode by right clicking on the line next to the test you want to run.

![setting debug test mode](https://user-images.githubusercontent.com/13063165/212739847-ecb7dcfe-8929-45f3-b24e-f9c4b592f430.png)

A browser window will open and the test will run and pause at where the breakpoint is set. You can step through the tests, pause the test and rerun the tests from the menu in VS Code.

![running test in debug mode](https://user-images.githubusercontent.com/13063165/212740233-3f278825-13e7-4a88-a118-dd4478d43a16.png)

### Debug Tests Using Chrome DevTools[​](#debug-tests-using-chrome-devtools "Direct link to Debug Tests Using Chrome DevTools")

Instead of using `Debug Test`, choose `Run Test` in VS Code. With `Show Browser` enabled, the browser session is reused, letting you open Chrome DevTools for continuous debugging of your tests and the web application.

### Debug in different Browsers[​](#debug-in-different-browsers "Direct link to Debug in different Browsers")

By default, debugging is done using the Chromium profile. You can debug your tests on different browsers by right clicking on the debug icon in the testing sidebar and clicking on the 'Select Default Profile' option from the dropdown.

![debugging on specific profile](https://user-images.githubusercontent.com/13063165/212879469-436f8130-c62a-49e1-9d67-c1903b478d5f.png)

Then choose the test profile you would like to use for debugging your tests. Each time you run your test in debug mode it will use the profile you selected. You can run tests in debug mode by right clicking the line number where your test is and selecting 'Debug Test' from the menu.

![choosing a profile for debugging](https://user-images.githubusercontent.com/13063165/212880198-eac22c3e-68ce-47da-9163-d6b376ae7575.png)

To learn more about debugging, see [Debugging in Visual Studio Code](https://code.visualstudio.com/docs/editor/debugging).

Playwright Inspector[​](#playwright-inspector "Direct link to Playwright Inspector")
------------------------------------------------------------------------------------

The Playwright Inspector is a GUI tool to help you debug your Playwright tests. It allows you to step through your tests, live edit locators, pick locators and see actionability logs.

![Playwright Inspector](https://user-images.githubusercontent.com/13063165/212924587-4b84e5f6-b147-40e9-8c75-d7b9ab6b7ca1.png)

### Run in debug mode[​](#run-in-debug-mode-1 "Direct link to Run in debug mode")

Run your tests with the `--debug` flag to open the inspector. This configures Playwright for debugging and opens the inspector. Additional useful defaults are configured when `--debug` is used:

*   Browsers launch in headed mode
*   Default timeout is set to 0 (= no timeout)

#### Debug all tests on all browsers[​](#debug-all-tests-on-all-browsers "Direct link to Debug all tests on all browsers")

To debug all tests run the test command with the `--debug` flag. This will run tests one by one, and open the inspector and a browser window for each test.

    npx playwright test --debug

#### Debug one test on all browsers[​](#debug-one-test-on-all-browsers "Direct link to Debug one test on all browsers")

To debug one test on a specific line, run the test command followed by the name of the test file and the line number of the test you want to debug, followed by the `--debug` flag. This will run a single test in each browser configured in your [`playwright.config`](/docs/test-projects#configure-projects-for-multiple-browsers) and open the inspector.

    npx playwright test example.spec.ts:10 --debug

#### Debug on a specific browser[​](#debug-on-a-specific-browser "Direct link to Debug on a specific browser")

In Playwright you can configure projects in your [`playwright.config`](/docs/test-projects#configure-projects-for-multiple-browsers). Once configured you can then debug your tests on a specific browser or mobile viewport using the `--project` flag followed by the name of the project configured in your `playwright.config`.

    npx playwright test --project=chromium --debugnpx playwright test --project="Mobile Safari" --debugnpx playwright test --project="Microsoft Edge" --debug

#### Debug one test on a specific browser[​](#debug-one-test-on-a-specific-browser "Direct link to Debug one test on a specific browser")

To run one test on a specific browser add the name of the test file and the line number of the test you want to debug as well as the `--project` flag followed by the name of the project.

    npx playwright test example.spec.ts:10 --project=webkit --debug

### Stepping through your tests[​](#stepping-through-your-tests "Direct link to Stepping through your tests")

You can play, pause or step through each action of your test using the toolbar at the top of the Inspector. You can see the current action highlighted in the test code, and matching elements highlighted in the browser window.

![Playwright Inspector and browser](https://user-images.githubusercontent.com/13063165/212936618-84b87acc-bc2e-46ed-994b-32b2ef742e60.png)

### Run a test from a specific breakpoint[​](#run-a-test-from-a-specific-breakpoint "Direct link to Run a test from a specific breakpoint")

To speed up the debugging process you can add a [page.pause()](/docs/api/class-page#page-pause) method to your test. This way you won't have to step through each action of your test to get to the point where you want to debug.

    await page.pause();

Once you add a `page.pause()` call, run your tests in debug mode. Clicking the "Resume" button in the Inspector will run the test and only stop on the `page.pause()`.

![test with page.pause](https://user-images.githubusercontent.com/13063165/219473050-122be4c2-31d0-4cbd-aa8b-8588e8b781a6.png)

### Live editing locators[​](#live-editing-locators "Direct link to Live editing locators")

While running in debug mode you can live edit the locators. Next to the 'Pick Locator' button there is a field showing the [locator](/docs/locators) that the test is paused on. You can edit this locator directly in the **Pick Locator** field, and matching elements will be highlighted in the browser window.

![live editing locators](https://user-images.githubusercontent.com/13063165/212980815-1cf6ef7b-e69a-496c-898a-ec603a3bc562.png)

### Picking locators[​](#picking-locators "Direct link to Picking locators")

While debugging, you might need to choose a more resilient locator. You can do this by clicking on the **Pick Locator** button and hovering over any element in the browser window. While hovering over an element you will see the code needed to locate this element highlighted below. Clicking an element in the browser will add the locator into the field where you can then either tweak it or copy it into your code.

![Picking locators](https://user-images.githubusercontent.com/13063165/212968640-ce82a027-9277-4bdf-b0a9-6282fb2becb7.png)

Playwright will look at your page and figure out the best locator, prioritizing [role, text and test id locators](/docs/locators). If Playwright finds multiple elements matching the locator, it will improve the locator to make it resilient and uniquely identify the target element, so you don't have to worry about failing tests due to locators.

### Actionability logs[​](#actionability-logs "Direct link to Actionability logs")

By the time Playwright has paused on a click action, it has already performed [actionability checks](/docs/actionability) that can be found in the log. This can help you understand what happened during your test and what Playwright did or tried to do. The log tells you if the element was visible, enabled and stable, if the locator resolved to an element, scrolled into view, and so much more. If actionability can't be reached, it will show the action as pending.

![Actionability Logs](https://user-images.githubusercontent.com/13063165/212968907-5dede739-e0e3-482a-91cd-726a0f5b0b6d.png)

Trace Viewer[​](#trace-viewer "Direct link to Trace Viewer")
------------------------------------------------------------

Playwright [Trace Viewer](/docs/trace-viewer) is a GUI tool that lets you explore recorded Playwright traces of your tests. You can go back and forward through each action on the left side, and visually see what was happening during the action. In the middle of the screen, you can see a DOM snapshot for the action. On the right side you can see action details, such as time, parameters, return value and log. You can also explore console messages, network requests and the source code.

To learn more about how to record traces and use the Trace Viewer, check out the [Trace Viewer](/docs/trace-viewer) guide.

Browser Developer Tools[​](#browser-developer-tools "Direct link to Browser Developer Tools")
---------------------------------------------------------------------------------------------

When running in Debug Mode with `PWDEBUG=console`, a `playwright` object is available in the Developer tools console. Developer tools can help you to:

*   Inspect the DOM tree and **find element selectors**
*   **See console logs** during execution (or learn how to [read logs via API](/docs/api/class-page#page-event-console))
*   Check **network activity** and other developer tools features

![Browser Developer Tools with Playwright object](https://user-images.githubusercontent.com/13063165/219128002-898f604d-9697-4b7f-95b5-a6a8260b7282.png)

To debug your tests using the browser developer tools, start by setting a breakpoint in your test to pause the execution using the [page.pause()](/docs/api/class-page#page-pause) method.

    await page.pause();

Once you have set a breakpoint in your test, you can then run your test with `PWDEBUG=console`.

*   Bash
*   PowerShell
*   Batch

    PWDEBUG=console npx playwright test

    $env:PWDEBUG="console"npx playwright test

    set PWDEBUG=consolenpx playwright test

Once Playwright launches the browser window, you can open the developer tools. The `playwright` object will be available in the console panel.

#### playwright.$(selector)[​](#playwrightselector "Direct link to playwright.$(selector)")

Query the Playwright selector, using the actual Playwright query engine, for example:

    playwright.$('.auth-form >> text=Log in');<button>Log in</button>

#### playwright.$$(selector)[​](#playwrightselector-1 "Direct link to playwright.$$(selector)")

Same as `playwright.$`, but returns all matching elements.

    playwright.$$('li >> text=John')[<li>, <li>, <li>, <li>]

#### playwright.inspect(selector)[​](#playwrightinspectselector "Direct link to playwright.inspect(selector)")

Reveal element in the Elements panel.

    playwright.inspect('text=Log in')

#### playwright.locator(selector)[​](#playwrightlocatorselector "Direct link to playwright.locator(selector)")

Create a locator and query matching elements, for example:

    playwright.locator('.auth-form', { hasText: 'Log in' });Locator ()  - element: button  - elements: [button]

#### playwright.selector(element)[​](#playwrightselectorelement "Direct link to playwright.selector(element)")

Generates selector for the given element. For example, select an element in the Elements panel and pass `$0`:

    playwright.selector($0)"div[id="glow-ingress-block"] >> text=/.*Hello.*/"

Verbose API logs[​](#verbose-api-logs "Direct link to Verbose API logs")
------------------------------------------------------------------------

Playwright supports verbose logging with the `DEBUG` environment variable.

*   Bash
*   PowerShell
*   Batch

    DEBUG=pw:api npx playwright test

    $env:DEBUG="pw:api"npx playwright test

    set DEBUG=pw:apinpx playwright test

note

**For WebKit**: launching WebKit Inspector during the execution will prevent the Playwright script from executing any further and will reset pre-configured user agent and device emulation.

Headed mode[​](#headed-mode "Direct link to Headed mode")
---------------------------------------------------------

Playwright runs browsers in headless mode by default. To change this behavior, use `headless: false` as a launch option.

You can also use the [slowMo](/docs/api/class-browsertype#browser-type-launch-option-slow-mo) option to slow down execution (by N milliseconds per operation) and follow along while debugging.

    // Chromium, Firefox, or WebKitawait chromium.launch({ headless: false, slowMo: 100 });

# Dialogs

Dialogs
=======

Introduction[​](#introduction "Direct link to Introduction")
------------------------------------------------------------

Playwright can interact with the web page dialogs such as [`alert`](https://developer.mozilla.org/en-US/docs/Web/API/Window/alert), [`confirm`](https://developer.mozilla.org/en-US/docs/Web/API/Window/confirm), [`prompt`](https://developer.mozilla.org/en-US/docs/Web/API/Window/prompt) as well as [`beforeunload`](https://developer.mozilla.org/en-US/docs/Web/API/Window/beforeunload_event) confirmation. For print dialogs, see [Print](#print-dialogs).

alert(), confirm(), prompt() dialogs[​](#alert-confirm-prompt-dialogs "Direct link to alert(), confirm(), prompt() dialogs")
----------------------------------------------------------------------------------------------------------------------------

By default, dialogs are auto-dismissed by Playwright, so you don't have to handle them. However, you can register a dialog handler before the action that triggers the dialog to either [dialog.accept()](/docs/api/class-dialog#dialog-accept) or [dialog.dismiss()](/docs/api/class-dialog#dialog-dismiss) it.

    page.on('dialog', dialog => dialog.accept());await page.getByRole('button').click();

note

[page.on('dialog')](/docs/api/class-page#page-event-dialog) listener **must handle** the dialog. Otherwise your action will stall, be it [locator.click()](/docs/api/class-locator#locator-click) or something else. That's because dialogs in Web are modals and therefore block further page execution until they are handled.

As a result, the following snippet will never resolve:

warning

WRONG!

    page.on('dialog', dialog => console.log(dialog.message()));await page.getByRole('button').click(); // Will hang here

note

If there is no listener for [page.on('dialog')](/docs/api/class-page#page-event-dialog), all dialogs are automatically dismissed.

beforeunload dialog[​](#beforeunload-dialog "Direct link to beforeunload dialog")
---------------------------------------------------------------------------------

When [page.close()](/docs/api/class-page#page-close) is invoked with the truthy [runBeforeUnload](/docs/api/class-page#page-close-option-run-before-unload) value, the page runs its unload handlers. This is the only case when [page.close()](/docs/api/class-page#page-close) does not wait for the page to actually close, because it might be that the page stays open in the end of the operation.

You can register a dialog handler to handle the `beforeunload` dialog yourself:

    page.on('dialog', async dialog => {  assert(dialog.type() === 'beforeunload');  await dialog.dismiss();});await page.close({ runBeforeUnload: true });

Print dialogs[​](#print-dialogs "Direct link to Print dialogs")
---------------------------------------------------------------

In order to assert that a print dialog via [`window.print`](https://developer.mozilla.org/en-US/docs/Web/API/Window/print) was triggered, you can use the following snippet:

    await page.goto('<url>');await page.evaluate('(() => {window.waitForPrintDialog = new Promise(f => window.print = f);})()');await page.getByText('Print it!').click();await page.waitForFunction('window.waitForPrintDialog');

This will wait for the print dialog to be opened after the button is clicked. Make sure to evaluate the script before clicking the button / after the page is loaded.

# Downloads

Downloads
=========

Introduction[​](#introduction "Direct link to Introduction")
------------------------------------------------------------

For every attachment downloaded by the page, [page.on('download')](/docs/api/class-page#page-event-download) event is emitted. All these attachments are downloaded into a temporary folder. You can obtain the download url, file name and payload stream using the [Download](/docs/api/class-download "Download") object from the event.

You can specify where to persist downloaded files using the [downloadsPath](/docs/api/class-browsertype#browser-type-launch-option-downloads-path) option in [browserType.launch()](/docs/api/class-browsertype#browser-type-launch).

note

Downloaded files are deleted when the browser context that produced them is closed.

Here is the simplest way to handle the file download:

    // Start waiting for download before clicking. Note no await.const downloadPromise = page.waitForEvent('download');await page.getByText('Download file').click();const download = await downloadPromise;// Wait for the download process to complete and save the downloaded file somewhere.await download.saveAs('/path/to/save/at/' + download.suggestedFilename());

#### Variations[​](#variations "Direct link to Variations")

If you have no idea what initiates the download, you can still handle the event:

    page.on('download', download => download.path().then(console.log));

Note that handling the event forks the control flow and makes the script harder to follow. Your scenario might end while you are downloading a file since your main control flow is not awaiting for this operation to resolve.

note

For uploading files, see the [uploading files](/docs/input#upload-files) section.

# Evaluating JavaScript

Evaluating JavaScript
=====================

Introduction[​](#introduction "Direct link to Introduction")
------------------------------------------------------------

Playwright scripts run in your Playwright environment. Your page scripts run in the browser page environment. Those environments don't intersect, they are running in different virtual machines in different processes and even potentially on different computers.

The [page.evaluate()](/docs/api/class-page#page-evaluate) API can run a JavaScript function in the context of the web page and bring results back to the Playwright environment. Browser globals like `window` and `document` can be used in `evaluate`.

    const href = await page.evaluate(() => document.location.href);

If the result is a Promise or if the function is asynchronous evaluate will automatically wait until it's resolved:

    const status = await page.evaluate(async () => {  const response = await fetch(location.href);  return response.status;});

Different environments[​](#different-environments "Direct link to Different environments")
------------------------------------------------------------------------------------------

Evaluated scripts run in the browser environment, while your test runs in a testing environments. This means you cannot use variables from your test in the page and vice versa. Instead, you should pass them explicitly as an argument.

The following snippet is **WRONG** because it uses the variable directly:

    const data = 'some data';const result = await page.evaluate(() => {  // WRONG: there is no "data" in the web page.  window.myApp.use(data);});

The following snippet is **CORRECT** because it passes the value explicitly as an argument:

    const data = 'some data';// Pass |data| as a parameter.const result = await page.evaluate(data => {  window.myApp.use(data);}, data);

Evaluation Argument[​](#evaluation-argument "Direct link to Evaluation Argument")
---------------------------------------------------------------------------------

Playwright evaluation methods like [page.evaluate()](/docs/api/class-page#page-evaluate) take a single optional argument. This argument can be a mix of [Serializable](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify#Description "Serializable") values and [JSHandle](/docs/api/class-jshandle "JSHandle") instances. Handles are automatically converted to the value they represent.

    // A primitive value.await page.evaluate(num => num, 42);// An array.await page.evaluate(array => array.length, [1, 2, 3]);// An object.await page.evaluate(object => object.foo, { foo: 'bar' });// A single handle.const button = await page.evaluateHandle('window.button');await page.evaluate(button => button.textContent, button);// Alternative notation using JSHandle.evaluate.await button.evaluate((button, from) => button.textContent.substring(from), 5);// Object with multiple handles.const button1 = await page.evaluateHandle('window.button1');const button2 = await page.evaluateHandle('window.button2');await page.evaluate(    o => o.button1.textContent + o.button2.textContent,    { button1, button2 });// Object destructuring works. Note that property names must match// between the destructured object and the argument.// Also note the required parenthesis.await page.evaluate(    ({ button1, button2 }) => button1.textContent + button2.textContent,    { button1, button2 });// Array works as well. Arbitrary names can be used for destructuring.// Note the required parenthesis.await page.evaluate(    ([b1, b2]) => b1.textContent + b2.textContent,    [button1, button2]);// Any mix of serializables and handles works.await page.evaluate(    x => x.button1.textContent + x.list[0].textContent + String(x.foo),    { button1, list: [button2], foo: null });

Init scripts[​](#init-scripts "Direct link to Init scripts")
------------------------------------------------------------

Sometimes it is convenient to evaluate something in the page before it starts loading. For example, you might want to setup some mocks or test data.

In this case, use [page.addInitScript()](/docs/api/class-page#page-add-init-script) or [browserContext.addInitScript()](/docs/api/class-browsercontext#browser-context-add-init-script). In the example below, we will replace `Math.random()` with a constant value.

First, create a `preload.js` file that contains the mock.

    // preload.jsMath.random = () => 42;

Next, add init script to the page.

    import { test, expect } from '@playwright/test';import path from 'path';test.beforeEach(async ({ page }) => {  // Add script for every test in the beforeEach hook.  // Make sure to correctly resolve the script path.  await page.addInitScript({ path: path.resolve(__dirname, '../mocks/preload.js') });});

Alternatively, you can pass a function instead of creating a preload script file. This is more convenient for short or one-off scripts. You can also pass an argument this way.

    import { test, expect } from '@playwright/test';// Add script for every test in the beforeEach hook.test.beforeEach(async ({ page }) => {  const value = 42;  await page.addInitScript(value => {    Math.random = () => value;  }, value);});

# Events

Events
======

Introduction[​](#introduction "Direct link to Introduction")
------------------------------------------------------------

Playwright allows listening to various types of events happening on the web page, such as network requests, creation of child pages, dedicated workers etc. There are several ways to subscribe to such events, such as waiting for events or adding or removing event listeners.

Waiting for event[​](#waiting-for-event "Direct link to Waiting for event")
---------------------------------------------------------------------------

Most of the time, scripts will need to wait for a particular event to happen. Below are some of the typical event awaiting patterns.

Wait for a request with the specified url using [page.waitForRequest()](/docs/api/class-page#page-wait-for-request):

    // Start waiting for request before goto. Note no await.const requestPromise = page.waitForRequest('**/*logo*.png');await page.goto('https://wikipedia.org');const request = await requestPromise;console.log(request.url());

Wait for popup window:

    // Start waiting for popup before clicking. Note no await.const popupPromise = page.waitForEvent('popup');await page.getByText('open the popup').click();const popup = await popupPromise;await popup.goto('https://wikipedia.org');

Adding/removing event listener[​](#addingremoving-event-listener "Direct link to Adding/removing event listener")
-----------------------------------------------------------------------------------------------------------------

Sometimes, events happen in random time and instead of waiting for them, they need to be handled. Playwright supports traditional language mechanisms for subscribing and unsubscribing from the events:

    page.on('request', request => console.log(`Request sent: ${request.url()}`));const listener = request => console.log(`Request finished: ${request.url()}`);page.on('requestfinished', listener);await page.goto('https://wikipedia.org');page.off('requestfinished', listener);await page.goto('https://www.openstreetmap.org/');

Adding one-off listeners[​](#adding-one-off-listeners "Direct link to Adding one-off listeners")
------------------------------------------------------------------------------------------------

If a certain event needs to be handled once, there is a convenience API for that:

    page.once('dialog', dialog => dialog.accept('2021'));await page.evaluate("prompt('Enter a number:')");

# Extensibility

Extensibility
=============

Custom selector engines[​](#custom-selector-engines "Direct link to Custom selector engines")
---------------------------------------------------------------------------------------------

Playwright supports custom selector engines, registered with [selectors.register()](/docs/api/class-selectors#selectors-register).

Selector engine should have the following properties:

*   `query` function to query first element matching `selector` relative to the `root`.
*   `queryAll` function to query all elements matching `selector` relative to the `root`.

By default the engine is run directly in the frame's JavaScript context and, for example, can call an application-defined function. To isolate the engine from any JavaScript in the frame, but leave access to the DOM, register the engine with `{contentScript: true}` option. Content script engine is safer because it is protected from any tampering with the global objects, for example altering `Node.prototype` methods. All built-in selector engines run as content scripts. Note that running as a content script is not guaranteed when the engine is used together with other custom engines.

Selectors must be registered before creating the page.

An example of registering selector engine that queries elements based on a tag name:

baseTest.ts

    import { test as base } from '@playwright/test';export { expect } from '@playwright/test';// Must be a function that evaluates to a selector engine instance.const createTagNameEngine = () => ({  // Returns the first element matching given selector in the root's subtree.  query(root, selector) {    return root.querySelector(selector);  },  // Returns all elements matching given selector in the root's subtree.  queryAll(root, selector) {    return Array.from(root.querySelectorAll(selector));  }});export const test = base.extend<{}, { selectorRegistration: void }>({  // Register selectors once per worker.  selectorRegistration: [async ({ playwright }, use) => {    // Register the engine. Selectors will be prefixed with "tag=".    await playwright.selectors.register('tag', createTagNameEngine);    await use();  }, { scope: 'worker', auto: true }],});

example.spec.ts

    import { test, expect } from './baseTest';test('selector engine test', async ({ page }) => {  // Now we can use 'tag=' selectors.  const button = page.locator('tag=button');  await button.click();  // We can combine it with built-in locators.  await page.locator('tag=div').getByText('Click me').click();  // We can use it in any methods supporting selectors.  await expect(page.locator('tag=button')).toHaveCount(3);});

# Frames

Frames
======

Introduction[​](#introduction "Direct link to Introduction")
------------------------------------------------------------

A [Page](/docs/api/class-page "Page") can have one or more [Frame](/docs/api/class-frame "Frame") objects attached to it. Each page has a main frame and page-level interactions (like `click`) are assumed to operate in the main frame.

A page can have additional frames attached with the `iframe` HTML tag. These frames can be accessed for interactions inside the frame.

    // Locate element inside frameconst username = await page.frameLocator('.frame-class').getByLabel('User Name');await username.fill('John');

Frame objects[​](#frame-objects "Direct link to Frame objects")
---------------------------------------------------------------

One can access frame objects using the [page.frame()](/docs/api/class-page#page-frame) API:

    // Get frame using the frame's name attributeconst frame = page.frame('frame-login');// Get frame using frame's URLconst frame = page.frame({ url: /.*domain.*/ });// Interact with the frameawait frame.fill('#username-input', 'John');

# Handles

Handles
=======

Introduction[​](#introduction "Direct link to Introduction")
------------------------------------------------------------

Playwright can create handles to the page DOM elements or any other objects inside the page. These handles live in the Playwright process, whereas the actual objects live in the browser. There are two types of handles:

*   [JSHandle](/docs/api/class-jshandle "JSHandle") to reference any JavaScript objects in the page
*   [ElementHandle](/docs/api/class-elementhandle "ElementHandle") to reference DOM elements in the page, it has extra methods that allow performing actions on the elements and asserting their properties.

Since any DOM element in the page is also a JavaScript object, any [ElementHandle](/docs/api/class-elementhandle "ElementHandle") is a [JSHandle](/docs/api/class-jshandle "JSHandle") as well.

Handles are used to perform operations on those actual objects in the page. You can evaluate on a handle, get handle properties, pass handle as an evaluation parameter, serialize page object into JSON etc. See the [JSHandle](/docs/api/class-jshandle "JSHandle") class API for these and methods.

### API reference[​](#api-reference "Direct link to API reference")

*   [JSHandle](/docs/api/class-jshandle "JSHandle")
*   [ElementHandle](/docs/api/class-elementhandle "ElementHandle")

Here is the easiest way to obtain a [JSHandle](/docs/api/class-jshandle "JSHandle").

    const jsHandle = await page.evaluateHandle('window');//  Use jsHandle for evaluations.

Element Handles[​](#element-handles "Direct link to Element Handles")
---------------------------------------------------------------------

Discouraged

The use of [ElementHandle](/docs/api/class-elementhandle "ElementHandle") is discouraged, use [Locator](/docs/api/class-locator "Locator") objects and web-first assertions instead.

When [ElementHandle](/docs/api/class-elementhandle "ElementHandle") is required, it is recommended to fetch it with the [page.waitForSelector()](/docs/api/class-page#page-wait-for-selector) or [frame.waitForSelector()](/docs/api/class-frame#frame-wait-for-selector) methods. These APIs wait for the element to be attached and visible.

    // Get the element handleconst elementHandle = page.waitForSelector('#box');// Assert bounding box for the elementconst boundingBox = await elementHandle.boundingBox();expect(boundingBox.width).toBe(100);// Assert attribute for the elementconst classNames = await elementHandle.getAttribute('class');expect(classNames.includes('highlighted')).toBeTruthy();

Handles as parameters[​](#handles-as-parameters "Direct link to Handles as parameters")
---------------------------------------------------------------------------------------

Handles can be passed into the [page.evaluate()](/docs/api/class-page#page-evaluate) and similar methods. The following snippet creates a new array in the page, initializes it with data and returns a handle to this array into Playwright. It then uses the handle in subsequent evaluations:

    // Create new array in page.const myArrayHandle = await page.evaluateHandle(() => {  window.myArray = [1];  return myArray;});// Get the length of the array.const length = await page.evaluate(a => a.length, myArrayHandle);// Add one more element to the array using the handleawait page.evaluate(arg => arg.myArray.push(arg.newElement), {  myArray: myArrayHandle,  newElement: 2});// Release the object when it's no longer needed.await myArrayHandle.dispose();

Handle Lifecycle[​](#handle-lifecycle "Direct link to Handle Lifecycle")
------------------------------------------------------------------------

Handles can be acquired using the page methods such as [page.evaluateHandle()](/docs/api/class-page#page-evaluate-handle), [page.$()](/docs/api/class-page#page-query-selector) or [page.$$()](/docs/api/class-page#page-query-selector-all) or their frame counterparts [frame.evaluateHandle()](/docs/api/class-frame#frame-evaluate-handle), [frame.$()](/docs/api/class-frame#frame-query-selector) or [frame.$$()](/docs/api/class-frame#frame-query-selector-all). Once created, handles will retain object from [garbage collection](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Memory_Management) unless page navigates or the handle is manually disposed via the [jsHandle.dispose()](/docs/api/class-jshandle#js-handle-dispose) method.

### API reference[​](#api-reference-1 "Direct link to API reference")

*   [JSHandle](/docs/api/class-jshandle "JSHandle")
*   [ElementHandle](/docs/api/class-elementhandle "ElementHandle")
*   [elementHandle.boundingBox()](/docs/api/class-elementhandle#element-handle-bounding-box)
*   [elementHandle.getAttribute()](/docs/api/class-elementhandle#element-handle-get-attribute)
*   [elementHandle.innerText()](/docs/api/class-elementhandle#element-handle-inner-text)
*   [elementHandle.innerHTML()](/docs/api/class-elementhandle#element-handle-inner-html)
*   [elementHandle.textContent()](/docs/api/class-elementhandle#element-handle-text-content)
*   [jsHandle.evaluate()](/docs/api/class-jshandle#js-handle-evaluate)
*   [page.evaluateHandle()](/docs/api/class-page#page-evaluate-handle)
*   [page.$()](/docs/api/class-page#page-query-selector)
*   [page.$$()](/docs/api/class-page#page-query-selector-all)

Locator vs ElementHandle[​](#locator-vs-elementhandle "Direct link to Locator vs ElementHandle")
------------------------------------------------------------------------------------------------

caution

We only recommend using [ElementHandle](/docs/api/class-elementhandle "ElementHandle") in the rare cases when you need to perform extensive DOM traversal on a static page. For all user actions and assertions use locator instead.

The difference between the [Locator](/docs/api/class-locator "Locator") and [ElementHandle](/docs/api/class-elementhandle "ElementHandle") is that the latter points to a particular element, while Locator captures the logic of how to retrieve that element.

In the example below, handle points to a particular DOM element on page. If that element changes text or is used by React to render an entirely different component, handle is still pointing to that very stale DOM element. This can lead to unexpected behaviors.

    const handle = await page.$('text=Submit');// ...await handle.hover();await handle.click();

With the locator, every time the locator is used, up-to-date DOM element is located in the page using the selector. So in the snippet below, underlying DOM element is going to be located twice.

    const locator = page.getByText('Submit');// ...await locator.hover();await locator.click();

# Isolation

Isolation
=========

Introduction[​](#introduction "Direct link to Introduction")
------------------------------------------------------------

Tests written with Playwright execute in isolated clean-slate environments called browser contexts. This isolation model improves reproducibility and prevents cascading test failures.

What is Test Isolation?[​](#what-is-test-isolation "Direct link to What is Test Isolation?")
--------------------------------------------------------------------------------------------

Test Isolation is when each test is completely isolated from another test. Every test runs independently from any other test. This means that each test has its own local storage, session storage, cookies etc. Playwright achieves this using [BrowserContext](/docs/api/class-browsercontext "BrowserContext")s which are equivalent to incognito-like profiles. They are fast and cheap to create and are completely isolated, even when running in a single browser. Playwright creates a context for each test, and provides a default [Page](/docs/api/class-page "Page") in that context.

Why is Test Isolation Important?[​](#why-is-test-isolation-important "Direct link to Why is Test Isolation Important?")
-----------------------------------------------------------------------------------------------------------------------

*   No failure carry-over. If one test fails it doesn't affect the other test.
*   Easy to debug errors or flakiness, because you can run just a single test as many times as you'd like.
*   Don't have to think about the order when running in parallel, sharding, etc.

Two Ways of Test Isolation[​](#two-ways-of-test-isolation "Direct link to Two Ways of Test Isolation")
------------------------------------------------------------------------------------------------------

There are two different strategies when it comes to Test Isolation: start from scratch or cleanup in between. The problem with cleaning up in between tests is that it can be easy to forget to clean up and some things are impossible to clean up such as "visited links". State from one test can leak into the next test which could cause your test to fail and make debugging harder as the problem comes from another test. Starting from scratch means everything is new, so if the test fails you only have to look within that test to debug.

How Playwright Achieves Test Isolation[​](#how-playwright-achieves-test-isolation "Direct link to How Playwright Achieves Test Isolation")
------------------------------------------------------------------------------------------------------------------------------------------

Playwright uses browser contexts to achieve Test Isolation. Each test has its own Browser Context. Running the test creates a new browser context each time. When using Playwright as a Test Runner, browser contexts are created by default. Otherwise, you can create browser contexts manually.

*   Test
*   Library

    import { test } from '@playwright/test';test('example test', async ({ page, context }) => {  // "context" is an isolated BrowserContext, created for this specific test.  // "page" belongs to this context.});test('another test', async ({ page, context }) => {  // "context" and "page" in this second test are completely  // isolated from the first test.});

    const browser = await chromium.launch();const context = await browser.newContext();const page = await context.newPage();

Browser contexts can also be used to emulate multi-page scenarios involving mobile devices, permissions, locale and color scheme. Check out our [Emulation](/docs/emulation) guide for more details.

Multiple Contexts in a Single Test[​](#multiple-contexts-in-a-single-test "Direct link to Multiple Contexts in a Single Test")
------------------------------------------------------------------------------------------------------------------------------

Playwright can create multiple browser contexts within a single scenario. This is useful when you want to test for multi-user functionality, like a chat.

*   Test
*   Library

    import { test } from '@playwright/test';test('admin and user', async ({ browser }) => {  // Create two isolated browser contexts  const adminContext = await browser.newContext();  const userContext = await browser.newContext();  // Create pages and interact with contexts independently  const adminPage = await adminContext.newPage();  const userPage = await userContext.newPage();});

    const { chromium } = require('playwright');// Create a Chromium browser instanceconst browser = await chromium.launch();// Create two isolated browser contextsconst userContext = await browser.newContext();const adminContext = await browser.newContext();// Create pages and interact with contexts independentlyconst adminPage = await adminContext.newPage();const userPage = await userContext.newPage();

# Locators

Locators
========

Introduction[​](#introduction "Direct link to Introduction")
------------------------------------------------------------

[Locator](/docs/api/class-locator "Locator")s are the central piece of Playwright's auto-waiting and retry-ability. In a nutshell, locators represent a way to find element(s) on the page at any moment.

### Quick Guide[​](#quick-guide "Direct link to Quick Guide")

These are the recommended built-in locators.

*   [page.getByRole()](#locate-by-role) to locate by explicit and implicit accessibility attributes.
*   [page.getByText()](#locate-by-text) to locate by text content.
*   [page.getByLabel()](#locate-by-label) to locate a form control by associated label's text.
*   [page.getByPlaceholder()](#locate-by-placeholder) to locate an input by placeholder.
*   [page.getByAltText()](#locate-by-alt-text) to locate an element, usually image, by its text alternative.
*   [page.getByTitle()](#locate-by-title) to locate an element by its title attribute.
*   [page.getByTestId()](#locate-by-test-id) to locate an element based on its `data-testid` attribute (other attributes can be configured).

    await page.getByLabel('User Name').fill('John');await page.getByLabel('Password').fill('secret-password');await page.getByRole('button', { name: 'Sign in' }).click();await expect(page.getByText('Welcome, John!')).toBeVisible();

Locating elements[​](#locating-elements "Direct link to Locating elements")
---------------------------------------------------------------------------

Playwright comes with multiple built-in locators. To make tests resilient, we recommend prioritizing user-facing attributes and explicit contracts such as [page.getByRole()](/docs/api/class-page#page-get-by-role).

For example, consider the following DOM structure.

http://localhost:3000

Sign in

    <button>Sign in</button>

Locate the element by its role of `button` with name "Sign in".

    await page.getByRole('button', { name: 'Sign in' }).click();

note

Use the [code generator](/docs/codegen) to generate a locator, and then edit it as you'd like.

Every time a locator is used for an action, an up-to-date DOM element is located in the page. In the snippet below, the underlying DOM element will be located twice, once prior to every action. This means that if the DOM changes in between the calls due to re-render, the new element corresponding to the locator will be used.

    const locator = page.getByRole('button', { name: 'Sign in' });await locator.hover();await locator.click();

Note that all methods that create a locator, such as [page.getByLabel()](/docs/api/class-page#page-get-by-label), are also available on the [Locator](/docs/api/class-locator "Locator") and [FrameLocator](/docs/api/class-framelocator "FrameLocator") classes, so you can chain them and iteratively narrow down your locator.

    const locator = page    .frameLocator('#my-frame')    .getByRole('button', { name: 'Sign in' });await locator.click();

### Locate by role[​](#locate-by-role "Direct link to Locate by role")

The [page.getByRole()](/docs/api/class-page#page-get-by-role) locator reflects how users and assistive technology perceive the page, for example whether some element is a button or a checkbox. When locating by role, you should usually pass the accessible name as well, so that the locator pinpoints the exact element.

For example, consider the following DOM structure.

http://localhost:3000

### Sign up

 Subscribe  
Submit

    <h3>Sign up</h3><label>  <input type="checkbox" /> Subscribe</label><br/><button>Submit</button>

You can locate each element by its implicit role:

    await expect(page.getByRole('heading', { name: 'Sign up' })).toBeVisible();await page.getByRole('checkbox', { name: 'Subscribe' }).check();await page.getByRole('button', { name: /submit/i }).click();

Role locators include [buttons, checkboxes, headings, links, lists, tables, and many more](https://www.w3.org/TR/html-aria/#docconformance) and follow W3C specifications for [ARIA role](https://www.w3.org/TR/wai-aria-1.2/#roles), [ARIA attributes](https://www.w3.org/TR/wai-aria-1.2/#aria-attributes) and [accessible name](https://w3c.github.io/accname/#dfn-accessible-name). Note that many html elements like `<button>` have an [implicitly defined role](https://w3c.github.io/html-aam/#html-element-role-mappings) that is recognized by the role locator.

Note that role locators **do not replace** accessibility audits and conformance tests, but rather give early feedback about the ARIA guidelines.

When to use role locators

We recommend prioritizing role locators to locate elements, as it is the closest way to how users and assistive technology perceive the page.

### Locate by label[​](#locate-by-label "Direct link to Locate by label")

Most form controls usually have dedicated labels that could be conveniently used to interact with the form. In this case, you can locate the control by its associated label using [page.getByLabel()](/docs/api/class-page#page-get-by-label).

For example, consider the following DOM structure.

http://localhost:3000

Password 

    <label>Password <input type="password" /></label>

You can fill the input after locating it by the label text:

    await page.getByLabel('Password').fill('secret');

When to use label locators

Use this locator when locating form fields.

### Locate by placeholder[​](#locate-by-placeholder "Direct link to Locate by placeholder")

Inputs may have a placeholder attribute to hint to the user what value should be entered. You can locate such an input using [page.getByPlaceholder()](/docs/api/class-page#page-get-by-placeholder).

For example, consider the following DOM structure.

http://localhost:3000

    <input type="email" placeholder="name@example.com" />

You can fill the input after locating it by the placeholder text:

    await page    .getByPlaceholder('name@example.com')    .fill('playwright@microsoft.com');

When to use placeholder locators

Use this locator when locating form elements that do not have labels but do have placeholder texts.

### Locate by text[​](#locate-by-text "Direct link to Locate by text")

Find an element by the text it contains. You can match by a substring, exact string, or a regular expression when using [page.getByText()](/docs/api/class-page#page-get-by-text).

For example, consider the following DOM structure.

http://localhost:3000

Welcome, John

    <span>Welcome, John</span>

You can locate the element by the text it contains:

    await expect(page.getByText('Welcome, John')).toBeVisible();

Set an exact match:

    await expect(page.getByText('Welcome, John', { exact: true })).toBeVisible();

Match with a regular expression:

    await expect(page.getByText(/welcome, [A-Za-z]+$/i)).toBeVisible();

note

Matching by text always normalizes whitespace, even with exact match. For example, it turns multiple spaces into one, turns line breaks into spaces and ignores leading and trailing whitespace.

When to use text locators

We recommend using text locators to find non interactive elements like `div`, `span`, `p`, etc. For interactive elements like `button`, `a`, `input`, etc. use [role locators](#locate-by-role).

You can also [filter by text](#filter-by-text) which can be useful when trying to find a particular item in a list.

### Locate by alt text[​](#locate-by-alt-text "Direct link to Locate by alt text")

All images should have an `alt` attribute that describes the image. You can locate an image based on the text alternative using [page.getByAltText()](/docs/api/class-page#page-get-by-alt-text).

For example, consider the following DOM structure.

http://localhost:3000

![playwright logo](/img/playwright-logo.svg)

    <img alt="playwright logo" src="/img/playwright-logo.svg" width="100" />

You can click on the image after locating it by the text alternative:

    await page.getByAltText('playwright logo').click();

When to use alt locators

Use this locator when your element supports alt text such as `img` and `area` elements.

### Locate by title[​](#locate-by-title "Direct link to Locate by title")

Locate an element with a matching title attribute using [page.getByTitle()](/docs/api/class-page#page-get-by-title).

For example, consider the following DOM structure.

http://localhost:3000

25 issues

    <span title='Issues count'>25 issues</span>

You can check the issues count after locating it by the title text:

    await expect(page.getByTitle('Issues count')).toHaveText('25 issues');

When to use title locators

Use this locator when your element has the `title` attribute.

### Locate by test id[​](#locate-by-test-id "Direct link to Locate by test id")

Testing by test ids is the most resilient way of testing as even if your text or role of the attribute changes, the test will still pass. QA's and developers should define explicit test ids and query them with [page.getByTestId()](/docs/api/class-page#page-get-by-test-id). However testing by test ids is not user facing. If the role or text value is important to you then consider using user facing locators such as [role](#locate-by-role) and [text locators](#locate-by-text).

For example, consider the following DOM structure.

http://localhost:3000

Itinéraire

    <button data-testid="directions">Itinéraire</button>

You can locate the element by its test id:

    await page.getByTestId('directions').click();

When to use testid locators

You can also use test ids when you choose to use the test id methodology or when you can't locate by [role](#locate-by-role) or [text](#locate-by-text).

#### Set a custom test id attribute[​](#set-a-custom-test-id-attribute "Direct link to Set a custom test id attribute")

By default, [page.getByTestId()](/docs/api/class-page#page-get-by-test-id) will locate elements based on the `data-testid` attribute, but you can configure it in your test config or by calling [selectors.setTestIdAttribute()](/docs/api/class-selectors#selectors-set-test-id-attribute).

Set the test id to use a custom data attribute for your tests.

playwright.config.ts

    import { defineConfig } from '@playwright/test';export default defineConfig({  use: {    testIdAttribute: 'data-pw'  }});

In your html you can now use `data-pw` as your test id instead of the default `data-testid`.

http://localhost:3000

Itinéraire

    <button data-pw="directions">Itinéraire</button>

And then locate the element as you would normally do:

    await page.getByTestId('directions').click();

### Locate by CSS or XPath[​](#locate-by-css-or-xpath "Direct link to Locate by CSS or XPath")

If you absolutely must use CSS or XPath locators, you can use [page.locator()](/docs/api/class-page#page-locator) to create a locator that takes a selector describing how to find an element in the page. Playwright supports CSS and XPath selectors, and auto-detects them if you omit `css=` or `xpath=` prefix.

    await page.locator('css=button').click();await page.locator('xpath=//button').click();await page.locator('button').click();await page.locator('//button').click();

XPath and CSS selectors can be tied to the DOM structure or implementation. These selectors can break when the DOM structure changes. Long CSS or XPath chains below are an example of a **bad practice** that leads to unstable tests:

    await page.locator(    '#tsf > div:nth-child(2) > div.A8SBwf > div.RNNXgb > div > div.a4bIc > input').click();await page    .locator('//*[@id="tsf"]/div[2]/div[1]/div[1]/div/div[2]/input')    .click();

When to use this

CSS and XPath are not recommended as the DOM can often change leading to non resilient tests. Instead, try to come up with a locator that is close to how the user perceives the page such as [role locators](#locate-by-role) or [define an explicit testing contract](#locate-by-test-id) using test ids.

Locate in Shadow DOM[​](#locate-in-shadow-dom "Direct link to Locate in Shadow DOM")
------------------------------------------------------------------------------------

All locators in Playwright **by default** work with elements in Shadow DOM. The exceptions are:

*   Locating by XPath does not pierce shadow roots.
*   [Closed-mode shadow roots](https://developer.mozilla.org/en-US/docs/Web/API/Element/attachShadow#parameters) are not supported.

Consider the following example with a custom web component:

    <x-details role=button aria-expanded=true aria-controls=inner-details>  <div>Title</div>  #shadow-root    <div id=inner-details>Details</div></x-details>

You can locate in the same way as if the shadow root was not present at all.

To click `<div>Details</div>`:

    await page.getByText('Details').click();

    <x-details role=button aria-expanded=true aria-controls=inner-details>  <div>Title</div>  #shadow-root    <div id=inner-details>Details</div></x-details>

To click `<x-details>`:

    await page.locator('x-details', { hasText: 'Details' }).click();

    <x-details role=button aria-expanded=true aria-controls=inner-details>  <div>Title</div>  #shadow-root    <div id=inner-details>Details</div></x-details>

To ensure that `<x-details>` contains the text "Details":

    await expect(page.locator('x-details')).toContainText('Details');

Filtering Locators[​](#filtering-locators "Direct link to Filtering Locators")
------------------------------------------------------------------------------

Consider the following DOM structure where we want to click on the buy button of the second product card. We have a few options in order to filter the locators to get the right one.

http://localhost:3000

*   ### Product 1
    
    Add to cart
*   ### Product 2
    
    Add to cart

    <ul>  <li>    <h3>Product 1</h3>    <button>Add to cart</button>  </li>  <li>    <h3>Product 2</h3>    <button>Add to cart</button>  </li></ul>

### Filter by text[​](#filter-by-text "Direct link to Filter by text")

Locators can be filtered by text with the [locator.filter()](/docs/api/class-locator#locator-filter) method. It will search for a particular string somewhere inside the element, possibly in a descendant element, case-insensitively. You can also pass a regular expression.

    await page    .getByRole('listitem')    .filter({ hasText: 'Product 2' })    .getByRole('button', { name: 'Add to cart' })    .click();

Use a regular expression:

    await page    .getByRole('listitem')    .filter({ hasText: /Product 2/ })    .getByRole('button', { name: 'Add to cart' })    .click();

### Filter by not having text[​](#filter-by-not-having-text "Direct link to Filter by not having text")

Alternatively, filter by **not having** text:

    // 5 in-stock itemsawait expect(page.getByRole('listitem').filter({ hasNotText: 'Out of stock' })).toHaveCount(5);

### Filter by child/descendant[​](#filter-by-childdescendant "Direct link to Filter by child/descendant")

Locators support an option to only select elements that have or have not a descendant matching another locator. You can therefore filter by any other locator such as a [locator.getByRole()](/docs/api/class-locator#locator-get-by-role), [locator.getByTestId()](/docs/api/class-locator#locator-get-by-test-id), [locator.getByText()](/docs/api/class-locator#locator-get-by-text) etc.

http://localhost:3000

*   ### Product 1
    
    Add to cart
*   ### Product 2
    
    Add to cart

    <ul>  <li>    <h3>Product 1</h3>    <button>Add to cart</button>  </li>  <li>    <h3>Product 2</h3>    <button>Add to cart</button>  </li></ul>

    await page    .getByRole('listitem')    .filter({ has: page.getByRole('heading', { name: 'Product 2' }) })    .getByRole('button', { name: 'Add to cart' })    .click();

We can also assert the product card to make sure there is only one:

    await expect(page    .getByRole('listitem')    .filter({ has: page.getByRole('heading', { name: 'Product 2' }) }))    .toHaveCount(1);

The filtering locator **must be relative** to the original locator and is queried starting with the original locator match, not the document root. Therefore, the following will not work, because the filtering locator starts matching from the `<ul>` list element that is outside of the `<li>` list item matched by the original locator:

    // ✖ WRONGawait expect(page    .getByRole('listitem')    .filter({ has: page.getByRole('list').getByText('Product 2') }))    .toHaveCount(1);

### Filter by not having child/descendant[​](#filter-by-not-having-childdescendant "Direct link to Filter by not having child/descendant")

We can also filter by **not having** a matching element inside.

    await expect(page    .getByRole('listitem')    .filter({ hasNot: page.getByText('Product 2') }))    .toHaveCount(1);

Note that the inner locator is matched starting from the outer one, not from the document root.

Locator operators[​](#locator-operators "Direct link to Locator operators")
---------------------------------------------------------------------------

### Matching inside a locator[​](#matching-inside-a-locator "Direct link to Matching inside a locator")

You can chain methods that create a locator, like [page.getByText()](/docs/api/class-page#page-get-by-text) or [locator.getByRole()](/docs/api/class-locator#locator-get-by-role), to narrow down the search to a particular part of the page.

In this example we first create a locator called product by locating its role of `listitem`. We then filter by text. We can use the product locator again to get by role of button and click it and then use an assertion to make sure there is only one product with the text "Product 2".

    const product = page.getByRole('listitem').filter({ hasText: 'Product 2' });await product.getByRole('button', { name: 'Add to cart' }).click();await expect(product).toHaveCount(1);

You can also chain two locators together, for example to find a "Save" button inside a particular dialog:

    const saveButton = page.getByRole('button', { name: 'Save' });// ...const dialog = page.getByTestId('settings-dialog');await dialog.locator(saveButton).click();

### Matching two locators simultaneously[​](#matching-two-locators-simultaneously "Direct link to Matching two locators simultaneously")

Method [locator.and()](/docs/api/class-locator#locator-and) narrows down an existing locator by matching an additional locator. For example, you can combine [page.getByRole()](/docs/api/class-page#page-get-by-role) and [page.getByTitle()](/docs/api/class-page#page-get-by-title) to match by both role and title.

    const button = page.getByRole('button').and(page.getByTitle('Subscribe'));

### Matching one of the two alternative locators[​](#matching-one-of-the-two-alternative-locators "Direct link to Matching one of the two alternative locators")

If you'd like to target one of the two or more elements, and you don't know which one it will be, use [locator.or()](/docs/api/class-locator#locator-or) to create a locator that matches any one or both of the alternatives.

For example, consider a scenario where you'd like to click on a "New email" button, but sometimes a security settings dialog shows up instead. In this case, you can wait for either a "New email" button, or a dialog and act accordingly.

note

If both "New email" button and security dialog appear on screen, the "or" locator will match both of them, possibly throwing the ["strict mode violation" error](#strictness). In this case, you can use [locator.first()](/docs/api/class-locator#locator-first) to only match one of them.

    const newEmail = page.getByRole('button', { name: 'New' });const dialog = page.getByText('Confirm security settings');await expect(newEmail.or(dialog).first()).toBeVisible();if (await dialog.isVisible())  await page.getByRole('button', { name: 'Dismiss' }).click();await newEmail.click();

### Matching only visible elements[​](#matching-only-visible-elements "Direct link to Matching only visible elements")

note

It's usually better to find a [more reliable way](/docs/locators#quick-guide) to uniquely identify the element instead of checking the visibility.

Consider a page with two buttons, the first invisible and the second [visible](/docs/actionability#visible).

    <button style='display: none'>Invisible</button><button>Visible</button>

*   This will find both buttons and throw a [strictness](/docs/locators#strictness) violation error:
    
        await page.locator('button').click();
    
*   This will only find a second button, because it is visible, and then click it.
    
        await page.locator('button').filter({ visible: true }).click();
    

Lists[​](#lists "Direct link to Lists")
---------------------------------------

### Count items in a list[​](#count-items-in-a-list "Direct link to Count items in a list")

You can assert locators in order to count the items in a list.

For example, consider the following DOM structure:

http://localhost:3000

*   apple
*   banana
*   orange

    <ul>  <li>apple</li>  <li>banana</li>  <li>orange</li></ul>

Use the count assertion to ensure that the list has 3 items.

    await expect(page.getByRole('listitem')).toHaveCount(3);

### Assert all text in a list[​](#assert-all-text-in-a-list "Direct link to Assert all text in a list")

You can assert locators in order to find all the text in a list.

For example, consider the following DOM structure:

http://localhost:3000

*   apple
*   banana
*   orange

    <ul>  <li>apple</li>  <li>banana</li>  <li>orange</li></ul>

Use [expect(locator).toHaveText()](/docs/api/class-locatorassertions#locator-assertions-to-have-text) to ensure that the list has the text "apple", "banana" and "orange".

    await expect(page    .getByRole('listitem'))    .toHaveText(['apple', 'banana', 'orange']);

### Get a specific item[​](#get-a-specific-item "Direct link to Get a specific item")

There are many ways to get a specific item in a list.

#### Get by text[​](#get-by-text "Direct link to Get by text")

Use the [page.getByText()](/docs/api/class-page#page-get-by-text) method to locate an element in a list by its text content and then click on it.

For example, consider the following DOM structure:

http://localhost:3000

*   apple
*   banana
*   orange

    <ul>  <li>apple</li>  <li>banana</li>  <li>orange</li></ul>

Locate an item by its text content and click it.

    await page.getByText('orange').click();

#### Filter by text[​](#filter-by-text-1 "Direct link to Filter by text")

Use the [locator.filter()](/docs/api/class-locator#locator-filter) to locate a specific item in a list.

For example, consider the following DOM structure:

http://localhost:3000

*   apple
*   banana
*   orange

    <ul>  <li>apple</li>  <li>banana</li>  <li>orange</li></ul>

Locate an item by the role of "listitem" and then filter by the text of "orange" and then click it.

    await page    .getByRole('listitem')    .filter({ hasText: 'orange' })    .click();

#### Get by test id[​](#get-by-test-id "Direct link to Get by test id")

Use the [page.getByTestId()](/docs/api/class-page#page-get-by-test-id) method to locate an element in a list. You may need to modify the html and add a test id if you don't already have a test id.

For example, consider the following DOM structure:

http://localhost:3000

*   apple
*   banana
*   orange

    <ul>  <li data-testid='apple'>apple</li>  <li data-testid='banana'>banana</li>  <li data-testid='orange'>orange</li></ul>

Locate an item by its test id of "orange" and then click it.

    await page.getByTestId('orange').click();

#### Get by nth item[​](#get-by-nth-item "Direct link to Get by nth item")

If you have a list of identical elements, and the only way to distinguish between them is the order, you can choose a specific element from a list with [locator.first()](/docs/api/class-locator#locator-first), [locator.last()](/docs/api/class-locator#locator-last) or [locator.nth()](/docs/api/class-locator#locator-nth).

    const banana = await page.getByRole('listitem').nth(1);

However, use this method with caution. Often times, the page might change, and the locator will point to a completely different element from the one you expected. Instead, try to come up with a unique locator that will pass the [strictness criteria](#strictness).

### Chaining filters[​](#chaining-filters "Direct link to Chaining filters")

When you have elements with various similarities, you can use the [locator.filter()](/docs/api/class-locator#locator-filter) method to select the right one. You can also chain multiple filters to narrow down the selection.

For example, consider the following DOM structure:

http://localhost:3000

*   John
    
    Say hello
    
*   Mary
    
    Say hello
    
*   John
    
    Say goodbye
    
*   Mary
    
    Say goodbye
    

    <ul>  <li>    <div>John</div>    <div><button>Say hello</button></div>  </li>  <li>    <div>Mary</div>    <div><button>Say hello</button></div>  </li>  <li>    <div>John</div>    <div><button>Say goodbye</button></div>  </li>  <li>    <div>Mary</div>    <div><button>Say goodbye</button></div>  </li></ul>

To take a screenshot of the row with "Mary" and "Say goodbye":

    const rowLocator = page.getByRole('listitem');await rowLocator    .filter({ hasText: 'Mary' })    .filter({ has: page.getByRole('button', { name: 'Say goodbye' }) })    .screenshot({ path: 'screenshot.png' });

You should now have a "screenshot.png" file in your project's root directory.

### Rare use cases[​](#rare-use-cases "Direct link to Rare use cases")

#### Do something with each element in the list[​](#do-something-with-each-element-in-the-list "Direct link to Do something with each element in the list")

Iterate elements:

    for (const row of await page.getByRole('listitem').all())  console.log(await row.textContent());

Iterate using regular for loop:

    const rows = page.getByRole('listitem');const count = await rows.count();for (let i = 0; i < count; ++i)  console.log(await rows.nth(i).textContent());

#### Evaluate in the page[​](#evaluate-in-the-page "Direct link to Evaluate in the page")

The code inside [locator.evaluateAll()](/docs/api/class-locator#locator-evaluate-all) runs in the page, you can call any DOM apis there.

    const rows = page.getByRole('listitem');const texts = await rows.evaluateAll(    list => list.map(element => element.textContent));

Strictness[​](#strictness "Direct link to Strictness")
------------------------------------------------------

Locators are strict. This means that all operations on locators that imply some target DOM element will throw an exception if more than one element matches. For example, the following call throws if there are several buttons in the DOM:

#### Throws an error if more than one[​](#throws-an-error-if-more-than-one "Direct link to Throws an error if more than one")

    await page.getByRole('button').click();

On the other hand, Playwright understands when you perform a multiple-element operation, so the following call works perfectly fine when the locator resolves to multiple elements.

#### Works fine with multiple elements[​](#works-fine-with-multiple-elements "Direct link to Works fine with multiple elements")

    await page.getByRole('button').count();

You can explicitly opt-out from strictness check by telling Playwright which element to use when multiple elements match, through [locator.first()](/docs/api/class-locator#locator-first), [locator.last()](/docs/api/class-locator#locator-last), and [locator.nth()](/docs/api/class-locator#locator-nth). These methods are **not recommended** because when your page changes, Playwright may click on an element you did not intend. Instead, follow best practices above to create a locator that uniquely identifies the target element.

More Locators[​](#more-locators "Direct link to More Locators")
---------------------------------------------------------------

For less commonly used locators, look at the [other locators](/docs/other-locators) guide.

# Mock APIs

Mock APIs
=========

Introduction[​](#introduction "Direct link to Introduction")
------------------------------------------------------------

Web APIs are usually implemented as HTTP endpoints. Playwright provides APIs to **mock** and **modify** network traffic, both HTTP and HTTPS. Any requests that a page does, including [XHRs](https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest) and [fetch](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API) requests, can be tracked, modified and mocked. With Playwright you can also mock using HAR files that contain multiple network requests made by the page.

Mock API requests[​](#mock-api-requests "Direct link to Mock API requests")
---------------------------------------------------------------------------

The following code will intercept all the calls to `*/**/api/v1/fruits` and will return a custom response instead. No requests to the API will be made. The test goes to the URL that uses the mocked route and asserts that mock data is present on the page.

    test("mocks a fruit and doesn't call api", async ({ page }) => {  // Mock the api call before navigating  await page.route('*/**/api/v1/fruits', async route => {    const json = [{ name: 'Strawberry', id: 21 }];    await route.fulfill({ json });  });  // Go to the page  await page.goto('https://demo.playwright.dev/api-mocking');  // Assert that the Strawberry fruit is visible  await expect(page.getByText('Strawberry')).toBeVisible();});

You can see from the trace of the example test that the API was never called, it was however fulfilled with the mock data. ![api mocking trace](https://github.com/microsoft/playwright/assets/13063165/3dc14cbf-c100-4efc-ac21-d7b52d698b53)

Read more about [advanced networking](/docs/network).

Modify API responses[​](#modify-api-responses "Direct link to Modify API responses")
------------------------------------------------------------------------------------

Sometimes, it is essential to make an API request, but the response needs to be patched to allow for reproducible testing. In that case, instead of mocking the request, one can perform the request and fulfill it with the modified response.

In the example below we intercept the call to the fruit API and add a new fruit called 'Loquat', to the data. We then go to the url and assert that this data is there:

    test('gets the json from api and adds a new fruit', async ({ page }) => {  // Get the response and add to it  await page.route('*/**/api/v1/fruits', async route => {    const response = await route.fetch();    const json = await response.json();    json.push({ name: 'Loquat', id: 100 });    // Fulfill using the original response, while patching the response body    // with the given JSON object.    await route.fulfill({ response, json });  });  // Go to the page  await page.goto('https://demo.playwright.dev/api-mocking');  // Assert that the new fruit is visible  await expect(page.getByText('Loquat', { exact: true })).toBeVisible();});

In the trace of our test we can see that the API was called and the response was modified. ![trace of test showing api being called and fulfilled](https://github.com/microsoft/playwright/assets/13063165/8b8dd82d-1b3e-428e-871b-840581fed439)

By inspecting the response we can see that our new fruit was added to the list. ![trace of test showing the mock response](https://github.com/microsoft/playwright/assets/13063165/03e6c87c-4ecc-47e8-9ca0-30fface25e9d)

Read more about [advanced networking](/docs/network).

Mocking with HAR files[​](#mocking-with-har-files "Direct link to Mocking with HAR files")
------------------------------------------------------------------------------------------

A HAR file is an [HTTP Archive](http://www.softwareishard.com/blog/har-12-spec/) file that contains a record of all the network requests that are made when a page is loaded. It contains information about the request and response headers, cookies, content, timings, and more. You can use HAR files to mock network requests in your tests. You'll need to:

1.  Record a HAR file.
2.  Commit the HAR file alongside the tests.
3.  Route requests using the saved HAR files in the tests.

### Recording a HAR file[​](#recording-a-har-file "Direct link to Recording a HAR file")

To record a HAR file we use [page.routeFromHAR()](/docs/api/class-page#page-route-from-har) or [browserContext.routeFromHAR()](/docs/api/class-browsercontext#browser-context-route-from-har) method. This method takes in the path to the HAR file and an optional object of options. The options object can contain the URL so that only requests with the URL matching the specified glob pattern will be served from the HAR File. If not specified, all requests will be served from the HAR file.

Setting `update` option to true will create or update the HAR file with the actual network information instead of serving the requests from the HAR file. Use it when creating a test to populate the HAR with real data.

Alternatively, you can also record HAR files by using the [recordHar](/docs/api/class-browser#browser-new-context-option-record-har) option in [browser.newContext()](/docs/api/class-browser#browser-new-context) when creating a browser context. This allows you to capture all network traffic for the entire context until the context is closed.

### Modifying a HAR file[​](#modifying-a-har-file "Direct link to Modifying a HAR file")

Once you have recorded a HAR file you can modify it by opening the hashed .txt file inside your 'hars' folder and editing the JSON. This file should be committed to your source control. Anytime you run this test with `update: true` it will update your HAR file with the request from the API.

    [  {    "name": "Playwright",    "id": 100  },  // ... other fruits]

### Replaying from HAR[​](#replaying-from-har "Direct link to Replaying from HAR")

Now that you have the HAR file recorded and modified the mock data, it can be used to serve matching responses in the test. For this, just turn off or simply remove the `update` option. This will run the test against the HAR file instead of hitting the API.

    test('gets the json from HAR and checks the new fruit has been added', async ({ page }) => {  // Replay API requests from HAR.  // Either use a matching response from the HAR,  // or abort the request if nothing matches.  await page.routeFromHAR('./hars/fruit.har', {    url: '*/**/api/v1/fruits',    update: false,  });  // Go to the page  await page.goto('https://demo.playwright.dev/api-mocking');  // Assert that the Playwright fruit is visible  await expect(page.getByText('Playwright', { exact: true })).toBeVisible();});

In the trace of our test we can see that the route was fulfilled from the HAR file and the API was not called. ![trace showing the HAR file being used](https://github.com/microsoft/playwright/assets/13063165/1bd7ab66-ea4f-43c2-a4e5-ca17d4837ff1)

If we inspect the response we can see our new fruit was added to the JSON, which was done by manually updating the hashed `.txt` file inside the `hars` folder. ![trace showing response from HAR file](https://github.com/microsoft/playwright/assets/13063165/db3117fc-7b02-4973-9a51-29e213261a6a)

HAR replay matches URL and HTTP method strictly. For POST requests, it also matches POST payloads strictly. If multiple recordings match a request, the one with the most matching headers is picked. An entry resulting in a redirect will be followed automatically.

Similar to when recording, if given HAR file name ends with `.zip`, it is considered an archive containing the HAR file along with network payloads stored as separate entries. You can also extract this archive, edit payloads or HAR log manually and point to the extracted har file. All the payloads will be resolved relative to the extracted har file on the file system.

#### Recording HAR with CLI[​](#recording-har-with-cli "Direct link to Recording HAR with CLI")

We recommend the `update` option to record HAR file for your test. However, you can also record the HAR with Playwright CLI.

Open the browser with Playwright CLI and pass `--save-har` option to produce a HAR file. Optionally, use `--save-har-glob` to only save requests you are interested in, for example API endpoints. If the har file name ends with `.zip`, artifacts are written as separate files and are all compressed into a single `zip`.

    # Save API requests from example.com as "example.har" archive.npx playwright open --save-har=example.har --save-har-glob="**/api/**" https://example.com

Read more about [advanced networking](/docs/network).

Mock WebSockets[​](#mock-websockets "Direct link to Mock WebSockets")
---------------------------------------------------------------------

The following code will intercept WebSocket connections and mock entire communication over the WebSocket, instead of connecting to the server. This example responds to a `"request"` with a `"response"`.

    await page.routeWebSocket('wss://example.com/ws', ws => {  ws.onMessage(message => {    if (message === 'request')      ws.send('response');  });});

Alternatively, you may want to connect to the actual server, but intercept messages in-between and modify or block them. Here is an example that modifies some of the messages sent by the page to the server, and leaves the rest unmodified.

    await page.routeWebSocket('wss://example.com/ws', ws => {  const server = ws.connectToServer();  ws.onMessage(message => {    if (message === 'request')      server.send('request2');    else      server.send(message);  });});

For more details, see [WebSocketRoute](/docs/api/class-websocketroute "WebSocketRoute").

# Mock browser APIs

Mock browser APIs
=================

Introduction[​](#introduction "Direct link to Introduction")
------------------------------------------------------------

Playwright provides native support for most of the browser features. However, there are some experimental APIs and APIs which are not (yet) fully supported by all browsers. Playwright usually doesn't provide dedicated automation APIs in such cases. You can use mocks to test the behavior of your application in such cases. This guide gives a few examples.

Let's consider a web app that uses [battery API](https://developer.mozilla.org/en-US/docs/Web/API/Navigator/getBattery) to show your device's battery status. We'll mock the battery API and check that the page correctly displays the battery status.

Creating mocks[​](#creating-mocks "Direct link to Creating mocks")
------------------------------------------------------------------

Since the page may be calling the API very early while loading it's important to setup all the mocks before the page started loading. The easiest way to achieve that is to call [page.addInitScript()](/docs/api/class-page#page-add-init-script):

    await page.addInitScript(() => {  const mockBattery = {    level: 0.75,    charging: true,    chargingTime: 1800,    dischargingTime: Infinity,    addEventListener: () => { }  };  // Override the method to always return mock battery info.  window.navigator.getBattery = async () => mockBattery;});

Once this is done you can navigate the page and check its UI state:

    // Configure mock API before each test.test.beforeEach(async ({ page }) => {  await page.addInitScript(() => {    const mockBattery = {      level: 0.90,      charging: true,      chargingTime: 1800, // seconds      dischargingTime: Infinity,      addEventListener: () => { }    };    // Override the method to always return mock battery info.    window.navigator.getBattery = async () => mockBattery;  });});test('show battery status', async ({ page }) => {  await page.goto('/');  await expect(page.locator('.battery-percentage')).toHaveText('90%');  await expect(page.locator('.battery-status')).toHaveText('Adapter');  await expect(page.locator('.battery-fully')).toHaveText('00:30');});

Mocking read-only APIs[​](#mocking-read-only-apis "Direct link to Mocking read-only APIs")
------------------------------------------------------------------------------------------

Some APIs are read-only so you won't be able to assign to a navigator property. For example,

    // Following line will have no effect.navigator.cookieEnabled = true;

However, if the property is [configurable](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/defineProperty#configurable), you can still override it using the plain JavaScript:

    await page.addInitScript(() => {  Object.defineProperty(Object.getPrototypeOf(navigator), 'cookieEnabled', { value: false });});

Verifying API calls[​](#verifying-api-calls "Direct link to Verifying API calls")
---------------------------------------------------------------------------------

Sometimes it is useful to check if the page made all expected APIs calls. You can record all API method invocations and then compare them with golden result. [page.exposeFunction()](/docs/api/class-page#page-expose-function) may come in handy for passing message from the page back to the test code:

    test('log battery calls', async ({ page }) => {  const log = [];  // Expose function for pushing messages to the Node.js script.  await page.exposeFunction('logCall', msg => log.push(msg));  await page.addInitScript(() => {    const mockBattery = {      level: 0.75,      charging: true,      chargingTime: 1800,      dischargingTime: Infinity,      // Log addEventListener calls.      addEventListener: (name, cb) => logCall(`addEventListener:${name}`)    };    // Override the method to always return mock battery info.    window.navigator.getBattery = async () => {      logCall('getBattery');      return mockBattery;    };  });  await page.goto('/');  await expect(page.locator('.battery-percentage')).toHaveText('75%');  // Compare actual calls with golden.  expect(log).toEqual([    'getBattery',    'addEventListener:chargingchange',    'addEventListener:levelchange'  ]);});

Updating mock[​](#updating-mock "Direct link to Updating mock")
---------------------------------------------------------------

To test that the app correctly reflects battery status updates it's important to make sure that the mock battery object fires same events that the browser implementation would. The following test demonstrates how to achieve that:

    test('update battery status (no golden)', async ({ page }) => {  await page.addInitScript(() => {    // Mock class that will notify corresponding listeners when battery status changes.    class BatteryMock {      level = 0.10;      charging = false;      chargingTime = 1800;      dischargingTime = Infinity;      _chargingListeners = [];      _levelListeners = [];      addEventListener(eventName, listener) {        if (eventName === 'chargingchange')          this._chargingListeners.push(listener);        if (eventName === 'levelchange')          this._levelListeners.push(listener);      }      // Will be called by the test.      _setLevel(value) {        this.level = value;        this._levelListeners.forEach(cb => cb());      }      _setCharging(value) {        this.charging = value;        this._chargingListeners.forEach(cb => cb());      }    }    const mockBattery = new BatteryMock();    // Override the method to always return mock battery info.    window.navigator.getBattery = async () => mockBattery;    // Save the mock object on window for easier access.    window.mockBattery = mockBattery;  });  await page.goto('/');  await expect(page.locator('.battery-percentage')).toHaveText('10%');  // Update level to 27.5%  await page.evaluate(() => window.mockBattery._setLevel(0.275));  await expect(page.locator('.battery-percentage')).toHaveText('27.5%');  await expect(page.locator('.battery-status')).toHaveText('Battery');  // Emulate connected adapter  await page.evaluate(() => window.mockBattery._setCharging(true));  await expect(page.locator('.battery-status')).toHaveText('Adapter');  await expect(page.locator('.battery-fully')).toHaveText('00:30');});

# Navigations

Navigations
===========

Introduction[​](#introduction "Direct link to Introduction")
------------------------------------------------------------

Playwright can navigate to URLs and handle navigations caused by the page interactions.

Basic navigation[​](#basic-navigation "Direct link to Basic navigation")
------------------------------------------------------------------------

Simplest form of a navigation is opening a URL:

    // Navigate the pageawait page.goto('https://example.com');

The code above loads the page and waits for the web page to fire the [load](https://developer.mozilla.org/en-US/docs/Web/API/Window/load_event) event. The load event is fired when the whole page has loaded, including all dependent resources such as stylesheets, scripts, iframes, and images.

note

If the page does a client-side redirect before `load`, [page.goto()](/docs/api/class-page#page-goto) will wait for the redirected page to fire the `load` event.

When is the page loaded?[​](#when-is-the-page-loaded "Direct link to When is the page loaded?")
-----------------------------------------------------------------------------------------------

Modern pages perform numerous activities after the `load` event was fired. They fetch data lazily, populate UI, load expensive resources, scripts and styles after the `load` event was fired. There is no way to tell that the page is `loaded`, it depends on the page, framework, etc. So when can you start interacting with it?

In Playwright you can interact with the page at any moment. It will automatically wait for the target elements to become [actionable](/docs/actionability).

    // Navigate and click element// Click will auto-wait for the elementawait page.goto('https://example.com');await page.getByText('Example Domain').click();

For the scenario above, Playwright will wait for the text to become visible, will wait for the rest of the actionability checks to pass for that element, and will click it.

Playwright operates as a very fast user - the moment it sees the button, it clicks it. In the general case, you don't need to worry about whether all the resources loaded, etc.

Hydration[​](#hydration "Direct link to Hydration")
---------------------------------------------------

At some point in time, you'll stumble upon a use case where Playwright performs an action, but nothing seemingly happens. Or you enter some text into the input field and it will disappear. The most probable reason behind that is a poor page [hydration](https://en.wikipedia.org/wiki/Hydration_\(web_development\)).

When page is hydrated, first, a static version of the page is sent to the browser. Then the dynamic part is sent and the page becomes "live". As a very fast user, Playwright will start interacting with the page the moment it sees it. And if the button on a page is enabled, but the listeners have not yet been added, Playwright will do its job, but the click won't have any effect.

A simple way to verify if your page suffers from a poor hydration is to open Chrome DevTools, pick "Slow 3G" network emulation in the Network panel and reload the page. Once you see the element of interest, interact with it. You'll see that the button clicks will be ignored and the entered text will be reset by the subsequent page load code. The right fix for this issue is to make sure that all the interactive controls are disabled until after the hydration, when the page is fully functional.

Waiting for navigation[​](#waiting-for-navigation "Direct link to Waiting for navigation")
------------------------------------------------------------------------------------------

Clicking an element could trigger multiple navigations. In these cases, it is recommended to explicitly [page.waitForURL()](/docs/api/class-page#page-wait-for-url) to a specific url.

    await page.getByText('Click me').click();await page.waitForURL('**/login');

Navigation events[​](#navigation-events "Direct link to Navigation events")
---------------------------------------------------------------------------

Playwright splits the process of showing a new document in a page into **navigation** and **loading**.

**Navigation starts** by changing the page URL or by interacting with the page (e.g., clicking a link). The navigation intent may be canceled, for example, on hitting an unresolved DNS address or transformed into a file download.

**Navigation is committed** when the response headers have been parsed and session history is updated. Only after the navigation succeeds (is committed), the page starts **loading** the document.

**Loading** covers getting the remaining response body over the network, parsing, executing the scripts and firing load events:

*   [page.url()](/docs/api/class-page#page-url) is set to the new url
*   document content is loaded over network and parsed
*   [page.on('domcontentloaded')](/docs/api/class-page#page-event-dom-content-loaded) event is fired
*   page executes some scripts and loads resources like stylesheets and images
*   [page.on('load')](/docs/api/class-page#page-event-load) event is fired
*   page executes dynamically loaded scripts

# Network

Network
=======

Introduction[​](#introduction "Direct link to Introduction")
------------------------------------------------------------

Playwright provides APIs to **monitor** and **modify** browser network traffic, both HTTP and HTTPS. Any requests that a page does, including [XHRs](https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest) and [fetch](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API) requests, can be tracked, modified and handled.

Mock APIs[​](#mock-apis "Direct link to Mock APIs")
---------------------------------------------------

Check out our [API mocking guide](/docs/mock) to learn more on how to

*   mock API requests and never hit the API
*   perform the API request and modify the response
*   use HAR files to mock network requests.

Network mocking[​](#network-mocking "Direct link to Network mocking")
---------------------------------------------------------------------

You don't have to configure anything to mock network requests. Just define a custom [Route](/docs/api/class-route "Route") that mocks network for a browser context.

example.spec.ts

    import { test, expect } from '@playwright/test';test.beforeEach(async ({ context }) => {  // Block any css requests for each test in this file.  await context.route(/.css$/, route => route.abort());});test('loads page without css', async ({ page }) => {  await page.goto('https://playwright.dev');  // ... test goes here});

Alternatively, you can use [page.route()](/docs/api/class-page#page-route) to mock network in a single page.

example.spec.ts

    import { test, expect } from '@playwright/test';test('loads page without images', async ({ page }) => {  // Block png and jpeg images.  await page.route(/(png|jpeg)$/, route => route.abort());  await page.goto('https://playwright.dev');  // ... test goes here});

HTTP Authentication[​](#http-authentication "Direct link to HTTP Authentication")
---------------------------------------------------------------------------------

Perform HTTP Authentication.

*   Test
*   Library

playwright.config.ts

    import { defineConfig } from '@playwright/test';export default defineConfig({  use: {    httpCredentials: {      username: 'bill',      password: 'pa55w0rd',    }  }});

    const context = await browser.newContext({  httpCredentials: {    username: 'bill',    password: 'pa55w0rd',  },});const page = await context.newPage();await page.goto('https://example.com');

HTTP Proxy[​](#http-proxy "Direct link to HTTP Proxy")
------------------------------------------------------

You can configure pages to load over the HTTP(S) proxy or SOCKSv5. Proxy can be either set globally for the entire browser, or for each browser context individually.

You can optionally specify username and password for HTTP(S) proxy, you can also specify hosts to bypass the [proxy](/docs/api/class-browser#browser-new-context-option-proxy) for.

Here is an example of a global proxy:

*   Test
*   Library

playwright.config.ts

    import { defineConfig } from '@playwright/test';export default defineConfig({  use: {    proxy: {      server: 'http://myproxy.com:3128',      username: 'usr',      password: 'pwd'    }  }});

    const browser = await chromium.launch({  proxy: {    server: 'http://myproxy.com:3128',    username: 'usr',    password: 'pwd'  }});

Its also possible to specify it per context:

*   Test
*   Library

example.spec.ts

    import { test, expect } from '@playwright/test';test('should use custom proxy on a new context', async ({ browser }) => {  const context = await browser.newContext({    proxy: {      server: 'http://myproxy.com:3128',    }  });  const page = await context.newPage();  await context.close();});

    const browser = await chromium.launch();const context = await browser.newContext({  proxy: { server: 'http://myproxy.com:3128' }});

Network events[​](#network-events "Direct link to Network events")
------------------------------------------------------------------

You can monitor all the [Request](/docs/api/class-request "Request")s and [Response](/docs/api/class-response "Response")s:

    // Subscribe to 'request' and 'response' events.page.on('request', request => console.log('>>', request.method(), request.url()));page.on('response', response => console.log('<<', response.status(), response.url()));await page.goto('https://example.com');

Or wait for a network response after the button click with [page.waitForResponse()](/docs/api/class-page#page-wait-for-response):

    // Use a glob URL pattern. Note no await.const responsePromise = page.waitForResponse('**/api/fetch_data');await page.getByText('Update').click();const response = await responsePromise;

#### Variations[​](#variations "Direct link to Variations")

Wait for [Response](/docs/api/class-response "Response")s with [page.waitForResponse()](/docs/api/class-page#page-wait-for-response)

    // Use a RegExp. Note no await.const responsePromise = page.waitForResponse(/\.jpeg$/);await page.getByText('Update').click();const response = await responsePromise;// Use a predicate taking a Response object. Note no await.const responsePromise = page.waitForResponse(response => response.url().includes(token));await page.getByText('Update').click();const response = await responsePromise;

Handle requests[​](#handle-requests "Direct link to Handle requests")
---------------------------------------------------------------------

    await page.route('**/api/fetch_data', route => route.fulfill({  status: 200,  body: testData,}));await page.goto('https://example.com');

You can mock API endpoints via handling the network requests in your Playwright script.

#### Variations[​](#variations-1 "Direct link to Variations")

Set up route on the entire browser context with [browserContext.route()](/docs/api/class-browsercontext#browser-context-route) or page with [page.route()](/docs/api/class-page#page-route). It will apply to popup windows and opened links.

    await browserContext.route('**/api/login', route => route.fulfill({  status: 200,  body: 'accept',}));await page.goto('https://example.com');

Modify requests[​](#modify-requests "Direct link to Modify requests")
---------------------------------------------------------------------

    // Delete headerawait page.route('**/*', async route => {  const headers = route.request().headers();  delete headers['X-Secret'];  await route.continue({ headers });});// Continue requests as POST.await page.route('**/*', route => route.continue({ method: 'POST' }));

You can continue requests with modifications. Example above removes an HTTP header from the outgoing requests.

Abort requests[​](#abort-requests "Direct link to Abort requests")
------------------------------------------------------------------

You can abort requests using [page.route()](/docs/api/class-page#page-route) and [route.abort()](/docs/api/class-route#route-abort).

    await page.route('**/*.{png,jpg,jpeg}', route => route.abort());// Abort based on the request typeawait page.route('**/*', route => {  return route.request().resourceType() === 'image' ? route.abort() : route.continue();});

Modify responses[​](#modify-responses "Direct link to Modify responses")
------------------------------------------------------------------------

To modify a response use [APIRequestContext](/docs/api/class-apirequestcontext "APIRequestContext") to get the original response and then pass the response to [route.fulfill()](/docs/api/class-route#route-fulfill). You can override individual fields on the response via options:

    await page.route('**/title.html', async route => {  // Fetch original response.  const response = await route.fetch();  // Add a prefix to the title.  let body = await response.text();  body = body.replace('<title>', '<title>My prefix:');  await route.fulfill({    // Pass all fields from the response.    response,    // Override response body.    body,    // Force content type to be html.    headers: {      ...response.headers(),      'content-type': 'text/html'    }  });});

Glob URL patterns[​](#glob-url-patterns "Direct link to Glob URL patterns")
---------------------------------------------------------------------------

Playwright uses simplified glob patterns for URL matching in network interception methods like [page.route()](/docs/api/class-page#page-route) or [page.waitForResponse()](/docs/api/class-page#page-wait-for-response). These patterns support basic wildcards:

1.  Asterisks:
    *   A single `*` matches any characters except `/`
    *   A double `**` matches any characters including `/`
2.  Question mark `?` matches only question mark `?`. If you want to match any character, use `*` instead.
3.  Curly braces `{}` can be used to match a list of options separated by commas `,`
4.  Backslash `\` can be used to escape any of special characters (note to escape backslash itself as `\\`)

Examples:

*   `https://example.com/*.js` matches `https://example.com/file.js` but not `https://example.com/path/file.js`
*   `https://example.com/?page=1` matches `https://example.com/?page=1` but not `https://example.com`
*   `**/*.js` matches both `https://example.com/file.js` and `https://example.com/path/file.js`
*   `**/*.{png,jpg,jpeg}` matches all image requests

Important notes:

*   The glob pattern must match the entire URL, not just a part of it.
*   When using globs for URL matching, consider the full URL structure, including the protocol and path separators.
*   For more complex matching requirements, consider using [RegExp](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp "RegExp") instead of glob patterns.

WebSockets[​](#websockets "Direct link to WebSockets")
------------------------------------------------------

Playwright supports [WebSockets](https://developer.mozilla.org/en-US/docs/Web/API/WebSockets_API) inspection, mocking and modifying out of the box. See our [API mocking guide](/docs/mock#mock-websockets) to learn how to mock WebSockets.

Every time a WebSocket is created, the [page.on('websocket')](/docs/api/class-page#page-event-web-socket) event is fired. This event contains the [WebSocket](/docs/api/class-websocket "WebSocket") instance for further web socket frames inspection:

    page.on('websocket', ws => {  console.log(`WebSocket opened: ${ws.url()}>`);  ws.on('framesent', event => console.log(event.payload));  ws.on('framereceived', event => console.log(event.payload));  ws.on('close', () => console.log('WebSocket closed'));});

Missing Network Events and Service Workers[​](#missing-network-events-and-service-workers "Direct link to Missing Network Events and Service Workers")
------------------------------------------------------------------------------------------------------------------------------------------------------

Playwright's built-in [browserContext.route()](/docs/api/class-browsercontext#browser-context-route) and [page.route()](/docs/api/class-page#page-route) allow your tests to natively route requests and perform mocking and interception.

If you're using Playwright's native [browserContext.route()](/docs/api/class-browsercontext#browser-context-route) and [page.route()](/docs/api/class-page#page-route), and it appears network events are missing, disable Service Workers by setting [serviceWorkers](/docs/api/class-browser#browser-new-context-option-service-workers) to `'block'`.

It might be that you are using a mock tool such as Mock Service Worker (MSW). While this tool works out of the box for mocking responses, it adds its own Service Worker that takes over the network requests, hence making them invisible to [browserContext.route()](/docs/api/class-browsercontext#browser-context-route) and [page.route()](/docs/api/class-page#page-route). If you are interested in both network testing and mocking, consider using built-in [browserContext.route()](/docs/api/class-browsercontext#browser-context-route) and [page.route()](/docs/api/class-page#page-route) for [response mocking](#handle-requests).

If you're interested in not solely using Service Workers for testing and network mocking, but in routing and listening for requests made by Service Workers themselves, please see [this guide](/docs/service-workers).

# Other locators

Other locators
==============

Introduction[​](#introduction "Direct link to Introduction")
------------------------------------------------------------

note

Check out the main [locators guide](/docs/locators) for most common and recommended locators.

In addition to recommended locators like [page.getByRole()](/docs/api/class-page#page-get-by-role) and [page.getByText()](/docs/api/class-page#page-get-by-text), Playwright supports a variety of other locators described in this guide.

CSS locator[​](#css-locator "Direct link to CSS locator")
---------------------------------------------------------

note

We recommend prioritizing [user-visible locators](/docs/locators#quick-guide) like text or accessible role instead of using CSS that is tied to the implementation and could break when the page changes.

Playwright can locate an element by CSS selector.

    await page.locator('css=button').click();

Playwright augments standard CSS selectors in two ways:

*   CSS selectors pierce open shadow DOM.
*   Playwright adds custom pseudo-classes like `:visible`, `:has-text()`, `:has()`, `:is()`, `:nth-match()` and more.

### CSS: matching by text[​](#css-matching-by-text "Direct link to CSS: matching by text")

Playwright include a number of CSS pseudo-classes to match elements by their text content.

*   `article:has-text("Playwright")` - the `:has-text()` matches any element containing specified text somewhere inside, possibly in a child or a descendant element. Matching is case-insensitive, trims whitespace and searches for a substring.
    
    For example, `article:has-text("Playwright")` matches `<article><div>Playwright</div></article>`.
    
    Note that `:has-text()` should be used together with other CSS specifiers, otherwise it will match all the elements containing specified text, including the `<body>`.
    
        // Wrong, will match many elements including <body>await page.locator(':has-text("Playwright")').click();// Correct, only matches the <article> elementawait page.locator('article:has-text("Playwright")').click();
    
*   `#nav-bar :text("Home")` - the `:text()` pseudo-class matches the smallest element containing specified text. Matching is case-insensitive, trims whitespace and searches for a substring.
    
    For example, this will find an element with text "Home" somewhere inside the `#nav-bar` element:
    
        await page.locator('#nav-bar :text("Home")').click();
    
*   `#nav-bar :text-is("Home")` - the `:text-is()` pseudo-class matches the smallest element with exact text. Exact matching is case-sensitive, trims whitespace and searches for the full string.
    
    For example, `:text-is("Log")` does not match `<button>Log in</button>` because `<button>` contains a single text node `"Log in"` that is not equal to `"Log"`. However, `:text-is("Log")` matches `<button> Log <span>in</span></button>`, because `<button>` contains a text node `" Log "`.
    
    Similarly, `:text-is("Download")` will not match `<button>download</button>` because it is case-sensitive.
    

*   `#nav-bar :text-matches("reg?ex", "i")` - the `:text-matches()` pseudo-class matches the smallest element with text content matching the [JavaScript-like regex](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp).
    
    For example, `:text-matches("Log\s*in", "i")` matches `<button>Login</button>` and `<button>log IN</button>`.
    

note

Text matching always normalizes whitespace. For example, it turns multiple spaces into one, turns line breaks into spaces and ignores leading and trailing whitespace.

note

Input elements of the type `button` and `submit` are matched by their `value` instead of text content. For example, `:text("Log in")` matches `<input type=button value="Log in">`.

### CSS: matching only visible elements[​](#css-matching-only-visible-elements "Direct link to CSS: matching only visible elements")

Playwright supports the `:visible` pseudo class in CSS selectors. For example, `css=button` matches all the buttons on the page, while `css=button:visible` only matches visible buttons. This is useful to distinguish elements that are very similar but differ in visibility.

Consider a page with two buttons, first invisible and second visible.

    <button style='display: none'>Invisible</button><button>Visible</button>

*   This will find both buttons and throw a [strictness](/docs/locators#strictness) violation error:
    
        await page.locator('button').click();
    
*   This will only find a second button, because it is visible, and then click it.
    
        await page.locator('button:visible').click();
    

### CSS: elements that contain other elements[​](#css-elements-that-contain-other-elements "Direct link to CSS: elements that contain other elements")

The `:has()` pseudo-class is an [experimental CSS pseudo-class](https://developer.mozilla.org/en-US/docs/Web/CSS/:has). It returns an element if any of the selectors passed as parameters relative to the `:scope` of the given element match at least one element.

Following snippet returns text content of an `<article>` element that has a `<div class=promo>` inside.

    await page.locator('article:has(div.promo)').textContent();

### CSS: elements matching one of the conditions[​](#css-elements-matching-one-of-the-conditions "Direct link to CSS: elements matching one of the conditions")

Comma-separated list of CSS selectors will match all elements that can be selected by one of the selectors in that list.

    // Clicks a <button> that has either a "Log in" or "Sign in" text.await page.locator('button:has-text("Log in"), button:has-text("Sign in")').click();

The `:is()` pseudo-class is an [experimental CSS pseudo-class](https://developer.mozilla.org/en-US/docs/Web/CSS/:is) that may be useful for specifying a list of extra conditions on an element.

### CSS: matching elements based on layout[​](#css-matching-elements-based-on-layout "Direct link to CSS: matching elements based on layout")

warning

Layout selectors are deprecated and may be removed in the future. Matching based on layout may produce unexpected results. For example, a different element could be matched when layout changes by one pixel.

We recommend prioritizing [user-visible locators](/docs/locators#quick-guide) instead.

Sometimes, it is hard to come up with a good selector to the target element when it lacks distinctive features. In this case, using Playwright layout CSS pseudo-classes could help. These can be combined with regular CSS to pinpoint one of the multiple choices.

For example, `input:right-of(:text("Password"))` matches an input field that is to the right of text "Password" - useful when the page has multiple inputs that are hard to distinguish between each other.

Note that layout pseudo-classes are useful in addition to something else, like `input`. If you use a layout pseudo-class alone, like `:right-of(:text("Password"))`, most likely you'll get not the input you are looking for, but some empty element in between the text and the target input.

Layout pseudo-classes use [bounding client rect](https://developer.mozilla.org/en-US/docs/Web/API/Element/getBoundingClientRect) to compute distance and relative position of the elements.

*   `:right-of(div > button)` - Matches elements that are to the right of any element matching the inner selector, at any vertical position.
*   `:left-of(div > button)` - Matches elements that are to the left of any element matching the inner selector, at any vertical position.
*   `:above(div > button)` - Matches elements that are above any of the elements matching the inner selector, at any horizontal position.
*   `:below(div > button)` - Matches elements that are below any of the elements matching the inner selector, at any horizontal position.
*   `:near(div > button)` - Matches elements that are near (within 50 CSS pixels) any of the elements matching the inner selector.

Note that resulting matches are sorted by their distance to the anchor element, so you can use [locator.first()](/docs/api/class-locator#locator-first) to pick the closest one. This is only useful if you have something like a list of similar elements, where the closest is obviously the right one. However, using [locator.first()](/docs/api/class-locator#locator-first) in other cases most likely won't work as expected - it will not target the element you are searching for, but some other element that happens to be the closest like a random empty `<div>`, or an element that is scrolled out and is not currently visible.

    // Fill an input to the right of "Username".await page.locator('input:right-of(:text("Username"))').fill('value');// Click a button near the promo card.await page.locator('button:near(.promo-card)').click();// Click the radio input in the list closest to the "Label 3".await page.locator('[type=radio]:left-of(:text("Label 3"))').first().click();

All layout pseudo-classes support optional maximum pixel distance as the last argument. For example `button:near(:text("Username"), 120)` matches a button that is at most 120 CSS pixels away from the element with the text "Username".

### CSS: pick n-th match from the query result[​](#css-pick-n-th-match-from-the-query-result "Direct link to CSS: pick n-th match from the query result")

note

It is usually possible to distinguish elements by some attribute or text content, which is more resilient to page changes.

Sometimes page contains a number of similar elements, and it is hard to select a particular one. For example:

    <section> <button>Buy</button> </section><article><div> <button>Buy</button> </div></article><div><div> <button>Buy</button> </div></div>

In this case, `:nth-match(:text("Buy"), 3)` will select the third button from the snippet above. Note that index is one-based.

    // Click the third "Buy" buttonawait page.locator(':nth-match(:text("Buy"), 3)').click();

`:nth-match()` is also useful to wait until a specified number of elements appear, using [locator.waitFor()](/docs/api/class-locator#locator-wait-for).

    // Wait until all three buttons are visibleawait page.locator(':nth-match(:text("Buy"), 3)').waitFor();

note

Unlike [`:nth-child()`](https://developer.mozilla.org/en-US/docs/Web/CSS/:nth-child), elements do not have to be siblings, they could be anywhere on the page. In the snippet above, all three buttons match `:text("Buy")` selector, and `:nth-match()` selects the third button.

N-th element locator[​](#n-th-element-locator "Direct link to N-th element locator")
------------------------------------------------------------------------------------

You can narrow down query to the n-th match using the `nth=` locator passing a zero-based index.

    // Click first buttonawait page.locator('button').locator('nth=0').click();// Click last buttonawait page.locator('button').locator('nth=-1').click();

Parent element locator[​](#parent-element-locator "Direct link to Parent element locator")
------------------------------------------------------------------------------------------

When you need to target a parent element of some other element, most of the time you should [locator.filter()](/docs/api/class-locator#locator-filter) by the child locator. For example, consider the following DOM structure:

    <li><label>Hello</label></li><li><label>World</label></li>

If you'd like to target the parent `<li>` of a label with text `"Hello"`, using [locator.filter()](/docs/api/class-locator#locator-filter) works best:

    const child = page.getByText('Hello');const parent = page.getByRole('listitem').filter({ has: child });

Alternatively, if you cannot find a suitable locator for the parent element, use `xpath=..`. Note that this method is not as reliable, because any changes to the DOM structure will break your tests. Prefer [locator.filter()](/docs/api/class-locator#locator-filter) when possible.

    const parent = page.getByText('Hello').locator('xpath=..');

React locator[​](#react-locator "Direct link to React locator")
---------------------------------------------------------------

note

React locator is experimental and prefixed with `_`. The functionality might change in future.

React locator allows finding elements by their component name and property values. The syntax is very similar to [CSS attribute selectors](https://developer.mozilla.org/en-US/docs/Web/CSS/Attribute_selectors) and supports all CSS attribute selector operators.

In React locator, component names are transcribed with **CamelCase**.

    await page.locator('_react=BookItem').click();

More examples:

*   match by **component**: `_react=BookItem`
*   match by component and **exact property value**, case-sensitive: `_react=BookItem[author = "Steven King"]`
*   match by property value only, **case-insensitive**: `_react=[author = "steven king" i]`
*   match by component and **truthy property value**: `_react=MyButton[enabled]`
*   match by component and **boolean value**: `_react=MyButton[enabled = false]`
*   match by property **value substring**: `_react=[author *= "King"]`
*   match by component and **multiple properties**: `_react=BookItem[author *= "king" i][year = 1990]`
*   match by **nested** property value: `_react=[some.nested.value = 12]`
*   match by component and property value **prefix**: `_react=BookItem[author ^= "Steven"]`
*   match by component and property value **suffix**: `_react=BookItem[author $= "Steven"]`
*   match by component and **key**: `_react=BookItem[key = '2']`
*   match by property value **regex**: `_react=[author = /Steven(\\s+King)?/i]`

To find React element names in a tree use [React DevTools](https://chrome.google.com/webstore/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi).

note

React locator supports React 15 and above.

note

React locator, as well as [React DevTools](https://chrome.google.com/webstore/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi), only work against **unminified** application builds.

Vue locator[​](#vue-locator "Direct link to Vue locator")
---------------------------------------------------------

note

Vue locator is experimental and prefixed with `_`. The functionality might change in future.

Vue locator allows finding elements by their component name and property values. The syntax is very similar to [CSS attribute selectors](https://developer.mozilla.org/en-US/docs/Web/CSS/Attribute_selectors) and supports all CSS attribute selector operators.

In Vue locator, component names are transcribed with **kebab-case**.

    await page.locator('_vue=book-item').click();

More examples:

*   match by **component**: `_vue=book-item`
*   match by component and **exact property value**, case-sensitive: `_vue=book-item[author = "Steven King"]`
*   match by property value only, **case-insensitive**: `_vue=[author = "steven king" i]`
*   match by component and **truthy property value**: `_vue=my-button[enabled]`
*   match by component and **boolean value**: `_vue=my-button[enabled = false]`
*   match by property **value substring**: `_vue=[author *= "King"]`
*   match by component and **multiple properties**: `_vue=book-item[author *= "king" i][year = 1990]`
*   match by **nested** property value: `_vue=[some.nested.value = 12]`
*   match by component and property value **prefix**: `_vue=book-item[author ^= "Steven"]`
*   match by component and property value **suffix**: `_vue=book-item[author $= "Steven"]`
*   match by property value **regex**: `_vue=[author = /Steven(\\s+King)?/i]`

To find Vue element names in a tree use [Vue DevTools](https://chrome.google.com/webstore/detail/vuejs-devtools/nhdogjmejiglipccpnnnanhbledajbpd?hl=en).

note

Vue locator supports Vue2 and above.

note

Vue locator, as well as [Vue DevTools](https://chrome.google.com/webstore/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi), only work against **unminified** application builds.

XPath locator[​](#xpath-locator "Direct link to XPath locator")
---------------------------------------------------------------

warning

We recommend prioritizing [user-visible locators](/docs/locators#quick-guide) like text or accessible role instead of using XPath that is tied to the implementation and easily break when the page changes.

XPath locators are equivalent to calling [`Document.evaluate`](https://developer.mozilla.org/en/docs/Web/API/Document/evaluate).

    await page.locator('xpath=//button').click();

note

Any selector string starting with `//` or `..` are assumed to be an xpath selector. For example, Playwright converts `'//html/body'` to `'xpath=//html/body'`.

note

XPath does not pierce shadow roots.

### XPath union[​](#xpath-union "Direct link to XPath union")

Pipe operator (`|`) can be used to specify multiple selectors in XPath. It will match all elements that can be selected by one of the selectors in that list.

    // Waits for either confirmation dialog or load spinner.await page.locator(    `//span[contains(@class, 'spinner__loading')]|//div[@id='confirmation']`).waitFor();

Label to form control retargeting[​](#label-to-form-control-retargeting "Direct link to Label to form control retargeting")
---------------------------------------------------------------------------------------------------------------------------

warning

We recommend [locating by label text](/docs/locators#locate-by-label) instead of relying to label-to-control retargeting.

Targeted input actions in Playwright automatically distinguish between labels and controls, so you can target the label to perform an action on the associated control.

For example, consider the following DOM structure: `<label for="password">Password:</label><input id="password" type="password">`. You can target the label by its "Password" text using [page.getByText()](/docs/api/class-page#page-get-by-text). However, the following actions will be performed on the input instead of the label:

*   [locator.click()](/docs/api/class-locator#locator-click) will click the label and automatically focus the input field;
*   [locator.fill()](/docs/api/class-locator#locator-fill) will fill the input field;
*   [locator.inputValue()](/docs/api/class-locator#locator-input-value) will return the value of the input field;
*   [locator.selectText()](/docs/api/class-locator#locator-select-text) will select text in the input field;
*   [locator.setInputFiles()](/docs/api/class-locator#locator-set-input-files) will set files for the input field with `type=file`;
*   [locator.selectOption()](/docs/api/class-locator#locator-select-option) will select an option from the select box.

    // Fill the input by targeting the label.await page.getByText('Password').fill('secret');

However, other methods will target the label itself, for example [expect(locator).toHaveText()](/docs/api/class-locatorassertions#locator-assertions-to-have-text) will assert the text content of the label, not the input field.

    // Fill the input by targeting the label.await expect(page.locator('label')).toHaveText('Password');

Legacy text locator[​](#legacy-text-locator "Direct link to Legacy text locator")
---------------------------------------------------------------------------------

warning

We recommend the modern [text locator](/docs/locators#get-by-text) instead.

Legacy text locator matches elements that contain passed text.

    await page.locator('text=Log in').click();

Legacy text locator has a few variations:

*   `text=Log in` - default matching is case-insensitive, trims whitespace and searches for a substring. For example, `text=Log` matches `<button>Log in</button>`.
    
        await page.locator('text=Log in').click();
    
*   `text="Log in"` - text body can be escaped with single or double quotes to search for a text node with exact content after trimming whitespace.
    
    For example, `text="Log"` does not match `<button>Log in</button>` because `<button>` contains a single text node `"Log in"` that is not equal to `"Log"`. However, `text="Log"` matches `<button> Log <span>in</span></button>`, because `<button>` contains a text node `" Log "`. This exact mode implies case-sensitive matching, so `text="Download"` will not match `<button>download</button>`.
    
    Quoted body follows the usual escaping rules, e.g. use `\"` to escape double quote in a double-quoted string: `text="foo\"bar"`.
    
        await page.locator('text="Log in"').click();
    
*   `/Log\s*in/i` - body can be a [JavaScript-like regex](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp) wrapped in `/` symbols. For example, `text=/Log\s*in/i` matches `<button>Login</button>` and `<button>log IN</button>`.
    
        await page.locator('text=/Log\\s*in/i').click();
    

note

String selectors starting and ending with a quote (either `"` or `'`) are assumed to be a legacy text locators. For example, `"Log in"` is converted to `text="Log in"` internally.

note

Matching always normalizes whitespace. For example, it turns multiple spaces into one, turns line breaks into spaces and ignores leading and trailing whitespace.

note

Input elements of the type `button` and `submit` are matched by their `value` instead of text content. For example, `text=Log in` matches `<input type=button value="Log in">`.

id, data-testid, data-test-id, data-test selectors[​](#id-data-testid-data-test-id-data-test-selectors "Direct link to id, data-testid, data-test-id, data-test selectors")
---------------------------------------------------------------------------------------------------------------------------------------------------------------------------

warning

We recommend [locating by test id](/docs/locators#locate-by-test-id) instead.

Playwright supports shorthand for selecting elements using certain attributes. Currently, only the following attributes are supported:

*   `id`
*   `data-testid`
*   `data-test-id`
*   `data-test`

    // Fill an input with the id "username"await page.locator('id=username').fill('value');// Click an element with data-test-id "submit"await page.locator('data-test-id=submit').click();

note

Attribute selectors are not CSS selectors, so anything CSS-specific like `:enabled` is not supported. For more features, use a proper [css](#css-locator) selector, e.g. `css=[data-test="login"]:enabled`.

Chaining selectors[​](#chaining-selectors "Direct link to Chaining selectors")
------------------------------------------------------------------------------

warning

We recommend [chaining locators](/docs/locators#matching-inside-a-locator) instead.

Selectors defined as `engine=body` or in short-form can be combined with the `>>` token, e.g. `selector1 >> selector2 >> selectors3`. When selectors are chained, the next one is queried relative to the previous one's result.

For example,

    css=article >> css=.bar > .baz >> css=span[attr=value]

is equivalent to

    document    .querySelector('article')    .querySelector('.bar > .baz')    .querySelector('span[attr=value]');

If a selector needs to include `>>` in the body, it should be escaped inside a string to not be confused with chaining separator, e.g. `text="some >> text"`.

### Intermediate matches[​](#intermediate-matches "Direct link to Intermediate matches")

warning

We recommend [filtering by another locator](/docs/locators#filter-by-childdescendant) to locate elements that contain other elements.

By default, chained selectors resolve to an element queried by the last selector. A selector can be prefixed with `*` to capture elements that are queried by an intermediate selector.

For example, `css=article >> text=Hello` captures the element with the text `Hello`, and `*css=article >> text=Hello` (note the `*`) captures the `article` element that contains some element with the text `Hello`.

# Pages

Pages
=====

Pages[​](#pages "Direct link to Pages")
---------------------------------------

Each [BrowserContext](/docs/api/class-browsercontext "BrowserContext") can have multiple pages. A [Page](/docs/api/class-page "Page") refers to a single tab or a popup window within a browser context. It should be used to navigate to URLs and interact with the page content.

    // Create a page.const page = await context.newPage();// Navigate explicitly, similar to entering a URL in the browser.await page.goto('http://example.com');// Fill an input.await page.locator('#search').fill('query');// Navigate implicitly by clicking a link.await page.locator('#submit').click();// Expect a new url.console.log(page.url());

Multiple pages[​](#multiple-pages "Direct link to Multiple pages")
------------------------------------------------------------------

Each browser context can host multiple pages (tabs).

*   Each page behaves like a focused, active page. Bringing the page to front is not required.
*   Pages inside a context respect context-level emulation, like viewport sizes, custom network routes or browser locale.

    // Create two pagesconst pageOne = await context.newPage();const pageTwo = await context.newPage();// Get pages of a browser contextconst allPages = context.pages();

Handling new pages[​](#handling-new-pages "Direct link to Handling new pages")
------------------------------------------------------------------------------

The `page` event on browser contexts can be used to get new pages that are created in the context. This can be used to handle new pages opened by `target="_blank"` links.

    // Start waiting for new page before clicking. Note no await.const pagePromise = context.waitForEvent('page');await page.getByText('open new tab').click();const newPage = await pagePromise;// Interact with the new page normally.await newPage.getByRole('button').click();console.log(await newPage.title());

If the action that triggers the new page is unknown, the following pattern can be used.

    // Get all new pages (including popups) in the contextcontext.on('page', async page => {  await page.waitForLoadState();  console.log(await page.title());});

Handling popups[​](#handling-popups "Direct link to Handling popups")
---------------------------------------------------------------------

If the page opens a pop-up (e.g. pages opened by `target="_blank"` links), you can get a reference to it by listening to the `popup` event on the page.

This event is emitted in addition to the `browserContext.on('page')` event, but only for popups relevant to this page.

    // Start waiting for popup before clicking. Note no await.const popupPromise = page.waitForEvent('popup');await page.getByText('open the popup').click();const popup = await popupPromise;// Interact with the new popup normally.await popup.getByRole('button').click();console.log(await popup.title());

If the action that triggers the popup is unknown, the following pattern can be used.

    // Get all popups when they openpage.on('popup', async popup => {  await popup.waitForLoadState();  console.log(await popup.title());});

# Page object models

Page object models
==================

Introduction[​](#introduction "Direct link to Introduction")
------------------------------------------------------------

Large test suites can be structured to optimize ease of authoring and maintenance. Page object models are one such approach to structure your test suite.

A page object represents a part of your web application. An e-commerce web application might have a home page, a listings page and a checkout page. Each of them can be represented by page object models.

Page objects **simplify authoring** by creating a higher-level API which suits your application and **simplify maintenance** by capturing element selectors in one place and create reusable code to avoid repetition.

Implementation[​](#implementation "Direct link to Implementation")
------------------------------------------------------------------

We will create a `PlaywrightDevPage` helper class to encapsulate common operations on the `playwright.dev` page. Internally, it will use the `page` object.

*   Test
*   Library

playwright-dev-page.ts

    import { expect, type Locator, type Page } from '@playwright/test';export class PlaywrightDevPage {  readonly page: Page;  readonly getStartedLink: Locator;  readonly gettingStartedHeader: Locator;  readonly pomLink: Locator;  readonly tocList: Locator;  constructor(page: Page) {    this.page = page;    this.getStartedLink = page.locator('a', { hasText: 'Get started' });    this.gettingStartedHeader = page.locator('h1', { hasText: 'Installation' });    this.pomLink = page.locator('li', {      hasText: 'Guides',    }).locator('a', {      hasText: 'Page Object Model',    });    this.tocList = page.locator('article div.markdown ul > li > a');  }  async goto() {    await this.page.goto('https://playwright.dev');  }  async getStarted() {    await this.getStartedLink.first().click();    await expect(this.gettingStartedHeader).toBeVisible();  }  async pageObjectModel() {    await this.getStarted();    await this.pomLink.click();  }}

models/PlaywrightDevPage.js

    class PlaywrightDevPage {  /**   * @param {import('playwright').Page} page   */  constructor(page) {    this.page = page;    this.getStartedLink = page.locator('a', { hasText: 'Get started' });    this.gettingStartedHeader = page.locator('h1', { hasText: 'Installation' });    this.pomLink = page.locator('li', {      hasText: 'Playwright Test',    }).locator('a', {      hasText: 'Page Object Model',    });    this.tocList = page.locator('article div.markdown ul > li > a');  }  async getStarted() {    await this.getStartedLink.first().click();    await expect(this.gettingStartedHeader).toBeVisible();  }  async pageObjectModel() {    await this.getStarted();    await this.pomLink.click();  }}module.exports = { PlaywrightDevPage };

Now we can use the `PlaywrightDevPage` class in our tests.

*   Test
*   Library

example.spec.ts

    import { test, expect } from '@playwright/test';import { PlaywrightDevPage } from './playwright-dev-page';test('getting started should contain table of contents', async ({ page }) => {  const playwrightDev = new PlaywrightDevPage(page);  await playwrightDev.goto();  await playwrightDev.getStarted();  await expect(playwrightDev.tocList).toHaveText([    `How to install Playwright`,    `What's Installed`,    `How to run the example test`,    `How to open the HTML test report`,    `Write tests using web first assertions, page fixtures and locators`,    `Run single test, multiple tests, headed mode`,    `Generate tests with Codegen`,    `See a trace of your tests`  ]);});test('should show Page Object Model article', async ({ page }) => {  const playwrightDev = new PlaywrightDevPage(page);  await playwrightDev.goto();  await playwrightDev.pageObjectModel();  await expect(page.locator('article')).toContainText('Page Object Model is a common pattern');});

example.spec.js

    const { PlaywrightDevPage } = require('./playwright-dev-page');// In the testconst page = await browser.newPage();await playwrightDev.goto();await playwrightDev.getStarted();await expect(playwrightDev.tocList).toHaveText([  `How to install Playwright`,  `What's Installed`,  `How to run the example test`,  `How to open the HTML test report`,  `Write tests using web first assertions, page fixtures and locators`,  `Run single test, multiple tests, headed mode`,  `Generate tests with Codegen`,  `See a trace of your tests`]);

# Screenshots

Screenshots
===========

Introduction[​](#introduction "Direct link to Introduction")
------------------------------------------------------------

Here is a quick way to capture a screenshot and save it into a file:

    await page.screenshot({ path: 'screenshot.png' });

[Screenshots API](/docs/api/class-page#page-screenshot) accepts many parameters for image format, clip area, quality, etc. Make sure to check them out.

Full page screenshots[​](#full-page-screenshots "Direct link to Full page screenshots")
---------------------------------------------------------------------------------------

Full page screenshot is a screenshot of a full scrollable page, as if you had a very tall screen and the page could fit it entirely.

    await page.screenshot({ path: 'screenshot.png', fullPage: true });

Capture into buffer[​](#capture-into-buffer "Direct link to Capture into buffer")
---------------------------------------------------------------------------------

Rather than writing into a file, you can get a buffer with the image and post-process it or pass it to a third party pixel diff facility.

    const buffer = await page.screenshot();console.log(buffer.toString('base64'));

Element screenshot[​](#element-screenshot "Direct link to Element screenshot")
------------------------------------------------------------------------------

Sometimes it is useful to take a screenshot of a single element.

    await page.locator('.header').screenshot({ path: 'screenshot.png' });

# Service Workers

Service Workers
===============

Introduction[​](#introduction "Direct link to Introduction")
------------------------------------------------------------

warning

Service workers are only supported on Chromium-based browsers.

note

If you're looking to do general network mocking, routing, and interception, please see the [Network Guide](/docs/network) first. Playwright provides built-in APIs for this use case that don't require the information below. However, if you're interested in requests made by Service Workers themselves, please read below.

[Service Workers](https://developer.mozilla.org/en-US/docs/Web/API/Service_Worker_API) provide a browser-native method of handling requests made by a page with the native [Fetch API (`fetch`)](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API) along with other network-requested assets (like scripts, css, and images).

They can act as a **network proxy** between the page and the external network to perform caching logic or can provide users with an offline experience if the Service Worker adds a [FetchEvent](https://developer.mozilla.org/en-US/docs/Web/API/FetchEvent#examples) listener.

Many sites that use Service Workers simply use them as a transparent optimization technique. While users might notice a faster experience, the app's implementation is unaware of their existence. Running the app with or without Service Workers enabled appears functionally equivalent.

How to Disable Service Workers[​](#how-to-disable-service-workers "Direct link to How to Disable Service Workers")
------------------------------------------------------------------------------------------------------------------

Playwright allows to disable Service Workers during testing. This makes tests more predictable and performant. However, if your actual page uses a Service Worker, the behavior might be different.

To disable service workers, set [testOptions.serviceWorkers](/docs/api/class-testoptions#test-options-service-workers) to `'block'`.

playwright.config.ts

    import { defineConfig } from '@playwright/test';export default defineConfig({  use: {    serviceWorkers: 'allow'  },});

Accessing Service Workers and Waiting for Activation[​](#accessing-service-workers-and-waiting-for-activation "Direct link to Accessing Service Workers and Waiting for Activation")
------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

You can use [browserContext.serviceWorkers()](/docs/api/class-browsercontext#browser-context-service-workers) to list the Service [Worker](/docs/api/class-worker "Worker")s, or specifically watch for the Service [Worker](/docs/api/class-worker "Worker") if you anticipate a page will trigger its [registration](https://developer.mozilla.org/en-US/docs/Web/API/ServiceWorkerContainer/register):

    const serviceWorkerPromise = context.waitForEvent('serviceworker');await page.goto('/example-with-a-service-worker.html');const serviceworker = await serviceWorkerPromise;

[browserContext.on('serviceworker')](/docs/api/class-browsercontext#browser-context-event-service-worker) event is fired _**before**_ the Service Worker has taken control over the page, so _**before**_ evaluating in the worker with [worker.evaluate()](/docs/api/class-worker#worker-evaluate) you should wait on its activation.

There are more idiomatic methods of waiting for a Service Worker to be activated, but the following is an implementation agnostic method:

    await page.evaluate(async () => {  const registration = await window.navigator.serviceWorker.getRegistration();  if (registration.active?.state === 'activated')    return;  await new Promise(resolve => {    window.navigator.serviceWorker.addEventListener('controllerchange', resolve);  });});

Network Events and Routing[​](#network-events-and-routing "Direct link to Network Events and Routing")
------------------------------------------------------------------------------------------------------

Any network request made by the **Service Worker** is reported through the [BrowserContext](/docs/api/class-browsercontext "BrowserContext") object:

*   [browserContext.on('request')](/docs/api/class-browsercontext#browser-context-event-request), [browserContext.on('requestfinished')](/docs/api/class-browsercontext#browser-context-event-request-finished), [browserContext.on('response')](/docs/api/class-browsercontext#browser-context-event-response) and [browserContext.on('requestfailed')](/docs/api/class-browsercontext#browser-context-event-request-failed) are fired
*   [browserContext.route()](/docs/api/class-browsercontext#browser-context-route) sees the request
*   [request.serviceWorker()](/docs/api/class-request#request-service-worker) will be set to the Service [Worker](/docs/api/class-worker "Worker") instance, and [request.frame()](/docs/api/class-request#request-frame) will **throw**

Additionally, for any network request made by the **Page**, method [response.fromServiceWorker()](/docs/api/class-response#response-from-service-worker) return `true` when the request was handled a Service Worker's fetch handler.

Consider a simple service worker that fetches every request made by the page:

transparent-service-worker.js

    self.addEventListener('fetch', event => {  // actually make the request  const responsePromise = fetch(event.request);  // send it back to the page  event.respondWith(responsePromise);});self.addEventListener('activate', event => {  event.waitUntil(clients.claim());});

If `index.html` registers this service worker, and then fetches `data.json`, the following Request/Response events would be emitted (along with the corresponding network lifecycle events):

Event

Owner

URL

Routed

[response.fromServiceWorker()](/docs/api/class-response#response-from-service-worker)

[browserContext.on('request')](/docs/api/class-browsercontext#browser-context-event-request)

[Frame](/docs/api/class-frame "Frame")

index.html

Yes

[page.on('request')](/docs/api/class-page#page-event-request)

[Frame](/docs/api/class-frame "Frame")

index.html

Yes

[browserContext.on('request')](/docs/api/class-browsercontext#browser-context-event-request)

Service [Worker](/docs/api/class-worker "Worker")

transparent-service-worker.js

Yes

[browserContext.on('request')](/docs/api/class-browsercontext#browser-context-event-request)

Service [Worker](/docs/api/class-worker "Worker")

data.json

Yes

[browserContext.on('request')](/docs/api/class-browsercontext#browser-context-event-request)

[Frame](/docs/api/class-frame "Frame")

data.json

Yes

[page.on('request')](/docs/api/class-page#page-event-request)

[Frame](/docs/api/class-frame "Frame")

data.json

Yes

Since the example Service Worker just acts a basic transparent "proxy":

*   There's 2 [browserContext.on('request')](/docs/api/class-browsercontext#browser-context-event-request) events for `data.json`; one [Frame](/docs/api/class-frame "Frame")\-owned, the other Service [Worker](/docs/api/class-worker "Worker")\-owned.
*   Only the Service [Worker](/docs/api/class-worker "Worker")\-owned request for the resource was routable via [browserContext.route()](/docs/api/class-browsercontext#browser-context-route); the [Frame](/docs/api/class-frame "Frame")\-owned events for `data.json` are not routeable, as they would not have even had the possibility to hit the external network since the Service Worker has a fetch handler registered.

caution

It's important to note: calling [request.frame()](/docs/api/class-request#request-frame) or [response.frame()](/docs/api/class-response#response-frame) will **throw** an exception, if called on a [Request](/docs/api/class-request "Request")/[Response](/docs/api/class-response "Response") that has a non-null [request.serviceWorker()](/docs/api/class-request#request-service-worker).

Routing Service Worker Requests Only[​](#routing-service-worker-requests-only "Direct link to Routing Service Worker Requests Only")
------------------------------------------------------------------------------------------------------------------------------------

    await context.route('**', async route => {  if (route.request().serviceWorker()) {    // NB: calling route.request().frame() here would THROW    await route.fulfill({      contentType: 'text/plain',      status: 200,      body: 'from sw',    });  } else {    await route.continue();  }});

Known Limitations[​](#known-limitations "Direct link to Known Limitations")
---------------------------------------------------------------------------

Requests for updated Service Worker main script code currently cannot be routed ([https://github.com/microsoft/playwright/issues/14711](https://github.com/microsoft/playwright/issues/14711)).

# Snapshot testing

Snapshot testing
================

Overview[​](#overview "Direct link to Overview")
------------------------------------------------

With Playwright's Snapshot testing you can assert the accessibility tree of a page against a predefined snapshot template.

    await page.goto('https://playwright.dev/');await expect(page.getByRole('banner')).toMatchAriaSnapshot(`  - banner:    - heading /Playwright enables reliable end-to-end/ [level=1]    - link "Get started"    - link "Star microsoft/playwright on GitHub"    - link /[\\d]+k\\+ stargazers on GitHub/`);

Assertion testing vs Snapshot testing[​](#assertion-testing-vs-snapshot-testing "Direct link to Assertion testing vs Snapshot testing")
---------------------------------------------------------------------------------------------------------------------------------------

Snapshot testing and assertion testing serve different purposes in test automation:

### Assertion testing[​](#assertion-testing "Direct link to Assertion testing")

Assertion testing is a targeted approach where you assert specific values or conditions about elements or components. For instance, with Playwright, [expect(locator).toHaveText()](/docs/api/class-locatorassertions#locator-assertions-to-have-text) verifies that an element contains the expected text, and [expect(locator).toHaveValue()](/docs/api/class-locatorassertions#locator-assertions-to-have-value) confirms that an input field has the expected value. Assertion tests are specific and generally check the current state of an element or property against an expected, predefined state. They work well for predictable, single-value checks but are limited in scope when testing the broader structure or variations.

**Advantages**

*   **Clarity**: The intent of the test is explicit and easy to understand.
*   **Specificity**: Tests focus on particular aspects of functionality, making them more robust against unrelated changes.
*   **Debugging**: Failures provide targeted feedback, pointing directly to the problematic aspect.

**Disadvantages**

*   **Verbose for complex outputs**: Writing assertions for complex data structures or large outputs can be cumbersome and error-prone.
*   **Maintenance overhead**: As code evolves, manually updating assertions can be time-consuming.

### Snapshot testing[​](#snapshot-testing "Direct link to Snapshot testing")

Snapshot testing captures a “snapshot” or representation of the entire state of an element, component, or data at a given moment, which is then saved for future comparisons. When re-running tests, the current state is compared to the snapshot, and if there are differences, the test fails. This approach is especially useful for complex or dynamic structures, where manually asserting each detail would be too time-consuming. Snapshot testing is broader and more holistic than assertion testing, allowing you to track more complex changes over time.

**Advantages**

*   **Simplifies complex outputs**: For example, testing a UI component's rendered output can be tedious with traditional assertions. Snapshots capture the entire output for easy comparison.
*   **Quick Feedback loop**: Developers can easily spot unintended changes in the output.
*   **Encourages consistency**: Helps maintain consistent output as code evolves.

**Disadvantages**

*   **Over-Reliance**: It can be tempting to accept changes to snapshots without fully understanding them, potentially hiding bugs.
*   **Granularity**: Large snapshots may be hard to interpret when differences arise, especially if minor changes affect large portions of the output.
*   **Suitability**: Not ideal for highly dynamic content where outputs change frequently or unpredictably.

### When to use[​](#when-to-use "Direct link to When to use")

*   **Snapshot testing** is ideal for:
    *   UI testing of whole pages and components.
    *   Broad structural checks for complex UI components.
    *   Regression testing for outputs that rarely change structure.
*   **Assertion testing** is ideal for:
    *   Core logic validation.
    *   Computed value testing.
    *   Fine-grained tests requiring precise conditions.

By combining snapshot testing for broad, structural checks and assertion testing for specific functionality, you can achieve a well-rounded testing strategy.

Aria snapshots[​](#aria-snapshots "Direct link to Aria snapshots")
------------------------------------------------------------------

In Playwright, aria snapshots provide a YAML representation of the accessibility tree of a page. These snapshots can be stored and compared later to verify if the page structure remains consistent or meets defined expectations.

The YAML format describes the hierarchical structure of accessible elements on the page, detailing **roles**, **attributes**, **values**, and **text content**. The structure follows a tree-like syntax, where each node represents an accessible element, and indentation indicates nested elements.

Each accessible element in the tree is represented as a YAML node:

    - role "name" [attribute=value]

*   **role**: Specifies the ARIA or HTML role of the element (e.g., `heading`, `list`, `listitem`, `button`).
*   **"name"**: Accessible name of the element. Quoted strings indicate exact values, `/patterns/` are used for regular expression.
*   **\[attribute=value\]**: Attributes and values, in square brackets, represent specific ARIA attributes, such as `checked`, `disabled`, `expanded`, `level`, `pressed`, or `selected`.

These values are derived from ARIA attributes or calculated based on HTML semantics. To inspect the accessibility tree structure of a page, use the [Chrome DevTools Accessibility Tab](https://developer.chrome.com/docs/devtools/accessibility/reference#tab).

Snapshot matching[​](#snapshot-matching "Direct link to Snapshot matching")
---------------------------------------------------------------------------

The [expect(locator).toMatchAriaSnapshot()](/docs/api/class-locatorassertions#locator-assertions-to-match-aria-snapshot) assertion method in Playwright compares the accessible structure of the locator scope with a predefined aria snapshot template, helping validate the page's state against testing requirements.

For the following DOM:

    <h1>title</h1>

You can match it using the following snapshot template:

    await expect(page.locator('body')).toMatchAriaSnapshot(`  - heading "title"`);

When matching, the snapshot template is compared to the current accessibility tree of the page:

*   If the tree structure matches the template, the test passes; otherwise, it fails, indicating a mismatch between expected and actual accessibility states.
*   The comparison is case-sensitive and collapses whitespace, so indentation and line breaks are ignored.
*   The comparison is order-sensitive, meaning the order of elements in the snapshot template must match the order in the page's accessibility tree.

### Partial matching[​](#partial-matching "Direct link to Partial matching")

You can perform partial matches on nodes by omitting attributes or accessible names, enabling verification of specific parts of the accessibility tree without requiring exact matches. This flexibility is helpful for dynamic or irrelevant attributes.

    <button>Submit</button>

_aria snapshot_

    - button

In this example, the button role is matched, but the accessible name ("Submit") is not specified, allowing the test to pass regardless of the button's label.

* * *

For elements with ARIA attributes like `checked` or `disabled`, omitting these attributes allows partial matching, focusing solely on role and hierarchy.

    <input type="checkbox" checked>

_aria snapshot for partial match_

    - checkbox

In this partial match, the `checked` attribute is ignored, so the test will pass regardless of the checkbox state.

* * *

Similarly, you can partially match children in lists or groups by omitting specific list items or nested elements.

    <ul>  <li>Feature A</li>  <li>Feature B</li>  <li>Feature C</li></ul>

_aria snapshot for partial match_

    - list  - listitem: Feature B

Partial matches let you create flexible snapshot tests that verify essential page structure without enforcing specific content or attributes.

### Strict matching[​](#strict-matching "Direct link to Strict matching")

By default, a template containing the subset of children will be matched:

    <ul>  <li>Feature A</li>  <li>Feature B</li>  <li>Feature C</li></ul>

_aria snapshot for partial match_

    - list  - listitem: Feature B

The `/children` property can be used to control how child elements are matched:

*   `contain` (default): Matches if all specified children are present in order
*   `equal`: Matches if the children exactly match the specified list in order
*   `deep-equal`: Matches if the children exactly match the specified list in order, including nested children

    <ul>  <li>Feature A</li>  <li>Feature B</li>  <li>Feature C</li></ul>

_aria snapshot will fail due to Feature C not being in the template_

    - list  - /children: equal  - listitem: Feature A  - listitem: Feature B

### Matching with regular expressions[​](#matching-with-regular-expressions "Direct link to Matching with regular expressions")

Regular expressions allow flexible matching for elements with dynamic or variable text. Accessible names and text can support regex patterns.

    <h1>Issues 12</h1>

_aria snapshot with regular expression_

    - heading /Issues \d+/

Generating snapshots[​](#generating-snapshots "Direct link to Generating snapshots")
------------------------------------------------------------------------------------

Creating aria snapshots in Playwright helps ensure and maintain your application's structure. You can generate snapshots in various ways depending on your testing setup and workflow.

### Generating snapshots with the Playwright code generator[​](#generating-snapshots-with-the-playwright-code-generator "Direct link to Generating snapshots with the Playwright code generator")

If you're using Playwright's [Code Generator](/docs/codegen), generating aria snapshots is streamlined with its interactive interface:

*   **"Assert snapshot" Action**: In the code generator, you can use the "Assert snapshot" action to automatically create a snapshot assertion for the selected elements. This is a quick way to capture the aria snapshot as part of your recorded test flow.
*   **"Aria snapshot" Tab**: The "Aria snapshot" tab within the code generator interface visually represents the aria snapshot for a selected locator, letting you explore, inspect, and verify element roles, attributes, and accessible names to aid snapshot creation and review.

### Updating snapshots with `@playwright/test` and the `--update-snapshots` flag[​](#updating-snapshots-with-playwrighttest-and-the---update-snapshots-flag "Direct link to updating-snapshots-with-playwrighttest-and-the---update-snapshots-flag")

When using the Playwright test runner (`@playwright/test`), you can automatically update snapshots with the `--update-snapshots` flag, `-u` for short.

Running tests with the `--update-snapshots` flag will update snapshots that did not match. Matching snapshots will not be updated.

    npx playwright test --update-snapshots

Updating snapshots is useful when application structure changes require new snapshots as a baseline. Note that Playwright will wait for the maximum expect timeout specified in the test runner configuration to ensure the page is settled before taking the snapshot. It might be necessary to adjust the `--timeout` if the test hits the timeout while generating snapshots.

#### Empty template for snapshot generation[​](#empty-template-for-snapshot-generation "Direct link to Empty template for snapshot generation")

Passing an empty string as the template in an assertion generates a snapshot on-the-fly:

    await expect(locator).toMatchAriaSnapshot('');

Note that Playwright will wait for the maximum expect timeout specified in the test runner configuration to ensure the page is settled before taking the snapshot. It might be necessary to adjust the `--timeout` if the test hits the timeout while generating snapshots.

#### Snapshot patch files[​](#snapshot-patch-files "Direct link to Snapshot patch files")

When updating snapshots, Playwright creates patch files that capture differences. These patch files can be reviewed, applied, and committed to source control, allowing teams to track structural changes over time and ensure updates are consistent with application requirements.

The way source code is updated can be changed using the `--update-source-method` flag. There are several options available:

*   **"patch"** (default): Generates a unified diff file that can be applied to the source code using `git apply`.
*   **"3way"**: Generates merge conflict markers in your source code, allowing you to choose whether to accept changes.
*   **"overwrite"**: Overwrites the source code with the new snapshot values.

    npx playwright test --update-snapshots --update-source-method=3way

#### Snapshots as separate files[​](#snapshots-as-separate-files "Direct link to Snapshots as separate files")

To store your snapshots in a separate file, use the `toMatchAriaSnapshot` method with the `name` option, specifying a `.aria.yml` file extension.

    await expect(page.getByRole('main')).toMatchAriaSnapshot({ name: 'main.aria.yml' });

By default, snapshots from a test file `example.spec.ts` are placed in the `example.spec.ts-snapshots` directory. As snapshots should be the same across browsers, only one snapshot is saved even if testing with multiple browsers. Should you wish, you can customize the [snapshot path template](/docs/api/class-testconfig#test-config-snapshot-path-template) using the following configuration:

    export default defineConfig({  expect: {    toMatchAriaSnapshot: {      pathTemplate: '__snapshots__/{testFilePath}/{arg}{ext}',    },  },});

### Using the `Locator.ariaSnapshot` method[​](#using-the-locatorariasnapshot-method "Direct link to using-the-locatorariasnapshot-method")

The [locator.ariaSnapshot()](/docs/api/class-locator#locator-aria-snapshot) method allows you to programmatically create a YAML representation of accessible elements within a locator's scope, especially helpful for generating snapshots dynamically during test execution.

**Example**:

    const snapshot = await page.locator('body').ariaSnapshot();console.log(snapshot);

This command outputs the aria snapshot within the specified locator's scope in YAML format, which you can validate or store as needed.

Accessibility tree examples[​](#accessibility-tree-examples "Direct link to Accessibility tree examples")
---------------------------------------------------------------------------------------------------------

### Headings with level attributes[​](#headings-with-level-attributes "Direct link to Headings with level attributes")

Headings can include a `level` attribute indicating their heading level.

    <h1>Title</h1><h2>Subtitle</h2>

_aria snapshot_

    - heading "Title" [level=1]- heading "Subtitle" [level=2]

### Text nodes[​](#text-nodes "Direct link to Text nodes")

Standalone or descriptive text elements appear as text nodes.

    <div>Sample accessible name</div>

_aria snapshot_

    - text: Sample accessible name

### Inline multiline text[​](#inline-multiline-text "Direct link to Inline multiline text")

Multiline text, such as paragraphs, is normalized in the aria snapshot.

    <p>Line 1<br>Line 2</p>

_aria snapshot_

    - paragraph: Line 1 Line 2

### Links[​](#links "Direct link to Links")

Links display their text or composed content from pseudo-elements.

    <a href="#more-info">Read more about Accessibility</a>

_aria snapshot_

    - link "Read more about Accessibility"

### Text boxes[​](#text-boxes "Direct link to Text boxes")

Input elements of type `text` show their `value` attribute content.

    <input type="text" value="Enter your name">

_aria snapshot_

    - textbox: Enter your name

### Lists with items[​](#lists-with-items "Direct link to Lists with items")

Ordered and unordered lists include their list items.

    <ul aria-label="Main Features">  <li>Feature 1</li>  <li>Feature 2</li></ul>

_aria snapshot_

    - list "Main Features":  - listitem: Feature 1  - listitem: Feature 2

### Grouped elements[​](#grouped-elements "Direct link to Grouped elements")

Groups capture nested elements, such as `<details>` elements with summary content.

    <details>  <summary>Summary</summary>  <p>Detail content here</p></details>

_aria snapshot_

    - group: Summary

### Attributes and states[​](#attributes-and-states "Direct link to Attributes and states")

Commonly used ARIA attributes, like `checked`, `disabled`, `expanded`, `level`, `pressed`, and `selected`, represent control states.

#### Checkbox with `checked` attribute[​](#checkbox-with-checked-attribute "Direct link to checkbox-with-checked-attribute")

    <input type="checkbox" checked>

_aria snapshot_

    - checkbox [checked]

#### Button with `pressed` attribute[​](#button-with-pressed-attribute "Direct link to button-with-pressed-attribute")

    <button aria-pressed="true">Toggle</button>

_aria snapshot_

    - button "Toggle" [pressed=true]

# Test generator

Test generator
==============

Introduction[​](#introduction "Direct link to Introduction")
------------------------------------------------------------

Playwright comes with the ability to generate tests for you as you perform actions in the browser and is a great way to quickly get started with testing. Playwright will look at your page and figure out the best locator, prioritizing [role, text and test id locators](/docs/locators). If the generator finds multiple elements matching the locator, it will improve the locator to make it resilient that uniquely identify the target element.

Generate tests in VS Code[​](#generate-tests-in-vs-code "Direct link to Generate tests in VS Code")
---------------------------------------------------------------------------------------------------

Install the VS Code extension and generate tests directly from VS Code. The extension is available on the [VS Code Marketplace](https://marketplace.visualstudio.com/items?itemName=ms-playwright.playwright). Check out our guide on [getting started with VS Code](/docs/getting-started-vscode).

### Record a New Test[​](#record-a-new-test "Direct link to Record a New Test")

To record a test click on the **Record new** button from the Testing sidebar. This will create a `test-1.spec.ts` file as well as open up a browser window.

![record new in vs code](https://user-images.githubusercontent.com/13063165/220961665-615d0ab8-3f0b-439c-ad0b-0424d9aa154b.png)

In the browser go to the URL you wish to test and start clicking around to record your user actions.

![generating user actions](https://github.com/microsoft/playwright/assets/13063165/1d4c8f37-8325-4816-a665-d0e95e63f509)

Playwright will record your actions and generate the test code directly in VS Code. You can also generate assertions by choosing one of the icons in the toolbar and then clicking on an element on the page to assert against. The following assertions can be generated:

*   `'assert visibility'` to assert that an element is visible
*   `'assert text'` to assert that an element contains specific text
*   `'assert value'` to assert that an element has a specific value

![generating assertions](https://github.com/microsoft/playwright/assets/13063165/d131eb35-b2ca-4bf4-a8ac-88b6e40dcf07)

Once you are done recording click the **cancel** button or close the browser window. You can then inspect your `test-1.spec.ts` file and manually improve it if needed.

![code from a generated test](https://github.com/microsoft/playwright/assets/13063165/2ba4c212-4713-460a-b054-6dc6b67a9a7c)

### Record at Cursor[​](#record-at-cursor "Direct link to Record at Cursor")

To record from a specific point in your test move your cursor to where you want to record more actions and then click the **Record at cursor** button from the Testing sidebar. If your browser window is not already open then first run the test with 'Show browser' checked and then click the **Record at cursor** button.

![record at cursor in vs code](https://github.com/microsoft/playwright/assets/13063165/77948ab8-92a2-435f-9833-0944da5ae664)

In the browser window start performing the actions you want to record.

![add feed the dog to todo app](https://user-images.githubusercontent.com/13063165/220960770-6435cec7-1723-42a8-8c1f-8244e2d800c7.png)

In the test file in VS Code you will see your new generated actions added to your test at the cursor position.

![code from a generated test](https://github.com/microsoft/playwright/assets/13063165/4f4bb34e-9cda-41fe-bf65-8d8016d84c7f)

### Generating locators[​](#generating-locators "Direct link to Generating locators")

You can generate locators with the test generator.

*   Click on the **Pick locator** button from the testing sidebar and then hover over elements in the browser window to see the [locator](/docs/locators) highlighted underneath each element.
*   Click the element you require and it will now show up in the **Pick locator** box in VS Code.
*   Press Enter on your keyboard to copy the locator into the clipboard and then paste anywhere in your code. Or press 'escape' if you want to cancel.

![Pick locators in VS code](https://user-images.githubusercontent.com/13063165/220958368-95b03620-3c9b-40a8-be74-01c96ba03cad.png)

Generate tests with the Playwright Inspector[​](#generate-tests-with-the-playwright-inspector "Direct link to Generate tests with the Playwright Inspector")
------------------------------------------------------------------------------------------------------------------------------------------------------------

When running the `codegen` command two windows will be opened, a browser window where you interact with the website you wish to test and the Playwright Inspector window where you can record your tests and then copy them into your editor.

### Running Codegen[​](#running-codegen "Direct link to Running Codegen")

Use the `codegen` command to run the test generator followed by the URL of the website you want to generate tests for. The URL is optional and you can always run the command without it and then add the URL directly into the browser window instead.

    npx playwright codegen demo.playwright.dev/todomvc

### Recording a test[​](#recording-a-test "Direct link to Recording a test")

Run the `codegen` command and perform actions in the browser window. Playwright will generate the code for the user interactions which you can see in the Playwright Inspector window. Once you have finished recording your test stop the recording and press the **copy** button to copy your generated test into your editor.

With the test generator you can record:

*   Actions like click or fill by simply interacting with the page
*   Assertions by clicking on one of the icons in the toolbar and then clicking on an element on the page to assert against. You can choose:
    *   `'assert visibility'` to assert that an element is visible
    *   `'assert text'` to assert that an element contains specific text
    *   `'assert value'` to assert that an element has a specific value

![Recording a test](https://github.com/microsoft/playwright/assets/13063165/34a79ea1-639e-4cb3-8115-bfdc78e3d34d)

###### [​](#-1 "Direct link to -1")

When you have finished interacting with the page, press the **record** button to stop the recording and use the **copy** button to copy the generated code to your editor.

Use the **clear** button to clear the code to start recording again. Once finished, close the Playwright inspector window or stop the terminal command.

### Generating locators[​](#generating-locators-1 "Direct link to Generating locators")

You can generate [locators](/docs/locators) with the test generator.

*   Press the `'Record'` button to stop the recording and the `'Pick Locator'` button will appear.
*   Click on the `'Pick Locator'` button and then hover over elements in the browser window to see the locator highlighted underneath each element.
*   To choose a locator, click on the element you would like to locate and the code for that locator will appear in the field next to the Pick Locator button.
*   You can then edit the locator in this field to fine tune it or use the copy button to copy it and paste it into your code.

###### [​](#-2 "Direct link to -2")

![picking a locator](https://github.com/microsoft/playwright/assets/13063165/2c8a12e2-4e98-4fdd-af92-1d73ae696d86)

Emulation[​](#emulation "Direct link to Emulation")
---------------------------------------------------

You can use the test generator to generate tests using emulation so as to generate a test for a specific viewport, device, color scheme, as well as emulate the geolocation, language or timezone. The test generator can also generate a test while preserving authenticated state.

### Emulate viewport size[​](#emulate-viewport-size "Direct link to Emulate viewport size")

Playwright opens a browser window with its viewport set to a specific width and height and is not responsive as tests need to be run under the same conditions. Use the `--viewport` option to generate tests with a different viewport size.

    npx playwright codegen --viewport-size="800,600" playwright.dev

###### [​](#-3 "Direct link to -3")

![Codegen generating code for tests for playwright.dev website with a specific viewport js](https://user-images.githubusercontent.com/13063165/220402029-f90d1c9f-d740-4c0f-acc8-95235ee83f85.png)

### Emulate devices[​](#emulate-devices "Direct link to Emulate devices")

Record scripts and tests while emulating a mobile device using the `--device` option which sets the viewport size and user agent among others.

    npx playwright codegen --device="iPhone 13" playwright.dev

###### [​](#-4 "Direct link to -4")

![Codegen generating code for tests for playwright.dev website emulated for iPhone 13 js](https://user-images.githubusercontent.com/13063165/220921482-dc4f5532-9dce-40bd-8a28-e0d87d26a601.png)

### Emulate color scheme[​](#emulate-color-scheme "Direct link to Emulate color scheme")

Record scripts and tests while emulating the color scheme with the `--color-scheme` option.

    npx playwright codegen --color-scheme=dark playwright.dev

###### [​](#-5 "Direct link to -5")

![Codegen generating code for tests for playwright.dev website in dark mode js](https://user-images.githubusercontent.com/13063165/220930273-f3a25bae-64dd-4bbb-99ed-1e97c0cb1ebf.png)

### Emulate geolocation, language and timezone[​](#emulate-geolocation-language-and-timezone "Direct link to Emulate geolocation, language and timezone")

Record scripts and tests while emulating timezone, language & location using the `--timezone`, `--geolocation` and `--lang` options. Once the page opens:

1.  Accept the cookies
2.  On the top right, click on the locate me button to see geolocation in action.

    npx playwright codegen --timezone="Europe/Rome" --geolocation="41.890221,12.492348" --lang="it-IT" bing.com/maps

###### [​](#-6 "Direct link to -6")

![Codegen generating code for tests for bing maps showing timezone, geolocation as Rome, Italy and in Italian language](https://user-images.githubusercontent.com/13063165/220931996-d3144421-8d3b-4f9f-896c-769c01566c01.png)

### Preserve authenticated state[​](#preserve-authenticated-state "Direct link to Preserve authenticated state")

Run `codegen` with `--save-storage` to save [cookies](https://developer.mozilla.org/en-US/docs/Web/HTTP/Cookies), [localStorage](https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage) and [IndexedDB](https://developer.mozilla.org/en-US/docs/Web/API/IndexedDB_API) data at the end of the session. This is useful to separately record an authentication step and reuse it later when recording more tests.

    npx playwright codegen github.com/microsoft/playwright --save-storage=auth.json

###### [​](#-7 "Direct link to -7")

![github page before logging in js](https://user-images.githubusercontent.com/13063165/220929062-88dfe567-0c6d-4e49-b9f9-74ae241fb8c7.png)

#### Login[​](#login "Direct link to Login")

After performing authentication and closing the browser, `auth.json` will contain the storage state which you can then reuse in your tests.

![login to GitHub screen](https://user-images.githubusercontent.com/13063165/220561688-04b2b984-4ba6-4446-8b0a-8058876e2a02.png)

Make sure you only use the `auth.json` locally as it contains sensitive information. Add it to your `.gitignore` or delete it once you have finished generating your tests.

#### Load authenticated state[​](#load-authenticated-state "Direct link to Load authenticated state")

Run with `--load-storage` to consume the previously loaded storage from the `auth.json`. This way, all [cookies](https://developer.mozilla.org/en-US/docs/Web/HTTP/Cookies), [localStorage](https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage) and [IndexedDB](https://developer.mozilla.org/en-US/docs/Web/API/IndexedDB_API) data will be restored, bringing most web apps to the authenticated state without the need to login again. This means you can continue generating tests from the logged in state.

    npx playwright codegen --load-storage=auth.json github.com/microsoft/playwright

###### [​](#-8 "Direct link to -8")

![github signed in showing use of load storage js](https://user-images.githubusercontent.com/13063165/220927873-9e55fdda-2def-45c1-9a1b-bcc851885f96.png)

#### Use existing userDataDir[​](#use-existing-userdatadir "Direct link to Use existing userDataDir")

Run `codegen` with `--user-data-dir` to set a fixed [user data directory](https://playwright.dev/docs/api/class-browsertype#browser-type-launch-persistent-context-option-user-data-dir) for the browser session. If you create a custom browser user data directory, codegen will use this existing browser profile and have access to any authentication state present in that profile.

warning

[As of Chrome 136, the default user data directory cannot be accessed via automated tooling](https://developer.chrome.com/blog/remote-debugging-port), such as Playwright. You must create a separate user data directory for use in testing.

    npx playwright codegen --user-data-dir=/path/to/your/browser/data/ github.com/microsoft/playwright

Record using custom setup[​](#record-using-custom-setup "Direct link to Record using custom setup")
---------------------------------------------------------------------------------------------------

If you would like to use codegen in some non-standard setup (for example, use [browserContext.route()](/docs/api/class-browsercontext#browser-context-route)), it is possible to call [page.pause()](/docs/api/class-page#page-pause) that will open a separate window with codegen controls.

    const { chromium } = require('@playwright/test');(async () => {  // Make sure to run headed.  const browser = await chromium.launch({ headless: false });  // Setup context however you like.  const context = await browser.newContext({ /* pass any options */ });  await context.route('**/*', route => route.continue());  // Pause the page, and start recording manually.  const page = await context.newPage();  await page.pause();})();

# Touch events (legacy)

Touch events (legacy)
=====================

Introduction[​](#introduction "Direct link to Introduction")
------------------------------------------------------------

Web applications that handle legacy [touch events](https://developer.mozilla.org/en-US/docs/Web/API/Touch_events) to respond to gestures like swipe, pinch, and tap can be tested by manually dispatching [TouchEvent](https://developer.mozilla.org/en-US/docs/Web/API/TouchEvent/TouchEvent)s to the page. The examples below demonstrate how to use [locator.dispatchEvent()](/docs/api/class-locator#locator-dispatch-event) and pass [Touch](https://developer.mozilla.org/en-US/docs/Web/API/Touch) points as arguments.

Note that [locator.dispatchEvent()](/docs/api/class-locator#locator-dispatch-event) does not set [`Event.isTrusted`](https://developer.mozilla.org/en-US/docs/Web/API/Event/isTrusted) property. If your web page relies on it, make sure to disable `isTrusted` check during the test.

### Emulating pan gesture[​](#emulating-pan-gesture "Direct link to Emulating pan gesture")

In the example below, we emulate pan gesture that is expected to move the map. The app under test only uses `clientX/clientY` coordinates of the touch point, so we initialize just that. In a more complex scenario you may need to also set `pageX/pageY/screenX/screenY`, if your app needs them.

    import { test, expect, devices, type Locator } from '@playwright/test';test.use({ ...devices['Pixel 7'] });async function pan(locator: Locator, deltaX?: number, deltaY?: number, steps?: number) {  const { centerX, centerY } = await locator.evaluate((target: HTMLElement) => {    const bounds = target.getBoundingClientRect();    const centerX = bounds.left + bounds.width / 2;    const centerY = bounds.top + bounds.height / 2;    return { centerX, centerY };  });  // Providing only clientX and clientY as the app only cares about those.  const touches = [{    identifier: 0,    clientX: centerX,    clientY: centerY,  }];  await locator.dispatchEvent('touchstart',      { touches, changedTouches: touches, targetTouches: touches });  steps = steps ?? 5;  deltaX = deltaX ?? 0;  deltaY = deltaY ?? 0;  for (let i = 1; i <= steps; i++) {    const touches = [{      identifier: 0,      clientX: centerX + deltaX * i / steps,      clientY: centerY + deltaY * i / steps,    }];    await locator.dispatchEvent('touchmove',        { touches, changedTouches: touches, targetTouches: touches });  }  await locator.dispatchEvent('touchend');}test(`pan gesture to move the map`, async ({ page }) => {  await page.goto('https://www.google.com/maps/place/@37.4117722,-122.0713234,15z',      { waitUntil: 'commit' });  await page.getByRole('button', { name: 'Keep using web' }).click();  await expect(page.getByRole('button', { name: 'Keep using web' })).not.toBeVisible();  // Get the map element.  const met = page.locator('[data-test-id="met"]');  for (let i = 0; i < 5; i++)    await pan(met, 200, 100);  // Ensure the map has been moved.  await expect(met).toHaveScreenshot();});

### Emulating pinch gesture[​](#emulating-pinch-gesture "Direct link to Emulating pinch gesture")

In the example below, we emulate pinch gesture, i.e. two touch points moving closer to each other. It is expected to zoom out the map. The app under test only uses `clientX/clientY` coordinates of touch points, so we initialize just that. In a more complex scenario you may need to also set `pageX/pageY/screenX/screenY`, if your app needs them.

    import { test, expect, devices, type Locator } from '@playwright/test';test.use({ ...devices['Pixel 7'] });async function pinch(locator: Locator,  arg: { deltaX?: number, deltaY?: number, steps?: number, direction?: 'in' | 'out' }) {  const { centerX, centerY } = await locator.evaluate((target: HTMLElement) => {    const bounds = target.getBoundingClientRect();    const centerX = bounds.left + bounds.width / 2;    const centerY = bounds.top + bounds.height / 2;    return { centerX, centerY };  });  const deltaX = arg.deltaX ?? 50;  const steps = arg.steps ?? 5;  const stepDeltaX = deltaX / (steps + 1);  // Two touch points equally distant from the center of the element.  const touches = [    {      identifier: 0,      clientX: centerX - (arg.direction === 'in' ? deltaX : stepDeltaX),      clientY: centerY,    },    {      identifier: 1,      clientX: centerX + (arg.direction === 'in' ? deltaX : stepDeltaX),      clientY: centerY,    },  ];  await locator.dispatchEvent('touchstart',      { touches, changedTouches: touches, targetTouches: touches });  // Move the touch points towards or away from each other.  for (let i = 1; i <= steps; i++) {    const offset = (arg.direction === 'in' ? (deltaX - i * stepDeltaX) : (stepDeltaX * (i + 1)));    const touches = [      {        identifier: 0,        clientX: centerX - offset,        clientY: centerY,      },      {        identifier: 0,        clientX: centerX + offset,        clientY: centerY,      },    ];    await locator.dispatchEvent('touchmove',        { touches, changedTouches: touches, targetTouches: touches });  }  await locator.dispatchEvent('touchend', { touches: [], changedTouches: [], targetTouches: [] });}test(`pinch in gesture to zoom out the map`, async ({ page }) => {  await page.goto('https://www.google.com/maps/place/@37.4117722,-122.0713234,15z',      { waitUntil: 'commit' });  await page.getByRole('button', { name: 'Keep using web' }).click();  await expect(page.getByRole('button', { name: 'Keep using web' })).not.toBeVisible();  // Get the map element.  const met = page.locator('[data-test-id="met"]');  for (let i = 0; i < 5; i++)    await pinch(met, { deltaX: 40, direction: 'in' });  // Ensure the map has been zoomed out.  await expect(met).toHaveScreenshot();});

# Trace viewer

Trace viewer
============

Introduction[​](#introduction "Direct link to Introduction")
------------------------------------------------------------

Playwright Trace Viewer is a GUI tool that helps you explore recorded Playwright traces after the script has run. Traces are a great way for debugging your tests when they fail on CI. You can open traces [locally](#opening-the-trace) or in your browser on [trace.playwright.dev](https://trace.playwright.dev).

Opening Trace Viewer[​](#opening-trace-viewer "Direct link to Opening Trace Viewer")
------------------------------------------------------------------------------------

You can open a saved trace using either the Playwright CLI or in the browser at [trace.playwright.dev](https://trace.playwright.dev). Make sure to add the full path to where your `trace.zip` file is located.

    npx playwright show-trace path/to/trace.zip

### Using [trace.playwright.dev](https://trace.playwright.dev)[​](#using-traceplaywrightdev "Direct link to using-traceplaywrightdev")

[trace.playwright.dev](https://trace.playwright.dev) is a statically hosted variant of the Trace Viewer. You can upload a trace file using drag and drop or via the `Select file` button.

Trace Viewer loads the trace entirely in your browser and does not transmit any data externally.

![Drop Playwright Trace to load](https://user-images.githubusercontent.com/13063165/194577918-b4d45726-2692-4093-8a28-9e73552617ef.png)

### Viewing remote traces[​](#viewing-remote-traces "Direct link to Viewing remote traces")

You can open remote traces directly using its URL. This makes it easy to view the remote trace without having to manually download the file from CI runs, for example.

    npx playwright show-trace https://example.com/trace.zip

When using [trace.playwright.dev](https://trace.playwright.dev), you can also pass the URL of your uploaded trace at some accessible storage (e.g. inside your CI) as a query parameter. CORS (Cross-Origin Resource Sharing) rules might apply.

    https://trace.playwright.dev/?trace=https://demo.playwright.dev/reports/todomvc/data/e6099cadf79aa753d5500aa9508f9d1dbd87b5ee.zip

Recording a trace[​](#recording-a-trace "Direct link to Recording a trace")
---------------------------------------------------------------------------

### Tracing locally[​](#tracing-locally "Direct link to Tracing locally")

To record a trace during development mode set the `--trace` flag to `on` when running your tests. You can also use [UI Mode](/docs/test-ui-mode) for a better developer experience, as it traces each test automatically.

    npx playwright test --trace on

You can then open the HTML report and click on the trace icon to open the trace.

    npx playwright show-report

### Tracing on CI[​](#tracing-on-ci "Direct link to Tracing on CI")

Traces should be run on continuous integration on the first retry of a failed test by setting the `trace: 'on-first-retry'` option in the test configuration file. This will produce a `trace.zip` file for each test that was retried.

*   Test
*   Library

playwright.config.ts

    import { defineConfig } from '@playwright/test';export default defineConfig({  retries: 1,  use: {    trace: 'on-first-retry',  },});

    const browser = await chromium.launch();const context = await browser.newContext();// Start tracing before creating / navigating a page.await context.tracing.start({ screenshots: true, snapshots: true });const page = await context.newPage();await page.goto('https://playwright.dev');// Stop tracing and export it into a zip archive.await context.tracing.stop({ path: 'trace.zip' });

Available options to record a trace:

*   `'on-first-retry'` - Record a trace only when retrying a test for the first time.
*   `'on-all-retries'` - Record traces for all test retries.
*   `'off'` - Do not record a trace.
*   `'on'` - Record a trace for each test. (not recommended as it's performance heavy)
*   `'retain-on-failure'` - Record a trace for each test, but remove it from successful test runs.

You can also use `trace: 'retain-on-failure'` if you do not enable retries but still want traces for failed tests.

There are more granular options available, see [testOptions.trace](/docs/api/class-testoptions#test-options-trace).

If you are not using Playwright as a Test Runner, use the [browserContext.tracing](/docs/api/class-browsercontext#browser-context-tracing) API instead.

Trace Viewer features[​](#trace-viewer-features "Direct link to Trace Viewer features")
---------------------------------------------------------------------------------------

### Actions[​](#actions "Direct link to Actions")

In the Actions tab you can see what locator was used for every action and how long each one took to run. Hover over each action of your test and visually see the change in the DOM snapshot. Go back and forward in time and click an action to inspect and debug. Use the Before and After tabs to visually see what happened before and after the action.

![actions tab in trace viewer](https://github.com/microsoft/playwright/assets/13063165/948b65cd-f0fd-4c7f-8e53-2c632b5a07f1)

**Selecting each action reveals:**

*   Action snapshots
*   Action log
*   Source code location

### Screenshots[​](#screenshots "Direct link to Screenshots")

When tracing with the [screenshots](/docs/api/class-tracing#tracing-start-option-screenshots) option turned on (default), each trace records a screencast and renders it as a film strip. You can hover over the film strip to see a magnified image of for each action and state which helps you easily find the action you want to inspect.

Double click on an action to see the time range for that action. You can use the slider in the timeline to increase the actions selected and these will be shown in the Actions tab and all console logs and network logs will be filtered to only show the logs for the actions selected.

![timeline view in trace viewer](https://github.com/microsoft/playwright/assets/13063165/b04a7d75-54bb-4ab2-9e30-e76f6f74a2c8)

### Snapshots[​](#snapshots "Direct link to Snapshots")

When tracing with the [snapshots](/docs/api/class-tracing#tracing-start-option-snapshots) option turned on (default), Playwright captures a set of complete DOM snapshots for each action. Depending on the type of the action, it will capture:

Type

Description

Before

A snapshot at the time action is called.

Action

A snapshot at the moment of the performed input. This type of snapshot is especially useful when exploring where exactly Playwright clicked.

After

A snapshot after the action.

Here is what the typical Action snapshot looks like:

![action tab in trace viewer](https://github.com/microsoft/playwright/assets/13063165/7168d549-eb0a-4964-9c93-483f03711fa9)

Notice how it highlights both, the DOM Node as well as the exact click position.

### Source[​](#source "Direct link to Source")

When you click on an action in the sidebar, the line of code for that action is highlighted in the source panel.

![showing source code tab in trace viewer](https://github.com/microsoft/playwright/assets/13063165/daa8845d-c250-4923-aa7a-5d040da9adc5)

### Call[​](#call "Direct link to Call")

The call tab shows you information about the action such as the time it took, what locator was used, if in strict mode and what key was used.

![showing call tab in trace viewer](https://github.com/microsoft/playwright/assets/13063165/95498580-f9dd-4932-a123-c37fe7cfc3c2)

### Log[​](#log "Direct link to Log")

See a full log of your test to better understand what Playwright is doing behind the scenes such as scrolling into view, waiting for element to be visible, enabled and stable and performing actions such as click, fill, press etc.

![showing log of tests in trace viewer](https://github.com/microsoft/playwright/assets/13063165/de621461-3bab-4140-b39d-9f02d6672dbf)

### Errors[​](#errors "Direct link to Errors")

If your test fails you will see the error messages for each test in the Errors tab. The timeline will also show a red line highlighting where the error occurred. You can also click on the source tab to see on which line of the source code the error is.

![showing errors in trace viewer](https://github.com/microsoft/playwright/assets/13063165/e9ef77b3-05d1-4df2-852c-981023723d34)

### Console[​](#console "Direct link to Console")

See console logs from the browser as well as from your test. Different icons are displayed to show you if the console log came from the browser or from the test file.

![showing log of tests in trace viewer](https://github.com/microsoft/playwright/assets/13063165/4107c08d-1eaf-421c-bdd4-9dd2aa641d4a)

Double click on an action from your test in the actions sidebar. This will filter the console to only show the logs that were made during that action. Click the _Show all_ button to see all console logs again.

Use the timeline to filter actions, by clicking a start point and dragging to an ending point. The console tab will also be filtered to only show the logs that were made during the actions selected.

### Network[​](#network "Direct link to Network")

The Network tab shows you all the network requests that were made during your test. You can sort by different types of requests, status code, method, request, content type, duration and size. Click on a request to see more information about it such as the request headers, response headers, request body and response body.

![network requests tab in trace viewer](https://github.com/microsoft/playwright/assets/13063165/0a3d1671-8ccd-4f7a-a844-35f5eb37f236)

Double click on an action from your test in the actions sidebar. This will filter the network requests to only show the requests that were made during that action. Click the _Show all_ button to see all network requests again.

Use the timeline to filter actions, by clicking a start point and dragging to an ending point. The network tab will also be filtered to only show the network requests that were made during the actions selected.

### Metadata[​](#metadata "Direct link to Metadata")

Next to the Actions tab you will find the Metadata tab which will show you more information on your test such as the Browser, viewport size, test duration and more.

![meta data in trace viewer](https://github.com/microsoft/playwright/assets/13063165/82ab3d33-1ec9-4b8a-9cf2-30a6e2d59091)

### Attachments[​](#attachments "Direct link to Attachments")

The "Attachments" tab allows you to explore attachments. If you're doing [visual regression testing](/docs/test-snapshots), you'll be able to compare screenshots by examining the image diff, the actual image and the expected image. When you click on the expected image you can use the slider to slide one image over the other so you can easily see the differences in your screenshots.

![attachments tab in trace viewer](https://github.com/microsoft/playwright/assets/13063165/4386178a-5808-4fa8-9436-315350a23b04)

# Videos

Videos
======

Introduction[​](#introduction "Direct link to Introduction")
------------------------------------------------------------

With Playwright you can record videos for your tests.

Record video[​](#record-video "Direct link to Record video")
------------------------------------------------------------

Playwright Test can record videos for your tests, controlled by the `video` option in your Playwright config. By default videos are off.

*   `'off'` - Do not record video.
*   `'on'` - Record video for each test.
*   `'retain-on-failure'` - Record video for each test, but remove all videos from successful test runs.
*   `'on-first-retry'` - Record video only when retrying a test for the first time.

Video files will appear in the test output directory, typically `test-results`. See [testOptions.video](/docs/api/class-testoptions#test-options-video) for advanced video configuration.

Videos are saved upon [browser context](/docs/browser-contexts) closure at the end of a test. If you create a browser context manually, make sure to await [browserContext.close()](/docs/api/class-browsercontext#browser-context-close).

*   Test
*   Library

playwright.config.ts

    import { defineConfig } from '@playwright/test';export default defineConfig({  use: {    video: 'on-first-retry',  },});

    const context = await browser.newContext({ recordVideo: { dir: 'videos/' } });// Make sure to await close, so that videos are saved.await context.close();

You can also specify video size. The video size defaults to the viewport size scaled down to fit 800x800. The video of the viewport is placed in the top-left corner of the output video, scaled down to fit if necessary. You may need to set the viewport size to match your desired video size.

*   Test
*   Library

playwright.config.ts

    import { defineConfig } from '@playwright/test';export default defineConfig({  use: {    video: {      mode: 'on-first-retry',      size: { width: 640, height: 480 }    }  },});

    const context = await browser.newContext({  recordVideo: {    dir: 'videos/',    size: { width: 640, height: 480 },  }});

For multi-page scenarios, you can access the video file associated with the page via the [page.video()](/docs/api/class-page#page-video).

    const path = await page.video().path();

note

Note that the video is only available after the page or browser context is closed.

# Visual comparisons

Visual comparisons
==================

Introduction[​](#introduction "Direct link to Introduction")
------------------------------------------------------------

Playwright Test includes the ability to produce and visually compare screenshots using `await expect(page).toHaveScreenshot()`. On first execution, Playwright test will generate reference screenshots. Subsequent runs will compare against the reference.

example.spec.ts

    import { test, expect } from '@playwright/test';test('example test', async ({ page }) => {  await page.goto('https://playwright.dev');  await expect(page).toHaveScreenshot();});

warning

Browser rendering can vary based on the host OS, version, settings, hardware, power source (battery vs. power adapter), headless mode, and other factors. For consistent screenshots, run tests in the same environment where the baseline screenshots were generated.

Generating screenshots[​](#generating-screenshots "Direct link to Generating screenshots")
------------------------------------------------------------------------------------------

When you run above for the first time, test runner will say:

    Error: A snapshot doesn't exist at example.spec.ts-snapshots/example-test-1-chromium-darwin.png, writing actual.

That's because there was no golden file yet. This method took a bunch of screenshots until two consecutive screenshots matched, and saved the last screenshot to file system. It is now ready to be added to the repository.

The name of the folder with the golden expectations starts with the name of your test file:

    drwxr-xr-x  5 user  group  160 Jun  4 11:46 .drwxr-xr-x  6 user  group  192 Jun  4 11:45 ..-rw-r--r--  1 user  group  231 Jun  4 11:16 example.spec.tsdrwxr-xr-x  3 user  group   96 Jun  4 11:46 example.spec.ts-snapshots

The snapshot name `example-test-1-chromium-darwin.png` consists of a few parts:

*   `example-test-1.png` - an auto-generated name of the snapshot. Alternatively you can specify snapshot name as the first argument of the `toHaveScreenshot()` method:
    
        await expect(page).toHaveScreenshot('landing.png');
    
*   `chromium-darwin` - the browser name and the platform. Screenshots differ between browsers and platforms due to different rendering, fonts and more, so you will need different snapshots for them. If you use multiple projects in your [configuration file](/docs/test-configuration), project name will be used instead of `chromium`.
    

The snapshot name and path can be configured with [testConfig.snapshotPathTemplate](/docs/api/class-testconfig#test-config-snapshot-path-template) in the playwright config.

> Note that `toHaveScreenshot()` also accepts an array of path segments to the snapshot file such as `expect().toHaveScreenshot(['relative', 'path', 'to', 'snapshot.png'])`. However, this path must stay within the snapshots directory for each test file (i.e. `a.spec.js-snapshots`), otherwise it will throw.

Updating screenshots[​](#updating-screenshots "Direct link to Updating screenshots")
------------------------------------------------------------------------------------

Sometimes you need to update the reference screenshot, for example when the page has changed. Do this with the `--update-snapshots` flag.

    npx playwright test --update-snapshots

Options[​](#options "Direct link to Options")
---------------------------------------------

### maxDiffPixels[​](#maxdiffpixels "Direct link to maxDiffPixels")

Playwright Test uses the [pixelmatch](https://github.com/mapbox/pixelmatch) library. You can [pass various options](/docs/api/class-pageassertions#page-assertions-to-have-screenshot-1) to modify its behavior:

example.spec.ts

    import { test, expect } from '@playwright/test';test('example test', async ({ page }) => {  await page.goto('https://playwright.dev');  await expect(page).toHaveScreenshot({ maxDiffPixels: 100 });});

If you'd like to share the default value among all the tests in the project, you can specify it in the playwright config, either globally or per project:

playwright.config.ts

    import { defineConfig } from '@playwright/test';export default defineConfig({  expect: {    toHaveScreenshot: { maxDiffPixels: 100 },  },});

### stylePath[​](#stylepath "Direct link to stylePath")

You can apply a custom stylesheet to your page while taking screenshot. This allows filtering out dynamic or volatile elements, hence improving the screenshot determinism.

screenshot.css

    iframe {  visibility: hidden;}

example.spec.ts

    import { test, expect } from '@playwright/test';test('example test', async ({ page }) => {  await page.goto('https://playwright.dev');  await expect(page).toHaveScreenshot({ stylePath: path.join(__dirname, 'screenshot.css') });});

If you'd like to share the default value among all the tests in the project, you can specify it in the playwright config, either globally or per project:

playwright.config.ts

    import { defineConfig } from '@playwright/test';export default defineConfig({  expect: {    toHaveScreenshot: {      stylePath: './screenshot.css'    },  },});

Non-image snapshots[​](#non-image-snapshots "Direct link to Non-image snapshots")
---------------------------------------------------------------------------------

Apart from screenshots, you can use `expect(value).toMatchSnapshot(snapshotName)` to compare text or arbitrary binary data. Playwright Test auto-detects the content type and uses the appropriate comparison algorithm.

Here we compare text content against the reference.

example.spec.ts

    import { test, expect } from '@playwright/test';test('example test', async ({ page }) => {  await page.goto('https://playwright.dev');  expect(await page.textContent('.hero__title')).toMatchSnapshot('hero.txt');});

Snapshots are stored next to the test file, in a separate directory. For example, `my.spec.ts` file will produce and store snapshots in the `my.spec.ts-snapshots` directory. You should commit this directory to your version control (e.g. `git`), and review any changes to it.

# WebView2

WebView2
========

Introduction[​](#introduction "Direct link to Introduction")
------------------------------------------------------------

The following will explain how to use Playwright with [Microsoft Edge WebView2](https://docs.microsoft.com/en-us/microsoft-edge/webview2/). WebView2 is a WinForms control, which will use Microsoft Edge under the hood to render web content. It is a part of the Microsoft Edge browser and is available on Windows 10 and Windows 11. Playwright can be used to automate WebView2 applications and can be used to test web content in WebView2. For connecting to WebView2, Playwright uses [browserType.connectOverCDP()](/docs/api/class-browsertype#browser-type-connect-over-cdp) which connects to it via the Chrome DevTools Protocol (CDP).

Overview[​](#overview "Direct link to Overview")
------------------------------------------------

A WebView2 control can be instructed to listen to incoming CDP connections by setting either the `WEBVIEW2_ADDITIONAL_BROWSER_ARGUMENTS` environment variable with `--remote-debugging-port=9222` or calling [EnsureCoreWebView2Async](https://docs.microsoft.com/en-us/dotnet/api/microsoft.web.webview2.wpf.webview2.ensurecorewebview2async?view=webview2-dotnet-1.0.1343.22) with the `--remote-debugging-port=9222` argument. This will start the WebView2 process with the Chrome DevTools Protocol enabled which allows the automation by Playwright. 9222 is an example port in this case, but any other unused port can be used as well.

    await this.webView.EnsureCoreWebView2Async(await CoreWebView2Environment.CreateAsync(null, null, new CoreWebView2EnvironmentOptions(){  AdditionalBrowserArguments = "--remote-debugging-port=9222",})).ConfigureAwait(false);

Once your application with the WebView2 control is running, you can connect to it via Playwright:

    const browser = await playwright.chromium.connectOverCDP('http://localhost:9222');const context = browser.contexts()[0];const page = context.pages()[0];

To ensure that the WebView2 control is ready, you can wait for the [`CoreWebView2InitializationCompleted`](https://learn.microsoft.com/en-us/dotnet/api/microsoft.web.webview2.wpf.webview2.corewebview2initializationcompleted?view=webview2-dotnet-1.0.1343.22) event:

    this.webView.CoreWebView2InitializationCompleted += (_, e) =>{    if (e.IsSuccess)    {        Console.WriteLine("WebView2 initialized");    }};

Writing and running tests[​](#writing-and-running-tests "Direct link to Writing and running tests")
---------------------------------------------------------------------------------------------------

By default, the WebView2 control will use the same user data directory for all instances. This means that if you run multiple tests in parallel, they will interfere with each other. To avoid this, you should set the `WEBVIEW2_USER_DATA_FOLDER` environment variable (or use [WebView2.EnsureCoreWebView2Async Method](https://docs.microsoft.com/en-us/dotnet/api/microsoft.web.webview2.wpf.webview2.ensurecorewebview2async?view=webview2-dotnet-1.0.1343.22)) to a different folder for each test. This will make sure that each test runs in its own user data directory.

Using the following, Playwright will run your WebView2 application as a sub-process, assign a unique user data directory to it and provide the [Page](/docs/api/class-page "Page") instance to your test:

webView2Test.ts

    import { test as base } from '@playwright/test';import fs from 'fs';import os from 'os';import path from 'path';import childProcess from 'child_process';const EXECUTABLE_PATH = path.join(    __dirname,    '../../webview2-app/bin/Debug/net8.0-windows/webview2.exe',);export const test = base.extend({  browser: async ({ playwright }, use, testInfo) => {    const cdpPort = 10000 + testInfo.workerIndex;    // Make sure that the executable exists and is executable    fs.accessSync(EXECUTABLE_PATH, fs.constants.X_OK);    const userDataDir = path.join(        fs.realpathSync.native(os.tmpdir()),        `playwright-webview2-tests/user-data-dir-${testInfo.workerIndex}`,    );    const webView2Process = childProcess.spawn(EXECUTABLE_PATH, [], {      shell: true,      env: {        ...process.env,        WEBVIEW2_ADDITIONAL_BROWSER_ARGUMENTS: `--remote-debugging-port=${cdpPort}`,        WEBVIEW2_USER_DATA_FOLDER: userDataDir,      }    });    await new Promise<void>(resolve => webView2Process.stdout.on('data', data => {      if (data.toString().includes('WebView2 initialized'))        resolve();    }));    const browser = await playwright.chromium.connectOverCDP(`http://127.0.0.1:${cdpPort}`);    await use(browser);    await browser.close();    childProcess.execSync(`taskkill /pid ${webView2Process.pid} /T /F`);    fs.rmdirSync(userDataDir, { recursive: true });  },  context: async ({ browser }, use) => {    const context = browser.contexts()[0];    await use(context);  },  page: async ({ context }, use) => {    const page = context.pages()[0];    await use(page);  },});export { expect } from '@playwright/test';

example.spec.ts

    import { test, expect } from './webView2Test';test('test WebView2', async ({ page }) => {  await page.goto('https://playwright.dev');  const getStarted = page.getByText('Get Started');  await expect(getStarted).toBeVisible();});

Debugging[​](#debugging "Direct link to Debugging")
---------------------------------------------------

Inside your webview2 control, you can just right-click to open the context menu and select "Inspect" to open the DevTools or press F12. You can also use the [WebView2.CoreWebView2.OpenDevToolsWindow](https://learn.microsoft.com/en-us/dotnet/api/microsoft.web.webview2.core.corewebview2.opendevtoolswindow?view=webview2-dotnet-1.0.1462.37) method to open the DevTools programmatically.

For debugging tests, see the Playwright [Debugging guide](/docs/debug).

# Migrating from Protractor

Migrating from Protractor
=========================

Migration Principles[​](#migration-principles "Direct link to Migration Principles")
------------------------------------------------------------------------------------

*   No need for "webdriver-manager" / Selenium.
*   Protractor’s [ElementFinder](https://www.protractortest.org/#/api?view=ElementFinder) ⇄ [Playwright Test Locator](/docs/api/class-locator)
*   Protractor’s [`waitForAngular`](https://www.protractortest.org/#/api?view=ProtractorBrowser.prototype.waitForAngular) ⇄ Playwright Test [auto-waiting](/docs/actionability)
*   Don’t forget to await in Playwright Test

Cheat Sheet[​](#cheat-sheet "Direct link to Cheat Sheet")
---------------------------------------------------------

Protractor

Playwright Test

`element(by.buttonText('...'))`

`page.locator('button, input[type="button"], input[type="submit"] >> text="..."')`

`element(by.css('...'))`

`page.locator('...')`

`element(by.cssContainingText('..1..', '..2..'))`

`page.locator('..1.. >> text=..2..')`

`element(by.id('...'))`

`page.locator('#...')`

`element(by.model('...'))`

`page.locator('[ng-model="..."]')`

`element(by.repeater('...'))`

`page.locator('[ng-repeat="..."]')`

`element(by.xpath('...'))`

`page.locator('xpath=...')`

`element.all`

`page.locator`

`browser.get(url)`

`await page.goto(url)`

`browser.getCurrentUrl()`

`page.url()`

Example[​](#example "Direct link to Example")
---------------------------------------------

Protractor:

    describe('angularjs homepage todo list', function() {  it('should add a todo', function() {    browser.get('https://angularjs.org');    element(by.model('todoList.todoText')).sendKeys('first test');    element(by.css('[value="add"]')).click();    const todoList = element.all(by.repeater('todo in todoList.todos'));    expect(todoList.count()).toEqual(3);    expect(todoList.get(2).getText()).toEqual('first test');    // You wrote your first test, cross it off the list    todoList.get(2).element(by.css('input')).click();    const completedAmount = element.all(by.css('.done-true'));    expect(completedAmount.count()).toEqual(2);  });});

Line-by-line migration to Playwright Test:

    const { test, expect } = require('@playwright/test'); // 1test.describe('angularjs homepage todo list', () => {  test('should add a todo', async ({ page }) => { // 2, 3    await page.goto('https://angularjs.org'); // 4    await page.locator('[ng-model="todoList.todoText"]').fill('first test');    await page.locator('[value="add"]').click();    const todoList = page.locator('[ng-repeat="todo in todoList.todos"]'); // 5    await expect(todoList).toHaveCount(3);    await expect(todoList.nth(2)).toHaveText('first test', {      useInnerText: true,    });    // You wrote your first test, cross it off the list    await todoList.nth(2).getByRole('textbox').click();    const completedAmount = page.locator('.done-true');    await expect(completedAmount).toHaveCount(2);  });});

Migration highlights (see inline comments in the Playwright Test code snippet):

1.  Each Playwright Test file has explicit import of the `test` and `expect` functions
2.  Test function is marked with `async`
3.  Playwright Test is given a `page` as one of its parameters. This is one of the many [useful fixtures](/docs/api/class-fixtures) in Playwright Test.
4.  Almost all Playwright calls are prefixed with `await`
5.  Locator creation with [page.locator()](/docs/api/class-page#page-locator) is one of the few methods that is sync.

Polyfilling `waitForAngular`[​](#polyfilling-waitforangular "Direct link to polyfilling-waitforangular")
--------------------------------------------------------------------------------------------------------

Playwright Test has built-in [auto-waiting](/docs/actionability) that makes protractor's [`waitForAngular`](https://www.protractortest.org/#/api?view=ProtractorBrowser.prototype.waitForAngular) unneeded in general case.

However, it might come handy in some edge cases. Here's how to polyfill `waitForAngular` function in Playwright Test:

1.  Make sure you have protractor installed in your package.json
    
2.  Polyfill function
    
        async function waitForAngular(page) {  const clientSideScripts = require('protractor/built/clientsidescripts.js');  async function executeScriptAsync(page, script, ...scriptArgs) {    await page.evaluate(`      new Promise((resolve, reject) => {        const callback = (errMessage) => {          if (errMessage)            reject(new Error(errMessage));          else            resolve();        };        (function() {${script}}).apply(null, [...${JSON.stringify(scriptArgs)}, callback]);      })    `);  }  await executeScriptAsync(page, clientSideScripts.waitForAngular, '');}
    
    If you don't want to keep a version protractor around, you can also use this simpler approach using this function (only works for Angular 2+):
    
        async function waitForAngular(page) {  await page.evaluate(async () => {    // @ts-expect-error    if (window.getAllAngularTestabilities) {      // @ts-expect-error      await Promise.all(window.getAllAngularTestabilities().map(whenStable));      // @ts-expect-error      async function whenStable(testability) {        return new Promise(res => testability.whenStable(res));      }    }  });}
    
3.  Polyfill usage
    
        const page = await context.newPage();await page.goto('https://example.org');await waitForAngular(page);
    

Playwright Test Super Powers[​](#playwright-test-super-powers "Direct link to Playwright Test Super Powers")
------------------------------------------------------------------------------------------------------------

Once you're on Playwright Test, you get a lot!

*   Full zero-configuration TypeScript support
*   Run tests across **all web engines** (Chrome, Firefox, Safari) on **any popular operating system** (Windows, macOS, Ubuntu)
*   Full support for multiple origins, [(i)frames](/docs/api/class-frame), [tabs and contexts](/docs/pages)
*   Run tests in parallel across multiple browsers
*   Built-in test [artifact collection](/docs/test-use-options#recording-options)

You also get all these ✨ awesome tools ✨ that come bundled with Playwright Test:

*   [Playwright Inspector](/docs/debug)
*   [Playwright Test Code generation](/docs/codegen-intro)
*   [Playwright Tracing](/docs/trace-viewer) for post-mortem debugging

Further Reading[​](#further-reading "Direct link to Further Reading")
---------------------------------------------------------------------

Learn more about Playwright Test runner:

*   [Getting Started](/docs/intro)
*   [Fixtures](/docs/test-fixtures)
*   [Locators](/docs/locators)
*   [Assertions](/docs/test-assertions)
*   [Auto-waiting](/docs/actionability)

# Migrating from Puppeteer

Migrating from Puppeteer
========================

Migration Principles[​](#migration-principles "Direct link to Migration Principles")
------------------------------------------------------------------------------------

This guide describes migration to [Playwright Library](/docs/library) and [Playwright Test](/docs/intro) from Puppeteer. The APIs have similarities, but Playwright offers much more possibilities for web testing and cross-browser automation.

*   Most Puppeteer APIs can be used as is
*   The use of [ElementHandle](/docs/api/class-elementhandle "ElementHandle") is discouraged, use [Locator](/docs/api/class-locator "Locator") objects and web-first assertions instead.
*   Playwright is cross-browser
*   You probably don't need explicit wait

Cheat Sheet[​](#cheat-sheet "Direct link to Cheat Sheet")
---------------------------------------------------------

Puppeteer

Playwright Library

`await puppeteer.launch()`

`await playwright.chromium.launch()`

`puppeteer.launch({product: 'firefox'})`

`await playwright.firefox.launch()`

WebKit is not supported by Puppeteer

`await playwright.webkit.launch()`

`await browser.createIncognitoBrowserContext(...)`

`await browser.newContext(...)`

`await page.setViewport(...)`

`await page.setViewportSize(...)`

`await page.waitForXPath(XPathSelector)`

`await page.waitForSelector(XPathSelector)`

`await page.waitForNetworkIdle(...)`

`await page.waitForLoadState('networkidle')`

`await page.$eval(...)`

[Assertions](/docs/test-assertions) can often be used instead to verify text, attribute, class...

`await page.$(...)`

Discouraged, use [Locators](/docs/api/class-locator) instead

`await page.$x(xpath_selector)`

Discouraged, use [Locators](/docs/api/class-locator) instead

No methods dedicated to checkbox or radio input

`await page.locator(selector).check()`  
`await page.locator(selector).uncheck()`

`await page.click(selector)`

`await page.locator(selector).click()`

`await page.focus(selector)`

`await page.locator(selector).focus()`

`await page.hover(selector)`

`await page.locator(selector).hover()`

`await page.select(selector, values)`

`await page.locator(selector).selectOption(values)`

`await page.tap(selector)`

`await page.locator(selector).tap()`

`await page.type(selector, ...)`

`await page.locator(selector).fill(...)`

`await page.waitForFileChooser(...)`  
`await elementHandle.uploadFile(...)`

`await page.locator(selector).setInputFiles(...)`

`await page.cookies([...urls])`

`await browserContext.cookies([urls])`

`await page.deleteCookie(...cookies)`

`await browserContext.clearCookies()`

`await page.setCookie(...cookies)`

`await browserContext.addCookies(cookies)`

`page.on(...)`

`page.on(...)`  
In order to intercept and mutate requests, see [page.route()](/docs/api/class-page#page-route)

`page.waitForNavigation` and `page.waitForSelector` remain, but in many cases will not be necessary due to [auto-waiting](/docs/actionability).

The use of [ElementHandle](/docs/api/class-elementhandle "ElementHandle") is discouraged, use [Locator](/docs/api/class-locator "Locator") objects and web-first assertions instead.

Locators are the central piece of Playwright's auto-waiting and retry-ability. Locators are strict. This means that all operations on locators that imply some target DOM element will throw an exception if more than one element matches a given selector.

Examples[​](#examples "Direct link to Examples")
------------------------------------------------

### Automation example[​](#automation-example "Direct link to Automation example")

Puppeteer:

    const puppeteer = require('puppeteer');(async () => {  const browser = await puppeteer.launch();  const page = await browser.newPage();  await page.setViewport({ width: 1280, height: 800 });  await page.goto('https://playwright.dev/', {    waitUntil: 'networkidle2',  });  await page.screenshot({ path: 'example.png' });  await browser.close();})();

Line-by-line migration to Playwright:

    const { chromium } = require('playwright'); // 1(async () => {  const browser = await chromium.launch();  const page = await browser.newPage(); // 2  await page.setViewportSize({ width: 1280, height: 800 }); // 3  await page.goto('https://playwright.dev/', {    waitUntil: 'networkidle', // 4  });  await page.screenshot({ path: 'example.png' });  await browser.close();})();

Migration highlights (see inline comments in the Playwright code snippet):

1.  Each Playwright Library file has explicit import of `chromium`. Other browsers `webkit` or `firefox` can be used.
2.  For browser state isolation, consider [browser contexts](/docs/browser-contexts)
3.  `setViewport` becomes `setViewportSize`
4.  `networkidle2` becomes `networkidle`. Please note that in most cases it is not useful, thanks to auto-waiting.

### Test example[​](#test-example "Direct link to Test example")

Puppeteer with Jest:

    import puppeteer from 'puppeteer';describe('Playwright homepage', () => {  let browser;  let page;  beforeAll(async () => {    browser = await puppeteer.launch();    page = await browser.newPage();  });  it('contains hero title', async () => {    await page.goto('https://playwright.dev/');    await page.waitForSelector('.hero__title');    const text = await page.$eval('.hero__title', e => e.textContent);    expect(text).toContain('Playwright enables reliable end-to-end testing'); // 5  });  afterAll(() => browser.close());});

Line-by-line migration to Playwright Test:

    import { test, expect } from '@playwright/test'; // 1test.describe('Playwright homepage', () => {  test('contains hero title', async ({ page }) => { // 2, 3    await page.goto('https://playwright.dev/');    const titleLocator = page.locator('.hero__title'); // 4    await expect(titleLocator).toContainText( // 5        'Playwright enables reliable end-to-end testing'    );  });});

1.  Each Playwright Test file has explicit import of the `test` and `expect` functions
2.  Test function is marked with `async`
3.  Playwright Test is given a `page` as one of its parameters. This is one of the many [useful fixtures](/docs/api/class-fixtures) in Playwright Test. Playwright Test creates an isolated [Page](/docs/api/class-page "Page") object for each test. However, if you'd like to reuse a single [Page](/docs/api/class-page "Page") object between multiple tests, you can create your own in [test.beforeAll()](/docs/api/class-test#test-before-all) and close it in [test.afterAll()](/docs/api/class-test#test-after-all).
4.  Locator creation with [page.locator()](/docs/api/class-page#page-locator) is one of the few methods that is sync.
5.  Use [assertions](/docs/test-assertions) to verify the state instead of `page.$eval()`.

Testing[​](#testing "Direct link to Testing")
---------------------------------------------

To improve testing, it is advised to use [Locators](/docs/api/class-locator) and web-first [Assertions](/docs/test-assertions). See [Writing Tests](/docs/writing-tests)

It is common with Puppeteer to use `page.evaluate()` or `page.$eval()` to inspect an [ElementHandle](/docs/api/class-elementhandle "ElementHandle") and extract the value of text content, attribute, class... Web-first [Assertions](/docs/test-assertions) offers several matchers for this purpose, it is more reliable and readable.

[Playwright Test](/docs/intro) is our first-party recommended test runner to be used with Playwright. It provides several features like Page Object Model, parallelism, fixtures or reporters.

Playwright Test Super Powers[​](#playwright-test-super-powers "Direct link to Playwright Test Super Powers")
------------------------------------------------------------------------------------------------------------

Once you're on Playwright Test, you get a lot!

*   Full zero-configuration TypeScript support
*   Run tests across **all web engines** (Chrome, Firefox, Safari) on **any popular operating system** (Windows, macOS, Ubuntu)
*   Full support for multiple origins, [(i)frames](/docs/api/class-frame), [tabs and contexts](/docs/pages)
*   Run tests in isolation in parallel across multiple browsers
*   Built-in test [artifact collection](/docs/test-use-options#recording-options)

You also get all these ✨ awesome tools ✨ that come bundled with Playwright Test:

*   [Playwright Inspector](/docs/debug)
*   [Playwright Test Code generation](/docs/codegen-intro)
*   [Playwright Tracing](/docs/trace-viewer) for post-mortem debugging

Further Reading[​](#further-reading "Direct link to Further Reading")
---------------------------------------------------------------------

Learn more about Playwright Test runner:

*   [Getting Started](/docs/intro)
*   [Fixtures](/docs/test-fixtures)
*   [Locators](/docs/locators)
*   [Assertions](/docs/test-assertions)
*   [Auto-waiting](/docs/actionability)

# Migrating from Testing Library

Migrating from Testing Library
==============================

Migration principles[​](#migration-principles "Direct link to Migration principles")
------------------------------------------------------------------------------------

This guide describes migration to Playwright's [Experimental Component Testing](/docs/test-components) from [DOM Testing Library](https://testing-library.com/docs/dom-testing-library/intro/), [React Testing Library](https://testing-library.com/docs/react-testing-library/intro/), [Vue Testing Library](https://testing-library.com/docs/vue-testing-library/intro) and [Svelte Testing Library](https://testing-library.com/docs/svelte-testing-library/intro).

note

If you use DOM Testing Library in the browser (for example, you bundle end-to-end tests with webpack), you can switch directly to Playwright Test. Examples below are focused on component tests, but for end-to-end test you just need to replace `await mount` with `await page.goto('http://localhost:3000/')` to open the page under test.

Cheat Sheet[​](#cheat-sheet "Direct link to Cheat Sheet")
---------------------------------------------------------

Testing Library

Playwright

[screen](https://testing-library.com/docs/queries/about#screen)

[page](/docs/api/class-page) and [component](/docs/api/class-locator)

[queries](https://testing-library.com/docs/queries/about)

[locators](/docs/locators)

[async helpers](https://testing-library.com/docs/dom-testing-library/api-async)

[assertions](/docs/test-assertions)

[user events](https://testing-library.com/docs/user-event/intro)

[actions](/docs/api/class-locator)

`await user.click(screen.getByText('Click me'))`

`await component.getByText('Click me').click()`

`await user.click(await screen.findByText('Click me'))`

`await component.getByText('Click me').click()`

`await user.type(screen.getByLabelText('Password'), 'secret')`

`await component.getByLabel('Password').fill('secret')`

`expect(screen.getByLabelText('Password')).toHaveValue('secret')`

`await expect(component.getByLabel('Password')).toHaveValue('secret')`

`screen.getByRole('button', { pressed: true })`

`component.getByRole('button', { pressed: true })`

`screen.getByLabelText('...')`

`component.getByLabel('...')`

`screen.queryByPlaceholderText('...')`

`component.getByPlaceholder('...')`

`screen.findByText('...')`

`component.getByText('...')`

`screen.getByTestId('...')`

`component.getByTestId('...')`

`render(<Component />);`

`mount(<Component />);`

`const { unmount } = render(<Component />);`

`const { unmount } = await mount(<Component />);`

`const { rerender } = render(<Component />);`

`const { update } = await mount(<Component />);`

Example[​](#example "Direct link to Example")
---------------------------------------------

Testing Library:

    import React from 'react';import { render, screen } from '@testing-library/react';import userEvent from '@testing-library/user-event';test('sign in', async () => {  // Setup the page.  const user = userEvent.setup();  render(<SignInPage />);  // Perform actions.  await user.type(screen.getByLabelText('Username'), 'John');  await user.type(screen.getByLabelText('Password'), 'secret');  await user.click(screen.getByRole('button', { name: 'Sign in' }));  // Verify signed in state by waiting until "Welcome" message appears.  expect(await screen.findByText('Welcome, John')).toBeInTheDocument();});

Line-by-line migration to Playwright Test:

    const { test, expect } = require('@playwright/experimental-ct-react'); // 1test('sign in', async ({ mount }) => { // 2  // Setup the page.  const component = await mount(<SignInPage />); // 3  // Perform actions.  await component.getByLabel('Username').fill('John'); // 4  await component.getByLabel('Password').fill('secret');  await component.getByRole('button', { name: 'Sign in' }).click();  // Verify signed in state by waiting until "Welcome" message appears.  await expect(component.getByText('Welcome, John')).toBeVisible(); // 5});

Migration highlights (see inline comments in the Playwright Test code snippet):

1.  Import everything from `@playwright/experimental-ct-react` (or -vue, -svelte) for component tests, or from `@playwright/test` for end-to-end tests.
2.  Test function is given a `page` that is isolated from other tests, and `mount` that renders a component in this page. These are two of the [useful fixtures](/docs/api/class-fixtures) in Playwright Test.
3.  Replace `render` with `mount` that returns a [component locator](/docs/locators).
4.  Use locators created with [locator.locator()](/docs/api/class-locator#locator-locator) or [page.locator()](/docs/api/class-page#page-locator) to perform most of the actions.
5.  Use [assertions](/docs/test-assertions) to verify the state.

Migrating queries[​](#migrating-queries "Direct link to Migrating queries")
---------------------------------------------------------------------------

All queries like `getBy...`, `findBy...`, `queryBy...` and their multi-element counterparts are replaced with `component.getBy...` locators. Locators always auto-wait and retry when needed, so you don't have to worry about choosing the right method. When you want to do a [list operation](/docs/locators#lists), e.g. assert a list of texts, Playwright automatically performs multi-element operations.

Replacing `waitFor`[​](#replacing-waitfor "Direct link to replacing-waitfor")
-----------------------------------------------------------------------------

Playwright includes [assertions](/docs/test-assertions) that automatically wait for the condition, so you don't usually need an explicit `waitFor`/`waitForElementToBeRemoved` call.

    // Testing Libraryawait waitFor(() => {  expect(getByText('the lion king')).toBeInTheDocument();});await waitForElementToBeRemoved(() => queryByText('the mummy'));// Playwrightawait expect(page.getByText('the lion king')).toBeVisible();await expect(page.getByText('the mummy')).toBeHidden();

When you cannot find a suitable assertion, use [`expect.poll`](/docs/test-assertions#expectpoll) instead.

    await expect.poll(async () => {  const response = await page.request.get('https://api.example.com');  return response.status();}).toBe(200);

Replacing `within`[​](#replacing-within "Direct link to replacing-within")
--------------------------------------------------------------------------

You can create a locator inside another locator with [locator.locator()](/docs/api/class-locator#locator-locator) method.

    // Testing Libraryconst messages = screen.getByTestId('messages');const helloMessage = within(messages).getByText('hello');// Playwrightconst messages = component.getByTestId('messages');const helloMessage = messages.getByText('hello');

Playwright Test Super Powers[​](#playwright-test-super-powers "Direct link to Playwright Test Super Powers")
------------------------------------------------------------------------------------------------------------

Once you're on Playwright Test, you get a lot!

*   Full zero-configuration TypeScript support
*   Run tests across **all web engines** (Chrome, Firefox, Safari) on **any popular operating system** (Windows, macOS, Ubuntu)
*   Full support for multiple origins, [(i)frames](/docs/api/class-frame), [tabs and contexts](/docs/pages)
*   Run tests in isolation in parallel across multiple browsers
*   Built-in test [artifact collection](/docs/test-use-options#recording-options)

You also get all these ✨ awesome tools ✨ that come bundled with Playwright Test:

*   [Visual Studio Code integration](/docs/getting-started-vscode)
*   [UI mode](/docs/test-ui-mode) for debugging tests with a time travel experience complete with watch mode.
*   [Playwright Inspector](/docs/debug#playwright-inspector)
*   [Playwright Test Code generation](/docs/codegen-intro)
*   [Playwright Tracing](/docs/trace-viewer) for post-mortem debugging

Further Reading[​](#further-reading "Direct link to Further Reading")
---------------------------------------------------------------------

Learn more about Playwright Test runner:

*   [Getting Started](/docs/intro)
*   [Experimental Component Testing](/docs/test-components)
*   [Locators](/docs/locators)
*   [Assertions](/docs/test-assertions)
*   [Auto-waiting](/docs/actionability)

# Docker

Docker
======

Introduction[​](#introduction "Direct link to Introduction")
------------------------------------------------------------

[Dockerfile.noble](https://github.com/microsoft/playwright/blob/main/utils/docker/Dockerfile.noble "Dockerfile.noble") can be used to run Playwright scripts in Docker environment. This image includes the [Playwright browsers](/docs/browsers#install-browsers) and [browser system dependencies](/docs/browsers#install-system-dependencies). The Playwright package/dependency is not included in the image and should be installed separately.

Usage[​](#usage "Direct link to Usage")
---------------------------------------

This Docker image is published to [Microsoft Artifact Registry](https://mcr.microsoft.com/en-us/product/playwright/about "Microsoft Artifact Registry").

info

This Docker image is intended to be used for testing and development purposes only. It is not recommended to use this Docker image to visit untrusted websites.

### Pull the image[​](#pull-the-image "Direct link to Pull the image")

    docker pull mcr.microsoft.com/playwright:v1.57.0-noble

### Run the image[​](#run-the-image "Direct link to Run the image")

By default, the Docker image will use the `root` user to run the browsers. This will disable the Chromium sandbox which is not available with root. If you run trusted code (e.g. End-to-end tests) and want to avoid the hassle of managing separate user then the root user may be fine. For web scraping or crawling, we recommend to create a separate user inside the Docker container and use the seccomp profile.

#### End-to-end tests[​](#end-to-end-tests "Direct link to End-to-end tests")

On trusted websites, you can avoid creating a separate user and use root for it since you trust the code which will run on the browsers.

    docker run -it --rm --ipc=host mcr.microsoft.com/playwright:v1.57.0-noble /bin/bash

#### Crawling and scraping[​](#crawling-and-scraping "Direct link to Crawling and scraping")

On untrusted websites, it's recommended to use a separate user for launching the browsers in combination with the seccomp profile. Inside the container or if you are using the Docker image as a base image you have to use `adduser` for it.

    docker run -it --rm --ipc=host --user pwuser --security-opt seccomp=seccomp_profile.json mcr.microsoft.com/playwright:v1.57.0-noble /bin/bash

[`seccomp_profile.json`](https://github.com/microsoft/playwright/blob/main/utils/docker/seccomp_profile.json) is needed to run Chromium with sandbox. This is a [default Docker seccomp profile](https://github.com/docker/engine/blob/d0d99b04cf6e00ed3fc27e81fc3d94e7eda70af3/profiles/seccomp/default.json) with extra user namespace cloning permissions:

    {  "comment": "Allow create user namespaces",  "names": [    "clone",    "setns",    "unshare"  ],  "action": "SCMP_ACT_ALLOW",  "args": [],  "includes": {},  "excludes": {}}

### Recommended Docker Configuration[​](#recommended-docker-configuration "Direct link to Recommended Docker Configuration")

When running Playwright in Docker, the following configuration is recommended:

1.  **Using [`--init`](https://docs.docker.com/reference/cli/docker/container/run/#init)** Docker flag is recommended to avoid special treatment for processes with PID=1. This is a common reason for zombie processes.
2.  **Using `--ipc=host`** is recommended when using Chromium. Without it, Chromium can run out of memory and crash. Learn more about this option in [Docker docs](https://docs.docker.com/reference/cli/docker/container/run/#ipc).
3.  **If seeing weird errors when launching Chromium**, try running your container with `docker run --cap-add=SYS_ADMIN` when developing locally.

### Using on CI[​](#using-on-ci "Direct link to Using on CI")

See our [Continuous Integration guides](/docs/ci) for sample configs.

### Remote Connection[​](#remote-connection "Direct link to Remote Connection")

You can run Playwright Server in Docker while keeping your tests running on the host system or another machine. This is useful for running tests on unsupported Linux distributions or remote execution scenarios.

#### Running the Playwright Server[​](#running-the-playwright-server "Direct link to Running the Playwright Server")

Start the Playwright Server in Docker:

    docker run -p 3000:3000 --rm --init -it --workdir /home/pwuser --user pwuser mcr.microsoft.com/playwright:v1.57.0-noble /bin/sh -c "npx -y playwright@1.57.0 run-server --port 3000 --host 0.0.0.0"

#### Connecting to the Server[​](#connecting-to-the-server "Direct link to Connecting to the Server")

There are two ways to connect to the remote Playwright server:

1.  Using environment variable with `@playwright/test`:

    PW_TEST_CONNECT_WS_ENDPOINT=ws://127.0.0.1:3000/ npx playwright test

2.  Using the [browserType.connect()](/docs/api/class-browsertype#browser-type-connect) API for other applications:

    const browser = await playwright['chromium'].connect('ws://127.0.0.1:3000/');

#### Network Configuration[​](#network-configuration "Direct link to Network Configuration")

If you need to access local servers from within the Docker container:

    docker run --add-host=hostmachine:host-gateway -p 3000:3000 --rm --init -it --workdir /home/pwuser --user pwuser mcr.microsoft.com/playwright:v1.57.0-noble /bin/sh -c "npx -y playwright@1.57.0 run-server --port 3000 --host 0.0.0.0"

This makes `hostmachine` point to the host's localhost. Your tests should use `hostmachine` instead of `localhost` when accessing local servers.

note

When running tests remotely, ensure the Playwright version in your tests matches the version running in the Docker container.

Image tags[​](#image-tags "Direct link to Image tags")
------------------------------------------------------

See [all available image tags](https://mcr.microsoft.com/en-us/product/playwright/about "all available image tags").

We currently publish images with the following tags:

*   `:v1.57.0` - Playwright v1.57.0 release docker image based on Ubuntu 24.04 LTS (Noble Numbat).
*   `:v1.57.0-noble` - Playwright v1.57.0 release docker image based on Ubuntu 24.04 LTS (Noble Numbat).
*   `:v1.57.0-jammy` - Playwright v1.57.0 release docker image based on Ubuntu 22.04 LTS (Jammy Jellyfish).

note

It is recommended to always pin your Docker image to a specific version if possible. If the Playwright version in your Docker image does not match the version in your project/tests, Playwright will be unable to locate browser executables.

### Base images[​](#base-images "Direct link to Base images")

We currently publish images based on the following [Ubuntu](https://hub.docker.com/_/ubuntu) versions:

*   **Ubuntu 24.04 LTS** (Noble Numbat), image tags include `noble`
*   **Ubuntu 22.04 LTS** (Jammy Jellyfish), image tags include `jammy`

#### Alpine[​](#alpine "Direct link to Alpine")

Browser builds for Firefox and WebKit are built for the [glibc](https://en.wikipedia.org/wiki/Glibc) library. Alpine Linux and other distributions that are based on the [musl](https://en.wikipedia.org/wiki/Musl) standard library are not supported.

Build your own image[​](#build-your-own-image "Direct link to Build your own image")
------------------------------------------------------------------------------------

To run Playwright inside Docker, you need to have Node.js, [Playwright browsers](/docs/browsers#install-browsers) and [browser system dependencies](/docs/browsers#install-system-dependencies) installed. See the following Dockerfile:

    FROM node:20-bookwormRUN npx -y playwright@1.57.0 install --with-deps

# Continuous Integration

Continuous Integration
======================

Introduction[​](#introduction "Direct link to Introduction")
------------------------------------------------------------

Playwright tests can be executed in CI environments. We have created sample configurations for common CI providers.

3 steps to get your tests running on CI:

1.  **Ensure CI agent can run browsers**: Use [our Docker image](/docs/docker) in Linux agents or install your dependencies using the [CLI](/docs/browsers#install-system-dependencies).
    
2.  **Install Playwright**:
    
        # Install NPM packagesnpm ci# Install Playwright browsers and dependenciesnpx playwright install --with-deps
    
3.  **Run your tests**:
    
        npx playwright test
    

Workers[​](#workers "Direct link to Workers")
---------------------------------------------

We recommend setting [workers](/docs/api/class-testconfig#test-config-workers) to "1" in CI environments to prioritize stability and reproducibility. Running tests sequentially ensures each test gets the full system resources, avoiding potential conflicts. However, if you have a powerful self-hosted CI system, you may enable [parallel](/docs/test-parallel) tests. For wider parallelization, consider [sharding](/docs/test-parallel#shard-tests-between-multiple-machines) - distributing tests across multiple CI jobs.

playwright.config.ts

    import { defineConfig, devices } from '@playwright/test';export default defineConfig({  // Opt out of parallel tests on CI.  workers: process.env.CI ? 1 : undefined,});

CI configurations[​](#ci-configurations "Direct link to CI configurations")
---------------------------------------------------------------------------

The [Command line tools](/docs/browsers#install-system-dependencies) can be used to install all operating system dependencies in CI.

### GitHub Actions[​](#github-actions "Direct link to GitHub Actions")

#### On push/pull\_request[​](#on-pushpull_request "Direct link to On push/pull_request")

Tests will run on push or pull request on branches main/master. The [workflow](https://docs.github.com/en/actions/using-workflows/about-workflows) will install all dependencies, install Playwright and then run the tests. It will also create the HTML report.

.github/workflows/playwright.yml

    name: Playwright Testson:  push:    branches: [ main, master ]  pull_request:    branches: [ main, master ]jobs:  test:    timeout-minutes: 60    runs-on: ubuntu-latest    steps:    - uses: actions/checkout@v5    - uses: actions/setup-node@v6      with:        node-version: lts/*    - name: Install dependencies      run: npm ci    - name: Install Playwright Browsers      run: npx playwright install --with-deps    - name: Run Playwright tests      run: npx playwright test    - uses: actions/upload-artifact@v5      if: ${{ !cancelled() }}      with:        name: playwright-report        path: playwright-report/        retention-days: 30

#### On push/pull\_request (sharded)[​](#on-pushpull_request-sharded "Direct link to On push/pull_request (sharded)")

GitHub Actions supports [sharding tests between multiple jobs](https://docs.github.com/en/actions/using-jobs/using-a-matrix-for-your-jobs). Check out our [sharding doc](/docs/test-sharding) to learn more about sharding and to see a [GitHub actions example](/docs/test-sharding#github-actions-example) of how to configure a job to run your tests on multiple machines as well as how to merge the HTML reports.

#### Via Containers[​](#via-containers "Direct link to Via Containers")

GitHub Actions support [running jobs in a container](https://docs.github.com/en/actions/using-jobs/running-jobs-in-a-container) by using the [`jobs.<job_id>.container`](https://docs.github.com/en/actions/using-workflows/workflow-syntax-for-github-actions#jobsjob_idcontainer) option. This is useful to not pollute the host environment with dependencies and to have a consistent environment for e.g. screenshots/visual regression testing across different operating systems.

.github/workflows/playwright.yml

    name: Playwright Testson:  push:    branches: [ main, master ]  pull_request:    branches: [ main, master ]jobs:  playwright:    name: 'Playwright Tests'    runs-on: ubuntu-latest    container:      image: mcr.microsoft.com/playwright:v1.57.0-noble      options: --user 1001    steps:      - uses: actions/checkout@v5      - uses: actions/setup-node@v6        with:          node-version: lts/*      - name: Install dependencies        run: npm ci      - name: Run your tests        run: npx playwright test

#### On deployment[​](#on-deployment "Direct link to On deployment")

This will start the tests after a [GitHub Deployment](https://developer.github.com/v3/repos/deployments/) went into the `success` state. Services like Vercel use this pattern so you can run your end-to-end tests on their deployed environment.

.github/workflows/playwright.yml

    name: Playwright Testson:  deployment_status:jobs:  test:    timeout-minutes: 60    runs-on: ubuntu-latest    if: github.event.deployment_status.state == 'success'    steps:    - uses: actions/checkout@v5    - uses: actions/setup-node@v6      with:        node-version: lts/*    - name: Install dependencies      run: npm ci    - name: Install Playwright      run: npx playwright install --with-deps    - name: Run Playwright tests      run: npx playwright test      env:        PLAYWRIGHT_TEST_BASE_URL: ${{ github.event.deployment_status.target_url }}

#### Fail-Fast[​](#fail-fast "Direct link to Fail-Fast")

Large test suites can take very long to execute. By executing a preliminary test run with the `--only-changed` flag, you can run test files that are likely to fail first. This will give you a faster feedback loop and slightly lower CI consumption while working on Pull Requests. To detect test files affected by your changeset, `--only-changed` analyses your suites' dependency graph. This is a heuristic and might miss tests, so it's important that you always run the full test suite after the preliminary test run.

.github/workflows/playwright.yml

    name: Playwright Testson:  push:    branches: [ main, master ]  pull_request:    branches: [ main, master ]jobs:  test:    timeout-minutes: 60    runs-on: ubuntu-latest    steps:    - uses: actions/checkout@v5      with:        # Force a non-shallow checkout, so that we can reference $GITHUB_BASE_REF.        # See https://github.com/actions/checkout for more details.        fetch-depth: 0    - uses: actions/setup-node@v6      with:        node-version: lts/*    - name: Install dependencies      run: npm ci    - name: Install Playwright Browsers      run: npx playwright install --with-deps    - name: Run changed Playwright tests      run: npx playwright test --only-changed=$GITHUB_BASE_REF      if: github.event_name == 'pull_request'    - name: Run Playwright tests      run: npx playwright test    - uses: actions/upload-artifact@v5      if: ${{ !cancelled() }}      with:        name: playwright-report        path: playwright-report/        retention-days: 30

### Docker[​](#docker "Direct link to Docker")

We have a [pre-built Docker image](/docs/docker) which can either be used directly or as a reference to update your existing Docker definitions. Make sure to follow the [Recommended Docker Configuration](/docs/docker#recommended-docker-configuration) to ensure the best performance.

### Azure Pipelines[​](#azure-pipelines "Direct link to Azure Pipelines")

For Windows or macOS agents, no additional configuration is required, just install Playwright and run your tests.

For Linux agents, you can use [our Docker container](/docs/docker) with Azure Pipelines support [running containerized jobs](https://docs.microsoft.com/en-us/azure/devops/pipelines/process/container-phases?view=azure-devops). Alternatively, you can use [Command line tools](/docs/browsers#install-system-dependencies) to install all necessary dependencies.

For running the Playwright tests use this pipeline task:

    trigger:- mainpool:  vmImage: ubuntu-lateststeps:- task: UseNode@1  inputs:    version: '22'  displayName: 'Install Node.js'- script: npm ci  displayName: 'npm ci'- script: npx playwright install --with-deps  displayName: 'Install Playwright browsers'- script: npx playwright test  displayName: 'Run Playwright tests'  env:    CI: 'true'

#### Uploading playwright-report folder with Azure Pipelines[​](#uploading-playwright-report-folder-with-azure-pipelines "Direct link to Uploading playwright-report folder with Azure Pipelines")

This will make the pipeline run fail if any of the playwright tests fails. If you also want to integrate the test results with Azure DevOps, use the task `PublishTestResults` task like so:

    trigger:- mainpool:  vmImage: ubuntu-lateststeps:- task: UseNode@1  inputs:    version: '22'  displayName: 'Install Node.js'- script: npm ci  displayName: 'npm ci'- script: npx playwright install --with-deps  displayName: 'Install Playwright browsers'- script: npx playwright test  displayName: 'Run Playwright tests'  env:    CI: 'true'- task: PublishTestResults@2  displayName: 'Publish test results'  inputs:    searchFolder: 'test-results'    testResultsFormat: 'JUnit'    testResultsFiles: 'e2e-junit-results.xml'    mergeTestResults: true    failTaskOnFailedTests: true    testRunTitle: 'My End-To-End Tests'  condition: succeededOrFailed()- task: PublishPipelineArtifact@1  inputs:    targetPath: playwright-report    artifact: playwright-report    publishLocation: 'pipeline'  condition: succeededOrFailed()

Note: The JUnit reporter needs to be configured accordingly via

    import { defineConfig } from '@playwright/test';export default defineConfig({  reporter: [['junit', { outputFile: 'test-results/e2e-junit-results.xml' }]],});

in `playwright.config.ts`.

#### Azure Pipelines (sharded)[​](#azure-pipelines-sharded "Direct link to Azure Pipelines (sharded)")

    trigger:- mainpool:  vmImage: ubuntu-lateststrategy:  matrix:    chromium-1:      project: chromium      shard: 1/3    chromium-2:      project: chromium      shard: 2/3    chromium-3:      project: chromium      shard: 3/3    firefox-1:      project: firefox      shard: 1/3    firefox-2:      project: firefox      shard: 2/3    firefox-3:      project: firefox      shard: 3/3    webkit-1:      project: webkit      shard: 1/3    webkit-2:      project: webkit      shard: 2/3    webkit-3:      project: webkit      shard: 3/3steps:- task: UseNode@1  inputs:    version: '22'  displayName: 'Install Node.js'- script: npm ci  displayName: 'npm ci'- script: npx playwright install --with-deps  displayName: 'Install Playwright browsers'- script: npx playwright test --project=$(project) --shard=$(shard)  displayName: 'Run Playwright tests'  env:    CI: 'true'

#### Azure Pipelines (containerized)[​](#azure-pipelines-containerized "Direct link to Azure Pipelines (containerized)")

    trigger:- mainpool:  vmImage: ubuntu-latestcontainer: mcr.microsoft.com/playwright:v1.57.0-noblesteps:- task: UseNode@1  inputs:    version: '22'  displayName: 'Install Node.js'- script: npm ci  displayName: 'npm ci'- script: npx playwright test  displayName: 'Run Playwright tests'  env:    CI: 'true'

### CircleCI[​](#circleci "Direct link to CircleCI")

Running Playwright on CircleCI is very similar to running on GitHub Actions. In order to specify the pre-built Playwright [Docker image](/docs/docker), simply modify the agent definition with `docker:` in your config like so:

    executors:  pw-noble-development:    docker:      - image: mcr.microsoft.com/playwright:v1.57.0-noble

Note: When using the docker agent definition, you are specifying the resource class of where playwright runs to the 'medium' tier [here](https://circleci.com/docs/configuration-reference?#docker-execution-environment). The default behavior of Playwright is to set the number of workers to the detected core count (2 in the case of the medium tier). Overriding the number of workers to greater than this number will cause unnecessary timeouts and failures.

#### Sharding in CircleCI[​](#sharding-in-circleci "Direct link to Sharding in CircleCI")

Sharding in CircleCI is indexed with 0 which means that you will need to override the default parallelism ENV VARS. The following example demonstrates how to run Playwright with a CircleCI Parallelism of 4 by adding 1 to the `CIRCLE_NODE_INDEX` to pass into the `--shard` cli arg.

      playwright-job-name:    executor: pw-noble-development    parallelism: 4    steps:      - run: SHARD="$((${CIRCLE_NODE_INDEX}+1))"; npx playwright test --shard=${SHARD}/${CIRCLE_NODE_TOTAL}

### Jenkins[​](#jenkins "Direct link to Jenkins")

Jenkins supports Docker agents for pipelines. Use the [Playwright Docker image](/docs/docker) to run tests on Jenkins.

    pipeline {   agent { docker { image 'mcr.microsoft.com/playwright:v1.57.0-noble' } }   stages {      stage('e2e-tests') {         steps {            sh 'npm ci'            sh 'npx playwright test'         }      }   }}

### Bitbucket Pipelines[​](#bitbucket-pipelines "Direct link to Bitbucket Pipelines")

Bitbucket Pipelines can use public [Docker images as build environments](https://confluence.atlassian.com/bitbucket/use-docker-images-as-build-environments-792298897.html). To run Playwright tests on Bitbucket, use our public Docker image ([see Dockerfile](/docs/docker)).

    image: mcr.microsoft.com/playwright:v1.57.0-noble

### GitLab CI[​](#gitlab-ci "Direct link to GitLab CI")

To run Playwright tests on GitLab, use our public Docker image ([see Dockerfile](/docs/docker)).

    stages:  - testtests:  stage: test  image: mcr.microsoft.com/playwright:v1.57.0-noble  script:  ...

#### Sharding[​](#sharding "Direct link to Sharding")

GitLab CI supports [sharding tests between multiple jobs](https://docs.gitlab.com/ee/ci/jobs/job_control.html#parallelize-large-jobs) using the [parallel](https://docs.gitlab.com/ee/ci/yaml/index.html#parallel) keyword. The test job will be split into multiple smaller jobs that run in parallel. Parallel jobs are named sequentially from `job_name 1/N` to `job_name N/N`.

    stages:  - testtests:  stage: test  image: mcr.microsoft.com/playwright:v1.57.0-noble  parallel: 7  script:    - npm ci    - npx playwright test --shard=$CI_NODE_INDEX/$CI_NODE_TOTAL

GitLab CI also supports sharding tests between multiple jobs using the [parallel:matrix](https://docs.gitlab.com/ee/ci/yaml/index.html#parallelmatrix) option. The test job will run multiple times in parallel in a single pipeline, but with different variable values for each instance of the job. In the example below, we have 2 `PROJECT` values and 10 `SHARD` values, resulting in a total of 20 jobs to be run.

    stages:  - testtests:  stage: test  image: mcr.microsoft.com/playwright:v1.57.0-noble  parallel:    matrix:      - PROJECT: ['chromium', 'webkit']        SHARD: ['1/10', '2/10', '3/10', '4/10', '5/10', '6/10', '7/10', '8/10', '9/10', '10/10']  script:    - npm ci    - npx playwright test --project=$PROJECT --shard=$SHARD

### Google Cloud Build[​](#google-cloud-build "Direct link to Google Cloud Build")

To run Playwright tests on Google Cloud Build, use our public Docker image ([see Dockerfile](/docs/docker)).

    steps:- name: mcr.microsoft.com/playwright:v1.57.0-noble  script:   ...  env:  - 'CI=true'

### Drone[​](#drone "Direct link to Drone")

To run Playwright tests on Drone, use our public Docker image ([see Dockerfile](/docs/docker)).

    kind: pipelinename: defaulttype: dockersteps:  - name: test    image: mcr.microsoft.com/playwright:v1.57.0-noble    commands:      - npx playwright test

Caching browsers[​](#caching-browsers "Direct link to Caching browsers")
------------------------------------------------------------------------

Caching browser binaries is not recommended, since the amount of time it takes to restore the cache is comparable to the time it takes to download the binaries. Especially under Linux, [operating system dependencies](/docs/browsers#install-system-dependencies) need to be installed, which are not cacheable.

If you still want to cache the browser binaries between CI runs, cache [these directories](/docs/browsers#managing-browser-binaries) in your CI configuration, against a hash of the Playwright version.

Debugging browser launches[​](#debugging-browser-launches "Direct link to Debugging browser launches")
------------------------------------------------------------------------------------------------------

Playwright supports the `DEBUG` environment variable to output debug logs during execution. Setting it to `pw:browser` is helpful while debugging `Error: Failed to launch browser` errors.

    DEBUG=pw:browser npx playwright test

Running headed[​](#running-headed "Direct link to Running headed")
------------------------------------------------------------------

By default, Playwright launches browsers in headless mode. See in our [Running tests](/docs/running-tests#run-tests-in-headed-mode) guide how to run tests in headed mode.

On Linux agents, headed execution requires [Xvfb](https://en.wikipedia.org/wiki/Xvfb) to be installed. Our [Docker image](/docs/docker) and GitHub Action have Xvfb pre-installed. To run browsers in headed mode with Xvfb, add `xvfb-run` before the actual command.

    xvfb-run npx playwright test

# Selenium Grid (experimental)

Selenium Grid (experimental)
============================

Introduction[​](#introduction "Direct link to Introduction")
------------------------------------------------------------

Playwright can connect to [Selenium Grid Hub](https://www.selenium.dev/documentation/grid/) that runs Selenium 4 to launch **Google Chrome** or **Microsoft Edge** browser, instead of running browser on the local machine. Note this feature is **experimental** and is prioritized accordingly.

warning

There is a risk of Playwright integration with Selenium Grid Hub breaking in the future. Make sure you weight risks against benefits before using it.

More details

Internally, Playwright connects to the browser using [Chrome DevTools Protocol](https://chromedevtools.github.io/devtools-protocol/) websocket. Selenium 4 currently exposes this capability. However, this [might not be the case in the future](https://github.com/SeleniumHQ/selenium/issues/11590#issuecomment-1436113950). If Selenium drops this capability, Playwright will stop working with it.

Before connecting Playwright to your Selenium Grid, make sure that grid works with [Selenium WebDriver](https://www.selenium.dev/documentation/webdriver/). For example, run [one of the examples](https://github.com/SeleniumHQ/selenium/tree/trunk/javascript/selenium-webdriver/example) and pass `SELENIUM_REMOTE_URL` environment variable. If webdriver example does not work, look for any errors at your Selenium hub/node/standalone output and search [Selenium issues](https://github.com/SeleniumHQ/selenium/issues) for a possible solution.

Starting Selenium Grid[​](#starting-selenium-grid "Direct link to Starting Selenium Grid")
------------------------------------------------------------------------------------------

If you run distributed Selenium Grid, Playwright needs selenium nodes to be registered with an accessible address, so that it could connect to the browsers. To make sure it works as expected, set `SE_NODE_GRID_URL` environment variable pointing to the hub when running selenium nodes.

    # Start selenium nodeSE_NODE_GRID_URL="http://<selenium-hub-ip>:4444" java -jar selenium-server-<version>.jar node

Connecting Playwright to Selenium Grid[​](#connecting-playwright-to-selenium-grid "Direct link to Connecting Playwright to Selenium Grid")
------------------------------------------------------------------------------------------------------------------------------------------

To connect Playwright to **Selenium Grid 4**, set `SELENIUM_REMOTE_URL` environment variable pointing to your Selenium Grid Hub. Note that this only works for Google Chrome and Microsoft Edge.

    SELENIUM_REMOTE_URL=http://<selenium-hub-ip>:4444 npx playwright test

You don't have to change your code, just use your testing harness or [browserType.launch()](/docs/api/class-browsertype#browser-type-launch) as usual.

### Passing additional capabilities[​](#passing-additional-capabilities "Direct link to Passing additional capabilities")

If your grid requires additional capabilities to be set (for example, you use an external service), you can set `SELENIUM_REMOTE_CAPABILITIES` environment variable to provide JSON-serialized capabilities.

    SELENIUM_REMOTE_URL=http://<selenium-hub-ip>:4444 SELENIUM_REMOTE_CAPABILITIES="{'mygrid:options':{os:'windows',username:'John',password:'secure'}}" npx playwright test

### Passing additional headers[​](#passing-additional-headers "Direct link to Passing additional headers")

If your grid requires additional headers to be set (for example, you should provide authorization token to use browsers in your cloud), you can set `SELENIUM_REMOTE_HEADERS` environment variable to provide JSON-serialized headers.

    SELENIUM_REMOTE_URL=http://<selenium-hub-ip>:4444 SELENIUM_REMOTE_HEADERS="{'Authorization':'Basic b64enc'}" npx playwright test

### Detailed logs[​](#detailed-logs "Direct link to Detailed logs")

Run with `DEBUG=pw:browser*` environment variable to see how Playwright is connecting to Selenium Grid.

    DEBUG=pw:browser* SELENIUM_REMOTE_URL=http://internal.grid:4444 npx playwright test

If you file an issue, please include this log.

Using Selenium Docker[​](#using-selenium-docker "Direct link to Using Selenium Docker")
---------------------------------------------------------------------------------------

One easy way to use Selenium Grid is to run official docker containers. Read more in [selenium docker images](https://github.com/SeleniumHQ/docker-selenium) documentation. For image tagging convention, [read more](https://github.com/SeleniumHQ/docker-selenium/wiki/Tagging-Convention#selenium-grid-4x-and-above).

### Standalone mode[​](#standalone-mode "Direct link to Standalone mode")

Here is an example of running selenium standalone and connecting Playwright to it. Note that hub and node are on the same `localhost`, and we pass `SE_NODE_GRID_URL` environment variable pointing to it.

First start Selenium.

    docker run -d -p 4444:4444 --shm-size="2g" -e SE_NODE_GRID_URL="http://localhost:4444" selenium/standalone-chromium:latest

Then run Playwright.

    SELENIUM_REMOTE_URL=http://localhost:4444 npx playwright test

### Hub and nodes mode[​](#hub-and-nodes-mode "Direct link to Hub and nodes mode")

Here is an example of running selenium hub and a single selenium node, and connecting Playwright to the hub. Note that hub and node have different IPs, and we pass `SE_NODE_GRID_URL` environment variable pointing to the hub when starting node containers.

First start the hub container and one or more node containers.

    docker run -d -p 4442-4444:4442-4444 --name selenium-hub selenium/hub:4.25.0docker run -d -p 5555:5555 \    --shm-size="2g" \    -e SE_EVENT_BUS_HOST=<selenium-hub-ip> \    -e SE_EVENT_BUS_PUBLISH_PORT=4442 \    -e SE_EVENT_BUS_SUBSCRIBE_PORT=4443 \    -e SE_NODE_GRID_URL="http://<selenium-hub-ip>:4444"    selenium/node-chromium:4.25.0

Then run Playwright.

    SELENIUM_REMOTE_URL=http://<selenium-hub-ip>:4444 npx playwright test

Selenium 3[​](#selenium-3 "Direct link to Selenium 3")
------------------------------------------------------

Internally, Playwright connects to the browser using [Chrome DevTools Protocol](https://chromedevtools.github.io/devtools-protocol/) websocket. Selenium 4 exposes this capability, while Selenium 3 does not.

This means that Selenium 3 is supported in a best-effort manner, where Playwright tries to connect to the grid node directly. Grid nodes must be directly accessible from the machine that runs Playwright.


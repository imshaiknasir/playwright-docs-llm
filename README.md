# Playwright Documentation Scraper

[![Playwright Documentation Scraper](https://github.com/imshaiknasir/playwright-docs-llm/actions/workflows/playwright.yml/badge.svg)](https://github.com/imshaiknasir/playwright-docs-llm/actions/workflows/playwright.yml)
[![Deploy to GitHub Pages](https://github.com/imshaiknasir/playwright-docs-llm/actions/workflows/deploy-pages.yml/badge.svg)](https://github.com/imshaiknasir/playwright-docs-llm/actions/workflows/deploy-pages.yml)

An automated documentation scraper for Playwright that maintains up-to-date documentation for both Node.js and Python versions. The documentation is automatically updated daily and published to GitHub Pages.

## 📚 Documentation

View the documentation at: [https://imshaiknasir.github.io/playwright-docs-llm/](https://imshaiknasir.github.io/playwright-docs-llm/)

Available documentation:
- Node.js Documentation
- Python Documentation

## 🔄 Automation Features

- **Daily Updates**: Documentation is automatically scraped and updated every day at midnight UTC
- **Multiple Versions**: Maintains both Node.js and Python documentation
- **GitHub Pages**: Automatically deploys updated documentation to GitHub Pages
- **Version Tracking**: Keeps track of Playwright versions and updates

## 🛠️ Technical Stack

- **Playwright**: v1.51.1
- **Node.js**: Latest LTS version
- **Dependencies**:
  - playwright
  - playwright-core
  - turndown (for HTML to Markdown conversion)
  - @playwright/test (for testing)

## 🔧 Workflows

### Documentation Scraper
- Runs daily at midnight UTC
- Scrapes latest documentation from official Playwright sources
- Commits and pushes updates automatically
- Triggers GitHub Pages deployment

### GitHub Pages Deployment
- Automatically triggered after successful scraping
- Deploys documentation to GitHub Pages
- Provides public access to documentation

## 📦 Project Structure

```
playwright-docs-llm/
├── .github/
│   └── workflows/
│       ├── playwright.yml      # Documentation scraper workflow
│       └── deploy-pages.yml    # GitHub Pages deployment workflow
├── index.md                    # Main documentation page
├── nodejs-docs.md             # Node.js documentation
├── python-docs.md             # Python documentation
├── package.json               # Project dependencies
├── pw-nodejs.js              # Node.js scraper script
└── pw-python.js              # Python scraper script
```

## 🚀 Getting Started

### Prerequisites
- Node.js (LTS version)
- Git

### Local Development
1. Clone the repository:
   ```bash
   git clone git@github.com:imshaiknasir/playwright-docs-llm.git
   cd playwright-docs-llm
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Run scrapers locally:
   ```bash
   npm run scrape-nodejs  # Scrape Node.js documentation
   npm run scrape-python # Scrape Python documentation
   ```

## 📅 Update Schedule

- Documentation is updated daily at 00:00 UTC
- Each update includes:
  - Latest API changes
  - New features and deprecations
  - Updated examples and usage

## 📝 License

ISC License

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📊 Status

![GitHub last commit](https://img.shields.io/github/last-commit/imshaiknasir/playwright-docs-llm)
![GitHub repo size](https://img.shields.io/github/repo-size/imshaiknasir/playwright-docs-llm) 
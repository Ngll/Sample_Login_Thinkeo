# 🔐 Sample Login Automation - Thinkeo (Playwright)

This repository contains automated test scripts for validating the login functionality of [Thinkeo](https://platform.thinkeo.io/login) 
using [Playwright](https://playwright.dev/) with JavaScript.

---

## 📁 Project Structure
Sample_Login_Thinkeo/
├── tests/
│ └── login.spec.js # Main login test script
├── playwright.config.js # Playwright config
├── package.json # Project dependencies and scripts
└── README.md # Project documentation


## 🚀 Features
- Valid & invalid login test cases
- UI validation (e.g. field errors, button states)
- Toast error message verification
- Email field format validation

---

## 🛠️ Setup Instructions

1. **Clone the repository**
```bash
git clone https://github.com/Ngll/Sample_Login_Thinkeo.git
cd Sample_Login_Thinkeo

Install dependencies
npx playwright install, press enter
npm init playwright@latest, press enter
Select option Javascript
leave other option as it is, press enter.
Run all tests in default browser 
npx playwright test ./tests/login.spec.js --project=chromium --headed

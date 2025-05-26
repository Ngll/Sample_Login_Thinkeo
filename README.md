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
- UI - should display email and password fields and login button
- Negative - login with empty fields
- Negative - invalid email format
- Negative - incorrect credentials
- Positive - successful login and redirect to dashboard. i.e. Publications page
---

## 🛠️ Setup Instructions

**Clone the repository**
```bash
git clone https://github.com/Ngll/Sample_Login_Thinkeo.git
cd Sample_Login_Thinkeo

**Install dependencies**
npx playwright install, press enter
npm init playwright@latest, press enter
Select option Javascript
leave other option as it is, press enter.
Run all tests in default browser 
npx playwright test ./tests/login.spec.js --project=chromium --headed

```sh
# Install Required Packages
npm install @reduxjs/toolkit react-redux
npm install async-mutex
npm install -D @tailwindcss/forms
npm install --save react-toastify
npm install react-icons --save
npm install classnames
npm i jwt-decode

# Ensure all packages are up to date
npm install
npm update

# Clear cache and restart the development server
rm -rf node_modules
rm package-lock.json
npm cache clean --force
npm install
npm run dev
```

[Setup Tutorial](https://youtu.be/xqWSROBHJuQ)

## Internationalization
```sh
npm install next-intl
```

## Dark Mode Support
```sh
npm i next-themes
```

## Project Requirements
- **Brand Logo**: (width: `84px`, height: `28px`)

## Install for Pie Chart
```sh
# Chart.js Installation Guide
https://www.chartjs.org/docs/latest/getting-started/installation.html

# Install required charting libraries
yarn add chart.js
npm install recharts
```

## TODO:
1. **Security Check for API**
   - Implement proper authentication & authorization.
   - Verify CORS policies.
   - Apply rate limiting (`django-ratelimit`).
   - Validate all API inputs.
   - Secure database queries (use parameterized queries).
   - Enable logging & monitoring (e.g., Sentry, LogRocket).

2. **Check Email Activation URL in Backend**
   - Verify email activation process manually.
   - Ensure activation links expire after a set duration.
   - Use secure, unique activation tokens.
   - Redirect users properly after activation.


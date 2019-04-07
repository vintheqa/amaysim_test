Pre-requisites:
- NodeJs
- WebdriverIO w/ test runner
- Geckodriver (ran on firefox browser)

Reference:
- https://webdriver.io/docs/gettingstarted.html (for setting up WebdriverIO w/ test runner)
- https://chocolatey.org/install (for installing geckodriver)

To run test:
1. Copy "amaysim_login.js" to "<project_name>\test\specs"
2. Start geckodriver (run gecko.bat)
3. Via command prompt, go to project root folder and run "mkdir Screenshots\001-Amaysim_login" for the screenshots folder
4. Via command prompt, go to project root folder and run "./node_modules/.bin/wdio wdio.conf.js"

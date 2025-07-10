# Coding-Challenge---Pew-Research-Center

This project creates a GitHub workflow that does the following:
- Renders a "Hello World" HTML page on a JavaScript app
- Executes a Playwright test to verify that the app renders correctly, two retries upon test failure
- Deploys app to GitHub pages (URL: https://keerthybreddy.github.io/Coding-Challenge---Pew-Research-Center/) if the test was a success
  - Pre-built GitHub Action Credit: peaceiris/actions-gh-pages@v3 (https://github.com/peaceiris/actions-gh-pages)
- Sends out an email alert to a user group (keerthybreddy@gmail.com, lalithareddy711@gmail.com) with the app deployment status (success/failure)
  - Pre-built GitHub Action Credit: dawidd6/action-send-mail@v3 (https://github.com/dawidd6/action-send-mail)
- Sends out a Slack Alert to the "all-coding-challenge-test-space" channel in the "Coding Challenge Test Space" workspace with the app deployment status (success/failure)
  - "Coding Challenge Test Space" workspace invite link: https://join.slack.com/t/codingchallen-mm87304/shared_invite/zt-3903ya2ba-HcOHzxPXyqlAe42OadEVWg (expires in 30 days)

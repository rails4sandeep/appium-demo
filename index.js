const path = require('path');
const wdio = require("webdriverio");

// webdriver.io example
// let options = { desiredCapabilities: {
//     platformName: 'Android',
//     platformVersion: '10.0',
//     automationName: 'UiAutomator2',
//     app: path.resolve('~/Development/try-appium/intro_android_demo/app/build/outputs/apk/debug/app-debug.apk')
//   }};
//   let client = driver.newSession(options);
  
// javascript

//{"app_url":"bs://82be69eabfb7c250317196dc4b885b0073b070a9"}
const opts = {
    path: '/wd/hub',
    port: 4723,
    capabilities: {
      platformName: "Android",
      platformVersion: "10",
      deviceName: "SM-G965F",
      app: "/Users/sandeepkumar/Development/learning/appium-demo/app-debug.apk",
      appPackage: "codepath.apps.demointroandroid",
      appActivity: "DemoSelector",
      automationName: "UiAutomator2"
    }
  };
  
  async function main () {
    const client = await wdio.remote(opts);
    const contentLayout = await client.$('/hierarchy/android.widget.FrameLayout');
    await contentLayout.click();
    await client.deleteSession();
  }
  
  main();
    
require 'appium_lib'

# ruby_lib example
APP_PATH = '/Users/sandeepkumar/Development/learning/appium-demo/app-debug.apk'

desired_caps = {
  caps: {
    platformName:  'Android',
    platformVersion: '10',
    deviceName:    'SM-G965F',
    app:           APP_PATH,
    automationName: "UiAutomator2"
  }
}

Appium::Driver.new(desired_caps).start_driver


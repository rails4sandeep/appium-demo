var capabilities = {
    'device' : 'Google Pixel 3',
    'os_version' : '9.0'
  }

  var wd = require('wd');
var assert = require('assert');
var asserters = wd.asserters;
var capabilities = {
  'device' : 'Google Pixel 3',
  'os_version' : '9.0'
}

Object.assign(capabilities, {
  'browserstack.user' : process.env.BSUSER || '',
  'browserstack.key' : process.env.BSKEY || '',
  'project': 'My First Project',
  'build' : 'My First Build',
  'name': 'Bstack-[Node] Sample Test',
  'app' : 'bs://82be69eabfb7c250317196dc4b885b0073b070a9'
});

driver = wd.promiseRemote("http://hub-cloud.browserstack.com/wd/hub");
 
driver
  .init(capabilities)
  .elementByAccessibilityId("/hierarchy/android.widget.FrameLayout")
  driver.fin(function() { return driver.quit(); })
  .done();
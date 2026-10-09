const { devices } = require("@playwright/test")

const config=({
  testDir:'./tests',
  retries:1,
  workers:3,
  timeout:90*1000,
  expect:{
    timeout:90*1000
  },
  reporter:'html',
  projects:[
    {
      name:'safari',
  use:{
    browserName:'webkit',
    headless:true,
    screenshot:'off',
    trace:'off',
    video:'off',
    ignoreHTTPSErrors: true
  }

},
{
  name:'chrome',
  use:{
    browserName:'chromium',
    headless:false,
    screenshot:'on',
    trace:'on',
    video:'on',
    /*viewport:{
      width:720,
      height:720
    },*/
    //...devices['iPhone 11'],
    Permissions:['geolocation']
  }
}
]
})
module.exports=config
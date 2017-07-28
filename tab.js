// DEFAULT PLAYER
var DEFAULT_PLAYER_CHROME = 'H264';
var DEFAULT_PLAYER_IE = 'Flash';
var DEFAULT_PLAYER_FIREFOX = 'H264';
var DEFAULT_PLAYER_EDGE = 'H264';
var DEFAULT_PLAYER_CHROMIUM = 'H264';




// DESKTOP
Plateforms = [
  // WINDOWS + IE
  {
    os: 'Windows',
    browser: {
      name: 'IE',
    },
    use: DEFAULT_PLAYER_IE,
  },
  // WINDOWS + FIREFOX
  {
    os: 'Windows',
    browser: {
      name: 'Firefox',
      before: 60,
      after: 55,
    },
    use: 'VP9',
  },
  {
    os: 'Windows',
    browser: {
      name: 'Firefox',
    },
    use: DEFAULT_PLAYER_FIREFOX,
  },
  // WINDOWS + CHROME
  {
    os: 'Windows',
    browser: {
      name: 'Chrome',
      before: 80,
      after: 70,
    },
    use: 'Flash',
  },
  {
    os: 'Windows',
    browser: {
      name: 'Chrome',
      before: 70,
      after: 60,
    },
    use: 'VP9',
  },

  {
    os: 'Windows',
    browser: {
      name: 'Chrome',
    },
    use: DEFAULT_PLAYER_CHROME,
  },

  {
    os: 'Windows',
    browser: {
      name: 'Edge',
      before: '',
      after: '',
    },
    use: 'H264',

  },
  {
    os: 'Windows',
    browser: {
      name: 'Chromium',
      before: '',
      after: '',
    },
    use: 'VP9'
  },
  {
    os: 'MacOSX',
    browser: {
      name: 'Safari',
      before: 6.2,
      after: 5.2,
    },
    use: 'H264',
  },
  {
    os: 'MacOSX',
    browser: {
      name: 'Firefox',
      before: 45,
      after: 45,
    },
    use: 'H264',
  },
  {
    os: 'MacOSX',
    browser: {
      name: 'Chrome',
      before: 58,
      after: 58,
    },
    use: 'H264'
  },
  {
    os: 'Android',
    browser: {
      name: 'Chrome',
      before: 42,
      after: 44,
    },
    use: 'H264'
  },
  {
    os: 'IOS',
    browser: {
      name: 'Safari',
      before: 7,
      after: '',
    },
    use: 'H264'
  },
  {
    os: 'IPad',
    browser: {
      name: 'Safari',
      before: 6,
      after: '',
    },
    use: 'H264'
  },
  {
    os: 'WindowsPhone',
    browser: {
      name: 'IE',
      before: 11,
      after: '',
    },
    use: 'H264'
  },
  {
    os: 'Blackberry',
    browser: {
      name: 'Blackberry',
      before: '',
      after: '',
    },
    use: 'H264'
  }]

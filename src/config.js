module.exports = {
  siteTitle: 'Melody Luo | Software Engineer',
  siteDescription:
    'Melody Luo is a software engineer based in New York, NY who specializes in web development, with an emphasis on front-end work.',
  siteKeywords:
    'Melody Luo, melluo, software engineer, front-end engineer, web developer, javascript, new york',
  siteUrl: 'https://melodyluo.com',
  siteLanguage: 'en_US',
  googleAnalyticsID: 'UA-164941535-1',
  googleVerification: 'kXNxIAxN9n_s_sYL9l5tOGz05gHsO0gzkxhsKtPWa1g',
  name: 'Melody Luo',
  location: 'New York, NY',
  email: 'melluo@hotmail.com',
  github: 'https://github.com/melluo',
  twitterHandle: 'none',
  socialMedia: [
    {
      name: 'Linkedin',
      url: 'https://www.linkedin.com/in/melodyluo/',
    },
    
    {
      name: 'Angellist',
      url: 'https://angel.co/u/melluo',
    },
    {
      name: 'GitHub',
      url: 'https://github.com/melluo',
    },
    
    
  ],

  navLinks: [
    {
      name: 'About',
      url: '/#about',
    },
    {
      name: 'Experience',
      url: '/#jobs',
    },
    {
      name: 'Work',
      url: '/#projects',
    },
    {
      name: 'Contact',
      url: '/#contact',
    },
  ],

  navHeight: 100,

  colors: {
    green: '#64ffda',
    navy: '#0a192f',
    darkNavy: '#020c1b',
  },

  srConfig: (delay = 200) => ({
    origin: 'bottom',
    distance: '20px',
    duration: 500,
    delay,
    rotate: { x: 0, y: 0, z: 0 },
    opacity: 0,
    scale: 1,
    easing: 'cubic-bezier(0.645, 0.045, 0.355, 1)',
    mobile: true,
    reset: false,
    useDelay: 'always',
    viewFactor: 0.25,
    viewOffset: { top: 0, right: 0, bottom: 0, left: 0 },
  }),
};

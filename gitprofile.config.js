// gitprofile.config.js

const config = {
  github: {
    username: 'hirashif', // Your GitHub org/user name. (Required)
    sortBy: 'updated', // stars | updated
    limit: 2, // How many projects to display.
    exclude: {
      forks: true, // Forked projects will not be displayed if set to true.
      projects: ['PrizePicksWebScraper', 'first-contributions', 'Time-Calculator'], // These projects will not be displayed. example: ['my-project1', 'my-project2']
    },
  },
  social: {
    linkedin: 'shifanhirani',
    twitter: '',
    mastodon: '',
    facebook: '',
    instagram: '',
    youtube: '', // example: 'pewdiepie'
    dribbble: '',
    behance: '',
    medium: '',
    dev: '',
    stackoverflow: '', // example: '1/jeff-atwood'
    skype: '',
    telegram: '',
    website: '',
    phone: '',
    email: 'shifan.hirani@gmail.com',
  },
  resume: {
    fileUrl:
      'https://drive.google.com/file/d/17l-wQw31AMfYgGV2TyOqX_TRbiInJiuQ/view?usp=drive_link', // Empty fileUrl will hide the `Download Resume` button.
  },
  skills: [
    'Python',
    'Java',
    'C++',
    'HTML',
    'CSS',
    'TypeScript',
    'JavaScript',
    'MySQL',
    'PostgreSQL',
    'Git',
    'Docker',
  ],
  experiences: [
    {
      company: 'Resi Media',
      position: 'Software Engineer Intern',
      from: 'May 2023',
      to: 'August 2023',
      companyLink: 'https://resi.io',
    },
    {
      company: 'Resi Media',
      position: 'Software Engineer Intern',
      from: 'May 2022',
      to: 'August 2022',
      companyLink: 'https://resi.io',
    },
  ],
  /* certifications: [
    {
      name: 'Lorem ipsum',
      body: 'Lorem ipsum dolor sit amet',
      year: 'March 2022',
      link: 'https://example.com'
    },
  ], */
  education: [
    {
      institution: 'Texas A&M University',
      degree: 'Bachelor of Science in Computer Science',
      from: 'August 2020',
      to: 'May 2024',
    },
  ],

  // To hide the `My Projects` section, keep it empty.
  externalProjects: [
    {
      title: 'Speech Recognition Converter',
      description:
        'Flask application that converts speech to text using the Google Speech Recognition Api.',
      imageUrl: 'https://ibb.co/0nQD22s',
      link: 'https://github.com/hirashif/SpeechRecognition-Flask-Python',
    },
    {
      title: 'Stock Price Predictor',
      description:
        'Built a Linear Regression Model that loads and analyzes stock price data before before March 2018 and predicts prices 30 days into the future.',
      imageUrl: 'https://ibb.co/3CcXqGD',
      link: 'https://github.com/hirashif/StockPredictor-LinearRegression',
    },
  ],
  // Display blog posts from your medium or dev account. (Optional)
  // blog: {
  //   source: 'dev', // medium | dev
  //   username: 'arifszn', // to hide blog section, keep it empty
  //   limit: 2, // How many posts to display. Max is 10.
  // },
  googleAnalytics: {
    id: '', // GA3 tracking id/GA4 tag id UA-XXXXXXXXX-X | G-XXXXXXXXXX
  },
  // Track visitor interaction and behavior. https://www.hotjar.com
  hotjar: {
    id: '',
    snippetVersion: 6,
  },
  themeConfig: {
    defaultTheme: 'cmyk',

    // Hides the switch in the navbar
    // Useful if you want to support a single color mode
    disableSwitch: true,

    // Should use the prefers-color-scheme media-query,
    // using user system preferences, instead of the hardcoded defaultTheme
    respectPrefersColorScheme: false,

    // Hide the ring in Profile picture
    hideAvatarRing: false,

    // Available themes. To remove any theme, exclude from here.
    themes: [
      'light',
      'dark',
      'cupcake',
      'bumblebee',
      'emerald',
      'corporate',
      'synthwave',
      'retro',
      'cyberpunk',
      'valentine',
      'halloween',
      'garden',
      'forest',
      'aqua',
      'lofi',
      'pastel',
      'fantasy',
      'wireframe',
      'black',
      'luxury',
      'dracula',
      'cmyk',
      'autumn',
      'business',
      'acid',
      'lemonade',
      'night',
      'coffee',
      'winter',
      'procyon',
    ],

    // Custom theme
    customTheme: {
      primary: '#fc055b',
      secondary: '#219aaf',
      accent: '#e8d03a',
      neutral: '#2A2730',
      'base-100': '#E3E3ED',
      '--rounded-box': '3rem',
      '--rounded-btn': '3rem',
    },
  },

  // Optional Footer. Supports plain text or HTML.
  footer: `Made with <a 
      class="text-primary" href="https://github.com/arifszn/gitprofile"
      target="_blank"
      rel="noreferrer"
    >GitProfile</a> and ❤️`,
};

export default config;

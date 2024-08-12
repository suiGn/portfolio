// gitprofile.config.js
const config = {
  github: {
    username: 'neurons-me', // Your GitHub org/user name. (Required)
    sortBy: 'stars', // stars | updated
    limit: 30, // How many projects to display.
    exclude: {
      forks: false, // Forked projects will not be displayed if set to true.
      projects: [], // These projects will not be displayed. example: ['my-project1', 'my-project2']
    },
  },
  social: {
    instagram: 'neurons.me',
    facebook: 'neurons.me',
    youtube: 'neuron_me',
    linkedin: 'neurons-me',
    website: 'https://neurons.me',
    stackoverflow: 'https://stackoverflow.com/users/26751380/neurons-me',
    },
  resume: {
    fileUrl:
      '', // Empty fileUrl will hide the `Download Resume` button.
  },
  skills: [
    'ai',
    'machineLearning',
    'Javascript',
    'neurons.me'
  ],
  /*
 
  */
  googleAnalytics: {
    id: 'G-TQPLSH796Z', // GA3 tracking id/GA4 tag id UA-XXXXXXXXX-X | G-XXXXXXXXXX
  },
  // Track visitor interaction and behavior. https://www.hotjar.com
  themeConfig: {
    defaultTheme: 'default',
    // Hides the switch in the navbar
    // Useful if you want to support a single color mode
    disableSwitch: true,
    // Should use the prefers-color-scheme media-query,
    // using user system preferences, instead of the hardcoded defaultTheme
    respectPrefersColorScheme: true,
    // Hide the ring in Profile picture
    hideAvatarRing: true,
    // Available themes. To remove any theme, exclude from here.
    themes: [
      'light',
      'dark',
      'mdrn',
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
      'procyon'
    ],

    // Custom theme
    customTheme: {
      primary: '#65c3c8',
      secondary: '#219aaf',
      accent: '#e8d03a',
      neutral: 'black',
      'base-100': '#E3E3ED',
      '--rounded-box': '1rem',
      '--rounded-btn': '1rem'
    },
  },

  // Optional Footer. Supports plain text or HTML.
  footer: `<a 
      class="text-primary" href="https://neurons.me"
      target="_blank"
      rel="noreferrer"
    >neurons.me</a>`,
};

export default config;

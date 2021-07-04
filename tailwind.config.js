module.exports = {
  purge: {
    enabled: process.env.HUGO_ENVIRONMENT === "production",
    content: ["./content/**/*.md", "./content/**/*.html", "./themes/*/layouts/**/*.html"],
    options: {
      whitelist: [],
    },
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    letterSpacing: {
      tightest: '-.1em',
      tighter: '-.05em',
      tight: '-.025em',
      normal: '0',
      wide: '.025em',
      wider: '.05em',
      widest: '.1em',
      widest: '.25em',
    },
    extend: {
      fontFamily: {
        montserrat: ['Montserrat', 'system-ui', '-apple-system', 'san-serif'],
        lexendtera: ['Lexend Tera', 'system-ui', '-apple-system', 'san-serif'],
        roboto: ['Roboto', 'system-ui', '-apple-system', 'san-serif'],
      },
      margin: {
        '128': '32rem',
        '160': '40rem',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}

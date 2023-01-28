const plugin = require('tailwindcss/plugin')

/** Default values for sizing and spacing */
const sizingConfig = {
  breakpoints: {
    xs: '20rem', /* 320px */
    sm: '24rem', /* 384px */
    md: '28rem', /* 448px */
    lg: '32rem', /* 512px */
    xl: '36rem', /* 576px */
    '2xl': '42rem', /* 672px */
    '3xl': '48rem', /* 768px */
    '4xl': '56rem', /* 896px */
    '5xl': '64rem', /* 1024px */
    '6xl': '72rem', /* 1152px */
    '7xl': '80rem' /* 1280px */
  },
  defaults: {
    0.75: '0.1875rem', /* 3px */
    15: '3.75rem', /* 60px */
    18: '4.5rem' /* 72px */
  }
}

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/components/**/*.{js,ts,jsx,tsx}',
    './src/pages/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    fontFamily: {
      /* Proxima Nova */
      'proxima-nova-medium': ['Proxima Nova Semibold', 'sans-serif'],
      /* Proxima Soft */
      'proxima-soft-thin': ['Proxima Soft Thin', 'sans-serif'],
      'proxima-soft-light': ['Proxima Soft Light', 'sans-serif'],
      'proxima-soft-regular': ['Proxima Soft Medium', 'sans-serif'],
      'proxima-soft-medium': ['Proxima Soft Medium', 'sans-serif'],
      'proxima-soft-semibold': ['Proxima Soft Semi Bold', 'sans-serif'],
      'proxima-soft-bold': ['Proxima Soft Bold', 'sans-serif'],
      'proxima-soft-extrabold': ['Proxima Soft Extra Bold', 'sans-serif'],
      'proxima-soft-black': ['Proxima Soft Black', 'sans-serif'],
      /* Cairo */
      'cairo-extra-light': ['Cairo Extra Light', 'sans-serif'],
      'cairo-light': ['Cairo Light', 'sans-serif'],
      'cairo-regular': ['Cairo Regular', 'sans-serif'],
      'cairo-medium': ['Cairo Medium', 'sans-serif'],
      'cairo-semi-bold': ['Cairo Semi Bold', 'sans-serif'],
      'cairo-bold': ['Cairo Bold', 'sans-serif'],
      'cairo-black': ['Cairo Black', 'sans-serif'],
      /* TT Supermolot Neue */
      'supermolot-thin': ['TT Supermolot Neue Thin', 'sans-serif'],
      'supermolot-extra-light': ['TT Supermolot Neue Extra Light', 'sans-serif'],
      'supermolot-light': ['TT Supermolot Neue Light', 'sans-serif'],
      'supermolot-regular': ['TT Supermolot Neue Regular', 'sans-serif'],
      'supermolot-medium': ['TT Supermolot Neue Medium', 'sans-serif'],
      'supermolot-demibold': ['TT Supermolot Neue Demibold', 'sans-serif'],
      'supermolot-bold': ['TT Supermolot Neue Bold', 'sans-serif'],
      'supermolot-extra-bold': ['TT Supermolot Neue Extra Bold', 'sans-serif'],
      'supermolot-black': ['TT Supermolot Neue Black', 'sans-serif']
    },
    extend: {
      colors: {
        emah: {
          orange: '#FF6700',
          'orange-light': '#F5A130',
          'orange-dark': '#FF3600',
          blue: '#3319FF',
          'blue-light': '#0D71FF',
          'blue-dark': '#1C09B3',
          violet: '#AD0DFF',
          gray: '#515151',
          dark: '#010101'
        }
      },
      width: {
        ...sizingConfig.breakpoints,
        ...sizingConfig.defaults
      },
      height: {
        ...sizingConfig.breakpoints,
        ...sizingConfig.defaults
      },
      padding: {
        '5%': '5%',
        ...sizingConfig.defaults
      },
      margin: {
        ...sizingConfig.defaults
      },
      zIndex: {
        60: 60,
        70: 70
      },
      fontSize: {
        md: ['0.938rem', { lineHeight: '1.375rem' }],
        '4.5xl': ['2.5rem', { lineHeight: '1rem' }]
      },
      borderRadius: {
        '11%': '11%',
        '4xl': '2rem',
        '5xl': '2.5rem',
        '6xl': '3rem'
      },
      boxShadow: {
        'center-2xl': '0px 0px 32px rgba(0, 0, 0, 1)',
        'center-3xl': '0px 0px 64px rgba(0, 0, 0, 1)',
        'center-4xl': '0px 0px 96px rgba(0, 0, 0, 1)'
      },
      backgroundImage: {
        'about-hero': "url('/images/sections/about.jpg')"
        // 'service-branding': "url('/images/sections/whatwedo/branding.jpg')",
        // 'service-design': "url('/images/sections/whatwedo/design.jpg')",
        // 'service-development': "url('/images/sections/whatwedo/development.jpg')",
        // 'about-team': "url('/images/sections/about/team.jpg')",
        // 'about-innovate': "url('/images/sections/about/innovate.jpg')",
        // 'about-oportunity': "url('/images/sections/about/oportunity.jpg')",
        // 'about-assume': "url('/images/sections/about/assume.jpg')",
        // 'about-strategy': "url('/images/sections/about/strategy.jpg')",
        // 'about-prevent': "url('/images/sections/about/prevent.jpg')",
        // 'about-progress': "url('/images/sections/about/progress.jpg')"
      },
      transitionDelay: {
        600: '600ms'
      },
      animation: {
        'tansition-1-3': 'tansition-1-3 9s infinite ease',
        'tansition-2-3': 'tansition-2-3 9s infinite ease',
        'tansition-3-3': 'tansition-3-3 9s infinite ease'
      },
      keyframes: {
        'tansition-1-3': {
          '0%': {
            opacity: 1
          },
          '23%': {
            opacity: 1
          },
          '33%': {
            opacity: 0
          },
          '90%': {
            opacity: 0
          },
          '100%': {
            opacity: 1
          }
        },
        'tansition-2-3': {
          '0%': {
            opacity: 0
          },
          '23%': {
            opacity: 0
          },
          '33%': {
            opacity: 1
          },
          '56%': {
            opacity: 1
          },
          '66%': {
            opacity: 0
          },
          '100%': {
            opacity: 0
          }
        },
        'tansition-3-3': {
          '0%': {
            opacity: 0
          },
          '56%': {
            opacity: 0
          },
          '66%': {
            opacity: 1
          },
          '90%': {
            opacity: 1
          },
          '100%': {
            opacity: 0
          }
        }
      }
    }
  },
  plugins: [
    require('@tailwindcss/forms')({
      strategy: 'class'
    }),
    plugin(({ addVariant, e }) => {
      addVariant('second', ({ modifySelectors, separator }) => {
        modifySelectors(({ className }) => {
          return `.${e(`second${separator}${className}`)}:nth-child(2)`
        })
      })
    }),
    plugin(({ matchUtilities, theme }) => {
      matchUtilities({
        'animation-delay': (value) => {
          return {
            'animation-delay': value
          }
        }
      },
      {
        values: theme('transitionDelay')
      }
      )
    })
  ]
}

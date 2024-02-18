import type { Config } from 'tailwindcss'
import { black, slate, white } from 'tailwindcss/colors'

const config = {
  darkMode: ['class', '[data-mode="dark"]'],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  prefix: '',
  theme: {
    fontFamily: {
      inter: 'var(--font-inter)',
    },
    container: {
      center: true,
      padding: '2rem',
      screens: {
        '2xl': '1400px',
      },
    },
    colors: {
      white,
      black,
      gray: slate,
      transparent: 'transparent',
      current: 'currentColor',
      border: 'rgb(var(--border) / <alpha-value>)',
      ring: 'rgb(var(--ring) / <alpha-value>)',
      background: 'rgb(var(--background) / <alpha-value>)',
      foreground: 'rgb(var(--foreground) / <alpha-value>)',
      card: {
        DEFAULT: 'rgb(var(--card) / <alpha-value>)',
        border: 'rgb(var(--card-border) / <alpha-value>)',
        foreground: 'rgb(var(--card-foreground) / <alpha-value>)',
      },
      blue: {
        50: 'rgb(var(--blue-50) / <alpha-value>)',
        100: 'rgb(var(--blue-100) / <alpha-value>)',
        200: 'rgb(var(--blue-200) / <alpha-value>)',
        300: 'rgb(var(--blue-300) / <alpha-value>)',
        400: 'rgb(var(--blue-400) / <alpha-value>)',
        500: 'rgb(var(--blue-500) / <alpha-value>)',
        600: 'rgb(var(--blue-600) / <alpha-value>)',
        700: 'rgb(var(--blue-700) / <alpha-value>)',
        800: 'rgb(var(--blue-800) / <alpha-value>)',
        900: 'rgb(var(--blue-900) / <alpha-value>)',
        950: 'rgb(var(--blue-950) / <alpha-value>)',
      },
      green: {
        50: 'rgb(var(--green-50) / <alpha-value>)',
        100: 'rgb(var(--green-100) / <alpha-value>)',
        200: 'rgb(var(--green-200) / <alpha-value>)',
        300: 'rgb(var(--green-300) / <alpha-value>)',
        400: 'rgb(var(--green-400) / <alpha-value>)',
        500: 'rgb(var(--green-500) / <alpha-value>)',
        600: 'rgb(var(--green-600) / <alpha-value>)',
        700: 'rgb(var(--green-700) / <alpha-value>)',
        800: 'rgb(var(--green-800) / <alpha-value>)',
        900: 'rgb(var(--green-900) / <alpha-value>)',
        950: 'rgb(var(--green-950) / <alpha-value>)',
      },
      purple: {
        50: 'rgb(var(--purple-50) / <alpha-value>)',
        100: 'rgb(var(--purple-100) / <alpha-value>)',
        200: 'rgb(var(--purple-200) / <alpha-value>)',
        300: 'rgb(var(--purple-300) / <alpha-value>)',
        400: 'rgb(var(--purple-400) / <alpha-value>)',
        500: 'rgb(var(--purple-500) / <alpha-value>)',
        600: 'rgb(var(--purple-600) / <alpha-value>)',
        700: 'rgb(var(--purple-700) / <alpha-value>)',
        800: 'rgb(var(--purple-800) / <alpha-value>)',
        900: 'rgb(var(--purple-900) / <alpha-value>)',
        950: 'rgb(var(--purple-950) / <alpha-value>)',
      },
      yellow: {
        50: 'rgb(var(--yellow-50) / <alpha-value>)',
        100: 'rgb(var(--yellow-100) / <alpha-value>)',
        200: 'rgb(var(--yellow-200) / <alpha-value>)',
        300: 'rgb(var(--yellow-300) / <alpha-value>)',
        400: 'rgb(var(--yellow-400) / <alpha-value>)',
        500: 'rgb(var(--yellow-500) / <alpha-value>)',
        600: 'rgb(var(--yellow-600) / <alpha-value>)',
        700: 'rgb(var(--yellow-700) / <alpha-value>)',
        800: 'rgb(var(--yellow-800) / <alpha-value>)',
        900: 'rgb(var(--yellow-900) / <alpha-value>)',
        950: 'rgb(var(--yellow-950) / <alpha-value>)',
      },
      red: {
        50: 'rgb(var(--red-50) / <alpha-value>)',
        100: 'rgb(var(--red-100) / <alpha-value>)',
        200: 'rgb(var(--red-200) / <alpha-value>)',
        300: 'rgb(var(--red-300) / <alpha-value>)',
        400: 'rgb(var(--red-400) / <alpha-value>)',
        500: 'rgb(var(--red-500) / <alpha-value>)',
        600: 'rgb(var(--red-600) / <alpha-value>)',
        700: 'rgb(var(--red-700) / <alpha-value>)',
        800: 'rgb(var(--red-800) / <alpha-value>)',
        900: 'rgb(var(--red-900) / <alpha-value>)',
        950: 'rgb(var(--red-950) / <alpha-value>)',
      },
      primary: {
        DEFAULT: 'rgb(var(--primary) / <alpha-value>)',
        active: 'rgb(var(--primary-active) / <alpha-value>)',
        foreground: 'rgb(var(--primary-foreground) / <alpha-value>)',
      },
      info: {
        DEFAULT: 'rgb(var(--info) / <alpha-value>)',
        active: 'rgb(var(--info-active) / <alpha-value>)',
        foreground: 'rgb(var(--info-foreground) / <alpha-value>)',
      },
      success: {
        DEFAULT: 'rgb(var(--success) / <alpha-value>)',
        active: 'rgb(var(--success-active) / <alpha-value>)',
        foreground: 'rgb(var(--success-foreground) / <alpha-value>)',
      },
      warning: {
        DEFAULT: 'rgb(var(--warning) / <alpha-value>)',
        active: 'rgb(var(--warning-active) / <alpha-value>)',
        foreground: 'rgb(var(--warning-foreground) / <alpha-value>)',
      },
      danger: {
        DEFAULT: 'rgb(var(--danger) / <alpha-value>)',
        active: 'rgb(var(--danger-active) / <alpha-value>)',
        foreground: 'rgb(var(--danger-foreground) / <alpha-value>)',
      },
    },
    extend: {
      boxShadow: {
        card: 'var(--card-shadow)',
      },
      fontSize: {
        '2xs': ['12px', '16px'],
        xs: ['13px', '18px'],
        sm: ['14px', '20px'],
        md: ['15px', '22px'],
      },
      height: {
        '13': '3.25rem',
        screen: '100dvh',
        vh: '100vh',
      },
      minHeight: {
        screen: '100dvh',
        vh: '100vh',
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },
      keyframes: {
        'accordion-down': {
          from: { height: '0' },
          to: { height: 'var(--radix-accordion-content-height)' },
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: '0' },
        },
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
} satisfies Config

export default config

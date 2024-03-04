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
      inter: 'var(--font-inter), Helvetica, "sans-serif"',
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
      ring: 'rgb(var(--ring) / <alpha-value>)',
      background: 'rgb(var(--background) / <alpha-value>)',
      foreground: 'rgb(var(--foreground) / <alpha-value>)',
      muted: 'rgb(var(--muted) / <alpha-value>)',
      border: {
        DEFAULT: 'rgb(var(--border) / <alpha-value>)',
        active: 'rgb(var(--border-active) / <alpha-value>)',
        invalid: 'rgb(var(--border-invalid) / <alpha-value>)',
      },
      card: {
        DEFAULT: 'rgb(var(--card) / <alpha-value>)',
        border: 'rgb(var(--card-border) / <alpha-value>)',
        foreground: 'rgb(var(--card-foreground) / <alpha-value>)',
      },
      accent: {
        DEFAULT: 'rgb(var(--accent) / <alpha-value>)',
        active: 'rgb(var(--accent-active) / <alpha-value>)',
        foreground: 'rgb(var(--accent-foreground) / <alpha-value>)',
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
        screen: '100svh',
        vh: '100vh',
      },
      minHeight: {
        screen: '100svh',
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

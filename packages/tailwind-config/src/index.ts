import fs from 'node:fs'
import path, { dirname } from 'node:path'
import { getPackagesSync as getPackagesSyncFunc } from '@manypkg/get-packages'
import { findUpSync } from 'find-up'
import animate from 'tailwindcss-animate'

/**
 * 查找大仓的根目录
 * @param cwd
 */
function findMonorepoRoot(cwd: string = process.cwd()) {
  const lockFile = findUpSync(
    ['pnpm-lock.yaml', 'yarn.lock', 'package-lock.json'],
    {
      cwd,
      type: 'file',
    },
  )
  return dirname(lockFile || '')
}

/**
 * 获取大仓的所有包
 */
function getPackagesSync() {
  const root = findMonorepoRoot()
  return getPackagesSyncFunc(root)
}

const { packages } = getPackagesSync()

const tailwindPackages: string[] = []

packages.forEach((pkg) => {
  // apps目录下和 @vben-core/tailwind-ui 包需要使用到 tailwindcss ui
  if (fs.existsSync(path.join(pkg.dir, 'tailwind.config.mjs'))) {
    tailwindPackages.push(pkg.dir)
  }
})

export default {
  darkMode: ['class'],
  safelist: ['dark'],
  prefix: '',
  content: [
    'index.html',
    ...tailwindPackages.map(item =>
      path.join(item, 'src/**/*.{vue,js,ts,jsx,tsx,svelte,astro,html}'),
    ),
  ],
  theme: {
    container: {
      center: true,
      padding: '2rem',
      screens: {
        '2xl': '1400px',
      },
    },
    extend: {
      colors: {
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))',
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))',
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))',
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))',
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))',
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))',
        },
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))',
        },
      },
      borderRadius: {
        xl: 'calc(var(--radius) + 4px)',
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },
      keyframes: {
        'accordion-down': {
          from: { height: 0 },
          to: { height: 'var(--radix-accordion-content-height)' },
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: 0 },
        },
        'collapsible-down': {
          from: { height: 0 },
          to: { height: 'var(--radix-collapsible-content-height)' },
        },
        'collapsible-up': {
          from: { height: 'var(--radix-collapsible-content-height)' },
          to: { height: 0 },
        },
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
        'collapsible-down': 'collapsible-down 0.2s ease-in-out',
        'collapsible-up': 'collapsible-up 0.2s ease-in-out',
      },
    },
  },
  plugins: [animate],
}

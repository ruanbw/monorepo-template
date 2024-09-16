import antfu from '@antfu/eslint-config'

export default antfu({
  vue: true,
  javascript: true,
  typescript: true,
  tailwindcss: true,
  rules: {
    'no-undef': 'off',
  },
  formatters: {
    /**
     * Format CSS, LESS, SCSS files, also the `<style>` blocks in Vue
     * By default uses Prettier
     */
    css: true,
    /**
     * Format HTML files
     * By default uses Prettier
     */
    html: true,
  },
})

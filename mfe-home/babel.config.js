module.exports = {
  presets: ['next/babel'],
  plugins: [
    ['styled-components', { ssr: true }],
    [
      'module-resolver',
      { alias: { '@assets': './src/assets', '@styles': './src/styles' } },
    ],
  ],
};

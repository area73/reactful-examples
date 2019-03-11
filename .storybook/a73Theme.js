import { create } from '@storybook/theming';

export default create({
  base: 'dark',

  colorPrimary: '#6ec944',
  colorSecondary: 'rgba(234,209,70,0.2)',

  // UI
  appBg: '#222',
  appContentBg: '#333',
  appBorderColor: '#444',
  appBorderRadius: 0,

  // Typography
  fontBase: '"Helvetica Neue", "Lucida Grande" , "Open Sans", sans-serif',
  fontCode: 'monospace',

    // Text colors
    textColor: '#eee',
    textInverseColor: 'rgba(255,255,255,0.7)',

    // Toolbar default and active colors
    barTextColor: 'white',
    barSelectedColor: '#6ec944',
    barBg: 'black',

      // Form colors
      inputBg: '#555',
      inputBorder: '#222',
      inputTextColor: '#efefef',
      inputBorderRadius: 0,
/*
      brandTitle: 'My custom storybook',
      brandUrl: 'https://example.com',
      brandImage: 'https://placehold.it/350x150',
    */
});

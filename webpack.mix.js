const mix = require('laravel-mix');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */

mix
  .js('resources/js/app.js', 'public/js')
  .sass('resources/sass/app.scss', 'public/css');

mix.copy('resources/assets/images', 'public/images', false);

if (mix.inProduction()) {
  mix.version();
}

mix.browserSync({
  ui: false,
  injectChanges: true,
  notify: false,
  proxy: '127.0.0.1:8000'
});

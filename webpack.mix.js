let mix = require('laravel-mix').mix;

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for your application, as well as bundling up your JS files.
 |
 */
 mix.copy('node_modules/font-awesome/fonts', 'dist/fonts');
 mix.copy('node_modules/jquery-slimscroll/jquery.slimscroll.min.js', 'dist/js/vendor');
 mix.copy('node_modules/autosize/dist/autosize.min.js', 'dist/js/vendor');
 //mix.copy('node_modules/animate.css/animate.min.css', 'dist/css');
 mix.js('src/js/app.js', 'dist/js')
    .sass('src/scss/app.scss', 'dist/css');
 //mix.version(['dist/css/app.css', 'dist/js/app.js']);
// Full API
// mix.js(src, output);
// mix.extract(vendorLibs);
// mix.sass(src, output);
// mix.less(src, output);
// mix.combine(files, destination);
// mix.copy(from, to);
// mix.minify(file);
// mix.sourceMaps(); // Enable sourcemaps
// mix.version(); // Enable versioning.
// mix.disableNotifications();
// mix.setPublicPath('path/to/public'); <-- Useful for Node apps.
// mix.webpackConfig({}); <-- Override webpack.config.js, without editing the file directly.

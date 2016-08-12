/* jshint node: true */
/* jshint -W100 */
'use strict';


var gulp = require("gulp");
var babel = require("gulp-babel");
var browserSync = require('browser-sync');
var concat = require("gulp-concat");
var gutil = require('gulp-util');
var jshint = require('gulp-jshint');
var postcss = require('gulp-postcss');
var notify = require("gulp-notify");
var rename = require('gulp-rename');
var sass = require('gulp-sass');
var sourcemaps = require("gulp-sourcemaps");
var uglify = require('gulp-uglify');
var strip = require('gulp-strip-comments');
var stripCssComments = require('gulp-strip-css-comments');

var config = {
  sassPath: './src/scss',
  npmDir: './node_modules',
  bowerDir: './bower_components'
};
/*-- start copy all image --*/
gulp.task('copy-font-awesome', function() {return gulp.src(config.npmDir + '/font-awesome/fonts/**.*') 
  .pipe(gulp.dest('./dist/fonts')); 
});

gulp.task('copy-weather-icons', function() {return gulp.src(config.npmDir + '/weather-icons/font/**.*') 
  .pipe(gulp.dest('./dist/fonts')); 
});

gulp.task('copy-icheck-image', function() {
  return gulp.src(config.npmDir + '/icheck/skins/square/*.png')
  .pipe(gulp.dest('./dist/img/icheck/square'));
});

gulp.task('copy-ion-range-slider-image', function() {
  return gulp.src(config.npmDir + '/ion-rangeslider/img/*.png')
  .pipe(gulp.dest('./dist/img/irs'));
});

gulp.task('copy-jquery-scroll-up-image', function() {
  return gulp.src(config.npmDir + '/scrollup/demo/img/**.*')
  .pipe(gulp.dest('./dist/img/scrollup'));
});

/*-- start copy all js --*/
gulp.task('copy-jquery', function() { 
  return gulp.src(config.npmDir + '/jquery/dist/jquery.min.js') 
  .pipe(gulp.dest('./dist/js/core_lib')); 
});

gulp.task('copy-jquery-ui', function() {
  return gulp.src('./src/js/lib/jquery-ui.js') .pipe(gulp.dest('./dist/js/core_lib'));
});

gulp.task('copy-perfect-scroll-bar-js', function() {
  return gulp.src(config.npmDir + '/perfect-scrollbar/dist/js/perfect-scrollbar.jquery.min.js')
  .pipe(gulp.dest('./dist/js/core_lib'));
});

gulp.task('copy-pace-js', function() {
  return gulp.src(config.npmDir + '/pace-progress/pace.min.js')
  .pipe(gulp.dest('./dist/js/core_lib'));
});

gulp.task('copy-theter-js', function() {
  return gulp.src(config.npmDir + '/tether/dist/js/tether.min.js')
  .pipe(gulp.dest('./dist/js/core_lib'));
});

gulp.task('copy-labelauty-js', function() {
  return gulp.src(config.bower_components + '/jquery-labelauty/source/jquery-labelauty.js')
  .pipe(gulp.dest('./dist/js/core_lib'));
});

gulp.task('copy-clockpicker-js', function() {
  return gulp.src(config.npmDir + '/clockpicker/dist/jquery-clockpicker.min.js')
  .pipe(gulp.dest('./dist/js/core_lib'));
});

gulp.task('copy-selectize-js', function() {
  return gulp.src(config.npmDir + '/selectize/dist/js/standalone/selectize.min.js')
  .pipe(gulp.dest('./dist/js/core_lib'));
});

gulp.task('copy-select2-js', function() {
  return gulp.src(config.npmDir + '/select2/dist/js/select2.min.js')
  .pipe(gulp.dest('./dist/js/core_lib'));
});

gulp.task('copy-sweetalert2-js', function() {
  return gulp.src(config.npmDir + '/sweetalert2/dist/sweetalert2.min.js')
  .pipe(gulp.dest('./dist/js/core_lib'));
});

gulp.task('copy-simplemde-js', function() {
  return gulp.src(config.npmDir + '/simplemde/dist/simplemde.min.js')
  .pipe(gulp.dest('./dist/js/core_lib'));
});

gulp.task('copy-peity-js', function() {
  return gulp.src(config.npmDir + '/peity/jquery.peity.min.js')
  .pipe(gulp.dest('./dist/js/core_lib'));
});

gulp.task('copy-chart-js', function() {
  return gulp.src(config.npmDir + '/chart.js/dist/Chart.min.js')
  .pipe(gulp.dest('./dist/js/core_lib'));
});

gulp.task('copy-echarts-js', function() {
  return gulp.src(config.npmDir + '/echarts/dist/echarts.min.js')
  .pipe(gulp.dest('./dist/js/core_lib/echarts'));
});

gulp.task('copy-echarts-theme-default-js', function() {
  return gulp.src(config.npmDir + '/echarts/theme/default.js')
  .pipe(gulp.dest('./dist/js/core_lib/echarts'));
});

gulp.task('copy-echarts-theme-macarons-js', function() {
  return gulp.src(config.npmDir + '/echarts/theme/macarons.js')
  .pipe(gulp.dest('./dist/js/core_lib/echarts'));
});

gulp.task('copy-icheck-js', function() {
  return gulp.src(config.npmDir + '/icheck/icheck.min.js')
  .pipe(gulp.dest('./dist/js/core_lib'));
});

gulp.task('copy-moment-js', function() {
  return gulp.src(config.npmDir + '/moment/min/moment.min.js')
  .pipe(gulp.dest('./dist/js/core_lib'));
});

gulp.task('copy-pikaday-js', function() {
  return gulp.src(config.npmDir + '/pikaday/pikaday.js')
  .pipe(gulp.dest('./dist/js/core_lib'));
});

gulp.task('copy-fullcalendar-js', function() {
  return gulp.src(config.npmDir + '/fullcalendar/dist/fullcalendar.min.js')
  .pipe(gulp.dest('./dist/js/core_lib'));
});

gulp.task('copy-backstretch-js', function() {
  return gulp.src(config.npmDir + '/jquery.backstretch/jquery.backstretch.min.js')
  .pipe(gulp.dest('./dist/js/core_lib'));
});

gulp.task('copy-scrollup-js', function() {
  return gulp.src(config.npmDir + '/scrollup/dist/jquery.scrollUp.min.js')
  .pipe(gulp.dest('./dist/js/core_lib'));
});

gulp.task('copy-typeahead-js', function() {
  return gulp.src(config.npmDir + '/jquery-typeahead/dist/jquery.typeahead.min.js')
  .pipe(gulp.dest('./dist/js/core_lib'));
});

gulp.task('copy-ion-range-slider-js', function() {
  return gulp.src(config.npmDir + '/ion-rangeslider/js/ion.rangeSlider.min.js')
  .pipe(gulp.dest('./dist/js/core_lib'));
});

gulp.task('copy-jquery-mask-plugin-js', function() {
  return gulp.src(config.npmDir + '/jquery-mask-plugin/dist/jquery.mask.min.js')
  .pipe(gulp.dest('./dist/js/core_lib'));
});

gulp.task('copy-cropper-js', function() {
  return gulp.src(config.npmDir + '/cropper/dist/cropper.min.js')
  .pipe(gulp.dest('./dist/js/core_lib'));
});

gulp.task('copy-bootstrap-tab-js', function() {
  return gulp.src('./src/js/lib/bootstrap.tab.js') .pipe(gulp.dest('./dist/js/core_lib'));
});

gulp.task('copy-bootstrap-util-js', function() {
  return gulp.src('./src/js/lib/bootstrap.util.js') .pipe(gulp.dest('./dist/js/core_lib'));
});

gulp.task('copy-bootstrap-dropdown-js', function() {
  return gulp.src('./src/js/lib/bootstrap.dropdown.js') .pipe(gulp.dest('./dist/js/core_lib'));
});

gulp.task('copy-bootstrap-tooltip-js', function() {
  return gulp.src('./src/js/lib/bootstrap.tooltip.js') .pipe(gulp.dest('./dist/js/core_lib'));
});

gulp.task('copy-bootstrap-popover-js', function() {
  return gulp.src('./src/js/lib/bootstrap.popover.js') .pipe(gulp.dest('./dist/js/core_lib'));
});

gulp.task('copy-animate-css-js', function() {
  return gulp.src('./src/js/lib/animate.css.js') .pipe(gulp.dest('./dist/js/core_lib'));
});

gulp.task('copy-fullcalendar-app-js', function() {
  return gulp.src('./src/js/lib/fullcalendar.app.js') .pipe(gulp.dest('./dist/js/app_lib'));
});

gulp.task('copy-showpassword-js', function() {
  return gulp.src('./src/js/lib/show-password.js') .pipe(gulp.dest('./dist/js/app_lib'));
});

/*-- end copy all js --*/

gulp.task('compile-scss', function () {
  gulp.src('src/scss/**/*.scss')
  .pipe(sourcemaps.init())
  .pipe(sass({includePaths: [
    'src/scss',
    config.bowerDir + '/animatewithsass',
    config.npmDir + '/bulma',
    config.npmDir + '/vegeta',
    config.npmDir + '/font-awesome/scss',
    config.npmDir + '/weather-icons/sass',
    config.npmDir + '/selectize-scss/src',
  ]}))
  .pipe(sass({outputStyle: 'nested'}) )
  .on("error", notify.onError(function (error) {
    return "Error: " + error.message;
  }))
  .pipe(postcss([
      require('autoprefixer')
  ]))
  .pipe(rename('all.css'))
  .pipe(gulp.dest('dist/css'));
});

gulp.task('compile-production-scss', function () {
  gulp.src('src/scss/**/*.scss')
  .pipe(sourcemaps.init())
  .pipe(sass({includePaths: [
    'src/scss',
    config.bowerDir + '/animatewithsass',
    config.npmDir + '/bulma',
    config.npmDir + '/vegeta',
    config.npmDir + '/font-awesome/scss',
    config.npmDir + '/weather-icons/sass',
    config.npmDir + '/selectize-scss/src'
  ]}))
  //.pipe(strip())
  .pipe(sass({outputStyle: 'compressed'}) )
  .on("error", notify.onError(function (error) {
    return "Error: " + error.message;
  }))
  .pipe(postcss([
      require('autoprefixer')
  ]))
  .pipe(rename('all.min.css'))
  .pipe(stripCssComments({preserve: false}))
  .pipe(gulp.dest('dist/css'));
});

gulp.task('compile-js', function() {
  return gulp.src('src/js/plain/**/*.js')
  .pipe(concat('scripts.js'))
  .pipe(gulp.dest('dist/js/app_lib'));
});

gulp.task('compile-production-js',[
  'compile-js'
], function() {
  return gulp.src([
    config.npmDir + '/jquery/dist/jquery.js',
    './src/js/lib/jquery-ui.js',
    config.npmDir + '/perfect-scrollbar/dist/js/perfect-scrollbar.jquery.min.js',
    config.npmDir + '/scrollup/dist/jquery.scrollUp.min.js',
    config.npmDir + '/pace-progress/pace.min.js',
    config.npmDir + '/tether/dist/js/tether.min.js',
    config.bower_components + '/jquery-labelauty/source/jquery-labelauty.js',
    config.npmDir + '/clockpicker/dist/jquery-clockpicker.min.js',
    config.npmDir + '/select2/dist/js/select2.min.js',
    config.npmDir + '/selectize/dist/js/standalone/selectize.min.js',
    config.npmDir + '/sweetalert2/dist/sweetalert2.min.js',
    config.npmDir + '/simplemde/dist/simplemde.min.js',
    config.npmDir + '/peity/jquery.peity.min.js',
    config.npmDir + '/chart.js/dist/Chart.min.js',
    config.npmDir + '/echarts/dist/echarts.min.js',
    config.npmDir + '/echarts/theme/default.js',
    config.npmDir + '/echarts/theme/macarons.js',
    config.npmDir + '/icheck/icheck.min.js',
    config.npmDir + '/moment/min/moment.min.js',
    config.npmDir + '/pikaday/pikaday.js',
    config.npmDir + '/fullcalendar/dist/fullcalendar.min.js',
    config.npmDir + '/jquery.backstretch/jquery.backstretch.min.js',
    config.npmDir + '/jquery-typeahead/dist/jquery.typeahead.min.js',
    config.npmDir + '/ion-rangeslider/js/ion.rangeSlider.min.js',
    config.npmDir + '/jquery-mask-plugin/dist/jquery.mask.min.js',
    config.npmDir + '/cropper/dist/cropper.min.js',
    './src/js/lib/animate.css.js',
    './src/js/lib/bootstrap.util.js',
    './src/js/lib/bootstrap.dropdown.js',
    './src/js/lib/bootstrap.tab.js',
    './src/js/lib/bootstrap.tooltip.js',
    './src/js/lib/bootstrap.popover.js',
    './src/js/lib/fullcalendar.app.js',
    './src/js/lib/show-password.js',
    './src/js/plain/default_required.js',
    './src/js/plain/swet_alert.js'
  ])
  //.pipe(strip())
  .pipe(concat('all.min.js'))
  .pipe(uglify())
  .pipe(rename('all.min.js'))
  .pipe(gulp.dest('dist/js'));
});

gulp.task('browser-sync', function() {
    browserSync.init(["dist/css/*.css", "dist/js/*.js"], {
        server: {
            baseDir: "./dist"
        }
    });
});

gulp.task('production',
  [
    'copy-font-awesome',
    'copy-weather-icons',
    'copy-icheck-image',
    'copy-jquery-scroll-up-image',
    'copy-ion-range-slider-image',
    'compile-production-scss',
    'compile-production-js'
  ]
);

gulp.task('default',
  [
    'copy-font-awesome',
    'copy-weather-icons',
    'copy-icheck-image',
    'copy-jquery-scroll-up-image',
    'copy-ion-range-slider-image',
    'copy-jquery',
    'copy-jquery-ui' ,
    'copy-theter-js',
    'copy-perfect-scroll-bar-js',
    'copy-scrollup-js',
    'copy-pace-js',
    'copy-labelauty-js',
    'copy-clockpicker-js',
    'copy-select2-js',
    'copy-selectize-js',
    'copy-sweetalert2-js',
    'copy-simplemde-js',
    'copy-peity-js',
    'copy-chart-js',
    'copy-echarts-js',
    'copy-echarts-theme-default-js',
    'copy-echarts-theme-macarons-js',
    'copy-icheck-js',
    'copy-moment-js',
    'copy-pikaday-js',
    'copy-fullcalendar-js',
    'copy-backstretch-js',
    'copy-animate-css-js',
    'copy-typeahead-js',
    'copy-ion-range-slider-js',
    'copy-jquery-mask-plugin-js',
    'copy-cropper-js',
    'copy-bootstrap-tab-js',
    'copy-bootstrap-util-js',
    'copy-bootstrap-dropdown-js',
    'copy-bootstrap-tooltip-js',
    'copy-bootstrap-popover-js',
    'copy-fullcalendar-app-js',
    'copy-scrollup-js',
    'copy-showpassword-js',
    'compile-scss',
    'compile-js',
    'browser-sync'
  ],
  function () {
    gulp.watch("src/scss/**/*.scss", ['compile-scss']).on('change', browserSync.reload);
    gulp.watch(
      "src/js/**/*.js",
      [
        'copy-animate-css-js',
        'copy-bootstrap-tab-js',
        'copy-bootstrap-util-js',
        'copy-bootstrap-dropdown-js',
        'copy-bootstrap-tooltip-js',
        'copy-bootstrap-popover-js',
        'copy-fullcalendar-app-js',
        'copy-showpassword-js',
        'compile-js'
      ]
    ).on('change', browserSync.reload);
    gulp.watch('dist/pages/**/*.html').on('change', browserSync.reload);
    gulp.watch('dist/documentation/**/*.html').on('change', browserSync.reload);
    gulp.watch('dist/**/*.html').on('change', browserSync.reload);
  }
);

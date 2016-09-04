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
var notifier = require('node-notifier');

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

gulp.task('browser-sync', function() {
    browserSync.init(["dist/css/*.css", "dist/js/*.js"], {
        server: {
            baseDir: "./"
        }
    });
});

gulp.task('default',
  [
    'copy-font-awesome',
    'copy-weather-icons',
    'copy-icheck-image',
    'copy-jquery-scroll-up-image',
    'copy-ion-range-slider-image',
    'compile-scss'
  ],
  function () {
    notifier.notify({ title: 'Compile Process', message: 'Done' });
  }
);

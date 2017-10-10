var gulp = require('gulp');

// Less
var less = require('gulp-less');
var path = require('path');

// Autoprefix
var LessAutoprefix = require('less-plugin-autoprefix');
var autoprefix = new LessAutoprefix({ browsers: ['last 2 versions'] });

// Clean CSS
var cleanCSS = require('gulp-clean-css');


// DEFAULT
gulp.task('default', function() {
  return gulp.src(['./assets/less/**/!(_)*.less'])
  .pipe(less({
    paths: [ path.join(__dirname, 'less', 'includes') ],
    plugins: [autoprefix]
  }))
  .pipe(cleanCSS({compatibility: 'ie9'}))
  .pipe(gulp.dest('./assets/css'));
});

// WATCH
gulp.task('watch', ['default'], function () {
  gulp.watch('./assets/less/**/*.less', ['default']);
});
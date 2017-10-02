var gulp = require('gulp');
var sass = require('gulp-sass');
var watchSass = require('gulp-watch-sass');
var browserify = require('gulp-browserify');

// Basic usage 
gulp.task('browserify', function () {
  // Single entry point to browserify 
  gulp.src('app/main.js')
    .pipe(browserify({
      insertGlobals: true,
      debug: true
    }))
    .pipe(gulp.dest('./build/js'))
});

gulp.task('sass', function(){
  return gulp.src('app/scss/styles.scss')
    .pipe(sass()) // Converts Sass to CSS with gulp-sass
    .pipe(gulp.dest('./build/css'))
});

gulp.task("sass:watch", () => {
  gulp.watch([
    "./app/**/*.scss",
  ], ["sass"]);
});
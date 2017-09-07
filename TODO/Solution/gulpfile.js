var gulp = require('gulp');
var sass = require('gulp-sass');
var watchSass = require('gulp-watch-sass');

gulp.task('sass', function(){
  return gulp.src('app/scss/styles.scss')
    .pipe(sass()) // Converts Sass to CSS with gulp-sass
    .pipe(gulp.dest('app/build/css'))
});

gulp.task("sass:watch", () => {
  gulp.watch([
    "./app/**/*.scss",
  ], ["sass"]);
});
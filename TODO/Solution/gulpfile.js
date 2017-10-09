var gulp = require('gulp');
var sass = require('gulp-sass');
var watchSass = require('gulp-watch-sass');
var browserify = require('browserify');
var babelify = require('babelify');
var source = require('vinyl-source-stream');

//Build SASS
gulp.task('sass', function(){
  return gulp.src('src/scss/styles.scss')
    .pipe(sass())
    .pipe(gulp.dest('build'))
});

//Build Babel and Browserify
gulp.task('babel-and-browserify', function () {
    return browserify({entries: 'src/js/app.js', debug: true})
        .transform("babelify", { presets: ["es2015"] })
        .bundle()
        .pipe(source('app.js'))
        .pipe(gulp.dest('build'));
});
 
//Watch
gulp.task('watch', function () {
    gulp.watch('src/js/*.js', ['babel-and-browserify']);
    gulp.watch('src/scss/*.scss', ['sass']);
});

//Default
gulp.task('default', ['watch']);
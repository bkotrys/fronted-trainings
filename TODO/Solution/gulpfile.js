var gulp = require('gulp');
var sass = require('gulp-sass');
var watchSass = require('gulp-watch-sass');
var browserify = require('browserify');
var babelify = require('babelify');
var source = require('vinyl-source-stream');
var buffer = require('vinyl-buffer');
var uglify = require('gulp-uglify');
var sourcemaps = require('gulp-sourcemaps');
var livereload = require('gulp-livereload');

//Build SASS
gulp.task('sass', function(){
  return gulp.src('src/scss/styles.scss')
    .pipe(sass())
    .pipe(gulp.dest('build'))
});

gulp.task('browserify', function () {
    return browserify({ entries: './src/js/app.js', debug: true })
        .transform("babelify", { presets: ["es2015"] })
        .bundle()
        .pipe(source('app.js'))
        .pipe(buffer())
        .pipe(sourcemaps.init())
        .pipe(uglify())
        .pipe(sourcemaps.write('./maps'))
        .pipe(gulp.dest('./build/js'))
        .pipe(livereload());
});
 
//Watch
gulp.task('watch', function () {
    livereload.listen();
    gulp.watch('src/js/*.js', ['browserify']);
    gulp.watch('src/scss/*.scss', ['sass']);
});

//Default
gulp.task('default', ['watch']);

gulp.task('build', ['sass', 'browserify']);
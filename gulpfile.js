var gulp = require('gulp');
var concat = require('gulp-concat');
var cleanCSS = require('gulp-clean-css');
var mainBowerFiles = require('main-bower-files');

gulp.task('default', ['compress-src', 'compress-bower', 'clean-css']);

gulp.task('compress-bower', function () {
  return gulp.src(mainBowerFiles(), { base: '/bower_components' })
    .pipe(concat('vendor.js'))
    .pipe(gulp.dest('public/build/scripts'));
});

gulp.task('compress-src', function () {
  return gulp.src(['./public/**/*.js', '!public/build/scripts/**'])
    .pipe(concat('app.js'))
    .pipe(gulp.dest('public/build/scripts'));
});

gulp.task('clean-css', function () {
  return gulp.src('public/assets/stylesheets/input.css')
    .pipe(cleanCSS())
    .pipe(gulp.dest('public/build/style'));
})

var gulp = require('gulp');
var concat = require('gulp-concat');
var mainBowerFiles = require('main-bower-files');

gulp.task('default', ['compress-src', 'compress-bower', 'minify-css']);

gulp.task('compress-bower', function () {
  return gulp.src(mainBowerFiles(), { base: '/bower_components' })
    .pipe(concat('vendor.js'))
    .pipe(gulp.dest('public/build/scripts'));
});

gulp.task('compress-src', function () {
  return gulp.src(['./public/**/*.js', '!public/scripts/**'])
    .pipe(concat('app.js'))
    .pipe(gulp.dest('public/build/scripts'));
});

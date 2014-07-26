var gulp        = require('gulp'),
    rename      = require('vinyl-source-stream'),
    browserify  = require('browserify'),
    reactify    = require('reactify'),
    clean       = require('gulp-clean');

gulp.task('scripts', function () {
  browserify('./src/main.js')
    .transform(reactify)
  .bundle()
  .pipe(rename('gulpy.js'))
  .pipe(gulp.dest('./app/assets/javascripts'));
});

gulp.task('watch', function () {
  gulp.watch('./src/**/*', ['scripts']);
});

gulp.task('clean', function () {
  return gulp.src(['app/assets/javascripts'], {read: false})
    .pipe(clean());
});

gulp.task('default', ['clean', 'scripts', 'watch']);

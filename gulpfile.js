var gulp        = require('gulp'),
    rename      = require('vinyl-source-stream'),
    browserify  = require('browserify'),
    reactify    = require('reactify'),
    clean       = require('gulp-clean'),
    mocha       = require('gulp-mocha');

gulp.task('scripts', function () {
  browserify('./src/main.js')
    .transform(reactify)
  .bundle()
  .pipe(rename('gulpy.js'))
  .pipe(gulp.dest('./app/assets/javascripts'));
});

gulp.task('test', function () {
  gulp.src('./test/**/*_spec.js')
    .pipe(mocha());
});

gulp.task('watch', function () {
  gulp.watch(['./src/**/*', './test/**/*'], ['scripts', 'test']);
});

gulp.task('clean', function () {
  return gulp.src(['app/assets/javascripts'], {read: false})
    .pipe(clean());
});

gulp.task('default', ['clean', 'scripts', 'watch']);

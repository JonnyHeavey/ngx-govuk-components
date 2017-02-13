const gulp = require('gulp');
const del = require('del');
const sass = require('gulp-sass');
const typescript = require('gulp-typescript');
const tscConfig = require('./tsconfig.json');
const cssBase64 = require('gulp-css-base64');

// clean the contents of the distribution directory
gulp.task('clean', function () {
  return del.sync('dist');
});

// Sass compile (global styles only)
gulp.task('sass', function () {
  return gulp.src('./src/ngx-govuk-components.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(cssBase64({
      baseDir: "./dist/assets",
    }))
    .pipe(gulp.dest('dist/assets/styles'));
});

gulp.task('images', function () {
  return gulp.src('./node_modules/govuk_frontend_alpha/assets/images/**/*.png')
    .pipe(gulp.dest('dist/assets/images'));
});

// TypeScript compile
gulp.task('compile', ['clean', 'images', 'sass'], function () {
  return gulp
    .src('src/**/*.ts')
    .pipe(typescript(tscConfig.compilerOptions))
    .pipe(gulp.dest('dist'));
});


gulp.task('build', ['compile']);
gulp.task('default', ['build']);

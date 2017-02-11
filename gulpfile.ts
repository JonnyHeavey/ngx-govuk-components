const gulp = require('gulp');
const del = require('del');
const sass = require('gulp-sass');
const typescript = require('gulp-typescript');
const tscConfig = require('./tsconfig.json');
const embedSass = require('gulp-angular2-embed-sass');

// clean the contents of the distribution directory
gulp.task('clean', function () {
  return del('dist/**/*');
});

// Sass compile (global styles only)
gulp.task('sass', function () {
  return gulp.src('./src/ng2-govuk-components.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('dist/assets/styles'));
});

// TypeScript compile
gulp.task('compile', ['clean', 'sass'], function () {
  return gulp
    .src('src/**/*.ts')
    .pipe(embedSass())
    .pipe(typescript(tscConfig.compilerOptions))
    .pipe(gulp.dest('dist'));
});


gulp.task('build', ['compile']);
gulp.task('default', ['build']);

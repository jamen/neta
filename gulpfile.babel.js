import gulp from 'gulp';
import babel from 'gulp-babel';
import stylus from 'gulp-stylus';
import pug from 'gulp-pug';

// Default "gulp" task:
gulp.task('default', ['build', 'package']);

// Transpiling ES6 to ES5 with Babel:
gulp.task('build:javascript', () => {
  return gulp.src(['src/scripts/**.js', 'src/index.js'])
    .pipe(babel())
    .pipe(gulp.dest('out'));
});

// Compiling Stylus to CSS:
gulp.task('build:stylus', () => {
  return gulp.src('src/styles/**.styl')
    .pipe(stylus())
    .pipe(gulp.dest('out'));
});

// Compiling Pug to HTML:
gulp.task('build:pug', () => {
  return gulp.src('src/views/**.pug')
    .pipe(pug())
    .pipe(gulp.dest('out'));
});

// Build all
gulp.task('build', ['build:javascript', 'build:stylus', 'build:pug']);

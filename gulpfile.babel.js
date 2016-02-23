import gulp from 'gulp';
import babel from 'gulp-babel';
import stylus from 'gulp-stylus';
import pug from 'gulp-pug';
import del from 'del';

// Default "gulp" task:
gulp.task('default', ['package']);

// Transpiling ES6 to ES5 with Babel:
gulp.task('build:javascript', ['clean:javascript'], () => {
  return gulp.src(['src/scripts/**.js', 'src/index.js'], { base: 'src' })
    .pipe(babel())
    .pipe(gulp.dest('out'));
});

// Compiling Stylus to CSS:
gulp.task('build:stylus', ['clean:css'], () => {
  return gulp.src('src/styles/index.styl', { base: 'src' })
    .pipe(stylus())
    .pipe(gulp.dest('out'));
});

// Compiling Pug to HTML:
gulp.task('build:pug', ['clean:html'], () => {
  return gulp.src('src/views/**.pug', { base: 'src' })
    .pipe(pug())
    .pipe(gulp.dest('out'));
});

// Build all
gulp.task('build', ['build:javascript', 'build:stylus', 'build:pug']);

// Cleaning
gulp.task('clean:javascript', () => del(['out/scripts/**', 'out/index.js']));
gulp.task('clean:css', () => del(['out/styles/**']));
gulp.task('clean:html', () => del(['out/views/**']));
gulp.task('clean', ['clean:javascript', 'clean:css', 'clean:html']);

// Packaging
gulp.task('package', ['build'], () => {

});

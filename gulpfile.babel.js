import gulp from 'gulp';
import rename from 'gulp-rename';
import babel from 'gulp-babel';
import stylus from 'gulp-stylus';
import eslint from 'gulp-eslint';
import del from 'del';
import path from 'path';
import { exec, spawn } from 'child_process';

const output = 'out';
const dist = 'dist';
const js = { presets: ['es2015', 'react'] };
const bin = path.join(__dirname, 'node_modules', '.bin');
const pack = path.join(bin, 'electron-packager');
const electron = path.join(bin, 'electron');
const version = '0.37.6';
const handlePack = function handlePack(err, stdout, stderr) {
  if (err) throw err;
  if (stdout) console.log(stdout);
  if (stderr) console.log(stderr);
  this();
};

gulp.task('lib', () =>
  gulp.src('lib/*.js', { base: '.' })
  .pipe(babel(js))
  .pipe(gulp.dest(output))
);

gulp.task('ui', () =>
  gulp.src('ui/*.js', { base: '.' })
  .pipe(babel(js))
  .pipe(gulp.dest(output))
);

gulp.task('styles', () =>
  gulp.src('styles/index.styl')
  .pipe(stylus())
  .pipe(rename('neta.css'))
  .pipe(gulp.dest(output))
);

gulp.task('copy', () =>
  gulp.src(['package.json', 'README.md', 'LICENSE', 'index.html'])
  .pipe(gulp.dest(output))
);

gulp.task('clean', () => del([output, dist]));

gulp.task('build', ['lib', 'ui', 'styles', 'copy']);

gulp.task('start', ['build'], (cb) => {
  const run = spawn(electron, ['out', '--dev']);
  process.stdin.pipe(run.stdout);
  run.on('error', () => {});
  run.on('exit', () => cb());
});

gulp.task('lint', () =>
  gulp.src(['lib/*.js', 'ui/*.js'])
  .pipe(eslint())
  .pipe(eslint.format())
);

gulp.task('watch', () => {
  gulp.watch([
    'lib/*.js',
    'ui/*.js',
    'styles/*.styl',
    'index.html',
  ], ['start', 'lint']);
});

gulp.task('package-win32', ['build'], (cb) =>
  exec(
`${pack} out \
--platform="win32" \
--arch="all" \
--version="${version}" \
--out="${dist}"`,
    handlePack.bind(cb)
  )
);

gulp.task('package-linux', ['build'], (cb) =>
  exec(
`${pack} out \
--platform="linux" \
--arch="all" \
--version="${version}" \
--out="${dist}"`,
    handlePack.bind(cb)
  )
);

gulp.task('package-mac', ['build'], (cb) =>
  exec(
`${pack} out \
--platform="darwin" \
--arch="all" \
--version="${version}" \
--out="${dist}"`,
    handlePack.bind(cb)
  )
);

gulp.task('package', ['package-win32', 'package-linux', 'package-mac']);

gulp.task('default', ['watch']);

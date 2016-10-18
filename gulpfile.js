const gulp = require('gulp');
const del = require('del');
const ts = require('gulp-typescript');
const tscConfig = require('./tsconfig.json');
const sourcemaps = require('gulp-sourcemaps');
const tslint = require('gulp-tslint');
const browserSync = require('browser-sync');
const reload = browserSync.reload;
const tsconfig = require('tsconfig-glob');
var tsProject = ts.createProject('tsconfig.json');


// clean the contents of the distribution directory
gulp.task('clean', function () {
  return del('dist/**/*');
});

// copy static assets - i.e. non TypeScript compiled source
gulp.task('copy:assets', ['clean'], function() {
  return gulp.src(['app/**/*', 'index.html', 'styles.css', 'systemjs.config.js', '!app/**/*.ts'], { base : './' })
    .pipe(gulp.dest('dist'))
});

// copy dependencies
gulp.task('copy:libs', ['clean'], function() {
  return gulp.src([
      'node_modules/**/*'
    ])
    .pipe(gulp.dest('dist/libs'))
});

// linting
gulp.task('tslint', function() {
  return gulp.src('app/**/*.ts')
  .pipe(tslint({
      formatter: "verbose"
  }))
  .pipe(tslint.report())
});

gulp.task('compile', ['clean'], function() {
    var tsResult = tsProject.src() // instead of gulp.src(...)
        .pipe(tsProject());

    return tsResult.js.pipe(sourcemaps.init()).pipe(sourcemaps.write('.')).pipe(gulp.dest('dist/app'));
});

// update the tsconfig files based on the glob pattern
gulp.task('tsconfig-glob', function () {
  return tsconfig({
    configPath: '.',
    indent: 2
  });
});

// Run browsersync for development
gulp.task('serve', ['build'], function() {
  browserSync({
    server: {
      baseDir: 'dist'
    }
  });

  gulp.watch(['app/**/*', 'index.html', 'styles.css'], ['buildAndReload']);
});

gulp.task('build', ['tslint', 'compile', 'copy:libs', 'copy:assets']);
gulp.task('buildAndReload', ['build'], reload);
gulp.task('default', ['build']);

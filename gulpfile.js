var gulp = require("gulp");
var babel = require("gulp-babel");
var sass = require('gulp-sass');
var somaps = require('gulp-sourcemaps');
var gutil = require('gulp-util');

gulp.task('transform', function() {
/**
 * deguide plugins
 */
  var js = gulp.src("app/ES6/**/*.js")
    .pipe(babel())
    .pipe(gulp.dest("app/assets/js"));  
  var jsx = gulp.src("app/ES6/host/*.jsx")
  .pipe(babel())
  .pipe(gulp.dest("app/assets/jsx"));

  return [js, jsx];

});

var sassOpts = {
  errLogToConsole: true,
  outputStyle: 'expanded'
};
var sassIn = 'app/sass/**/*.sass'
var sassOut = 'app/assets/css/'
gulp.task('sass', function() {
  return gulp.src(sassIn)
             .pipe(somaps.init())
             .pipe(sass(sassOpts).on('error', sass.logError))
             .pipe(somaps.write('./maps'))
             .pipe(gulp.dest(sassOut))
});

gulp.task('sass:watch', function(){
  gulp.watch(sassIn, ['sass'], function(event) {
    gutil.log(gutil.colors.cyan('Sass file was transformed into css.'))
  })
});

gulp.task('js:watch', function() {
  gulp.watch(['app/ES6/**/*.js', 'app/ES6/**/*.jsx'], ['transform'], function(event) {
    gutil.log('Ecma6 File ' + event.path + ' was transformed into Ecma5.');
  })
});

gulp.task("default", ['js:watch', 'sass:watch'], function(){
  gutil.log(gutil.colors.green('Gulp started! Running Tasks...'));
});

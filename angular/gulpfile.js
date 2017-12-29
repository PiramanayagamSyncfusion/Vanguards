var gulp = require('gulp'),
    merge = require('gulp-merge-json');

gulp.task('merge', function() {
  gulp.src('./snippets/**.json')
      .pipe(merge({ fileName: 'index.json'}))
      .pipe(gulp.dest('./snippets'))
});
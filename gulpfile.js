var gulp = require('gulp'),
    merge = require('gulp-merge-json');

gulp.task('ts-merge', function() {
  gulp.src('typescript/snippets/**.json')
      .pipe(merge({ fileName: 'index.json'}))
      .pipe(gulp.dest('typescript/snippets'))
});
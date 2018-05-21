
const gulp = require('gulp');
const sass = require('gulp-sass');
const image = require('gulp-image');
const cleanCSS = require('gulp-clean-css');
const uglify = require('gulp-uglify');
//const pump = require('pump'); for js errors
//const spritesmith = require('gulp.spritesmith');

//generate scss > css
gulp.task('sass', () =>
	gulp.src('./sass/**/*.scss')
		.pipe(sass())
		.pipe(gulp.dest('./css'))
);
//optimize image
gulp.task('imgz', () =>
    gulp.src('assets/*')
        .pipe(image())
        .pipe(gulp.dest('img'))
);
//optimize css
gulp.task('mincss', () => {
  return gulp.src('css/*.css')
    .pipe(cleanCSS({compatibility: 'ie8'}))
    .pipe(gulp.dest('css-min'));
});
//optimize js
gulp.task('minjs', () =>
    gulp.src('js/*.js')
        .pipe(uglify())
        .pipe(gulp.dest('js-min'))
);

//sprites
// gulp.task('sprite', function () {
//   var spriteData = gulp.src('img/icons/*.png').pipe(spritesmith({
//     imgName: 'sprite.png',
//     cssName: 'sprite.css',
// 	imgPath: '../sprite-gen/sprite.png'
// 	//cssName: 'sprite.scss',   sass
//   }));
//   return spriteData.pipe(gulp.dest('sprite-gen/'));
// });

//watch
gulp.task('watch', function() {
	gulp.watch('./sass/**/*.scss', ['sass']);
	//gulp.watch('assets/*', ['imgz']);
});
//watch #2
gulp.task('default', ['watch', 'sass']);

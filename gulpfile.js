const { src, dest, watch, series, parallel } = require('gulp')
const sass        = require('gulp-dart-sass');
const browserSync = require('browser-sync');
const uglify      = require('gulp-uglify');
const postcss     = require('gulp-postcss');
const mqpacker    = require('css-mqpacker');
const concat      = require('gulp-concat');
const sourcemaps = require('gulp-sourcemaps');
// const htmlhint    = require('gulp-htmlhint');

function css() {
  return src('_src/**/*.scss', { sourcemaps: true })
    .pipe(sourcemaps.init()) // khởi tạo sourcemap
    .pipe(sass({ outputStyle: 'expanded' }).on('error', sass.logError)) // dùng expanded để dễ đọc
    .pipe(postcss([
      mqpacker()
    ]))
    .pipe(sourcemaps.write('./sourcemaps')) // ghi ra sourcemap
    .pipe(dest('./', { sourcemaps: '.' })); // ghi file .map kế bên file css
}

function js() {
  return src(['_src/**/!(_)*.js','!_src/_**/*.js'],{ sourcemaps: false })
  .pipe(uglify({output:{comments: /^!/ }}))
  .pipe(dest('./'), { sourcemaps: './sourcemaps' });
}


function serve() {
    browserSync.init({
        server: {
          baseDir: "../",
          directory: true
        },
        port: 3000,
        open: false
    });
}

function reload(done) {
  browserSync.reload();
  done();
}
function libs() {
  return src([
      './node_modules/jquery/dist/jquery.min.js',
      './node_modules/gsap/dist/gsap.min.js',
      './node_modules/gsap/dist/ScrollTrigger.min.js',
      './node_modules/slick-carousel/slick/slick.min.js'
    ])
  // .pipe(uglify({output:{comments: /^!|Version/i }}))
  .pipe(concat('libs.js'))
  .pipe(dest('./js'));
}

function libsEximo() {
  return src([
      './node_modules/jquery/dist/jquery.min.js',
      // './node_modules/gsap/dist/gsap.min.js',
      // './node_modules/gsap/dist/ScrollTrigger.min.js',
      // './node_modules/slick-carousel/slick/slick.min.js'
    ])
  // .pipe(uglify({output:{comments: /^!|Version/i }}))
  .pipe(concat('libs.js'))
  .pipe(dest('./eximo_poikatsu/js'));
}

// function lint() {
//   return src(['**/*.html','!node_modules/**/*'])
//   .pipe(htmlhint({
//     "attr-lowercase": [
//       "viewBox"
//     ],
//     "tagname-lowercase": [
//       "linearGradient"
//     ]
//   }))
//   .pipe(htmlhint.reporter());
// }

exports.css = css;
exports.reload = reload;
exports.js = js;
exports.libs = libs;
exports.libsEximo = libsEximo;
// exports.lint = lint;

exports.default = () => {
  serve();
  watch('_src/**/*.scss', series(css, reload));
  watch(['_src/**/!(_)*.js','!_src/_**/*.js'], series(js, reload));
}

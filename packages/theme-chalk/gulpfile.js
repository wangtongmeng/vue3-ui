const { series, src, dest } = require('gulp')
const sass = require('gulp-dart-sass')
const autoprefixer = require('gulp-autoprefixer')
const cssmin = require('gulp-cssmin')


function compile() { // 处理scss文件
    return src('./src/*.scss') // 找到src下所有的scss文件
    .pipe(sass.sync()) // 同步编译
    .pipe(autoprefixer({})) // 添加前缀
    .pipe(cssmin()) // 代码压缩
    .pipe(dest('./lib')) // 生成代码到lib目录
}
function copyfont(){ // 拷贝字体样式
    return src('./src/fonts/**').pipe(cssmin()).pipe(dest('./lib/fonts'))
}

exports.build = series(compile,copyfont) // 线性编译 先编译compile，再编译copyfont
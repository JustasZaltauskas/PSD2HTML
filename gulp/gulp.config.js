module.exports = function() {
  var dist = './content/';

  var config = {
    browserSync: {
      name: 'Server',
      baseDir: './'
    },
    scss: {
      src: [
        './scss/**/*.scss'
      ],
      cssFolder: dist + 'styles/'
    },
    html: {
      src: [
        './index.html'
      ],
      htmlFolder: dist
    },
    js: {
      src: [
        './scripts/**/*.js'
      ],
      jsFolder: dist + 'scripts'
    },

  };

  return config;
};
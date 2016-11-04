module.exports = function () {
  this.loadNpmTasks('grunt-nw-builder');
  return this.config('nwjs', {
    options: {
      version: '0.12.1',
      platforms: ['osx'],
      buildDir: './bin',
      keep_nw: true,
      embed_nw: false
    },
    src: ['./dist/**/*']
  });
};

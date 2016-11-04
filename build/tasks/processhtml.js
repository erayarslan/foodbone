module.exports = function () {
  this.loadNpmTasks("grunt-processhtml");
  return this.config("processhtml", {
    release: {
      files: {
        "dist/index.html": ["index.html"]
      }
    },
    webkit: {
      files: {
        "dist/index.html": ["webkit.html"]
      }
    }
  });
};

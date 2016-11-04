module.exports = function () {
  this.loadTasks("build/tasks");

  this.registerTask("build", [
    "clean",
    "jshint",
    "processhtml:webkit",
    "copy",
    "requirejs",
    "styles",
    "cssmin",
    "nwjs"
  ]);

  this.registerTask("default", [
    "clean",
    "jshint",
    "processhtml:release",
    "copy",
    "requirejs",
    "styles",
    "cssmin",
    "connect",
    "watch"
  ]);
};

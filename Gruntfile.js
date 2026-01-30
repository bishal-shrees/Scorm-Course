module.exports = function (grunt) {
  grunt.initConfig({
    scorm_manifest: {
      custom_options: {
        options: {
          version: "2004", // Changed from 1.2 to SCORM 2004
          courseId: "CPR and AED Awareness", // Organisation ID
          SCOtitle: "CPR and AED Awareness", // Course Title
          moduleTitle: "CPR and AED Awareness", // Module Title
          launchPage: "index.html", // First page
          path: "./", // Export directory
          masteryScore: 80, // optional
          objectives: [
            { id: "obj1", title: "Understand CPR" },
            { id: "obj2", title: "Understand AED use" },
          ],
        },
        files: [
          {
            expand: true,
            cwd: "./",
            src: ["**/*.*"],
            filter: "isFile",
          },
        ],
      },
    },
  });

  grunt.loadNpmTasks("grunt-scorm-manifest");
  grunt.registerTask("default", ["scorm_manifest"]);
};

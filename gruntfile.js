module.exports = function init(_grunt) {
  // Initialise configuration.
  _grunt.initConfig({
    bump: {
      options: {
        commitFiles: ["-a"],
        commitMessage:
          '<%if(grunt.config("commitMessage")){%><%=grunt.config("commitMessage")%><%}else{%>Release v%VERSION%<%}%>',
        pushTo: "origin",
      },
    },

    run: {
      audit: { args: ["npm", "audit"], cmd: "npx" },
      deploy: { args: ["deploy"], cmd: "firebase" },
      licenseChecker: {
        args: [
          "license-checker",
          "--production",
          "--json",
          "--out",
          "LICENSES.json",
        ],
        cmd: "npx",
      },
      licenseNLF: { args: ["nlf", "-d"], cmd: "npx" },
      lint: { args: ["eslint", "*.js"], cmd: "npx" },
      outdated: { args: ["npm", "outdated"], cmd: "npx" },
      publish: { args: ["publish"], cmd: "npx" },
      test: { args: ["WARNING: No tests implemented."], cmd: "echo" },
      update: { args: ["npm", "update", "--save/--save-dev"], cmd: "npx" },
    },
  });

  // Load external tasks.
  _grunt.loadNpmTasks("grunt-bump");
  _grunt.loadNpmTasks("grunt-run");

  // Register local tasks.
  _grunt.registerTask("audit", ["run:audit"]);
  _grunt.registerTask("build", ["run:deploy"]);
  _grunt.registerTask("licenseCheck", ["run:licenseChecker", "run:licenseNLF"]);
  _grunt.registerTask("lint", ["run:lint"]);
  _grunt.registerTask("outdated", ["run:outdated"]);
  _grunt.registerTask("release", ["bump", "run:deploy"]);
  _grunt.registerTask("test", ["run:test"]);
  _grunt.registerTask("sync", ["bump"]);
  _grunt.registerTask("update", ["run:update"]);
};

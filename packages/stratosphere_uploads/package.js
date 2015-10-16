Package.describe({
  name: "stratosphere:uploads",
  summary: "Stratosphere Uploads package",
  version: "1.0.0-beta2",
  git: "https://github.com/sebakerckhof/stratosphere.git"
});

Package.onUse(function (api) {

  api.versionsFrom(['METEOR@1.2.0.2']);

  api.use([
    'stratosphere:lib',
    'stratosphere:collections',
    'uploadserver'
  ]);

  api.addFiles([
    'server/startup/server.js',
  ], ['server']);

  Npm.depends({
    "wrench":"1.5.8",
    "fs-extra":"0.19.0"
  });

});
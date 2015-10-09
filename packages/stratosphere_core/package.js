Package.describe({
  name: "stratosphere:core",
  summary: "Stratosphere Main package",
  version: "1.0.0-beta1",
  git: "https://github.com/sebakerckhof/stratosphere.git"
});

Package.onUse(function (api) {

  api.versionsFrom(['METEOR@1.2.0.2']);

  api.use([
    'stratosphere:lib',
    'stratosphere:collections',
    'stratosphere:synchronizer',
    'stratosphere:uploads'
  ]);

  api.imply([
    'stratosphere:collections'
  ]);



  api.addFiles([], ['server','client']);

  api.addFiles([], ['client']);

  api.addFiles([
    'server/utils/addMaintainer.js',
    'server/utils/removeMaintainer.js',
    'server/utils/makePrivate.js',
    'server/utils/publishPackage.js',
    'server/utils/setRecommendationStatus.js',

      //RPC's
    'server/rpc/_changePackageHomepage.js',
    'server/rpc/_changeVersionMigrationStatus.js',

    'server/rpc/addMaintainer.js',
    'server/rpc/addReleaseMaintainer.js',
    'server/rpc/changeVersionMetadata.js',
    'server/rpc/createPackage.js',
    'server/rpc/createPackageBuild.js',
    'server/rpc/createPackageVersion.js',
    'server/rpc/createPatchReleaseVersion.js',
    'server/rpc/createReadme.js',
    'server/rpc/createReleaseTrack.js',
    'server/rpc/createReleaseVersion.js',
    'server/rpc/publishPackageBuild.js',
    'server/rpc/publishPackageVersion.js',
    'server/rpc/publishReadme.js',
    'server/rpc/recommendVersion.js',
    'server/rpc/refresh.js',
    'server/rpc/removeMaintainer.js',
    'server/rpc/removeReleaseMaintainer.js',
    'server/rpc/setBannersOnReleases.js',
    'server/rpc/syncNewPackageData.js',
    'server/rpc/unPublishPackage.js',
    'server/rpc/unPublishReleaseTrack.js',
    'server/rpc/unPublishReleaseVersion.js',
    'server/rpc/unPublishVersion.js',
    'server/rpc/unrecommendVersion.js',

      //publications
    'server/publications/nbPackages.js',
    'server/publications/package.js',
    'server/publications/packages.js',
    'server/publications/releaseTrack.js',
    'server/publications/releaseTracks.js',
    'server/publications/releaseVersion.js',
    'server/publications/releaseVersions.js',
    'server/publications/search.js',
    'server/publications/version.js',
    'server/publications/versions.js'
  ], ['server']);

  Npm.depends({
    "wrench":"1.5.8",
    "fs-extra":"0.19.0"
  });

});
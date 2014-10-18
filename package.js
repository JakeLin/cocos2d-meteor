Package.describe({
  summary: "Bring Cocos2d-js and Meteor together.",
  version: "1.2.14",
  git: "https://github.com/JakeLin/cocos2d-meteor.git"
});

Package.onUse(function(api) {
  api.versionsFrom('METEOR@0.9.2.2');
  api.use(['jquery'], 'client');
  api.addFiles(['cocos2d-js-v3.0.js'], 'client');

  if (api.export) {
    api.export('cc');
    api.export('Box2D');
    api.export('ccInit');
  }
});
// Learn more https://docs.expo.dev/guides/customizing-metro/
const { getDefaultConfig } = require('expo/metro-config');

const config = getDefaultConfig(__dirname);

// Allow require()-ing the bundled SQLite database as an asset.
config.resolver.assetExts.push('db');

module.exports = config;

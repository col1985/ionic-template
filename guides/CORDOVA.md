# Cordova

**Note** If using a verison of Cordova 6 or less, append the `--save` flag to the command. This will update the `config.xml` automatically with required specified version.

## Targeted Platforms & Versions

| Name | Version |
|---|---|
| cordova-cli | [7.1.0](https://cordova.apache.org/docs/en/latest/index.html) |
| cordova-ios | [4.5.1](https://github.com/apache/cordova-ios/tree/rel/4.5.1) |
| cordova-android | [6.3.0](https://github.com/apache/cordova-android/tree/rel/6.3.0) |

### Adding a targeted platform

Using Ionic tools `ionic cordova platform add <platform>`. Using cordova `cordova platform add <platform>`. If targeting a specific version of the the platform engine append the version number, e.g. `cordova platform add ios@4.5.1`.

### Removing a targeted platform

Using Ionic tools `ionic cordova platform remove <platform>`. Using cordova `cordova platform remove <platform>`.

## Plugins

List of all cordova plugins used by the client template should be listed here, linking to the the tag version in github.

| Name | Version |
|---|---|
| plugin name | [0.1.0](http://www.google.com) |

### Adding a plugin to the project

Using Ionic Tools `ionic cordova plugin add <plugin-name>`.

Using cordova `cordova plugin add <plugin-name>`.

### Removing a plugin from the project

Using Ionic Tools `ionic cordova plugin remove <plugin-name>`.

Using cordova `cordova plugin remove <plugin-name>`.

### Generating App assets

+ add an initial 192x192px image for icon & a 2208x2208px image splash screen
+ The initial designs should be placed in the resources folder
+ Splashscreens and Iocns should be approved by designer.
+ Run `ionic resources` to generate the splash screens and icons

To target only splashscreen generation `ionic resources -s`. Or to target icons `ionic resources -i`.
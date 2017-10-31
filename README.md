## Template Spec & Guidelines

### Application Components

+ [App](src/app/APP.md)
+ [Directives](src/directives/DIRECTIVES.md)
+ [Models](src/pages/MODELS.md)
+ [Pages](src/pages/PAGES.md)
+ [Providers](src/directives/DIRECTIVES.md)
+ [Pipes](src/pages/PAGES.md)
+ [Design Guidelines](src/theme/DESIGN_GUIDELINES.md)

### Developer Information

+ [Spec](guide/SPEC.md)
+ [Toolings](guide/CLI-TOOLS.md)
+ [i18n](guide/i18n.md)
+ [Tests](guide/TESTS.md)

### Cordova

+ [Cordova](guide/CORDOVA.md)

### Ionic

+ [API Docs](http://ionicframework.com/docs/api/)
+ [Component Docs](http://ionicframework.com/docs/components/#overview)

### Project Structure

| Name | Description |
|---|---|
| **docs** | Source-code documentation output generated by typedoc. (Local only) |
| **guides** | Developer information and template specifcation |
| **git-hooks** | Custom git-hooks examples |
| **hooks** | Cordova hooks directory |
| **node_modules** | Contains all  npm dependencies |
| **platforms** | Contains all targeted compiled cordova platform projects. (Local only) |
| **plugins** | Contains all plugins for cordova project |
| **resources** | App resources |
| **src** | Application Source code |
| **target** | Directory to store deployed targeted environment |
| **test-config** | Test configuration for Unit and UI component testing |
| **tests** | Directory for E2E test config and tests |
| **www** | Compiled application source-code |
| .editorconfig | Cross team IDE/Editor configuration |
| .gitignore | List of files not to be pushed to remote repo |
| .npmrc | npm configuration |
| config.xml | Cordova project configuration file |
| ionic.config.json | ionic configuration file |
| package.json | Contains npm dependencies as well as custom scripts |
| postinstall.sh | script to run after npm install. (Not Integrated) |
| preinstall.sh | script to ensure correct version of NodeJS is being used. (Not Integrated) |
| protractor.conf.js | E2E testing configuration |
| tsconfig.json | Typescript configuration |
| tslint.json | Typescript linter configuration |
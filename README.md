# Development Spec & Guidelines

## Documentation

## git

git-hooks are used to drive developer behaviour.

### git-commit convention

git-hooks are used to guide or drive developer behaviour. git-commits should follow the following convention.

```bash
  [Sprint:TicketID] - Commit Message
```

## Frameworks

+ Ionic 2 - [v3.7.1](https://github.com/ionic-team/ionic/compare/v3.7.0...v3.7.1)
+ Angular - [v4.4.3](https://github.com/angular/angular/blob/master/CHANGELOG.md#443-2017-09-19)
+ Protractor - [v5.1.2](https://github.com/angular/protractor/tree/5.1.2)

### NodeJS

+ Client: [v6.9.5](https://nodejs.org/docs/v6.9.5/api/)
+ Cloud: [v6.9.1](https://nodejs.org/docs/v6.9.1/api/)

## dotFiles

+ .gitignore
+ .eslintrc
+ .editorconfig
+ .npmrc

## Extensions

### VSCode

Recommended VSCode Extensions.

+ [editorconfig](https://marketplace.visualstudio.com/items?itemName=EditorConfig.EditorConfig)
+ [eslint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)
+ [scss-lint](https://marketplace.visualstudio.com/items?itemName=glen-84.sass-lint)
+ [tslint](https://marketplace.visualstudio.com/items?itemName=eg2.tslint)
+ [markdownLint](https://marketplace.visualstudio.com/items?itemName=DavidAnson.vscode-markdownlint)

### Sublime

Recommended Sublime Extensions.

// TODO

## CLI Tools

### commit

```bash
npm run commit
```

### local development

Run app locally in the browser. Linter is disabled in the wtahc config.

```bash
npm run serve
```

### lint

Manually lint codebase.

```bash
npm run lint
```

### docs

Generate source-code documentation using the Typedoc tool.

```bash
npm run docs
```

### tests

```bash
npm test
```

### clean

```bash
npm run ionic:build
```

### build

```bash
npm run build
```

### Ionic CLI Tools

#### serve

```bash
npm run ionic:serve
```

#### build

```bash
npm run ionic:build
```

#### serve

```bash
npm run ionic:serve
```

### Webdriver-Manager commands

#### clean

```bash
npm run wd-clean
```

#### status

```bash
npm run wd-status
```

#### start

```bash
npm run wd-start
```

#### update

```bash
npm run wd-update
```

#### stop

```bash
npm run wd-stop
```

#### version

```bash
npm run wd-version
```
# eslint-config-mycujoo-base

## Introduction

This is the base ESLint configuration file used at mycujoo.

It is based on [Airbnb's config](https://www.npmjs.com/package/eslint-config-airbnb-base).

## Installation

### NPM

```
npm install --save-dev eslint@latest eslint-plugin-import@latest @mycujoo/eslint-config-mycujoo-base
```

### Yarn

```
yarn add --exact --dev eslint@latest eslint-plugin-import@latest @mycujoo/eslint-config-mycujoo-base
```

### Your `.eslintrc`

To add the rules to your `.eslintrc`, extend the file with the package in the following manner:

```
{
  "extends": ["@mycujoo/mycujoo-base"]
}
```

Example:
```
{
  "extends": [
    "@mycujoo/mycujoo-base"
  ],
  "env": {
    "node": true,
    "jest": true
  }
}
```

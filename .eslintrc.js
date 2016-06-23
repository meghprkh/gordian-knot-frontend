module.exports = {
    "env": {
        "browser": true,
        "commonjs": true,
        "es6": true
    },
    "extends": ["eslint:recommended", "plugin:react/recommended"],
    "installedESLint": true,
    "parserOptions": {
        "ecmaFeatures": {
            "experimentalObjectRestSpread": true,
            "jsx": true
        },
        "sourceType": "module"
    },
    "plugins": [
        "react"
    ],
    "globals": {
        "DEV": false,
        "PROD": false
    },
    "rules": {
        "indent": [
            "error",
            2
        ],
        "linebreak-style": [
            "error",
            "unix"
        ],
        "no-unused-vars": [
            "error",
            { "argsIgnorePattern": "props" }
        ],
        "react/no-unknown-property": [
            "error",
            { ignore: ["class"] }
        ],
        "react/prop-types": ["off"]
    },
    "settings": {
      "react": {
        "pragma": "h"
      }
    }
};

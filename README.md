## USAGE

---

To start using the template, simply click the "**Use this template**" button:

- [] add screenshot

It will create a repository using this one as template.

After that, clone the newly created repository and install the dependencies by running `yarn` or `npm install`.

Then, start the metro bundler by running `yarn start` or `npm run start`, and install on the devices/emulators by running the following commands:

Android

```
yarn android

or

npm run android
```

iOS

```
yarn ios

or

npm run ios
```

## PATH ALIASES

---

To add a new path alias, simply add the path to the `tsconfig.json` file, in the `paths` object following the pattern of the existing ones.

The paths will be automatically mapped on the `babel.config.js` file.

After including a new alias, restart the metro bundler clearing the cache by running one of the following commands:
`yarn start --reset-cache` or `npm run start --reset-cache`.

## TODO

---

- [] Implement state management lib.
- [] Reorganize files and file names.
- [] Extract types from files.

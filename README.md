# React Native Skeleton Project

## Set up

Run the folllowing commands:

```
$ git clone <this_repo_url> <directory_with_new_project_name>
$ cd <directory_with_your_new_project_name>
$ yarn install
$ yarn rename <"new_project_name">
```

Change the `name` value in `package.json` to your new project name

## Running the app

Start the application run:

- `yarn run-ios` or `yarn run-android`

Once the application has been deployed to the device/simulator, you can restart the metro bundler running

- `yarn start`

## Recommended tools

- [Cocoapods v1.6.1](https://github.com/CocoaPods/CocoaPods)
- [Reactotron](https://github.com/infinitered/reactotron)
- [TypeScript ESLint](https://github.com/typescript-eslint/typescript-eslint)
- [Prettier](https://prettier.io/)

## Relevant technologies

- [React Native](https://facebook.github.io/react-native/docs/getting-started)
- [Redux](https://github.com/reduxjs/redux)
- [React Navigation](https://github.com/react-navigation/react-navigation)
- [React Native Config](https://github.com/luggit/react-native-config)
- [CircleCI](https://circleci.com/)

## App Structure

- **.circleci**: contains circleci setup
- **android**: contains android project
- **ios**: contains ios project
- **scripts**: contains scripts
- **src**: app code
  - **app**: app navigation setup here
  - **constants**: app constants
  - **navigation**: app navigation setup here
  - **res**: common resources
    - **colors**: app colors
    - **fonts**: app fonts
    - **images**: app images
    - **strings**: app strings and localizations
    - **styles**: common styles
  - **services**: add common global services here
    - **networking**: netwrok service setup here (using https://github.com/axios/axios)
    - **reactotron**: reactotron tool setup here
    - **storage**: Async Storage setup here
  - **state**: app store setup here (managad with Redux)
    - **ducks**: ducks files (following https://github.com/erikras/ducks-modular-redux)
  - **utils**: helper methods
  - **views**: components declaration here
    - **ScreenA**: example screen
    - **ScreenB**: example screen
    - **shared**: any component to be used for more than one module of the application should go here

## Adding new images (example image in src/res/images/)

- Name the image file with your naming style
- Add the image file to src/res/images/
- Run `yarn images`

## Adding custom fonts (example font in src/res/fonts/)

- Name the fonts file with its full name
- Add the fonts file to src/res/fonts/
- Run `yarn link-pkgs`
- Run `yarn fonts`

## NOTES

- Don't manually edit files `src/res/images/index.ts` and `src/res/fonts/index.ts`. Instead, use scripts `yarn images` and `yarn fonts`.

- This app uses `react-native-config` for handling global configurations (like server url, google api key, ..etc).

  - If your global configurations in development are the same as in stagging and production:

    - put your configurations in `.env`.
    - for Android:
      - use `yarn run-android` to run the app.
      - use `yarn build-android` script to generate Android .apk when it's time to deploy.
    - for IOS:
      - use `yarn run-ios` to run the app.

  - If your global configurations in development are different from stagging and production:

    - put your development configurations in `.env.dev`, stagging configurations in `.env.stag` and production configurations in `.env.prod`.
    - for Android:
      - instead of `yarn run-android`, use `yarn run-android-dev`, `yarn run-android-stag` or `yarn run-android-prod` according to your environment mode.
      - instead of `yarn build-android`, use `yarn build-android-prod` script to generate Android .apk when it's time to deploy.
    - for IOS:
      - instead of `yarn run-ios`, use `yarn run-ios-dev`, `yarn run-ios-stag` or `yarn run-ios-prod` according to your environment mode.
      - from Xcode, You can find DEV, STAG, PROD schemas for each enviroment mode. Don't forget to use PROD schema when it's time to deploy.

## Contributors

- [Ahmed Khattab](https://github.com/khattab93)

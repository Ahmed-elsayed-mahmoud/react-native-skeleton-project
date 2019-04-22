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

Start the application on Android:

```
yarn bundle-android
yarn run-android
```

Start the application on Android:

```
yarn bundle-ios
yarn pods
yarn run-ios
```

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
- [Fastlane](https://fastlane.tools/)

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

- To deploy IOS beta to Testflight:

  - add missing parts in `ios/fastlane/Matchfile`, `ios/fastlane/Fastfile` and `ios/fastlane/Appfile`
  - update version number in xcode. (build number will be updated by fastlane)
  - run `yarn ios:beta`

- To deploy Android beta:
  - add missing parts in `ios/fastlane/Fastfile` and `ios/fastlane/Appfile`
  - add code signing credentials
  - update version name in `android/app/build.gradle`. (version code will be updated by fastlane)
  - run `yarn android:beta`

## Contributors

- [Ahmed Khattab](https://github.com/khattab93)

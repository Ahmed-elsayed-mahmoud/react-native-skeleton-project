#RNProjectStructure

### Installation

- Make sure you're set up for [React Native](https://facebook.github.io/react-native/docs/getting-started.html#content)

### Running the app

Start the application run:

- `yarn run-ios` or `yarn run-android`

Once the application has been deployed to the device/simulator, you can restart the metro bundler running

- `yarn start`

### Recommended tools

- [Reactotron](https://github.com/infinitered/reactotron)

### Relevant technologies

- [React Native](https://facebook.github.io/react-native/docs/getting-started)

### App Structure

![Structure](/src/theme/assets/readme/structure.png)

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
    - **networking**: network services setup here
    - **storage**: storage service setup here
  - **store**: app store setup here
  - **utils**: helper methods
  - **views**: components declaration here
    - **navigatorAViews**: contains components for navigator A
    - **navigatorAViews**: contains components for navigator B
    - **shared**: any component to be used for more than one module of the application should go here

### Adding new images (example image in src/res/images/)

- Name the image file with your naming style
- Add the image file to src/res/images/
- Run `yarn images`

### Adding custom fonts (example font in src/res/fonts/)

- Name the fonts file with its full name
- Add the fonts file to src/res/fonts/
- Run `yarn link-pkgs`
- Run `yarn fonts`

# react-native-cli-boilerplate

> Simple opinionated boilerplate for React Native bare workflow with TypeScript.

Feel free to add or tweak the setup as needed.

This has been created with the official template (`npx @react-native-community/cli@latest init`) and some extended setup.

Any package manager can be used with this project (e.g. npm or yarn).

```
If you love this boilerplate, give it a star, you will be a ray of sunshine in our lives :)
```

## Tools & Technology

- [React Native](https://reactnative.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [Prettier](https://prettier.io/)
- [Eslint](https://eslint.org/)

## Requirements

- [Node.js](https://nodejs.org/en/) 18+

## Installation

```bash
npx degit apicgg/react-native-cli-boilerplate my-app
```

or

```bash
git clone https://github.com/apicgg/react-native-cli-boilerplate.git
```

## Step 1: Start the Metro Server

First, you will need to start **Metro**, the JavaScript _bundler_ that ships _with_ React Native.

To start Metro, run the following command from the _root_ of your React Native project:

```bash
# using npm
npm start

# OR using Yarn
yarn start
```

## Step 2: Start your Application

Let Metro Bundler run in its _own_ terminal. Open a _new_ terminal from the _root_ of your React Native project. Run the following command to start your _Android_ or _iOS_ app:

### For Android

```bash
# using npm
npm run android

# OR using Yarn
yarn android
```

### For iOS

```bash
# using npm
npm run ios

# OR using Yarn
yarn ios
```

If everything is set up _correctly_, you should see your new app running in your _Android Emulator_ or _iOS Simulator_ shortly provided you have set up your emulator/simulator correctly.

This is one way to run your app — you can also run it directly from within Android Studio and Xcode respectively.

## Step 3: Modifying your App

Now that you have successfully run the app, let's modify it.

1. Open `App.tsx` in your text editor of choice and edit some lines.
2. For **Android**: Press the <kbd>R</kbd> key twice or select **"Reload"** from the **Developer Menu** (<kbd>Ctrl</kbd> + <kbd>M</kbd> (on Window and Linux) or <kbd>Cmd ⌘</kbd> + <kbd>M</kbd> (on macOS)) to see your changes!

   For **iOS**: Hit <kbd>Cmd ⌘</kbd> + <kbd>R</kbd> in your iOS Simulator to reload the app and see your changes!

## Congratulations!

You've successfully run and modified your React Native App.

## License

MIT License.

Please review the [License](https://github.com/apicgg/vite-mern-template/blob/main/LICENSE).

## Contributors ✨

Contributions of any kind welcome! Kindly have a look into [Contributing Guidelines](CONTRIBUTING.md)

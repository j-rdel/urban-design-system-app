A starter project with react native 0.68, @storybook/react-native 6.0 beta, storybook/addon-react-native-web

![image](https://github.com/j-rdel/urban-design-system-app/blob/master/src/assets/images/Cover.png?raw=true)

# getting started

To get all the dependencies run

```
yarn install
```

To run on the web use

```
yarn storybook
```

To run on ios or android

```
yarn start
```

in another terminal run

```
yarn ios
```

or

```
yarn android
```

If you add new stories on the native (ondevice version) you either need to have the watcher running or run the stories loader

To update the stories one time

```
yarn update-stories
```

To watch the stories files

```
yarn storybook-watcher
```

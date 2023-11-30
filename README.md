# React Navigation Modal Navigation Repro

Minimal reproduction demonstrating issue when navigating from a modal screen in the same stack as other screens.

To start the app:

```
yarn start

# in another terminal window
yarn run ios
```

To reproduce the issue:
1. Navigate to profile tab.
2. Press `Open profile settings modal` 
3. Tap either navigate option, modal won't close.
4. Manually swipe to close the modal, and the navigator will have handled the navigation in the background.
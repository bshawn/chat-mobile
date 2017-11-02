# chat-mobile
React Native mobile chat client

## Description
This project is simply a demonstration of building a mobile app in React Native.  If you're interested in the .NET Core code that hosts the API, you can check out the [chat-api project](https://github.com/bshawn/chat-api).  For the demo, the API code is running on [Pivotal Cloud Foundry](https://pivotal.io), which has a free trial period and is definitely worth a look, for those interested in cloud hosting.

## Prerequisites
Since this is a beginner-level walkthrough, I'm using [GitHub Desktop](https://desktop.github.com)) for all source control, since it's easier that explaining some of the Git command line tools.

You will also need to have Node LTS/Boron version installed.  I highly recommend using [nvm](https://github.com/creationix/nvm) or [nvm-windows](https://github.com/coreybutler/nvm-windows) to install / manage multiple versions of Node and NPM on your machine.

## Clone the repo
From the repo home page, click the Green "Clone or download button" and choose "Open in Desktop" (or just use [this link](x-github-client://openRepo/https://github.com/bshawn/chat-mobile)) and allow the browser to open the GitHub Desktop link.

For those who are hardcore:
```
git clone https://github.com/bshawn/chat-mobile.git .
```

## How to use this repo
There are multiple branches in the repo that you can use to walk through the process on your own.  Each branch represents a state of the development process.  The branches were created in the following order, as the app was constructed:

1. demo
2. add-tab-navigator
3. refactor-screens
4. build-user-screen
5. save-user
6. store-user
7. lift-user-state
8. build-chat-screen
9. poll-for-new-messages
10. fix-user-storage-bug (whoops)

### Switching branches
To switch branches, open the repo in GitHub Desktop and click the branch drop-down box.  You will need to run the following command after switching branches:
```
cd src
npm install
```
**In some cases, it may be necessary to delete the node_modules and .expo folders prior to installing packages.**

## Resources
[http://www.reactnativeexpress.com](http://www.reactnativeexpress.com)
[https://github.com/react-community/create-react-native-app](https://github.com/react-community/create-react-native-app)
[https://reactnavigation.org](https://reactnavigation.org)
[https://react-native-training.github.io/react-native-elements](https://react-native-training.github.io/react-native-elements)


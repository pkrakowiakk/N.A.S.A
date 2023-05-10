# N.A.S.A - Native Astronomical Scholar Application

<div align="center">
 <img src="docs/images/iPhone 13 Asteroids.svg" alt="Asteroids" /> 
 <img src="docs/images/iPhone 13 Satellites.svg" alt="Satellites" /> 
</div>

## About
N.A.S.A - Native astronomical scholar application is an excellent open source tool for anyone interested in space exploration and astronomy. It allows users to explore a vast collection of space related data and resources from nasa Open API with user-friendly interface. It it also great application for practicing skills such as styling, testing, ci/cd and react native development itself.


## Features

- Real life tracker of most popular satellites
- Searchable gallery of official Nasa images, videos and audios
- Asteroids tracker allowing exploration of objects passing near earth in the given time interval
- Astronomy picture of the day viewer
- Customizable application color theme
- Cross platform

## Techstack

<div align="center">
 <img src="https://skillicons.dev/icons?i=react,ts,redux,styledcomponents,jest,docker,vscode,androidstudio,git,github,githubactions,figma" alt="Tech Stack" /> 
</div>

## Run Locally

Start with cloning the repository:

```sh
git clone https://github.com/pkrakowiakk/N.A.S.A.git
```

Install dependencies:

```sh
cd N.A.S.A
npm i
```
Unfortunately, react-native-snap-carousel library uses deprecated prop types that are no longer supported by react native. This will cause an error. To prevent that please replace installed react-native-snap-carousel from node_modules with updated package that can be found in docs/packages.

As a next step in the root directory create following .env file:

```ts
NASA_DEMO_KEY=DEMO_KEY
NASA_DEVELOPER_KEY=
```

Even though demo key allows application to run perfectly fine it has highly limited amount of API calls. You can request your developer key from [Nasa Open API](https://api.nasa.gov) and then just assign it to NASA_DEVELOPER_KEY. However if you decide to work with demo key make sure that in src/configuration/providers/key.ts you have selected a valid key type.

```ts
export const nasaKeyTypeInUsage: NasaKeyType = NasaKeyType.Developer; // or NasaKeyType.Demo
```

After that you should be ready to run the project:

```sh
expo start
```

From now on you can open the app inside Expo mobile app by scanning QR code displayed in the terminal or by using mobile device emulator such as the one within android studio. You can get expo app here:

- [ExpoIOS](https://apps.apple.com/us/app/expo-go/id982107779)
- [ExpoAndroid](https://play.google.com/store/apps/details?id=host.exp.exponent&hl=en_US)

If you do not want to install all the dependencies locally and use Visual Studio Code you can install following [extension](https://marketplace.visualstudio.com/items?itemName=ms-vscode-remote.vscode-remote-extensionpack) and run development inside isolated container.
There are couple of useful links that can help you get started:

- [RemoteDevelopment](https://www.youtube.com/watch?v=sakjpegUQsk)
- [RemoteContainers](https://www.youtube.com/watch?v=ruIoLtqIdNc)

## Architecture

If you wish to learn more about application architecture check out: [architecture overview](https://github.com/pkrakowiakk/N.A.S.A/blob/main/docs/architecture.md)

## Contributing

If you wish to contribute please read: [contribution guideline](https://github.com/pkrakowiakk/N.A.S.A/blob/main/docs/contributing.md)


## Roadmap

If you wish to check the current progress or future goals for the application check out: [roadmap](https://github.com/pkrakowiakk/N.A.S.A/blob/main/docs/roadmap.md)

## Design

If you would like to play with application design u can use following figma file as a starting point: [mockup](https://www.figma.com/file/XXo06FLkEAmt75f6WUGN2R/N.A.S.A-mockup?type=design&node-id=0%3A1&t=tUH8N5H96K0zBq8C-1)


## Contact

<div align="left">
  <div >
    <a href="https://www.linkedin.com/in/piotr-krakowiak-107130226/" target="_blank">
      <img src="https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white">
    </a>
  </div> 
</div>

## License

[MIT](https://choosealicense.com/licenses/mit/)

## Acknowledgements

- [Nasa Open API](https://api.nasa.gov)
- [Expo](https://docs.expo.dev)
- [Icons](https://www.svgrepo.com)
- [Navigation](https://reactnavigation.org)
- [ReduxToolkit](https://redux-toolkit.js.org)
- [StyledComponents](https://styled-components.com)
- [NativeBase](https://nativebase.io)
- [Jest](https://jestjs.io)
- [ReactNativeCalendars](https://github.com/wix/react-native-calendars)
- [ReactNativeMaps](https://github.com/react-native-maps/react-native-maps)
- [Reanimated](https://docs.swmansion.com/react-native-reanimated)
- [ReactQuery](https://tanstack.com/query/v3)
- [SnapCarousel](https://github.com/meliorence/react-native-snap-carousel)
- [Tle](https://github.com/davidcalhoun/tle.js)
- [TestingLibrary](https://testing-library.com/docs/react-native-testing-library/intro)
- [Wikipedia](https://pl.wikipedia.org/wiki/TLE)
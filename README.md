# Gordian Knot Frontend

This was a demo project which may serve as a good learning tutorial due to the basic and easy to understand code. It was initially being built as a quiz portal for the Gordian Knot event, hence the name.

This is meant to be used in conjunction with the [backend](https://github.com/meghprkh/gordian-knot-backend)

## Setting Up
```
npm i
```

## Running in dev mode
Please make sure the backend server is also running in dev mode
```
npm start
```
Now go to http://localhost:8000/

## Building
The `dist` folder will have the output. You may remove the `.map` files. Further instructions in the backend repo.
```
npm run build
```

## Libraries & Devtools Used
- [Preact](https://preactjs.com/): A *mini*-version of React which has been very good despite the compact size
- [Picnic CSS](http://picnicss.com/): A good SCSS framework which should be extended but by default lacks some useful components
- [Preact Router](https://github.com/developit/preact-router): A simple routing solution for Preact that worked nicely so far
- [SuperAgent](http://visionmedia.github.io/superagent/): A simple request library which does its work quite well
- [ReactPack](https://github.com/olahol/reactpack): An awesome easy-to-use tool that makes building react projects very simple while being configurable for normal needs (Babel and Webpack are configured by this)
- [ESLint](http://www.eslint.org/): The source code linter used to notice mistakes and a few styling rules

## License
The code is provided under the MIT license

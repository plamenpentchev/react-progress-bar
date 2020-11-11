# react-progress-bar

> a progress bar in react without external UI libraries.
```Project created with
npx create-react-library react-progress-bar
````will be published on a local npm server(Verdaccio)
see
  https://dev.to/ramonak/how-to-publish-a-custom-react-component-to-npm-using-create-react-library-4bhi

to understand how this project was build.

## Publish

```bash
npm adduser --registry http://icts-dms99:4873
  user:***
  pwd:***

npm publish  --registry http://icts-dms99:4873


## Install

```bash
npm install --save --registry http://icts-dms99:4873 react-progress-bar@latest
```

## Usage

```import
  import { ProgressBar  } from "react-progress-bar";

```use
 <ProgressBar bgcolor={"#6a1b9a"} completed={completed} width={"50%"}/>

## License

MIT ©

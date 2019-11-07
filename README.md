# ReactNode-ExpressBoilerplate

A Full stack **React and Node.js** Boilerplate that is developed using **React , Express.js Webpack4, Babel,EsLint and Jest**.

## Install

```
git clone https://github.com/sujilnt/ReactNode-ExpressBoilerplate.git`
yarn install
```

## Features and Commands

### `Webpack Bundle visualisation`

A plugin that Visualizes the size of webpack output files with an interactive zoomable treemap. - **dev** - development mode - **prod** - development mode - **client** - client bundles only will be analysed based on dev or prod mode. - **server** - server bundle only will be analysed based on dev or prod mode .

##### Commands for webpack Analyser <br/>

    bundle-analyzer:client-dev
    bundle-analyzer:client-prod
    bundle-analyzer:server-dev
    bundle-analyzer:server-prod

<hr/>

### `Webp - Image Format`

Image format that supports lossy and lossless compression, as well as animation and alpha transparency. WebP images are smaller than their JPEG and PNG counterparts—usually on the magnitude of a 25–35% reduction in filesize. This decreases page sizes and improves performance.
A node.js script that convert all images in png or Jpeg format in **_assets_** Folder .

##### Commands for webp - Image Format <br/>

    node ./utils/covertImgtoWebP.js

All the webp information got insipired from [web.dev](https://web.dev/serve-images-webp).

<hr/>

## Running the Project

##### For Development

```
 Client Side Run - yarn run client-dev:watch
 Server Side Run - yarn run server-dev:build
 or
	yarn run project (running both server and client side)
```

##### For Production

```
 Client Side Run - yarn run client-prod:build
 Server Side Run - yarn run server-prod:build
```

<hr/>


<hr/>

## Testing

Jest is a delightful JavaScript Testing Framework with a focus on simplicity. There is a **_mock_** folder inside **_src_** directory that is used for mock something like custom image etc. while writing automated test cases.

##### For running all the test cases

    `yarn run test:coverage`

## License

The code is available under the [MIT license](License.txt).

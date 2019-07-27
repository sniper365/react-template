# ReactNode-ExpressBoilerplate

A Full stack **React and Node.js** Boilerplate that is developed using **Webpack4, Babel**. 

##  Install
```
git clone https://github.com/sujilnt/ReactNode-ExpressBoilerplate.git`
yarn install
```

## Features and Commands 

### `Webpack Bundle Analyzer`

A plugin that Visualizes the size of webpack output files with an interactive zoomable treemap.
	- **dev** - development mode
	- **prod** - development mode
	- **client** - client bundles only will be analysed based on dev or prod mode.
	- **server** - server bundle only will be analysed based on dev or prod mode .
#####  Commands for webpack Analyser <br/>
	bundle-analyzer:client-dev	
	bundle-analyzer:client-prod
	bundle-analyzer:server-dev
	bundle-analyzer:server-prod

<hr/>

###  `Webp - Image Format`
Image format that supports lossy and lossless compression, as well as animation and alpha transparency. WebP images are smaller than their JPEG and PNG counterparts—usually on the magnitude of a 25–35% reduction in filesize. This decreases page sizes and improves performance.
A node.js script that convert all images in png or Jpeg format in ***assets*** Folder  . 
#####  Commands for webp - Image Format <br/>
	node ./utils/covertImgtoWebP.js

All the webp information got insipired from [web.dev](https://web.dev/serve-images-webp).
<hr/>

##  Running the Project

#####  For Development 
```  
 Client Side Run - yarn run dev:client
 Server Side Run - yarn run server-dev 
```
#####  For Production  
```  
 Client Side Run - yarn run prod:build
 Server Side Run - yarn run server-prod
```
***Note-1) In production mode all source code files in .js or .css or .html will be minfied and compressed into gzip files using webpack compression algorithm , by default gzip  all 91% of browser supports gzip. sever side bundle will be only minfied.***  
***Note-2) Certain plugins like imagemin are also been used image compression based on suggestion from [web.dev](https://web.dev/use-imagemin-to-compress-images).***

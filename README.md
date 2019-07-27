# ReactBoilerplate
A React.js Production Template using Webpack, Babel and Jest still (under work).

## install
`git clone  https://github.com/sujilnt/ReactNode-ExpressBoilerplate.git`  <br/>
`yarn install`

### Commands

yarn run v1.17.3
info Project commands
   
#### Webpack Bundle Analyzer <br/>
      A plugin that Visualizes the size of webpack output files with an interactive zoomable treemap.
      dev - development mode
      prod - development mode
      client - client bundles only will be analysed based on dev or prod mode. 
      server - server bundle only will be analysed based on dev or prod mode .

##### Commands for webpack Analyser
      `bundle-analyzer:client-dev` 
      `bundle-analyzer:client-prod` 
      `bundle-analyzer:server-dev` 
      `bundle-analyzer:server-prod`
    
####  ` covertimageWebP` <br/>
       `
       Converting all the images into webp format.<p>
       node utils/covertImgtoWebP.js
       `
   - `dev:server` <br/>
      <p></p> 
      yarn run dev --env.project server
   - `devServer` running <br/> 
      yarn run webpack --env.mode dev && webpack-dev-server --env.mode dev --watch
   - `prod:build ` <br/>
      yarn run webpack --env.mode prod
   - `prod:server` <br/>
      yarn run prod:build --env.project server --watch
   - `prod:watch` <br/>
      yarn run webpack --env.mode prod --watch
   - `server-dev` <br/>
      npm-run-all --parallel dev:server server-nodemon
   - `server-nodemon` <br/>
      nodemon  ServerBundle/server.bundle.js
   - `server-prod` <br/>
      npm-run-all --parallel prod:server server-nodemon
   - `test:coverage - run all the test cases` <br/>
      jest --coverage



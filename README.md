# ReactBoilerplate
A React.js Production Template using Webpack, Babel and Jest still (under work).

## install
`git clone  https://github.com/sujilnt/ReactNode-ExpressBoilerplate.git`  <br/>
`yarn install`

### Commands

yarn run v1.17.3
info Project commands
   
   - `bundle-analyzer:client-dev` <br/>
      <p></p>
      (yarn run generate-stats-client:dev) & (webpack-bundle-analyzer ./bundleAnalyser/stats-client-dev.json) 
   - `bundle-analyzer:client-prod` <br/>
      (yarn run generate-stats-client:prod) & (webpack-bundle-analyzer ./bundleAnalyser/stats-client-prod.json)
   - `bundle-analyzer:server-dev` <br/>
      (yarn run generate-stats-server:dev) & (webpack-bundle-analyzer ./bundleAnalyser/stats-server-dev.json)
   - `bundle-analyzer:server-prod` <br/>
      (yarn run generate-stats-server:prod) & (webpack-bundle-analyzer ./bundleAnalyser/stats-server-client.json)
   - `#### covertimageWebP` <br/>
      <p>converting all the images into webp format.<p>
      `node utils/covertImgtoWebP.js`
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



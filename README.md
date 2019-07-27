# ReactBoilerplate
A React.js Production Template using Webpack, Babel and Jest still (under work).

## install
`git clone  https://github.com/sujilnt/ReactBoilerplate`  <br/>
`yarn install`

### Commands

yarn run v1.17.3
info Project commands
   - `bundle-analyzer:client-dev` <br/>
      (yarn run generate-stats-client:dev) & (webpack-bundle-analyzer ./bundleAnalyser/stats-client-dev.json) 
   - `bundle-analyzer:client-prod` <br/>
      (yarn run generate-stats-client:prod) & (webpack-bundle-analyzer ./bundleAnalyser/stats-client-prod.json)
   - bundle-analyzer:server-dev
      (yarn run generate-stats-server:dev) & (webpack-bundle-analyzer ./bundleAnalyser/stats-server-dev.json)
   - bundle-analyzer:server-prod
      (yarn run generate-stats-server:prod) & (webpack-bundle-analyzer ./bundleAnalyser/stats-server-client.json)
   - covertimageWebP
      node utils/covertImgtoWebP.js
   - dev
      yarn run webpack --env.mode dev --watch
   - dev:server
      yarn run dev --env.project server
   - devServer
      yarn run webpack --env.mode dev && webpack-dev-server --env.mode dev --watch
   - generate-stats-client:dev
      webpack --env.project client --env.mode dev --profile --json > ./bundleAnalyser/stats-client-dev.json
   - generate-stats-client:prod
      webpack --env.project client --env.mode prod --profile --json > ./bundleAnalyser/stats-client-prod.json
   - generate-stats-server:dev
      webpack --env.project server --env.mode dev --profile --json > ./bundleAnalyser/stats-server-dev.json
   - generate-stats-server:prod
      webpack --env.project server --env.mode prod --profile --json > ./bundleAnalyser/stats-server-prod.json
   - prod:build
      yarn run webpack --env.mode prod
   - prod:server
      yarn run prod:build --env.project server --watch
   - prod:watch
      yarn run webpack --env.mode prod --watch
   - server-dev
      npm-run-all --parallel dev:server server-nodemon
   - server-nodemon
      nodemon  ServerBundle/server.bundle.js
   - server-prod
      npm-run-all --parallel prod:server server-nodemon
   - test
      jest
   - test:coverage
      jest --coverage
   - webpack
      webpack


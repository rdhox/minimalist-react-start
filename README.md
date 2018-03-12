# minimalist-react-start

This is my setup to start a project with React when I get a random idea, something that I want to quickly try, or following a tutorial. 

I purposely kept the number of packages at his minimum. Here the list of the packages used:

  *express
  *pug
  *react
  *react-dom
  *browserify
  *babel-cli
  *babel-preset-env
  *babel-preset-react
  *babelify
  *watchify
  *react-hot-loader
  *livereactload

#USAGE

Once you clone the repositery, create a .babelrc file in the project's root directory with the content:

```javascript
{
    "presets": ["env", "react"],
    "plugins": ["react-hot-loader/babel"]
}
```


Open two terminals and :

```bash
node server.js
node_modules/.bin/watchify views/src/main.js -t babelify -p livereactload -o views/public/dist/bundle.js
```
In your browser, go to "localhost:3000/", a "Hello World" should appear. 

You can now go to /views/src/main.js and start working on your app. At each save, your browser will automatically refresh. 
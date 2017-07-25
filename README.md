### Get this project running

clone this repo

```bash
# with the backend docker images running
# node version of 6.x =< 7.10 is reccomended. Wonky stuff happens any higher

  $ npm install
  # installs dependencies

  $ npm run watch
  # builds project into /build

  $ npm start
  # start the server
```

### Run the Tests

###### Unit Tests
```bash
# run the unit tests with

    $ npm run test:unit
    # run the tests
```


###### Feature Tests


If this is your first time running the end to end tests you will need to move the `selenium` driver into the correct place. There is a script in `nightwatch.config.js` to do this.

```bash
# moving selenium

    $ node nightwatch.config.js
    # set up nightwatch deps
```

Run the tests:

```bash
# running the feature tests

    $ ENVIRONMENT=test node server.js
    # start up test server 

    $ npm run test:e2e
    # run end to end tests
```
When running the project locally, after running "npm install", if you get the following error message: "Error: Cannot find module 'asn1'", please try the following in the command line:
```bash
$ rm -R node_modules

$ rm yarn.lock

$ rm package-lock.json

$ npm install

```

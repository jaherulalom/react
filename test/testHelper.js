import { expect } from 'chai';
import sinon from 'sinon';
import 'babel-polyfill';

global.expect = expect;
global.sinon = sinon;

const jsdom = require('jsdom').jsdom;

global.document = jsdom('');
global.window = document.defaultView;

Object
  .keys(document.defaultView)
  .forEach((property) => {
    if (!global[property]) global[property] = document.defaultView[property];
  });

global.navigator = {
  userAgent: 'node.js',
};


require.extensions['.png'] = () => null
require.extensions['.jpg'] = () => null

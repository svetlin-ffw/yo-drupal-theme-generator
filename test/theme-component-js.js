'use strict';
var path = require('path');
var assert = require('yeoman-assert');
var helpers = require('yeoman-test');

describe('generator-drupal-theme:theme-component-js', function () {
  before(function () {
    return helpers.run(path.join(__dirname, '../generators/theme-component-js'))
      .withPrompts({someAnswer: true})
      .toPromise();
  });

  it('creates files', function () {
    assert.file([
      'dummyfile.txt'
    ]);
  });
});

'use strict';

module.exports = {
  name: 'ember-cli-pure',

  included: function included(app) {
    this.app = app;
    this._super.included(app);

    app.import('bower_components/pure/pure.css');
  }
};

require.config({
  baseUrl: 'scripts/',
  paths: {
    jquery: [
      'https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min',
      'libs/jquery-3.2.1.min'
    ],
    validation: [
      'https://cdnjs.cloudflare.com/ajax/libs/jquery-validate/1.17.0/jquery.validate.min',
      'plugins/jquery.validate-1.17.0.min'
    ],
    site: 'modules/site'
  },
  shim: {
    validation: {
      deps: ['jquery']
    }
  }
});

require(['jquery', 'site'], function($, site) {﻿
  $(function() {
    site.formValidation();
  });
});
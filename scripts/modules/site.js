"use strict";

define(['jquery', 'validation'], function($) {
  var module = {};

  module.formValidation = function(context) {
    $('.page-sidebar__form').validate();
  };

  return module;
});
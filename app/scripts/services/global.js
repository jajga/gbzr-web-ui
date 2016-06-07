'use strict';

/**
 * @ngdoc service
 * @name gbWebshopApp.global
 * @description
 * # global
 * Factory in the gbWebshopApp.
 */
angular.module('gbWebshopApp')
  .factory('global', function () {
    // Service logic
     var API_BUSS = "http://business.api.gobazaar.com/Business-Web/services/";
     var API_DOMAIN = "http://domain.api.gobazaar.com/Gobazaar_Webshop/services/";
    // Public API here
    return {
      API_BUSS:API_BUSS,
      API_DOMAIN:API_DOMAIN
     
    };
  });

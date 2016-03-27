'use strict';

angular.module('App')
  .controller('ShopCtrl', function ($scope, $sce) {
  	$scope.trustSrc = function(src) {
      return $sce.trustAsResourceUrl(src);
    }

    $scope.videos = [
      {
        url: 'https://www.youtube.com/embed/mibLt8rOG8o' 
      },

      {
        url: 'https://www.youtube.com/embed/jZfC-MdzA7w'  
      },
      
      {
        url: 'https://www.youtube.com/embed/mibLt8rOG8o'  
      },
      
      {
        url: 'https://www.youtube.com/embed/SdmpBeLrzys'  
      }
    ]
  });
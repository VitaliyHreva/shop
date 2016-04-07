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
      },

      {
        url: 'https://www.youtube.com/embed/K1uj2qeBor4'
      },

      {
        url: 'https://www.youtube.com/embed/yUMcDQlVtQE'
      },

      {
        url: 'https://www.youtube.com/embed/o6cY6BtDK4E'
      },

      {
        url: 'https://www.youtube.com/embed/SEyDminvr7Q'
      }
    ]
  });
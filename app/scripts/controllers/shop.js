'use strict';

angular.module('App')
  .controller('ShopCtrl', function ($scope, $sce) {
  	$scope.trustSrc = function(src) {
      return $sce.trustAsResourceUrl(src);
    }

    $scope.videos = [
      {
        cover: 'https://img.youtube.com/vi/K1uj2qeBor4/mqdefault.jpg', 
        url: 'https://www.youtube.com/embed/K1uj2qeBor4' 
      },

      {
        cover: 'https://img.youtube.com/vi/SdmpBeLrzys/mqdefault.jpg', 
        url: 'https://www.youtube.com/embed/SdmpBeLrzys' 
      },
      
      {
        cover: 'https://img.youtube.com/vi/Az2IOUPqcVk/mqdefault.jpg', 
        url: 'https://www.youtube.com/embed/Az2IOUPqcVk'   
      },
      
      {
        cover: 'https://img.youtube.com/vi/k0vJcYqod7w/mqdefault.jpg', 
        url: 'https://www.youtube.com/embed/k0vJcYqod7w'   
      },

      {
        cover: 'https://img.youtube.com/vi/P9w7aLnAuvQ/mqdefault.jpg', 
        url: 'https://www.youtube.com/embed/P9w7aLnAuvQ' 
      },

      {
        cover: 'https://img.youtube.com/vi/Yrl35yfpnA0/mqdefault.jpg', 
        url: 'https://www.youtube.com/embed/Yrl35yfpnA0' 
      },

      {
        cover: 'https://img.youtube.com/vi/CQzJeBqUW7g/mqdefault.jpg', 
        url: 'https://www.youtube.com/embed/CQzJeBqUW7g' 
      },

      {
        cover: 'https://img.youtube.com/vi/o6cY6BtDK4E/mqdefault.jpg', 
        url: 'https://www.youtube.com/embed/mibLt8rOG8o' 
      }
    ]
  });
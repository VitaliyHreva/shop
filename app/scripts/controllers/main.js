'use strict';

angular.module('App')
  .controller('MainCtrl', function ($scope) {
    $scope.ourServices = [
    	{
    		icon: 'fa fa-file-o', 
    		title: 'Random text', 
    		description: 'RandomText is a tool designers and developers can use to quickly grab dummy text in either Lorem Ipsum or Gibberish format.'
    	},
    	
    	{
    		icon: 'fa fa-apple', 
    		title: 'Random text', 
    		description: 'RandomText is a tool designers and developers can use to quickly grab dummy text in either Lorem Ipsum or Gibberish format.'
    	},
    	
    	{
    		icon: 'fa fa-html5', 
    		title: 'Random text', 
    		description: 'RandomText is a tool designers and developers can use to quickly grab dummy text in either Lorem Ipsum or Gibberish format.'
    	},
    	
    	{
    		icon: 'fa fa-bullhorn', 
    		title: 'Random text', 
    		description: 'RandomText is a tool designers and developers can use to quickly grab dummy text in either Lorem Ipsum or Gibberish format.'
    	},
      	
      {
    		icon: 'fa fa-book', 
    		title: 'Random text', 
    		description: 'RandomText is a tool designers and developers can use to quickly grab dummy text in either Lorem Ipsum or Gibberish format.'
    	},
    	
    	{
    		icon: 'fa fa-envelope', 
    		title: 'Random text', 
    		description: 'RandomText is a tool designers and developers can use to quickly grab dummy text in either Lorem Ipsum or Gibberish format.'
    	},

    	{
    		icon: 'fa fa-code', 
    		title: 'Random text', 
    		description: 'RandomText is a tool designers and developers can use to quickly grab dummy text in either Lorem Ipsum or Gibberish format.'
    	},

    	{
    		icon: 'fa fa-briefcase', 
    		title: 'Random text', 
    		description: 'RandomText is a tool designers and developers can use to quickly grab dummy text in either Lorem Ipsum or Gibberish format.'
    	},

    	{
    		icon: 'fa fa-gamepad', 
    		title: 'Random text', 
    		description: 'RandomText is a tool designers and developers can use to quickly grab dummy text in either Lorem Ipsum or Gibberish format.'
    	}
    ]
    $scope.teamMembers = [
    	{
    		cover: 'images/team1.jpg',
    		icon: 'fa fa-twitter',
    		name: 'Leomarid Jona',
    		work: 'Devoloper & Designer',
    		about: 'Pellentesque elementum dapibus convallis. Vivamus eget finibus massa.'
    	},

    	{
    		cover: 'images/team2.jpg',
    		icon: 'fa fa-twitter',
    		name: 'Leomarid Jona',
    		work: 'Devoloper & Designer',
    		about: 'Pellentesque elementum dapibus convallis. Vivamus eget finibus massa.'
    	},

    	{
    		cover: 'images/team3.jpg',
    		icon: 'fa fa-twitter',
    		name: 'Leomarid Jona',
    		work: 'Devoloper & Designer',
    		about: 'Pellentesque elementum dapibus convallis. Vivamus eget finibus massa.'
    	},

    	{
    		cover: 'images/team4.jpg',
    		icon: 'fa fa-twitter',
    		name: 'Leomarid Jona',
    		work: 'Devoloper & Designer',
    		about: 'Pellentesque elementum dapibus convallis. Vivamus eget finibus massa.'
    	}
    ]
    $scope.pricingTables = [
    	{
    		currency: 'fa fa-usd',
    		price: 99,
    		date: 'per day',
    		head: 'BASIC',
    		iconPrint: 'fa fa-print',
    		iconClock: 'fa fa-clock-o',
    		iconTrash: 'fa fa-trash-o',
    		account: '30+ Account',
    		projects: '150+ Projects',
    		required: 'Lead Required'
    	},

    	{
    		currency: 'fa fa-usd',
    		price: 199,
    		date: 'per month',
    		head: 'MEDIUM',
    		iconPrint: 'fa fa-print',
    		iconClock: 'fa fa-clock-o',
    		iconTrash: 'fa fa-trash-o',
    		account: '30+ Account',
    		projects: '150+ Projects',
    		required: 'Lead Required'
    	},

    	{
    		currency: 'fa fa-usd',
    		price: 249,
    		date: 'per yer',
    		head: 'ADVANCE',
    		iconPrint: 'fa fa-print',
    		iconClock: 'fa fa-clock-o',
    		iconTrash: 'fa fa-trash-o',
    		account: '30+ Account',
    		projects: '150+ Projects',
    		required: 'Lead Required'
    	},

    	{
    		currency: 'fa fa-usd',
    		price: 599,
    		date: 'one time',
    		head: 'EXTENDED',
    		iconPrint: 'fa fa-print',
    		iconClock: 'fa fa-clock-o',
    		iconTrash: 'fa fa-trash-o',
    		account: '30+ Account',
    		projects: '150+ Projects',
    		required: 'Lead Required'
    	}
    ]
    $scope.ourWorks = [
    	{
    		show: "categoryName == '.html-img' || categoryName == '.categories'",
    		class: 'col-md-4 categories html-img',
    		image: 'images/nature.jpg',
    		text: 'Lorem ipsum dolor sit amet'
    	},

    	{
    		show: "categoryName == '.code-img' || categoryName == '.categories'",
    		class: 'col-md-4 categories code-img',
    		image: 'images/nature2.jpg',
    		text: 'Lorem ipsum dolor sit amet'
    	},

    	{
    		show: "categoryName == '.css-img' || categoryName == '.categories'",
    		class: 'col-md-4 categories css-img',
    		image: 'images/nature3.jpg',
    		text: 'Lorem ipsum dolor sit amet'
    	},

    	{
    		show: "categoryName == '.css-img' || categoryName == '.categories'",
    		class: 'col-md-4 categories css-img',
    		image: 'images/nature 4.jpg',
    		text: 'Lorem ipsum dolor sit amet'
    	},

    	{
    		show: "categoryName == '.script-img' || categoryName == '.categories'",
    		class: 'col-md-4 categories script-img',
    		image: 'images/nature5.jpg',
    		text: 'Lorem ipsum dolor sit amet'
    	},

    	{
    		show: "categoryName == '.html-img' || categoryName == '.categories'",
    		class: 'col-md-4 categories html-img',
    		image: 'images/nature6.jpg',
    		text: 'Lorem ipsum dolor sit amet'
    	}
    ]
    $scope.socButtons = [
    	{
    		icon:'fa fa-vk',
    		href: 'https://vk.com'
    	},

    	{
    		icon: 'fa fa-facebook',
    		href: 'https://www.facebook.com'
    	},

    	{
    		icon: 'fa fa-twitter',
    		href: 'https://twitter.com'
    	},

    	{
    		icon: 'fa fa-google-plus',
    		href: 'https://plus.google.com'
    	}
    ]
  });

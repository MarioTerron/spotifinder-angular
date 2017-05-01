angular.module('spotifinderApp')
	.controller('artistsController', function($scope, $rootScope, spotifinderService) {

	$scope.searchAlbums = function (){
		var artistSelected = $scope.artistSelected
		spotifinderService.getAlbums(artistSelected)
			.then(function(response) {
				$rootScope.albums = response.data.items
				$rootScope.artistSelected = $scope.artistSelected;
			})
		}
	})

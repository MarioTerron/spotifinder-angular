angular.module('spotifinderApp')
	.controller('albumsController', function($scope, $rootScope, spotifinderService) {

		$scope.searchTracks = function (){
			var albumSelected = $scope.albumSelected
			spotifinderService.getTracks(albumSelected)
				.then(function(response) {
					$rootScope.tracks = response.data.items
					$rootScope.albumSelected = $scope.albumSelected
				})
			}
	})

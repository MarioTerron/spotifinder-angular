angular.module('spotifinderApp')
	.controller('searchController', function($scope, $rootScope, spotifinderService) {

		$scope.searchArtist = function() {
			var userSearch = $scope.userSearch
			$rootScope.currentUserSearch = $scope.userSearch
			spotifinderService.getArtists(userSearch)
				.then(function(response) {
					$rootScope.artists = response.data.artists.items;
				})
			$scope.userSearch = ''
		}
	})

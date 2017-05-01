	angular.module('spotifinderApp')
	  .factory('spotifinderService', function ($http) {

			function _getArtists (userSearch) {
	      var url = 'https://api.spotify.com/v1/search?type=artist&query=' + userSearch
	      return $http.get(url)
	    }

			function _getAlbums (artistSelected) {
				var url = 'https://api.spotify.com/v1/artists/' + artistSelected + '/albums'
				return $http.get(url)
			}

			function _getTracks (albumSelected) {
				var url = 'https://api.spotify.com/v1/albums/' + albumSelected + '/tracks'
				return $http.get(url)
			}

	    return {
	      getArtists: _getArtists,
				getAlbums: _getAlbums,
				getTracks: _getTracks,
	    }
	  })

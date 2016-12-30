(function() {
    'use strict';

    angular
        .module('app')
        .service('InvestorService', InvestorService);

    InvestorService.$inject = ['$http', '$q'];

    /* @ngInject */
    function InvestorService($http, $q) {
        this.func = func;

        ////////////////

        function func() {
        }

        this.getAllUserLikes = function(){

        	var URL = "http://www.incub.ee/rest/v1.0/like"

        	return $http({
        		method: 'GET',
        		url: URL,
        		params:{
        			id: '110489314263267697974'
        		}
        	}).then(function(response){
        		return response; 
        	});
        }

        this.getIncubeeById = function(incubeeId){

        	var defer = $q.defer();

        	var incubeeURL = "http://www.incub.ee/rest/v1.0/" + incubeeId;
        	var reviewsURL = "http://www.incub.ee/incubee/rest/v1.0/review/" + incubeeId;

        	var getIncubeeDetails = $http({
        		method: 'GET',
        		url: incubeeURL
        	});

        	var getIncubeeReviews = $http({
        		method: 'GET',
        		url: reviewsURL
        	});

        	return $q.all([getIncubeeDetails, getIncubeeReviews]).then(function(results){
        		return results;
        	})
        }

        this.getReviews = function(incubeeId) {

        	var reviewsURL = "http://www.incub.ee/incubee/rest/v1.0/review/" + incubeeId;

        	return $http({
        		method: 'GET',
        		url: reviewsURL
        	}).then(function(reviews){
        		return reviews;
        	})
        }

        this.getUserById = function(userId){

        	var userURL = 'http://www.incub.ee/rest/v1.0/customer/details';

        	return $http({
        		method: 'GET',
        		url: userURL,
        		params:{
        			id: userId
        		}
        	}).then(function(userDetails){
        		return userDetails;
        	})
        }
    }
})();







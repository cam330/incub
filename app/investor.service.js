(function() {
    'use strict';

    angular
        .module('app')
        .service('InvestorService', InvestorService);

    InvestorService.$inject = ['$http'];

    /* @ngInject */
    function InvestorService($http) {
        this.func = func;

        ////////////////

        function func() {
        }
        //This will get all of the customers who belong to the userId given
        this.getCustomers = function(){

        	var URL = "http://www.incub.ee/rest/v1.0/customer"

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

        //This will get all of the incubees in the system
        this.getAllIncubees = function(){

        	var URL = "http://www.incub.ee/rest/v1.0/all"

        	return $http({
        		method: 'GET',
        		url: URL
        	}).then(function(response){
        		return response;
        	})
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

        	var URL = "http://www.incub.ee/rest/v1.0/" + incubeeId;

        	return $http({
        		method: 'GET',
        		url: URL
        	}).then(function(response){
        		return response;
        	});
        }
    }
})();







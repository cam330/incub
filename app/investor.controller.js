(function() {
    'use strict';

    angular
        .module('app')
        .controller('InvestorController', InvestorController);

    InvestorController.$inject = ["InvestorService", '$window'];

    /* @ngInject */
    function InvestorController(InvestorService, $window) {
        var vm = this;
        vm.title = 'InvestorController';
        vm.customersArray = [];
        vm.reviewsArray = [];

        activate();

        ////////////////

        function activate() {

        	InvestorService.getAllUserLikes().then(function(response){

        		for(var i = 0; i < response.data.incubeeList.length; i++){
        			InvestorService.getIncubeeById(response.data.incubeeList[i]).then(function(incubeeResponse){

        				if (incubeeResponse[0].data !== "") {
        					if (incubeeResponse[1].data.reviewData != null) {
        						vm.customersArray.push({incubeeDetails: incubeeResponse[0], averageRating: incubeeResponse[1].data.reviewData.averageRating, numberOfRatings: incubeeResponse[1].data.reviewData.noOfRatings});
        					} else {
        						vm.customersArray.push({incubeeDetails: incubeeResponse[0], averageRating: 0, numberOfRatings: 0});
        					}
        				}
        			});

        		}
        	})
        }

        vm.getReviews = function(incubeeId){
        	vm.reviewsArray = [];
        	InvestorService.getReviews(incubeeId).then(function(reviews){
        		for(var i = 0; i < reviews.data.reviews.length; i++){

        			var date = new Date(reviews.data.reviews[i].date);
					var formattedDate = date.getMonth()+1+'/' + date.getDate() +'/'+date.getFullYear();

					vm.reviewsArray.push({rating: reviews.data.reviews[i].rating, title: reviews.data.reviews[i].title, description: reviews.data.reviews[i].description, userId: reviews.data.reviews[i].user_id, date: formattedDate});
        		}
        	});
        }
    }
})();
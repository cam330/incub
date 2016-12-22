(function() {
    'use strict';

    angular
        .module('app')
        .controller('InvestorController', InvestorController);

    InvestorController.$inject = ["InvestorService"];

    /* @ngInject */
    function InvestorController(InvestorService) {
        var vm = this;
        vm.title = 'InvestorController';
        vm.customersArray = [];
        vm.likesArray = [];

        activate();

        ////////////////

        function activate() {
        	InvestorService.getAllIncubees().then(function(response){
        		console.log(response.data);

        		for(var i = 0; i < response.data.length; i++){
        			if (vm.likesArray.indexOf(response.data[i].id)) {
        				console.log(response.data[i].company_name);
        				vm.customersArray.push(response.data[i]);
        			}
        		}
        	})

        	InvestorService.getAllUserLikes().then(function(response){
        		
        		vm.likesArray = response.data.incubeeList;
        		console.log(vm.likesArray);
        	})



        }

        vm.getCustomers = function(){
        	InvestorService.getCustomers().then(function(response){
        		console.log(response.data);
        	});
        }

        vm.getAllIncubees = function(){
        	InvestorService.getAllIncubees().then(function(response){
        		console.log(response.data);
        	})
        }

    }
})();
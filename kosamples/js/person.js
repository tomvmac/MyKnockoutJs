
function Person(config) {
    'use strict';

    var addWindowHandler, buildRequestUrl, 
        that = this,
        defaults = {
            fname: 'DefaultFirstName',
            lname: 'DefaultLastName',
            age: '1'
        };



    /** 
     * initialise the app
     * @access private
     */
    return (function () {

        // init

        // view model
        that.viewModel = {
            fname: ko.observable(),
            lname: ko.observable(),
            age: ko.observable(),
            saveHandler: function (){
                if (that.viewModel.isValid()){
                    alert("You have entered all required data and can save.");
                }
                else {
                    alert("Dude, you missed some fields, go and enter them and click again!");
                }
            }


        };

        that.viewModel.greeting = ko.computed(function () {
        	if (that.viewModel.fname() === undefined || that.viewModel.lname() === undefined)
        		return "Please enter First Name and Last Name.";
            return "Hello " + that.viewModel.fname() + " "  + that.viewModel.lname() + "!";
        });

        that.viewModel.isValid = ko.computed(function (){
        	if (that.viewModel.fname() === undefined){
        		//alert("Please enter First Name");
        		return false;
        	}

        	if (that.viewModel.fname().length < 1){
        		//alert("First Name is required.");
        		return false;	
        	}

        	return true;	
        });

        // go knockout!
        ko.applyBindings(that.viewModel);
    }());
}
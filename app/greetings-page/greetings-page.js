angular.module("myApp").component('greetingsPage', {
    templateUrl: 'app/greetings-page/greetings-page.html',
    bindings: {
        companyInfoResponse: '<',
        guestInfoResponse: '<',
        templateInfoResponse: '<'
    },
    controller: function ($scope) {
        this.errorMessages = [];
        this.activeGuest = {};
        this.activeCompany = {};
        this.activeTemplate = {};
        this.creatingNewTemplate = false;

        this.$onInit = () => {
            //TODO Set time of day variable to display greeting
            //
            if (this.companyInfoResponse.success) {
                this.companyInformation = this.companyInfoResponse.data;
            } else {
                this.errorMessages.push("I'm Sorry. I am running into an issue grabbing the company information. Please contact support. ")
            }
            if (this.guestInfoResponse.success) {
                this.guestInformation = this.guestInfoResponse.data;
            } else {
                this.errorMessages.push("I'm Sorry. I am running into an issue grabbing the guest information. Please contact support. ")
            }
            if (this.templateInfoResponse.success) {
                this.templateInformation = this.templateInfoResponse.data;
            } else {
                this.errorMessages.push("I'm Sorry. I am running into an issue grabbing the template information. Please contact support. ")
            }
        };

        this.changeActiveCompany = function(company) {
            //TODO uppercase first letter of city.
            this.activeCompany = company;
        };

        this.changeActiveGuest = function(guest) {
            this.activeGuest = guest;
        };

        this.changeActiveTemplate = function(templateName) {
            if (templateName === "createNewTemplate") {
                this.creatingNewTemplate = true;
                return;
            }
            this.activeTemplate = templateName;
        }

    }
});
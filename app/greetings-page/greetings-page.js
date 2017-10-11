angular.module("myApp").component('greetingsPage', {
    templateUrl: 'app/greetings-page/greetings-page.html',
    bindings: {
        companyInfoResponse: '<',
        guestInfoResponse: '<',
        templateInfoResponse: '<'
    },
    controller: function ($timeout) {
        this.errorMessages = [];
        this.activeGuest = null;
        this.activeCompany = null;
        this.activeTemplate = null;
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
            $timeout( () => {
                this.errorMessages = [];
            }, 5000 );
        };

        this.changeActiveCompany = (company) => {
            //TODO uppercase first letter of city.
            this.activeCompany = company;
        };

        this.changeActiveGuest = (guest) => {
            this.activeGuest = guest;
            this.activeGuest.reservation.startTimestamp = new Date(this.activeGuest.reservation.startTimestamp);
            this.activeGuest.reservation.endTimestamp = new Date(this.activeGuest.reservation.endTimestamp);
        };

        this.changeActiveTemplate = (templateName) => {
            if (templateName === "createNewTemplate") {
                this.creatingNewTemplate = true;
                return;
            }
            this.activeTemplate = this.templateInformation[templateName];
        }

    }
});
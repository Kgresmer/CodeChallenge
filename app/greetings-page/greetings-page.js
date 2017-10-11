angular.module("myApp").component('greetingsPage', {
    templateUrl: 'app/greetings-page/greetings-page.html',
    bindings: {
        companyInformation: '<',
        guestInformation: '<'
    },
    controller: function ($scope) {
        console.log("greetings from the greetings controller");
        this.$onInit = () => {
            console.log(this.companyInformation);
            console.log(this.guestInformation);
        };


    }
});
angular.module("myApp").component('pageOne', {
    templateUrl: 'app/page-one/page-one.html',
    controller: function ($scope) {
        this.tank = "TANK";
    }
});
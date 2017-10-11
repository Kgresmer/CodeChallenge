angular.module("myApp")

    .factory('infoService', ['$http', function($http) {
        return {
            getCompanyInformation: function (date) {
                return $http.get('app/json/Companies.json')
                    .then((response) => {
                        return response.data;
                    }, (error) => {
                        return error;
                    });
            },
            getGuestInformation: function (date) {
                return $http.get('app/json/Guests.json')
                    .then((response) => {
                        return response.data;
                    }, (error) => {
                        return error;
                    });
            }
        }
    }]);
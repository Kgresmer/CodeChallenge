angular.module("myApp")

    .factory('infoService', ['$http', function($http) {
        return {
            getCompanyInformation: function () {
                return $http.get('app/json/Companies.json')
                    .then((response) => {
                        return {
                            success: true,
                            data: response.data
                        };
                    }, (error) => {
                        return {
                            success: false,
                            data: error
                        };
                    });
            },
            getGuestInformation: function () {
                return $http.get('app/json/Guests.json')
                    .then((response) => {
                        return {
                            success: true,
                            data: response.data
                        };
                    }, (error) => {
                        return {
                            success: false,
                            data: error
                        };
                    });
            },
            getTemplateInformation: function() {
                return $http.get('app/json/Templates.json')
                    .then((response) => {
                        return {
                            success: true,
                            data: response.data
                        };
                    }, (error) => {
                        return {
                            success: false,
                            data: error
                        };
                    })
            }
        }
    }]);
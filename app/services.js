angular.module("myApp")

    .factory('todoService', ['$http', function($http) {
        let baseUrl = '/items';
        return {
            getAll: function () {
                return $http.get(baseUrl + '/all')
                    .then((response) => {
                        return response.data;
                    }, (error) => {
                        return error;
                    });
            },
            getOneItemByDate: function (date) {
                return $http.get('/app/json/experience.json')
                    .then((response) => {
                        this.jobs = response.data;
                    }, (error) => {
                        return error;
                    });
            }
            
        }
    }]);
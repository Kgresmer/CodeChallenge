
angular.module('myApp', ['ngResource', 'ui.router']);

angular.module('myApp').config(function ($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/');
    let home = {
        name: 'home',
        url: '/',
        component: 'pageOne'
    };
    let gtds = {
        name: 'gtds',
        url: '/gtds',
        component: 'pageSixGtds',
        resolve: {
            todoItems: function (todoService) {
                return todoService.getAll();
            }
        }
    };

    $stateProvider
        .state(home);
});


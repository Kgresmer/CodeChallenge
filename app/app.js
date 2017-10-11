
angular.module('myApp', ['ngResource', 'ui.router']);

angular.module('myApp').config(function ($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/');
    let home = {
        name: 'home',
        url: '/',
        component: 'greetingsPage',
        resolve: {
            companyInformation: function (infoService) {
                return infoService.getCompanyInformation();
            },
            guestInformation: function (infoService) {
                return infoService.getGuestInformation();
            }
        }
    };

    $stateProvider
        .state(home);
});


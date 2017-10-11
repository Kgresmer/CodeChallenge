
angular.module('myApp', ['ngResource', 'ui.router']);

angular.module('myApp').config(function ($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/');
    let home = {
        name: 'home',
        url: '/',
        component: 'greetingsPage',
        resolve: {
            companyInfoResponse: function (infoService) {
                return infoService.getCompanyInformation();
            },
            guestInfoResponse: function (infoService) {
                return infoService.getGuestInformation();
            },
            templateInfoResponse: function (infoService) {
                return infoService.getTemplateInformation();
            }
        }
    };

    $stateProvider
        .state(home);
});


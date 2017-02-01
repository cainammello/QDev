/**
 * Created by cainammello on 1/31/17.
 */
/**
 * Created by cainammello on 1/31/17.
 */

(function () {
    var QDev = angular.module('QDev');

    QDev.config(function($stateProvider, $urlRouterProvider) {
        var index = {
            name: 'index',
            url: '/',
            views: {
                'projects': {'templates/projects.html': projects2},
                'aboutUs': {'templates/about_us.html': aboutUs}
            }
        };


        var admin = {
            name: 'admin',
            url: '/admin',
            templateUrl: 'template/admin.html',
            controller: 'AdminController as mv'

        };

        var error404 = {
            name: 'error404',
            url: '/error404',
            templateUrl: 'template/error404'
        };



        $stateProvider.state(login);
        $stateProvider.state(admin);
        $stateProvider.state(index);
        //$urlRouterProvider.otherwise('/error404');
    });
}());




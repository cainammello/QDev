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
                'tour': {templateUrl: 'templates/tour.html', controller: 'tourController as mv'},
                'projects': {templateUrl:'templates/projects.html', controller: 'projectsController as mv'},
                'aboutUs': {templateUrl: 'templates/about_us.html', controller: 'aboutUsController as mv'},
                'news': {templateUrl: 'templates/news.html', controller: 'newscontroller as mv'},
                'inovationSpace': {templateUrl: 'templates/inovation_space.html', controller: 'inovationController as mv'},
                'contact': {templateUrl: 'templates/contact.html', controller: 'contactController as mv'},

            }
        };

        var error404 = {
            name: 'error404',
            url: '/error404',
            templateUrl: 'template/error404'
        };

        $stateProvider
            .state(index);
        $urlRouterProvider.otherwise('/');
    });
}());




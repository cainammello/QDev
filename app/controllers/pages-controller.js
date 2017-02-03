/**
 * Created by cainammello on 2/1/17.
 */
(function () {
    var QDev = angular.module('QDev');

    var pagesController = function ($scope) {
        var mv = this;
        mv.pages = [
            tour = {
            },
            projects = {
            },
            aboutUs = {
            },
            news = {
            },
            inovationSpace = {
            },
            contact = {
            }
        ]
    }

    pagesController.$inject = ['$scope'];

    QDev.controller("pagesController", pagesController);

}());
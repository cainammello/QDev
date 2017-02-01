/**
 * Created by cainammello on 2/1/17.
 */
(function () {
    var QDev = angular.module('QDev');

    var pagesController = function ($scope) {
        var _pagesController = this;
        _pagesController.pages = [
            tour = {
                name: "tour",
                title: null,
                text: null,
                photos: {
                    photo1: "tourImage.jpg",
                    photo2: "tourImage2.jpg",
                    photo2: "tourImage3.jpg"
                },
                createDate: new date
            },
            projects = {
                name: "projects",
                title: "Projects",
                text:{
                    paragraph1: "Mussum Ipsum, cacilds vidis litro abertis. Sapien in monti palavris qui num significa nadis i pareci latim. Quem num gosti di mum que vai caçá sua turmis! Nullam volutpat risus nec leo commodo, ut interdum diam laoreet. Sed non consequat odio. Delegadis gente finis, bibendum egestas augue arcu ut est.",
                    paragraph2: "Mussum Ipsum, cacilds vidis litro abertis. Sapien in monti palavris qui num significa nadis i pareci latim. Quem num gosti di mum que vai caçá sua turmis! Nullam volutpat risus nec leo commodo, ut interdum diam laoreet. Sed non consequat odio. Delegadis gente finis, bibendum egestas augue arcu ut est."
                },
                photos: null,
                createDate: new date
            },
            aboutUs = {
                name: "aboutUs",
                title: "About Us",
                text:{
                    paragraph1: "Mussum Ipsum, cacilds vidis litro abertis. Sapien in monti palavris qui num significa nadis i pareci latim. Quem num gosti di mum que vai caçá sua turmis! Nullam volutpat risus nec leo commodo, ut interdum diam laoreet. Sed non consequat odio. Delegadis gente finis, bibendum egestas augue arcu ut est."+
                    "Mussum Ipsum, cacilds vidis litro abertis. Sapien in monti palavris qui num significa nadis i pareci latim. Quem num gosti di mum que vai caçá sua turmis! Nullam volutpat risus nec leo commodo, ut interdum diam laoreet. Sed non consequat odio. Delegadis gente finis, bibendum egestas augue arcu ut est."
                },
                photos: {
                    photo1: "aboutUsImage.jpg"
                },
                createDate: new date
            },
            news = {
                name: "news",
                title: "News",
                text: {
                    paragraph1: "Mussum Ipsum, cacilds vidis litro abertis. Sapien in monti palavris qui num significa nadis i pareci latim. Quem num gosti di mum que vai caçá sua turmis! Nullam volutpat risus nec leo commodo, ut interdum diam laoreet. Sed non consequat odio. Delegadis gente finis, bibendum egestas augue arcu ut est.",
                    paragraph2: "Mussum Ipsum, cacilds vidis litro abertis. Sapien in monti palavris qui num significa nadis i pareci latim. Quem num gosti di mum que vai caçá sua turmis! Nullam volutpat risus nec leo commodo, ut interdum diam laoreet. Sed non consequat odio. Delegadis gente finis, bibendum egestas augue arcu ut est."
                },
                photos: {
                    photo1: "newsImage.jpg",
                    photo1: "newsImage2.jpg"
                },
                createDate: new date
            },
            inovationSpace = {
                name: "inovationSpace",
                title: "Inovation Space",
                text: {
                    paragraph1: "Mussum Ipsum, cacilds vidis litro abertis. Sapien in monti palavris qui num significa nadis i pareci latim. Quem num gosti di mum que vai caçá sua turmis! Nullam volutpat risus nec leo commodo, ut interdum diam laoreet. Sed non consequat odio. Delegadis gente finis, bibendum egestas augue arcu ut est.",
                    paragraph2: "Mussum Ipsum, cacilds vidis litro abertis. Sapien in monti palavris qui num significa nadis i pareci latim. Quem num gosti di mum que vai caçá sua turmis! Nullam volutpat risus nec leo commodo, ut interdum diam laoreet. Sed non consequat odio. Delegadis gente finis, bibendum egestas augue arcu ut est."
                },
                photos: {
                    photo1: "inovationImage.jpg"
                },
                createDate: new date
            },
            contact = {
                name: "contact",
                title: "Contact",
                text: {
                    paragraph1: "qdev@gmail.com"
                },
                photos: {
                    photo1: "logoGut.png",
                    photo2: "logoSkype.png",
                    photo2: "logoFace.png",
                    photo2: "logoTwitter.png",
                    photo2: "logoWhats2.png"
                },
                createDate: new date
            }
        ]
    }

    _pagesController.$inject = ['$scope'];

    myApp.controller("_pagesController", _pagesController);

}());
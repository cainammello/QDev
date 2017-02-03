(function () {
    var QDev = angular.module("QDev");

    var AboutUsController = function () {
        var mv = this;
        mv.aboutUs = {
            name: "aboutUs",
            title: "About Us",
            text:{
                paragraph1: "Mussum Ipsum, cacilds vidis litro abertis. Sapien in monti palavris qui num significa nadis i pareci latim. Quem num gosti di mum que vai caçá sua turmis! Nullam volutpat risus nec leo commodo, ut interdum diam laoreet. Sed non consequat odio. Delegadis gente finis, bibendum egestas augue arcu ut est."+
                "Mussum Ipsum, cacilds vidis litro abertis. Sapien in monti palavris qui num significa nadis i pareci latim. Quem num gosti di mum que vai caçá sua turmis! Nullam volutpat risus nec leo commodo, ut interdum diam laoreet. Sed non consequat odio. Delegadis gente finis, bibendum egestas augue arcu ut est."
            },
            photos: {
                photo1: "imagens/aboutUsImage.jpg",
                photo2: "imagens/aboutUsImage2.jpg"
            },
            createDate: new Date(),
        }
    };

    QDev.controller('aboutUsController', AboutUsController);
}());
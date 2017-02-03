(function () {
    var QDev = angular.module("QDev");

    var NewsController = function () {
        var mv = this;
        mv.newscontroller = {
            name: "news",
            title: "News",
            text: {
                paragraph1: "Mussum Ipsum, cacilds vidis litro abertis. Sapien in monti palavris qui num significa nadis i pareci latim. Quem num gosti di mum que vai caçá sua turmis! Nullam volutpat risus nec leo commodo, ut interdum diam laoreet. Sed non consequat odio. Delegadis gente finis, bibendum egestas augue arcu ut est Mussum Ipsum, cacilds vidis litro abertis. Sapien in monti palavris qui num significa nadis i pareci latim. Quem num gosti di mum que vai caçá sua turmis! Nullam volutpat risus nec leo commodo, ut interdum diam laoreet. Sed non consequat odio. Delegadis gente finis, bibendum egestas augue arcu ut estSed non consequat odio. Delegadis gente finis, bibendum egestas augue arcu ut est Sed non consequat odio. Delegadis gente finis, bibendum egestas augue arcu ut est.",
                paragraph2: "Mussum Ipsum, cacilds vidis litro abertis. Sapien in monti palavris qui num significa nadis i pareci latim. Quem num gosti di mum que vai caçá sua turmis! Nullam volutpat risus nec leo commodo, ut interdum diam laoreet. Sed non consequat odio. Delegadis gente finis, bibendum egestas augue arcu ut est Mussum Ipsum, cacilds vidis litro abertis. Sapien in monti palavris qui num significa nadis i pareci latim. Quem num gosti di mum que vai caçá sua turmis! Nullam volutpat risus nec leo commodo, ut interdum diam laoreet. Sed non consequat odio. Delegadis gente finis, bibendum egestas augue arcu ut estSed non consequat odio. Delegadis gente finis, bibendum egestas augue arcu ut est Sed non consequat odio. Delegadis gente finis, bibendum egestas augue arcu ut est."
            },
            photos: {
                photo1: "imagens/newsImage.jpg",
                photo2: "imagens/newsImage2.jpg"
            },
            createDate: new Date(),
        }
    }

    QDev.controller('newscontroller', NewsController);

}());
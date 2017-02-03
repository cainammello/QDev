(function () {
    var QDev = angular.module("QDev");

    var ContactController = function () {
        var mv = this;
        mv.contactController = {
            name: "contact",
            title: "Contact",
            text: {
                paragraph1: "qdev@gmail.com",
                paragraph2: "Copyright @ 2017 Cainã Mello All rights reserved"
            },
            photos: {
                photoGit: "imagens/logoGut.png",
                photoSkype: "imagens/logoSkype.png",
                photoFace: "imagens/logoFace.png",
                photoTwitter: "imagens/logoTwitter.png",
                photoWhats: "imagens/logoWhats.png"
            },
            createDate: new Date(),
        };
    }
    QDev.controller('contactController', ContactController);
}());
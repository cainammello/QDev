(function () {
   var QDev = angular.module("QDev");

   var TourController = function () {
       var mv = this;
       mv.tourController = {
           name: "tour",
           title: "Tuor",
           text: null,
           photos: {
               photo1: "imagens/fundo1.png",
               photo2: "imagens/fundo2.jpg",
               photo3: "imagens/fundo3.png"
           },
           createDate: new Date(),
       };
   }
   QDev.controller('tourController', TourController );
}())
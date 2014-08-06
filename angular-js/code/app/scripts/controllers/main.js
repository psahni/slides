'use strict';

/**
 * @ngdoc function
 * @name codeApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the codeApp
 */
app.controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  })
var editor;
app.controller("Examples", function($scope, $location,  $routeParams, $http){
   $scope.runUrl = "/views/examples/" + $location.path().replace("example", '') + ".html";
   $http.get($scope.runUrl).success(function(data){
     //data = JSON.stringify(data, null, 2);
       editor = CodeMirror.fromTextArea(document.getElementById("code"), {
           mode: "text/html"              ,
           lineNumbers: true,
           viewportMargin: Infinity
       });

       if(data) {
         editor.setValue(data);
       }

   });

  $scope.loadExample = function($scope, $location){
    console.log($location);
  }
});

app.controller("countryExample", function($scope, $location,  $routeParams, $http){
    $scope.countryName = $routeParams.countryName;
    $scope.subUrl = "/views/examples/18.html#/" + $scope.countryName;
})


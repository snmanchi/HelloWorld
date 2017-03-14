var app = angular.module("ngModelExamples",[]);
app.controller("NgModelCtrl", NgModelCtrl);

function NgModelCtrl($scope) {
   $scope.textChange = function() {
       console.log("Text Changed");
   }
}
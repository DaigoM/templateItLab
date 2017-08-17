var app = angular.module('rakutenTagManagerApp', []);


app.controller('listController', function($scope){
    var dataBase = JSON.parse(localStorage.getItem('dataBase'));

    $scope.projects = dataBase;
});
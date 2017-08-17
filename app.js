var app = angular.module('rakutenTagManagerApp', ["ngMessages"]);

app.controller('employeeController', function($scope){
    window.dataBase = {
        projects: []
    }
    
    const types = {
        IMPLEMENTATION: 1,
        CALL: 2
    };
    
    var startedDay = new Date();
    var project = {
        name: '',
        mid: '',
        type: '',
        startedDay: startedDay,
        deadline: '',
        email: '',
        description: ''
    }

    function addProject(project){
        window.dataBase.projects.push(project);
        localStorage.setItem('dataBase', JSON.stringify(window.dataBase.projects));
    }

    $scope.form = form;
    $scope.project = project;
    $scope.types = types;
    $scope.addProject = addProject;

});


// Automatic data injection //
// app.controller('employeeController', function($scope){
    
//     var project = {
//         name: 'Rakuten',
//         mid: 12345,
//         type: '1',
//         startedDay: getStartedDay(),
//         deadline: '01/09/2017',
//         email: 'marketing@rakuten.com.br',
//         description: 'Reimplementação da Tag SPI'
//     };
//     $scope.project = project;
    
// });
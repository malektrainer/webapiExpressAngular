var uri = 'api/student/';

var app = angular.module("studentApp", []);

app.controller("studentCtrl", studentCtrl);

function studentCtrl($scope, $http) {

    $http.get(uri).then( getAll, fail);

    $scope.find = find;

    function find(id) {
        $http.get(uri + id).then(getStudent, fail);
    }

    function getAll(result) {
        $scope.students = result.data;
    }

    function getStudent(result) {
        $scope.result = result.data.name + ': ' + result.data.age;
    }

    function fail(error) {
        $scope.result = error.data;
    }

}

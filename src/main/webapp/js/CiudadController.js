'use strict';

//var listaCiudad=[{"id":1, "nombre":"Tunja"},{"id":2, "nombre":"Bogota"}];
var listaCiudad = [];
var consecutivoCiudad=0;

module.controller('CiudadCtrl', ['$scope', '$filter', '$http', function ($scope, $filter, $http) {
    //listar
    $scope.lista = listaCiudad;
    $scope.datosFormulario = {};
    $scope.panelEditar = false;
    $scope.listar=function(){
        $scope.lista = listaCiudad;
    $http.get('./webresources/CityService', {})
                .success(function (data, status, headers, config) {
                    // $scope.lista = data;
                    listaCiudad = data;
                    console.log(data);
                    //listar
                    $scope.lista = listaCiudad;
                    $scope.datosFormulario = {};
                    $scope.panelEditar = false;
                    $scope.listar = function () {
                        $scope.lista = listaCiudad;
                    };

                    $scope.listar();
                }).error(function (data, status, headers, config) {
            alert('Error al consultar la informaci\xf3n, por favor intente m\xe1s tarde');
        });
    };

    $scope.listar();
    //guardar
    $scope.nuevo = function () {
        $scope.panelEditar = true;
        $scope.datosFormulario = {};
    };
    
    $scope.guardar = function () {
        $scope.errores = {};
        var error = false;
        
        if (error)
            return;
        if(!$scope.datosFormulario.id){
            $scope.datosFormulario.id=consecutivoCiudad++;
        }
        $scope.lista.push($scope.datosFormulario);
        alert("Sus datos han sido guardados con éxito");
        var city = [$scope.datosFormulario.id,
                    $scope.datosFormulario.nombre];
        $http.post('./webresources/CityService', city).then(
                function successCallback(response) {
                    console.log("Successfully POST-ed data");
                },
                function errorCallback(response) {
                    console.log("POST-ing of data failed");
                }
        );
        $scope.cancelar(); 
    };
    $scope.cancelar = function () {
        $scope.panelEditar = false;
        $scope.datosFormulario = {};
    };

    //editar
    $scope.editar = function (data) {
        $scope.panelEditar = true;
        $scope.datosFormulario = data;
    };
    //eliminar
    $scope.eliminar = function (data){
        if (confirm('\xbfDesea elminar este registro?')) {    
            for(var i=0;i<$scope.lista.length;i++){
                if($scope.lista[i].id==data.id){
                    $scope.lista.splice(i,1);
                }
            }
        }
    };
}]);

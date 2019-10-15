'use strict';

var listaCliente=   [
                        {"id":1, "nombre":"Deisy", "direccion":"car 8a # 45 - 121", "telefono":"3114456556", "ciudad":{"id":1, "nombre":"Tunja"}},
                        {"id":2, "nombre":"Pedro", "direccion":"car 46 # 163b - 41", "telefono":"3207594755", "ciudad":{"id":2, "nombre":"Bogota"}}
                    ];
var consecutivoCliente=2;

module.controller('ClienteCtrl', ['$scope', '$filter', '$http', function ($scope, $filter, $http) {
    //listar
    $scope.lista = listaCliente;
    $scope.listaCiudad=listaCiudad;
    $scope.datosFormulario = {};
    $scope.panelEditar = false;
    $scope.listar=function(){
        $scope.lista = listaCliente;
    };
    $http.get('./webresources/ClientService', {})
                .success(function (data, status, headers, config) {
                    // $scope.lista = data;
                    listaCliente = data;
                    console.log(data);
                    //listar
                    $scope.lista = listaCliente;
                    $scope.listaCiudad = listaCiudad;
                    $scope.datosFormulario = {};
                    $scope.panelEditar = false;
                    $scope.listar = function () {
                        $scope.lista = listaCliente;
                    };
                    $scope.listar();
                }).error(function (data, status, headers, config) {
            alert('Error al consultar la informaci\xf3n, por favor intente m\xe1s tarde');
        });
    $scope.listar();
    //guardar
    $scope.nuevoCliente = function () {
        console.log("si1");
        $scope.panelEditar = true;
        $scope.datosFormulario = {};
    };
    
    $scope.guardarCliente = function () {
       $scope.errores = {};
        var error = false;
        
        if (error)
            return;
        if(!$scope.datosFormulario.id){
            $scope.datosFormulario.id=consecutivoCliente++;
        }
        $scope.lista.push($scope.datosFormulario);
        alert("Sus datos han sido guardados con éxito");
        var cliente = [$scope.datosFormulario.id,
                    $scope.datosFormulario.nombre,
                    $scope.datosFormulario.direccion,
                    $scope.datosFormulario.telefono,
                    $scope.datosFormulario.ciudad.id];
        $http.post('./webresources/ClientService', cliente).then(
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

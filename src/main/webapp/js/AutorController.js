'use strict';

var listaAutor = [];
var consecutivoAutor = 0;
var listAutorJson = [];

module.controller('AutorCtrl', ['$scope', '$filter', '$http', function ($scope, $filter, $http) {
        //listar
        $scope.listaA = listAutorJson;
        console.log("cccc")
        $http.get('./webresources/AuthorService', {})
                .success(function (data, status, headers, config) {
                    //$scope.lista = data;
                    listaAutor = data;
                    listAutorJson = [];
                    console.log("Hola");
                    console.log(data);
                    for (var i = 0; i < listaAutor.length; i++) {
                        listAutorJson.push({
                            "id": listaAutor[i].id,
                            "name": listaAutor[i].name,
                            "nationality": listaAutor[i].nationality
                        });
                    }
                    $scope.listaA = listAutorJson;
                    $scope.listAuthor = listAutorJson;
                    $scope.datosFormularioAutor = {};
                    $scope.panelEditar = false;
                    $scope.listar();
                }).error(function (data, status, headers, config) {
            alert('Error al consultar la informaci\xf3n, por favor intente m\xe1s tarde');
        });
        $scope.listar = function () {
            $scope.listaA = listAutorJson;
            consecutivoAutor = listAutorJson.length;
        };
        //guardar
        $scope.nuevoAutor = function () {
            $scope.panelEditar = true;
            $scope.datosFormularioAutor = {};

        };

        $scope.guardarAutor = function () {
            $scope.errores = {};
            var error = false;

            if (error)
                return;
            if (!$scope.datosFormularioAutor.id) {
                $scope.datosFormularioAutor.id = consecutivoAutor++;
            }
            alert("Datos guardados con exito");
            var autor = {"id":$scope.datosFormularioAutor.id,
                "name":$scope.datosFormularioAutor.name,
                "nationality":$scope.datosFormularioAutor.nationality};
            $http.post('./webresources/AuthorService/', autor).then(
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
            $scope.datosFormularioAutor = {};
        };

        //editar 
        $scope.editar = function (editado) {
            $scope.panelEditar = true;
            $scope.datosFormularioAutor = editado;
        };
        //eliminar
        $scope.eliminar = function (data) {
            if (confirm('\xbfDesea elminar este registro?')) {
                $http.post('./webresources/AuthorService/Delete', data).then(
                    function successCallback(response) {
                        console.log("Successfully POST-ed data");
                    },
                    function errorCallback(response) {
                        console.log("POST-ing of data failed");
                    }
            );
            }
        };
    }]);


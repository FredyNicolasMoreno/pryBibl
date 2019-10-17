'use strict';

var listaAutor = [];
var consecutivoAutor = 0;
var listAutorJson = [];

module.controller('AutorCtrl', ['$scope', '$filter', '$http', function ($scope, $filter, $http) {
        //listar
        $scope.listaA = listAutorJson;
        $http.get('./webresources/AuthorService', {})
                .success(function (data, status, headers, config) {
                    //$scope.lista = data;
                    listaAutor = data;
                    var j;
                    listAutorJson = [];
                    for (var i = 0; i < listaAutor.length; i++) {
                        listAutorJson.push({
                            "id": listaAutor[i].id,
                            "name": listaAutor[i].name,
                            "nationality": listaAutor[i].nationality
                        });
                    }
                    $scope.listaA = listAutorJson;
                    $scope.listAuthor = listJson;
                    console.log("face23")
                    $scope.datosFormularioAutor = {};
                    $scope.panelEditar = false;
                    $scope.listar = function () {
                        $scope.listaA = listAutorJson;
                    };
                    $scope.listar();
                }).error(function (data, status, headers, config) {
            alert('Error al consultar la informaci\xf3n, por favor intente m\xe1s tarde');
        });
        $scope.listar = function () {
            $scope.listaA = listAutorJson;
            console.log(listaA);
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
                console.log(consecutivoAutor);
            }
            alert("Datos guardados con exito");
            var autor = [$scope.datosFormularioAutor.id,
                $scope.datosFormularioAutor.nombre,
                $scope.datosFormularioAutor.nacionalidad];
            $http.post('./webresources/AuthorService/').then(
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
                for (var i = 0; i < $scope.lista.length; i++) {
                    if ($scope.lista[i].id == data.id) {
                        $scope.lista.splice(i, 1);
                    }
                }
            }
        };
    }]);


'use strict';

var consecutivoLibro = 0;
var listaLibro = [];
var listBookJson = [];

module.controller('LibroCtrl', ['$scope', '$filter', '$http', function ($scope, $filter, $http) {
        $scope.listaB = listBookJson;
        $scope.author = listAutorJson;
        $http.get('./webresources/BookService', {}).success(function (data, status, headers, config) {
            // $scope.lista = data;
                    listaLibro = data;
                    $scope.author = listAutorJson;
                    //listar
                    listBookJson = [];
                    console.log("face11");
                    console.log(data);
                    for (var i = 0; i < listaLibro.length; i++) {
                        listBookJson.push({
                            "author": listaLibro[i].author,
                            "bookDescription": listaLibro[i].bookDescription,
                            "edition": listaLibro[i].edition,
                            "id": listaLibro[i].id,
                            "quantity": listaLibro[i].quantity,
                            "title": listaLibro[i].title
                        });
                    }
                    $scope.listaB = listBookJson;
                    
                    $scope.datosFormularioCliente = {};
                    $scope.panelEditar = false;
                    $scope.listar = function () {
                        $scope.listaB = listBookJson;
                    };
                    $scope.author = listAutorJson;
                    $scope.listar();
        }).error(function (data, status, headers, config) {
            alert('Error al consultar la informaci\xf3n, por favor intente m\xe1s tarde');
        });
        
         $scope.listar = function () {
            $scope.listaB = listBookJson;
            consecutivoLibro = listaLibro.length;
            $scope.author = listAutorJson;
        };

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
         
            if ($scope.datosFormulario.id) {
                console.log("editar")
               
                var libro = [$scope.datosFormulario.id,
                    $scope.datosFormulario.titulo,
                    $scope.datosFormulario.descripcion,
                    $scope.datosFormulario.cantidad,
                    $scope.datosFormulario.edicion,
                    $scope.datosFormulario.autor];
                $http.post('./webresources/BookService/', libro).then(
                        function successCallback(response) {
                            console.log("Successfully POST-ed data");
                        },
                        function errorCallback(response) {
                            console.log("POST-ing of data failed");
                        }
                );
            }
            if (!$scope.datosFormulario.id) {
                $scope.datosFormulario.id = consecutivoLibro++;
                var libro = [$scope.datosFormulario.id,
                    $scope.datosFormulario.titulo,
                    $scope.datosFormulario.descripcion,
                    $scope.datosFormulario.cantidad,
                    $scope.datosFormulario.edicion,
                    $scope.datosFormulario.autor.id];
                $http.post('./webresources/BookService/', libro).then(
                        function successCallback(response) {
                            console.log("Successfully POST-ed data");
                        },
                        function errorCallback(response) {
                            console.log("POST-ing of data failed");
                        }
                );
            }
            alert("Sus datos han sido guardados con éxito");
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
        $scope.eliminar = function (data) {
            for (var i = 0; i < $scope.lista.length; i++) {
                if ($scope.lista[i].id == data.id) {
                    $http.delete('./webresources/ServicioLibro/' + data.id, {}).then(
                            function successCallback(response) {
                                console.log("Successfully POST-ed data");
                            },
                            function errorCallback(response) {
                                console.log("POST-ing of data failed");
                            }
                    );
                    $scope.lista.splice(i, 1);
                }
            }
        };

    }]);
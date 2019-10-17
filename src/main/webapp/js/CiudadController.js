'use strict';

var listaCiudad1 = [{"id": 1, "nombre": "Tunja"}, {"id": 2, "nombre": "Bogota"}];
var listaCiudad = [];
var listJson = [];
var consecutivoCiudad = 0;


module.controller('CiudadCtrl', ['$scope', '$filter', '$http', function ($scope, $filter, $http) {
        //listar
        /*$scope.lista;
         $scope.datosFormularioCiudad = {};
         $scope.panelEditar = false;
         $scope.listar=function(){
         $scope.lista = listaCiudad;*/
        $scope.ciudades = listJson;
        $http.get('./webresources/CityService', {})
                .success(function (data, status, headers, config) {
                    // $scope.lista = data;
                    //listar
                    listaCiudad = data;
                    var j;
                    listJson = [];

                    for (var i = 0; i < listaCiudad.length; i++) {
                        listJson.push({
                            "id": listaCiudad[i].id,
                            "name": listaCiudad[i].name
                        });
                    }
                    $scope.lista = listJson;
                    $scope.ciudades = listJson;
                    $scope.datosFormularioCiudad = {};
                    $scope.panelEditar = false;
                    $scope.listar();
                }).error(function (data, status, headers, config) {
            alert('Error al consultar la informaci\xf3n, por favor intente m\xe1s tarde');
        });

        $scope.listar = function () {
            $scope.lista = listJson;
            listaCiudad = listJson;
            consecutivoCiudad = listJson.length;
            $scope.ciudades = listJson;
        }
        //guardar
        $scope.nuevo = function () {
            $scope.panelEditar = true;
            $scope.datosFormularioCiudad = {};
        };
        $scope.guardar = function () {
            $scope.errores = {};
            var error = false;

            if (error)
                return;
            if (!$scope.datosFormularioCiudad.id) {
                $scope.datosFormularioCiudad.id = consecutivoCiudad++;
            }
            // $scope.lista.push($scope.datosFormularioCiudad);
            alert("Sus datos han sido guardados con éxito");
            var city = [$scope.datosFormularioCiudad.id,
                $scope.datosFormularioCiudad.nombre];
            $http.post('./webresources/CityService', city).then(
                    function successCallback(response) {
                        +
                                console.log("Successfully POST-ed data");
                    },
                    function errorCallback(response) {
                        console.log("POST-ing of data failed");
                    }
            );
            $scope.listar();
            $scope.cancelar();
        };
        $scope.cancelar = function () {
            $scope.panelEditar = false;
            $scope.datosFormularioCiudad = {};
        };

        //editar
        $scope.editar = function (data) {
            $scope.panelEditar = true;
            $scope.datosFormularioCiudad = data;
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

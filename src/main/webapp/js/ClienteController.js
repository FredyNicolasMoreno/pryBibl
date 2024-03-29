
'use strict';


var listaCliente = []; /*[
 {"id":1, "nombre":"Deisy", "direccion":"car 8a # 45 - 121", "telefono":"3114456556", "ciudad":{"id":1, "nombre":"Tunja"}},
 {"id":2, "nombre":"Pedro", "direccion":"car 46 # 163b - 41", "telefono":"3207594755", "ciudad":{"id":2, "nombre":"Bogota"}}
 ];*/
var consecutivoCliente = 0;
var listClientJson = [];
var listaCliente = [];

module.controller('ClienteCtrl', ['$scope', '$filter', '$http', function ($scope, $filter, $http) {
        //listar
        $scope.listaC = listClientJson;
        $scope.listaCiudad = $scope.ciudades;
        function actualizarCliente(){};
        actualizarCliente = function () {
            $http.get('./webresources/ClientService', {})

                    .success(function (data, status, headers, config) {
                        // $scope.lista = data;
                        listaCliente = data;
                        //listar
                        listClientJson = [];
                        for (var i = 0; i < listaCliente.length; i++) {
                            listClientJson.push({
                                "adress": listaCliente[i].adress,
                                "city": listaCliente[i].city,
                                "id": listaCliente[i].id,
                                "name": listaCliente[i].name,
                                "phonenumber": listaCliente[i].phonenumber
                            });
                        }
                        $scope.listaC = listClientJson;
                        $scope.listCity = listJson;

                        $scope.datosFormularioCliente = {};
                        $scope.panelEditar = false;
                        $scope.listar();
                    }).error(function (data, status, headers, config) {
                alert('Error al consultar la informaci\xf3n, por favor intente m\xe1s tarde');
            });
        };
        actualizarCliente();
        $scope.listar = function () {
            $scope.listaC = listClientJson;
            consecutivoCliente = listClientJson.length;
        };
        //guardar
        $scope.nuevoCliente = function () {
            $scope.panelEditar = true;
            $scope.datosFormularioCliente = {};
        };

        $scope.guardarCliente = function () {
            $scope.errores = {};
            var error = false;

            if (error)
                return;
            $scope.datosFormularioCliente.id = consecutivoCliente++;
            console.log(consecutivoCliente);
            alert("Sus datos han sido guardados con éxito");
            var cliente = {"id": $scope.datosFormularioCliente.id,
                "name": $scope.datosFormularioCliente.name,
                "adress": $scope.datosFormularioCliente.adress,
                "phonenumber": $scope.datosFormularioCliente.phonenumber,
                "city": $scope.datosFormularioCliente.city};
            $http.post('./webresources/ClientService', cliente).then(
                    function successCallback(response) {
                        console.log("Successfully POST-ed data");
                        actualizarCliente();
                    },
                    function errorCallback(response) {
                        console.log("POST-ing of data failed");
                    }
            );
            $scope.cancelar();
        };

        $scope.cancelar = function () {
            $scope.panelEditar = false;
            $scope.datosFormularioCliente = {};
        };

        //editar
        $scope.editar = function (data) {
            $scope.panelEditar = true;
            $scope.datosFormularioCliente = data;
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

'use strict';

var listaPrestamo = [
    {"id": 3, "Fecha": "", "dias": 12, "cantidad": "3", "cliente": {"id": 1, "nombre": "Carlos"}, "libro": {"id": 3, "titulo": "Redes"}}
];
var consecutivoPrestamo = 1;

module.controller('PrestamoCtrl', ['$scope', '$filter', '$http', function ($scope, $filter, $http) {
        //listar
        $scope.lista = listaPrestamo;
        $scope.listaCliente = listaCliente;
        $scope.listaLibro = listaLibro;
        $scope.datosFormulario = {};
        $scope.panelEditar = false;
        $scope.listar = function () {
            $scope.lista = listaPrestamo;
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
            if (!$scope.datosFormulario.id) {
                $scope.datosFormulario.id = consecutivoPrestamo++;
            }
            $scope.lista.push($scope.datosFormulario);
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
                    $scope.lista.splice(i, 1);
                }
            }

        };
    }]);



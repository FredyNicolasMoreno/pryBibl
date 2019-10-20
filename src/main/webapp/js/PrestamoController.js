'use strict';

/*var listaPrestamo = [
 {"id": 3, "Fecha": "", "dias": 12, "cantidad": "3", "cliente": {"id": 1, "nombre": "Carlos"}, "libro": {"id": 3, "titulo": "Redes"}}
 ];
 var consecutivoPrestamo = 1;*/
var listaPrestamo = [];
var consecutivoPrestamo = 0;
var listLoanJson = [];
var estados = ["PRESTAMO", "DEVUELTO", "CON_MORA"];

module.controller('PrestamoCtrl', ['$scope', '$filter', '$http', function ($scope, $filter, $http) {
        //listar
        $scope.listaP = listLoanJson;
        $scope.listaCliente = listClientJson;
        $scope.listaLibro = listBookJson;
        $scope.listaEstados = estados;
        $http.get('./webresources/LoanService', {})
                .success(function (data, status, headers, config) {
                    listaPrestamo = data;
                    listLoanJson = [];
                    console.log("data--------------------------");
                    console.log(data);
                    for (var i = 0; i < listaPrestamo.length; i++) {
                        listLoanJson.push({
                            "id": listaPrestamo[i].id,
                            "date": listaPrestamo[i].date,
                            "days": listaPrestamo[i].days,
                            "fine": listaPrestamo[i].fine,
                            "loanstate": listaPrestamo[i].loanstate,
                            "observation": listaPrestamo[i].observation,
                            "book": listaPrestamo[i].book,
                            "client": listaPrestamo[i].client
                        });
                    }
                    $scope.listaP = listLoanJson;
                    console.log("face23");
                    $scope.datosFormularioPrestamo = {};
                    $scope.panelEditar = false;
                    $scope.listar();
                }).error(function (data, status, headers, config) {
            alert('Error al consultar la informaci\xf3n, por favor intente m\xe1s tarde');
        });


        $scope.listar = function () {
            $scope.listaP = listLoanJson;
            console.log(listaP);
            consecutivoPrestamo = listLoanJson.length;
        };
        //guardar
        $scope.nuevoPrestamo = function () {
            $scope.panelEditar = true;
            $scope.datosFormularioPrestamo = {};
        };

        $scope.guardarPrestamo = function () {
            $scope.errores = {};
            var error = false;

            if (error)
                return;
            if (!$scope.datosFormularioPrestamo.id) {
                $scope.datosFormularioPrestamo.id = consecutivoPrestamo++;
                console.log(consecutivoPrestamo);
            }
            alert("Sus datos han sido guardados con éxito");
            var loan = {"id": $scope.datosFormularioPrestamo.id,
                "date": $scope.datosFormularioPrestamo.date,
                "observation": $scope.datosFormularioPrestamo.observation,
                "loanstate": $scope.datosFormularioPrestamo.loanstate,
                "days": $scope.datosFormularioPrestamo.days,
                "client": $scope.datosFormularioPrestamo.client,
                "book": $scope.datosFormularioPrestamo.book};
            $http.post('./webresources/LoanService', loan).then(
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
            $scope.datosFormularioPrestamo = {};
        };

        //editar
        $scope.editar = function (data) {
            $scope.panelEditar = true;
            $scope.datosFormularioPrestamo = data;
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



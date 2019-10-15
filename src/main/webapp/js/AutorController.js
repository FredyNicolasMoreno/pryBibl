'use strict';

var listaAutor = [];
var consecutivoAutor = 2;

module.controller('AutorCtrl', ['$scope', '$filter', '$http', function ($scope, $filter, $http) {
        //listar
        $http.get('./webresources/ServicioAutor', {})
                .success(function (data, status, headers, config) {
                    //$scope.lista = data;
                    listaAutor = data;
                    $scope.lista = listaAutor;
                    $scope.datosFormulario = {};
                    $scope.panelEditar = false;
                    $scope.listar = function () {
                        $scope.lista = listaAutor;
                    };
                    $scope.listar();
                }).error(function (data, status, headers, config) {
            alert('Error al consultar la informaci\xf3n, por favor intente m\xe1s tarde');
        });

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
                $scope.datosFormulario.id = consecutivoAutor++;

            }

            $scope.lista.push($scope.datosFormulario);
            $http.post('./webresources/ServiciosAutor/', $scope.datosFormulario.nombre).then(
                    function successCallback(response) {
                    },
                    function errorCallback(response) {
                        console.log("POST-ing of data failed");
                    }
            );
            alert("Sus datos han sido guardados con éxito");
            $scope.cancelar();
        };
        $scope.cancelar = function () {
            $scope.panelEditar = false;
            $scope.datosFormulario = {};
        };

        //editar 
        $scope.editar = function (editado) {
            $scope.panelEditar = true;
            $scope.datosFormulario = editado;
            console.log(editado);
            var data = $.param({
                id: $scope.firstName,
                nombre: $scope.lastName
            });
            $http.put('./webresources/ServiciosAutor/', JSON.stringify(editado)).then(function (response) {
                if (response.data)
                    $scope.msg = "Put Data Method Executed Successfully!";
            }, function (response) {
                $scope.msg = "Service not Exists";
                $scope.statusval = response.status;
                $scope.statustext = response.statusText;
                $scope.headers = response.headers();
            });
        };
        //eliminar
        $scope.eliminar = function (data) {
            for (var i = 0; i < $scope.lista.length; i++) {
                if ($scope.lista[i].id == data.id) {
                    $scope.lista.splice(i, 1);
                }
            }
//            $http({
//                method: 'DELETE',
//                url: './webresources/ServiciosAutor/' + data.id
//            }).then(function successCallback(response) {
//                alert("User has deleted Successfully");
//                var index = $scope.data.indexOf(user);
//                $scope.users.splice(index, 1);
//            }, function errorCallback(response) {
//                alert("Error. while deleting user Try Again!");
//            });
        };
    }]);


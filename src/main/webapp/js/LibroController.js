'use strict';

/**
 * ¡¡¡IMPORTANTE!!!
 * DE AHORA EN ADELANTE COMENTAREAR LO QUE HAGAMOS PARA QUE LOS DEMAS ENTENDAMOS
 * PUEDE QUE SEA UN TRABAJO FASTIDIOSO PERO PARA EVITAR PROBLEMAS MEJOR COMENTARIAR
 * ANTES DE COMPARTIRLO A LOS DEMAS
 * 
 * SUERTE Y QUE ENTIENDAN
 * @author Marco Antonio Gonzalez Martinez
 */
var consecutivoLibro = 3;
var listaLibro = [];

module.controller('LibroCtrl', ['$scope', '$filter', '$http', function ($scope, $filter, $http) {

        /**
         * este se ejecuta cada que se recarga la paguina para asi cargar los datos
         */
        $http.get('./webresources/ServicioLibro', {}).success(function (data, status, headers, config) {
            listaLibro = data;
            console.log("Lista cargada de libro / Libro controller: ");
            console.log(data);
            //listar
            $scope.lista = listaLibro;
            $scope.datosFormulario = {};
            $scope.panelEditar = false;
            $scope.listar = function () {
                $scope.lista = listaLibro;
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

        /**
         * en este metodo se hacen dos acciones el de crear y el de editar
         * como ambus usan la misma accion del boton en la ventana toca separarlos
         * @returns {undefined}
         */
        $scope.guardar = function () {

            $scope.errores = {};
            var error = false;

            if (error)
                return;
            /**
             * Aqui comienza el de editar y es cuando el id se repite en el formulario
             * de tal manera significa que el objeto seleccionado si es para editar
             */
            if ($scope.datosFormulario.id) {
                console.log("editar")
                $scope.lista.push($scope.datosFormulario);
                /**
                 * Simple vector con los datos de libro
                 * ver en servicioLibro.java para entenderlo mejor
                 * @type Array
                 */
                var libro = [$scope.datosFormulario.id,
                    $scope.datosFormulario.titulo,
                    $scope.datosFormulario.descripcion,
                    $scope.datosFormulario.cantidad,
                    $scope.datosFormulario.edicion,
                    $scope.datosFormulario.autor];
                $http.post('./webresources/ServicioLibro/', libro).then(
                        function successCallback(response) {
                            console.log("Successfully POST-ed data");
                        },
                        function errorCallback(response) {
                            console.log("POST-ing of data failed");
                        }
                );
            }
            /**
             * Aqui comienza el de añadir uno nuevo este a diferencia al de editar
             * no tiene que haber un id en el formulario si no lo hay se crea el
             * nuebo objeto.
             */
            if (!$scope.datosFormulario.id) {
                console.log("Nuevo")
                $scope.datosFormulario.id = consecutivoLibro++;
                $scope.lista.push($scope.datosFormulario);
                var libro = [$scope.datosFormulario.titulo,
                    $scope.datosFormulario.descripcion,
                    $scope.datosFormulario.cantidad,
                    $scope.datosFormulario.edicion,
                    $scope.datosFormulario.autor];
                $http.post('./webresources/ServicioLibro/', libro).then(
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

        /**
         * Metodo de eliminar objeto en este metodo se le pasa el id como parametro
         * ´¿por que? se preguntaran pues la respuesta es por que asi me salio jajaja
         * bueno lo que hace es principalmente recorrer la lista y si el id coincide
         * llama al servicio para que elimine el objeto
         * @param {type} data
         * @returns {undefined}
         */
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

        /**
         * Chicos suerte pues cualquier duda preguntarme c:
         * IMPORTANTE: NO MOSTRARLE A LA INGE CON ESTA DOCUMENTACION
         * ES PARA QUE ENTRE NOSOTROS TRABAJEMOS
         */
    }]);
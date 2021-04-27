# Test

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 10.0.7.

## Comando para correr el proyecto

Run `ng serve -o` fressdd

## Comandos utilizados en la consola

ng g c components/aside --skipTests
ng g c components/jobs --skipTests
ng g c components/people --skipTests
ng g c components/about --skipTests
ng g s services/api --skipTests
ng g p pipes/filter--skipTests

## HttpClient / Servicios
Creamos una variable privada solo de lectura para almacenar el endpoint de las apis, y mandamos las funciones de tipo Observable para poder ser utilizadas por los componentes


## Filtrar solo 10 elemento de la api de Jobs

Utilizamos el .filter en la lista de Jobs para pode acceder solamente a los elementos solicitados

## Mostrar detalle del usuario

Para este caso creamos una funcion que nos mande el id del usuario como parametro luego solo recorremos la lista de usuarios y obteniendo el id que coincida con el parametro que nos trajo la funcion de esta manera solo se lo pasamos al doble enlace de datos que tienen los imputs del modal

## Filtrar nombre del usuario
Utilizamos un pipe esto se lo pasamos al ngFor que recorre la lista de usuarios de esta manera podemos acceder a su informacion para poder ser filtrada. En el pipe solo obtenemos el valor que se paso en el input de busqueda que tambien tiene doble enlace de datos, creamos un array vacio recorremos el valor que nos pasa el imput se lo empujamos al array vacion y los retornamos.


# Test

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 10.0.7.

## Comando para correr el proyecto

Run `ng serve -o` 

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

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

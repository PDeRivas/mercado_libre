# Aplicación utilizando API de mercadolibre

Materia: Programación 3

Profesor: Invaldi, Agustin

Alumno: de Rivas, Pablo

## Descripción del proyecto

Esta aplicación fue desarrollada utilizando react y la API de mercadolibre, específicamente la búsqueda y los datos de los productos.

El proyecto fue realizado en base a componentes que se encuentran dentro de la carpeta src. Dentro de esta encontraremos a los componentes de las rutas (pages) y a los componentes que las rellenaban (components)

Existen 5 rutas diferentes dentro de la aplicación:
* Home (/)
* Busqueda (/search): Accederemos realizando una búsqueda en la navbar y esta nos mostrara un listado con productos relacionados.
* Productos (/product): Entramos seleccionando un producto en Home o en Search. Aqui se nos mostraran imagenes del producto, el título y un formulario para agregar unidades al carrito.
* Carrito (/cart): Al agregar un producto al carrito o al seleccionar el ícono de la navbar se nos redigirirá aquí. Nos muestra un listado con los productos que tenemos en el carrito y nos da la opción de agregar o quitar unidades o de remover el producto del carrito (Existe un error a la hora de mostrar el total de toda la compra si agregamos o quitamos productos)
* Fin de la compra (/purchaseEnd): Nos muestra un mensaje de que la compra ha sido realizada.

## Correr el proyecto

Para correr el proyecto necesitamos tener actualizados Node y npm en nuestro equipo.

Pasos para lanzar la aplicación:

1. Una vez clonado el repositorio entraremos a la carpeta mercado_libre.
2. Abrimos la consola.
3. Utilizamos el comando `npm install` para instalar las dependencias del proyecto.
4. Usamos `npm start` para empezar a utilizar la aplicación.
5. Entramos a `localhost:3000` o a `http://192.168.1.2:3000/` para explorar el proyecto.

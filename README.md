# Primera Entrega del Proyecto Final

La intencion del proyecto es mejorar el actual sitio web [ShopComputers](http://www.shopcomputers.com.ar/).
La empresa es real, existiendo en la zona oeste del Gran Buenos Aires. Trata de venta de insumos informaticos.

## Librerias utilizadas.

En este proyecto, por decision personal, utilizo librerias Bootstrap, libreria de SweetAlert, y presentando estilos en Css.

### `Ideas`

Como es un proyecto a mejorar tomando ciertas ideas de la pagina actual, se aprovecha la potencia de React JS para mejorar y optimizar el sitio. Logrando visualizar productos, navegar entre secciones y si lo requiere, concretar una compra online utilizando firebase, o generando un pago en la plataforma MERCADOPAGO.
Se arma una base de datos de productos con valores como ID, EAN, PRECIO, CATEGORIA, NOMBRE. Para poder luego, interactuar con ellos para posibles busquedas, etc.

### `Vista del usuario`

La idea del proyecto, es presentar al usuario visitante, una bienvenida con ofertas semanales, el visitante puede visualizar los productos sea por categoria o clickeando en "VER DETALLES" para mas informacion. Con opciones de adicionar productos, para luego realizar el agregado del producto al carrito, la cual es visible en el momento que contenga un producto.
Queda fija la seccion Footer, la misma conteniendo datos importantes para que el usuario/visitante pueda acceder a comunicarse con la empresa, vincular directamente con redes sociales.
Tambien se visualiza CONTACTO la cual obtiene el mapa de las sucursales.


### `Muestra del proyecto`

https://www.loom.com/share/330f52d506a34bcda245131d1c630d3b

Aqui comparto la muestra del proyecto. En la misma se puede observar que se realiza la navegacion en distintas solapas, actualizando el estado de la misma, o por categorias en este caso, teniendo un producto o mas, dependendiendo de la cantidad que exista en cada categoria.
Luego al seleccionar un item, se puede elegir la cantidad (No pudiendo realizar el agregado al carrito si la cantidad es 0). Y al realizar "la compra" modifica el estado apareciendo la leyendo "FINALIZAR COMPRA" y pasando al carrito. Donde a futuro se mostrará un listado de productos seleccionados.
Al finalizar la compra, se descuenta del stock la cantidad seleccionada al momento de generar la orden de compra. Al momento de generarse la orden de compra, se puede optar por realizar el pago en plataforma MP.
En caso de no existir stock, aparece debajo del item dicha leyenda, y no pudiendo ingresar al detalle de la misma.

En la seccion de carro de compras, se muestra un listado con los productos seleccionados, su cantidad, precio y precio total. Pudiendo eliminar por item individual o el carrito completo, alertando en cada accion con modal libreria Sweet.

Se adiciona una seccion de autenticacion de usuario, la cual se solicita email y clave. En caso de ser satisfactorio, en NAVBAR se habilita una seccion llamada ADMIN, para que el propietario habilitado pueda ingresar y realizar modificaciones de stock de productos, pudiendo levantarla a Firebase desde codigo, sin necesidad de ingresar a la plataforma antes mencionada.
En caso de LogOff, se remueve dicha seccion del navbar.
Se toman valores de la documentacion de Firebase para lograr esta operacion.
Se utiliza Bootstrap para los efectos de modal y Login.

### Para ingresar al mismo.
### MAIL : elprofesor@coderhouse.com
### CLAVE : 123456789

### A tener en cuenta..
Se realizaron pruebas con distintas ventanas, generando dos compras simultaneas del mismo producto, la cual al generarse una orden satisfactoria y descontando del stock, en la otra compra al momento de generar la orden, se le avisa que no hay stock del producto, a pesar de que ya lo haya seleccionado en el carrito. Evitando que se genere una compra de productos con faltantes en stock, mas alla de que minutos atras haya figurado stock disponible.
Esto se simula en caso de que dos o mas usuarios compren el mismo producto y agoten stock.

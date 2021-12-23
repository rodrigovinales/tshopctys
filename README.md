# Primera Entrega del Proyecto Final

La intencion del proyecto es mejorar el actual sitio web [ShopComputers](http://www.shopcomputers.com.ar/).
La empresa es real, existiendo en la zona oeste del Gran Buenos Aires. Trata de venta de insumos informaticos.

## Librerias utilizadas.

En este proyecto, por decision personal, utilizo librerias Bootstrap, Swal y dando algunos estilos en Css.

### `Ideas`

Como es un proyecto a mejorar tomando ciertas ideas de la pagina actual, se aprovecha la potencia de React JS para mejorar y optimizar el sitio. Logrando visualizar productos, navegar entre secciones y si lo requiere, concretar una compra online.
Se arma un array con productos con valores como ID, EAN, PRECIO, CATEGORIA, NOMBRE. Para poder luego, interactuar con ellos para posibles busquedas, etc.
Se deja sin modificar, la seccion Footer, la misma conteniendo datos importantes para que el usuario/visitante pueda acceder a comunicarse con la empresa.

### `Vista del usuario`

La idea del proyecto, es presentar al usuario visitante, una bienvenida con ofertas semanales, el visitante puede visualizar los productos sea por categoria o clickeando en "VER DETALLES" para mas informacion. Con opciones de compra.
Tambien se visualiza CONTACTO la cual obtiene el mapa de las sucursales.


### `Sobre el proyecto`

En el proyecto se implementa lo solicitado en clases, ademas de incluir un footer, logos e informacion reales.
Si bien visualmente todavia no esta perfectamente logrado, se puede observar que cumple su funcion al solicitar por ejemplo, un detalle de un item en particular, mostrar todos los elementos existentes. Navegacion entre links.

### `Muestra del proyecto e Implementacion con Firebase`

https://www.loom.com/share/36c19b0d73674eb6a4801747180c8540

Aqui comparto la muestra del proyecto. En la misma se puede observar que se realiza la navegacion en distintas solapas, actualizando el estado de la misma, o por categorias en este caso, teniendo un producto o mas, dependendiendo de la cantidad que exista en cada categoria. Luego al seleccionar un item, se puede elegir la cantidad (No pudiendo realizar el agregado al carrito si la cantidad es 0).
En caso de no existir stock del producto, aparece debajo del item dicha leyenda, y no pudiendo ingresar al detalle de la misma.
Al realizar "la compra" modifica el estado apareciendo la leyendo "FINALIZAR COMPRA" y pasando al carrito. Donde a futuro se mostrará un listado de productos seleccionados. Al finalizar la compra, se descuenta del stock la cantidad seleccionada al momento de generar la orden de compra.
Al momento de generarse la orden de compra, se puede optar por realizar el pago en plataforma MP. 

En la seccion de carro de compras, se muestra un listado con los productos seleccionados, su cantidad, precio y precio total. Pudiendo eliminar por item individual o el carrito completo, alertando en cada accion con modal libreria Sweet.


Se utiliza JSON LocalStorage para poder guardar los items..

En el proyecto se toma los valores que se encuentran en Firestore.
Logrando una seccion para acceso al ADMIN, lo cual al ingresar cuenta y clave se habilita la seccion "privada".
En la misma pueden realizar altas y modificaciones de productos existentes, utilizando un form que recorre el array y al realizar el submit, setea los valores de ese item en los campos a modificar.
En caso de agregar producto nuevo, esos campos aparecen vacios listos para rellenar.
Avisando con un alert de Sweet si el producto fue modificado o Agregado.

Se adiciona una seccion de autenticacion de usuario, la cual se solicita email y clave. En caso de ser satisfactorio, en NAVBAR se habilita una seccion llamada ADMIN, para que el propietario habilitado pueda ingresar y realizar modificaciones de stock de productos, pudiendo levantarla a Firebase desde codigo, sin necesidad de ingresar a la plataforma antes mencionada. En caso de LogOff, se remueve dicha seccion del navbar. Se toman valores de la documentacion de Firebase para lograr esta operacion. Se utiliza Bootstrap para los efectos de modal y Login.

### Para ingresar a la seccion ADMIN.
MAIL : elprofesor@coderhouse.com
CLAVE : 123456789

Se utiliza un input con productos existentes en "productos", para realizar la modificacion, al seleccionar uno de ellos y presionar submit, se vuelca los valores a los otros inputs listos para realizar la modificacion.
En caso de agregar producto nuevo, se selecciona del mismo input "Agregar producto nuevo" y quedando los campos vacios para completarlos.


A tener en cuenta..
Se realizaron pruebas con distintas ventanas, generando dos compras simultaneas del mismo producto, la cual al generarse una orden satisfactoria y descontando del stock quedando la misma en 0, en la otra compra al momento de generar la orden, se le avisa que no hay stock del producto, a pesar de que ya lo haya seleccionado en el carrito. Evitando que se genere una compra de productos con faltantes en stock, mas alla de que minutos atras haya figurado stock disponible. Esto se simula en caso de que dos o mas usuarios compren el mismo producto y agoten stock.
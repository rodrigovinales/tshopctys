# Primera Entrega del Proyecto Final

La intencion del proyecto es mejorar el actual sitio web [ShopComputers](http://www.shopcomputers.com.ar/).
La empresa es real, existiendo en la zona oeste del Gran Buenos Aires. Trata de venta de insumos informaticos.

## Librerias utilizadas.

En este proyecto, por decision personal, utilizo librerias Bootstrap, y dando algunos estilos en Css.

### `Ideas`

Como es un proyecto a mejorar tomando ciertas ideas de la pagina actual, se aprovecha la potencia de React JS para mejorar y optimizar el sitio. Logrando visualizar productos, navegar entre secciones y si lo requiere, concretar una compra online.
Se arma un array con productos con valores como ID, EAN, PRECIO, CATEGORIA, NOMBRE. Para poder luego, interactuar con ellos para posibles busquedas, etc.
Se deja sin modificar, la seccion Footer, la misma conteniendo datos importantes para que el usuario/visitante pueda acceder a comunicarse con la empresa.

### `Vista del usuario`

La idea del proyecto, es presentar al usuario visitante, una bienvenida con ofertas semanales, el visitante puede visualizar los productos sea por categoria o clickeando en "VER DETALLES" para mas informacion. Con opciones de compra.
Tambien se visualiza CONTACTO la cual obtiene el mapa de las sucursales.

### `Decisiones`

Tome la decision de utilizar Bootstrap por las opciones que ofrece, ademas de utilizarlo bastante en JS.

### `Sobre el proyecto`

En el proyecto se implementa lo solicitado en clases, ademas de incluir un footer, logos e informacion reales.
Si bien visualmente todavia no esta perfectamente logrado, se puede observar que cumple su funcion al solicitar por ejemplo, un detalle de un item en particular, mostrar todos los elementos existentes. Navegacion entre links.

### `Muestra del proyecto`

https://www.loom.com/share/330f52d506a34bcda245131d1c630d3b

Aqui comparto la muestra del proyecto. En la misma se puede observar que se realiza la navegacion en distintas solapas, actualizando el estado de la misma, o por categorias en este caso, teniendo un producto o mas, dependendiendo de la cantidad que exista en cada categoria.
Luego al seleccionar un item, se puede elegir la cantidad (No pudiendo realizar el agregado al carrito si la cantidad es 0). Y al realizar "la compra" modifica el estado apareciendo la leyendo "FINALIZAR COMPRA" y pasando al carrito. Donde a futuro se mostrará un listado de productos seleccionados.


### `Modificaciones Clase 10 CartContext`

Se aplica lo que es custom Provider, utilizandolo en App.js y utilizando CartContext.js
Se aplica libreria adicionales para complementar la vista del sitio, usando SweetAlert.
Se logra la logica de agregado por items, eliminado de cada item en el listado de carrito, eliminado completo del listado si asi lo requiera, todo utilizando botones para tal fin. Logrando renderizar el carrito al valor actual.
Se utiliza la logica de en caso de producto existente, no se agrega a carrito, dejando el boton directo a FINALIZAR COMPRA, en caso de no estar en carrito, se habilita el poder seleccionar la cantidad e ingresarlo a carrito.
Dejo a mi criterio, la visualizacion en carrito en forma de tabla, mostrando nombre, precio e imagen.
Se utiliza JSON LocalStorage para poder guardar los items..

### ` Firebase `

En el proyecto se puede observar varias lineas de codigo comentadas, es sobre el Form, es para no generar peticiones innecesarias y desgastar el limite de consultas que provee Firebase Google.
Solo se dejan cargados 5 productos, con diferentes categorias, pudiendo verlas desde el listado inicial de productos, tomando correctamente el ID generado por Firebase y la busqueda por categorias.


### ` PROYECTO FINAL `

Se aplica operacion en archivo Item.js la cual al existir stock con valor 0, aparezca un aviso indicando SIN STOCK e impidiendo el ingreso al detalle del producto.
Se actualizan los valores de stock en cada compra en Firebase.
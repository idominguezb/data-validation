
# Distribucion
### Se realizaron pruebas a la siguientes funcionalidades:
- Crear integraciones
- Crear miembro
- Crear pagina
- Crear post
- Crear tag
### Para la distribucion de estrategias:
- Se implementaron 42 casos con la estrategia de datos aleatorios
- Se implementaron 38 casos con la estrategia de datos a priori
- Se implementaron 40 casos con la estrategia de datos semialeatorios

# Estrategia
Con la generacion de datos se buscaron probar escenarios positivos como crear integracion, crear miembro, crear pagina, crear post o crear tag, mientras que en los negativos se crearon pruebas que buscaban errores como por ejemplo cadenas que sobrepasen el limite de un input o omitir un input que es requerido para ver como responde la aplacacion, finalmente para los escenarios mix de positivo y negativo fueron escenarios que miraban lo que sucedia con la interfaz grafica cuando se escribian largas cadena
## Datos aleatorios
Para la generacion de datos aleatorios se utilizo la libreria faker en cada escenario. La mayoria de escenarios que fueron creados se basaban principalmente en probar la longitud y el limite de caracteres de ciertos inputs debido a que faker facilita la creacion de string con n caracteres.

### Datos semialetorios
Para la generación pseudo aleatoria de datos, se utilizó el generador de datos Mockaroo creando un schema y haciendo que sean obtenidos desde una interfaz de tipo API. Para cargar los datos en los escenarios se utiliza el hook before y el comando de cypress.response para enviar la solicitud a la api y se obtiene un array con los datos. 

### Datos a priori 
Para la generacion de datos a priori, se utilizo el generador de datos Mockaroo con ciertos valores, luego se descargo un archivo json que contenia los datos que se generaron para que se puedan usar en los escenarios. 
# Ejecucion
Las pruebas son ejecutadas en cypress, y en la version 4.47 de ghost en el puerto 2368, como usuario predeterminado se usa un usuario con email: prueba@example.com y password:prueba@example.com123456789.
## cypress
1. Ejecute el comando `npm install` en la raiz del repositorio
2. Para ejecutar las pruebas:
  * Ejecutar solo Members `cypress run --spec cypress/integration/members/*/**.js`
  * Ejecutar solo Integrations `cypress run --spec cypress/integration/integrations/*/*.js`
  * Ejecutar Solo Tags `cypress run --spec cypress/integration/tags/*/**.js`
  * Ejecutar solo Pages `cypress run --spec cypress/integration/pages/*/**.js`
  * Ejecutar solo Posts `cypress run --spec cypress/integration/posts/*/**.js`
  

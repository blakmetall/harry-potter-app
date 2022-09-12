# Aplicación de ReactJs que muestra personajes del mundo de Harry Potter

## Ejecutar las siguientes instrucciones para lanzar el proyecto localmente
* "npm install" para agregar las dependencias
* "npm start" para iniciar el proyecto de react
* "npm run server" para iniciar el servidor de json-server
* abrir url de desarrollo en http://localhost:3000/
* url de proyecto en netlify: https://main--elaborate-faloodeh-7793bc.netlify.app/ 
    - la funcionalidad de agregar personaje no funciona a menos que se ejecute el servidor de json-server local
* "npm test" para ejecutar las pruebas unitarias

## Que es lo que más me gustó del desarrollo
* fue un proyecto entretenido debido a que use muchas cosas que me gustan de reactjs
* el proceso de desarrollo/maquetación me gusto gracias al buen diseño de la aplicación
* se presentaron un par de retos que me tuvieron frente a la pantalla batallando un rato pero fue divertido
* me gustó que fuese una aplicación simple y concisa 

## Que hubiese hecho de haber tenido más tiempo de desarrollo
* agregar la opción para editar caracteres que se agregan con json-server
* subir foto de perfil de los caracteres a algún servidor
* agregar más opciones en el formulario de agregar nuevo caracter
* hubiese refactorizado código para mejorar su lectura
* agregar mejores componentes para ser mejor reutilizables
* revisar y corregir detalles que se me hayan escapado

## Pain point / bugs 
* tuve problemas inicialmente con las librerías de npm, eso me tomó su buen tiempo al iniciar el proyecto
    - el problema se dio por un  conflicto de librerías que se tomaban desde una ruta superior,
      lo solucioné agregando SKIP_PREFLIGHT_CHECK=true al comando de npm start
* los caracteres tomados de github no tenian id's y tuve que implementar mi propio sistema de id's 
  para controlar los registros por id's al agregar/eliminar favoritos, y al agregar/eliminar nuevos personajes
    - agregué id's personalizados y aleatorios a los elementos tomados desde la api, así mismo agregué nuevos
      id's a los nuevos personajes agregados
* tuve dificultades con las librerías para las pruebas unitarias, esto debido a que yo llegué a usar jest junto con enzyme y otras
  librerías que ya están 'deprecated' para realizar pruebas y en react 18 ya no están disponibles lo que tuve que buscar alternativas
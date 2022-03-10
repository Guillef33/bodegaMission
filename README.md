# Bodega Mission

El siguiente proyecto es un pequeño juego de preguntas y respuestas.

## Instalaciones previas

Una vez clonado el respositorio, hay que cambiarse a la rama **development** para ello usaremos el siguiente comando:

```
$ git checkout -b development origin/development
```

De esta manera se creará una rama llamada **development** en nuestra computadora, que tendrá toda la información que se encuentra en el repositorio externo correspondiente a dicha rama. 

Posteriormente, será necesario instalar las dependcias que se registraron en el package.json Para eso ejecutaremos el siguiente comando:
```
$ npm install
```

Antes de empezar a escribir código, es necesario consultar por si alguien más ha realizado algún cambio en la rama **development**, de esa manera estaremos seguros de que estamos trabajando con la última versión del repositorio. Para eso podemos ejecutar este comando:
```
$ git pull
```
Con este comando, nos traeremos todos los cambios que pueda tener el repositorio externo. 

Para subir nuestros cambios a github, bastará con estar logueados en nuestra terminal y ejecutar los siguientes comandos:

```
git add .
git commit -"un nuevo commit"
git push
```

**Nota:**
Solo cuando estemos 100% seguros, realizaremos un merge con la rama **main** Pero aún así, seguiremos manteniendo la rama **development** para futuras modificaciones o actualizaciones. 
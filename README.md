# ORDEN

1. Definir las rutas
2. Definir los verbos de cada ruta


/list 
- GET (Obtener todos las listas)
- POST (Crear nueva lista)

/list/:id
- GET (Obtener una lista en especifico)
- PUT (Editar lista)
- PATCH (Editar lista)
- DELETE (Eliminar lista)


3. Crear controladores

```javascript
    const getAllList = () => {
        resturn listDB
    }
```
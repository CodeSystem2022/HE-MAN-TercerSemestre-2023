#1.4 Creación de: test_catalogo_peliculas
#1.5 Comenzamos con las pruebas ingresando las otras clases, parte 1
from Dominio.Pelicula import pelicula
from servicios.Catalogo_Peliculas import catalogo_Peliculas as cp
opcion = None
while opcion != 4:
    try:
        print('opciones:')
        print('1.Agregar peliculas')
        print('2.Lista de Peliculas')
        print('3.Eliminar Catalogo de Peliculas')
        print('4.Salir')
        opcion = int(input("Digite una opcion de Menu"))
        if opcion == 1:
            nombre_pelicula = input("digite el nombre")
            Pelicula = pelicula(nombre_pelicula)
            cp.Agregar_Peliculas(Pelicula)
        elif opcion == 2:
            cp.Lista_Peliculas()
        elif opcion == 3:
            cp.Eliminar_Peliculas()
    except Exception as e:
        print(f'Ha ocurrido un error: {e}')
        opcion = None
    else:
        print('salimos del programa')
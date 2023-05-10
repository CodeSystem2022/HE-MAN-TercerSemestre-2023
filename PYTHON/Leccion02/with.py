# with se utiliza para garantizar que un recurso se limpie correctamente después de su uso
#  La idea detrás de with es que se asegura que se ejecute el método __exit__() del objeto, que es donde se realiza la limpieza.
with open('archivo.txt', 'r') as archivo:
    contenido = archivo.read()
    print(contenido)

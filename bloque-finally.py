try:
    archivo = open("mi_archivo.txt", "r")
    contenido = archivo.read()
    print(contenido)
except FileNotFoundError:
    print("El archivo no existe")
finally:# El bloque finally se se usa para garantizar que el archivo se cierre correctamente, sin importar si se produjo una excepción o no.
    archivo.close()
